import { AboutSection } from "@/components/home/AboutSection";
import { ContactSection } from "@/components/home/ContactSection";
import { Hero } from "@/components/home/Hero";
import { LabsSection } from "@/components/home/LabsSection";
import { ServicesSection } from "@/components/home/ServicesSection";

export function PublicHome() {
  return (
    <main id="content">
      <Hero />
      <LabsSection />
      <ServicesSection />
      <AboutSection />
      <ContactSection />
    </main>
  );
}
