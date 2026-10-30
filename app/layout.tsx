import type { Metadata } from "next";
import "./globals.css";
import SiteShell from "@/components/SiteShell";

export const metadata: Metadata = {
  title: { default: "Karki Bandhu Construction | Built on Trust", template: "%s | Karki Bandhu Construction" },
  description: "Thoughtful design, precise engineering, and enduring construction. Explore the work and services of Karki Bandhu Construction Pvt. Ltd.",
  metadataBase: new URL("https://example.com"),
  openGraph: { title: "Karki Bandhu Construction", description: "Built on trust. Designed to last.", type: "website" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><SiteShell>{children}</SiteShell></body></html>;
}
