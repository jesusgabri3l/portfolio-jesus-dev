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
const SECTION_IDS = ["hero", "about", "services", "career", "education", "projects", "contact"];
const MOBILE_QUERY = "(min-width: 768px)";

export function HorizontalScroller() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [viewportWidth, setViewportWidth] = useState(0);
  const [viewportHeight, setViewportHeight] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    const update = () => {
      setViewportWidth(window.innerWidth);
      setViewportHeight(window.innerHeight);
    };
    update();
    window.addEventListener("resize", update);

    const mql = window.matchMedia(MOBILE_QUERY);
    const updateMode = () => setIsDesktop(mql.matches);
    updateMode();
    mql.addEventListener("change", updateMode);

    return () => {
      window.removeEventListener("resize", update);
      mql.removeEventListener("change", updateMode);
    };
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const travel = viewportWidth * (SECTION_COUNT - 1);
  const x = useTransform(scrollYProgress, [0, 1], [0, -travel]);

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    if (!isDesktop) return;
    const next = Math.min(SECTION_COUNT - 1, Math.max(0, Math.round(v * (SECTION_COUNT - 1))));
    setActiveIndex((prev) => (prev === next ? prev : next));
  });

  useEffect(() => {
    if (isDesktop) return;
    const sections = SECTION_IDS.map((id) => document.getElementById(id)).filter(
      (el): el is HTMLElement => el !== null,
    );
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (!visible) return;
        const index = sections.indexOf(visible.target as HTMLElement);
        if (index !== -1) setActiveIndex(index);
      },
      { threshold: [0.5] },
    );
    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [isDesktop]);

  const goTo = (index: number, behavior: ScrollBehavior = "smooth") => {
    if (!isDesktop) {
      document.getElementById(SECTION_IDS[index])?.scrollIntoView({ behavior });
      return;
    }
    const container = containerRef.current;
    if (!container) return;
    const containerTop = container.getBoundingClientRect().top + window.scrollY;
    window.scrollTo({ top: containerTop + index * viewportWidth, behavior });
  };

  const stageRef = useRef<HTMLDivElement>(null);

  // Si el foco entra a una sección fuera de pantalla (Tab), la traemos a la vista y evitamos que el navegador desplace el contenedor.
  const handleFocusCapture = (event: React.FocusEvent<HTMLDivElement>) => {
    const section = (event.target as HTMLElement).closest("section");
    const index = section ? SECTION_IDS.indexOf(section.id) : -1;
    if (index === -1) return;
    if (stageRef.current) stageRef.current.scrollLeft = 0;
    if (isDesktop && index !== activeIndex) goTo(index, "auto");
  };

  const prevModeRef = useRef(isDesktop);
  const prevWidthRef = useRef(viewportWidth);

  useEffect(() => {
    const modeChanged = prevModeRef.current !== isDesktop;
    const widthChanged = prevWidthRef.current !== viewportWidth;
    prevModeRef.current = isDesktop;
    prevWidthRef.current = viewportWidth;
    if (!modeChanged && !widthChanged) return;
    if (!isDesktop && !modeChanged) return;
    const id = requestAnimationFrame(() => goTo(activeIndex, "auto"));
    return () => cancelAnimationFrame(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isDesktop, viewportWidth]);

  return (
    <>
      <Header activeIndex={activeIndex} onNavClick={goTo} />
      {isDesktop && <ProgressBar progress={scrollYProgress} />}

      <main id="main" tabIndex={-1} className="outline-none">
      <div
        ref={containerRef}
        className="md:relative"
        style={isDesktop && viewportWidth > 0 ? { height: travel + viewportHeight } : undefined}
      >
        <div
          ref={stageRef}
          onFocusCapture={handleFocusCapture}
          className="md:sticky md:top-[var(--header-h)] md:h-[calc(100vh-var(--header-h))] md:overflow-hidden"
        >
          <motion.div
            className="flex flex-col md:h-full md:w-max md:flex-row md:items-stretch"
            style={isDesktop && viewportWidth > 0 ? { x } : undefined}
          >
            <Hero />
            <About />
            <Services onContactClick={() => goTo(SECTION_IDS.indexOf("contact"))} />
            <Career />
            <Education />
            <Projects />
            <Contact />
          </motion.div>
        </div>
      </div>
      </main>
    </>
  );
}
