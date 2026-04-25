'use client';

export default function LandingPage() {
  return (
    <div style={styles.page}>
      <Fonts />
      <div style={styles.container}>

        <div style={styles.brandRow}>
          <MonogramS size={32} />
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
            <div style={styles.cardCta}>Launch app</div>
          </a>

          <a href="https://evm.satoshilock.app" style={styles.card}>
            <div style={styles.cardIconBg('rgba(232, 123, 62, 0.12)')}>
              <div style={{...styles.cardIcon, background: 'linear-gradient(135deg, #E87B3E, #F4A460)'}} />
            </div>
            <h2 style={styles.cardTitle}>EVM</h2>
            <p style={styles.cardDescription}>Ethereum &middot; Base &middot; BNB Smart Chain</p>
            <div style={styles.cardCta}>Launch app</div>
          </a>
        </div>




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

  brandRow: { display: 'inline-flex', alignItems: 'center', gap: 10, marginBottom: 12 },
  title: { fontSize: 24, fontWeight: 500, letterSpacing: '-0.01em', margin: 0, color: '#ECEBE4' },
  tagline: { fontSize: 15, color: '#9B9A95', lineHeight: 1.5, margin: 0, marginBottom: 36, fontWeight: 400 },
  cards: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, marginBottom: 32 },
  card: { background: '#16181E', border: '1px solid #2A2D36', borderRadius: 16, padding: '32px 20px', color: '#ECEBE4', transition: 'all 0.2s', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', cursor: 'pointer' },
  cardIconBg: (bg) => ({ width: 64, height: 64, background: bg, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 20 }),
  cardIcon: { width: 36, height: 36, borderRadius: '50%' },
  cardTitle: { fontSize: 22, fontWeight: 700, margin: 0, marginBottom: 8, letterSpacing: '-0.01em' },
  cardDescription: { fontSize: 13, color: '#9B9A95', lineHeight: 1.5, margin: 0, marginBottom: 20, minHeight: 40 },
  cardCta: { background: '#E87B3E', color: '#0B0C10', fontSize: 13, fontWeight: 500, padding: '9px 20px', borderRadius: 999, fontFamily: 'inherit' },

  contractsSection: { marginBottom: 20, textAlign: 'left' },
  contractsTitle: { fontSize: 10, fontWeight: 600, color: '#6B6F78', letterSpacing: '0.06em', marginBottom: 14 },
  contractsList: { display: 'flex', flexDirection: 'column', gap: 2 },
  contractRow: { display: 'grid', gridTemplateColumns: '180px 1fr', alignItems: 'center', gap: 16, padding: '10px 0', borderRadius: 8, color: '#9B9A95', fontSize: 12, transition: 'background 0.15s' },
  contractChain: { fontWeight: 500, color: '#F4A460', textAlign: 'left' },
  contractAddr: { fontFamily: 'monospace', fontSize: 11, color: '#6B6F78', textAlign: 'right' },

  footer: { display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12, fontSize: 12, color: '#6B6F78', marginTop: 24, flexWrap: 'wrap' },
  footerLink: { color: '#E87B3E', fontWeight: 600, transition: 'color 0.15s' },
  footerMeta: { color: '#6B6F78' },
};