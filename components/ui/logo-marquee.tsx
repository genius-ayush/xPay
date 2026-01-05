"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const logos = [
  "/logo1.avif",
  "/logo2.avif",
  "/logo3.avif",
  "/logo4.avif",
  "/logo5.avif",
  "/logo6.avif",
  "/logo7.avif",
];

export default function LogoMarquee() {
  return (
    <section className="relative w-full overflow-hidden bg-black pb-20">


      {/* Heading */}
      <p className="relative z-10 mb-12 text-center  text-white/70">
        More than 100+ companies across the world trust xPay
      </p>

      {/* Marquee */}
      <div className="relative z-10 overflow-hidden">

        {/* Fade edges */}
        <div className="pointer-events-none absolute left-0 top-0 z-20 h-full w-32 bg-gradient-to-r from-black to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 z-20 h-full w-32 bg-gradient-to-l from-black to-transparent" />

        <motion.div
          className="flex w-max items-center gap-20"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            ease: "linear",
            duration: 30,
            repeat: Infinity,
          }}
        >
          {/* First set */}
          {logos.map((src, i) => (
            <Logo key={`logo-1-${i}`} src={src} />
          ))}

          {/* Duplicate set for seamless loop */}
          {logos.map((src, i) => (
            <Logo key={`logo-2-${i}`} src={src} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function Logo({ src }: { src: string }) {
  return (
    <div className="relative h-10 w-[140px] opacity-70 grayscale transition-opacity duration-300 hover:opacity-100">
      <Image
        src={src}
        alt="Company logo"
        fill
        className="object-contain"
      />
    </div>
  );
}
