'use client';

export default function LandingPage() {
  return (
    <div style={styles.page}>
      <Fonts />
      <div style={styles.container}>
        <div style={styles.bracketTL} aria-hidden />
        <div style={styles.bracketTR} aria-hidden />
        <div style={styles.bracketBL} aria-hidden />
        <div style={styles.bracketBR} aria-hidden />
        <div style={styles.brandRow}>
          <MonogramS size={48} />
          <h1 style={styles.title}>SatoshiLock</h1>
        </div>
        <p style={styles.tagline}>
          Token vesting, done right. On any chain.
        </p>

        <div style={styles.cards}>
          <a href="https://sol.satoshilock.app" style={styles.card}>
            <div style={styles.cardIconBg('rgba(232, 123, 62, 0.12)')}>
              <div style={{...styles.cardIcon, background: 'linear-gradient(135deg, #E87B3E, #F4A460)'}} />
            </div>
            <h2 style={styles.cardTitle}>Solana</h2>
            <p style={styles.cardDescription}>Lock SOL and any SPL token with cliff vesting</p>
            <div style={styles.cardCta}>Launch App &rarr;</div>
          </a>

          <a href="https://evm.satoshilock.app" style={styles.card}>
            <div style={styles.cardIconBg('rgba(232, 123, 62, 0.12)')}>
              <div style={{...styles.cardIcon, background: 'linear-gradient(135deg, #E87B3E, #F4A460)'}} />
            </div>
            <h2 style={styles.cardTitle}>EVM</h2>
            <p style={styles.cardDescription}>Ethereum &middot; Base &middot; BNB Smart Chain</p>
            <div style={styles.cardCta}>Launch App &rarr;</div>
          </a>
        </div>


        <div style={styles.divider} />

        <div style={styles.contractsSection}>
          <div style={styles.contractsTitle}>Production contracts</div>
          <div style={styles.contractsList}>
            <ContractRow chain="Ethereum Mainnet" address="0xD40Febe77b4a9bdE56e13cf4067638b98A061925" href="https://etherscan.io/address/0xD40Febe77b4a9bdE56e13cf4067638b98A061925" />
            <ContractRow chain="Base Mainnet" address="0xbD1d35b574361632EC2cc1376dCD346741997474" href="https://basescan.org/address/0xbD1d35b574361632EC2cc1376dCD346741997474" />
            <ContractRow chain="BNB Smart Chain" address="0xbD1d35b574361632EC2cc1376dCD346741997474" href="https://bscscan.com/address/0xbD1d35b574361632EC2cc1376dCD346741997474" />
            <ContractRow chain="Solana Mainnet" address="CE7vQdyjXSEvPdeEdrmbEpM8hSPZi2L4MKAWi26kpZ2H" href="https://solscan.io/account/CE7vQdyjXSEvPdeEdrmbEpM8hSPZi2L4MKAWi26kpZ2H" />
          </div>
        </div>

        <div style={styles.footer}>
          <span style={styles.footerMeta}>Immutable &middot; Non-custodial &middot; Open source &middot; Zero protocol fees</span>
          <span>Built by <a href="https://x.com/AriantheChain" style={styles.footerLink} target="_blank" rel="noopener">@AriantheChain</a></span>
        </div>
      </div>
    </div>
  );
}

function ContractRow({ chain, address, href }) {
  const shortAddr = address.slice(0, 6) + '...' + address.slice(-4);
  return (
    <a href={href} target="_blank" rel="noopener" style={styles.contractRow}>
      <span style={styles.contractChain}>{chain}</span>
      <span style={styles.contractAddr}>{shortAddr}</span>
      <span style={styles.contractArrow}>&#8599;</span>
    </a>
  );
}

function MonogramS({ size = 72 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
      <rect x="2" y="2" width="28" height="28" rx="6" stroke="#E87B3E" strokeWidth="2.2" fill="none"/>
      <text x="16" y="24" textAnchor="middle" fontFamily='"Arial Black", sans-serif' fontSize="22" fontWeight="900" fontStyle="italic" fill="#E87B3E">S</text>
    </svg>
  );
}

