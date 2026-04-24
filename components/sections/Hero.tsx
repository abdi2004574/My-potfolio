"use client";

import * as React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { heroContent } from "@/lib/constants";

const TypeWriter = ({ words }: { words: string[] }) => {
  const [currentWordIndex, setCurrentWordIndex] = React.useState(0);
  const [currentText, setCurrentText] = React.useState("");
  const [isDeleting, setIsDeleting] = React.useState(false);

  React.useEffect(() => {
    const word = words[currentWordIndex];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          setCurrentText(word.substring(0, currentText.length + 1));
          if (currentText === word) {
            setTimeout(() => setIsDeleting(true), 2000);
          }
        } else {
          setCurrentText(word.substring(0, currentText.length - 1));
          if (currentText === "") {
            setIsDeleting(false);
            setCurrentWordIndex((prev) => (prev + 1) % words.length);
          }
        }
      },
      isDeleting ? 50 : 100
    );

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentWordIndex, words]);

  return (
    <span className="text-primary">
      {currentText}
      <span className="animate-blink ml-0.5 inline-block w-[3px] h-[0.9em] bg-primary align-middle" />
    </span>
  );
};

export function Hero() {
  const ref = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.3], [1, 0.8]);
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.3], [0, 30]);

  const handleScrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5" />

      {/* Animated grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.04)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />

      {/* Floating orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl"
          animate={{
            x: [0, 30, 0],
            y: [0, -20, 0],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-accent/8 rounded-full blur-3xl"
          animate={{
            x: [0, -25, 0],
            y: [0, 25, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Code decorations - very subtle */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-[15%] left-[5%] text-4xl sm:text-6xl font-bold text-primary/[0.04]"
          style={{ opacity }}
        >
          {"< />"}
        </motion.div>
        <motion.div
          className="absolute bottom-[20%] right-[5%] text-2xl sm:text-4xl font-bold text-accent/[0.04]"
          style={{
            opacity: useTransform(scrollYProgress, [0.1, 0.4], [0.5, 0]),
          }}
        >
          {"{ }"}
        </motion.div>
        <motion.div
          className="absolute top-[20%] right-[8%] text-3xl sm:text-5xl font-bold text-secondary/[0.06]"
          style={{
            opacity: useTransform(scrollYProgress, [0.05, 0.35], [0.8, 0]),
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
            <span className="block">Abdur Rehman</span>
            <span className="block mt-2 gradient-text">
              Building the Future
            </span>
            <span className="block mt-1 text-2xl sm:text-3xl md:text-4xl font-medium text-muted-foreground">
              via{" "}
              <TypeWriter words={["Vibe Coding", "AI-Native Workflows", "Modern Web Tech", "Clean Design"]} />
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground"
          >
            First-year CE student who ships{" "}
            <span className="text-primary font-medium">production-ready apps</span>.
            Specializing in React, Next.js, and AI-powered development.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center px-4"
          >
            <Button size="xl" className="w-full sm:w-auto group" onClick={handleScrollToContact}>
              {heroContent.ctaText}
              <motion.span
                className="inline-block ml-2"
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.span>
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
              className="inline-flex items-center gap-2 rounded-lg bg-[#25D366] px-6 py-3 font-semibold text-white transition-all hover:bg-[#20BD5A] hover:shadow-lg hover:shadow-[#25D366]/30 active:scale-95"
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
          onClick={handleScrollToContact}
          className="flex items-center justify-center w-10 h-10 rounded-full border border-border text-muted-foreground transition-colors hover:text-foreground hover:border-primary animate-bounce"
          aria-label="Scroll down"
        >
          <ArrowDown size={20} />
        </button>
      </motion.div>
    </section>
  );
}