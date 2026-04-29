// app/layout.tsx
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

import { ThemeProvider } from "@/components/ThemeProvider";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        <ThemeProvider defaultTheme="light">
          <Navigation />
          {children}

          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
