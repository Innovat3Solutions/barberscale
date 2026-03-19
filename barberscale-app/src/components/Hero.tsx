import { useEffect, useState } from 'react';
import { ChevronRight, Scissors, Mic, CalendarCheck, TrendingUp, Sparkles } from 'lucide-react';

const Hero = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 50);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="hero" style={{ 
      minHeight: '100vh', 
      display: 'flex', 
      alignItems: 'center', 
      position: 'relative', 
      overflow: 'hidden',
      padding: '8rem 0 6rem',
      backgroundColor: 'var(--void-black)'
    }}>
      
      {/* Dynamic Background Elements */}
      <div className="bg-speed-lines" style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, opacity: 0.3, zIndex: 0 }} />
      
      {/* Glowing Orbs */}
      <div style={{
        position: 'absolute', top: '-10%', left: '-5%', width: '50vw', height: '50vw',
        background: 'radial-gradient(circle, rgba(0,255,65,0.08) 0%, transparent 60%)',
        filter: 'blur(60px)', zIndex: 0, animation: 'pulse-glow 8s infinite alternate'
      }} />
      <div style={{
        position: 'absolute', bottom: '-20%', right: '-10%', width: '60vw', height: '60vw',
        background: 'radial-gradient(circle, rgba(0,255,65,0.05) 0%, transparent 60%)',
        filter: 'blur(80px)', zIndex: 0, animation: 'pulse-glow 12s infinite alternate-reverse'
      }} />

      {/* Floating Abstract Barber Pole */}
      <div style={{
        position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%) rotate(15deg)',
        width: '120vw', height: '200vh', opacity: 0.02, zIndex: 0, pointerEvents: 'none',
        backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 100px, #fff 100px, #fff 200px)'
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1, width: '100%' }}>
        
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', position: 'relative' }}>
          
          {/* Top Badge */}
          <div style={{ 
            display: 'inline-flex', alignItems: 'center', gap: '0.75rem', marginBottom: '2rem', 
            background: 'linear-gradient(90deg, rgba(0,255,65,0.05) 0%, rgba(0,255,65,0.15) 50%, rgba(0,255,65,0.05) 100%)',
            border: '1px solid rgba(0, 255, 65, 0.4)', padding: '0.6rem 1.5rem', borderRadius: '50px',
            backdropFilter: 'blur(10px)', boxShadow: '0 0 20px rgba(0,255,65,0.2)',
            opacity: mounted ? 1 : 0, transform: mounted ? 'translateY(0)' : 'translateY(20px)', transition: 'all 1s cubic-bezier(0.16, 1, 0.3, 1)'
          }}>
            <Sparkles size={16} color="var(--neon-green)" className="anim-pulse-dot" />
            <span style={{ color: 'var(--pure-white)', fontWeight: 600, fontSize: '0.9rem', letterSpacing: '2px', textTransform: 'uppercase' }}>The Operating System for Barbers</span>
            <Scissors size={16} color="var(--neon-green)" style={{ transform: 'rotate(90deg)' }} />
          </div>
          
          {/* Main Headline */}
          <h1 style={{ 
            fontSize: 'clamp(3rem, 7vw, 6.5rem)', 
            marginBottom: '1.5rem', 
            display: 'flex', flexDirection: 'column', alignItems: 'center',
            lineHeight: 1,
            letterSpacing: '-2px',
            opacity: mounted ? 1 : 0, transform: mounted ? 'scale(1)' : 'scale(0.95)', transition: 'all 1.2s cubic-bezier(0.16, 1, 0.3, 1) 0.2s',
            zIndex: 10
          }}>
            <span style={{ color: 'var(--pure-white)' }}>AUTOMATE.</span>
            <span style={{ color: 'var(--pure-white)' }}>ELEVATE.</span>
            <span className="text-neon" style={{ position: 'relative', display: 'inline-block' }}>
              SCALE.
              <svg width="100%" height="20" viewBox="0 0 100 20" preserveAspectRatio="none" style={{ position: 'absolute', bottom: '-5px', left: 0, width: '100%', opacity: 0.7 }}>
                <path d="M0 10 Q 50 20 100 10" fill="none" stroke="var(--neon-green)" strokeWidth="4" className="anim-pulse-glow" strokeDasharray="200" strokeDashoffset="0">
                  <animate attributeName="stroke-dashoffset" from="200" to="0" dur="2s" fill="freeze" />
                </path>
              </svg>
            </span>
          </h1>

          <p style={{ 
            fontSize: 'clamp(1.1rem, 2vw, 1.4rem)', maxWidth: '700px', margin: '0 auto 3.5rem auto', 
            color: 'var(--gray-medium)', fontWeight: 400,
            opacity: mounted ? 1 : 0, transform: mounted ? 'translateY(0)' : 'translateY(20px)', transition: 'all 1s cubic-bezier(0.16, 1, 0.3, 1) 0.4s'
          }}>
            An elegant AI infrastructure designed exclusively for modern barbershops. 
            Replace your receptionist with Voice AI, automate real Google reviews, and optimize your schedule seamlessly.
          </p>

          <div style={{ 
            display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap',
            opacity: mounted ? 1 : 0, transform: mounted ? 'translateY(0)' : 'translateY(20px)', transition: 'all 1s cubic-bezier(0.16, 1, 0.3, 1) 0.6s'
          }}>
            <a href="#demo" className="btn btn-primary" style={{ padding: '1rem 2.5rem', fontSize: '1.1rem', letterSpacing: '1px', boxShadow: '0 0 30px rgba(0, 255, 65, 0.3)' }}>
              Initialize AI <ChevronRight style={{ marginLeft: '0.5rem' }} size={20} />
            </a>
            <a href="#pricing" className="btn btn-secondary" style={{ padding: '1rem 2.5rem', fontSize: '1.1rem', letterSpacing: '1px', backdropFilter: 'blur(5px)' }}>
              View Plans
            </a>
          </div>
        </div>

        {/* Floating Tech Widgets */}
        {/* Positioned relative to the main .container so they sit on the outer edges of the 1200px bounds */}
        
        {/* Widget 1: Voice AI */}
        <div className="glass-card anim-pop" style={{ 
          position: 'absolute', top: '15%', left: '-18%', width: '220px', padding: '1.2rem',
          transform: 'rotate(-5deg)', zIndex: -1, display: 'flex', alignItems: 'center', gap: '1rem',
          animationDelay: '0s'
        }}>
          <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'rgba(0,255,65,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid var(--neon-green)' }}>
            <Mic size={20} color="var(--neon-green)" className="anim-pulse-dot" />
          </div>
          <div style={{ textAlign: 'left' }}>
            <div style={{ color: 'var(--pure-white)', fontSize: '0.85rem', fontWeight: 600 }}>Voice Assistant</div>
            <div style={{ color: 'var(--neon-green)', fontSize: '0.75rem', fontFamily: 'var(--font-mono)' }}>Active & Listening</div>
          </div>
        </div>

        {/* Widget 2: Auto Scheduling */}
        <div className="glass-card anim-pop" style={{ 
          position: 'absolute', top: '40%', right: '0%', width: '200px', padding: '1.2rem',
          transform: 'rotate(3deg)', zIndex: -1, display: 'flex', alignItems: 'center', gap: '1rem',
          animationDelay: '2s'
        }}>
          <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid rgba(255,255,255,0.1)' }}>
            <CalendarCheck size={20} color="var(--pure-white)" />
          </div>
          <div style={{ textAlign: 'left' }}>
            <div style={{ color: 'var(--pure-white)', fontSize: '0.85rem', fontWeight: 600 }}>Smart Booking</div>
            <div style={{ color: 'var(--gray-medium)', fontSize: '0.75rem' }}>No overlaps</div>
          </div>
        </div>

        {/* Widget 3: Growth */}
        <div className="glass-card anim-pop" style={{ 
          position: 'absolute', bottom: '10%', left: '10%', width: '240px', padding: '1.2rem',
          transform: 'rotate(-2deg)', zIndex: -1, display: 'flex', alignItems: 'center', gap: '1rem',
          animationDelay: '4s'
        }}>
          <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'linear-gradient(135deg, rgba(0,255,65,0.2) 0%, rgba(0,0,0,0.8) 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid var(--neon-green)' }}>
            <TrendingUp size={20} color="var(--neon-green)" />
          </div>
          <div style={{ textAlign: 'left' }}>
            <div style={{ color: 'var(--pure-white)', fontSize: '0.85rem', fontWeight: 600 }}>Review Automation</div>
            <div style={{ color: 'var(--neon-green)', fontSize: '1.1rem', fontWeight: 700, fontFamily: 'var(--font-mono)' }}>+47% 5-Star</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
