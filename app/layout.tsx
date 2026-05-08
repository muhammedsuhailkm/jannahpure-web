// app/layout.tsx
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

import { ThemeProvider } from "@/components/ThemeProvider";

export const metadata = {
  title: "Betons – Business Services",
  description:
    "Betons Business Services is a UAE-based consultancy delivering professional solutions for entrepreneurs, startups, and established companies.",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
};

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
