"use client";

import { motion } from "framer-motion";

const trainers = [
  {
    name: "Vikram Singh",
    specialty: "Head Coach / Bodybuilding",
    image: "https://images.unsplash.com/photo-1567013127542-490d757e51fc?q=80&w=1974&auto=format&fit=crop",
  },
  {
    name: "Aarti Sharma",
    specialty: "Yoga & Flexibility Expert",
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=2070&auto=format&fit=crop",
  },
  {
    name: "Rahul Verma",
    specialty: "Strength & Conditioning",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop",
  },
];

export default function Trainers() {
  return (
    <section id="trainers" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-primary font-bold tracking-wider uppercase mb-2">Expert Team</h2>
          <h3 className="text-4xl md:text-5xl font-heading font-bold text-white uppercase">
            Meet Our <span className="text-primary">Trainers</span>
          </h3>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {trainers.map((trainer, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-lg cursor-pointer"
            >
              <div
                className="h-[450px] bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url('${trainer.image}')` }}
              />
              <div className="absolute inset-0 bg-linear-to-t from-black via-black/40 to-transparent opacity-80" />
              
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <h4 className="text-2xl font-heading font-bold text-white uppercase mb-1">{trainer.name}</h4>
                <p className="text-primary font-medium">{trainer.specialty}</p>
                <div className="h-0 opacity-0 group-hover:h-auto group-hover:opacity-100 group-hover:mt-4 transition-all duration-300">
                  <p className="text-gray-300 text-sm">
                    Dedicated to helping you reach your fitness goals with personalized plans and motivation.
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
