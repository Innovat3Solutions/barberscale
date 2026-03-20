import { Star, MessageSquare, Calendar, Zap, TrendingUp, Send, CheckCircle2, UserCircle2 } from 'lucide-react';
import { useEffect, useState } from 'react';

const Features = () => {
  // We can use a bit of React state for a ticker, but CSS animations handle most of the heavy lifting for performance.
  const [rating, setRating] = useState(4.2);
  const [clients, setClients] = useState(0);

  useEffect(() => {
    // Simulate rating going up dynamically for Review Automation
    const ratingInterval = setInterval(() => {
      setRating(prev => {
        if (prev >= 4.9) return 4.2; // loop back for the demo effect
        return Number((prev + 0.1).toFixed(1));
      });
    }, 800);

    // Simulate marketing broadcast count going up
    const clientsInterval = setInterval(() => {
      setClients(prev => {
        if (prev >= 1204) return 0;
        return prev + 14;
      });
    }, 50);

    return () => {
      clearInterval(ratingInterval);
      clearInterval(clientsInterval);
    };
  }, []);

  return (
    <section id="features" style={{ padding: '8rem 0', backgroundColor: 'var(--void-black)', position: 'relative', overflow: 'hidden' }}>
      
      {/* Background ambient glow matching the dark tech theme */}
      <div style={{ position: 'absolute', top: '20%', left: '50%', transform: 'translate(-50%, -50%)', width: '80vw', height: '80vw', maxWidth: '800px', maxHeight: '800px', background: 'radial-gradient(circle, rgba(0,255,65,0.03) 0%, transparent 60%)', zIndex: 0, pointerEvents: 'none' }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
          <h2 className="title-lg" style={{ marginBottom: '1.5rem' }}>Why use <span className="text-neon">BarberScale?</span></h2>
          <p style={{ maxWidth: '600px', margin: '0 auto', fontSize: '1.125rem' }}>
            Built specifically for barbershops, our platform automates the busy work so you can focus entirely on delivering the perfect cut.
          </p>
        </div>
        
        {/* Desktop Grid / Mobile Carousel Wrapper */}
        <div className="features-carousel-wrapper">
          <div className="feature-grid features-carousel">

            {/* Card 1: Review Automation */}
            <div className="glass-card feature-card">
            <div className="feature-content">
              <h3 className="feature-title">Review Automation</h3>
              <p className="feature-desc">
                Automatically send SMS or email review requests after a cut. Filter out negative feedback privately and publish 5-star ratings everywhere.
              </p>
            </div>
            <div className="feature-graphic-container">
              {/* Decorative Lines */}
              <div className="connection-line line-h" />
              <div className="connection-line line-v" />
              
              {/* Floating review bubbles appearing in sequence */}
              <div className="floating-badge neon anim-pop" style={{ position: 'absolute', top: '25%', right: '8%', animationDelay: '0s', zIndex: 12 }}>
                <Star size={14} fill="currentColor" /> 5 Stars
              </div>
              <div className="floating-badge neon anim-pop" style={{ position: 'absolute', bottom: '20%', right: '10%', animationDelay: '2s', zIndex: 12 }}>
                <Star size={14} fill="currentColor" /> Best Cut!
              </div>

              {/* Chat Simulation sending the SMS */}
              <div style={{ position: 'absolute', top: '15%', left: '5%', zIndex: 5, background: 'var(--gray-dark)', border: '1px solid rgba(0,255,65,0.3)', padding: '0.75rem', borderRadius: '12px', fontSize: '0.75rem', display: 'flex', flexDirection: 'column', gap: '0.5rem', width: '160px', animation: 'float 5s infinite' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', color: 'var(--neon-green)' }}>
                  <MessageSquare size={12} /> SMS Request
                </div>
                <div style={{ color: 'var(--gray-light)' }}>"Thanks for coming in! How was your fade today?"</div>
                <div className="anim-typing" style={{ color: 'var(--neon-green)', alignSelf: 'flex-end', background: 'rgba(0,255,65,0.1)', padding: '0.25rem 0.5rem', borderRadius: '8px' }}>
                  ★★★★★
                </div>
              </div>

              {/* Central Widget */}
              <div className="central-widget central-widget-glow" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: 15 }}>
                <h4>Average Rating</h4>
                <div className="large-value" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', width: '120px' }}>
                  {rating.toFixed(1)} <Star size={28} fill="var(--neon-green)" color="var(--neon-green)" className="anim-spin-slow" />
                </div>
              </div>
            </div>
          </div>

            {/* Card 2: Appointment Reminders */}
            <div className="glass-card feature-card">
            <div className="feature-content">
              <h3 className="feature-title">Appointment Reminders</h3>
              <p className="feature-desc">
                Reduce no-shows drastically. Send automated confirmation and reminder texts that clients can reply to directly to confirm or reschedule.
              </p>
            </div>
            <div className="feature-graphic-container appointment-reminders-graphic">
              {/* Ambient Glow */}
              <div className="ambient-glow" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '100%', height: '100%', background: 'radial-gradient(circle, rgba(0,255,65,0.05) 0%, transparent 60%)' }} />

              {/* Floating Elements */}
              <div className="floating-badge neon anim-slide-up appointment-badge-top" style={{ position: 'absolute', top: '5%', right: '5%', animationDuration: '6s', zIndex: 15 }}>
                <TrendingUp size={14} className="badge-icon" /> <span className="badge-text">-85%</span>
              </div>
              <div className="floating-badge dark anim-slide-up appointment-badge-bottom" style={{ position: 'absolute', bottom: '10%', left: '2%', animationDelay: '3s', animationDuration: '6s', zIndex: 15 }}>
                <CheckCircle2 size={14} className="badge-icon" /> <span className="badge-text">Confirmed</span>
              </div>

              {/* Central Widget - Animated SMS Conversation */}
              <div className="central-widget sms-conversation-widget">
                <div className="sms-header">
                  <div className="sms-header-left">
                    <Calendar size={14} color="var(--neon-green)" className="sms-icon" />
                    <span className="sms-title">Reminder</span>
                  </div>
                  <CheckCircle2 size={14} color="var(--neon-green)" className="sms-check" />
                </div>

                {/* Outgoing Message */}
                <div className="anim-msg-out sms-outgoing">
                  <span className="sms-text">"Confirming your fade at 3PM. Reply YES."</span>
                </div>

                {/* Typing Indicator */}
                <div className="anim-typing-indicator sms-typing">
                  <div className="dot"></div>
                  <div className="dot"></div>
                  <div className="dot"></div>
                </div>

                {/* Incoming Message */}
                <div className="anim-msg-in sms-incoming">
                  YES 👍
                </div>
              </div>
            </div>
          </div>

          {/* Card 3: Voice AI Agent */}
          <div className="glass-card feature-card">
            <div className="feature-content">
              <h3 className="feature-title">Voice AI Agent</h3>
              <p className="feature-desc">
                An intelligent assistant that answers calls 24/7. It accesses your calendar in real-time to book clients with their favorite barber.
              </p>
            </div>
            <div className="feature-graphic-container voice-ai-graphic">
              {/* Orbiting Tech Ring */}
              <div className="orbit-circle voice-orbit-1" />
              <div className="orbit-circle voice-orbit-2" style={{ width: '200px', height: '200px', borderStyle: 'dotted', animationDirection: 'reverse', animationDuration: '40s' }} />

              {/* Central Widget - AI Waveform */}
              <div className="central-widget central-widget-glow voice-ai-center">
                <div className="voice-waveform">
                  <div className="anim-bar voice-bar" style={{ animationDelay: '0s' }} />
                  <div className="anim-bar voice-bar" style={{ animationDelay: '0.1s' }} />
                  <div className="anim-bar voice-bar" style={{ animationDelay: '0.2s' }} />
                  <div className="anim-bar voice-bar" style={{ animationDelay: '0.15s' }} />
                  <div className="anim-bar voice-bar" style={{ animationDelay: '0.05s' }} />
                </div>
              </div>

              {/* Floating Orbit Nodes */}
              <div className="floating-badge dark anim-pop voice-badge voice-badge-1" style={{ position: 'absolute', top: '8%', left: '8%', animationDelay: '1s', zIndex: 12 }}>
                <UserCircle2 size={12} className="badge-icon" /> <span className="badge-text">Incoming</span>
              </div>
              <div className="floating-badge neon anim-pop voice-badge voice-badge-2" style={{ position: 'absolute', top: '12%', right: '5%', animationDelay: '3s', zIndex: 12 }}>
                <Zap size={12} className="badge-icon" /> <span className="badge-text">Booking</span>
              </div>
              <div className="floating-badge dark anim-pop voice-badge voice-badge-3" style={{ position: 'absolute', bottom: '12%', right: '8%', animationDelay: '5s', zIndex: 12 }}>
                <Calendar size={12} className="badge-icon" /> <span className="badge-text">Booked</span>
              </div>
            </div>
          </div>

          {/* Card 4: Marketing Campaigns */}
          <div className="glass-card feature-card">
            <div className="feature-content">
              <h3 className="feature-title">Marketing Campaigns</h3>
              <p className="feature-desc">
                Broadcast holiday specials, last-minute openings, or loyal customer discounts to your entire client base with a single click.
              </p>
            </div>
            <div className="feature-graphic-container">
              {/* Ambient Glow */}
              <div style={{ position: 'absolute', bottom: '0', left: '50%', transform: 'translateX(-50%)', width: '150px', height: '150px', background: 'radial-gradient(circle, rgba(0,255,65,0.1) 0%, transparent 70%)', borderRadius: '50%' }} />
              
              {/* Floating Elements */}
              <div className="floating-badge dark anim-slide-up" style={{ position: 'absolute', top: '5%', left: '2%', animationDelay: '1s', animationDuration: '4s', zIndex: 15 }}>
                <TrendingUp size={14} color="var(--neon-green)" /> +15% Returns
              </div>
              
              <div style={{ position: 'absolute', top: '15%', right: '5%', width: '48px', height: '48px', background: 'var(--neon-green)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', animation: 'pulse-glow 2s infinite', zIndex: 15, cursor: 'pointer', boxShadow: '0 0 20px rgba(0,255,65,0.5)' }}>
                <Send size={20} color="var(--void-black)" className="anim-fly" />
              </div>

              {/* Central Widget - Progress Demo */}
              <div className="central-widget" style={{ padding: '0', overflow: 'hidden', width: '80%', zIndex: 10 }}>
                <div style={{ background: 'rgba(0,255,65,0.1)', padding: '1.25rem', borderBottom: '1px solid rgba(0,255,65,0.2)', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'linear-gradient(135deg, var(--gray-dark), #000)', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid rgba(0,255,65,0.3)' }}>
                    <div className="anim-pulse-dot" style={{ width: '14px', height: '14px', borderRadius: '50%', background: 'var(--neon-green)' }} />
                  </div>
                  <div style={{ textAlign: 'left' }}>
                    <div style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--pure-white)' }}>Labor Day Special Blast</div>
                    <div style={{ fontSize: '0.875rem', color: 'var(--neon-green)' }}>Delivering to {Math.min(clients, 1204)} clients...</div>
                  </div>
                </div>
                
                {/* Dynamically filling progress bar */}
                <div style={{ width: '100%', height: '8px', background: 'var(--gray-dark)' }}>
                  <div style={{ height: '100%', background: 'var(--neon-green)', width: `${Math.min((clients / 1204) * 100, 100)}%`, transition: 'width 0.1s linear' }} />
                </div>

                <div style={{ padding: '1rem', display: 'flex', alignItems: 'flex-end', gap: '6px', height: '80px' }}>
                  {/* Animated Bar Chart */}
                  {[20, 35, 25, 50, 45, 70, 60, 85, 95, 100].map((_, i) => (
                    <div key={i} style={{ flex: 1, background: 'linear-gradient(180deg, var(--neon-green) 0%, rgba(0,255,65,0.1) 100%)', borderRadius: '4px 4px 0 0', animation: `grow-up 4s infinite ${i * 0.1}s`, transformOrigin: 'bottom' }} />
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>

          {/* Swipe Indicator - Mobile Only */}
          <div className="features-swipe-hint">
            <span>Swipe to explore features</span>
            <div className="swipe-dots">
              <span className="dot"></span>
              <span className="dot"></span>
              <span className="dot"></span>
              <span className="dot"></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
