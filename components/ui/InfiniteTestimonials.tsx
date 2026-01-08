import { testimonials } from "@/lib/testimonials";
import { TestimonialCard } from "./TestimonialCard";

export function InfiniteTestimonials() {
  const items = [...testimonials, ...testimonials]; // seamless loop

  return (
    <div className="relative overflow-hidden">
      <div
        className="
          flex w-max gap-6
          animate-[marquee_40s_linear_infinite]
        "
      >
        {items.map((t, i) => (
          <TestimonialCard key={i} {...t} />
        ))}
      </div>
    </div>
  );
}