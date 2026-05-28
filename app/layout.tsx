import type { Metadata } from "next";
import { Fraunces, Instrument_Sans, Hanken_Grotesk } from "next/font/google";
import localFont from "next/font/local";
import UnicornBackground from "@/components/UnicornBackground";
import "./globals.css";

// Display / headings — quirky optical serif, light weights.
// style includes "italic" so <em> uses the real italic face, not a fake oblique.
const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  variable: "--font-fraunces",
  display: "swap",
});

// Body / UI — humanist sans (Google's lightest available weight is 400)
const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-instrument-sans",
  display: "swap",
});

// Hero base — ultra-thin sans (Instrument Sans has no sub-400 weight)
const hankenGrotesk = Hanken_Grotesk({
  subsets: ["latin"],
  weight: ["200", "300", "400"],
  variable: "--font-hanken",
  display: "swap",
});

// Labels / metadata — characterful mono (self-hosted; not on Google Fonts)
const departureMono = localFont({
  src: "../public/fonts/DepartureMono-Regular.woff2",
  variable: "--font-departure-mono",
  display: "swap",
});

const siteUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "MistryDesign · Websites for small businesses in Princeton, NJ",
  description:
    "Custom websites for restaurants, shops, and service businesses in the Princeton area. No templates. No drag-and-drop.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
      <body
        className={`${fraunces.variable} ${instrumentSans.variable} ${hankenGrotesk.variable} ${departureMono.variable} min-h-full bg-sand text-ink antialiased selection:bg-ink selection:text-paper`}
      >
        {/* Animated WebGL background (fixed, deepest layer) */}
        <UnicornBackground />
        {/* Warm scrim — lightened so the image breathes more */}
        <div
          aria-hidden
          className="pointer-events-none fixed inset-0 bg-sand/40"
          style={{ zIndex: -10 }}
        />
        {children}
      </body>
    </html>
  );
}
