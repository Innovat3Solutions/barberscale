import { Building2, Users, Scissors, Network, Play, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const AboutUs = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      
      {/* Hero Section */}
      <section style={{ padding: '8rem 0 5rem', backgroundColor: 'var(--void-black)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '-10%', left: '50%', transform: 'translateX(-50%)', width: '100vw', height: '100vw', maxWidth: '800px', maxHeight: '800px', background: 'radial-gradient(circle, rgba(0,255,65,0.08) 0%, transparent 70%)', zIndex: 0, pointerEvents: 'none' }} />
        
        <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
          <div className="badge neon" style={{ display: 'inline-flex', marginBottom: '2rem' }}>Our Mission</div>
          <h1 style={{ fontSize: '4.5rem', marginBottom: '1.5rem', lineHeight: 1.1 }}>
            The Operating System for<br />
            <span className="text-neon">Modern Barbers</span>
          </h1>
          <p style={{ maxWidth: '700px', margin: '0 auto 3rem', fontSize: '1.25rem', color: 'var(--gray-medium)', lineHeight: 1.6 }}>
            BarberScale is built to transform independent barbers and growing shops into organized, scalable powerhouses. We handle the systems, so you can handle the fades.
          </p>
        </div>
      </section>

      {/* The Partnership Section */}
      <section style={{ padding: '5rem 0', backgroundColor: 'var(--gray-dark)', borderTop: '1px solid rgba(0,255,65,0.1)', borderBottom: '1px solid rgba(0,255,65,0.1)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
            <div>
              <h2 style={{ fontSize: '3rem', marginBottom: '1.5rem', lineHeight: 1.2 }}>
                Developed by<br />
                <span style={{ color: 'var(--pure-white)', textShadow: '0 0 20px rgba(255,255,255,0.3)' }}>Innovat3 Solutions</span>
              </h2>
              <p style={{ fontSize: '1.1rem', color: 'var(--gray-light)', marginBottom: '1.5rem', lineHeight: 1.6 }}>
                BarberScale isn't just another booking app. It is a powerful product engineered and developed by <strong>Innovat3 Solutions</strong>—a premier software agency dedicated to building robust business operating systems.
              </p>
              <p style={{ fontSize: '1.1rem', color: 'var(--gray-light)', marginBottom: '2rem', lineHeight: 1.6 }}>
                Our deep technical expertise combined with direct industry insights resulted in the ultimate lead management and client retention machine, designed precisely for the fast-paced barbering environment.
              </p>
              
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                <a href="https://innovat3.com" target="_blank" rel="noopener noreferrer" className="btn btn-secondary" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Building2 size={18} /> Discover Innovat3
                </a>
              </div>
            </div>

            <div style={{ position: 'relative' }}>
              <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'linear-gradient(135deg, rgba(0,255,65,0.1), transparent)', borderRadius: '24px', zIndex: 0 }} />
              <div className="glass-card" style={{ padding: '3rem', position: 'relative', zIndex: 1, border: '1px solid rgba(255,255,255,0.1)' }}>
                <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '2rem' }}>
                  <Network size={64} className="text-neon" style={{ filter: 'drop-shadow(0 0 10px rgba(0,255,65,0.5))' }} />
                </div>
                <h3 style={{ fontSize: '1.5rem', textAlign: 'center', marginBottom: '1rem' }}>Enterprise-Grade Tech</h3>
                <p style={{ color: 'var(--gray-medium)', textAlign: 'center', fontSize: '0.95rem', lineHeight: 1.5 }}>
                  Bringing the same powerful AI architectures used by top companies directly to your barbershop.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why BarberScale / Pain Points */}
      <section style={{ padding: '8rem 0', backgroundColor: 'var(--void-black)' }}>
        <div className="container">
          <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ fontSize: '3rem', marginBottom: '1.5rem', lineHeight: 1.2 }}>
              Why We Built <span className="text-neon">BarberScale</span>
            </h2>
            <p style={{ color: 'var(--gray-medium)', fontSize: '1.15rem', lineHeight: 1.7, marginBottom: '2rem' }}>
              Across other industries, businesses are utilizing advanced AI and automation to experience a massive jump in customer service and skyrocket their engagement. We looked at the barbering industry and realized it was being left behind, so we decided to offer exactly the same enterprise-level leverage to barbers.
            </p>
            <p style={{ color: 'var(--gray-medium)', fontSize: '1.15rem', lineHeight: 1.7 }}>
              This industry is driven by hardworking owner-operators. You are incredibly good at your craft—delivering a world-class experience in the chair. But you shouldn't have to spend your valuable time being an expert at:
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.5rem', maxWidth: '1000px', margin: '0 auto 5rem' }}>
            <div className="glass-card" style={{ padding: '2rem', textAlign: 'center', border: '1px solid rgba(255,255,255,0.05)' }}>
              <div style={{ padding: '1rem', background: 'rgba(255,255,255,0.03)', borderRadius: '50%', display: 'inline-flex', marginBottom: '1rem' }}>
                <Users size={24} color="#888" />
              </div>
              <h4 style={{ color: 'var(--pure-white)', fontSize: '1.1rem', marginBottom: '0.5rem' }}>Constantly DMing people</h4>
            </div>
            
            <div className="glass-card" style={{ padding: '2rem', textAlign: 'center', border: '1px solid rgba(255,255,255,0.05)' }}>
              <div style={{ padding: '1rem', background: 'rgba(255,255,255,0.03)', borderRadius: '50%', display: 'inline-flex', marginBottom: '1rem' }}>
                <Network size={24} color="#888" />
              </div>
              <h4 style={{ color: 'var(--pure-white)', fontSize: '1.1rem', marginBottom: '0.5rem' }}>Answering calls mid-cut</h4>
            </div>

            <div className="glass-card" style={{ padding: '2rem', textAlign: 'center', border: '1px solid rgba(255,255,255,0.05)' }}>
              <div style={{ padding: '1rem', background: 'rgba(255,255,255,0.03)', borderRadius: '50%', display: 'inline-flex', marginBottom: '1rem' }}>
                <Play size={24} color="#888" />
              </div>
              <h4 style={{ color: 'var(--pure-white)', fontSize: '1.1rem', marginBottom: '0.5rem' }}>Chasing follow-ups</h4>
            </div>

            <div className="glass-card" style={{ padding: '2rem', textAlign: 'center', border: '1px solid rgba(255,255,255,0.05)' }}>
               <div style={{ padding: '1rem', background: 'rgba(255,255,255,0.03)', borderRadius: '50%', display: 'inline-flex', marginBottom: '1rem' }}>
                <Scissors size={24} color="#888" />
              </div>
              <h4 style={{ color: 'var(--pure-white)', fontSize: '1.1rem', marginBottom: '0.5rem' }}>Billing missed appointments</h4>
            </div>
          </div>

          <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
            <div className="badge neon" style={{ display: 'inline-flex', marginBottom: '1.5rem', background: 'rgba(0, 255, 65, 0.1)' }}>The Solution</div>
            <h3 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', color: 'var(--pure-white)' }}>
              Focus on Scaling, Not Scrambling
            </h3>
            <p style={{ color: 'var(--gray-light)', fontSize: '1.2rem', lineHeight: 1.6 }}>
              BarberScale handles these manual tasks seamlessly behind the scenes. This gives you the opportunity to generate effortless growth, recover lost revenue, and ensure you never miss a single lead. <strong>Stop working in your system, and let the system work for you.</strong>
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '6rem 0', background: 'linear-gradient(to top, rgba(0,255,65,0.1), var(--void-black))', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>Ready to Scale?</h2>
          <p style={{ fontSize: '1.2rem', color: 'var(--gray-medium)', marginBottom: '3rem', maxWidth: '600px', margin: '0 auto 3rem' }}>
            Join the elite barbershops running on Innovat3 Solutions' technology.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
            <Link to="/features" className="btn btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
              Explore Features <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default AboutUs;
