"use client";

import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "Ravi Kumar",
    role: "Software Engineer",
    text: "Force Gym completely changed my lifestyle. The trainers are extremely knowledgeable, and the equipment is top-notch. I've lost 15kg in 6 months!",
    rating: 5,
  },
  {
    name: "Priya Singh",
    role: "Fitness Enthusiast",
    text: "The best gym in Mohali! The group classes are so energetic, and the community here is incredibly supportive. Highly recommend to everyone.",
    rating: 5,
  },
  {
    name: "Aman Gupta",
    role: "Student",
    text: "Affordable pricing with premium facilities. The environment is always clean, and the staff is very polite. The custom diet plan really helped me.",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-surface-light relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-primary font-bold tracking-wider uppercase mb-2">Success Stories</h2>
          <h3 className="text-4xl md:text-5xl font-heading font-bold text-white uppercase">
            Client <span className="text-primary">Reviews</span>
          </h3>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-surface p-8 rounded-lg border border-white/5 relative"
            >
              <Quote className="absolute top-6 right-6 text-white/5" size={80} />
              
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="text-primary fill-primary" size={20} />
                ))}
              </div>
              
              <p className="text-gray-300 leading-relaxed mb-6 italic relative z-10">
                "{testimonial.text}"
              </p>
              
              <div className="border-t border-white/10 pt-4 mt-auto">
                <h4 className="text-white font-bold uppercase">{testimonial.name}</h4>
                <p className="text-sm text-gray-500">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
