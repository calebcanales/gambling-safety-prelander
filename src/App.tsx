import './App.css'

function App() {
  return (
    <div className="prelander">
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
