import type { Metadata } from "next";
import { Inter, Parisienne, Playfair_Display } from "next/font/google";
import { BackgroundMusic } from "@/components/audio/BackgroundMusic";
import { Navigation } from "@/components/invitation/Navigation";
import { couple, eventDetails } from "@/data/invitation";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const parisienne = Parisienne({
  variable: "--font-parisienne",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export const metadata: Metadata = {
  title: `${couple.full} — Baby Shower`,
  description: `You're invited to celebrate ${couple.full}'s baby shower — ${eventDetails.day}, ${eventDetails.date} at ${eventDetails.venue}.`,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${inter.variable} ${parisienne.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full bg-ivory font-body text-brown">
        <BackgroundMusic>
          <div className="grain-overlay" />
          <Navigation />
          <main>{children}</main>
        </BackgroundMusic>
      </body>
    </html>
  );
}
