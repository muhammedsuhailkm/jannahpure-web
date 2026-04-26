// app/layout.tsx
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ServicesOverview from "@/components/ServicesOverview";
import SupportSection from "@/components/SupportSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import { ThemeProvider } from "@/components/ThemeProvider";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider defaultTheme="light">
          <Navigation />
          {children}
          <ServicesOverview />
          <SupportSection />
          <WhyChooseUs />
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
