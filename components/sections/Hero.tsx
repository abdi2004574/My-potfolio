"use client";

import * as React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { heroContent } from "@/lib/constants";

export function Hero() {
  const ref = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.3], [1, 0.8]);
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.3], [0, 30]);

  const handleScrollToServices = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5" />

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-10 text-4xl sm:text-6xl font-bold text-primary/10"
          style={{ opacity }}
        >
          {"< />"}
        </motion.div>
        <motion.div
          className="absolute bottom-1/4 right-10 text-2xl sm:text-4xl font-bold text-accent/10"
          style={{
            opacity: useTransform(scrollYProgress, [0.1, 0.4], [0.5, 0]),
            x: useTransform(scrollYProgress, [0, 0.3], [30, 0]),
          }}
        >
          {"{ }"}
        </motion.div>
        <motion.div
          className="absolute top-1/3 right-10 text-3xl sm:text-5xl font-bold text-secondary/20"
          style={{
            opacity: useTransform(scrollYProgress, [0.05, 0.35], [0.8, 0]),
            y: useTransform(scrollYProgress, [0, 0.3], [-20, 0]),
          }}
        >
          function()
        </motion.div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <motion.div style={{ y }}>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary"
          >
            <span className="h-2 w-2 animate-pulse rounded-full bg-green-500" />
            Available for Projects
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mb-2 text-sm font-medium text-muted-foreground"
          >
            Karachi, Pakistan
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
          >
            Abdur Rehman{" "}
            <span className="gradient-text">Building the Future via Intent</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground"
          >
            Karachi-based <span className="text-primary font-medium">Frontend Developer</span> specializing in{" "}
            <span className="text-primary font-medium">Vibe Coding</span> and AI-Native Workflows
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center px-4"
          >
            <Button size="xl" className="w-full sm:w-auto" onClick={handleScrollToServices}>
              {heroContent.ctaText}
            </Button>
            <Button
              size="xl"
              variant="outline"
              className="w-full sm:w-auto"
              onClick={() => document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" })}
            >
              View My Work
            </Button>
            <a
              href={`https://wa.me/${heroContent.whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-[#25D366] px-6 py-3 font-semibold text-white transition-all hover:bg-[#20BD5A] hover:shadow-lg hover:shadow-[#25D366]/30"
            >
              <MessageCircle size={20} />
              WhatsApp
            </a>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <button
          onClick={handleScrollToServices}
          className="flex items-center justify-center w-10 h-10 rounded-full border border-border text-muted-foreground transition-colors hover:text-foreground hover:border-primary"
          aria-label="Scroll down"
        >
          <ArrowDown size={20} />
        </button>
      </motion.div>
    </section>
  );
}