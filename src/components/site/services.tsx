import {
  Gauge,
  Megaphone,
  Paintbrush,
  Search,
  Share2,
  ShoppingBag,
  type LucideIcon,
} from "lucide-react";
import { BlurFade } from "@/components/ui/blur-fade";
import { SectionHeading } from "@/components/site/section-heading";
import { profile } from "@/data/profile";

const icons: Record<string, LucideIcon> = {
  ShoppingBag,
  Paintbrush,
  Search,
  Megaphone,
  Gauge,
  Share2,
};

export function Services() {
  return (
    <section id="services" className="scroll-mt-24 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Services"
          title="What I can build for you"
          description="From a WordPress site or Shopify store to the SEO and ad campaigns that bring it customers, I cover the full journey from build to growth."
        />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {profile.services.map((service, i) => {
            const Icon = icons[service.icon] ?? ShoppingBag;
            return (
              <BlurFade key={service.title} inView delay={i * 0.08} className="h-full">
                <article className="group flex h-full flex-col gap-4 rounded-xl border border-border bg-card/60 p-6 transition-colors duration-200 hover:border-primary/40 hover:bg-card">
                  <span className="inline-flex size-11 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors duration-200 group-hover:bg-primary group-hover:text-primary-foreground">
                    <Icon className="size-5" />
                  </span>
                  <h3 className="text-lg font-semibold">{service.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {service.description}
                  </p>
                </article>
              </BlurFade>
            );
          })}
        </div>
      </div>
    </section>
  );
}
