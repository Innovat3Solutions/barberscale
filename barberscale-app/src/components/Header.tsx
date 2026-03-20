import { Link, useLocation } from 'react-router-dom';
import { X, Scissors, ChevronRight, Sparkles } from 'lucide-react';
import { useState, useEffect } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  // Close menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const navLinks = [
    { to: '/', label: 'Home', isRoute: true },
    { to: '/about', label: 'About Us', isRoute: true },
    { to: '/roi', label: 'Why BarberScale?', isRoute: true, highlight: true },
    { to: '/#pricing', label: 'Pricing', isRoute: false },
  ];

  return (
    <>
      <style>
        {`
          /* Desktop Nav */
          .desktop-nav {
            display: flex;
            gap: 1.5rem;
            align-items: center;
          }

          .desktop-nav-link {
            color: var(--pure-white);
            text-decoration: none;
            font-family: var(--font-heading);
            font-size: 0.9rem;
            position: relative;
            padding: 0.5rem 0;
            transition: color 0.3s ease;
          }

          .desktop-nav-link::after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            width: 0;
            height: 2px;
            background: var(--neon-green);
            transition: width 0.3s ease;
          }

          .desktop-nav-link:hover::after {
            width: 100%;
          }

          .desktop-nav-link.highlight {
            color: var(--neon-green);
            text-shadow: 0 0 10px rgba(0,255,65,0.3);
          }

          /* Mobile Menu Button - Modern Hamburger */
          .menu-btn {
            display: none;
            background: rgba(255, 255, 255, 0.03);
            border: 1px solid rgba(255, 255, 255, 0.1);
            border-radius: 12px;
            color: var(--pure-white);
            cursor: pointer;
            padding: 0;
            z-index: 1001;
            position: relative;
            width: 48px;
            height: 48px;
            align-items: center;
            justify-content: center;
            transition: all 0.3s ease;
          }

          .menu-btn:hover, .menu-btn:active {
            background: rgba(0, 255, 65, 0.08);
            border-color: rgba(0, 255, 65, 0.3);
          }

          .menu-btn.is-open {
            background: rgba(0, 255, 65, 0.1);
            border-color: rgba(0, 255, 65, 0.4);
          }

          .menu-btn-inner {
            position: relative;
            width: 22px;
            height: 16px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
          }

          .menu-btn-line {
            display: block;
            width: 100%;
            height: 2px;
            background: var(--pure-white);
            border-radius: 2px;
            transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
            transform-origin: center;
          }

          .menu-btn-line:nth-child(1) {
            width: 100%;
          }

          .menu-btn-line:nth-child(2) {
            width: 70%;
            margin-left: auto;
          }

          .menu-btn-line:nth-child(3) {
            width: 85%;
          }

          .menu-btn:hover .menu-btn-line,
          .menu-btn:active .menu-btn-line {
            background: var(--neon-green);
          }

          .menu-btn:hover .menu-btn-line:nth-child(2),
          .menu-btn:active .menu-btn-line:nth-child(2) {
            width: 100%;
          }

          /* Animated X when open */
          .menu-btn.is-open .menu-btn-line {
            background: var(--neon-green);
          }

          .menu-btn.is-open .menu-btn-line:nth-child(1) {
            transform: translateY(7px) rotate(45deg);
          }

          .menu-btn.is-open .menu-btn-line:nth-child(2) {
            opacity: 0;
            transform: scaleX(0);
          }

          .menu-btn.is-open .menu-btn-line:nth-child(3) {
            width: 100%;
            transform: translateY(-7px) rotate(-45deg);
          }

          /* Mobile Navigation Overlay */
          .mobile-nav-overlay {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(0, 0, 0, 0.6);
            backdrop-filter: blur(8px);
            z-index: 999;
            opacity: 0;
            visibility: hidden;
            transition: all 0.3s ease;
          }

          .mobile-nav-overlay.is-open {
            opacity: 1;
            visibility: visible;
          }

          /* Mobile Navigation Panel */
          .mobile-nav {
            position: fixed;
            top: 0;
            right: 0;
            bottom: 0;
            width: 100%;
            max-width: 320px;
            background: linear-gradient(180deg, #0a0a0a 0%, #000 100%);
            z-index: 1000;
            transform: translateX(100%);
            transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
            display: flex;
            flex-direction: column;
            border-left: 1px solid rgba(0, 255, 65, 0.15);
          }

          .mobile-nav.is-open {
            transform: translateX(0);
          }

          /* Mobile Nav Header */
          .mobile-nav-header {
            padding: 1.25rem 1.5rem;
            border-bottom: 1px solid rgba(255, 255, 255, 0.08);
            display: flex;
            align-items: center;
            justify-content: space-between;
          }

          .mobile-nav-brand {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            text-decoration: none;
          }

          .mobile-nav-brand-text {
            font-family: var(--font-heading);
            font-size: 1.1rem;
            font-weight: 900;
            letter-spacing: 1px;
            color: var(--pure-white);
          }

          .mobile-nav-close {
            background: rgba(255, 255, 255, 0.05);
            border: 1px solid rgba(255, 255, 255, 0.1);
            border-radius: 10px;
            width: 40px;
            height: 40px;
            display: flex;
            align-items: center;
            justify-content: center;
            color: var(--pure-white);
            cursor: pointer;
            transition: all 0.2s ease;
          }

          .mobile-nav-close:hover {
            background: rgba(255, 255, 255, 0.1);
            border-color: rgba(0, 255, 65, 0.3);
          }

          /* Mobile Nav Links */
          .mobile-nav-links {
            flex: 1;
            padding: 1.5rem;
            display: flex;
            flex-direction: column;
            gap: 0.5rem;
          }

          .mobile-nav-link {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 1rem 1.25rem;
            background: rgba(255, 255, 255, 0.02);
            border: 1px solid rgba(255, 255, 255, 0.05);
            border-radius: 12px;
            color: var(--pure-white);
            text-decoration: none;
            font-family: var(--font-heading);
            font-size: 1rem;
            font-weight: 600;
            letter-spacing: 0.5px;
            transition: all 0.3s ease;
            opacity: 0;
            transform: translateX(20px);
          }

          .mobile-nav.is-open .mobile-nav-link {
            opacity: 1;
            transform: translateX(0);
          }

          .mobile-nav.is-open .mobile-nav-link:nth-child(1) { transition-delay: 0.1s; }
          .mobile-nav.is-open .mobile-nav-link:nth-child(2) { transition-delay: 0.15s; }
          .mobile-nav.is-open .mobile-nav-link:nth-child(3) { transition-delay: 0.2s; }
          .mobile-nav.is-open .mobile-nav-link:nth-child(4) { transition-delay: 0.25s; }

          .mobile-nav-link:hover, .mobile-nav-link:active {
            background: rgba(0, 255, 65, 0.08);
            border-color: rgba(0, 255, 65, 0.2);
          }

          .mobile-nav-link.highlight {
            background: rgba(0, 255, 65, 0.1);
            border-color: rgba(0, 255, 65, 0.25);
          }

          .mobile-nav-link.highlight .mobile-nav-link-label {
            color: var(--neon-green);
          }

          .mobile-nav-link-icon {
            color: var(--gray-medium);
            transition: transform 0.2s ease;
          }

          .mobile-nav-link:hover .mobile-nav-link-icon {
            transform: translateX(4px);
            color: var(--neon-green);
          }

          /* Mobile Nav CTA */
          .mobile-nav-cta {
            padding: 1.5rem;
            border-top: 1px solid rgba(255, 255, 255, 0.08);
          }

          .mobile-nav-cta-btn {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 0.75rem;
            width: 100%;
            padding: 1rem 1.5rem;
            background: var(--neon-green);
            color: var(--void-black);
            border: none;
            border-radius: 12px;
            font-family: var(--font-heading);
            font-size: 1rem;
            font-weight: 700;
            text-decoration: none;
            text-transform: uppercase;
            letter-spacing: 1px;
            cursor: pointer;
            transition: all 0.3s ease;
            box-shadow: 0 4px 20px rgba(0, 255, 65, 0.25);
            opacity: 0;
            transform: translateY(10px);
          }

          .mobile-nav.is-open .mobile-nav-cta-btn {
            opacity: 1;
            transform: translateY(0);
            transition-delay: 0.3s;
          }

          .mobile-nav-cta-btn:hover {
            box-shadow: 0 6px 30px rgba(0, 255, 65, 0.4);
            transform: translateY(-2px);
          }

          /* Mobile Nav Footer */
          .mobile-nav-footer {
            padding: 1rem 1.5rem 2rem;
            text-align: center;
            opacity: 0;
          }

          .mobile-nav.is-open .mobile-nav-footer {
            opacity: 1;
            transition: opacity 0.3s ease 0.35s;
          }

          .mobile-nav-footer-text {
            font-size: 0.75rem;
            color: var(--gray-medium);
            letter-spacing: 1px;
            text-transform: uppercase;
          }

          .mobile-nav-footer-link {
            color: var(--neon-green);
            text-decoration: none;
            font-weight: 600;
          }

          @media (max-width: 768px) {
            .desktop-nav {
              display: none;
            }

            /* Compact mobile header */
            .mobile-header-enhanced {
              padding: 0.5rem 0 !important;
            }

            .mobile-header-enhanced .container {
              padding-left: 1rem;
              padding-right: 1rem;
              flex-direction: row !important;
              justify-content: space-between !important;
              align-items: center !important;
            }

            .mobile-header-enhanced::after {
              content: '';
              position: absolute;
              bottom: -1px;
              left: 50%;
              transform: translateX(-50%);
              width: 60%;
              height: 1px;
              background: linear-gradient(90deg, transparent, rgba(0, 255, 65, 0.4), transparent);
            }

            /* Smaller hamburger button on mobile */
            .menu-btn {
              display: flex;
              width: 40px;
              height: 40px;
              border-radius: 10px;
            }

            .menu-btn-inner {
              width: 18px;
              height: 12px;
            }

            .menu-btn-line {
              height: 2px;
            }

            .menu-btn.is-open .menu-btn-line:nth-child(1) {
              transform: translateY(5px) rotate(45deg);
            }

            .menu-btn.is-open .menu-btn-line:nth-child(3) {
              transform: translateY(-5px) rotate(-45deg);
            }

            /* Smaller logo on mobile */
            .mobile-logo-text {
              font-size: 1.1rem !important;
            }
          }

          @media (min-width: 769px) {
            .mobile-nav-overlay,
            .mobile-nav {
              display: none;
            }
          }
        `}
      </style>

      <header className="mobile-header-enhanced" style={{
        padding: isScrolled ? '0.75rem 0' : '1rem 0',
        borderBottom: '1px solid rgba(0, 255, 65, 0.2)',
        backgroundColor: isScrolled ? 'rgba(0,0,0,0.95)' : 'rgba(0,0,0,0.9)',
        position: 'sticky',
        top: 0,
        zIndex: 100,
        backdropFilter: 'blur(10px)',
        transition: 'all 0.3s ease'
      }}>
        <div className="container" style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <Link to="/" style={{ textDecoration: 'none', color: 'inherit', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
            <Scissors size={18} color="var(--neon-green)" style={{ flexShrink: 0 }} />
            <div className="mobile-logo-text" style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(1rem, 4vw, 1.5rem)',
              fontWeight: 900,
              letterSpacing: '1.5px'
            }}>
              BARBER<span className="text-neon" style={{ fontWeight: 400 }}>SCALE</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="desktop-nav">
            <Link to="/about" className="desktop-nav-link">About Us</Link>
            <Link to="/roi" className="desktop-nav-link highlight">Why BarberScale?</Link>
            <a href="/#pricing" className="btn btn-secondary" style={{
              padding: '0.5rem 1.5rem',
              fontSize: '0.85rem'
            }}>Pricing</a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className={`menu-btn ${isMenuOpen ? 'is-open' : ''}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className="menu-btn-inner">
              <span className="menu-btn-line"></span>
              <span className="menu-btn-line"></span>
              <span className="menu-btn-line"></span>
            </div>
          </button>
        </div>
      </header>

      {/* Mobile Navigation Overlay */}
      <div
        className={`mobile-nav-overlay ${isMenuOpen ? 'is-open' : ''}`}
        onClick={() => setIsMenuOpen(false)}
      />

      {/* Mobile Navigation Panel */}
      <nav className={`mobile-nav ${isMenuOpen ? 'is-open' : ''}`}>
        {/* Mobile Nav Header */}
        <div className="mobile-nav-header">
          <Link to="/" className="mobile-nav-brand" onClick={() => setIsMenuOpen(false)}>
            <Scissors size={18} color="var(--neon-green)" />
            <span className="mobile-nav-brand-text">
              BARBER<span style={{ color: 'var(--neon-green)', fontWeight: 400 }}>SCALE</span>
            </span>
          </Link>
          <button className="mobile-nav-close" onClick={() => setIsMenuOpen(false)}>
            <X size={20} />
          </button>
        </div>

        {/* Mobile Nav Links */}
        <div className="mobile-nav-links">
          {navLinks.map((link, index) => (
            link.isRoute ? (
              <Link
                key={index}
                to={link.to}
                className={`mobile-nav-link ${link.highlight ? 'highlight' : ''}`}
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="mobile-nav-link-label">{link.label}</span>
                <ChevronRight size={18} className="mobile-nav-link-icon" />
              </Link>
            ) : (
              <a
                key={index}
                href={link.to}
                className={`mobile-nav-link ${link.highlight ? 'highlight' : ''}`}
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="mobile-nav-link-label">{link.label}</span>
                <ChevronRight size={18} className="mobile-nav-link-icon" />
              </a>
            )
          ))}
        </div>

        {/* Mobile Nav CTA */}
        <div className="mobile-nav-cta">
          <a
            href="/#demo"
            className="mobile-nav-cta-btn"
            onClick={() => setIsMenuOpen(false)}
          >
            <Sparkles size={18} />
            Get Started
          </a>
        </div>

        {/* Mobile Nav Footer */}
        <div className="mobile-nav-footer">
          <p className="mobile-nav-footer-text">
            Powered by{' '}
            <a
              href="https://www.innovat3solutions.com"
              target="_blank"
              rel="noopener noreferrer"
              className="mobile-nav-footer-link"
            >
              Innovat3
            </a>
          </p>
        </div>
      </nav>
    </>
  );
};

export default Header;
