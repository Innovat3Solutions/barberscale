import { useState } from 'react';
import { ChevronDown, MessageSquare } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "What if I'm a solo barber or always on the move?",
      answer: "We understand that not every barber operates from a multi-chair storefront. BarberScale offers highly flexible, cost-effective plans specifically tailored for solo barbers and mobile professionals. We strip away the enterprise bloat and give you a clean, customized system that fits your exact workflow without breaking the bank."
    },
    {
      question: "Are there custom pricing options available?",
      answer: "Absolutely. We know a one-size-fits-all approach doesn't work in this industry. Whether you're a high-ticket solo artist or managing a busy shop, we can build a tailor-made package focused purely on maximizing your ROI. Reach out to us for a custom quote that matches your actual usage."
    },
    {
      question: "Will the AI Receptionist sound robotic to my clients?",
      answer: "Not whatsoever. Our proprietary Voice AI is trained exclusively on barbershop lingo and interactions. It understands different cuts, styles, and edge-case scheduling scenarios while maintaining a highly natural, conversational tone that represents your brand perfectly."
    },
    {
      question: "Is BarberScale difficult to set up?",
      answer: "Not at all. Our onboarding team handles the heavy lifting—from integrating the AI seamlessly with your existing calendar to configuring your custom review automation loops. You'll be fully operational in less than 48 hours."
    }
  ];

  const toggleAccordion = (index: number) => {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };

  return (
    <section id="faq" className="section-swoosh" style={{ padding: '8rem 0', backgroundColor: 'var(--gray-dark)' }}>
      <div className="container" style={{ maxWidth: '800px' }}>
        
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem', backgroundColor: 'rgba(0,255,65,0.1)', border: '1px solid var(--neon-green)', padding: '0.5rem 1rem', borderRadius: '50px' }}>
            <MessageSquare size={16} color="var(--neon-green)" />
            <span style={{ color: 'var(--neon-green)', fontWeight: 600, fontSize: '0.85rem', letterSpacing: '1px' }}>YOUR QUESTIONS ANSWERED</span>
          </div>
          <h2 style={{ fontSize: '3rem', fontFamily: 'var(--font-heading)' }}>
            Frequently Asked <span className="text-neon">Questions</span>
          </h2>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index} 
                className="glass-card"
                style={{ 
                  padding: '0', 
                  cursor: 'pointer',
                  overflow: 'hidden',
                  borderColor: isOpen ? 'rgba(0, 255, 65, 0.5)' : 'rgba(0, 255, 65, 0.15)',
                  boxShadow: isOpen ? '0 10px 30px rgba(0, 255, 65, 0.1)' : 'none',
                  transition: 'all 0.3s ease'
                }}
              >
                <div 
                  onClick={() => toggleAccordion(index)}
                  style={{ 
                    padding: '1.5rem 2rem', 
                    display: 'flex', 
                    justifyContent: 'space-between', 
                    alignItems: 'center',
                    backgroundColor: isOpen ? 'rgba(0, 255, 65, 0.05)' : 'transparent',
                  }}
                >
                  <h3 style={{ margin: 0, fontSize: '1.1rem', fontFamily: 'var(--font-body)', fontWeight: 600, textTransform: 'none', color: isOpen ? 'var(--neon-green)' : 'var(--pure-white)', transition: 'color 0.3s ease' }}>
                    {faq.question}
                  </h3>
                  <div style={{ 
                    transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                    transition: 'transform 0.3s ease',
                    display: 'flex', alignItems: 'center', justifyContent: 'center'
                  }}>
                    <ChevronDown color={isOpen ? 'var(--neon-green)' : 'var(--gray-medium)'} />
                  </div>
                </div>
                
                <div style={{ 
                  maxHeight: isOpen ? '500px' : '0',
                  opacity: isOpen ? 1 : 0,
                  transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                  padding: isOpen ? '0 2rem 1.5rem 2rem' : '0 2rem'
                }}>
                  <div style={{ 
                    height: '1px', 
                    width: '100%', 
                    background: 'linear-gradient(90deg, rgba(0, 255, 65, 0.2), transparent)', 
                    marginBottom: '1rem' 
                  }} />
                  <p style={{ margin: 0, color: 'var(--gray-medium)', lineHeight: 1.6 }}>
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        
      </div>
    </section>
  );
};

export default FAQ;
