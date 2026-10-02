import { Marquee } from "@/components/ui/marquee";
import { profile } from "@/data/profile";

export function TechMarquee() {
  return (
    <section aria-label="Skills and tools" className="border-y border-border bg-card/40 py-6">
      <Marquee pauseOnHover className="[--duration:45s] [--gap:3rem]">
        {profile.skills.map((skill) => (
          <span
            key={skill}
            className="inline-flex items-center gap-3 font-heading text-sm font-semibold uppercase tracking-[0.18em] text-muted-foreground"
          >
            <span className="size-1.5 rounded-full bg-primary" aria-hidden />
            {skill}
          </span>
        ))}
      </Marquee>
    </section>
  );
}
