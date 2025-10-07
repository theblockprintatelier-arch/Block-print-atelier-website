import "./../globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "BPAC — Block Print Atelier Collective",
  description: "Custodian of authentic Indian block printing.",
  openGraph: {
    title: "BPAC — Block Print Atelier Collective",
    description: "Custodian of authentic Indian block printing.",
    url: "https://example.com",
    siteName: "BPAC",
    images: [{ url: "/og.jpg", width: 1200, height: 630 }],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang=\"en\">
      <body className=\"selection-indigo\">{children}</body>
    </html>
  );
}
