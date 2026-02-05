import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://www.roadgriptirecenter.com";

export const metadata: Metadata = {
  title: {
    default: "RoadGrip Tire Center | Professional Tire Sales & Services",
    template: "%s | RoadGrip Tire Center",
  },
  description:
    "RoadGrip Tire Center offers expert tire sales, installation, rotation, wheel alignment, flat repair, and seasonal changeover. Trusted brands at competitive prices. Call (555) 742-8473.",
  keywords: [
    "tire shop",
    "tire sales",
    "tire installation",
    "wheel alignment",
    "tire rotation",
    "flat tire repair",
    "seasonal tire changeover",
    "RoadGrip Tire Center",
    "auto service",
    "tire center near me",
  ],
  authors: [{ name: "RoadGrip Tire Center" }],
  creator: "RoadGrip Tire Center",
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "RoadGrip Tire Center",
    title: "RoadGrip Tire Center | Professional Tire Sales & Services",
    description:
      "Expert tire sales, installation, rotation, alignment, flat repair & seasonal changeover. Trusted brands, competitive prices.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "RoadGrip Tire Center - Professional Tire Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "RoadGrip Tire Center | Professional Tire Sales & Services",
    description:
      "Expert tire sales, installation, rotation, alignment, flat repair & seasonal changeover.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${siteUrl}/#localbusiness`,
  name: "RoadGrip Tire Center",
  description:
    "Professional tire sales, installation, rotation, wheel alignment, flat repair, and seasonal changeover services.",
  url: siteUrl,
  telephone: "+1-555-742-8473",
  email: "info@roadgriptirecenter.com",
  image: `${siteUrl}/og-image.jpg`,
  logo: `${siteUrl}/logo.png`,
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: "1247 Industrial Blvd",
    addressLocality: "Springfield",
    addressRegion: "IL",
    postalCode: "62701",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 39.7817,
    longitude: -89.6501,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "07:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "08:00",
      closes: "16:00",
    },
  ],
  sameAs: [
    "https://www.facebook.com/roadgriptirecenter",
    "https://www.instagram.com/roadgriptirecenter",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Tire Services",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Tire Sales" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Tire Installation" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Tire Rotation" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Wheel Alignment" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Flat Tire Repair" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Seasonal Tire Changeover" } },
    ],
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    reviewCount: "347",
    bestRating: "5",
    worstRating: "1",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-brand-950 text-brand-100 font-sans">{children}</body>
    </html>
  );
}
