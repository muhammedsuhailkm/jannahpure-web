// app/not-found.tsx
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-light mb-4">404</h1>
        <p className="text-xl text-muted-foreground mb-8">Page not found</p>
        <Link
          href="/"
          className="text-sm uppercase tracking-widest hover:text-muted-foreground transition-colors"
        >
          Return Home
        </Link>
      </div>
    </main>
  );
}
