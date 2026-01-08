"use client";

import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { advantages } from "@/lib/advantages";

export default function AdvantagesSection() {
  return (
    <section className="relative bg-[#f6f9fc] py-28">
      <div className="mx-auto max-w-6xl px-4">
        {/* Header */}
        <div className="mb-14 text-center">
          <Badge className="mb-4 rounded-full px-4 py-1 text-xs font-medium">
            xPay Advantages
          </Badge>
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            How do we differ?
          </h2>
        </div>

        {/* Grid */}
        <div className="grid gap-6 sm:grid-cols-2">
          {advantages.map((item, i) => (
            <div
              key={i}
              className="rounded-2xl bg-white p-6 shadow-sm"
            >
              {/* Image */}
              <div className="mb-6 flex h-[160px] items-center justify-center rounded-xl bg-muted/30">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={260}
                  height={160}
                  className="object-contain"
                />
              </div>

              {/* Text */}
              <h3 className="mb-2 text-sm font-semibold">
                {item.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <Button className="rounded-full px-6">
            Unlock these benefits →
          </Button>
        </div>
      </div>
    </section>
  );
}
