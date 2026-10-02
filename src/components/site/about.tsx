import { CheckCircle2 } from "lucide-react";
import { BlurFade } from "@/components/ui/blur-fade";
import { Badge } from "@/components/ui/badge";
import { SectionHeading } from "@/components/site/section-heading";
import { profile } from "@/data/profile";

const highlights = [
  "Responsive on every screen size",
  "Optimised images and page speed",
  "Clean admin that clients can update themselves",
  "SEO-ready structure and metadata",
];

export function About() {
  return (
    <section
      id="about"
      className="scroll-mt-24 border-t border-border bg-card/30 py-24 sm:py-32"
    >
      <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
        <div>
          <SectionHeading
            eyebrow="About"
            title="A developer who ships finished sites, not half-built themes."
          />
          <BlurFade
            inView
            delay={0.1}
            className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground sm:text-lg"
          >
            {profile.about.map((paragraph) => (
              <p key={paragraph.slice(0, 24)}>{paragraph}</p>
            ))}
          </BlurFade>
          <BlurFade inView delay={0.2}>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {highlights.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-foreground/90">
                  <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" />
                  {item}
                </li>
              ))}
            </ul>
          </BlurFade>
        </div>

        <BlurFade inView delay={0.15} direction="left">
          <div className="rounded-2xl border border-border bg-card p-6 sm:p-8">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Toolkit
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {profile.skills.map((skill) => (
                <Badge
                  key={skill}
                  variant="secondary"
                  className="h-auto rounded-md px-2.5 py-1 text-xs font-medium"
                >
                  {skill}
                </Badge>
              ))}
            </div>
            <dl className="mt-8 grid grid-cols-3 gap-4 border-t border-border pt-6">
              {profile.stats.map((stat) => (
                <div key={stat.label} className="flex flex-col">
                  <dd className="order-1 font-heading text-2xl font-bold">
                    {stat.value}
                    <span className="text-primary">{stat.suffix}</span>
                  </dd>
                  <dt className="order-2 mt-1 text-xs text-muted-foreground">{stat.label}</dt>
                </div>
              ))}
            </dl>
          </div>
        </BlurFade>
      </div>
    </section>
  );
}
