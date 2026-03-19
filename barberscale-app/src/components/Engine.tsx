import { useState } from 'react';
import { Settings, Clock, AlertTriangle, ShieldCheck } from 'lucide-react';

const Engine = () => {
  const [barbers, setBarbers] = useState(3);
  const [cutsPerDay, setCutsPerDay] = useState(10);
  const [pricePerCut, setPricePerCut] = useState(40);
  const [noShowRate, setNoShowRate] = useState(15);
  const [missedCalls, setMissedCalls] = useState(25);

  const workingDaysPerWeek = 5;
  const weeksPerYear = 50;

  // Revenue Math
  const totalWeeklyCuts = barbers * cutsPerDay * workingDaysPerWeek;
  const potentialWeeklyRevenue = totalWeeklyCuts * pricePerCut;
  const potentialAnnualRevenue = potentialWeeklyRevenue * weeksPerYear;

  // The Cons (Current Problem)
  // Assuming a portion of that revenue is lost to no-shows
  const annualLostToNoShows = potentialAnnualRevenue * (noShowRate / 100);
  // Assuming 1/3 of missed calls would have booked, and call abandon rate is high
  const annualLostToCalls = (missedCalls / 3) * pricePerCut * weeksPerYear;
  const totalAnnualLost = annualLostToNoShows + annualLostToCalls;

  // The Pros (The Solution - BarberScale)
  // BarberScale reduces no-shows by 85% and answers 100% of missed calls via AI
  const recoveredNoShows = annualLostToNoShows * 0.85;
  const recoveredCalls = annualLostToCalls * 0.90; // conservative 90% booking rate vs a human
  const totalAnnualRecovered = recoveredNoShows + recoveredCalls;

  // Time saved (Manual reminders, phone calls, review begging)
  // ~15 mins per day per barber saved from manual admin / callbacks
  const hoursSavedPerYear = (barbers * 0.25 * workingDaysPerWeek * weeksPerYear) + (missedCalls * 0.1 * weeksPerYear);

  return (
    <section id="engine" style={{ padding: '8rem 0', backgroundColor: 'var(--void-black)', position: 'relative', borderTop: '1px solid rgba(0, 255, 65, 0.1)' }}>
      {/* Background FX */}
      <div style={{ position: 'absolute', top: '0', left: '0', right: '0', bottom: '0', backgroundImage: 'radial-gradient(circle at 50% 100%, rgba(0,255,65,0.05) 0%, transparent 60%)', pointerEvents: 'none' }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 style={{ fontSize: '3rem', marginBottom: '1rem' }}>The <span className="text-neon">BarberScale Engine</span></h2>
          <p style={{ maxWidth: '700px', margin: '0 auto', fontSize: '1.2rem' }}>
            Interactive ROI Calculator. See exactly how much revenue you're losing to the "Old Way" and how our automated engine recovers it.
          </p>
        </div>

        <div className="engine-grid">
          {/* LEFT: Controls (The input) */}
          <div className="engine-controls glass-card">
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '2rem', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '1rem' }}>
              <Settings className="anim-spin-slow" color="var(--neon-green)" />
              <h3 style={{ margin: 0, fontSize: '1.5rem', fontFamily: 'var(--font-body)', fontWeight: 600 }}>Your Shop's Metrics</h3>
            </div>

            <div className="slider-group">
              <div className="slider-label">
                <span>Number of Barbers</span>
                <span className="data-mono text-neon">{barbers}</span>
              </div>
              <input type="range" min="1" max="20" value={barbers} onChange={(e) => setBarbers(Number(e.target.value))} className="custom-slider" />
            </div>

            <div className="slider-group">
              <div className="slider-label">
                <span>Avg. Cuts/Day (Per Barber)</span>
                <span className="data-mono text-neon">{cutsPerDay}</span>
              </div>
              <input type="range" min="5" max="25" value={cutsPerDay} onChange={(e) => setCutsPerDay(Number(e.target.value))} className="custom-slider" />
            </div>

            <div className="slider-group">
              <div className="slider-label">
                <span>Avg. Price per Cut ($)</span>
                <span className="data-mono text-neon">${pricePerCut}</span>
              </div>
              <input type="range" min="15" max="150" value={pricePerCut} onChange={(e) => setPricePerCut(Number(e.target.value))} className="custom-slider" />
            </div>

            <div className="slider-group" style={{ marginTop: '2rem', padding: '1.5rem', background: 'rgba(255,0,50,0.05)', borderRadius: '12px', border: '1px solid rgba(255,0,50,0.2)' }}>
              <h4 style={{ color: '#ff4444', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '1rem', textTransform: 'none', fontFamily: 'var(--font-body)' }}><AlertTriangle size={16} /> Current Pain Points</h4>
              
              <div className="slider-group">
                <div className="slider-label">
                  <span>No-Show / Cancellation Rate</span>
                  <span className="data-mono" style={{ color: '#ff4444' }}>{noShowRate}%</span>
                </div>
                <input type="range" min="0" max="40" value={noShowRate} onChange={(e) => setNoShowRate(Number(e.target.value))} className="custom-slider danger-slider" />
              </div>

              <div className="slider-group">
                <div className="slider-label">
                  <span>Missed Calls (Per Week)</span>
                  <span className="data-mono" style={{ color: '#ff4444' }}>{missedCalls}</span>
                </div>
                <input type="range" min="0" max="100" value={missedCalls} onChange={(e) => setMissedCalls(Number(e.target.value))} className="custom-slider danger-slider" />
              </div>
            </div>
          </div>

          {/* RIGHT: Dashboard (The Output) */}
          <div className="engine-dashboard">
            
            {/* The Problem */}
            <div className="dashboard-panel panel-dark">
              <div className="panel-header" style={{ color: '#ff4444' }}>
                <AlertTriangle size={20} />
                <span>The Cons (The Old Way)</span>
              </div>
              <p style={{ fontSize: '0.9rem', color: 'var(--gray-medium)' }}>Revenue bleeding from manual booking and missed opportunities.</p>
              
              <div className="stat-row">
                <span className="stat-label">Lost to No-Shows/yr:</span>
                <span className="stat-value text-danger">-${Math.round(annualLostToNoShows).toLocaleString()}</span>
              </div>
              <div className="stat-row">
                <span className="stat-label">Lost to Missed Calls/yr:</span>
                <span className="stat-value text-danger">-${Math.round(annualLostToCalls).toLocaleString()}</span>
              </div>
              <div className="stat-divider" style={{ background: 'rgba(255,0,0,0.2)' }} />
              <div className="stat-row total-row">
                <span className="stat-label">Total Annual Loss:</span>
                <span className="stat-value text-danger" style={{ fontSize: '2rem' }}>-${Math.round(totalAnnualLost).toLocaleString()}</span>
              </div>
            </div>

            {/* The Solution */}
            <div className="dashboard-panel panel-neon" style={{ position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', top: 0, right: 0, width: '150px', height: '150px', background: 'radial-gradient(circle, rgba(0,255,65,0.15) 0%, transparent 70%)', transform: 'translate(30%, -30%)' }} />
              
              <div className="panel-header" style={{ color: 'var(--neon-green)' }}>
                <ShieldCheck size={20} />
                <span>The Pros (BarberScale Engine)</span>
              </div>
              <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.7)' }}>Automated recovery and 24/7 AI Receptionist.</p>
              
              <div className="stat-row">
                <span className="stat-label">No-Shows Prevented:</span>
                <span className="stat-value text-neon">+${Math.round(recoveredNoShows).toLocaleString()}</span>
              </div>
              <div className="stat-row">
                <span className="stat-label">Missed Calls Booked:</span>
                <span className="stat-value text-neon">+${Math.round(recoveredCalls).toLocaleString()}</span>
              </div>
              <div className="stat-divider" style={{ background: 'rgba(0,255,65,0.3)' }} />
              <div className="stat-row total-row">
                <span className="stat-label">Opportunity Revenue:</span>
                <span className="stat-value text-neon" style={{ fontSize: '2.5rem', textShadow: '0 0 20px rgba(0,255,65,0.5)' }}>+${Math.round(totalAnnualRecovered).toLocaleString()}</span>
              </div>
            </div>

            {/* Bonus: Time Saved */}
            <div className="dashboard-panel panel-dark" style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
              <div style={{ background: 'rgba(0,255,65,0.1)', padding: '1rem', borderRadius: '12px', color: 'var(--neon-green)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', border: '1px solid rgba(0,255,65,0.2)' }}>
                <Clock size={32} />
              </div>
              <div>
                <h4 style={{ margin: 0, textTransform: 'none', fontFamily: 'var(--font-body)', fontSize: '1.25rem', color: 'var(--pure-white)' }}>Extra Time Saved</h4>
                <p style={{ margin: 0, color: 'var(--gray-medium)', fontSize: '0.9rem' }}>Time your team gets back every year instead of doing admin work.</p>
                <div style={{ marginTop: '0.5rem', fontSize: '1.5rem', fontWeight: 700, color: 'var(--neon-green)' }}>
                  {Math.round(hoursSavedPerYear)} Hours / Year
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Engine;
