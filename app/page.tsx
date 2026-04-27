// app/page.tsx
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import ServicesOverview from "@/components/ServicesOverview";
import WhyChooseUs from "@/components/WhyChooseUs";
import SupportSection from "@/components/SupportSection";

export default function Page() {
  return (
    <main className="min-h-screen">
      <Hero />
      <AboutSection />
      <ServicesOverview />
      <WhyChooseUs />
      <SupportSection />
    </main>
  );
}
