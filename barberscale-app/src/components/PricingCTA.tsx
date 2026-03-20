import { ScissorsLineDashed } from 'lucide-react';

const PricingCTA = () => {
  return (
    <section id="pricing" style={{ padding: '8rem 0', position: 'relative', textAlign: 'center', overflow: 'hidden' }}>

      {/* Premium Dark Gradient Background */}
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'linear-gradient(135deg, var(--void-black) 0%, #05150a 50%, #020804 100%)', zIndex: 0 }} />
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'radial-gradient(ellipse at top, rgba(0,255,65,0.12) 0%, transparent 70%)', zIndex: 0 }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.5rem' }}>
          <ScissorsLineDashed size={48} color="var(--neon-green)" />
        </div>
        <h2 className="title-xl" style={{ textTransform: 'uppercase', textShadow: '0 4px 15px rgba(0,0,0,0.8)' }}>
          Stop Losing <span className="text-neon">Clients.</span>
        </h2>
        <p style={{ maxWidth: '600px', margin: '0 auto 4rem auto', fontSize: '1.2rem', color: 'rgba(255,255,255,0.9)', textShadow: '0 2px 10px rgba(0,0,0,0.8)' }}>
          Get the ultimate SaaS back-office for your barbershop today. Automate everything and focus strictly on the craft.
        </p>

        {/* Desktop Grid / Mobile Carousel Wrapper */}
        <div className="pricing-carousel-wrapper">
          <div className="pricing-grid pricing-carousel" style={{ display: 'grid', gap: '2rem', marginTop: '3rem' }}>
            {/* Starter Tier */}
            <div className="data-frame pricing-card" style={{ padding: '2.5rem 2rem', backdropFilter: 'blur(10px)', background: 'rgba(26, 26, 26, 0.4)', display: 'flex', flexDirection: 'column' }}>
              <h3 style={{ fontSize: '2rem', marginBottom: '0.5rem', color: 'var(--pure-white)' }}>Starter</h3>
              <p style={{ color: 'rgba(255,255,255,0.7)', marginBottom: '1.5rem', minHeight: '3rem' }}>Perfect for a single shop looking to automate operations.</p>
              <div className="pricing-amount" style={{ fontSize: '3.5rem', fontFamily: 'var(--font-heading)', color: 'var(--neon-green)', marginBottom: '0.5rem', lineHeight: '1', textShadow: '0 0 20px rgba(0,255,65,0.3)' }}>
                $125<span style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.7)', textShadow: 'none' }}>/mo</span>
              </div>
              <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.9rem', marginBottom: '2rem' }}>+$897 one-time setup</p>
              <ul style={{ listStyle: 'none', margin: '0 0 2rem 0', padding: 0, textAlign: 'left', display: 'flex', flexDirection: 'column', gap: '0.75rem', flexGrow: 1 }}>
                <li style={{ borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '0.5rem', fontSize: '1rem' }}>✓ 1 Store Location</li>
                <li style={{ borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '0.5rem', fontSize: '1rem' }}>✓ Smart Calendar Integration</li>
                <li style={{ borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '0.5rem', fontSize: '1rem' }}>✓ Automated Review Campaigns</li>
                <li style={{ borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '0.5rem', fontSize: '1rem' }}>✓ SMS Marketing Blasts</li>
                <li style={{ paddingBottom: '0.5rem', fontSize: '1rem', color: 'rgba(255,255,255,0.3)' }}>✗ Voice AI Call Agent</li>
              </ul>
              <a href="#" className="btn btn-primary" style={{ width: '100%', fontSize: '1.1rem', padding: '0.8rem', textShadow: 'none' }}>Get Started</a>
            </div>

            {/* Growth Tier */}
            <div className="data-frame pricing-card pricing-card-popular" style={{ position: 'relative', padding: '2.5rem 2rem', backdropFilter: 'blur(10px)', background: 'rgba(0, 255, 65, 0.05)', display: 'flex', flexDirection: 'column', border: '1px solid rgba(0,255,65,0.3)', boxShadow: '0 0 30px rgba(0,255,65,0.1)' }}>
              <div className="popular-badge" style={{ position: 'absolute', top: '-12px', left: '50%', transform: 'translateX(-50%)', background: 'var(--neon-green)', color: '#000', padding: '0.2rem 1rem', borderRadius: '20px', fontSize: '0.8rem', fontWeight: 'bold', textTransform: 'uppercase' }}>Most Popular</div>
              <h3 style={{ fontSize: '2rem', marginBottom: '0.5rem', color: 'var(--neon-green)' }}>Growth</h3>
              <p style={{ color: 'rgba(255,255,255,0.7)', margin: '0 0 1.5rem', minHeight: '3rem' }}>Supercharge your single shop with our Voice AI Agent.</p>
              <div className="pricing-amount" style={{ fontSize: '3.5rem', fontFamily: 'var(--font-heading)', color: 'var(--neon-green)', marginBottom: '0.5rem', lineHeight: '1', textShadow: '0 0 20px rgba(0,255,65,0.3)' }}>
                $197<span style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.7)', textShadow: 'none' }}>/mo</span>
              </div>
              <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.9rem', marginBottom: '2rem' }}>+$897 one-time setup</p>
              <ul style={{ listStyle: 'none', margin: '0 0 2rem 0', padding: 0, textAlign: 'left', display: 'flex', flexDirection: 'column', gap: '0.75rem', flexGrow: 1 }}>
                <li style={{ borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '0.5rem', fontSize: '1rem' }}>✓ 1 Store Location</li>
                <li style={{ borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '0.5rem', fontSize: '1rem', color: 'var(--neon-green)' }}>✓ Voice AI Call Agent</li>
                <li style={{ borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '0.5rem', fontSize: '1rem' }}>✓ Smart Calendar Integration</li>
                <li style={{ borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '0.5rem', fontSize: '1rem' }}>✓ Automated Review Campaigns</li>
                <li style={{ paddingBottom: '0.5rem', fontSize: '1rem' }}>✓ SMS Marketing Blasts</li>
              </ul>
              <a href="#" className="btn btn-primary" style={{ width: '100%', fontSize: '1.1rem', padding: '0.8rem', textShadow: 'none' }}>Get Started</a>
            </div>

            {/* Multi-Store Tier */}
            <div className="data-frame pricing-card" style={{ padding: '2.5rem 2rem', backdropFilter: 'blur(10px)', background: 'rgba(26, 26, 26, 0.4)', display: 'flex', flexDirection: 'column' }}>
              <h3 style={{ fontSize: '2rem', marginBottom: '0.5rem', color: 'var(--pure-white)' }}>Multi-Store</h3>
              <p style={{ color: 'rgba(255,255,255,0.7)', marginBottom: '1.5rem', minHeight: '3rem' }}>Scale your operations across multiple locations effortlessly.</p>
              <div className="pricing-amount" style={{ fontSize: '3.5rem', fontFamily: 'var(--font-heading)', color: 'var(--neon-green)', marginBottom: '0.5rem', lineHeight: '1', textShadow: '0 0 20px rgba(0,255,65,0.3)' }}>
                $297<span style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.7)', textShadow: 'none' }}>/mo</span>
              </div>
              <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.9rem', marginBottom: '2rem' }}>+$1,297 one-time setup</p>
              <ul style={{ listStyle: 'none', margin: '0 0 2rem 0', padding: 0, textAlign: 'left', display: 'flex', flexDirection: 'column', gap: '0.75rem', flexGrow: 1 }}>
                <li style={{ borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '0.5rem', fontSize: '1rem' }}>✓ Up to 3 Store Locations</li>
                <li style={{ borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '0.5rem', fontSize: '1rem', color: 'var(--neon-green)' }}>✓ Voice AI Call Agent</li>
                <li style={{ borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '0.5rem', fontSize: '1rem' }}>✓ Smart Calendar Integration</li>
                <li style={{ borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '0.5rem', fontSize: '1rem' }}>✓ Automated Review Campaigns</li>
                <li style={{ paddingBottom: '0.5rem', fontSize: '1rem' }}>✓ SMS Marketing Blasts</li>
              </ul>
              <a href="#" className="btn btn-primary" style={{ width: '100%', fontSize: '1.1rem', padding: '0.8rem', textShadow: 'none' }}>Get Started</a>
            </div>
          </div>

          {/* Swipe Indicator - Mobile Only */}
          <div className="pricing-swipe-hint">
            <span>Swipe to compare plans</span>
            <div className="swipe-dots">
              <span className="dot"></span>
              <span className="dot"></span>
              <span className="dot"></span>
            </div>
          </div>
        </div>

        <div style={{ marginTop: '4rem', padding: '2.5rem', background: 'rgba(0, 255, 65, 0.05)', border: '1px dashed rgba(0, 255, 65, 0.3)', borderRadius: '15px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', backdropFilter: 'blur(5px)' }}>
          <h3 style={{ fontSize: '1.8rem', marginBottom: '1rem', color: 'var(--pure-white)' }}>More than 5 locations?</h3>
          <p style={{ color: 'rgba(255,255,255,0.8)', marginBottom: '1.5rem', maxWidth: '600px', margin: '0 auto 1.5rem auto' }}>
            We offer custom enterprise pricing and dedicated support for large franchises and statewide operations. Let's get in the conversation.
          </p>
          <a href="#" className="btn btn-primary" style={{ padding: '0.8rem 2.5rem', fontSize: '1.1rem', background: 'transparent', border: '1px solid var(--neon-green)', color: 'var(--neon-green)', textShadow: 'none', transition: 'all 0.3s ease', textTransform: 'uppercase', letterSpacing: '1px' }}>
            Contact Sales
          </a>
        </div>
      </div>
    </section>
  );
};

export default PricingCTA;
