import { useState, useEffect } from 'react';
import { Bot, CalendarCheck, MessageSquare, CheckCircle2, DollarSign, Users, PhoneMissed, X, Calculator, Smartphone, TrendingUp, Sparkles } from 'lucide-react';

const ROI = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [clientsPerWeek, setClientsPerWeek] = useState(30);
  const [ticketPrice, setTicketPrice] = useState(40);

  const missedRate = 5 / 30;
  const missedAppointments = Math.round(clientsPerWeek * missedRate);
  const missedCalls = Math.round(clientsPerWeek * missedRate);
  const lostRevenuePerWeek = missedAppointments * ticketPrice;
  const lostRevenuePerMonth = lostRevenuePerWeek * 4;

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isModalOpen]);

  return (
    <div className="roi-page">
      <style>{`
        .roi-page {
          background: var(--void-black);
          min-height: 100vh;
          overflow-x: hidden;
        }

        .roi-hero {
          padding: 8rem 0 4rem;
          text-align: center;
          position: relative;
        }

        .roi-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          margin-bottom: 1.5rem;
          background: linear-gradient(90deg, rgba(0,255,65,0.05) 0%, rgba(0,255,65,0.15) 50%, rgba(0,255,65,0.05) 100%);
          border: 1px solid rgba(0,255,65,0.3);
          padding: 0.5rem 1rem;
          border-radius: 50px;
        }

        .roi-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 3rem;
          align-items: center;
        }

        .roi-section {
          padding: 4rem 0;
          border-bottom: 1px solid rgba(255,255,255,0.05);
        }

        .roi-phone {
          width: 240px;
          height: 480px;
          border: 6px solid #1a1a1a;
          border-radius: 32px;
          background: #0a0a0a;
          position: relative;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding-top: 2.5rem;
          box-shadow: 0 25px 50px rgba(0,0,0,0.8), inset 0 0 0 1px rgba(255,255,255,0.1);
          margin: 0 auto;
        }

        .roi-phone-notch {
          width: 100px;
          height: 20px;
          background: #1a1a1a;
          position: absolute;
          top: 0;
          border-bottom-left-radius: 12px;
          border-bottom-right-radius: 12px;
          z-index: 10;
        }

        .app-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 0.75rem;
          width: 100%;
          padding: 1rem;
          opacity: 0.4;
        }

        .app-icon {
          aspect-ratio: 1;
          background: #222;
          border-radius: 25%;
          box-shadow: inset 0 2px 4px rgba(0,0,0,0.5);
        }

        .featured-app {
          position: relative;
          z-index: 5;
          opacity: 1 !important;
        }

        .featured-app-inner {
          aspect-ratio: 1;
          background: linear-gradient(135deg, var(--gray-dark), #000);
          border: 2px solid var(--neon-green);
          border-radius: 25%;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 0 20px rgba(0,255,65,0.4);
        }

        .notification-dot {
          position: absolute;
          top: -6px;
          right: -6px;
          background: #ff3333;
          color: #fff;
          font-size: 0.65rem;
          font-weight: bold;
          width: 18px;
          height: 18px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          border: 2px solid #0a0a0a;
        }

        .push-notification {
          width: 85%;
          padding: 0.75rem;
          margin-top: auto;
          margin-bottom: 2rem;
          background: rgba(30,30,30,0.9);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 12px;
          z-index: 5;
        }

        .comparison-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1rem;
        }

        .comparison-card {
          padding: 1.25rem;
          border-radius: 16px;
          position: relative;
          overflow: hidden;
        }

        .comparison-card.danger {
          background: rgba(255,51,51,0.03);
          border: 1px solid rgba(255,51,51,0.15);
        }

        .comparison-card.success {
          background: rgba(0,255,65,0.05);
          border: 1px solid rgba(0,255,65,0.2);
        }

        .comparison-card .accent {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 3px;
        }

        .comparison-card.danger .accent { background: #ff3333; }
        .comparison-card.success .accent { background: var(--neon-green); }

        .chat-demo {
          padding: 2rem;
          display: flex;
          flex-direction: column;
          gap: 1rem;
          max-width: 350px;
          width: 100%;
          margin: 0 auto;
        }

        .chat-bubble {
          padding: 0.875rem;
          border-radius: 12px;
          font-size: 0.85rem;
          color: #fff;
        }

        .chat-bubble.incoming {
          align-self: flex-start;
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 12px 12px 12px 0;
        }

        .chat-bubble.outgoing {
          align-self: flex-end;
          background: rgba(0,255,65,0.1);
          border: 1px solid rgba(0,255,65,0.4);
          border-radius: 12px 12px 0 12px;
        }

        .stats-visual {
          padding: 2rem;
          max-width: 350px;
          width: 100%;
          margin: 0 auto;
        }

        .stars-row {
          display: flex;
          justify-content: center;
          gap: 0.4rem;
          color: var(--neon-green);
          margin-bottom: 0.75rem;
        }

        .roi-cta-box {
          padding: 2.5rem 1.5rem;
          background: linear-gradient(135deg, rgba(10,10,10,0.8) 0%, rgba(5,15,8,0.9) 100%);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(0,255,65,0.2);
          border-radius: 20px;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          box-shadow: 0 20px 50px rgba(0,0,0,0.5);
          max-width: 800px;
          margin: 0 auto;
        }

        /* Modal Styles */
        .roi-modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0,0,0,0.9);
          backdrop-filter: blur(15px);
          z-index: 9999;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1rem;
        }

        .roi-modal {
          background: var(--void-black);
          border: 1px solid rgba(0,255,65,0.2);
          border-radius: 20px;
          width: 100%;
          max-width: 900px;
          max-height: 90vh;
          overflow-y: auto;
          position: relative;
        }

        .modal-close {
          position: absolute;
          top: 1rem;
          right: 1rem;
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 50%;
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          color: var(--pure-white);
          z-index: 10;
        }

        .modal-split {
          display: flex;
          flex-direction: column;
        }

        .modal-left, .modal-right {
          padding: 2rem 1.5rem;
        }

        .modal-left {
          background: linear-gradient(180deg, rgba(20,20,20,1) 0%, rgba(10,10,10,1) 100%);
          border-bottom: 1px solid rgba(255,255,255,0.05);
        }

        .modal-right {
          background: radial-gradient(circle at center, rgba(0,255,65,0.08) 0%, rgba(0,0,0,0) 80%), rgba(10,10,10,1);
        }

        .slider-group {
          margin-bottom: 2rem;
        }

        .slider-label {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1rem;
          color: rgba(255,255,255,0.9);
          font-size: 1rem;
          font-weight: 600;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .slider-value {
          color: var(--neon-green);
          font-weight: 800;
          font-size: 1.2rem;
          background: rgba(0,255,65,0.1);
          padding: 0.2rem 0.75rem;
          border-radius: 6px;
          border: 1px solid rgba(0,255,65,0.2);
        }

        .premium-slider {
          -webkit-appearance: none;
          width: 100%;
          height: 4px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 10px;
          outline: none;
        }

        .premium-slider::-webkit-slider-thumb {
          -webkit-appearance: none;
          width: 24px;
          height: 24px;
          border-radius: 50%;
          background: #000;
          cursor: pointer;
          box-shadow: 0 0 12px rgba(0, 255, 65, 0.5);
          border: 3px solid var(--neon-green);
        }

        .metric-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1rem;
          margin-bottom: 1.5rem;
        }

        .metric-box {
          padding: 1.25rem;
          background: rgba(255,51,51,0.03);
          border: 1px solid rgba(255,51,51,0.15);
          border-radius: 12px;
          display: flex;
          flex-direction: column;
        }

        .metric-box .value {
          font-size: 2rem;
          font-weight: 800;
          color: #ff3333;
          line-height: 1;
        }

        .total-box {
          padding: 2rem 1.5rem;
          background: rgba(0,255,65,0.05);
          border: 1px solid rgba(0,255,65,0.3);
          border-radius: 16px;
          text-align: center;
          position: relative;
          overflow: hidden;
        }

        .total-box .accent {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: linear-gradient(90deg, transparent, var(--neon-green), transparent);
        }

        .total-box .value {
          font-size: 3rem;
          font-weight: 800;
          color: var(--pure-white);
          text-shadow: 0 0 30px rgba(0,255,65,0.5);
          line-height: 1;
        }

        @media (min-width: 768px) {
          .roi-hero {
            padding: 10rem 0 6rem;
          }

          .modal-split {
            flex-direction: row;
          }

          .modal-left, .modal-right {
            padding: 3rem 2rem;
          }

          .modal-left {
            flex: 1;
            border-bottom: none;
            border-right: 1px solid rgba(255,255,255,0.05);
          }

          .modal-right {
            flex: 1.2;
          }

          .total-box .value {
            font-size: 4rem;
          }
        }

        @media (max-width: 768px) {
          .roi-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .roi-section {
            padding: 3rem 0;
          }

          .comparison-grid {
            grid-template-columns: 1fr;
          }

          .roi-phone {
            width: 220px;
            height: 440px;
          }

          .metric-grid {
            grid-template-columns: 1fr;
          }

          .metric-box .value {
            font-size: 1.75rem;
          }

          .total-box .value {
            font-size: 2.5rem;
          }

          .chat-demo, .stats-visual {
            padding: 1.5rem;
          }
        }
      `}</style>

      {/* Hero Section */}
      <section className="roi-hero">
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'radial-gradient(ellipse at top, rgba(0,255,65,0.08) 0%, var(--void-black) 70%)', zIndex: 0 }} />
        <div className="bg-speed-lines" style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, opacity: 0.15, zIndex: 0 }} />

        <div className="container" style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div className="roi-badge">
            <Sparkles size={16} color="var(--neon-green)" />
            <span style={{ color: 'var(--neon-green)', fontWeight: 600, fontSize: '0.8rem', letterSpacing: '1px', textTransform: 'uppercase' }}>Barbershop Growth Engine</span>
          </div>

          <h1 className="title-xl" style={{ marginBottom: '1.5rem', color: 'var(--pure-white)', maxWidth: '900px' }}>
            The #1 Software to <span className="text-neon">Scale</span> Your Barbershop.
          </h1>

          <p style={{ color: 'var(--gray-medium)', fontSize: '1.1rem', maxWidth: '700px', margin: '0 auto 2rem', lineHeight: 1.6, textAlign: 'center' }}>
            Stop losing clients to missed calls and clunky web forms. Automate your entire operation with Voice AI, intelligent booking, and your own custom-branded mobile app.
          </p>

          <button
            className="btn btn-primary"
            onClick={() => setIsModalOpen(true)}
            style={{ padding: '1rem 2rem', fontSize: '1rem' }}
          >
            Calculate Your ROI <TrendingUp size={18} style={{ marginLeft: '0.5rem' }} />
          </button>
        </div>
      </section>

      {/* White-Label App Section */}
      <section className="roi-section">
        <div className="container">
          <div className="roi-grid">
            <div style={{ display: 'flex', justifyContent: 'center', position: 'relative' }}>
              <div style={{ width: '200px', height: '400px', background: 'var(--neon-green)', filter: 'blur(80px)', opacity: 0.15, position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', borderRadius: '50%' }} />
              <div className="roi-phone">
                <div className="roi-phone-notch" />
                <div className="app-grid">
                  {[...Array(11)].map((_, i) => (
                    <div key={i} className="app-icon" />
                  ))}
                  <div className="featured-app anim-pop" style={{ animationDelay: '1s' }}>
                    <div className="featured-app-inner">
                      <span style={{ fontSize: '1rem', fontWeight: 900, color: 'var(--pure-white)', letterSpacing: '-1px' }}>V<span style={{ color: 'var(--neon-green)' }}>B</span></span>
                    </div>
                    <div className="notification-dot">1</div>
                  </div>
                </div>
                <div className="push-notification glass-card anim-slide-up" style={{ animationDuration: '4s' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                      <div style={{ width: '14px', height: '14px', background: 'var(--neon-green)', borderRadius: '4px' }} />
                      <span style={{ fontSize: '0.7rem', fontWeight: 'bold', color: 'rgba(255,255,255,0.9)' }}>VELOCITY BARBERS</span>
                    </div>
                    <span style={{ fontSize: '0.6rem', color: '#888' }}>now</span>
                  </div>
                  <div style={{ fontSize: '0.8rem', color: '#fff', lineHeight: 1.4 }}>
                    Elias just opened up a slot at 4:30 PM!
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div style={{ padding: '0.75rem', background: 'rgba(0,255,65,0.1)', borderRadius: '12px', display: 'inline-flex', marginBottom: '1rem', border: '1px solid rgba(0,255,65,0.2)' }}>
                <Smartphone size={28} color="var(--neon-green)" />
              </div>
              <h2 className="title-md" style={{ color: 'var(--pure-white)' }}>
                Your Brand. Your Own <span className="text-neon">Mobile App.</span>
              </h2>
              <p style={{ color: 'var(--gray-medium)', fontSize: '1rem', marginBottom: '2rem', lineHeight: 1.6 }}>
                Marketplaces like Booksy and Squire pit you directly against competitors. We build you a standalone, white-labeled mobile app available on iOS and Android.
              </p>

              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                {[
                  { title: 'Own Your Traffic', desc: 'Clients only see your shop, your services, and your barbers.' },
                  { title: 'Home Screen Real Estate', desc: 'Drive repeat business by living on their phone\'s home screen.' },
                  { title: 'Free Push Notifications', desc: 'Bypass SMS costs and spam filters with direct lock-screen drops.' }
                ].map((item, i) => (
                  <li key={i} style={{ display: 'flex', gap: '0.75rem' }}>
                    <CheckCircle2 color="var(--neon-green)" size={20} style={{ flexShrink: 0, marginTop: '2px' }} />
                    <div>
                      <strong style={{ display: 'block', color: 'var(--pure-white)', fontSize: '1rem', marginBottom: '0.2rem' }}>{item.title}</strong>
                      <span style={{ color: 'var(--gray-medium)', fontSize: '0.9rem', lineHeight: 1.5 }}>{item.desc}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Voice AI Section */}
      <section className="roi-section">
        <div className="container">
          <div className="roi-grid">
            <div>
              <div style={{ padding: '0.75rem', background: 'rgba(0,255,65,0.1)', borderRadius: '12px', display: 'inline-flex', marginBottom: '1rem', border: '1px solid rgba(0,255,65,0.2)' }}>
                <Bot size={28} color="var(--neon-green)" />
              </div>
              <h2 className="title-md" style={{ color: 'var(--pure-white)' }}>
                Stop Missing Calls. Welcome Your <span className="text-neon">Voice AI.</span>
              </h2>
              <p style={{ color: 'var(--gray-medium)', fontSize: '1rem', marginBottom: '2rem', lineHeight: 1.6 }}>
                Our 24/7 Voice AI Receptionist handles all your inbound calls. It sounds like a human and books appointments directly into your calendar.
              </p>

              <div className="comparison-grid">
                <div className="comparison-card danger">
                  <div className="accent" />
                  <h4 style={{ color: '#ff3333', display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '0.75rem', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '1px' }}>
                    <PhoneMissed size={14} /> Without AI
                  </h4>
                  <p style={{ color: 'rgba(255,255,255,0.65)', margin: 0, fontSize: '0.85rem', lineHeight: 1.5 }}>
                    You ignore the phone mid-fade. The caller books across the street.
                  </p>
                </div>
                <div className="comparison-card success">
                  <div className="accent" />
                  <h4 style={{ color: 'var(--neon-green)', display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '0.75rem', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '1px' }}>
                    <CheckCircle2 size={14} /> With AI
                  </h4>
                  <p style={{ color: 'rgba(255,255,255,0.85)', margin: 0, fontSize: '0.85rem', lineHeight: 1.5 }}>
                    Our AI answers instantly and books them right into your calendar.
                  </p>
                </div>
              </div>
            </div>

            <div className="glass-card chat-demo">
              <div style={{ textAlign: 'center', marginBottom: '1rem', paddingBottom: '1rem', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                <Bot size={24} color="var(--neon-green)" style={{ marginBottom: '0.5rem' }} />
                <span style={{ fontSize: '0.75rem', color: 'var(--gray-medium)', textTransform: 'uppercase', letterSpacing: '1px' }}>Live Call</span>
              </div>
              <div className="chat-bubble incoming anim-msg-in">"Hey, do you have any openings today around 3?"</div>
              <div className="chat-bubble outgoing anim-msg-out">"Absolutely! I can get you in with Elias at 3:00 PM or 3:30 PM."</div>
              <div className="chat-bubble incoming anim-msg-in">"3:00 PM is perfect."</div>
              <div className="badge neon anim-pop" style={{ alignSelf: 'center', marginTop: '0.5rem', animationDelay: '2s' }}>
                <CalendarCheck size={14} /> Scheduled
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Smart Booking Section */}
      <section className="roi-section" style={{ borderBottom: 'none' }}>
        <div className="container">
          <div className="roi-grid">
            <div className="glass-card stats-visual">
              <div className="stars-row">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="currentColor" className="anim-pop" style={{ animationDelay: `${i * 0.1}s` }}>
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                ))}
              </div>
              <h3 style={{ fontSize: '1.3rem', color: 'var(--pure-white)', margin: '0 0 0.5rem', textAlign: 'center' }}>4.9/5 Average</h3>
              <span style={{ color: 'var(--gray-medium)', fontSize: '0.85rem', display: 'block', textAlign: 'center', marginBottom: '1.5rem' }}>Based on 452 automated reviews</span>

              <div style={{ width: '100%', height: '1px', background: 'rgba(255,255,255,0.1)', marginBottom: '1.5rem' }} />

              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                <span style={{ color: 'var(--pure-white)', fontSize: '0.9rem', fontWeight: 600 }}>No-Show Rate Drop</span>
                <span className="text-neon" style={{ fontWeight: 800 }}>-85%</span>
              </div>
              <div style={{ width: '100%', height: '6px', background: 'rgba(255,255,255,0.1)', borderRadius: '3px', overflow: 'hidden' }}>
                <div style={{ width: '85%', height: '100%', background: 'linear-gradient(90deg, rgba(0,255,65,0.5), var(--neon-green))' }} />
              </div>
            </div>

            <div>
              <div style={{ padding: '0.75rem', background: 'rgba(0,255,65,0.1)', borderRadius: '12px', display: 'inline-flex', marginBottom: '1rem', border: '1px solid rgba(0,255,65,0.2)' }}>
                <MessageSquare size={28} color="var(--neon-green)" />
              </div>
              <h2 className="title-md" style={{ color: 'var(--pure-white)' }}>
                Destroy No-Shows. Dominate <span className="text-neon">Google.</span>
              </h2>
              <p style={{ color: 'var(--gray-medium)', fontSize: '1rem', marginBottom: '2rem', lineHeight: 1.6 }}>
                Our booking engine requires deposits, cutting your no-show rate. After each cut, we automatically text clients for a Google Review.
              </p>

              <div className="comparison-grid">
                <div className="comparison-card success">
                  <div className="accent" />
                  <h4 style={{ color: 'var(--neon-green)', display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '0.75rem', fontSize: '0.85rem' }}>
                    <DollarSign size={16} /> Mandatory Deposits
                  </h4>
                  <p style={{ color: 'rgba(255,255,255,0.85)', margin: 0, fontSize: '0.85rem', lineHeight: 1.5 }}>
                    If a client no-shows, you still get paid for the slot.
                  </p>
                </div>
                <div className="comparison-card success">
                  <div className="accent" />
                  <h4 style={{ color: 'var(--neon-green)', display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '0.75rem', fontSize: '0.85rem' }}>
                    <CheckCircle2 size={16} /> Review Shield
                  </h4>
                  <p style={{ color: 'rgba(255,255,255,0.85)', margin: 0, fontSize: '0.85rem', lineHeight: 1.5 }}>
                    Happy clients are guided to leave 5-star Google reviews.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{ padding: '3rem 0 5rem' }}>
        <div className="container">
          <div className="roi-cta-box data-frame">
            <Calculator size={40} color="var(--neon-green)" style={{ marginBottom: '1rem' }} className="anim-float" />
            <h2 className="title-md" style={{ color: 'var(--pure-white)' }}>Curious About Your ROI?</h2>
            <p style={{ color: 'var(--gray-medium)', marginBottom: '2rem', fontSize: '1rem', maxWidth: '450px' }}>
              Find out exactly how much revenue you're bleeding to missed calls and no-shows each month.
            </p>
            <button
              className="btn btn-primary"
              onClick={() => setIsModalOpen(true)}
              style={{ fontSize: '1.1rem', padding: '1rem 2.5rem' }}
            >
              Run The Numbers
            </button>
          </div>
        </div>
      </section>

      {/* Modal */}
      {isModalOpen && (
        <div className="roi-modal-overlay">
          <div className="roi-modal">
            <button className="modal-close" onClick={() => setIsModalOpen(false)}>
              <X size={20} />
            </button>

            <div className="modal-split">
              <div className="modal-left">
                <div style={{ marginBottom: '2rem' }}>
                  <div className="badge neon" style={{ marginBottom: '0.75rem', fontSize: '0.7rem' }}>Interactive Tool</div>
                  <h2 style={{ fontSize: '1.5rem', marginBottom: '0.75rem', lineHeight: 1.2 }}>Project Your Growth</h2>
                  <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.9rem', lineHeight: 1.5 }}>
                    Adjust the metrics below to match your shop's weekly volume.
                  </p>
                </div>

                <div className="slider-group">
                  <label className="slider-label">
                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <Users size={18} color="var(--neon-green)" /> Clients Per Week
                    </span>
                    <span className="slider-value">{clientsPerWeek}</span>
                  </label>
                  <input
                    type="range"
                    min="10"
                    max="300"
                    step="5"
                    value={clientsPerWeek}
                    onChange={(e) => setClientsPerWeek(Number(e.target.value))}
                    className="premium-slider"
                  />
                </div>

                <div className="slider-group">
                  <label className="slider-label">
                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <DollarSign size={18} color="var(--neon-green)" /> Avg Ticket Price
                    </span>
                    <span className="slider-value">${ticketPrice}</span>
                  </label>
                  <input
                    type="range"
                    min="15"
                    max="150"
                    step="5"
                    value={ticketPrice}
                    onChange={(e) => setTicketPrice(Number(e.target.value))}
                    className="premium-slider"
                  />
                </div>
              </div>

              <div className="modal-right">
                <h3 style={{ color: 'var(--pure-white)', fontSize: '1rem', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem', textTransform: 'uppercase', letterSpacing: '1px' }}>
                  <TrendingUp size={18} color="var(--neon-green)" /> The Impact
                </h3>

                <div className="metric-grid">
                  <div className="metric-box">
                    <PhoneMissed size={22} color="#ff3333" style={{ marginBottom: '0.75rem' }} />
                    <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '0.4rem' }}>Missed Calls</div>
                    <div className="value">{missedCalls}<span style={{ fontSize: '0.8rem', fontWeight: 400, color: 'rgba(255,51,51,0.6)' }}>/wk</span></div>
                  </div>
                  <div className="metric-box">
                    <Users size={22} color="#ff3333" style={{ marginBottom: '0.75rem' }} />
                    <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '0.4rem' }}>No-Shows</div>
                    <div className="value">{missedAppointments}<span style={{ fontSize: '0.8rem', fontWeight: 400, color: 'rgba(255,51,51,0.6)' }}>/wk</span></div>
                  </div>
                </div>

                <div className="total-box">
                  <div className="accent" />
                  <div style={{ color: 'var(--neon-green)', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '0.75rem', fontWeight: 700 }}>
                    Total Lost Revenue
                  </div>
                  <div className="value">
                    <span style={{ fontSize: '1.5rem', color: 'var(--neon-green)', marginRight: '0.1rem' }}>$</span>
                    {lostRevenuePerMonth.toLocaleString()}
                  </div>
                  <div style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.9rem', marginTop: '0.5rem' }}>
                    per month (${lostRevenuePerWeek.toLocaleString()}/week)
                  </div>
                </div>

                <div style={{ marginTop: '2rem' }}>
                  <a href="/#pricing" className="btn btn-primary" style={{ display: 'block', textAlign: 'center', padding: '1rem', fontSize: '1rem', borderRadius: '10px' }} onClick={() => setIsModalOpen(false)}>
                    Plug The Leak Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ROI;
