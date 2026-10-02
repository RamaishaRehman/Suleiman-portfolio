import { Navbar } from "@/components/site/navbar";
import { Hero } from "@/components/site/hero";
import { TechMarquee } from "@/components/site/tech-marquee";
import { Projects } from "@/components/site/projects";
import { Services } from "@/components/site/services";
import { About } from "@/components/site/about";
import { Contact, Footer } from "@/components/site/contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <TechMarquee />
        <Projects />
        <Services />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
