'use client';
import { useState } from 'react';

export default function LandingPage() {
  const [pickerOpen, setPickerOpen] = useState(false);
  const openPicker = (e) => { e.preventDefault(); setPickerOpen(true); };

  return (
    <>
      <Fonts />

      <nav className="tcg-nav">
        <div className="tcg-brand">
          <BrandMark idPrefix="nav" />
          SatoshiLock
        </div>
        <div className="tcg-nav-links">
          <a href="https://evm.satoshilock.app">Vault</a>
          <a href="https://sol.satoshilock.app">Locks</a>
          <a href="#how">Docs</a>
          <a href="#trust">Audit</a>
        </div>
        <a href="#" onClick={openPicker} className="tcg-nav-cta">Launch App</a>
      </nav>

      <section id="hero" className="tcg-hero">
        <div>
          <div className="tcg-eyebrow reveal">Live · Multi-Chain · Self-Custodial</div>

          <h1 className="reveal delay-1">
            Forge your<br />
            <span className="accent">on-chain</span><br />
            <span className="stamp">vesting</span> contracts
          </h1>

          <p className="lead reveal delay-2">
            Lock, vest, and release tokens with mathematical certainty. No custodian. No middleman. Just battle-tested contracts deployed across EVM chains and Solana — collected and tracked like a deck.
          </p>

          <div className="cta-row reveal delay-3">
            <a href="#" onClick={openPicker} className="btn-primary">Create Lock →</a>
            <a href="#trust" className="btn-secondary">View Contracts</a>
          </div>

          <div className="stats-row reveal delay-4">
            <div>
              <div className="stat-num">2,184</div>
              <div className="stat-label">Active Locks</div>
            </div>
            <div>
              <div className="stat-num">4</div>
              <div className="stat-label">Chains Live</div>
            </div>
          </div>
        </div>

        <div className="card-stack reveal delay-3">

          <a href="https://evm.satoshilock.app" className="lock-card card-evm">
            <div className="rarity-bar"></div>
            <div className="card-header">
              <div className="card-symbol">EVM</div>
              <div className="card-tier">Multi-Chain</div>
            </div>
            <div className="card-art">
              <div className="card-glyph">Ξ</div>
            </div>
            <div className="card-stats">
              <div>
                <div className="stat-l">Networks</div>
                <div className="stat-v">ETH · Base · BSC</div>
              </div>
              <div>
                <div className="stat-l">Token Std</div>
                <div className="stat-v">ERC-20</div>
              </div>
            </div>
            <div className="card-foot"><span>Mainnet</span></div>
          </a>

          <a href="https://sol.satoshilock.app" className="lock-card card-sol">
            <div className="rarity-bar"></div>
            <div className="card-header">
              <div className="card-symbol">SOLANA</div>
              <div className="card-tier">High Speed</div>
            </div>
            <div className="card-art">
              <div className="card-glyph">◎</div>
            </div>
            <div className="card-stats">
              <div>
                <div className="stat-l">Network</div>
                <div className="stat-v">Solana</div>
              </div>
              <div>
                <div className="stat-l">Token Std</div>
                <div className="stat-v">SPL · Token-2022</div>
              </div>
            </div>
            <div className="card-foot"><span>Mainnet</span></div>
          </a>

        </div>
      </section>

      <section id="trust" className="trust-band">
        <div className="trust-grid">
          <div className="trust-item">
            <div className="trust-num">100%</div>
            <div className="trust-l">Self-Custodial</div>
            <div className="trust-d">Funds never leave your wallet to a centralized party. Smart contracts hold escrow.</div>
          </div>
          <div className="trust-item">
            <div className="trust-num">4×</div>
            <div className="trust-l">Chains Supported</div>
            <div className="trust-d">Ethereum, Base, BSC, and Solana — one interface for all major networks.</div>
          </div>
          <div className="trust-item">
            <div className="trust-num">∞</div>
            <div className="trust-l">Lock Forever</div>
            <div className="trust-d">Or set custom vesting schedules with cliff, duration, and step-based unlocks.</div>
          </div>
          <div className="trust-item">
            <div className="trust-num">0</div>
            <div className="trust-l">Trust Required</div>
            <div className="trust-d">Open-source verified contracts on Etherscan, BSCScan, BaseScan, and Solscan.</div>
          </div>
        </div>

        <div className="contracts-list">
          <div className="contracts-title">— PRODUCTION CONTRACTS —</div>
          <a href="https://etherscan.io/address/0xD40Febe77b4a9bdE56e13cf4067638b98A061925" target="_blank" rel="noopener noreferrer" className="contract-row">
            <span className="contract-chain">Ethereum Mainnet</span>
            <span className="contract-addr">0xD40F...1925</span>
            <span className="contract-arrow">↗</span>
          </a>
          <a href="https://basescan.org/address/0xbD1d35b574361632EC2cc1376dCD346741997474" target="_blank" rel="noopener noreferrer" className="contract-row">
            <span className="contract-chain">Base Mainnet</span>
            <span className="contract-addr">0xbD1d...7474</span>
            <span className="contract-arrow">↗</span>
          </a>
          <a href="https://bscscan.com/address/0xbD1d35b574361632EC2cc1376dCD346741997474" target="_blank" rel="noopener noreferrer" className="contract-row">
            <span className="contract-chain">BNB Smart Chain</span>
            <span className="contract-addr">0xbD1d...7474</span>
            <span className="contract-arrow">↗</span>
          </a>
          <a href="https://solscan.io/account/CE7vQdyjXSEvPdeEdrmbEpM8hSPZi2L4MKAWi26kpZ2H" target="_blank" rel="noopener noreferrer" className="contract-row">
            <span className="contract-chain">Solana Mainnet</span>
            <span className="contract-addr">CE7v...pZ2H</span>
            <span className="contract-arrow">↗</span>
          </a>
        </div>
      </section>

      <section id="how" className="how">
        <div className="section-eyebrow">The Ritual</div>
        <h2>Three steps to <em>forge</em> a lock</h2>
        <div className="steps-grid">
          <div className="step-card">
            <div className="step-num">— STEP I</div>
            <div className="step-title">Choose Your<br />Token</div>
            <div className="step-desc">Pick any ERC-20, SPL, or native asset. Specify amount, recipient, and chain.</div>
          </div>
          <div className="step-card">
            <div className="step-num">— STEP II</div>
            <div className="step-title">Set The<br />Schedule</div>
            <div className="step-desc">Define cliff date, vesting duration, and unlock frequency. Customize cancel and update authorities.</div>
          </div>
          <div className="step-card">
            <div className="step-num">— STEP III</div>
            <div className="step-title">Sign &amp;<br />Forge</div>
            <div className="step-desc">Sign with your wallet. Contract takes custody. Recipient claims as schedule unlocks.</div>
          </div>
        </div>
      </section>

      <footer className="tcg-footer">
        <div className="footer-grid">
          <div className="footer-brand-block">
            <div className="tcg-brand">
              <BrandMark idPrefix="foot" />
              SatoshiLock
            </div>
            <div className="footer-tag">Forged on-chain. Trustless token vesting for builders, DAOs, founders, and serious holders.</div>
          </div>
          <div className="footer-col">
            <h4>Product</h4>
            <ul>
              <li><a href="#" onClick={openPicker}>Create Lock</a></li>
              <li><a href="#" onClick={openPicker}>My Locks</a></li>
              <li><a href="#" onClick={openPicker}>Claim</a></li>
              <li className="muted">Vault Bot</li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Resources</h4>
            <ul>
              <li><a href="#how">Documentation</a></li>
              <li><a href="#trust">Smart Contracts</a></li>
              <li className="muted">API</li>
              <li className="muted">Changelog</li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Network</h4>
            <ul>
              <li><a href="https://x.com/arianthechain" target="_blank" rel="noopener noreferrer">Twitter / X</a></li>
              <li className="muted">Discord</li>
              <li className="muted">GitHub</li>
              <li className="muted">Telegram</li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 SATOSHILOCK · ALL CHAINS, ALL LOCKED</span>
          <span>FORGED IN SOUTHEAST ASIA</span>
        </div>
      </footer>

      {pickerOpen && (
        <div className="picker-overlay" onClick={() => setPickerOpen(false)}>
          <div className="picker-modal" onClick={(e) => e.stopPropagation()}>
            <button className="picker-close" onClick={() => setPickerOpen(false)}>×</button>
            <div className="picker-eyebrow">Choose Your Chain</div>
            <h3 className="picker-title">Where do you want to lock?</h3>
            <div className="picker-options">
              <a href="https://evm.satoshilock.app" className="picker-option picker-evm">
                <div className="picker-glyph">Ξ</div>
                <div className="picker-name">EVM</div>
                <div className="picker-desc">Ethereum · Base · BSC</div>
                <div className="picker-cta">Launch →</div>
              </a>
              <a href="https://sol.satoshilock.app" className="picker-option picker-sol">
                <div className="picker-glyph">◎</div>
                <div className="picker-name">Solana</div>
                <div className="picker-desc">SPL · Token-2022</div>
                <div className="picker-cta">Launch →</div>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

function BrandMark({ idPrefix = 'b' }) {
  const goldId = `${idPrefix}Gold`;
  const bgId = `${idPrefix}Bg`;
  return (
    <svg className="brand-mark" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id={goldId} x1="0" y1="0" x2="64" y2="64" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#d4a857"/>
          <stop offset="0.5" stopColor="#f5d97e"/>
          <stop offset="1" stopColor="#d4a857"/>
        </linearGradient>
        <radialGradient id={bgId} cx="32" cy="32" r="32" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#1a1408"/>
          <stop offset="1" stopColor="#07080f"/>
        </radialGradient>
      </defs>
      <path d="M32 2 L58 18 L58 46 L32 62 L6 46 L6 18 Z" fill={`url(#${goldId})`}/>
      <path d="M32 8 L52 21 L52 43 L32 56 L12 43 L12 21 Z" fill={`url(#${bgId})`}/>
      <path d="M22 32 C 22 26, 28 26, 32 32 C 36 38, 42 38, 42 32 C 42 26, 36 26, 32 32 C 28 38, 22 38, 22 32 Z"
            stroke={`url(#${goldId})`} strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function Fonts() {
  return (
    <style jsx global>{`
      :root {
        --bg-deep: #07080f;
        --bg-mid: #0d1020;
        --bg-card: #121526;
        --ink: #e8ecf7;
        --ink-dim: #b8c0d6;
        --ink-mute: #6a7395;
        --gold: #d4a857;
        --gold-bright: #f5d97e;
        --violet: #8b5cf6;
        --magenta: #ec4899;
        --emerald: #34d399;
        --line: rgba(255,255,255,0.08);
        --line-strong: rgba(255,255,255,0.18);
      }

      *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

      html { scroll-behavior: smooth; }
      html, body {
        background: var(--bg-deep);
        color: var(--ink);
        font-family: var(--font-manrope), sans-serif;
        overflow-x: hidden;
        line-height: 1.5;
        -webkit-font-smoothing: antialiased;
      }

      a { color: inherit; text-decoration: none; }

      body::before {
        content: '';
        position: fixed;
        inset: 0;
        background:
          radial-gradient(ellipse 80% 50% at 50% -10%, rgba(139,92,246,0.18), transparent 60%),
          radial-gradient(ellipse 60% 50% at 110% 50%, rgba(76,201,240,0.12), transparent 60%),
          radial-gradient(ellipse 50% 40% at -10% 80%, rgba(212,168,87,0.10), transparent 60%),
          var(--bg-deep);
        z-index: -2;
      }
      body::after {
        content: '';
        position: fixed;
        inset: 0;
        background-image:
          linear-gradient(var(--line) 1px, transparent 1px),
          linear-gradient(90deg, var(--line) 1px, transparent 1px);
        background-size: 80px 80px;
        opacity: 0.4;
        z-index: -1;
        pointer-events: none;
        mask-image: radial-gradient(ellipse 80% 60% at 50% 30%, #000, transparent 70%);
      }

      .tcg-nav {
        position: fixed;
        top: 0; left: 0; right: 0;
        z-index: 100;
        padding: 22px 48px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        backdrop-filter: blur(12px);
        background: linear-gradient(to bottom, rgba(7,8,15,0.85) 0%, rgba(7,8,15,0.6) 100%);
        border-bottom: 1px solid var(--line);
      }
      .tcg-brand {
        display: flex;
        align-items: center;
        gap: 12px;
        font-family: var(--font-cinzel), serif;
        font-weight: 700;
        font-size: 18px;
        letter-spacing: 0.16em;
        color: var(--gold-bright);
        text-transform: uppercase;
      }
      .brand-mark { width: 34px; height: 34px; flex-shrink: 0; display: block; }

      .tcg-nav-links {
        display: flex;
        gap: 36px;
        font-size: 13px;
        font-weight: 500;
        color: var(--ink-dim);
        letter-spacing: 0.05em;
      }
      .tcg-nav-links a:hover { color: var(--ink); }

      .tcg-nav-cta {
        padding: 10px 22px;
        background: linear-gradient(135deg, var(--gold) 0%, var(--gold-bright) 100%);
        color: var(--bg-deep);
        border: none;
        font-family: var(--font-cinzel), serif;
        font-weight: 700;
        font-size: 12px;
        letter-spacing: 0.12em;
        text-transform: uppercase;
        cursor: pointer;
        border-radius: 2px;
        transition: all 0.25s;
        box-shadow: 0 0 0 1px var(--gold), 0 4px 24px rgba(212,168,87,0.35);
      }
      .tcg-nav-cta:hover {
        transform: translateY(-1px);
        box-shadow: 0 0 0 1px var(--gold-bright), 0 6px 32px rgba(245,217,126,0.55);
      }

      .tcg-hero {
        min-height: 100vh;
        display: grid;
        grid-template-columns: 1.1fr 1fr;
        align-items: center;
        padding: 140px 48px 60px;
        gap: 48px;
        position: relative;
      }

      .tcg-eyebrow {
        display: inline-flex;
        align-items: center;
        gap: 10px;
        padding: 8px 16px;
        border: 1px solid var(--line-strong);
        border-radius: 999px;
        font-family: var(--font-jetbrains), monospace;
        font-size: 11px;
        letter-spacing: 0.18em;
        color: var(--gold-bright);
        text-transform: uppercase;
        margin-bottom: 28px;
        background: rgba(212,168,87,0.05);
      }
      .tcg-eyebrow::before {
        content: '';
        width: 6px;
        height: 6px;
        background: var(--emerald);
        border-radius: 50%;
        box-shadow: 0 0 12px var(--emerald);
        animation: pulse 2s ease-in-out infinite;
      }
      @keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.4; } }

      h1 {
        font-family: var(--font-cinzel), serif;
        font-size: clamp(48px, 6vw, 88px);
        font-weight: 900;
        line-height: 0.95;
        letter-spacing: -0.02em;
        margin-bottom: 28px;
      }
      h1 .accent {
        background: linear-gradient(135deg, var(--gold) 0%, var(--gold-bright) 60%, #fff7e0 100%);
        -webkit-background-clip: text;
        background-clip: text;
        -webkit-text-fill-color: transparent;
        font-style: italic;
      }
      h1 .stamp {
        display: inline-block;
        border: 2px solid var(--gold);
        padding: 4px 16px;
        color: var(--gold-bright);
        font-style: normal;
        transform: rotate(-2deg);
        font-size: 0.7em;
        margin: 0 8px;
      }

      .tcg-hero .lead {
        font-size: 17px;
        color: var(--ink-dim);
        max-width: 480px;
        margin-bottom: 40px;
        line-height: 1.65;
      }

      .cta-row { display: flex; gap: 14px; align-items: center; flex-wrap: wrap; }
      .btn-primary {
        padding: 16px 28px;
        background: linear-gradient(135deg, var(--gold) 0%, var(--gold-bright) 100%);
        color: var(--bg-deep);
        border: none;
        font-family: var(--font-cinzel), serif;
        font-weight: 700;
        font-size: 14px;
        letter-spacing: 0.14em;
        text-transform: uppercase;
        cursor: pointer;
        border-radius: 2px;
        transition: all 0.25s;
        box-shadow: 0 0 0 1px var(--gold), 0 6px 32px rgba(212,168,87,0.4);
        display: inline-block;
      }
      .btn-primary:hover {
        transform: translateY(-2px);
        box-shadow: 0 0 0 1px var(--gold-bright), 0 10px 48px rgba(245,217,126,0.6);
      }
      .btn-secondary {
        padding: 16px 24px;
        background: transparent;
        color: var(--ink);
        border: 1px solid var(--line-strong);
        font-family: var(--font-jetbrains), monospace;
        font-size: 13px;
        letter-spacing: 0.08em;
        cursor: pointer;
        border-radius: 2px;
        transition: all 0.25s;
        display: inline-block;
      }
      .btn-secondary:hover { border-color: var(--gold); color: var(--gold-bright); }

      .stats-row {
        margin-top: 56px;
        display: grid;
        grid-template-columns: repeat(2, max-content);
        gap: 56px;
      }
      .stat-num {
        font-family: var(--font-cinzel), serif;
        font-size: 28px;
        font-weight: 700;
        color: var(--gold-bright);
        margin-bottom: 4px;
      }
      .stat-label {
        font-family: var(--font-jetbrains), monospace;
        font-size: 10px;
        color: var(--ink-mute);
        letter-spacing: 0.16em;
        text-transform: uppercase;
      }

      .card-stack {
        position: relative;
        height: 600px;
        perspective: 1800px;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .lock-card {
        position: absolute;
        width: 320px;
        height: 460px;
        border-radius: 18px;
        background: linear-gradient(160deg, var(--bg-card) 0%, var(--bg-mid) 100%);
        border: 1px solid var(--line-strong);
        overflow: hidden;
        box-shadow:
          0 0 0 1px rgba(255,255,255,0.04),
          0 24px 60px -10px rgba(0,0,0,0.7),
          0 16px 32px -8px rgba(0,0,0,0.5);
        transition: all 0.5s cubic-bezier(0.2, 0.8, 0.2, 1);
        cursor: pointer;
        transform-style: preserve-3d;
        text-decoration: none;
        color: var(--ink);
      }
      .lock-card.card-evm {
        transform: translateX(-90px) translateY(10px) rotate(-8deg) rotateY(6deg);
        z-index: 2;
      }
      .lock-card.card-sol {
        transform: translateX(90px) translateY(-10px) rotate(8deg) rotateY(-6deg);
        z-index: 1;
      }
      .card-stack:hover .lock-card.card-evm {
        transform: translateX(-160px) translateY(-10px) rotate(-12deg) rotateY(10deg) scale(1.02);
      }
      .card-stack:hover .lock-card.card-sol {
        transform: translateX(160px) translateY(-10px) rotate(12deg) rotateY(-10deg) scale(1.02);
      }

      .lock-card::before {
        content: '';
        position: absolute;
        inset: 0;
        background: linear-gradient(135deg,
          transparent 0%,
          rgba(255,255,255,0.08) 30%,
          transparent 50%,
          rgba(255,255,255,0.04) 70%,
          transparent 100%);
        opacity: 0;
        transition: opacity 0.4s;
        pointer-events: none;
        z-index: 5;
      }
      .lock-card:hover::before { opacity: 1; }

      .rarity-bar { position: absolute; top: 0; left: 0; right: 0; height: 6px; z-index: 4; }
      .card-evm .rarity-bar { background: linear-gradient(90deg, var(--gold), var(--gold-bright)); }
      .card-sol .rarity-bar { background: linear-gradient(90deg, var(--violet), var(--magenta)); }

      .card-header {
        padding: 24px 22px 16px;
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        border-bottom: 1px solid var(--line);
      }
      .card-symbol {
        font-family: var(--font-cinzel), serif;
        font-size: 22px;
        font-weight: 700;
        letter-spacing: 0.06em;
      }
      .card-evm .card-symbol { color: var(--gold-bright); }
      .card-sol .card-symbol { color: var(--magenta); }

      .card-tier {
        font-family: var(--font-jetbrains), monospace;
        font-size: 9px;
        letter-spacing: 0.18em;
        text-transform: uppercase;
        padding: 4px 10px;
        border: 1px solid var(--line-strong);
        border-radius: 999px;
        color: var(--ink-dim);
      }
      .card-evm .card-tier { color: var(--gold-bright); border-color: var(--gold); }
      .card-sol .card-tier { color: var(--magenta); border-color: var(--magenta); }

      .card-art {
        height: 220px;
        margin: 18px 22px 0;
        border-radius: 10px;
        position: relative;
        overflow: hidden;
        border: 1px solid var(--line);
      }
      .card-evm .card-art {
        background:
          radial-gradient(circle at 50% 50%, rgba(245,217,126,0.4), transparent 60%),
          linear-gradient(135deg, #1a1408 0%, #0f0a02 100%);
      }
      .card-sol .card-art {
        background:
          radial-gradient(circle at 70% 30%, rgba(236,72,153,0.4), transparent 60%),
          linear-gradient(135deg, #1d0f1f 0%, #0f0612 100%);
      }
      .card-glyph {
        position: absolute;
        top: 50%; left: 50%;
        transform: translate(-50%, -50%);
        font-family: var(--font-cinzel), serif;
        font-weight: 900;
        font-size: 100px;
        letter-spacing: -0.04em;
        opacity: 0.95;
      }
      .card-evm .card-glyph { color: var(--gold-bright); text-shadow: 0 0 40px rgba(245,217,126,0.6); }
      .card-sol .card-glyph { color: var(--magenta); text-shadow: 0 0 40px rgba(236,72,153,0.6); }
      .card-art::after {
        content: '';
        position: absolute;
        inset: 0;
        background: repeating-linear-gradient(0deg,
          rgba(255,255,255,0.03) 0px,
          rgba(255,255,255,0.03) 1px,
          transparent 1px,
          transparent 3px);
        pointer-events: none;
      }

      .card-stats {
        padding: 22px 22px 16px;
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 14px 18px;
      }
      .stat-l {
        font-family: var(--font-jetbrains), monospace;
        font-size: 9px;
        color: var(--ink-mute);
        letter-spacing: 0.14em;
        text-transform: uppercase;
        margin-bottom: 5px;
      }
      .stat-v {
        font-family: var(--font-cinzel), serif;
        font-size: 14px;
        color: var(--ink);
        font-weight: 700;
      }
      .card-foot {
        position: absolute;
        bottom: 14px;
        left: 22px; right: 22px;
        padding-top: 12px;
        border-top: 1px solid var(--line);
        display: flex;
        justify-content: center;
        align-items: center;
        font-family: var(--font-jetbrains), monospace;
        font-size: 10px;
        color: var(--ink-mute);
        letter-spacing: 0.16em;
        text-transform: uppercase;
      }

      .trust-band {
        padding: 80px 48px;
        border-top: 1px solid var(--line);
        border-bottom: 1px solid var(--line);
        background: rgba(7,8,15,0.5);
      }
      .trust-grid {
        max-width: 1200px;
        margin: 0 auto;
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 56px;
        align-items: start;
      }
      .trust-item { border-left: 2px solid var(--gold); padding-left: 20px; }
      .trust-num {
        font-family: var(--font-cinzel), serif;
        font-size: 36px;
        font-weight: 900;
        color: var(--gold-bright);
        margin-bottom: 8px;
        letter-spacing: -0.02em;
      }
      .trust-l {
        font-family: var(--font-jetbrains), monospace;
        font-size: 10px;
        color: var(--ink-mute);
        letter-spacing: 0.16em;
        text-transform: uppercase;
        margin-bottom: 12px;
      }
      .trust-d { font-size: 13px; color: var(--ink-dim); line-height: 1.6; }

      .contracts-list {
        max-width: 760px;
        margin: 56px auto 0;
        display: flex;
        flex-direction: column;
        gap: 6px;
      }
      .contracts-title {
        font-family: var(--font-jetbrains), monospace;
        font-size: 11px;
        letter-spacing: 0.22em;
        text-align: center;
        color: var(--gold);
        margin-bottom: 24px;
      }
      .contract-row {
        display: grid;
        grid-template-columns: 1fr auto auto;
        align-items: center;
        gap: 16px;
        padding: 14px 20px;
        background: rgba(7,8,15,0.4);
        border: 1px solid var(--line);
        border-radius: 8px;
        text-decoration: none;
        transition: all 0.2s;
      }
      .contract-row:hover {
        border-color: var(--gold);
        background: rgba(212,168,87,0.05);
        transform: translateX(2px);
      }
      .contract-chain {
        font-family: var(--font-cinzel), serif;
        font-size: 13px;
        font-weight: 700;
        color: var(--gold-bright);
        letter-spacing: 0.04em;
      }
      .contract-addr {
        font-family: var(--font-jetbrains), monospace;
        font-size: 11px;
        color: var(--ink-mute);
      }
      .contract-arrow {
        color: var(--gold);
        font-size: 14px;
        font-weight: 700;
      }

      .how { padding: 120px 48px 80px; max-width: 1200px; margin: 0 auto; }
      .section-eyebrow {
        font-family: var(--font-jetbrains), monospace;
        font-size: 11px;
        letter-spacing: 0.22em;
        text-transform: uppercase;
        color: var(--gold);
        margin-bottom: 16px;
      }
      h2 {
        font-family: var(--font-cinzel), serif;
        font-size: clamp(36px, 4vw, 56px);
        font-weight: 700;
        line-height: 1.05;
        letter-spacing: -0.01em;
        margin-bottom: 56px;
        max-width: 760px;
      }
      h2 em { color: var(--gold-bright); font-style: italic; }

      .steps-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; }
      .step-card {
        background: linear-gradient(160deg, var(--bg-card) 0%, var(--bg-mid) 100%);
        border: 1px solid var(--line);
        border-radius: 12px;
        padding: 32px 28px;
        position: relative;
        overflow: hidden;
        transition: all 0.3s;
      }
      .step-card:hover { border-color: var(--gold); transform: translateY(-4px); }
      .step-card::before {
        content: '';
        position: absolute;
        top: 0; left: 0; right: 0;
        height: 2px;
        background: linear-gradient(90deg, var(--gold) 0%, transparent 100%);
        opacity: 0.4;
      }
      .step-num {
        font-family: var(--font-cinzel), serif;
        font-size: 13px;
        font-weight: 700;
        color: var(--gold-bright);
        letter-spacing: 0.18em;
        margin-bottom: 18px;
      }
      .step-title {
        font-family: var(--font-cinzel), serif;
        font-size: 22px;
        font-weight: 700;
        color: var(--ink);
        margin-bottom: 12px;
        line-height: 1.2;
      }
      .step-desc { color: var(--ink-dim); font-size: 14px; line-height: 1.65; }

      .tcg-footer { padding: 80px 48px 48px; border-top: 1px solid var(--line); margin-top: 80px; }
      .footer-grid {
        max-width: 1200px;
        margin: 0 auto;
        display: grid;
        grid-template-columns: 2fr 1fr 1fr 1fr;
        gap: 48px;
        margin-bottom: 56px;
      }
      .footer-brand-block .tcg-brand { margin-bottom: 16px; }
      .footer-tag {
        font-size: 13px;
        color: var(--ink-mute);
        line-height: 1.65;
        max-width: 320px;
      }
      .footer-col h4 {
        font-family: var(--font-jetbrains), monospace;
        font-size: 11px;
        letter-spacing: 0.2em;
        text-transform: uppercase;
        color: var(--gold);
        margin-bottom: 18px;
      }
      .footer-col ul { list-style: none; display: flex; flex-direction: column; gap: 10px; }
      .footer-col a { color: var(--ink-dim); font-size: 14px; transition: color 0.2s; cursor: pointer; }
      .footer-col a:hover { color: var(--gold-bright); }
      .footer-col li.muted { color: var(--ink-mute); font-size: 14px; cursor: default; }
      .footer-bottom {
        max-width: 1200px;
        margin: 0 auto;
        padding-top: 24px;
        border-top: 1px solid var(--line);
        display: flex;
        justify-content: space-between;
        font-family: var(--font-jetbrains), monospace;
        font-size: 11px;
        color: var(--ink-mute);
        letter-spacing: 0.1em;
      }

      .picker-overlay {
        position: fixed;
        inset: 0;
        background: rgba(7,8,15,0.85);
        backdrop-filter: blur(8px);
        z-index: 200;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 24px;
        animation: fadeIn 0.2s ease;
      }
      @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
      .picker-modal {
        background: linear-gradient(160deg, var(--bg-card) 0%, var(--bg-mid) 100%);
        border: 1px solid var(--gold);
        border-radius: 14px;
        padding: 48px 40px;
        max-width: 640px;
        width: 100%;
        position: relative;
        box-shadow: 0 0 0 1px rgba(212,168,87,0.2), 0 30px 80px rgba(0,0,0,0.6);
        animation: slideUp 0.3s cubic-bezier(0.2, 0.8, 0.2, 1);
      }
      @keyframes slideUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
      .picker-close {
        position: absolute;
        top: 16px;
        right: 16px;
        background: transparent;
        border: 1px solid var(--line-strong);
        color: var(--ink-dim);
        width: 32px;
        height: 32px;
        border-radius: 50%;
        font-size: 18px;
        cursor: pointer;
        transition: all 0.2s;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .picker-close:hover { border-color: var(--gold); color: var(--gold-bright); }
      .picker-eyebrow {
        font-family: var(--font-jetbrains), monospace;
        font-size: 11px;
        letter-spacing: 0.22em;
        text-transform: uppercase;
        color: var(--gold);
        margin-bottom: 12px;
        text-align: center;
      }
      .picker-title {
        font-family: var(--font-cinzel), serif;
        font-size: 28px;
        font-weight: 700;
        color: var(--ink);
        text-align: center;
        margin-bottom: 32px;
        letter-spacing: -0.01em;
      }
      .picker-options { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
      .picker-option {
        background: var(--bg-deep);
        border: 1px solid var(--line-strong);
        border-radius: 12px;
        padding: 32px 24px;
        text-decoration: none;
        text-align: center;
        transition: all 0.25s;
        cursor: pointer;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 6px;
      }
      .picker-evm:hover { border-color: var(--gold); background: rgba(212,168,87,0.06); transform: translateY(-3px); }
      .picker-sol:hover { border-color: var(--magenta); background: rgba(236,72,153,0.06); transform: translateY(-3px); }
      .picker-glyph {
        font-family: var(--font-cinzel), serif;
        font-size: 56px;
        font-weight: 900;
        margin-bottom: 4px;
      }
      .picker-evm .picker-glyph { color: var(--gold-bright); text-shadow: 0 0 30px rgba(245,217,126,0.5); }
      .picker-sol .picker-glyph { color: var(--magenta); text-shadow: 0 0 30px rgba(236,72,153,0.5); }
      .picker-name {
        font-family: var(--font-cinzel), serif;
        font-size: 22px;
        font-weight: 700;
        letter-spacing: 0.04em;
      }
      .picker-evm .picker-name { color: var(--gold-bright); }
      .picker-sol .picker-name { color: var(--magenta); }
      .picker-desc {
        font-family: var(--font-jetbrains), monospace;
        font-size: 10px;
        color: var(--ink-mute);
        letter-spacing: 0.14em;
        text-transform: uppercase;
        margin-bottom: 12px;
      }
      .picker-cta {
        font-family: var(--font-cinzel), serif;
        font-size: 12px;
        letter-spacing: 0.14em;
        text-transform: uppercase;
        color: var(--ink);
        font-weight: 700;
        padding-top: 8px;
        border-top: 1px solid var(--line);
        width: 100%;
      }

      .reveal {
        opacity: 0;
        transform: translateY(30px);
        animation: reveal 1s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
      }
      .reveal.delay-1 { animation-delay: 0.15s; }
      .reveal.delay-2 { animation-delay: 0.3s; }
      .reveal.delay-3 { animation-delay: 0.45s; }
      .reveal.delay-4 { animation-delay: 0.6s; }
      @keyframes reveal { to { opacity: 1; transform: translateY(0); } }

      @media (max-width: 960px) {
        .tcg-hero { grid-template-columns: 1fr; padding: 120px 24px 60px; }
        .card-stack { height: 500px; transform: scale(0.85); }
        .tcg-nav { padding: 18px 24px; }
        .tcg-nav-links { display: none; }
        .trust-grid { grid-template-columns: repeat(2, 1fr); gap: 40px; }
        .steps-grid { grid-template-columns: 1fr; }
        .footer-grid { grid-template-columns: 1fr 1fr; }
        .how { padding: 80px 24px; }
        .trust-band { padding: 60px 24px; }
        .tcg-footer { padding: 60px 24px 32px; }
        .picker-options { grid-template-columns: 1fr; }
        .picker-modal { padding: 36px 24px; }
      }
    `}</style>
  );
}
