import './App.css'

function App() {
  return (
    <div className="prelander">
      {/* Hero Section */}
      <header className="hero">
        <div className="container">
          <div className="hero-badge">
            <svg width="24" height="24" viewBox="0 0 48 48" fill="none">
              <path d="M24 4L6 14v14c0 11.11 7.7 21.5 18 24 10.3-2.5 18-12.89 18-24V14L24 4z" fill="currentColor"/>
              <path d="M20 24l4 4 8-8" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span>Verified Safe</span>
          </div>
          <h1>Find Legitimate Gambling Sites</h1>
          <p className="hero-subtitle">Independent verification • License checks • Fair play audits</p>
        </div>
      </header>

      {/* Trust Indicators */}
      <section className="trust-section">
        <div className="container">
          <div className="trust-grid">
            <div className="trust-card">
              <div className="trust-icon">🛡️</div>
              <h3>Licensed Operators</h3>
              <p>Verified gaming licenses from recognized authorities</p>
            </div>
            <div className="trust-card">
              <div className="trust-icon">📊</div>
              <h3>Fair RTP</h3>
              <p>Independently audited return-to-player rates</p>
            </div>
            <div className="trust-card">
              <div className="trust-icon">🔒</div>
              <h3>Secure Payments</h3>
              <p>Trusted payment processors and fast withdrawals</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Offers - Using Promo Images */}
      <section className="offers-section">
        <div className="container">
          <h2>Verified Operator Offers</h2>
          <p className="section-subtitle">Exclusive promotions from licensed, audited operators</p>
          
          <div className="offers-grid">
            <div className="offer-card">
              <img src="/promo-no-strings.png" alt="Welcome offer" className="offer-image" />
            </div>
            <div className="offer-card">
              <img src="/promo-free-spins.png" alt="Free spins offer" className="offer-image" />
            </div>
            <div className="offer-card">
              <img src="/promo-poker-bonus.png" alt="Poker bonus" className="offer-image" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to See Verified Sites?</h2>
            <p>View our complete list of independently verified gambling operators</p>
            <a href="https://fairplaygaming.co" className="cta-button">
              View Verified Sites
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M7 3l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Responsible Gambling Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-disclaimer">
              <p><strong>21+ Only</strong> • Gambling involves risk • Play responsibly</p>
              <p className="footer-help">Need help? Call <a href="tel:1-800-522-4700">1-800-522-4700</a></p>
            </div>
            <div className="footer-links">
              <a href="https://www.ncpgambling.org" target="_blank" rel="noopener">NCPG</a>
              <span>•</span>
              <a href="https://www.gamblersanonymous.org" target="_blank" rel="noopener">Gamblers Anonymous</a>
              <span>•</span>
              <a href="https://www.begambleaware.org" target="_blank" rel="noopener">BeGambleAware</a>
            </div>
          </div>
          <p className="footer-copyright">© 2025 Gambling Safety Commission. Educational resource only.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
