"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Loader2, CheckCircle, XCircle } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));

    if (errors[e.target.name as keyof typeof errors]) {
      setErrors((prev) => ({ ...prev, [e.target.name]: "" }));
    }
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = { name: "", email: "", message: "" };

    const nameRegex = /^[A-Za-z\s]+$/;
    if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters.";
      isValid = false;
    } else if (!nameRegex.test(formData.name)) {
      newErrors.name = "Name can only contain letters and spaces.";
      isValid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
      isValid = false;
    }

    if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters.";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setStatus("loading");
    setErrorMessage("");

    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });


      console.log(res);
      const data = await res.json();

      if (data.success) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
        setErrorMessage(data.error || "Something went wrong. Please try again.");
      }
    } catch (error) {
      setStatus("error");
      setErrorMessage("Failed to send message. Please try again later.");
      alert(error)
    }
  };

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
            className="bg-surface p-8 rounded-lg relative"
          >
            <h4 className="text-2xl font-heading font-bold text-white uppercase mb-6">Send a Message</h4>
            
            {status === "success" && (
              <div className="mb-6 p-4 bg-green-500/10 border border-green-500/50 rounded flex items-center text-green-500">
                <CheckCircle className="mr-3" size={20} />
                Message sent successfully! We will get back to you soon.
              </div>
            )}

            {status === "error" && (
              <div className="mb-6 p-4 bg-red-500/10 border border-red-500/50 rounded flex items-center text-red-500">
                <XCircle className="mr-3 shrink-0" size={20} />
                {errorMessage}
              </div>
            )}

            <form className="space-y-6" onSubmit={handleSubmit} noValidate>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full bg-surface-light border ${errors.name ? 'border-red-500 focus:border-red-500' : 'border-white/10 focus:border-primary'} rounded px-4 py-3 text-white focus:outline-none transition-colors`}
                  placeholder="John Doe"
                />
                {errors.name && <p className="text-red-500 text-sm mt-1.5">{errors.name}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full bg-surface-light border ${errors.email ? 'border-red-500 focus:border-red-500' : 'border-white/10 focus:border-primary'} rounded px-4 py-3 text-white focus:outline-none transition-colors`}
                  placeholder="john@example.com"
                />
                {errors.email && <p className="text-red-500 text-sm mt-1.5">{errors.email}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                <textarea
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className={`w-full bg-surface-light border ${errors.message ? 'border-red-500 focus:border-red-500' : 'border-white/10 focus:border-primary'} rounded px-4 py-3 text-white focus:outline-none transition-colors resize-none`}
                  placeholder="How can we help you?"
                ></textarea>
                {errors.message && <p className="text-red-500 text-sm mt-1.5">{errors.message}</p>}
              </div>
              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full bg-primary hover:bg-primary-hover disabled:bg-primary/50 text-white font-bold py-4 rounded uppercase tracking-wider transition-colors flex items-center justify-center"
              >
                {status === "loading" ? (
                  <>
                    <Loader2 className="animate-spin mr-2" size={20} />
                    Sending...
                  </>
                ) : (
                  "Send Message"
                )}
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
                  <MapPin className="text-primary mr-4 shrink-0 mt-1" />
                  <div>
                    <h5 className="text-white font-bold mb-1">Location</h5>
                    <p className="text-gray-400">Sector 58, Mohali, Punjab</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Phone className="text-primary mr-4 shrink-0 mt-1" />
                  <div>
                    <h5 className="text-white font-bold mb-1">Phone</h5>
                    <p className="text-gray-400">+91 XXXXXXXX</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Mail className="text-primary mr-4 shrink-0 mt-1" />
                  <div>
                    <h5 className="text-white font-bold mb-1">Email</h5>
                    <p className="text-gray-400">example@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Clock className="text-primary mr-4 shrink-0 mt-1" />
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
