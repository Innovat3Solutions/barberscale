import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <style>
        {`
          .mobile-nav {
            display: none;
          }
          .desktop-nav {
            display: flex;
            gap: 1.5rem;
            align-items: center;
          }
          .menu-btn {
            display: none;
            background: none;
            border: none;
            color: var(--pure-white);
            cursor: pointer;
            padding: 0.5rem;
            z-index: 1001;
          }
          @media (max-width: 768px) {
            .desktop-nav {
              display: none;
            }
            .menu-btn {
              display: flex;
              align-items: center;
              justify-content: center;
            }
            .mobile-nav {
              display: flex;
              flex-direction: column;
              position: fixed;
              top: 0;
              left: 0;
              right: 0;
              bottom: 0;
              background: rgba(0, 0, 0, 0.98);
              backdrop-filter: blur(20px);
              z-index: 1000;
              padding: 6rem 2rem 2rem;
              gap: 1.5rem;
              align-items: center;
              justify-content: flex-start;
            }
            .mobile-nav a {
              font-size: 1.25rem;
              padding: 1rem;
              width: 100%;
              text-align: center;
              border-bottom: 1px solid rgba(255, 255, 255, 0.1);
            }
            .mobile-nav .btn {
              margin-top: 1rem;
              width: 100%;
              max-width: 280px;
            }
          }
        `}
      </style>
      <header style={{
        padding: '1rem 0',
        borderBottom: '1px solid rgba(0, 255, 65, 0.2)',
        backgroundColor: 'rgba(0,0,0,0.9)',
        position: 'sticky',
        top: 0,
        zIndex: 100,
        backdropFilter: 'blur(10px)'
      }}>
        <div className="container" style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
            <div style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(1.1rem, 4vw, 1.5rem)',
              fontWeight: 900,
              letterSpacing: '2px'
            }}>
              BARBER<span className="text-neon" style={{ fontWeight: 400 }}>SCALE</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="desktop-nav">
            <Link to="/about" style={{
              color: 'var(--pure-white)',
              textDecoration: 'none',
              fontFamily: 'var(--font-heading)',
              fontSize: '0.9rem'
            }}>About Us</Link>
            <Link to="/roi" style={{
              color: 'var(--neon-green)',
              textDecoration: 'none',
              fontFamily: 'var(--font-heading)',
              fontSize: '0.9rem',
              textShadow: '0 0 10px rgba(0,255,65,0.3)'
            }}>Why BarberScale?</Link>
            <a href="/#pricing" className="btn btn-secondary" style={{
              padding: '0.5rem 1.5rem',
              fontSize: '0.85rem'
            }}>Pricing</a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="menu-btn"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </header>

      {/* Mobile Navigation Overlay */}
      {isMenuOpen && (
        <nav className="mobile-nav">
          <Link
            to="/"
            onClick={() => setIsMenuOpen(false)}
            style={{
              color: 'var(--pure-white)',
              textDecoration: 'none',
              fontFamily: 'var(--font-heading)'
            }}
          >Home</Link>
          <Link
            to="/about"
            onClick={() => setIsMenuOpen(false)}
            style={{
              color: 'var(--pure-white)',
              textDecoration: 'none',
              fontFamily: 'var(--font-heading)'
            }}
          >About Us</Link>
          <Link
            to="/roi"
            onClick={() => setIsMenuOpen(false)}
            style={{
              color: 'var(--neon-green)',
              textDecoration: 'none',
              fontFamily: 'var(--font-heading)',
              textShadow: '0 0 10px rgba(0,255,65,0.3)'
            }}
          >Why BarberScale?</Link>
          <a
            href="/#pricing"
            onClick={() => setIsMenuOpen(false)}
            className="btn btn-primary"
            style={{ marginTop: '1rem' }}
          >View Pricing</a>
        </nav>
      )}
    </>
  );
};

export default Header;
