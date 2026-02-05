import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "RoadGrip Tire Center",
  description: "Professional tire services",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
