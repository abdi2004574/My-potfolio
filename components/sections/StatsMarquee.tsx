"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { stats } from "@/lib/constants";

export function StatsMarquee() {
  const duplicatedStats = [...stats, ...stats, ...stats];

  return (
    <section className="relative overflow-hidden bg-secondary/30 py-8 border-y border-border">
      <motion.div
        className="flex whitespace-nowrap"
        initial={{ x: 0 }}
        animate={{ x: "-33.33%" }}
        transition={{
          duration: 60,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {duplicatedStats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div
              key={index}
              className="flex items-center gap-3 px-8"
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary">
                <Icon size={24} />
              </div>
              <div className="text-left">
                <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
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