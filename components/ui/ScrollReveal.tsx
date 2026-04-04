"use client";

import * as React from "react";
import { useInView } from "react-intersection-observer";
import { motion, type HTMLMotionProps } from "framer-motion";

export interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  duration?: number;
  once?: boolean;
}

const directionVariants = {
  up: { y: 40, x: 0 },
  down: { y: -40, x: 0 },
  left: { x: 40, y: 0 },
  right: { x: -40, y: 0 },
  none: { x: 0, y: 0 },
};

const ScrollReveal = ({
  children,
  className,
  delay = 0,
  direction = "up",
  duration = 0.5,
  once = true,
}: ScrollRevealProps) => {
  const [ref, inView] = useInView({
    triggerOnce: once,
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  });

  const variants = {
    hidden: {
      opacity: 0,
      ...directionVariants[direction],
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={variants}
      transition={{
        duration,
        delay,
        ease: "easeOut",
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export { ScrollReveal };