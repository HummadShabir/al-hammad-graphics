import { Poppins, Space_Grotesk } from "next/font/google";
import "./globals.css";

const base = process.env.NEXT_PUBLIC_BASE_PATH || "";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

const grotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "700"],
  variable: "--font-head",
  display: "swap",
});

export const metadata = {
  title: "Al-Hammad Graphics | Hammad Shabir - Graphic Designer",
  description:
    "Al-Hammad Graphics — portfolio of Hammad Shabir, a graphic designer with 4.5+ years of printing-press experience. Logo design, branding, social media posts, flex banners, visiting cards, wedding cards and packaging.",
  keywords: [
    "Al-Hammad Graphics",
    "Hammad Shabir",
    "graphic designer Pakistan",
    "logo design",
    "flex banner design",
    "social media post design",
    "visiting card design",
    "wedding card design",
  ],
  openGraph: {
    title: "Al-Hammad Graphics | Graphic Designer",
    description:
      "Logos, branding, social media and print-ready designs by Hammad Shabir.",
    type: "website",
  },
};

export const viewport = {
  themeColor: "#0b0b12",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${poppins.variable} ${grotesk.variable}`}>
      <head>
        <link rel="preconnect" href="https://images.unsplash.com" />
        <link rel="icon" type="image/png" href={`${base}/favicon.png`} />
        <link rel="icon" type="image/png" sizes="192x192" href={`${base}/icon-192.png`} />
        <link rel="apple-touch-icon" href={`${base}/apple-touch-icon.png`} />
      </head>
      <body>{children}</body>
    </html>
  );
}
