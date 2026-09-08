"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValueEvent, useScroll, useTransform } from "framer-motion";
import { Header } from "@/components/Header";
import { ProgressBar } from "@/components/ProgressBar";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Services } from "@/components/sections/Services";
import { Career } from "@/components/sections/Career";
import { Education } from "@/components/sections/Education";
import { Projects } from "@/components/sections/Projects";
import { Contact } from "@/components/sections/Contact";

const SECTION_COUNT = 7;

export function HorizontalScroller() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [viewportWidth, setViewportWidth] = useState(0);
  const [viewportHeight, setViewportHeight] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const update = () => {
      setViewportWidth(window.innerWidth);
      setViewportHeight(window.innerHeight);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const travel = viewportWidth * (SECTION_COUNT - 1);
  const x = useTransform(scrollYProgress, [0, 1], [0, -travel]);

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    const next = Math.min(SECTION_COUNT - 1, Math.max(0, Math.round(v * (SECTION_COUNT - 1))));
    setActiveIndex((prev) => (prev === next ? prev : next));
  });

  const goTo = (index: number) => {
    const container = containerRef.current;
    if (!container) return;
    const containerTop = container.getBoundingClientRect().top + window.scrollY;
    window.scrollTo({ top: containerTop + index * viewportWidth, behavior: "smooth" });
  };

  return (
    <>
      <Header activeIndex={activeIndex} onNavClick={goTo} />
      <ProgressBar progress={scrollYProgress} />

      <div
        ref={containerRef}
        className="relative"
        style={{ height: travel + viewportHeight }}
      >
        <div className="sticky top-0 h-screen overflow-hidden">
          <motion.div className="flex h-full w-max items-stretch" style={{ x }}>
            <Hero />
            <About />
            <Services />
            <Career />
            <Education />
            <Projects />
            <Contact />
          </motion.div>
        </div>
      </div>
    </>
  );
}
