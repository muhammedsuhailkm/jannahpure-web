// app/not-found/page.tsx
import { redirect } from "next/navigation";

// Next.js uses app/not-found.tsx for 404 pages, not app/not-found/page.tsx
// This redirect ensures /not-found URL goes to 404
export default function NotFoundPage() {
  redirect("/");
}
