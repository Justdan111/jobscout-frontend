import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "JobScout",
  description: "Discover, score, and apply to remote startup jobs.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Inter:wght@400;500;600&family=IBM+Plex+Mono:wght@500;600&display=swap" rel="stylesheet" />
      </head>
      <body>
        <div className="mx-auto max-w-3xl px-5">
          <nav className="flex items-center justify-between border-b border-line py-4">
            <Link href="/" className="font-display text-lg font-700 tracking-tight text-ink">
              Job<span className="text-signal">Scout</span>
            </Link>
            <div className="flex gap-5 text-[13px] text-muted">
              <Link href="/" className="hover:text-ink">Discover</Link>
              <Link href="/applications" className="hover:text-ink">Applications</Link>
            </div>
          </nav>
        </div>
        {children}
      </body>
    </html>
  );
}
