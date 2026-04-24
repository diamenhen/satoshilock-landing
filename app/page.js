'use client';

export default function LandingPage() {
  return (
    <div style={styles.page}>
      <Fonts />
      <div style={styles.container}>
        <div style={styles.logo}>
          <LockLogo size={80} />
        </div>

        <h1 style={styles.title}>SatoshiLock</h1>
        <p style={styles.tagline}>
          Token vesting, done right. On any chain.
        </p>

        <div style={styles.cards}>
          <a href="https://sol.satoshilock.app" style={styles.card}>
            <div style={styles.cardIconBg('rgba(153, 69, 255, 0.1)')}>
              <div style={{...styles.cardIcon, background: 'linear-gradient(135deg, #9945FF, #14F195)'}} />
            </div>
            <h2 style={styles.cardTitle}>Solana</h2>
            <p style={styles.cardDescription}>Lock SOL and any SPL token with cliff vesting</p>
            <div style={styles.cardCta}>Launch App →</div>
          </a>

          <a href="https://evm.satoshilock.app" style={styles.card}>
            <div style={styles.cardIconBg('rgba(125, 211, 255, 0.1)')}>
              <div style={{...styles.cardIcon, background: 'linear-gradient(135deg, #7dd3ff, #c2f160)'}} />
            </div>
            <h2 style={styles.cardTitle}>EVM</h2>
            <p style={styles.cardDescription}>Ethereum · Base · BNB Smart Chain</p>
            <div style={styles.cardCta}>Launch App →</div>
          </a>
        </div>

        <div style={styles.features}>
          Immutable · Non-custodial · Open source · Zero protocol fees
        </div>

        <div style={styles.divider} />

        <div style={styles.contractsSection}>
          <div style={styles.contractsTitle}>Production contracts</div>
          <div style={styles.contractsList}>
            <ContractRow
              chain="Ethereum Mainnet"
              address="0xD40Febe77b4a9bdE56e13cf4067638b98A061925"
              href="https://etherscan.io/address/0xD40Febe77b4a9bdE56e13cf4067638b98A061925" />
            <ContractRow
              chain="Base Mainnet"
              address="0xbD1d35b574361632EC2cc1376dCD346741997474"
              href="https://basescan.org/address/0xbD1d35b574361632EC2cc1376dCD346741997474" />
            <ContractRow
              chain="BNB Smart Chain"
              address="0xbD1d35b574361632EC2cc1376dCD346741997474"
              href="https://bscscan.com/address/0xbD1d35b574361632EC2cc1376dCD346741997474" />
            <ContractRow
              chain="Solana Mainnet"
              address="CE7vQdyjXSEvPdeEdrmbEpM8hSPZi2L4MKAWi26kpZ2H"
              href="https://solscan.io/account/CE7vQdyjXSEvPdeEdrmbEpM8hSPZi2L4MKAWi26kpZ2H" />
          </div>
        </div>

        <div style={styles.footer}>
          <a href="https://github.com/diamenhen" style={styles.footerLink} target="_blank" rel="noopener">GitHub</a>
          <span style={{color: '#2a3143'}}>·</span>
          <a href="https://x.com/AriantheChain" style={styles.footerLink} target="_blank" rel="noopener">Twitter</a>
        </div>
      </div>
    </div>
  );
}

function ContractRow({ chain, address, href }) {
  const shortAddr = `${address.slice(0, 6)}...${address.slice(-4)}`;
  return (
    <a href={href} target="_blank" rel="noopener" style={styles.contractRow}>
      <span style={styles.contractChain}>{chain}</span>
      <span style={styles.contractAddr}>{shortAddr}</span>
      <span style={styles.contractArrow}>↗</span>
    </a>
  );
}

function LockLogo({ size = 80 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
      <defs>
        <linearGradient id="lockG" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#7dd3ff" />
          <stop offset="1" stopColor="#c2f160" />
        </linearGradient>
      </defs>
      <rect x="6" y="14" width="20" height="14" rx="2.5" stroke="url(#lockG)" strokeWidth="2.2" fill="none"/>
      <path d="M10 14V10a6 6 0 1 1 12 0v4" stroke="url(#lockG)" strokeWidth="2.2" fill="none" strokeLinecap="round"/>
      <circle cx="16" cy="20" r="1.8" fill="url(#lockG)" />
      <rect x="15.1" y="20.5" width="1.8" height="4" rx="0.8" fill="url(#lockG)" />
    </svg>
  );
}

