"use client";

import { ContainerScroll } from "../ui/container-scroll-animation";
import LogoMarquee from "../ui/logo-marquee";

export default function Desktop() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-black">

      
     <div className="absolute inset-0 bg-[radial-gradient(ellipse_115%_70%_at_50%_42%,#0a4a3f_0%,#06353b_22%,#041b22_35%,#000000_55%)]" />



  
  

      {/* Centered Desktop Image */}
      <div className="flex flex-col overflow-hidden">
      <ContainerScroll
        titleComponent={
          <>
            
          </>
        }
      >
        <img
          src={`/desktop.svg`}
          alt="hero"
          height={520}
          width={1000}
          className="mx-auto rounded-2xl object-cover h-full object-left-top"
          draggable={false}
        />
      </ContainerScroll>

    </div>
      <LogoMarquee/>
    </section>
  );
}
