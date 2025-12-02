"use client";

import Link from "next/link";
import { Button } from "~/components/ui/button";
import { Footer } from "~/components/footer";

export default function CheckoutPage() {
  return (
    <>
      <main className="min-h-screen bg-gradient-to-b from-[#faf7f2] to-[#f5ede5] text-[#3d2817] flex items-center justify-center py-12">
      <div className="max-w-2xl mx-auto px-6 text-center">
        <div className="bg-white rounded-3xl shadow-lg p-12">
          {/* Checkmark Icon */}
          <div className="flex justify-center mb-8">
            <div className="w-24 h-24 bg-[#f5a5b8] rounded-full flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-12 h-12"
              >
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
            </div>
          </div>

          {/* Title */}
          <h1 className="text-4xl font-bold mb-4 text-[#f5a5b8]">
            Thanks for Checking Out!
          </h1>

          {/* Message */}
          <p className="text-2xl font-semibold text-[#3d2817] mb-2">
            Your plushy is on the way! 🎉
          </p>

          <p className="text-lg text-[#7d6b60] mb-8">
            We're preparing your adorable Chiikawa plushies for shipment. You'll receive a tracking number via email soon.
          </p>

          {/* Fun Message */}
          <div className="bg-[#fef0f5] rounded-2xl p-6 mb-8">
            <p className="text-[#3d2817] font-medium">
              Get ready for some cuteness! Your new friends will arrive soon. 💕
            </p>
          </div>

          {/* Button */}
          <Link href="/plushies">
            <Button className="bg-[#f5a5b8] hover:bg-[#f08aad] text-white rounded-full px-8 py-3 text-lg">
              Continue Shopping
            </Button>
          </Link>
        </div>
      </div>
    </main>
    <Footer />
    </>
  );
}