function Fonts() {
  return (
    <style>{`
      @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');
      body { margin:0; background:#0B0C10; min-height:100vh; }
      * { box-sizing:border-box; }
      a { text-decoration:none; }
      a:focus-visible { outline: 2px solid #E87B3E; outline-offset: 4px; border-radius: 4px; }
      @media (max-width: 640px) { .sl-cards { grid-template-columns: 1fr !important; } }
    `}</style>
  );
}

const styles = {
  page: { minHeight: '100vh', background: '#0B0C10', color: '#ECEBE4', fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '80px 24px' },
  container: { width: '100%', maxWidth: 760, textAlign: 'center' },
  bracketTL: { position: 'absolute', top: 16, left: 16, width: 24, height: 24, borderTop: '3px solid #E87B3E', borderLeft: '3px solid #E87B3E', zIndex: 10 },
  bracketTR: { position: 'absolute', top: 16, right: 16, width: 24, height: 24, borderTop: '3px solid #E87B3E', borderRight: '3px solid #E87B3E', zIndex: 10 },
  bracketBL: { position: 'absolute', bottom: 16, left: 16, width: 24, height: 24, borderBottom: '3px solid #E87B3E', borderLeft: '3px solid #E87B3E', zIndex: 10 },
  bracketBR: { position: 'absolute', bottom: 16, right: 16, width: 24, height: 24, borderBottom: '3px solid #E87B3E', borderRight: '3px solid #E87B3E', zIndex: 10 },
  brandRow: { display: 'inline-flex', alignItems: 'center', gap: 14, marginBottom: 18, filter: 'drop-shadow(0 0 30px rgba(232, 123, 62, 0.25))' },
  title: { fontSize: 52, fontWeight: 800, letterSpacing: '-0.03em', margin: 0, background: 'linear-gradient(135deg, #E87B3E 0%, #F4A460 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' },
  tagline: { fontSize: 17, color: '#9B9A95', lineHeight: 1.6, margin: 0, marginBottom: 48 },
  cards: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, marginBottom: 32 },
  card: { background: '#16181E', border: '1px solid #2A2D36', borderRadius: 16, padding: '32px 20px', color: '#ECEBE4', transition: 'all 0.2s', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', cursor: 'pointer' },
  cardIconBg: (bg) => ({ width: 64, height: 64, background: bg, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 20 }),
  cardIcon: { width: 36, height: 36, borderRadius: '50%' },
  cardTitle: { fontSize: 22, fontWeight: 700, margin: 0, marginBottom: 8, letterSpacing: '-0.01em' },
  cardDescription: { fontSize: 13, color: '#9B9A95', lineHeight: 1.5, margin: 0, marginBottom: 20, minHeight: 40 },
  cardCta: { background: '#E87B3E', color: '#000', fontSize: 11, fontWeight: 900, padding: '11px 20px', borderRadius: 0, textTransform: 'uppercase', letterSpacing: '0.15em', fontFamily: 'JetBrains Mono, Consolas, monospace' },
  divider: { height: 1, background: '#2A2D36', margin: '24px 0' },
  contractsSection: { marginBottom: 20 },
  contractsTitle: { fontSize: 10, fontWeight: 600, color: '#6B6F78', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 14 },
  contractsList: { display: 'flex', flexDirection: 'column', gap: 2 },
  contractRow: { display: 'grid', gridTemplateColumns: '180px 1fr 24px', alignItems: 'center', gap: 16, padding: '10px 16px', borderRadius: 8, color: '#9B9A95', fontSize: 12, transition: 'background 0.15s' },
  contractChain: { fontWeight: 500, color: '#F4A460', textAlign: 'left' },
  contractAddr: { fontFamily: 'monospace', fontSize: 11, color: '#6B6F78', textAlign: 'center' },
  contractArrow: { color: '#6B6F78', fontSize: 12, textAlign: 'right' },
  footer: { display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12, fontSize: 12, color: '#6B6F78', marginTop: 24, flexWrap: 'wrap' },
  footerLink: { color: '#E87B3E', fontWeight: 600, transition: 'color 0.15s' },
  footerMeta: { color: '#6B6F78' },
};