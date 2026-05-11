// app/layout.tsx
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Script from "next/script";

import { ThemeProvider } from "@/components/ThemeProvider";

const GA_ID = "G-5BZE4N1L9B";

export const metadata = {
  metadataBase: new URL("https://www.jannahpure.com"),
  title: {
    default:
      "جنة بيور | أنظمة تنقية المياه المركزية الرائدة في قطر",
    template: "%s | جنة بيور",
  },
  description:
    "تقدم جنة بيور أنظمة تنقية مياه مركزية خبيرة، وخدمات صيانة، وحلول تنظيف الخزانات للقطاعات السكنية والتجارية في قطر.",
  keywords: [
    "جنة بيور",
    "تنقية المياه في قطر",
    "أنظمة المياه المركزية",
    "صيانة الفلاتر",
    "تنظيف خزانات المياه",
    "فلاتر مياه قطر",
    "محطة تنقية مياه",
    "فلاتر جامبو",
    "فلاتر مطابخ",
    "تعقيم المياه قطر"
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title:
      "جنة بيور | أنظمة تنقية المياه المركزية في قطر",
    description:
      "المزود الرائد في قطر لأنظمة تنقية المياه المركزية والصيانة وتنظيف الخزانات.",
    url: "https://www.jannahpure.com",
    siteName: "جنة بيور",
    locale: "ar_QA",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "جنة بيور – أنظمة تنقية المياه المركزية في قطر",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "جنة بيور | أنظمة تنقية المياه المركزية في قطر",
    description:
      "المزود الرائد في قطر لأنظمة تنقية المياه المركزية والصيانة وتنظيف الخزانات.",
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
    <html lang="ar" dir="rtl">
      <body className="antialiased font-sans">
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
