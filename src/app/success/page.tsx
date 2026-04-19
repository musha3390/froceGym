import Link from "next/link";
import { CheckCircle } from "lucide-react";

export default function SuccessPage() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4">
      <div className="bg-surface p-8 rounded-lg border border-primary/20 text-center max-w-md w-full">
        <CheckCircle className="w-20 h-20 text-green-500 mx-auto mb-6" />
        <h1 className="text-3xl font-heading font-bold text-white mb-4">Payment Successful!</h1>
        <p className="text-gray-400 mb-8">
          Thank you for your purchase. Your gym membership is now active. We're excited to have you!
        </p>
        <Link 
          href="/"
          className="inline-block bg-primary hover:bg-primary-hover text-white font-bold uppercase tracking-wider py-3 px-8 rounded transition-colors"
        >
          Return to Home
        </Link>
      </div>
    </div>
  );
}
