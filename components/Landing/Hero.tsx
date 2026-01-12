"use client";

import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="relative flex min-h-[65vh] w-full items-center justify-center overflow-hidden bg-black">
      
      <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center px-4 sm:px-6 lg:px-8 text-center">

        {/* YC Badge */}
        <div className="mb-6 sm:mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs text-white/80 backdrop-blur">
          <span className="text-white/60">Backed By</span>
          <span className="rounded-sm bg-orange-500 px-1.5 py-0.5 text-[10px] font-semibold text-white">
            Y
          </span>
          <span className="font-medium">Combinator</span>
        </div>

        {/* Heading */}
        <h1 className="text-balance font-medium tracking-tight
          text-3xl leading-tight
          sm:text-4xl
          md:text-5xl
          lg:text-6xl lg:leading-[1.05]"
        >
          <span className="bg-gradient-to-b from-white to-white/70 bg-clip-text text-transparent">
            International Payment Gateway Built for
            <br className="hidden sm:block" />
            Businesses Selling Globally
          </span>
        </h1>

        {/* Description */}
        <p className="mt-5 sm:mt-6 max-w-xl sm:max-w-2xl text-sm sm:text-base md:text-lg leading-relaxed text-white/60">
          Expand to 100+ countries, local compliance on auto-pilot
          <br className="hidden sm:block" />
          and the biggest selection of global payment methods.
        </p>

        {/* CTA Buttons */}
        <div className="mt-8 sm:mt-10 flex w-full flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
          
          {/* Get Started */}
          <Button
            asChild
            size="lg"
            className="w-full sm:w-auto rounded-full bg-blue-600 px-6 text-white hover:bg-blue-500"
          >
            <a
              href="https://www.xpaycheckout.com/get-in-touch"
              target="_blank"
              rel="noopener noreferrer"
            >
              Get Started Now
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>

          {/* Talk to Team */}
          <Button
            asChild
            size="lg"
            variant="outline"
            className="w-full sm:w-auto rounded-full border-white/15 bg-white/5 px-6 text-white hover:bg-white/10"
          >
            <a
              href="https://calendly.com/utkrist-xpaycheckout/chat-with-utkrist?month=2026-01"
              target="_blank"
              rel="noopener noreferrer"
            >
              Talk to The Team
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>

        </div>
      </div>
    </section>
  );
}
