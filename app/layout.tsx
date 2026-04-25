// app/layout.tsx
import "./globals.css";
import Navigation from "@/components/Navigation";
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
        </ThemeProvider>
      </body>
    </html>
  );
}
