import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Dog, Cat, ArrowRight, ArrowLeft, CheckCircle2 } from 'lucide-react';

type PetType = 'dog' | 'cat';

export default function Quiz() {
  const [step, setStep] = useState(1);
  const [petType, setPetType] = useState<PetType | null>(null);
  const [petName, setPetName] = useState('');
  const [breed, setBreed] = useState('');
  const [weight, setWeight] = useState(15);

  const nextStep = () => setStep(s => s + 1);
  const prevStep = () => setStep(s => s - 1);

  return (
    <section id="quiz" className="py-24 bg-brand-soft-orange/30">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full text-sm font-bold text-brand-orange shadow-sm mb-4 border border-brand-orange/10">
            <span className="flex h-2 w-2 rounded-full bg-brand-orange animate-pulse" />
            Personalized for your companion
          </div>
          <h2 className="text-4xl md:text-5xl mb-4">Create the perfect nutrition plan in 2 minutes</h2>
          <p className="text-lg text-brand-brown/60">Tell us about your pet and we will design a nutritional plan tailored to its unique needs.</p>
        </div>

        <div className="max-w-4xl mx-auto bg-white rounded-[3rem] shadow-2xl shadow-brand-brown/5 overflow-hidden grid lg:grid-cols-2">
          <div className="p-12">
            <AnimatePresence mode="wait">
              {step === 1 && (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-8"
                >
                  <div>
                    <label className="text-sm font-bold uppercase tracking-wider text-brand-brown/40 block mb-4">My pet is a...</label>
                    <div className="grid grid-cols-2 gap-4">
                      <button
                        onClick={() => setPetType('dog')}
                        className={`p-8 rounded-3xl border-2 transition-all flex flex-col items-center gap-4 ${
                          petType === 'dog' ? 'border-brand-orange bg-brand-soft-orange/50' : 'border-brand-brown/5 hover:border-brand-orange/30'
                        }`}
                      >
                        <Dog className={`w-12 h-12 ${petType === 'dog' ? 'text-brand-orange' : 'text-brand-brown/40'}`} />
                        <span className="font-bold text-lg">Dog</span>
                      </button>
                      <button
                        onClick={() => setPetType('cat')}
                        className={`p-8 rounded-3xl border-2 transition-all flex flex-col items-center gap-4 ${
                          petType === 'cat' ? 'border-brand-orange bg-brand-soft-orange/50' : 'border-brand-brown/5 hover:border-brand-orange/30'
                        }`}
                      >
                        <Cat className={`w-12 h-12 ${petType === 'cat' ? 'text-brand-orange' : 'text-brand-brown/40'}`} />
                        <span className="font-bold text-lg">Cat</span>
                      </button>
                    </div>
                  </div>

                  <button
                    disabled={!petType}
                    onClick={nextStep}
                    className="btn-primary w-full justify-center disabled:opacity-50 disabled:scale-100"
                  >
                    Continue <ArrowRight className="w-5 h-5" />
                  </button>
                </motion.div>
              )}

              {step === 2 && (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-8"
                >
                  <button onClick={prevStep} className="text-brand-brown/40 hover:text-brand-brown flex items-center gap-2 text-sm font-bold">
                    <ArrowLeft className="w-4 h-4" /> Back
                  </button>
                  
                  <div className="space-y-6">
                    <div>
                      <label className="text-sm font-bold uppercase tracking-wider text-brand-brown/40 block mb-2">His name is</label>
                      <input
                        type="text"
                        value={petName}
                        onChange={(e) => setPetName(e.target.value)}
                        placeholder="e.g., Max"
                        className="w-full p-4 rounded-2xl border border-brand-brown/10 focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 outline-none transition-all text-lg"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-bold uppercase tracking-wider text-brand-brown/40 block mb-2">Breed</label>
                      <select
                        value={breed}
                        onChange={(e) => setBreed(e.target.value)}
                        className="w-full p-4 rounded-2xl border border-brand-brown/10 focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 outline-none transition-all text-lg appearance-none bg-white"
                      >
                        <option value="">Select breed</option>
                        <option value="golden">Golden Retriever</option>
                        <option value="labrador">Labrador</option>
                        <option value="bulldog">French Bulldog</option>
                        <option value="other">Other / Mixed</option>
                      </select>
                    </div>
                    <div>
                      <div className="flex justify-between mb-2">
                        <label className="text-sm font-bold uppercase tracking-wider text-brand-brown/40">Weight</label>
                        <span className="text-brand-orange font-bold">{weight} kg</span>
                      </div>
                      <input
                        type="range"
                        min="1"
                        max="80"
                        value={weight}
                        onChange={(e) => setWeight(parseInt(e.target.value))}
                        className="w-full accent-brand-orange h-2 bg-brand-brown/5 rounded-lg appearance-none cursor-pointer"
                      />
                    </div>
                  </div>

                  <button
                    disabled={!petName || !breed}
                    onClick={nextStep}
                    className="btn-primary w-full justify-center disabled:opacity-50 disabled:scale-100"
                  >
                    Calculate plan <ArrowRight className="w-5 h-5" />
                  </button>
                </motion.div>
              )}

              {step === 3 && (
                <motion.div
                  key="step3"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="space-y-6"
                >
                  <div className="bg-brand-soft-orange/50 p-8 rounded-3xl border border-brand-orange/10">
                    <div className="text-sm font-bold text-brand-orange uppercase tracking-widest mb-2">Average monthly price</div>
                    <div className="flex items-baseline gap-2 mb-1">
                      <span className="text-5xl font-display font-bold">€36.60</span>
                      <span className="text-brand-brown/40 font-medium">/month</span>
                    </div>
                    <div className="text-brand-orange font-bold text-lg">€1.22/day</div>
                    <p className="text-xs text-brand-brown/40 mt-4 leading-relaxed">
                      Average 12 months, delivery included, excluding promotions. Calculated for a {weight}kg {petType}.
                    </p>
                  </div>

                  <div className="space-y-3">
                    {[
                      "Free delivery included",
                      "Cancel whenever you want, no commitment",
                      "Recipes approved by veterinarians",
                      "Delivered fresh to your door"
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-3 text-sm font-medium">
                        <CheckCircle2 className="w-5 h-5 text-green-500" />
                        {item}
                      </div>
                    ))}
                  </div>

                  <button className="btn-primary w-full justify-center !py-6 !text-xl">
                    Get my personalized plan <ArrowRight className="w-6 h-6" />
                  </button>
                  
                  <p className="text-center text-xs text-brand-brown/40 flex items-center justify-center gap-2">
                    🔒 Your information is secure and will never be shared.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className="relative hidden lg:block bg-brand-soft-orange">
            <img
              src={petType === 'cat' ? "https://picsum.photos/seed/cat-food/600/800" : "https://picsum.photos/seed/dog-food/600/800"}
              alt="Pet"
              className="absolute inset-0 w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-brown/40 to-transparent" />
            <div className="absolute bottom-12 left-12 right-12 text-white">
              <div className="flex gap-4 mb-6">
                <div className="bg-white/20 backdrop-blur-md p-4 rounded-2xl border border-white/20 flex-1">
                  <div className="text-2xl font-bold">95%</div>
                  <div className="text-[10px] uppercase font-bold opacity-70">Dogs love it</div>
                </div>
                <div className="bg-white/20 backdrop-blur-md p-4 rounded-2xl border border-white/20 flex-1">
                  <div className="text-2xl font-bold">4.9★</div>
                  <div className="text-[10px] uppercase font-bold opacity-70">Average rating</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
