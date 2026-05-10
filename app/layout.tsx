// app/layout.tsx
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Script from "next/script";

import { ThemeProvider } from "@/components/ThemeProvider";

const GA_ID = "G-5BZE4N1L9B";

export const metadata = {
  metadataBase: new URL("https://www.betons.ae"),
  title: {
    default:
      "Betons Business Services | Company Formation & Business Setup in Dubai, UAE",
    template: "%s | Betons Business Services",
  },
  description:
    "Betons Business Services is a Dubai-based consultancy specializing in company formation, business setup, document clearing, and free zone services across the UAE. Trusted by startups and enterprises.",
  keywords: [
    "Betons Business Services",
    "company formation in Dubai",
    "business setup in UAE",
    "document clearing Dubai",
    "free zone company setup UAE",
    "Dubai business consultancy",
    "trade license Dubai",
    "PRO services Dubai",
    "100% foreign ownership UAE",
    "start a business in Dubai",
    "UAE company registration",
    "business setup consultants Dubai",
    "visa processing UAE",
    "Dubai mainland company formation",
    "DMCC company setup",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title:
      "Betons Business Services | Company Formation & Business Setup in Dubai",
    description:
      "Expert business setup, company formation, document clearing & free zone services in Dubai, UAE. Start your business journey with Betons.",
    url: "https://www.betons.ae",
    siteName: "Betons Business Services",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Betons Business Services – Company Formation & Business Setup in Dubai, UAE",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Betons Business Services | Company Formation & Business Setup in Dubai",
    description:
      "Expert business setup, company formation, document clearing & free zone services in Dubai, UAE. Start your business journey with Betons.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
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

        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_ID}');
          `}
        </Script>
      </body>
    </html>
  );
}
