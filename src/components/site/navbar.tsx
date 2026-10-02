"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { profile } from "@/data/profile";

const links = [
  { href: "#projects", label: "Projects" },
  { href: "#services", label: "Services" },
  { href: "#experience", label: "Experience" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed inset-x-4 top-4 z-50"
    >
      <nav
        aria-label="Primary"
        className={cn(
          "mx-auto flex h-14 max-w-6xl items-center justify-between rounded-full border px-4 transition-colors duration-200 sm:px-6",
          scrolled
            ? "border-border bg-background/80 shadow-lg shadow-black/20 backdrop-blur-md"
            : "border-transparent bg-transparent"
        )}
      >
        <Link href="#home" className="font-heading text-lg font-bold tracking-tight">
          {profile.firstName}
          <span className="text-primary">.</span>
        </Link>

        <ul className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="rounded-full px-3.5 py-2 text-sm font-medium text-muted-foreground transition-colors duration-200 hover:bg-muted hover:text-foreground"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <Link
            href="#contact"
            className={cn(
              buttonVariants({ size: "sm" }),
              "hidden h-9 rounded-full px-4 text-sm font-semibold md:inline-flex"
            )}
          >
            Hire me
          </Link>

          <Sheet>
            <SheetTrigger
              aria-label="Open menu"
              className={cn(
                buttonVariants({ variant: "ghost", size: "icon" }),
                "size-10 rounded-full md:hidden"
              )}
            >
              <Menu className="size-5" />
            </SheetTrigger>
            <SheetContent side="right" className="w-[82vw] max-w-xs">
              <SheetHeader>
                <SheetTitle className="font-heading text-lg">
                  {profile.firstName}
                  <span className="text-primary">.</span>
                </SheetTitle>
              </SheetHeader>
              <ul className="flex flex-col gap-1 px-2">
                {links.map((link) => (
                  <li key={link.href}>
                    <SheetClose
                      render={<Link href={link.href} />}
                      className="block rounded-lg px-3 py-3 text-base font-medium text-foreground transition-colors hover:bg-muted"
                    >
                      {link.label}
                    </SheetClose>
                  </li>
                ))}
              </ul>
              <div className="mt-auto p-4">
                <SheetClose
                  render={<Link href="#contact" />}
                  className={cn(buttonVariants(), "h-11 w-full rounded-full text-sm font-semibold")}
                >
                  Hire me
                </SheetClose>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </motion.header>
  );
}
