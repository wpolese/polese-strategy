import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: "APAC Market Entry & Growth Strategy | Polese Strategic Insights",
  description:
    "CEO-led boutique consulting firm delivering strategic clarity for companies entering and expanding in APAC markets. Market research, GTM strategy, competitive analysis, and partner identification.",
  keywords: ["APAC market entry", "market research", "GTM strategy", "APAC consulting", "strategic insights"],
  openGraph: {
    title: "Polese Strategic Insights",
    description: "Strategic Clarity for APAC Growth",
    type: "website",
    url: "https://polesestrategy.com",
    images: [
      {
        url: "https://polesestrategy.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Polese Strategic Insights — Strategic Clarity for APAC Growth",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Polese Strategic Insights",
    description: "Strategic Clarity for APAC Growth",
    images: ["https://polesestrategy.com/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body>{children}</body>
    </html>
  );
}
