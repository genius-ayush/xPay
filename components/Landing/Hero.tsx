"use client";

import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="relative flex h-7/8 w-full items-center justify-center overflow-hidden bg-black">

      {/* Content */}
      <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center px-6 text-center mt-48">

        {/* YC Badge */}
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs text-white/80 backdrop-blur">
          <span className="text-white/60">Backed By</span>
          <span className="rounded-sm bg-orange-500 px-1.5 py-0.5 text-[10px] font-semibold text-white">
            Y
          </span>
          <span className="font-medium">Combinator</span>
        </div>

        {/* Heading with Gradient */}
        <h1 className="text-balance text-4xl font-medium tracking-tight sm:text-5xl md:text-6xl">
          <span className="bg-gradient-to-b from-white to-white/70 bg-clip-text text-transparent">
            International Payment Gateway Built for
            <br />
            Businesses Selling Globally
          </span>
        </h1>

        {/* Subheading */}
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/60 sm:text-lg">
          Expand to 100+ countries local compliance on auto-pilot
          <br className="hidden sm:block" />
          and the biggest selection of global payment methods.
        </p>

        {/* CTA Buttons */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Button
            size="lg"
            className="rounded-full bg-blue-600 px-6 text-white hover:bg-blue-500"
          >
            Get Started Now
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>

          <Button
            size="lg"
            variant="outline"
            className="rounded-full border-white/15 bg-white/5 px-6 text-white hover:bg-white/10"
          >
            Talk to The Team
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
