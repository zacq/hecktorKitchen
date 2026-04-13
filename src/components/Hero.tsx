import { motion } from 'motion/react';
import { ArrowRight, Gift } from 'lucide-react';
import { useState, useEffect } from 'react';

function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 46,
    seconds: 11
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        if (prev.hours > 0) return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex gap-2 mt-4">
      {[
        { label: 'HOURS', value: timeLeft.hours },
        { label: 'MIN', value: timeLeft.minutes },
        { label: 'SEC', value: timeLeft.seconds }
      ].map((item, i) => (
        <div key={i} className="bg-white rounded-xl p-2 px-3 shadow-sm border border-brand-brown/5 text-center min-w-[60px]">
          <div className="text-xl font-bold text-brand-orange leading-none">{String(item.value).padStart(2, '0')}</div>
          <div className="text-[10px] font-bold text-brand-brown/40 mt-1">{item.label}</div>
        </div>
      ))}
    </div>
  );
}

export default function Hero() {
  return (
    <section className="pt-32 pb-20 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl leading-[1.1] mb-6">
            When mealtime becomes his <span className="text-brand-orange italic font-serif font-normal">favorite moment</span>
          </h1>
          <p className="text-xl text-brand-brown/70 mb-10 max-w-lg leading-relaxed">
            Personalized, healthy and ultra-gourmet meals, tailored to your pet's real needs.
          </p>
          
          <div className="space-y-6">
            <button className="btn-primary group">
              <Gift className="w-5 h-5" />
              Trial offer: 50% off your first order
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <div>
              <p className="text-xs font-bold text-brand-orange uppercase tracking-wider ml-1">Offer ends in</p>
              <CountdownTimer />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative"
        >
          <div className="absolute -inset-4 bg-brand-orange/10 rounded-[3rem] -rotate-3 blur-2xl" />
          <img 
            src="https://picsum.photos/seed/pet-food/800/800" 
            alt="Happy pet with Hector Kitchen"
            className="relative rounded-[3rem] shadow-2xl w-full object-cover aspect-square"
            referrerPolicy="no-referrer"
          />
          <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-3xl shadow-xl border border-brand-brown/5 max-w-[200px]">
            <div className="flex items-center gap-2 mb-2">
              <div className="flex -space-x-2">
                {[1,2,3].map(i => (
                  <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-brand-soft-orange overflow-hidden">
                    <img src={`https://i.pravatar.cc/100?u=${i}`} alt="User" referrerPolicy="no-referrer" />
                  </div>
                ))}
              </div>
              <span className="text-xs font-bold text-brand-brown/60">+50k</span>
            </div>
            <p className="text-sm font-medium leading-tight">Join 50,000+ happy pets across Europe</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
