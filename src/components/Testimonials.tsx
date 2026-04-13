import { motion } from 'motion/react';
import { Star } from 'lucide-react';

const reviews = [
  {
    name: "Zoe",
    pet: "Max",
    text: "A customer for years, my dog will soon be celebrating his 9th birthday in excellent health. His vet says his health is undoubtedly due to his superb diet. The quality of the kibble is impeccable from start to finish.",
    rating: 5,
    image: "https://picsum.photos/seed/pet1/400/300"
  },
  {
    name: "Cherry",
    pet: "Luna",
    text: "The best kibble that ever existed! Not to mention their unparalleled telephone service and support. I highly recommend Hector Kitchen! 5 years of loyalty.",
    rating: 5,
    image: "https://picsum.photos/seed/pet2/400/300"
  },
  {
    name: "Marc",
    pet: "Rocky",
    text: "Since switching to Hector Kitchen, Rocky's digestion has improved significantly. He's full of energy and his coat is shinier than ever. Truly a life-changer for us.",
    rating: 5,
    image: "https://picsum.photos/seed/pet3/400/300"
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4">Real dogs, real results</h2>
          <p className="text-lg text-brand-brown/60 max-w-2xl mx-auto">
            Discover how Hector Kitchen has transformed the lives of thousands of dogs. Visible results, tails wagging with happiness.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-brand-cream rounded-[3rem] overflow-hidden border border-brand-brown/5 flex flex-col"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={review.image}
                  alt={review.pet}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <div className="flex gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-brand-orange text-brand-orange" />
                  ))}
                </div>
                <p className="text-brand-brown/80 italic mb-6 flex-1 leading-relaxed">"{review.text}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-brand-soft-orange flex items-center justify-center font-bold text-brand-orange">
                    {review.name[0]}
                  </div>
                  <div>
                    <div className="font-bold">{review.name}</div>
                    <div className="text-xs text-brand-brown/40">Happy owner of {review.pet}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
