import { motion } from 'motion/react';

const steps = [
  {
    number: "1",
    title: "Create your pet's profile",
    description: "We're going to ask you a few questions to get to know your companion better: their age, breed, weight, and even their little habits. Nothing is left to chance!"
  },
  {
    number: "2",
    title: "Discover his personalized recipe",
    description: "With this information, we're preparing the perfect recipe for her everyday needs. Enough to fuel all her great adventures... and her little mischief."
  },
  {
    number: "3",
    title: "Receive his meals at home",
    description: "Each month, their recipe is delivered directly to your door. Simple, flexible and commitment-free: all you have to do is fill their bowl."
  }
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-brand-cream relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4">How Hector Kitchen works</h2>
          <p className="text-lg text-brand-brown/60 max-w-2xl mx-auto">
            Discover Bi-nutrition: the perfect combination of kibble and wet food for your dog's health and enjoyment.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="relative p-10 rounded-[3rem] bg-white border border-brand-brown/5 shadow-xl shadow-brand-brown/5 group hover:-translate-y-2 transition-transform"
            >
              <div className="w-16 h-16 bg-brand-orange text-white rounded-full flex items-center justify-center text-2xl font-bold mb-8 group-hover:scale-110 transition-transform shadow-lg shadow-brand-orange/20">
                {step.number}
              </div>
              <h3 className="text-2xl mb-4">{step.title}</h3>
              <p className="text-brand-brown/60 leading-relaxed">{step.description}</p>
              
              {i < 2 && (
                <div className="hidden lg:block absolute top-1/2 -right-6 w-12 h-[1px] bg-brand-brown/10 border-t border-dashed" />
              )}
            </motion.div>
          ))}
        </div>

        <div className="mt-20 grid md:grid-cols-2 gap-8">
          <div className="bg-white p-10 rounded-[3rem] border border-brand-brown/5 shadow-lg">
            <h3 className="text-2xl mb-6 flex items-center gap-3">
              <span className="text-3xl">🍲</span> Discover the Croquettes & Pâté duo
            </h3>
            <ul className="space-y-6">
              {[
                { title: "The excellence of Bi-nutrition", desc: "Bi-nutrition involves mixing kibble and wet food in the same meal. Considered by veterinarians as the holy grail of nutrition." },
                { title: "A customized dosage", desc: "No need to get out the calculator: we determine the correct proportion of kibble and wet food directly from your pet's nutritional profile." }
              ].map((item, i) => (
                <li key={i}>
                  <h4 className="font-bold mb-1">{item.title}</h4>
                  <p className="text-sm text-brand-brown/60">{item.desc}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white p-10 rounded-[3rem] border border-brand-brown/5 shadow-lg">
            <h3 className="text-2xl mb-6 flex items-center gap-3">
              <span className="text-3xl">🗓️</span> Total flexibility
            </h3>
            <ul className="space-y-6">
              {[
                { title: "Manage your deliveries as you see fit", desc: "Going on holiday? Too much kibble in the cupboard? Reschedule or pause your deliveries in just a few clicks." },
                { title: "Cancel at any time", desc: "At Hector Kitchen, there's no commitment: you decide what ends up in your child's bowl! You can modify, pause or cancel whenever you want." }
              ].map((item, i) => (
                <li key={i}>
                  <h4 className="font-bold mb-1">{item.title}</h4>
                  <p className="text-sm text-brand-brown/60">{item.desc}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
