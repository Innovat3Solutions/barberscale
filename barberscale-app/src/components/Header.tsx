import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header style={{ padding: '1.5rem 0', borderBottom: '1px solid rgba(0, 255, 65, 0.2)', backgroundColor: 'rgba(0,0,0,0.8)', position: 'sticky', top: 0, zIndex: 100, backdropFilter: 'blur(10px)' }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
            <div style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem', fontWeight: 900, letterSpacing: '2px' }}>
              BARBER<span className="text-neon" style={{ fontWeight: 400 }}>SCALE</span>
            </div>
          </Link>
        </div>
        <nav style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
          <Link to="/about" style={{ color: 'var(--pure-white)', textDecoration: 'none', fontFamily: 'var(--font-heading)', fontSize: '0.9rem' }}>About Us</Link>
          <Link to="/roi" style={{ color: 'var(--neon-green)', textDecoration: 'none', fontFamily: 'var(--font-heading)', fontSize: '0.9rem', textShadow: '0 0 10px rgba(0,255,65,0.3)' }}>Why BarberScale?</Link>
          <Link to="/" style={{ color: 'var(--pure-white)', textDecoration: 'none', fontFamily: 'var(--font-heading)', fontSize: '0.9rem' }}>Demo</Link>
          <a href="/#pricing" className="btn btn-secondary" style={{ padding: '0.5rem 1.5rem', fontSize: '0.85rem' }}>Pricing</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
