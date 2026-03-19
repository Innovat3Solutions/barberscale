import { CheckCircle2, Mic } from 'lucide-react';

const InteractiveMockups = () => {
  return (
    <section id="demo" className="section-swoosh" style={{ padding: '6rem 0', backgroundColor: 'var(--gray-dark)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 style={{ fontSize: '3rem' }}>See The <span className="text-neon">Engine</span></h2>
          <p style={{ maxWidth: '600px', margin: '0 auto' }}>Live UI mockups showing how BarberScale operates your shop autonomously.</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'minmax(300px, 1.2fr) minmax(300px, 0.8fr)', gap: '3rem', alignItems: 'center' }}>
          
          {/* Dashboard Mockup */}
          <div className="data-frame" style={{ padding: '2rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '2rem', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '1rem', alignItems: 'center' }}>
              <h3 style={{ margin: 0 }}>Dashboard Overview</h3>
              <span className="data-mono" style={{ fontSize: '0.9rem', padding: '0.4rem 0.8rem', backgroundColor: 'rgba(0,255,65,0.1)', borderRadius: '4px' }}>STATUS: ACTIVE</span>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '2.5rem' }}>
              <div style={{ backgroundColor: 'var(--void-black)', padding: '1.5rem', border: '1px solid rgba(0, 255, 65, 0.2)' }}>
                <p style={{ margin: 0, textTransform: 'uppercase', fontSize: '0.8rem', color: 'var(--gray-medium)' }}>Calls Handled (Today)</p>
                <div style={{ fontSize: '2.5rem', fontFamily: 'var(--font-heading)' }} className="text-neon">42</div>
                <div style={{ fontSize: '0.9rem', color: 'var(--neon-green)' }}>+15% vs yesterday</div>
              </div>
              <div style={{ backgroundColor: 'var(--void-black)', padding: '1.5rem', border: '1px solid rgba(0, 255, 65, 0.2)' }}>
                <p style={{ margin: 0, textTransform: 'uppercase', fontSize: '0.8rem', color: 'var(--gray-medium)' }}>New 5-Star Reviews</p>
                <div style={{ fontSize: '2.5rem', fontFamily: 'var(--font-heading)' }} className="text-neon">8</div>
                <div style={{ fontSize: '0.9rem', color: 'var(--neon-green)' }}>Automated via SMS</div>
              </div>
            </div>
            
            <h4 style={{ color: 'var(--gray-medium)', fontSize: '0.9rem', marginBottom: '1rem' }}>RECENT AI BOOKINGS</h4>
            <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
              {[
                { name: 'Mike T.', service: 'Fade & Beard', time: 'Tomorrow @ 2:30 PM', staff: 'Alex' },
                { name: 'David R.', service: 'Scissor Cut', time: 'Today @ 5:00 PM', staff: 'Jason' },
                { name: 'Chris P.', service: 'Line Up', time: 'Friday @ 11:00 AM', staff: 'Alex' }
              ].map((booking, idx) => (
                <li key={idx} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: 'var(--void-black)', padding: '1.25rem', marginBottom: '0.75rem', borderLeft: '4px solid var(--neon-green)' }}>
                  <div>
                    <strong style={{ display: 'block', marginBottom: '0.2rem' }}>{booking.name} - {booking.service}</strong>
                    <span style={{ fontSize: '0.85rem', color: 'var(--gray-medium)' }}>{booking.time} with {booking.staff}</span>
                  </div>
                  <CheckCircle2 color="var(--neon-green)" size={28} />
                </li>
              ))}
            </ul>
          </div>

          {/* AI Voice Call Mockup */}
          <div className="bg-speed-lines" style={{ padding: '2.5rem', border: '1px solid rgba(255,255,255,0.1)', minHeight: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2.5rem' }}>
              <div style={{ backgroundColor: 'var(--neon-green)', padding: '1rem', borderRadius: '50%', flexShrink: 0 }}>
                <Mic size={28} color="var(--void-black)" />
              </div>
              <div>
                <h3 style={{ margin: 0, fontSize: '1.4rem' }}>Live Transcription</h3>
                <span className="data-mono text-neon" style={{ fontSize: '0.85rem' }}>INCOMING CALL...</span>
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div style={{ backgroundColor: 'var(--void-black)', padding: '1.25rem', borderLeft: '3px solid var(--gray-medium)', maxWidth: '90%' }}>
                <p style={{ margin: 0, fontSize: '1rem' }}>"Hey, I need a cut with Jason tomorrow afternoon if possible."</p>
              </div>
              <div style={{ backgroundColor: 'var(--gray-dark)', padding: '1.25rem', borderRight: '3px solid var(--neon-green)', alignSelf: 'flex-end', maxWidth: '90%', boxShadow: '0 4px 15px rgba(0,255,65,0.1)' }}>
                <p style={{ margin: 0, fontSize: '1rem', color: 'var(--neon-green)' }}>"I can help with that! Jason has an opening at 2:00 PM or 4:30 PM tomorrow. Which works better?"</p>
              </div>
              <div style={{ backgroundColor: 'var(--void-black)', padding: '1.25rem', borderLeft: '3px solid var(--gray-medium)', maxWidth: '90%' }}>
                <p style={{ margin: 0, fontSize: '1rem' }}>"Let's book the 2:00 PM."</p>
              </div>
              <div style={{ backgroundColor: 'var(--gray-dark)', padding: '1.25rem', borderRight: '3px solid var(--neon-green)', alignSelf: 'flex-end', maxWidth: '90%', boxShadow: '0 4px 15px rgba(0,255,65,0.1)' }}>
                <p style={{ margin: 0, fontSize: '1rem', color: 'var(--neon-green)' }}>"Perfect, you're booked with Jason for 2:00 PM tomorrow. See you then!"</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default InteractiveMockups;
