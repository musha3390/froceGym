"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const highlights = [
  "Certified Expert Trainers",
  "State-of-the-art Equipment",
  "Personalized Nutrition Plans",
  "Clean & Hygienic Environment",
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative h-[500px] rounded-lg overflow-hidden"
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: "url('https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=2070&auto=format&fit=crop')",
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <div className="bg-primary/90 backdrop-blur text-white p-6 rounded border border-white/20">
                <h3 className="text-3xl font-heading font-bold mb-1">10+ Years</h3>
                <p className="text-sm font-medium">Of Fitness Excellence</p>
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-primary font-bold tracking-wider uppercase mb-2">About Force Gym</h2>
            <h3 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6 uppercase">
              More Than Just A Gym, It's A <span className="text-primary">Lifestyle</span>
            </h3>
            
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              At Force Gym, we believe that fitness is a journey, not a destination. Our mission is to empower individuals to achieve their peak physical and mental conditioning. With world-class facilities and expert guidance, we provide the ultimate environment for your transformation.
            </p>

            <ul className="space-y-4 mb-10">
              {highlights.map((item, index) => (
                <li key={index} className="flex items-center text-gray-300">
                  <CheckCircle className="text-primary mr-3 flex-shrink-0" size={24} />
                  <span className="text-lg">{item}</span>
                </li>
              ))}
            </ul>

            <a
              href="#contact"
              className="inline-block px-8 py-4 bg-white hover:bg-gray-200 text-black font-bold rounded uppercase tracking-wider transition-colors"
            >
              Contact Us Today
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
