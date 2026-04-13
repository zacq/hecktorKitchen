import { motion } from 'motion/react';

const ingredients = [
  {
    name: "Free-range fresh chicken",
    description: "Fresh, free-range chicken, a tasty, natural protein that helps your furry friend develop strong muscles.",
    image: "https://picsum.photos/seed/chicken/400/300"
  },
  {
    name: "Fresh salmon",
    description: "Fresh salmon rich in omega-3, good fatty acids that take care of the joints and make your furball's coat soft.",
    image: "https://picsum.photos/seed/salmon/400/300"
  },
  {
    name: "Rice",
    description: "A mild and highly digestible rice that provides the energy your furry friend needs while respecting sensitive tummies.",
    image: "https://picsum.photos/seed/rice/400/300"
  }
];

export default function Ingredients() {
  return (
    <section id="our-diet" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4">Ingredients so good you could eat them</h2>
          <p className="text-lg text-brand-brown/60 max-w-2xl mx-auto">
            We select only human-grade ingredients, sourced from trusted European suppliers. No secrets in the food bowl.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {ingredients.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group"
            >
              <div className="rounded-[2.5rem] overflow-hidden mb-6 aspect-[4/3] relative">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-brand-orange/10 group-hover:bg-transparent transition-colors" />
              </div>
              <h3 className="text-2xl mb-3">{item.name}</h3>
              <p className="text-brand-brown/60 leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
