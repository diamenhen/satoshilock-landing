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
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}