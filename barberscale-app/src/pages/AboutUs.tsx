import { Building2, Network, ArrowRight, MessageSquare, PhoneMissed, Clock, Wallet } from 'lucide-react';
import { Link } from 'react-router-dom';

const AboutUs = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', width: '100%', overflowX: 'hidden' }}>

      {/* Hero Section */}
      <section className="about-hero" style={{ padding: '6rem 0 4rem', backgroundColor: 'var(--void-black)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '-10%', left: '50%', transform: 'translateX(-50%)', width: '100%', height: '100vw', maxWidth: '800px', maxHeight: '800px', background: 'radial-gradient(circle, rgba(0,255,65,0.08) 0%, transparent 70%)', zIndex: 0, pointerEvents: 'none' }} />

        <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
          <div className="badge neon" style={{ display: 'inline-flex', marginBottom: '1.5rem' }}>Our Mission</div>
          <h1 className="title-xl">
            The Operating System for<br />
            <span className="text-neon">Modern Barbers</span>
          </h1>
          <p className="subtitle-text" style={{ maxWidth: '700px', margin: '0 auto 2rem' }}>
            BarberScale is built to transform independent barbers and growing shops into organized, scalable powerhouses. We handle the systems, so you can handle the fades.
          </p>
        </div>
      </section>

      {/* The Partnership Section */}
      <section style={{ padding: '4rem 0', backgroundColor: 'var(--gray-dark)', borderTop: '1px solid rgba(0,255,65,0.1)', borderBottom: '1px solid rgba(0,255,65,0.1)' }}>
        <div className="container">
          <div className="split-layout">
            <div>
              <h2 className="title-lg">
                Developed by<br />
                <span style={{ color: 'var(--pure-white)', textShadow: '0 0 20px rgba(255,255,255,0.3)' }}>Innovat3 Solutions</span>
              </h2>
              <p style={{ fontSize: '1rem', color: 'var(--gray-light)', marginBottom: '1.5rem', lineHeight: 1.6 }}>
                BarberScale isn't just another booking app. It is a powerful product engineered and developed by <strong>Innovat3 Solutions</strong>—a premier software agency dedicated to building robust business operating systems.
              </p>
              <p style={{ fontSize: '1rem', color: 'var(--gray-light)', marginBottom: '2rem', lineHeight: 1.6 }}>
                Our deep technical expertise combined with direct industry insights resulted in the ultimate lead management and client retention machine, designed precisely for the fast-paced barbering environment.
              </p>

              <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap' }}>
                <a href="https://www.innovat3solutions.com" target="_blank" rel="noopener noreferrer" className="btn btn-secondary" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Building2 size={18} /> Discover Innovat3
                </a>
              </div>
            </div>

            <div style={{ position: 'relative' }}>
              <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'linear-gradient(135deg, rgba(0,255,65,0.1), transparent)', borderRadius: '24px', zIndex: 0 }} />
              <div className="glass-card" style={{ padding: '2rem', position: 'relative', zIndex: 1, border: '1px solid rgba(255,255,255,0.1)' }}>
                <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.5rem' }}>
                  <Network size={48} className="text-neon" style={{ filter: 'drop-shadow(0 0 10px rgba(0,255,65,0.5))' }} />
                </div>
                <h3 style={{ fontSize: '1.25rem', textAlign: 'center', marginBottom: '0.75rem' }}>Enterprise-Grade Tech</h3>
                <p style={{ color: 'var(--gray-medium)', textAlign: 'center', fontSize: '0.9rem', lineHeight: 1.5 }}>
                  Bringing the same powerful AI architectures used by top companies directly to your barbershop.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why BarberScale / Pain Points */}
      <section className="section-padding" style={{ backgroundColor: 'var(--void-black)' }}>
        <div className="container">
          <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center', marginBottom: '3rem' }}>
            <h2 className="title-lg" style={{ marginBottom: '1rem' }}>
              Why We Built <span className="text-neon">BarberScale</span>
            </h2>
            <p style={{ color: 'var(--gray-medium)', fontSize: '1rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
              Across other industries, businesses are utilizing advanced AI and automation to experience a massive jump in customer service and skyrocket their engagement. We looked at the barbering industry and realized it was being left behind.
            </p>
            <p style={{ color: 'var(--gray-medium)', fontSize: '1rem', lineHeight: 1.7 }}>
              This industry is driven by hardworking owner-operators. You are incredibly good at your craft—delivering a world-class experience in the chair. But you shouldn't have to spend your valuable time being an expert at:
            </p>
          </div>

          {/* Desktop Grid / Mobile Carousel */}
          <div className="pain-points-carousel-wrapper">
            <div className="pain-points-grid pain-points-carousel">
              {/* Card 1: DMs */}
              <div className="pain-card glass-card">
                <div className="pain-accent" />
                <div className="pain-icon">
                  <MessageSquare size={24} color="#ff3333" />
                </div>
                <h4>Manual Booking DMs</h4>
                <p>Wasting hours every week locked in endless back-and-forth messages just to secure a single appointment slot.</p>
              </div>

              {/* Card 2: Calls */}
              <div className="pain-card glass-card">
                <div className="pain-accent" />
                <div className="pain-icon">
                  <PhoneMissed size={24} color="#ff3333" />
                </div>
                <h4>Mid-Cut Disruptions</h4>
                <p>Stopping a flawless fade to answer a ringing phone disrupts the client experience and breaks your flow.</p>
              </div>

              {/* Card 3: Follow-Ups */}
              <div className="pain-card glass-card">
                <div className="pain-accent" />
                <div className="pain-icon">
                  <Clock size={24} color="#ff3333" />
                </div>
                <h4>Chasing Follow-Ups</h4>
                <p>Manually hunting down clients to confirm appointments or ask for their review is tedious and unprofessional.</p>
              </div>

              {/* Card 4: Billing */}
              <div className="pain-card glass-card">
                <div className="pain-accent" />
                <div className="pain-icon">
                  <Wallet size={24} color="#ff3333" />
                </div>
                <h4>No-Show Revenue Loss</h4>
                <p>Eating the cost of last-minute cancellations without an automated deposit and billing system in place.</p>
              </div>
            </div>

            {/* Swipe Indicator - Mobile Only */}
            <div className="carousel-swipe-hint">
              <span>Swipe to explore</span>
              <div className="swipe-dots">
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
              </div>
            </div>
          </div>

          <div style={{ maxWidth: '800px', margin: '3rem auto 0', textAlign: 'center' }}>
            <div className="badge neon" style={{ display: 'inline-flex', marginBottom: '1rem' }}>The Solution</div>
            <h3 className="title-md" style={{ color: 'var(--pure-white)' }}>
              Focus on Scaling, Not Scrambling
            </h3>
            <p style={{ color: 'var(--gray-light)', fontSize: '1rem', lineHeight: 1.6 }}>
              BarberScale handles these manual tasks seamlessly behind the scenes. This gives you the opportunity to generate effortless growth, recover lost revenue, and ensure you never miss a single lead.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding" style={{ background: 'linear-gradient(to top, rgba(0,255,65,0.1), var(--void-black))', textAlign: 'center' }}>
        <div className="container">
          <h2 className="title-lg">Ready to Scale?</h2>
          <p style={{ fontSize: '1rem', color: 'var(--gray-medium)', marginBottom: '2rem', maxWidth: '600px', margin: '0 auto 2rem' }}>
            Join the elite barbershops running on Innovat3 Solutions' technology.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <Link to="/#features" className="btn btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
              Explore Features <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      <style>{`
        /* Desktop Grid Layout */
        .pain-points-carousel-wrapper {
          max-width: 1100px;
          margin: 0 auto;
        }

        .pain-points-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 1.5rem;
        }

        .pain-card {
          padding: 1.5rem;
          border: 1px solid rgba(255,51,51,0.1) !important;
          background: linear-gradient(135deg, rgba(26,26,26,0.6) 0%, rgba(10,10,10,0.8) 100%) !important;
          position: relative;
          overflow: hidden;
          transition: all 0.3s ease;
          display: flex;
          flex-direction: column;
        }

        .pain-card:hover {
          transform: translateY(-5px);
          border-color: rgba(255,51,51,0.4) !important;
          box-shadow: 0 10px 30px rgba(255,51,51,0.1);
        }

        .pain-accent {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 2px;
          background: linear-gradient(90deg, transparent, #ff3333, transparent);
        }

        .pain-icon {
          display: inline-flex;
          padding: 0.75rem;
          border-radius: 12px;
          background: rgba(255,51,51,0.05);
          margin-bottom: 1rem;
          align-self: flex-start;
        }

        .pain-card h4 {
          color: var(--pure-white);
          font-size: 1.1rem;
          margin-bottom: 0.5rem;
          letter-spacing: 0.5px;
          line-height: 1.3;
          text-transform: none;
          font-family: var(--font-body);
          font-weight: 600;
        }

        .pain-card p {
          color: var(--gray-medium);
          font-size: 0.9rem;
          line-height: 1.6;
          margin: 0;
          flex: 1;
        }

        /* Swipe hint - hidden on desktop */
        .carousel-swipe-hint {
          display: none;
        }

        /* ========== MOBILE CAROUSEL ========== */
        @media (max-width: 768px) {
          .pain-points-carousel-wrapper {
            margin: 0 -1rem;
            padding: 0;
            overflow: visible;
          }

          .pain-points-carousel {
            display: flex !important;
            gap: 1rem;
            overflow-x: auto;
            scroll-snap-type: x mandatory;
            -webkit-overflow-scrolling: touch;
            padding: 0.5rem 1rem 1.5rem;
            scrollbar-width: none;
            -ms-overflow-style: none;
          }

          .pain-points-carousel::-webkit-scrollbar {
            display: none;
          }

          .pain-points-carousel .pain-card {
            flex: 0 0 85%;
            min-width: 280px;
            max-width: 320px;
            scroll-snap-align: center;
            padding: 1.25rem;
          }

          .pain-card:hover {
            transform: none;
          }

          .pain-card h4 {
            font-size: 1rem;
          }

          .pain-card p {
            font-size: 0.85rem;
          }

          /* Swipe hint visible on mobile */
          .carousel-swipe-hint {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 0.5rem;
            padding: 0.5rem 0 0;
            color: var(--gray-medium);
            font-size: 0.75rem;
            text-transform: uppercase;
            letter-spacing: 1px;
          }

          .swipe-dots {
            display: flex;
            gap: 6px;
          }

          .swipe-dots .dot {
            width: 6px;
            height: 6px;
            border-radius: 50%;
            background: rgba(255,255,255,0.2);
            transition: all 0.3s ease;
          }

          .swipe-dots .dot:first-child {
            background: var(--neon-green);
            box-shadow: 0 0 8px rgba(0,255,65,0.5);
          }

          .about-hero {
            padding: 5rem 0 3rem !important;
          }
        }

        /* Extra small screens */
        @media (max-width: 400px) {
          .pain-points-carousel .pain-card {
            flex: 0 0 90%;
            min-width: 260px;
          }
        }
      `}</style>
    </div>
  );
};

export default AboutUs;
