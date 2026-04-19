"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Monthly",
    price: "1000",
    duration: "Per Month",
    features: ["Access to all gym equipment", "Locker facility", "Free WiFi", "1 Group Class/week"],
    isPopular: false,
  },
  {
    name: "Quarterly",
    price: "2500",
    duration: "For 3 Months",
    features: ["Access to all gym equipment", "Locker facility", "Free Diet Plan", "Unlimited Group Classes", "1 PT Session/month"],
    isPopular: true,
  },
  {
    name: "Yearly",
    price: "8000",
    duration: "Per Year",
    features: ["Access to all gym equipment", "Dedicated Locker", "Custom Diet & Workout Plan", "Unlimited Group Classes", "Free Merchandise"],
    isPopular: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-surface-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-primary font-bold tracking-wider uppercase mb-2">Membership Plans</h2>
          <h3 className="text-4xl md:text-5xl font-heading font-bold text-white uppercase">
            Choose Your <span className="text-primary">Plan</span>
          </h3>
        </div>

        <div className="grid md:grid-cols-3 gap-8 items-center">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`bg-surface rounded-lg p-8 relative border ${
                plan.isPopular ? "border-primary shadow-[0_0_30px_rgba(229,9,20,0.3)] transform md:-translate-y-4" : "border-white/10"
              }`}
            >
              {plan.isPopular && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary text-white px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wider">
                  Most Popular
                </div>
              )}

              <div className="text-center mb-8 mt-4">
                <h4 className="text-2xl font-heading font-bold text-white uppercase mb-2">{plan.name}</h4>
                <div className="flex items-end justify-center">
                  <span className="text-3xl font-bold text-gray-400 mr-1">₹</span>
                  <span className="text-5xl font-heading font-bold text-primary">{plan.price}</span>
                </div>
                <p className="text-gray-400 mt-2">{plan.duration}</p>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start text-gray-300">
                    <Check className="text-primary mr-3 flex-shrink-0 mt-0.5" size={20} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-4 rounded font-bold uppercase tracking-wider transition-colors ${
                  plan.isPopular
                    ? "bg-primary hover:bg-primary-hover text-white"
                    : "bg-white/10 hover:bg-white/20 text-white"
                }`}
              >
                Select Plan
              </button>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
