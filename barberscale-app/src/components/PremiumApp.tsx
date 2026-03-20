import { useState, useEffect } from 'react';
import { Smartphone, ShieldCheck, Zap, Sparkles, ChevronLeft, Calendar as CalendarIcon, Clock, CheckCircle2, Scissors, UserCircle2 } from 'lucide-react';

const PremiumApp = () => {
  // Booking Flow State: 1 = Service, 2 = Date/Time, 3 = Confirmation
  const [step, setStep] = useState(1);
  const [selectedService, setSelectedService] = useState('');
  const [selectedTime, setSelectedTime] = useState('');

  // Auto-play the demo if the user doesn't interact, to show it's an "automated process"
  useEffect(() => {
    const timer = setInterval(() => {
      setStep((prev) => {
        if (prev === 1) {
          setSelectedService('Signature Haircut');
          return 2;
        }
        if (prev === 2) {
          setSelectedTime('2:30 PM');
          return 3;
        }
        if (prev === 3) {
          // Reset
          setSelectedService('');
          setSelectedTime('');
          return 1;
        }
        return 1;
      });
    }, 4000); // Progress every 4 seconds

    return () => clearInterval(timer);
  }, []);

  const handleManualStep = (num: number) => {
    setStep(num);
  };

  return (
    <section id="premium-app" className="hero-padding" style={{ backgroundColor: '#020503', position: 'relative', overflow: 'hidden' }}>
      
      {/* Background ambient lighting */}
      <div style={{ position: 'absolute', top: '50%', right: '0', transform: 'translate(50%, -50%)', width: '800px', height: '800px', background: 'radial-gradient(circle, rgba(0,255,65,0.05) 0%, transparent 60%)', filter: 'blur(80px)', pointerEvents: 'none' }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="premium-split">
          
          {/* LEFT: Copy & Features */}
          <div className="premium-content">
            <div style={{ display: 'inline-flex', width: 'fit-content', alignItems: 'center', gap: '0.35rem', background: 'rgba(0, 255, 65, 0.1)', padding: '0.35rem 0.85rem', borderRadius: '50px', border: '1px solid rgba(0, 255, 65, 0.3)', marginBottom: '1.5rem' }}>
              <Sparkles size={14} color="var(--neon-green)" />
              <span style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--neon-green)', letterSpacing: '1px', textTransform: 'uppercase', lineHeight: 1 }}>The Premium Tier</span>
            </div>

            <h2 className="title-lg" style={{ color: 'var(--pure-white)', textShadow: '0 4px 15px rgba(0,0,0,0.8)', textTransform: 'uppercase' }}>
              Your Brand, <br />
              <span className="text-neon" style={{ fontStyle: 'italic' }}>Your App.</span>
            </h2>
            
            <p style={{ fontSize: '1.2rem', color: 'var(--gray-medium)', marginBottom: '3rem', maxWidth: '500px' }}>
              Scale to the next level with a fully white-labeled mobile application. A clean, simple, automated booking flow that puts your barbershop directly in your clients' pockets.
            </p>

            <div className="premium-features">
              <div className="premium-feature-item">
                <div className="premium-icon-box">
                  <Smartphone size={24} color="var(--neon-green)" />
                </div>
                <div>
                  <h4 style={{ margin: 0, fontSize: '1.25rem', fontFamily: 'var(--font-body)', fontWeight: 600, color: 'var(--pure-white)' }}>Direct Terminal Booking</h4>
                  <p style={{ margin: 0, color: 'var(--gray-medium)', fontSize: '0.95rem', marginTop: '0.5rem' }}>Clients can schedule, reschedule, and manage their cuts natively without third-party web apps.</p>
                </div>
              </div>

              <div className="premium-feature-item">
                <div className="premium-icon-box">
                  <ShieldCheck size={24} color="var(--neon-green)" />
                </div>
                <div>
                  <h4 style={{ margin: 0, fontSize: '1.25rem', fontFamily: 'var(--font-body)', fontWeight: 600, color: 'var(--pure-white)' }}>100% White Labeled</h4>
                  <p style={{ margin: 0, color: 'var(--gray-medium)', fontSize: '0.95rem', marginTop: '0.5rem' }}>Your logo, your colors, your brand. Available on the App Store and Google Play.</p>
                </div>
              </div>

              <div className="premium-feature-item">
                <div className="premium-icon-box">
                  <Zap size={24} color="var(--neon-green)" />
                </div>
                <div>
                  <h4 style={{ margin: 0, fontSize: '1.25rem', fontFamily: 'var(--font-body)', fontWeight: 600, color: 'var(--pure-white)' }}>Instant Push Notifications</h4>
                  <p style={{ margin: 0, color: 'var(--gray-medium)', fontSize: '0.95rem', marginTop: '0.5rem' }}>Bypass email and SMS spam filters. Reach your clients instantly with lock-screen drops.</p>
                </div>
              </div>
            </div>

            <div style={{ marginTop: '3rem' }}>
              <a href="#pricing" className="btn btn-primary" style={{ fontSize: '1.1rem', padding: '1rem 2.5rem' }}>Upgrade to Scale</a>
            </div>
          </div>

          {/* RIGHT: Interactive Clean App Mockup (GoHighLevel style) */}
          <div className="premium-visual">
            <div className="mockup-phone-container anim-float">
              
              <div className="mockup-phone">
                {/* iPhone Notch */}
                <div className="mockup-notch"></div>
                
                {/* Phone Screen Area */}
                <div className="mockup-screen">
                  
                  {/* App Header */}
                  <div className="app-header">
                    {step > 1 && (
                      <button onClick={() => handleManualStep(step - 1)} className="back-btn">
                        <ChevronLeft size={20} />
                      </button>
                    )}
                    <h5 className="brand-title">VELOCITY BARBERS</h5>
                    <div style={{ width: 24 }} /> {/* Spacer */}
                  </div>

                  <div className="app-content-area">
                    {/* STEP 1: Select Service & Barber */}
                    {step === 1 && (
                      <div className="fade-in-scale">
                        <h6 className="step-title">Select Service</h6>
                        
                        <div 
                          className={`service-card ${selectedService === 'Signature Haircut' ? 'selected' : ''}`}
                          onClick={() => { setSelectedService('Signature Haircut'); handleManualStep(2); }}
                        >
                          <div className="service-icon"><Scissors size={18} /></div>
                          <div className="service-details">
                            <span className="service-name">Signature Haircut</span>
                            <span className="service-meta">45 mins • $40</span>
                          </div>
                          <div className="radio-circle"></div>
                        </div>

                        <div className="service-card mt-3">
                          <div className="service-icon"><Scissors size={18} /></div>
                          <div className="service-details">
                            <span className="service-name">Haircut & Beard</span>
                            <span className="service-meta">60 mins • $65</span>
                          </div>
                          <div className="radio-circle"></div>
                        </div>

                        <h6 className="step-title" style={{ marginTop: '1.5rem' }}>Select Provider</h6>
                        <div className="provider-card">
                          <div className="provider-avatar"><UserCircle2 size={32} color="#888" /></div>
                          <div className="provider-details">
                            <span className="provider-name">Elias Thorne</span>
                            <span className="provider-rating">★ 5.0 (1.2K)</span>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* STEP 2: Date & Time */}
                    {step === 2 && (
                      <div className="fade-in-scale">
                         <h6 className="step-title">Select Date & Time</h6>
                         
                         {/* Mini Calendar Row */}
                         <div className="calendar-strip">
                           <div className="cal-day">
                             <span className="cal-dow">Mon</span>
                             <span className="cal-date">17</span>
                           </div>
                           <div className="cal-day selected">
                             <span className="cal-dow">Tue</span>
                             <span className="cal-date">18</span>
                           </div>
                           <div className="cal-day">
                             <span className="cal-dow">Wed</span>
                             <span className="cal-date">19</span>
                           </div>
                           <div className="cal-day">
                             <span className="cal-dow">Thu</span>
                             <span className="cal-date">20</span>
                           </div>
                         </div>

                         <h6 className="step-title" style={{ marginTop: '1.5rem', marginBottom: '0.5rem', fontSize: '0.85rem' }}>Morning</h6>
                         <div className="time-grid">
                           <div className="time-slot disabled">9:00 AM</div>
                           <div className="time-slot disabled">10:00 AM</div>
                           <div className="time-slot" onClick={() => { setSelectedTime('11:00 AM'); handleManualStep(3); }}>11:00 AM</div>
                         </div>

                         <h6 className="step-title" style={{ marginTop: '1rem', marginBottom: '0.5rem', fontSize: '0.85rem' }}>Afternoon</h6>
                         <div className="time-grid">
                           <div className="time-slot" onClick={() => { setSelectedTime('1:00 PM'); handleManualStep(3); }}>1:00 PM</div>
                           <div className={`time-slot ${selectedTime === '2:30 PM' ? 'selected' : ''}`} onClick={() => { setSelectedTime('2:30 PM'); handleManualStep(3); }}>
                             2:30 PM
                           </div>
                           <div className="time-slot" onClick={() => { setSelectedTime('4:00 PM'); handleManualStep(3); }}>4:00 PM</div>
                         </div>

                         <button className="app-primary-btn" onClick={() => handleManualStep(3)}>Continue</button>
                      </div>
                    )}

                    {/* STEP 3: Confirmation */}
                    {step === 3 && (
                      <div className="fade-in-scale confirmation-screen">
                        <div className="success-icon-wrapper">
                          <CheckCircle2 color="#00C853" size={64} />
                        </div>
                        <h4 className="success-heading">Appointment Confirmed!</h4>
                        <p className="success-subtext">You're all set with Elias.</p>

                        <div className="receipt-card">
                          <div className="receipt-row">
                            <span className="receipt-label">Service</span>
                            <span className="receipt-value">{selectedService || 'Signature Haircut'}</span>
                          </div>
                          <div className="receipt-row">
                            <span className="receipt-label">Date & Time</span>
                            <span className="receipt-value">Tue 18, {selectedTime || '2:30 PM'}</span>
                          </div>
                          <div className="receipt-row">
                            <span className="receipt-label">Total</span>
                            <span className="receipt-value">$40.00</span>
                          </div>
                        </div>

                        <button className="app-primary-btn" onClick={() => handleManualStep(1)} style={{ marginTop: '2rem' }}>Done</button>
                      </div>
                    )}

                  </div>

                  {/* App Footer Tab Bar */}
                  <div className="app-tab-bar">
                    <div className="tab-item active"><CalendarIcon size={20} /></div>
                    <div className="tab-item"><Clock size={20} /></div>
                    <div className="tab-item"><UserCircle2 size={20} /></div>
                  </div>

                </div>
              </div>

              {/* Glowing backplate for depth (reduced slightly) */}
              <div className="premium-phone-glow-subtle" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default PremiumApp;
