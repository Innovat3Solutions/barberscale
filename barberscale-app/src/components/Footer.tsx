import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, ArrowRight, Scissors, Globe, MessageCircle, Users, Share2 } from 'lucide-react';
import { useState } from 'react';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'ROI Calculator', path: '/roi' },
    { name: 'Pricing', path: '/#pricing' },
  ];

  const features = [
    { name: 'Smart Booking', path: '/#features' },
    { name: 'Analytics Dashboard', path: '/#features' },
    { name: 'Marketing Automation', path: '/#features' },
    { name: 'Growth Tools', path: '/#features' },
  ];

  const resources = [
    { name: 'FAQ', path: '/#faq' },
    { name: 'Help Center', path: '#' },
    { name: 'Support', path: '#' },
    { name: 'Blog', path: '#' },
  ];

  const legal = [
    { name: 'Privacy Policy', path: '#' },
    { name: 'Terms of Service', path: '#' },
    { name: 'Cookie Policy', path: '#' },
  ];

  const socialLinks = [
    { icon: Globe, href: '#', label: 'Website' },
    { icon: MessageCircle, href: '#', label: 'Chat' },
    { icon: Users, href: '#', label: 'Community' },
    { icon: Share2, href: '#', label: 'Share' },
  ];

  const linkStyle: React.CSSProperties = {
    color: 'var(--gray-medium)',
    textDecoration: 'none',
    fontSize: '0.95rem',
    transition: 'all 0.3s ease',
    display: 'block',
    padding: '0.4rem 0',
  };

  const headingStyle: React.CSSProperties = {
    fontFamily: 'var(--font-heading)',
    fontSize: '1rem',
    fontWeight: 700,
    color: 'var(--pure-white)',
    marginBottom: '1.5rem',
    textTransform: 'uppercase',
    letterSpacing: '2px',
  };

  return (
    <footer style={{
      backgroundColor: 'var(--void-black)',
      borderTop: '2px solid var(--neon-green)',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Background glow effect */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: '50%',
        transform: 'translateX(-50%)',
        width: '600px',
        height: '300px',
        background: 'radial-gradient(ellipse at center, rgba(0, 255, 65, 0.08) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      {/* Newsletter Section */}
      <div style={{
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
        padding: '3rem 0',
      }}>
        <div className="container" style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '2rem',
        }}>
          <div style={{ flex: '1', minWidth: '280px' }}>
            <h3 style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '1.5rem',
              fontWeight: 700,
              color: 'var(--pure-white)',
              marginBottom: '0.5rem',
            }}>
              Stay in the <span className="text-neon">Loop</span>
            </h3>
            <p style={{ color: 'var(--gray-medium)', fontSize: '0.95rem' }}>
              Get the latest updates, tips, and exclusive offers for growing your barbershop.
            </p>
          </div>
          <form onSubmit={handleSubscribe} style={{
            display: 'flex',
            gap: '0.75rem',
            flex: '1',
            maxWidth: '500px',
            minWidth: '280px',
          }}>
            <div style={{
              flex: 1,
              position: 'relative',
            }}>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                style={{
                  width: '100%',
                  padding: '1rem 1.25rem',
                  backgroundColor: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                  borderRadius: '8px',
                  color: 'var(--pure-white)',
                  fontSize: '1rem',
                  fontFamily: 'var(--font-body)',
                  outline: 'none',
                  transition: 'all 0.3s ease',
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = 'var(--neon-green)';
                  e.target.style.boxShadow = '0 0 20px rgba(0, 255, 65, 0.2)';
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = 'rgba(255, 255, 255, 0.15)';
                  e.target.style.boxShadow = 'none';
                }}
              />
            </div>
            <button
              type="submit"
              style={{
                padding: '1rem 1.5rem',
                backgroundColor: subscribed ? 'rgba(0, 255, 65, 0.2)' : 'var(--neon-green)',
                border: 'none',
                borderRadius: '8px',
                color: subscribed ? 'var(--neon-green)' : 'var(--void-black)',
                fontFamily: 'var(--font-heading)',
                fontWeight: 700,
                fontSize: '0.9rem',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                transition: 'all 0.3s ease',
                whiteSpace: 'nowrap',
              }}
              onMouseEnter={(e) => {
                if (!subscribed) {
                  e.currentTarget.style.boxShadow = '0 0 30px rgba(0, 255, 65, 0.5)';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              {subscribed ? 'Subscribed!' : 'Subscribe'}
              {!subscribed && <ArrowRight size={18} />}
            </button>
          </form>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container" style={{ padding: '4rem 2rem' }}>
        <style>
          {`
            .footer-grid {
              display: grid;
              grid-template-columns: 2fr repeat(4, 1fr);
              gap: 2rem;
            }
            @media (max-width: 1024px) {
              .footer-grid {
                grid-template-columns: 1fr 1fr 1fr;
              }
              .footer-grid > div:first-child {
                grid-column: span 3;
              }
            }
            @media (max-width: 640px) {
              .footer-grid {
                grid-template-columns: 1fr 1fr;
              }
              .footer-grid > div:first-child {
                grid-column: span 2;
              }
            }
          `}
        </style>
        <div className="footer-grid">
          {/* Brand Column */}
          <div>
            <Link to="/" style={{ textDecoration: 'none', display: 'inline-block', marginBottom: '1.5rem' }}>
              <div style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '1.5rem',
                fontWeight: 900,
                letterSpacing: '1px',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                whiteSpace: 'nowrap',
              }}>
                <Scissors size={24} style={{ color: 'var(--neon-green)', flexShrink: 0 }} />
                <span style={{ color: 'var(--pure-white)' }}>BARBER</span>
                <span className="text-neon" style={{ fontWeight: 400 }}>SCALE</span>
              </div>
            </Link>
            <p style={{
              color: 'var(--gray-medium)',
              fontSize: '0.95rem',
              lineHeight: 1.7,
              marginBottom: '1.5rem',
            }}>
              The ultimate growth OS for modern barbershops. Automate. Elevate. Scale.
            </p>

            {/* Social Links */}
            <div style={{ display: 'flex', gap: '0.75rem' }}>
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '8px',
                    backgroundColor: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--gray-medium)',
                    transition: 'all 0.3s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(0, 255, 65, 0.15)';
                    e.currentTarget.style.borderColor = 'var(--neon-green)';
                    e.currentTarget.style.color = 'var(--neon-green)';
                    e.currentTarget.style.transform = 'translateY(-3px)';
                    e.currentTarget.style.boxShadow = '0 5px 20px rgba(0, 255, 65, 0.3)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                    e.currentTarget.style.color = 'var(--gray-medium)';
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={headingStyle}>Quick Links</h4>
            <nav>
              {quickLinks.map((link, index) => (
                <Link
                  key={index}
                  to={link.path}
                  style={linkStyle}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = 'var(--neon-green)';
                    e.currentTarget.style.paddingLeft = '8px';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = 'var(--gray-medium)';
                    e.currentTarget.style.paddingLeft = '0';
                  }}
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Features */}
          <div>
            <h4 style={headingStyle}>Features</h4>
            <nav>
              {features.map((link, index) => (
                <Link
                  key={index}
                  to={link.path}
                  style={linkStyle}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = 'var(--neon-green)';
                    e.currentTarget.style.paddingLeft = '8px';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = 'var(--gray-medium)';
                    e.currentTarget.style.paddingLeft = '0';
                  }}
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Resources */}
          <div>
            <h4 style={headingStyle}>Resources</h4>
            <nav>
              {resources.map((link, index) => (
                <Link
                  key={index}
                  to={link.path}
                  style={linkStyle}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = 'var(--neon-green)';
                    e.currentTarget.style.paddingLeft = '8px';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = 'var(--gray-medium)';
                    e.currentTarget.style.paddingLeft = '0';
                  }}
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h4 style={headingStyle}>Contact</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <a
                href="mailto:hello@barberscale.com"
                style={{
                  ...linkStyle,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = 'var(--neon-green)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = 'var(--gray-medium)';
                }}
              >
                <Mail size={18} style={{ flexShrink: 0 }} />
                hello@barberscale.com
              </a>
              <a
                href="tel:+1234567890"
                style={{
                  ...linkStyle,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = 'var(--neon-green)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = 'var(--gray-medium)';
                }}
              >
                <Phone size={18} style={{ flexShrink: 0 }} />
                (123) 456-7890
              </a>
              <div style={{
                ...linkStyle,
                display: 'flex',
                alignItems: 'flex-start',
                gap: '0.75rem',
              }}>
                <MapPin size={18} style={{ flexShrink: 0, marginTop: '2px' }} />
                <span>Austin, TX<br />United States</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div style={{
        borderTop: '1px solid rgba(255, 255, 255, 0.1)',
        padding: '1.5rem 0',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
      }}>
        <div className="container" style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '1rem',
        }}>
          <p style={{
            fontSize: '0.9rem',
            color: 'var(--gray-medium)',
            margin: 0,
          }}>
            &copy; {new Date().getFullYear()} BarberScale. All rights reserved.
          </p>

          {/* Legal Links */}
          <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
            {legal.map((link, index) => (
              <Link
                key={index}
                to={link.path}
                style={{
                  color: 'var(--gray-medium)',
                  textDecoration: 'none',
                  fontSize: '0.85rem',
                  transition: 'color 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = 'var(--neon-green)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = 'var(--gray-medium)';
                }}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Powered By */}
          <div style={{
            fontSize: '0.75rem',
            color: 'var(--gray-medium)',
            textTransform: 'uppercase',
            letterSpacing: '2px',
          }}>
            Powered by{' '}
            <a
              href="https://innovat3solutions.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: 'var(--neon-green)',
                fontWeight: 600,
                textDecoration: 'none',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.textShadow = '0 0 20px rgba(0, 255, 65, 0.5)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.textShadow = 'none';
              }}
            >
              Innovat3 Solutions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
