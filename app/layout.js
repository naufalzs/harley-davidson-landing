import "./_css/globals.css";
import { Bebas_Neue, Oswald } from "next/font/google";
import localfont from "next/font/local";

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-bebas-neue",
});

const oswald = Oswald({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-oswald",
});

const compactaBT = localfont({
  src: "./_fonts/CompactaBT.ttf",
  display: "swap",
  variable: "--font-compacta-bt",
});

export const metadata = {
  title: "Harley Landing",
  description: "Example Harley Davidson Landing Page",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning={true}
        className={`${bebasNeue.variable} ${oswald.variable} ${compactaBT.variable} ${oswald.className}`}
      >
        {children}
      </body>
    </html>
  );
}
