"use client";

import { motion } from "framer-motion";
import { Dumbbell, HeartPulse, User, Users } from "lucide-react";

const services = [
  {
    icon: <Dumbbell size={40} />,
    title: "Weight Training",
    description: "Build muscle, increase strength, and transform your physique with our extensive free weights and machines.",
  },
  {
    icon: <HeartPulse size={40} />,
    title: "Cardio Training",
    description: "Burn calories and improve heart health with top-tier treadmills, ellipticals, and stationary bikes.",
  },
  {
    icon: <User size={40} />,
    title: "Personal Training",
    description: "Get customized workout plans and 1-on-1 coaching from our certified fitness professionals.",
  },
  {
    icon: <Users size={40} />,
    title: "Group Classes",
    description: "Join our high-energy Zumba, Yoga, and HIIT classes to stay motivated with a supportive community.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-primary font-bold tracking-wider uppercase mb-2">Our Programs</h2>
          <h3 className="text-4xl md:text-5xl font-heading font-bold text-white uppercase">
            What We <span className="text-primary">Offer</span>
          </h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-surface border border-white/10 rounded-lg p-8 group hover:border-primary transition-colors duration-300"
            >
              <div className="w-20 h-20 rounded-full bg-black/50 flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                {service.icon}
              </div>
              <h4 className="text-2xl font-heading font-bold text-white mb-4 uppercase">{service.title}</h4>
              <p className="text-gray-400 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
