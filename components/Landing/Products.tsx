"use client";

import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import FeatureCard from "../ui/featurecard";
import { FEATURES } from "@/lib/features";
import { fadeUp, stagger } from "@/lib/motion";

export default function ProductsSection() {
  return (
    <section className="w-full bg-[#F8FAFC] py-16 lg:py-[140px]">
      <div className="mx-auto max-w-[1200px] px-6">

        {/* Badge */}
        <motion.div
        //@ts-ignore
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="flex justify-center mb-6"
        >
          <span className="rounded-full bg-white px-4 py-1 text-[13px] font-medium text-blue-600 shadow-sm">
            Products
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h2
        //@ts-ignore
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="mx-auto mb-12 lg:mb-[110px] max-w-[520px] text-center text-2xl sm:text-[34px] font-semibold leading-[1.25] text-black"
        >
          End-to-end solution for all your Payment needs
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-[96px] items-center">

          {/* Left Content */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            className="text-center lg:text-left"
          >
            
            <motion.h3  className="mb-6 text-3xl lg:text-[40px] font-semibold leading-[1.15]">
              Smoothest Checkout
              <br />
              Experience for Local and
              <br />
              Global Payments
            </motion.h3>
            
            <motion.p  className="mb-10 max-w-[420px] mx-auto lg:mx-0 text-[16px] leading-[1.75] text-gray-600">
              Seamlessly accept payments across borders, currencies,
              and payment methods—ensuring frictionless transactions
              for your customers, anywhere in the world.
            </motion.p>

            <motion.button
            //@ts-ignore
              variants={fadeUp}
              className="inline-flex items-center gap-2 rounded-full bg-[#4F6EF7] px-6 py-3 text-[14px] font-medium text-white hover:bg-[#3F5DE6]"
            >
              Get Started Now
              <ArrowRight size={16} />
            </motion.button>
          </motion.div>

          {/* Right Media */}
          <motion.div
          //@ts-ignore
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            className="relative rounded-[20px] overflow-hidden w-full"
          >
            <div className="flex justify-center py-8 lg:py-14">
              <video
                src="/product1.mp4"
                autoPlay
                muted
                loop
                playsInline
                className="w-full max-w-[515px] h-auto lg:h-[400px] rounded-[32px] object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Feature Cards – Vertical Scroll Reveal */}
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="mx-auto max-w-[1200px] px-6 space-y-24 mt-32"
      >
        {FEATURES.map((feature, index) => (
          //@ts-ignore
          <motion.div key={index} variants={fadeUp}>
            <FeatureCard {...feature} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
