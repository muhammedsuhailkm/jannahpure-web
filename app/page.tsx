// app/page.tsx
import Hero from "@/components/Hero";
import Portfolio from "@/components/portfolio";
import Contact from "@/components/contact";

export default function Page() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Portfolio />
      <Contact />
    </main>
  );
}
