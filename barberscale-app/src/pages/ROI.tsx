import { useState, useEffect } from 'react';
import { Bot, CalendarCheck, MessageSquare, CheckCircle2, DollarSign, Users, PhoneMissed, X, Calculator, Smartphone, TrendingUp, Sparkles } from 'lucide-react';

const ROI = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [clientsPerWeek, setClientsPerWeek] = useState(30);
  const [ticketPrice, setTicketPrice] = useState(40);

  // Constants / Ratios based on 30 clients -> ~5 missed
  const missedRate = 5 / 30;
  
  const missedAppointments = Math.round(clientsPerWeek * missedRate);
  const missedCalls = Math.round(clientsPerWeek * missedRate);
  
  const lostRevenuePerWeek = missedAppointments * ticketPrice;
  const lostRevenuePerMonth = lostRevenuePerWeek * 4;

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isModalOpen]);

  return (
    <div style={{ paddingBottom: '0rem', background: 'var(--void-black)', minHeight: '100vh', overflowX: 'hidden' }}>
      
      {/* 1. SEO Optimized Hero Section */}
      <section style={{ padding: '10rem 0 6rem', textAlign: 'center', position: 'relative' }}>
        {/* Dynamic Background */}
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'radial-gradient(ellipse at top, rgba(0,255,65,0.08) 0%, var(--void-black) 70%)', zIndex: 0 }} />
        <div className="bg-speed-lines" style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, opacity: 0.15, zIndex: 0 }} />
        
        <div className="container" style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', marginBottom: '1.5rem', background: 'linear-gradient(90deg, rgba(0,255,65,0.05) 0%, rgba(0,255,65,0.15) 50%, rgba(0,255,65,0.05) 100%)', border: '1px solid rgba(0,255,65,0.3)', padding: '0.5rem 1.25rem', borderRadius: '50px' }}>
            <Sparkles size={16} color="var(--neon-green)" />
            <span style={{ color: 'var(--neon-green)', fontWeight: 600, fontSize: '0.85rem', letterSpacing: '2px', textTransform: 'uppercase' }}>Barbershop Growth Engine</span>
          </div>
          
          <h1 style={{ fontSize: 'clamp(3rem, 6vw, 5rem)', marginBottom: '1.5rem', lineHeight: 1.1, color: 'var(--pure-white)', letterSpacing: '-1.5px', maxWidth: '1000px' }}>
            The #1 Software to <span className="text-neon" style={{ display: 'inline-block' }}>Scale</span> Your Barbershop.
          </h1>
          
          <p style={{ color: 'var(--gray-medium)', fontSize: 'clamp(1.1rem, 2vw, 1.3rem)', maxWidth: '750px', margin: '0 auto 3rem', lineHeight: 1.6 }}>
            Stop losing clients to missed calls and clunky web forms. Automate your entire operation with Voice AI, intelligent booking, and your own custom-branded mobile app.
          </p>
          
          <button 
            className="btn btn-primary" 
            onClick={() => setIsModalOpen(true)}
            style={{ padding: '1rem 2.5rem', fontSize: '1.1rem', letterSpacing: '1px', boxShadow: '0 0 30px rgba(0,255,65,0.2)' }}
          >
            Calculate Your ROI <TrendingUp size={20} style={{ marginLeft: '0.5rem' }} />
          </button>
        </div>
      </section>

      {/* 2. White-Label App Section (NEW) */}
      <section className="container" style={{ padding: '6rem 0', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '5rem', alignItems: 'center' }}>
          
          {/* Left / Visual side */}
          <div style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
             {/* Glowing backplate */}
             <div style={{ width: '250px', height: '500px', background: 'var(--neon-green)', filter: 'blur(80px)', opacity: 0.15, position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', borderRadius: '50%' }} />
             
             {/* Phone Outline */}
             <div style={{ width: '280px', height: '560px', border: '8px solid #1a1a1a', borderRadius: '40px', background: '#0a0a0a', position: 'relative', overflow: 'hidden', display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: '3.5rem', boxShadow: '0 25px 50px rgba(0,0,0,0.8), inset 0 0 0 1px rgba(255,255,255,0.1)' }}>
                {/* Notch */}
                <div style={{ width: '120px', height: '25px', background: '#1a1a1a', position: 'absolute', top: 0, borderBottomLeftRadius: '16px', borderBottomRightRadius: '16px', zIndex: 10 }} />
                
                {/* Grid of Apps */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1rem', width: '100%', padding: '1.5rem', opacity: 0.4 }}>
                  {[...Array(11)].map((_, i) => (
                    <div key={i} style={{ aspectRatio: '1', background: '#222', borderRadius: '25%', boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.5)' }} />
                  ))}
                  
                  {/* The Actual Barber App Icon popping out */}
                  <div className="anim-pop" style={{ position: 'relative', zIndex: 5, animationDelay: '1s', opacity: 2.5 }}>
                    <div style={{ aspectRatio: '1', background: 'linear-gradient(135deg, var(--gray-dark), #000)', border: '2px solid var(--neon-green)', borderRadius: '25%', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 0 20px rgba(0,255,65,0.4)' }}>
                       <span style={{ fontSize: '1.2rem', fontWeight: 900, color: 'var(--pure-white)', letterSpacing: '-1px' }}>V<span style={{ color: 'var(--neon-green)' }}>B</span></span>
                    </div>
                    {/* Notification Dot */}
                    <div style={{ position: 'absolute', top: '-6px', right: '-6px', background: '#ff3333', color: '#fff', fontSize: '0.7rem', fontWeight: 'bold', width: '20px', height: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%', border: '2px solid #0a0a0a' }}>
                      1
                    </div>
                  </div>
                </div>

                {/* Simulated Push Notification */}
                <div className="glass-card anim-slide-up" style={{ width: '85%', padding: '1rem', marginTop: 'auto', marginBottom: '2.5rem', background: 'rgba(30,30,30,0.9)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255,255,255,0.1)', zIndex: 5, animationDuration: '4s' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.6rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <div style={{ width: '16px', height: '16px', background: 'var(--neon-green)', borderRadius: '4px' }} />
                      <span style={{ fontSize: '0.75rem', fontWeight: 'bold', color: 'rgba(255,255,255,0.9)', letterSpacing: '0.5px' }}>VELOCITY BARBERS</span>
                    </div>
                    <span style={{ fontSize: '0.65rem', color: '#888' }}>now</span>
                  </div>
                  <div style={{ fontSize: '0.85rem', color: '#fff', lineHeight: 1.4, fontWeight: 500 }}>
                    Elias just opened up a slot at 4:30 PM! Tap here to claim it before it's gone.
                  </div>
                </div>
             </div>
          </div>

          {/* Right / Text side */}
          <div>
            <div style={{ padding: '1rem', background: 'rgba(0,255,65,0.1)', borderRadius: '15px', display: 'inline-flex', marginBottom: '1.5rem', border: '1px solid rgba(0,255,65,0.2)' }}>
              <Smartphone size={32} color="var(--neon-green)" />
            </div>
            <h2 className="title-md" style={{ color: 'var(--pure-white)' }}>
              Your Brand.<br/>Your Own <span className="text-neon">Mobile App.</span>
            </h2>
            <p style={{ color: 'var(--gray-medium)', fontSize: '1.1rem', marginBottom: '2.5rem', lineHeight: 1.6 }}>
              Marketplaces like Booksy and Squire pit you directly against every competitor in your city. Stop listing your shop next to cheaper alternatives. We build you a standalone, white-labeled mobile app available on iOS and Android.
            </p>
            
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <li style={{ display: 'flex', gap: '1rem' }}>
                <CheckCircle2 color="var(--neon-green)" size={24} style={{ flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <strong style={{ display: 'block', color: 'var(--pure-white)', fontSize: '1.1rem', marginBottom: '0.25rem' }}>Own Your Traffic</strong>
                  <span style={{ color: 'var(--gray-medium)', fontSize: '0.95rem', lineHeight: 1.5 }}>When clients open your app, they only see your shop, your services, and your barbers. Zero distractions.</span>
                </div>
              </li>
              <li style={{ display: 'flex', gap: '1rem' }}>
                <CheckCircle2 color="var(--neon-green)" size={24} style={{ flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <strong style={{ display: 'block', color: 'var(--pure-white)', fontSize: '1.1rem', marginBottom: '0.25rem' }}>Home Screen Real Estate</strong>
                  <span style={{ color: 'var(--gray-medium)', fontSize: '0.95rem', lineHeight: 1.5 }}>Drive massive repeat business by living permanently on their phone's home screen. Out of sight, out of mind? Not anymore.</span>
                </div>
              </li>
              <li style={{ display: 'flex', gap: '1rem' }}>
                <CheckCircle2 color="var(--neon-green)" size={24} style={{ flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <strong style={{ display: 'block', color: 'var(--pure-white)', fontSize: '1.1rem', marginBottom: '0.25rem' }}>Free Push Notifications</strong>
                  <span style={{ color: 'var(--gray-medium)', fontSize: '0.95rem', lineHeight: 1.5 }}>Bypass expensive SMS costs and spam filters. Send promotions and reminders directly to their lock screen instantly.</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 3. Voice AI Section */}
      <section className="container" style={{ padding: '6rem 0', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '5rem', alignItems: 'center' }}>
          
          <div style={{ order: 1 }}>
            <div style={{ padding: '1rem', background: 'rgba(0,255,65,0.1)', borderRadius: '15px', display: 'inline-flex', marginBottom: '1.5rem', border: '1px solid rgba(0,255,65,0.2)' }}><Bot size={32} color="var(--neon-green)" /></div>
            <h2 className="title-md" style={{ color: 'var(--pure-white)' }}>
              Stop Missing Calls.<br/>Welcome Your <span className="text-neon">Voice AI.</span>
            </h2>
            
            <p style={{ color: 'var(--gray-medium)', fontSize: '1.1rem', marginBottom: '2.5rem', lineHeight: 1.6 }}>
              Our 24/7 Voice AI Receptionist handles all your inbound calls. It sounds exactly like a human, can answer complex questions about your services, and books appointments directly into your calendar without you ever having to put down your clippers.
            </p>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>
              <div style={{ background: 'rgba(255,51,51,0.03)', padding: '1.5rem', borderRadius: '16px', border: '1px solid rgba(255,51,51,0.15)', position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '3px', background: '#ff3333' }} />
                <h4 style={{ color: '#ff3333', display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px' }}><PhoneMissed size={16} /> Without AI</h4>
                <p style={{ color: 'rgba(255,255,255,0.65)', margin: 0, fontSize: '0.95rem', lineHeight: 1.6 }}>You are mid-fade and ignore the ringing phone. The caller books across the street, costing you a cut, a tip, and a lifetime client.</p>
              </div>
              
              <div style={{ background: 'rgba(0,255,65,0.05)', padding: '1.5rem', borderRadius: '16px', border: '1px solid rgba(0,255,65,0.2)', position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '3px', background: 'var(--neon-green)' }} />
                <h4 style={{ color: 'var(--neon-green)', display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px' }}><CheckCircle2 size={16} /> With AI</h4>
                <p style={{ color: 'rgba(255,255,255,0.85)', margin: 0, fontSize: '0.95rem', lineHeight: 1.6 }}>Our AI Agent answers instantly, handling inquiries and booking them right into your calendar. Zero missed calls, guaranteed.</p>
              </div>
            </div>
          </div>

          <div style={{ order: 2, display: 'flex', justifyContent: 'center' }}>
            <div className="glass-card" style={{ padding: '2.5rem', display: 'flex', flexDirection: 'column', gap: '1.5rem', position: 'relative', overflow: 'hidden', maxWidth: '400px', width: '100%', border: '1px solid rgba(0,255,65,0.2)' }}>
              <div style={{ position: 'absolute', top: '-50%', right: '-50%', width: '100%', height: '100%', background: 'radial-gradient(circle, rgba(0,255,65,0.08) 0%, transparent 70%)', pointerEvents: 'none' }} />
              
              <div style={{ textAlign: 'center', marginBottom: '1rem', paddingBottom: '1rem', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                <Bot size={28} color="var(--neon-green)" style={{ margin: '0 auto 0.5rem' }} className="anim-pulse-glow" />
                <span style={{ fontSize: '0.8rem', color: 'var(--gray-medium)', textTransform: 'uppercase', letterSpacing: '1px' }}>Live Call Transcription</span>
              </div>

              <div className="anim-msg-in" style={{ alignSelf: 'flex-start', background: 'rgba(255,255,255,0.05)', padding: '1rem', borderRadius: '15px 15px 15px 0', border: '1px solid rgba(255,255,255,0.1)', fontSize: '0.9rem', color: '#fff' }}>
                "Hey, do you guys have any openings today around 3?"
              </div>
              
              <div className="anim-msg-out" style={{ alignSelf: 'flex-end', background: 'rgba(0,255,65,0.1)', padding: '1rem', borderRadius: '15px 15px 0 15px', border: '1px solid rgba(0,255,65,0.4)', fontSize: '0.9rem', color: '#fff' }}>
                "Absolutely! I can get you in with Elias at 3:00 PM or 3:30 PM. Which works best for you?"
              </div>
              
              <div className="anim-msg-in" style={{ alignSelf: 'flex-start', background: 'rgba(255,255,255,0.05)', padding: '1rem', borderRadius: '15px 15px 15px 0', border: '1px solid rgba(255,255,255,0.1)', fontSize: '0.9rem', color: '#fff' }}>
                "3:00 PM is perfect."
              </div>
              
              <div className="badge neon anim-pop" style={{ alignSelf: 'center', marginTop: '0.5rem', animationDelay: '2s', fontSize: '0.8rem', padding: '0.4rem 1rem' }}>
                <CalendarCheck size={14} style={{ marginRight: '0.5rem' }} /> Appointment Scheduled
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Smart Booking & Reviews Section */}
      <section className="container" style={{ padding: '6rem 0' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '5rem', alignItems: 'center' }}>
          
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div className="glass-card" style={{ padding: '3rem', position: 'relative', width: '100%', maxWidth: '400px', border: '1px solid rgba(0,255,65,0.2)' }}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: '2rem' }}>
                {/* 5-Star Visual */}
                <div>
                  <div style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem', color: 'var(--neon-green)', marginBottom: '1rem' }}>
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="anim-pop" style={{ animationDelay: `${i * 0.1}s` }}>
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                      </svg>
                    ))}
                  </div>
                  <h3 style={{ fontSize: '1.5rem', color: 'var(--pure-white)', margin: 0 }}>4.9/5 Average</h3>
                  <span style={{ color: 'var(--gray-medium)', fontSize: '0.9rem' }}>Based on 452 automated reviews</span>
                </div>
                
                <div style={{ width: '100%', height: '1px', background: 'rgba(255,255,255,0.1)' }} />
                
                {/* No-Shows Visual */}
                <div style={{ width: '100%' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                     <span style={{ color: 'var(--pure-white)', fontSize: '0.95rem', fontWeight: 600 }}>No-Show Rate Drop</span>
                     <span className="text-neon" style={{ fontWeight: 800 }}>-85%</span>
                  </div>
                  <div style={{ width: '100%', height: '8px', background: 'rgba(255,255,255,0.1)', borderRadius: '4px', overflow: 'hidden' }}>
                     <div style={{ width: '85%', height: '100%', background: 'linear-gradient(90deg, rgba(0,255,65,0.5), var(--neon-green))' }} />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div style={{ padding: '1rem', background: 'rgba(0,255,65,0.1)', borderRadius: '15px', display: 'inline-flex', marginBottom: '1.5rem', border: '1px solid rgba(0,255,65,0.2)' }}><MessageSquare size={32} color="var(--neon-green)" /></div>
            <h2 className="title-md" style={{ color: 'var(--pure-white)' }}>
              Destroy No-Shows.<br/>Dominate <span className="text-neon">Google.</span>
            </h2>
            <p style={{ color: 'var(--gray-medium)', fontSize: '1.1rem', marginBottom: '2.5rem', lineHeight: 1.6 }}>
              Our booking engine requires deposits, drastically cutting your no-show rate. As soon as a client leaves, BarberScale automatically texts them for a Google Review, flooding your page with 5-star ratings.
            </p>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>
              <div style={{ background: 'rgba(0,255,65,0.05)', padding: '1.5rem', borderRadius: '16px', border: '1px solid rgba(0,255,65,0.2)', position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '3px', background: 'var(--neon-green)' }} />
                <h4 style={{ color: 'var(--neon-green)', display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem', fontSize: '0.95rem', letterSpacing: '0.5px' }}><DollarSign size={18} /> Mandatory Deposits</h4>
                <p style={{ color: 'rgba(255,255,255,0.85)', margin: 0, fontSize: '0.95rem', lineHeight: 1.6 }}>Protect your time. If a client no-shows or ghosts you, you still get paid for the appointment slot. Period.</p>
              </div>
              
              <div style={{ background: 'rgba(0,255,65,0.05)', padding: '1.5rem', borderRadius: '16px', border: '1px solid rgba(0,255,65,0.2)', position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '3px', background: 'var(--neon-green)' }} />
                <h4 style={{ color: 'var(--neon-green)', display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem', fontSize: '0.95rem', letterSpacing: '0.5px' }}><CheckCircle2 size={18} /> Review Shield</h4>
                <p style={{ color: 'rgba(255,255,255,0.85)', margin: 0, fontSize: '0.95rem', lineHeight: 1.6 }}>Unhappy clients are routed to a private feedback form. Happy clients are instantly guided to leave a 5-star Google review.</p>
              </div>
            </div>
          </div>
          
        </div>
      </section>

      {/* 5. ROI Calculator Final CTA */}
      <section style={{ padding: '4rem 0 8rem' }}>
        <div className="container">
          <div className="data-frame" style={{ 
            padding: '4rem 2rem', 
            background: 'linear-gradient(135deg, rgba(10,10,10,0.8) 0%, rgba(5,15,8,0.9) 100%)', 
            backdropFilter: 'blur(20px)', 
            border: '1px solid rgba(0,255,65,0.2)', 
            borderRadius: '24px', 
            display: 'flex', 
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            boxShadow: '0 20px 50px rgba(0,0,0,0.5)',
            margin: '0 auto',
            maxWidth: '900px'
          }}>
            <Calculator size={48} color="var(--neon-green)" style={{ marginBottom: '1.5rem' }} className="anim-float" />
            <h2 className="title-md" style={{ color: 'var(--pure-white)' }}>Curious About Your ROI?</h2>
            <p style={{ color: 'var(--gray-medium)', marginBottom: '2.5rem', fontSize: '1.15rem', maxWidth: '500px' }}>
              Find out exactly how much revenue you're bleeding to missed calls and no-shows each month. Use our interactive calculator.
            </p>
            <button 
              className="btn btn-primary" 
              onClick={() => setIsModalOpen(true)}
              style={{ fontSize: '1.2rem', padding: '1.2rem 3.5rem', boxShadow: '0 0 40px rgba(0,255,65,0.3)' }}
            >
              Run The Numbers
            </button>
          </div>
        </div>
      </section>

      {/* ROI Calculator Modal */}
      {isModalOpen && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0,0,0,0.85)',
          backdropFilter: 'blur(15px)',
          zIndex: 9999,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '1.5rem',
          animation: 'fadeIn 0.3s ease-out'
        }}>
          
          <style>
            {`
              .premium-slider {
                -webkit-appearance: none;
                width: 100%;
                height: 4px;
                background: rgba(255, 255, 255, 0.1);
                border-radius: 10px;
                outline: none;
                transition: background 0.3s;
              }
              .premium-slider::-webkit-slider-thumb {
                -webkit-appearance: none;
                appearance: none;
                width: 28px;
                height: 28px;
                border-radius: 50%;
                background: #000;
                cursor: pointer;
                box-shadow: 0 0 15px rgba(0, 255, 65, 0.5);
                border: 3px solid var(--neon-green);
                transition: transform 0.2s, box-shadow 0.2s, background 0.2s;
              }
              .premium-slider::-webkit-slider-thumb:hover {
                transform: scale(1.15);
                box-shadow: 0 0 25px rgba(0, 255, 65, 0.9);
                background: var(--neon-green);
              }
              .modal-split {
                display: flex;
                flex-direction: column;
              }
              @media (min-width: 900px) {
                .modal-split {
                  flex-direction: row;
                }
              }
              .metric-box {
                transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
              }
              .metric-box:hover {
                transform: translateY(-5px);
                box-shadow: 0 10px 20px rgba(0, 0, 0, 0.5);
              }
            `}
          </style>

          <div style={{
            background: 'var(--void-black)',
            border: '1px solid rgba(0,255,65,0.2)',
            borderRadius: '24px',
            width: '100%',
            maxWidth: '1000px',
            maxHeight: '95vh',
            overflowY: 'auto',
            position: 'relative',
            boxShadow: '0 25px 50px -12px rgba(0,0,0,0.8), 0 0 60px rgba(0,255,65,0.1)'
          }}>
            <button 
              onClick={() => setIsModalOpen(false)}
              style={{
                position: 'absolute',
                top: '1.5rem',
                right: '1.5rem',
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: '50%',
                width: '44px',
                height: '44px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                color: 'var(--pure-white)',
                transition: 'all 0.3s ease',
                zIndex: 10
              }}
              onMouseOver={(e) => { e.currentTarget.style.background = 'rgba(255,51,51,0.2)'; e.currentTarget.style.borderColor = 'rgba(255,51,51,0.5)'; e.currentTarget.style.color = '#ff3333'; }}
              onMouseOut={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.05)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'; e.currentTarget.style.color = 'var(--pure-white)'; }}
            >
              <X size={22} />
            </button>

            <div className="modal-split">
              {/* Left Side: Inputs */}
              <div style={{ 
                flex: '1', 
                padding: '4rem 3rem', 
                background: 'linear-gradient(180deg, rgba(20,20,20,1) 0%, rgba(10,10,10,1) 100%)',
                borderRight: '1px solid rgba(255,255,255,0.05)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center'
              }}>
                <div style={{ marginBottom: '3.5rem' }}>
                  <div className="badge neon" style={{ marginBottom: '1rem', fontSize: '0.75rem', letterSpacing: '2px' }}>Interactive Tool</div>
                  <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', lineHeight: 1.1 }}>Project Your Growth</h2>
                  <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '1rem', lineHeight: 1.6 }}>Adjust the metrics below to match your shop's weekly volume. See exactly where revenue is leaking from your business.</p>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '3.5rem' }}>
                  <div style={{ textAlign: 'left' }}>
                    <label style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1.5rem', color: 'rgba(255,255,255,0.9)', fontSize: '1.1rem', fontWeight: 600 }}>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}><Users size={20} color="var(--neon-green)" /> Clients Per Week</span>
                      <span style={{ color: 'var(--neon-green)', fontWeight: 800, fontSize: '1.4rem', background: 'rgba(0,255,65,0.1)', padding: '0.2rem 1rem', borderRadius: '8px', border: '1px solid rgba(0,255,65,0.2)' }}>{clientsPerWeek}</span>
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

                  <div style={{ textAlign: 'left' }}>
                    <label style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1.5rem', color: 'rgba(255,255,255,0.9)', fontSize: '1.1rem', fontWeight: 600 }}>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}><DollarSign size={20} color="var(--neon-green)" /> Avg Ticket Price</span>
                      <span style={{ color: 'var(--neon-green)', fontWeight: 800, fontSize: '1.4rem', background: 'rgba(0,255,65,0.1)', padding: '0.2rem 1rem', borderRadius: '8px', border: '1px solid rgba(0,255,65,0.2)' }}>${ticketPrice}</span>
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
              </div>

              {/* Right Side: Output metrics */}
              <div style={{ 
                flex: '1.2', 
                padding: '4rem 3rem', 
                background: 'radial-gradient(circle at center, rgba(0,255,65,0.08) 0%, rgba(0,0,0,0) 80%), rgba(10,10,10,1)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                position: 'relative'
              }}>
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundImage: 'linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)', backgroundSize: '30px 30px', opacity: 0.5, pointerEvents: 'none' }}></div>

                <div style={{ position: 'relative', zIndex: 1 }}>
                  <h3 style={{ color: 'var(--pure-white)', fontSize: '1.2rem', marginBottom: '2.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem', textTransform: 'uppercase', letterSpacing: '2px' }}>
                    <TrendingUp size={22} color="var(--neon-green)" /> The Impact
                  </h3>

                  <div className="split-layout" style={{ gap: '1.5rem', marginBottom: '2rem', alignItems: 'start' }}>
                    <div className="metric-box" style={{ padding: '1.5rem', background: 'rgba(255,51,51,0.03)', border: '1px solid rgba(255,51,51,0.15)', borderRadius: '16px', display: 'flex', flexDirection: 'column' }}>
                      <PhoneMissed size={26} color="#ff3333" style={{ marginBottom: '1rem' }} />
                      <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '0.5rem' }}>Missed Calls</div>
                      <div style={{ fontSize: '3rem', fontWeight: 800, color: '#ff3333', lineHeight: 1 }}>{missedCalls}<span style={{ fontSize: '1rem', fontWeight: 400, color: 'rgba(255,51,51,0.6)', marginLeft: '4px' }}>/wk</span></div>
                    </div>

                    <div className="metric-box" style={{ padding: '1.5rem', background: 'rgba(255,51,51,0.03)', border: '1px solid rgba(255,51,51,0.15)', borderRadius: '16px', display: 'flex', flexDirection: 'column' }}>
                      <Users size={26} color="#ff3333" style={{ marginBottom: '1rem' }} />
                      <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '0.5rem' }}>No-Shows</div>
                      <div style={{ fontSize: '3rem', fontWeight: 800, color: '#ff3333', lineHeight: 1 }}>{missedAppointments}<span style={{ fontSize: '1rem', fontWeight: 400, color: 'rgba(255,51,51,0.6)', marginLeft: '4px' }}>/wk</span></div>
                    </div>
                  </div>

                  <div className="metric-box" style={{ padding: '2.5rem', background: 'rgba(0,255,65,0.05)', border: '1px solid rgba(0,255,65,0.3)', borderRadius: '20px', display: 'flex', flexDirection: 'column', position: 'relative', overflow: 'hidden' }}>
                    <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '4px', background: 'linear-gradient(90deg, transparent, var(--neon-green), transparent)' }}></div>
                    <div style={{ color: 'var(--neon-green)', fontSize: '0.95rem', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '1rem', fontWeight: 700 }}>Total Lost Revenue</div>
                    <div style={{ fontSize: '4.5rem', fontWeight: 800, color: 'var(--pure-white)', textShadow: '0 0 40px rgba(0,255,65,0.5)', lineHeight: 1, marginBottom: '0.5rem', display: 'flex', alignItems: 'baseline' }}>
                      <span style={{ fontSize: '2.5rem', color: 'var(--neon-green)', marginRight: '0.2rem', textShadow: 'none' }}>$</span>{lostRevenuePerMonth.toLocaleString()}
                    </div>
                    <div style={{ color: 'rgba(255,255,255,0.6)', fontSize: '1.05rem' }}>bleeding every month (${lostRevenuePerWeek.toLocaleString()}/week)</div>
                  </div>

                  <div style={{ marginTop: '3rem' }}>
                    <a href="/#pricing" className="btn btn-primary" style={{ display: 'block', textAlign: 'center', padding: '1.25rem', fontSize: '1.15rem', fontWeight: 800, borderRadius: '12px', letterSpacing: '1px', textTransform: 'uppercase' }} onClick={() => setIsModalOpen(false)}>
                      Plug The Leak Now
                    </a>
                  </div>

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
