"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { ArrowRight, MapPin, GraduationCap, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { aboutContent, socialLinks } from "@/lib/constants";

export function AboutMe() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Subtle background accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-accent/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Photo Side */}
          <motion.div
            className="relative flex justify-center lg:justify-start"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="relative">
              {/* Glow effect behind photo */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-accent/30 rounded-2xl blur-2xl scale-105 opacity-60" />
              
              {/* Photo container */}
              <div className="relative w-72 h-72 sm:w-80 sm:h-80 rounded-2xl overflow-hidden border-2 border-white/10 shadow-2xl shadow-primary/20">
                <img
                  src="/My-picture.png"
                  alt="Abdur Rehman - Frontend Developer"
                  className="w-full h-full object-cover"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
              </div>

              {/* Floating badge */}
              <motion.div
                className="absolute -bottom-4 -right-4 sm:-right-6 flex items-center gap-2 rounded-xl bg-card border border-border px-4 py-2.5 shadow-xl"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.5 }}
              >
                <GraduationCap size={18} className="text-primary" />
                <span className="text-sm font-medium">CE Student</span>
              </motion.div>

              {/* Location badge */}
              <motion.div
                className="absolute -top-6 -left-4 sm:-left-8 flex items-center gap-2 rounded-xl bg-card border border-border px-4 py-2.5 shadow-xl"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, duration: 0.5 }}
              >
                <MapPin size={18} className="text-primary" />
                <span className="text-sm font-medium">Karachi, PK</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div>
              <motion.p
                className="text-sm font-semibold uppercase tracking-widest text-primary mb-3"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                About Me
              </motion.p>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                {aboutContent.greeting}
              </h2>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed">
              {aboutContent.bio}
            </p>

            {/* Highlights */}
            <ul className="space-y-3">
              {aboutContent.highlights.map((highlight, i) => (
                <motion.li
                  key={i}
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + i * 0.1 }}
                >
                  <Sparkles size={18} className="text-primary mt-0.5 shrink-0" />
                  <span className="text-muted-foreground">{highlight}</span>
                </motion.li>
              ))}
            </ul>

            {/* Trait Tags */}
            <div className="flex flex-wrap gap-2 pt-2">
              {aboutContent.traits.map((trait, i) => (
                <motion.span
                  key={trait}
                  className="inline-flex items-center rounded-full bg-primary/10 border border-primary/20 px-3 py-1 text-xs font-medium text-primary"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 + i * 0.05 }}
                >
                  {trait}
                </motion.span>
              ))}
            </div>

            {/* CTA Row */}
            <div className="flex flex-wrap gap-4 pt-4">
              <Button
                onClick={() =>
                  document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Let&apos;s Work Together
                <ArrowRight size={16} className="ml-2" />
              </Button>
              <a
                href="https://github.com/abdi2004574"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline">
                  View GitHub Profile
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
