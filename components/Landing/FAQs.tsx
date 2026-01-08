"use client";

import { faqs } from "@/lib/faqs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/accordion";
import { Badge } from "../ui/badge";

export default function FAQSection() {
  return (
    <section className="relative w-full py-24">
      {/* Background soft glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-blue-100/40 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-4xl px-4">
        {/* Header */}
        <div className="mb-10 text-center">
          <Badge
            variant="secondary"
            className="mb-4 rounded-full px-4 py-1 text-xs font-medium"
          >
            FAQs
          </Badge>

          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            What our customers are saying about us?
          </h2>
        </div>

        {/* Accordion */}
        <Accordion type="single" collapsible className="rounded-2xl border bg-white">
          {faqs.map((item, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border-b last:border-b-0"
            >
              <AccordionTrigger
                className="
                  px-6 py-5 text-left text-sm font-medium
                  hover:no-underline
                  data-[state=open]:text-blue-600
                "
              >
                {item.q}
              </AccordionTrigger>

              <AccordionContent className="px-6 pb-5 pt-0 text-sm text-muted-foreground">
                {item.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
