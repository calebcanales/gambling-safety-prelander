import './App.css'

function App() {
  return (
    <div className="prelander">
      {/* Hero Section */}
      <header className="hero">
        <div className="container">
          <div className="logo">
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
              <path d="M24 4L6 14v14c0 11.11 7.7 21.5 18 24 10.3-2.5 18-12.89 18-24V14L24 4z" fill="#10b981"/>
              <path d="M20 24l4 4 8-8" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <h1>Gambling Safety Commission</h1>
          </div>
          <h2>Protect Yourself from Rigged Gambling Sites</h2>
          <p className="subtitle">Learn how to identify legitimate operators and avoid scams</p>
        </div>
      </header>

      {/* Problem Section */}
      <section className="problem">
        <div className="container">
          <h3>The Hidden Dangers of Online Gambling</h3>
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-number">$4.2B</div>
              <div className="stat-label">Lost to gambling scams annually</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">67%</div>
              <div className="stat-label">Of crypto casinos operate without proper licenses</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">89%</div>
              <div className="stat-label">Of rigged sites manipulate RTP (Return to Player)</div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="education">
        <div className="container">
          <h3>How to Verify a Legitimate Gambling Site</h3>
          <div className="checklist">
            <div className="check-item">
              <div className="check-icon">✓</div>
              <div className="check-content">
                <h4>Valid Gaming License</h4>
                <p>Verify the operator holds a legitimate license from a recognized gaming authority (Malta, Curaçao, UK, etc.)</p>
              </div>
            </div>
            <div className="check-item">
              <div className="check-icon">✓</div>
              <div className="check-content">
                <h4>Transparent RTP Disclosure</h4>
                <p>Legitimate sites publish their Return to Player (RTP) percentages and undergo independent audits</p>
              </div>
            </div>
            <div className="check-item">
              <div className="check-icon">✓</div>
              <div className="check-content">
                <h4>Secure Payment Methods</h4>
                <p>Look for established payment processors and avoid sites that only accept untraceable cryptocurrency</p>
              </div>
            </div>
            <div className="check-item">
              <div className="check-icon">✓</div>
              <div className="check-content">
                <h4>Responsible Gambling Resources</h4>
                <p>Reputable operators provide access to gambling addiction support and self-exclusion tools</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <div className="container">
          <h3>Ready to Find Safe Gambling Sites?</h3>
          <p>Our independent commission has verified and reviewed legitimate operators</p>
          <a href="https://fairplaygaming.co" className="cta-button">
            See Verified Safe Sites →
          </a>
          <p className="disclaimer">
            We provide educational information only. Gambling involves risk. Must be 21+ to gamble.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>© 2025 Gambling Safety Commission. Educational resource for responsible gambling.</p>
          <div className="footer-links">
            <a href="tel:1-800-522-4700">24/7 Helpline: 1-800-522-4700</a>
            <span>•</span>
            <a href="https://www.ncpgambling.org" target="_blank" rel="noopener">NCPG</a>
            <span>•</span>
            <a href="https://www.gamblersanonymous.org" target="_blank" rel="noopener">Gamblers Anonymous</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
