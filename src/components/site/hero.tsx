"use client";

import Link from "next/link";
import { ArrowDown, ArrowRight, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { Spotlight } from "@/components/ui/spotlight";
import { DotPattern } from "@/components/ui/dot-pattern";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { NumberTicker } from "@/components/ui/number-ticker";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { profile } from "@/data/profile";

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.15 + i * 0.12, duration: 0.5, ease: "easeOut" as const },
  }),
};

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] items-center overflow-hidden pt-28 pb-20"
    >
      <Spotlight className="-top-40 left-0 md:-top-20 md:left-60" fill="oklch(0.79 0.21 150)" />
      <DotPattern
        width={24}
        height={24}
        cr={1}
        className="text-foreground/20 [mask-image:radial-gradient(60%_60%_at_50%_40%,white,transparent)]"
      />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-4 sm:px-6">
        <motion.div
          custom={0}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1.5 text-xs font-medium text-muted-foreground backdrop-blur"
        >
          <span className="relative flex size-2">
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary opacity-75" />
            <span className="relative inline-flex size-2 rounded-full bg-primary" />
          </span>
          {profile.availability}
        </motion.div>

        <motion.h1
          custom={1}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="max-w-4xl text-5xl font-black leading-[1.05] sm:text-6xl lg:text-7xl"
        >
          Hi, I&apos;m {profile.firstName}.
          <br />
          <span className="text-primary">
            {profile.roleShort.split("E-Commerce").map((part, i, arr) => (
              <span key={i}>
                {part}
                {i < arr.length - 1 ? (
                  <span className="whitespace-nowrap">E-Commerce</span>
                ) : null}
              </span>
            ))}
          </span>
        </motion.h1>

        <TextGenerateEffect
          words={profile.tagline}
          duration={0.6}
          className="mt-6 max-w-2xl text-lg font-normal sm:text-xl [&_span]:text-muted-foreground"
        />

        <motion.div
          custom={3}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <ShimmerButton
            background="oklch(0.79 0.21 150)"
            shimmerColor="#ffffff"
            className="h-12 px-7 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/20"
            onClick={() =>
              document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
            }
          >
            View my work
            <ArrowRight className="ml-2 size-4" />
          </ShimmerButton>
          <Link
            href="#contact"
            className={cn(
              buttonVariants({ variant: "outline", size: "lg" }),
              "h-12 rounded-full px-7 text-sm font-semibold"
            )}
          >
            Get in touch
          </Link>
          <span className="inline-flex items-center gap-1.5 text-sm text-muted-foreground">
            <MapPin className="size-4" />
            {profile.location}
          </span>
        </motion.div>

        <motion.dl
          custom={4}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="mt-16 grid max-w-2xl grid-cols-3 gap-6 border-t border-border pt-8"
        >
          {profile.stats.map((stat, i) => (
            <div key={stat.label} className="flex flex-col">
              <dd className="order-1 font-heading text-3xl font-bold sm:text-4xl">
                <NumberTicker value={stat.value} delay={0.6 + i * 0.1} className="text-foreground" />
                <span className="text-primary">{stat.suffix}</span>
              </dd>
              <dt className="order-2 mt-1 text-xs font-medium text-muted-foreground sm:text-sm">
                {stat.label}
              </dt>
            </div>
          ))}
        </motion.dl>
      </div>

      <a
        href="#projects"
        aria-label="Scroll to projects"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 text-muted-foreground transition-colors hover:text-foreground md:block"
      >
        <ArrowDown className="size-5 animate-bounce" />
      </a>
    </section>
  );
}