function Fonts() {
  return (
    <style>{`
      @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');
      body { margin:0; background:#0a0c12; min-height:100vh; }
      * { box-sizing:border-box; }
      a { text-decoration:none; }
      a:focus-visible { outline: 2px solid #c2f160; outline-offset: 4px; border-radius: 4px; }
      @media (max-width: 640px) {
        .sl-cards { grid-template-columns: 1fr !important; }
      }
    `}</style>
  );
}

const styles = {
  page: {
    minHeight: '100vh',
    background: '#0a0c12',
    color: '#e8edf7',
    fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '40px 24px',
  },
  container: {
    width: '100%',
    maxWidth: 760,
    textAlign: 'center',
  },
  logo: {
    display: 'inline-block',
    filter: 'drop-shadow(0 0 30px rgba(125,211,255,0.35))',
    marginBottom: 24,
  },
  title: {
    fontSize: 52,
    fontWeight: 800,
    letterSpacing: '-0.03em',
    margin: 0,
    marginBottom: 14,
    background: 'linear-gradient(135deg, #7dd3ff 0%, #c2f160 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
  },
  tagline: {
    fontSize: 17,
    color: '#9aa5b8',
    lineHeight: 1.6,
    margin: 0,
    marginBottom: 48,
  },
  cards: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: 20,
    marginBottom: 32,
  },
  card: {
    background: '#151a26',
    border: '1px solid #1e2435',
    borderRadius: 16,
    padding: '32px 20px',
    color: '#e8edf7',
    transition: 'all 0.2s',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    cursor: 'pointer',
  },
  cardIconBg: (bg) => ({
    width: 64,
    height: 64,
    background: bg,
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  }),
  cardIcon: {
    width: 36,
    height: 36,
    borderRadius: '50%',
  },
  cardTitle: {
    fontSize: 22,
    fontWeight: 700,
    margin: 0,
    marginBottom: 8,
    letterSpacing: '-0.01em',
  },
  cardDescription: {
    fontSize: 13,
    color: '#9aa5b8',
    lineHeight: 1.5,
    margin: 0,
    marginBottom: 20,
    minHeight: 40,
  },
  cardCta: {
    background: 'linear-gradient(180deg, #c2f160, #a8d850)',
    color: '#0a0c12',
    fontSize: 13,
    fontWeight: 700,
    padding: '9px 18px',
    borderRadius: 8,
  },
  features: {
    fontSize: 12,
    color: '#6b7590',
    marginBottom: 24,
    letterSpacing: '0.02em',
  },
  divider: {
    height: 1,
    background: '#1e2435',
    margin: '24px 0',
  },
  contractsSection: {
    marginBottom: 20,
  },
  contractsTitle: {
    fontSize: 10,
    fontWeight: 600,
    color: '#6b7590',
    letterSpacing: '0.1em',
    textTransform: 'uppercase',
    marginBottom: 14,
  },
  contractsList: {
    display: 'flex',
    flexDirection: 'column',
    gap: 2,
  },
  contractRow: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '10px 16px',
    borderRadius: 8,
    color: '#9aa5b8',
    fontSize: 12,
    transition: 'background 0.15s',
  },
  contractChain: {
    fontWeight: 500,
    flex: '0 0 auto',
    textAlign: 'left',
  },
  contractAddr: {
    fontFamily: 'monospace',
    fontSize: 11,
    color: '#6b7590',
    flex: '1 1 auto',
    textAlign: 'center',
  },
  contractArrow: {
    color: '#6b7590',
    fontSize: 12,
    flex: '0 0 auto',
  },
  footer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 12,
    fontSize: 12,
    color: '#6b7590',
    marginTop: 24,
  },
  footerLink: {
    color: '#9aa5b8',
    transition: 'color 0.15s',
  },
};