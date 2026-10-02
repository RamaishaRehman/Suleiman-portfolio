import { Award, GraduationCap } from "lucide-react";
import { BlurFade } from "@/components/ui/blur-fade";
import { SectionHeading } from "@/components/site/section-heading";
import { profile } from "@/data/profile";

export function Experience() {
  return (
    <section
      id="experience"
      className="scroll-mt-24 border-t border-border bg-card/30 py-24 sm:py-32"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Experience"
          title="Where I have worked"
          description="Freelance client work alongside in-house marketing roles, from campaign execution to teaching digital marketing."
        />

        <div className="mt-14 grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
          <ol className="relative border-l border-border pl-8">
            {profile.experience.map((job, i) => (
              <li key={`${job.company}-${job.period}`} className="relative pb-10 last:pb-0">
                <span
                  aria-hidden
                  className="absolute -left-[2.3rem] top-1.5 flex size-5 items-center justify-center rounded-full border border-border bg-background"
                >
                  <span className="size-2 rounded-full bg-primary" />
                </span>
                <BlurFade inView delay={i * 0.08}>
                  <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                    <h3 className="text-lg font-semibold">
                      {job.role}
                      <span className="text-muted-foreground"> · {job.company}</span>
                    </h3>
                    <p className="font-mono text-xs uppercase tracking-[0.15em] text-muted-foreground">
                      {job.period} · {job.mode}
                    </p>
                  </div>
                  <ul className="mt-3 space-y-2 text-sm leading-relaxed text-muted-foreground">
                    {job.points.map((point) => (
                      <li key={point} className="flex gap-2.5">
                        <span aria-hidden className="mt-2.5 size-1 shrink-0 rounded-full bg-primary/70" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </BlurFade>
              </li>
            ))}
          </ol>

          <div className="space-y-6">
            <BlurFade inView delay={0.1} direction="left">
              <div className="rounded-2xl border border-border bg-card p-6 sm:p-7">
                <p className="flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                  <GraduationCap className="size-4" />
                  Education
                </p>
                {profile.education.map((item) => (
                  <div key={item.school} className="mt-4">
                    <h3 className="text-base font-semibold">{item.degree}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{item.school}</p>
                    <p className="mt-1 font-mono text-xs uppercase tracking-[0.15em] text-muted-foreground">
                      {item.period}
                    </p>
                  </div>
                ))}
              </div>
            </BlurFade>

            <BlurFade inView delay={0.2} direction="left">
              <div className="rounded-2xl border border-border bg-card p-6 sm:p-7">
                <p className="flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                  <Award className="size-4" />
                  Certifications
                </p>
                <ul className="mt-4 divide-y divide-border">
                  {profile.certifications.map((cert) => (
                    <li key={cert.title} className="py-3 first:pt-0 last:pb-0">
                      <p className="text-sm font-medium">{cert.title}</p>
                      <p className="mt-0.5 text-xs text-muted-foreground">{cert.issuer}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </BlurFade>
          </div>
        </div>
      </div>
    </section>
  );
}
