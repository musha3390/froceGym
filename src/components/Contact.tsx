"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-primary font-bold tracking-wider uppercase mb-2">Get In Touch</h2>
          <h3 className="text-4xl md:text-5xl font-heading font-bold text-white uppercase">
            Contact <span className="text-primary">Us</span>
          </h3>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            className="bg-surface p-8 rounded-lg"
          >
            <h4 className="text-2xl font-heading font-bold text-white uppercase mb-6">Send a Message</h4>
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Full Name</label>
                <input
                  type="text"
                  className="w-full bg-surface-light border border-white/10 rounded px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Email Address</label>
                <input
                  type="email"
                  className="w-full bg-surface-light border border-white/10 rounded px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                <textarea
                  rows={4}
                  className="w-full bg-surface-light border border-white/10 rounded px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors resize-none"
                  placeholder="How can we help you?"
                ></textarea>
              </div>
              <button
                type="button"
                className="w-full bg-primary hover:bg-primary-hover text-white font-bold py-4 rounded uppercase tracking-wider transition-colors"
              >
                Send Message
              </button>
            </form>
          </motion.div>

          {/* Contact Info & Map */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div className="bg-surface p-8 rounded-lg">
              <h4 className="text-2xl font-heading font-bold text-white uppercase mb-6">Contact Info</h4>
              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPin className="text-primary mr-4 flex-shrink-0 mt-1" />
                  <div>
                    <h5 className="text-white font-bold mb-1">Location</h5>
                    <p className="text-gray-400">Sector 58, Mohali, Punjab</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Phone className="text-primary mr-4 flex-shrink-0 mt-1" />
                  <div>
                    <h5 className="text-white font-bold mb-1">Phone</h5>
                    <p className="text-gray-400">+91 XXXXXXXX</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Mail className="text-primary mr-4 flex-shrink-0 mt-1" />
                  <div>
                    <h5 className="text-white font-bold mb-1">Email</h5>
                    <p className="text-gray-400">example@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Clock className="text-primary mr-4 flex-shrink-0 mt-1" />
                  <div>
                    <h5 className="text-white font-bold mb-1">Working Hours</h5>
                    <p className="text-gray-400">Mon - Sat: 6:00 AM - 10:00 PM</p>
                    <p className="text-gray-400">Sun: 7:00 AM - 1:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Map Placeholder - using an iframe */}
            <div className="rounded-lg overflow-hidden h-[250px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3430.407788461582!2d76.7118231!3d30.707011!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fee8ed8ab107d%3A0xc4f4dc8f06bb354c!2sSector%2058%2C%20Sahibzada%20Ajit%20Singh%20Nagar%2C%20Punjab!5e0!3m2!1sen!2sin!4v1701332402100!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
