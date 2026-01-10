"use client";

import * as Tabs from "@radix-ui/react-tabs";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { cn } from "@/lib/utils";

const INDUSTRIES = [
  {
    key: "edtech",
    label: "Edtech",
    title: "Flexible Payments, making Education Accessible",
    desc: `Enable your customers to learn without financial barriers.
With BNPL options like Klarna and Affirm, students can
pay in installments while you receive the full amount upfront.`,
    image: "/i1.avif",
  },
  {
    key: "saas",
    label: "SaaS",
    title: "The Ultimate Subscriptions Solution for SaaS",
    desc: `Empower your SaaS business with seamless, easy-to-integrate
subscription systems. Customize intervals from daily to yearly
and enjoy unlimited subscription amounts.`,
    image: "/i2.avif",
  },
  {
    key: "travel",
    label: "Travel",
    title: "Payments for High-Value Travel Bookings",
    desc: `Travel bookings often involve large transactions, and with
xPay, there are no limits on payment amounts. Many of
our travel customers prefer the ability to split payments.`,
    image: "/i3.avif",
  },
  {
    key: "consumer",
    label: "Consumer",
    title: "Consumer Apps with Local Payment Methods",
    desc: `Reach your customers worldwide by offering the local payment
methods they trust. We provide access to over 40 local payment
options globally, including wallets, debits & BNPL.`,
    image: "/i4.avif",
  },
  {
    key: "digital",
    label: "Digital",
    title: "Custom Payment Solutions for Every Business",
    desc: `Whatever your business, xPay offers tailored payment solutions
to help you grow. With global payment methods and easy
integration, streamline transactions in any industry.`,
    image: "/i5.avif",
  },
];

export default function IndustriesSection() {
  return (
    <section className="relative w-full bg-[#F7FAFD] py-32">
      {/* subtle background glow */}
      <div className="absolute left-0 top-0 h-full w-[35%] bg-[radial-gradient(circle_at_left,#E6F6F9_0%,transparent_70%)]" />

      <div className="relative mx-auto max-w-6xl px-6 text-center">
        {/* Pill */}
        <span className="inline-flex rounded-full bg-white px-5 py-2 text-sm font-medium text-blue-600 shadow-sm">
          Industries
        </span>

        {/* Heading */}
        <h2 className="mt-6 text-4xl font-semibold text-gray-900">
          Enabling all industries to go global
        </h2>

        {/* Tabs */}
        <Tabs.Root defaultValue="edtech" className="mt-10">
          <Tabs.List className="flex justify-center gap-8 text-[15px] text-gray-500">
            {INDUSTRIES.map((tab) => (
              <Tabs.Trigger
                key={tab.key}
                value={tab.key}
                className={cn(
                  "relative pb-2 transition-colors",
                  "data-[state=active]:text-gray-900",
                  "after:absolute after:-bottom-0.5 after:left-0 after:h-[2px] after:w-full after:scale-x-0 after:bg-blue-600 after:transition-transform",
                  "data-[state=active]:after:scale-x-100"
                )}
              >
                {tab.label}
              </Tabs.Trigger>
            ))}
          </Tabs.List>

          {/* Cards */}
          <div className="mt-14">
            {INDUSTRIES.map((item) => (
              <Tabs.Content key={item.key} value={item.key}>
                <div className="relative overflow-hidden rounded-2xl shadow-xl">
                  {/* background image */}
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={1200}
                    height={600}
                    className="h-[420px] w-full object-cover"
                    priority
                  />

                  {/* content card */}
                  <div className="absolute left-10 top-1/2 w-[520px] -translate-y-1/2 rounded-2xl bg-white p-10 shadow-lg">
                    <h3 className="text-2xl font-semibold text-gray-900">
                      {item.title}
                    </h3>

                    <p className="mt-4 whitespace-pre-line text-[15px] leading-relaxed text-gray-600">
                      {item.desc}
                    </p>

                    <Button
                      size="lg"
                      className="mt-8 rounded-full bg-blue-600 px-6 hover:bg-blue-700"
                    >
                      Get In Touch →
                    </Button>
                  </div>
                </div>
              </Tabs.Content>
            ))}
          </div>
        </Tabs.Root>
      </div>
    </section>
  );
}
