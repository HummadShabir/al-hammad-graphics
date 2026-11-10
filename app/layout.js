import { Poppins, Space_Grotesk } from "next/font/google";
import "./globals.css";

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
  title: "Hammad Graphics | Hammad Shabir - Graphic Designer",
  description:
    "Hammad Graphics — portfolio of Hammad Shabir, a graphic designer with 4.5+ years of printing-press experience. Logo design, branding, social media posts, flex banners, visiting cards, wedding cards and packaging.",
  keywords: [
    "Hammad Graphics",
    "Hammad Shabir",
    "graphic designer Pakistan",
    "logo design",
    "flex banner design",
    "social media post design",
    "visiting card design",
    "wedding card design",
  ],
  openGraph: {
    title: "Hammad Graphics | Graphic Designer",
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
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><defs><linearGradient id='g' x1='0' y1='0' x2='1' y2='1'><stop offset='0' stop-color='%23ff7a18'/><stop offset='1' stop-color='%23a020f0'/></linearGradient></defs><rect width='100' height='100' rx='24' fill='url(%23g)'/><text x='50' y='68' font-size='54' font-family='Arial' font-weight='bold' fill='white' text-anchor='middle'>H</text></svg>"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
