"use client";

import * as React from "react";
import { motion, useInView } from "framer-motion";
import { stats } from "@/lib/constants";

function AnimatedCounter({ value }: { value: string }) {
  const ref = React.useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  
  // Extract number and suffix (e.g., "5+" -> num=5, suffix="+")
  const numMatch = value.match(/^(\d+)(.*)$/);
  const [displayNum, setDisplayNum] = React.useState(0);
  
  React.useEffect(() => {
    if (isInView && numMatch) {
      const target = parseInt(numMatch[1]);
      const duration = 1500;
      const startTime = Date.now();
      
      const timer = setInterval(() => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        // Ease out cubic
        const eased = 1 - Math.pow(1 - progress, 3);
        setDisplayNum(Math.round(target * eased));
        
        if (progress >= 1) clearInterval(timer);
      }, 20);
      
      return () => clearInterval(timer);
    }
  }, [isInView, value]); // Use 'value' instead of 'numMatch' array to avoid reference changes

  if (!numMatch) {
    // Non-numeric value like "AI-Native"
    return <span ref={ref}>{value}</span>;
  }

  return (
    <span ref={ref}>
      {isInView ? `${displayNum}${numMatch[2]}` : value}
    </span>
  );
}

export function StatsMarquee() {
  const duplicatedStats = [...stats, ...stats, ...stats];

  return (
    <section className="relative overflow-hidden bg-secondary/30 py-10 border-y border-border">
      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-background to-transparent" />
      <div className="absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-background to-transparent" />
      
      <motion.div
        className="flex whitespace-nowrap"
        initial={{ x: 0 }}
        animate={{ x: "-33.33%" }}
        transition={{
          duration: 40,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {duplicatedStats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div
              key={index}
              className="flex items-center gap-4 px-10"
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary">
                <Icon size={24} />
              </div>
              <div className="text-left">
                <p className="text-2xl font-bold text-foreground">
                  <AnimatedCounter value={stat.value} />
                </p>
                <p className="text-sm font-medium text-muted-foreground">{stat.label}</p>
              </div>
            </div>
          );
        })}
      </motion.div>

      <style jsx global>{`
        @media (prefers-reduced-motion: reduce) {
          section.stats-marquee .flex {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}