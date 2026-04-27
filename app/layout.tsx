import type { Metadata } from "next";
import "./globals.scss";

export const metadata: Metadata = {
  metadataBase: new URL("https://georgian-atelier.travel"),
  title: {
    default: "Georgian Atelier Travel | Luxury Private Tours in Georgia",
    template: "%s | Georgian Atelier Travel"
  },
  description:
    "Private luxury tours, wine journeys, mountain escapes and tailor-made travel experiences across Georgia with expert local concierges.",
  keywords: [
    "luxury Georgia tours",
    "private tours Georgia",
    "Kakheti wine tour",
    "Kazbegi luxury travel",
    "Svaneti private tour",
    "Tbilisi concierge travel"
  ],
  openGraph: {
    title: "Discover Georgia in Absolute Style",
    description:
      "Premium private journeys through Tbilisi, Kazbegi, Kakheti, Svaneti, Batumi and beyond.",
    url: "https://georgian-atelier.travel",
    siteName: "Georgian Atelier Travel",
    images: [
      {
        url: "https://images.unsplash.com/photo-1565008576549-57569a49371d?auto=format&fit=crop&w=1600&q=85",
        width: 1600,
        height: 900,
        alt: "Caucasus mountains in Georgia"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Georgian Atelier Travel",
    description: "Private luxury tours through Georgia.",
    images: ["https://images.unsplash.com/photo-1565008576549-57569a49371d?auto=format&fit=crop&w=1600&q=85"]
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
