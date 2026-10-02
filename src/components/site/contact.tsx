import { ArrowUpRight, Mail, MessageCircle, Phone } from "lucide-react";
import { BlurFade } from "@/components/ui/blur-fade";
import { BorderBeam } from "@/components/ui/border-beam";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { profile } from "@/data/profile";

export function Contact() {
  const whatsappHref = profile.whatsapp ? `https://wa.me/${profile.whatsapp}` : null;
  const socialLinks = Object.entries(profile.socials).filter(([, href]) => href);

  return (
    <section id="contact" className="scroll-mt-24 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <BlurFade inView>
          <div className="relative overflow-hidden rounded-3xl border border-border bg-card px-6 py-14 text-center sm:px-12 sm:py-20">
            <BorderBeam
              size={220}
              duration={10}
              colorFrom="oklch(0.79 0.21 150)"
              colorTo="oklch(0.7 0.15 220)"
            />
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Contact
            </p>
            <h2 className="mx-auto mt-4 max-w-2xl text-3xl font-extrabold sm:text-4xl lg:text-5xl">
              Have a store or website in mind? Let&apos;s build it.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base text-muted-foreground sm:text-lg">
              Send a short brief and I&apos;ll reply with a plan, a timeline and a quote.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <a
                href={`mailto:${profile.email}`}
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "h-12 rounded-full px-7 text-sm font-semibold"
                )}
              >
                <Mail className="size-4" />
                {profile.email}
              </a>
              {whatsappHref ? (
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noreferrer"
                  className={cn(
                    buttonVariants({ variant: "outline", size: "lg" }),
                    "h-12 rounded-full px-7 text-sm font-semibold"
                  )}
                >
                  <MessageCircle className="size-4" />
                  WhatsApp
                </a>
              ) : null}
              {profile.phone ? (
                <a
                  href={profile.phoneHref}
                  className={cn(
                    buttonVariants({ variant: "outline", size: "lg" }),
                    "h-12 rounded-full px-7 text-sm font-semibold"
                  )}
                >
                  <Phone className="size-4" />
                  {profile.phone}
                </a>
              ) : null}
            </div>
            {socialLinks.length > 0 ? (
              <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm">
                {socialLinks.map(([name, href]) => (
                  <a
                    key={name}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 capitalize text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {name}
                    <ArrowUpRight className="size-3.5" />
                  </a>
                ))}
              </div>
            ) : null}
          </div>
        </BlurFade>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 text-sm text-muted-foreground sm:flex-row sm:px-6">
        <p>
          &copy; {new Date().getFullYear()} {profile.name}. All rights reserved.
        </p>
        <p className="text-center font-mono text-xs uppercase tracking-[0.18em] sm:text-right">
          {profile.roleShort}
        </p>
      </div>
    </footer>
  );
}
