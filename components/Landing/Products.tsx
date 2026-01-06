"use client";

import { ArrowRight } from "lucide-react";
import FeatureCard from "../ui/featurecard";
import { FEATURES } from "@/lib/features";

export default function ProductsSection() {
  return (
    <section className="w-full bg-[#F8FAFC] py-[140px]  ">
      <div className="mx-auto max-w-[1200px] px-6">

        <div className="flex justify-center mb-6">
          <span className="rounded-full bg-white px-4 py-1 text-[13px] font-medium text-blue-600 shadow-sm">
            Products
          </span>
        </div>

        <h2 className="mx-auto mb-[110px] max-w-[520px] text-center text-[34px] font-semibold leading-[1.25] text-black">
          End-to-end solution for all your Payment needs
        </h2>

        <div className="grid grid-cols-2 gap-[96px] items-center">

          {/* Left Content */}
          <div>
            <h3 className="mb-6 text-[40px] font-semibold leading-[1.15] text-black">
              Smoothest Checkout
              <br />
              Experience for Local and
              <br />
              Global Payments
            </h3>

            <p className="mb-10 max-w-[420px] text-[16px] leading-[1.75] text-gray-600">
              Seamlessly accept payments across borders, currencies,
              and payment methods—ensuring frictionless transactions
              for your customers, anywhere in the world.
            </p>

            <button className="inline-flex items-center gap-2 rounded-full bg-[#4F6EF7] px-6 py-3 text-[14px] font-medium text-white transition hover:bg-[#3F5DE6]">
              Get Started Now
              <ArrowRight size={16} />
            </button>
          </div>

          {/* Right Media */}
          <div className="relative rounded-[20px] overflow-hidden">



            {/* Phone */}
            <div className="relative z-10 flex justify-center py-14">
              {/* Replace with video if needed */}
              <video
                src="/product1.mp4"
                autoPlay
                muted
                loop
                playsInline
                className="w-[515px] h-[400px] rounded-[32px]"
              />
            </div>

          </div>
        </div>
      </div>

      <div className="mx-auto max-w-[1200px] px-6 space-y-24">
        {FEATURES.map((feature, index) => (
          <FeatureCard key={index} {...feature} />
        ))}
      </div>
    </section>
  );
}
