import { Cinzel, Manrope, JetBrains_Mono } from "next/font/google";

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["500", "700", "900"],
  variable: "--font-cinzel",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["300", "500", "700", "800"],
  variable: "--font-manrope",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata = {
  title: "SatoshiLock",
  description: "Immutable, non-custodial token vesting on Solana, Ethereum, Base, and BNB Smart Chain. Open source. Zero protocol fees.",
  openGraph: {
    title: "SatoshiLock",
    description: "Lock tokens across Solana, Ethereum, Base, and BSC with customizable cliff and vesting schedules.",
    url: "https://satoshilock.app",
    siteName: "SatoshiLock",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SatoshiLock",
    description: "Multi-chain token vesting. Immutable. Open source. Zero fees.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${cinzel.variable} ${manrope.variable} ${jetbrains.variable}`}>
      <body>{children}</body>
    </html>
  );
}
