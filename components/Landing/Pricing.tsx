"use client";

import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  "Access to global virtual bank accounts",
  "Access to in-built Payments Gateway links & subscriptions",
  "Get money directly in your INR account",
  "Access to Sales Tax Autopilot",
  "Dedicated relationship manager",
  "100+ Currencies & 160+ Countries",
  "40+ Local payment methods",
];

export default function PricingSection() {
  return (
    <section className="relative w-full overflow-hidden bg-[#F4F7FB] py-28">
      {/* subtle grid lines */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.04)_1px,transparent_1px)] bg-[size:320px_320px]" />
      </div>

      {/* floating flags */}
      <Flag className="left-[14%] top-[30%] hidden md:block" emoji="🇨🇭" />
      <Flag className="left-[18%] top-[45%] hidden md:block" emoji="🇦🇷" />
      <Flag className="left-[15%] top-[60%] hidden md:block" emoji="🇬🇧" />
      <Flag className="left-[20%] top-[75%] hidden md:block" emoji="🇧🇩" />

      <Flag className="right-[18%] top-[30%] hidden md:block" emoji="🇮🇳" />
      <Flag className="right-[14%] top-[45%] hidden md:block" emoji="🇨🇦" />
      <Flag className="right-[18%] top-[60%] hidden md:block" emoji="🇺🇸" />

      <div className="relative z-10 mx-auto max-w-5xl px-4 text-center">
        {/* pill */}
        <span className="inline-flex items-center rounded-full bg-white px-5 py-2 text-sm font-medium text-blue-600 shadow-sm">
          Pricing
        </span>

        {/* heading */}
        <h2 className="mt-6 text-4xl font-semibold tracking-tight text-gray-900">
          Flexible Plans for Every Business
        </h2>

        {/* card */}
        <div className="mx-auto mt-12 max-w-xl rounded-2xl bg-white px-10 py-10 shadow-lg">
          <ul className="space-y-4 text-left">
            {features.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-green-500">
                  <Check className="h-4 w-4 text-white" strokeWidth={3} />
                </span>
                <p className="text-[15px] leading-relaxed text-gray-700">
                  {item}
                </p>
              </li>
            ))}
          </ul>

          <Button
            size="lg"
            className="mt-10 w-full rounded-full bg-blue-600 py-6 text-base font-medium hover:bg-blue-700"
          >
            Get in Touch →
          </Button>
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------- */

function Flag({
  emoji,
  className,
}: {
  emoji: string;
  className: string;
}) {
  return (
    <span
      className={`pointer-events-none absolute text-4xl drop-shadow-sm ${className}`}
    >
      {emoji}
    </span>
  );
}
