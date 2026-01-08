import { Badge } from "@/components/ui/badge";
import { InfiniteTestimonials } from "../ui/InfiniteTestimonials";

export default function TestimonialsSection() {
  return (
    <section className="relative w-full py-28 overflow-hidden">
      {/* Radial glow background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-sky-200/40 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4">
        {/* Header */}
        <div className="mb-16 text-center">
          <Badge className="mb-4 rounded-full px-4 py-1 text-xs font-medium">
            Testimonials
          </Badge>
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            What our customers are saying about us?
          </h2>
        </div>

        {/* Scroller */}
        <InfiniteTestimonials />
      </div>
    </section>
  );
}