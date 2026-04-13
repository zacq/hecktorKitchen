import { motion } from 'motion/react';
import { Utensils, AlertCircle, Scale, Battery, Sparkles, Hand, Bone, HelpCircle } from 'lucide-react';

const painPoints = [
  {
    icon: Utensils,
    title: "He eats without enthusiasm",
    description: "Is your pet refusing to eat or eating out of obligation? He deserves better than a boring meal.",
    color: "bg-red-100 text-red-500"
  },
  {
    icon: AlertCircle,
    title: "Indigestion",
    description: "Sensitive digestion, bloating or loose stools? Her tummy needs a gentler diet.",
    color: "bg-orange-100 text-orange-500"
  },
  {
    icon: Scale,
    title: "Weight difficult to stabilize",
    description: "Too thin or a few extra kilos? Standard portions are not suitable for all companions.",
    color: "bg-yellow-100 text-yellow-500"
  },
  {
    icon: Battery,
    title: "Lack of energy",
    description: "Does he seem tired or less playful than before? Good nutrition can restore his vitality.",
    color: "bg-green-100 text-green-500"
  },
  {
    icon: Sparkles,
    title: "Dull coat",
    description: "Has its coat lost its shine? The right nutrients can restore its beautiful natural luster.",
    color: "bg-purple-100 text-purple-500"
  },
  {
    icon: Hand,
    title: "Itching or sensitivity",
    description: "Does he scratch himself often or have food reactions? Some ingredients may not be suitable.",
    color: "bg-pink-100 text-pink-500"
  },
  {
    icon: Bone,
    title: "Stiff joints",
    description: "Does he have more difficulty getting up or running? His joints need appropriate support.",
    color: "bg-blue-100 text-blue-500"
  },
  {
    icon: HelpCircle,
    title: "Ingredients unclear",
    description: "You don't understand what's in his food bowl? He deserves transparent and high-quality food.",
    color: "bg-cyan-100 text-cyan-500"
  }
];

export default function PainPoints() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4">Does that ring a bell?</h2>
          <p className="text-lg text-brand-brown/60 max-w-2xl mx-auto">
            Every companion is unique, but sometimes the challenges are similar. Do you recognize your companion in these situations?
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {painPoints.map((point, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 rounded-3xl bg-brand-cream border border-brand-brown/5 hover:shadow-lg transition-shadow group text-center"
            >
              <div className={`w-14 h-14 ${point.color} rounded-full flex items-center justify-content mx-auto mb-6 group-hover:scale-110 transition-transform`}>
                <point.icon className="w-7 h-7 mx-auto" />
              </div>
              <h3 className="text-xl mb-3">{point.title}</h3>
              <p className="text-sm text-brand-brown/60 leading-relaxed">
                {point.description}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 bg-brand-orange text-white p-12 rounded-[3rem] text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
          <h3 className="text-3xl md:text-4xl mb-4 relative z-10">Your partner is counting on you to make the right choices</h3>
          <p className="text-xl opacity-90 relative z-10">He can't tell you what he needs, but his health speaks for itself.</p>
        </div>
      </div>
    </section>
  );
}
