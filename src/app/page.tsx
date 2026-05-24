import { Footer } from "@/components/layout/Footer";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { Hero } from "@/components/sections/Hero";
import { Philosophy } from "@/components/sections/Philosophy";
import { Projects } from "@/components/sections/Projects";

export default function Home() {
  return (
    <div className="min-h-screen overflow-hidden">
      <SiteHeader />
      <main id="main">
        <Hero />
        <Projects />
        <Philosophy />
      </main>
      <Footer />
    </div>
  );
}
