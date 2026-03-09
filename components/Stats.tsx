"use client";

import { useEffect, useRef, useState } from "react";
import { Reveal } from "./Reveal";

const stats = [
  { value: 500, label: "Clientes satisfechos", prefix: "+", suffix: "" },
  { value: 5, label: "Marcas líderes", prefix: "", suffix: "+" },
  { value: 100, label: "Cobertura en Panamá", prefix: "", suffix: "%" },
  { value: 24, label: "Soporte técnico", prefix: "", suffix: "/7" },
];

function StatValue({ target, prefix, suffix, start }: { target: number; prefix: string; suffix: string; start: boolean }) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!start) return;

    const duration = 1200;
    const startTime = performance.now();

    let rafId = 0;
    const tick = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCurrent(Math.round(target * eased));

      if (progress < 1) {
        rafId = requestAnimationFrame(tick);
      }
    };

    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, [start, target]);

  return <>{`${prefix}${current}${suffix}`}</>;
}

export function Stats() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-10 sm:py-12 md:py-16 lg:py-20 border-y border-border bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-5">
        <Reveal className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 lg:gap-12 items-center justify-items-center">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className="text-center px-2 opacity-0 animate-fade-in-up hover:scale-105 transition-transform duration-300"
              style={{ animationDelay: `${i * 0.12}s` }}
            >
              <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary">
                <StatValue target={stat.value} prefix={stat.prefix} suffix={stat.suffix} start={isVisible} />
              </p>
              <p className="mt-1 sm:mt-2 text-muted-foreground font-medium text-xs sm:text-sm md:text-base">{stat.label}</p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
