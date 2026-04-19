"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check, Loader2 } from "lucide-react";
import Script from "next/script";
import { useRouter } from "next/navigation";

const plans = [
  {
    id: "monthly",
    name: "Monthly",
    price: "1000",
    duration: "Per Month",
    features: ["Access to all gym equipment", "Locker facility", "Free WiFi", "1 Group Class/week"],
    isPopular: false,
  },
  {
    id: "quarterly",
    name: "Quarterly",
    price: "2500",
    duration: "For 3 Months",
    features: ["Access to all gym equipment", "Locker facility", "Free Diet Plan", "Unlimited Group Classes", "1 PT Session/month"],
    isPopular: true,
  },
  {
    id: "yearly",
    name: "Yearly",
    price: "8000",
    duration: "Per Year",
    features: ["Access to all gym equipment", "Dedicated Locker", "Custom Diet & Workout Plan", "Unlimited Group Classes", "Free Merchandise"],
    isPopular: false,
  },
];

export default function Pricing() {
  const [loadingPlan, setLoadingPlan] = useState<string | null>(null);
  const router = useRouter();

  const handlePayment = async (planId: string) => {
    setLoadingPlan(planId);
    try {
      // 1. Call backend API to create an order
      const res = await fetch("/api/create-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ plan: planId }),
      });
      const data = await res.json();

      if (!data.success) {
        throw new Error(data.error || "Failed to create order");
      }

      // 2. Initialize Razorpay Checkout
      const options = {
        key: data.keyId,
        amount: data.order.amount,
        currency: data.order.currency,
        name: "Force Gym",
        description: `Payment for ${planId} plan`,
        order_id: data.order.id,
        method: {
          upi: true,
          card: true,
          netbanking: true,
          wallet: true,
        },
        handler: async function (response: any) {
          // 3. Verify payment signature on the backend
          const verifyRes = await fetch("/api/verify-payment", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              razorpay_order_id: response.razorpay_order_id,
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_signature: response.razorpay_signature,
            }),
          });
          const verifyData = await verifyRes.json();
          
          if (verifyData.success) {
            // 4. Redirect to success page
            router.push("/success");
          } else {
            alert("Payment verification failed. Please contact support.");
          }
        },
        prefill: {
          name: "",
          email: "",
          contact: "",
        },
        theme: {
          color: "#e50914", // Force Gym primary brand color matching
        },
      };

      const rzp = new (window as any).Razorpay(options);
      rzp.on("payment.failed", function (response: any) {
        alert(response.error.description);
      });
      rzp.open();
    } catch (error) {
      console.error(error);
      alert("Something went wrong while initiating payment. Please try again.");
    } finally {
      setLoadingPlan(null);
    }
  };

  return (
    <>
      <Script src="https://checkout.razorpay.com/v1/checkout.js" strategy="lazyOnload" />
      <section id="pricing" className="py-24 bg-surface-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-primary font-bold tracking-wider uppercase mb-2">Membership Plans</h2>
            <h3 className="text-4xl md:text-5xl font-heading font-bold text-white uppercase">
              Choose Your <span className="text-primary">Plan</span>
            </h3>
          </div>

          <div className="grid md:grid-cols-3 gap-8 items-stretch">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`bg-surface flex flex-col rounded-lg p-8 relative border transition-all duration-300 ${
                  plan.isPopular 
                    ? "border-primary shadow-[0_0_30px_rgba(229,9,20,0.3)] transform md:-translate-y-4 hover:shadow-[0_0_40px_rgba(229,9,20,0.4)]" 
                    : "border-white/10 hover:border-white/30 hover:transform hover:-translate-y-2"
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

                <ul className="space-y-4 mb-8 flex-grow">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start text-gray-300">
                      <Check className="text-primary mr-3 shrink-0 mt-0.5" size={20} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => handlePayment(plan.id)}
                  disabled={loadingPlan === plan.id}
                  className={`w-full py-4 rounded font-bold uppercase tracking-wider transition-colors flex items-center justify-center mt-auto ${
                    plan.isPopular
                      ? "bg-primary hover:bg-red-700 text-white disabled:bg-primary/50 disabled:cursor-not-allowed"
                      : "bg-white/10 hover:bg-white/20 text-white disabled:bg-white/5 disabled:cursor-not-allowed"
                  }`}
                >
                  {loadingPlan === plan.id ? (
                    <>
                      <Loader2 className="animate-spin mr-2" size={20} />
                      Processing...
                    </>
                  ) : (
                    "Buy Now"
                  )}
                </button>
              </motion.div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}
