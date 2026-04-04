"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { projects } from "@/lib/constants";

export function ProjectShowcase() {
  return (
    <section id="projects" className="py-24 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Featured Projects
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            A selection of projects showcasing my expertise in building scalable,
            user-centric applications.
          </p>
        </motion.div>

        <div className="space-y-24">
          {projects.map((project, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.div
                key={project.id}
                className={`flex flex-col gap-8 lg:flex-row lg:items-center ${
                  isEven ? "" : "lg:flex-row-reverse"
                }`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="flex-1 relative">
                  <div className="relative aspect-video overflow-hidden rounded-xl bg-secondary border border-border group">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-6xl font-bold text-white/10">
                        {project.name.charAt(0)}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex-1 space-y-4">
                  <h3 className="text-2xl font-bold">{project.name}</h3>
                  <p className="text-muted-foreground">{project.description}</p>

                  <div className="space-y-2">
                    <div>
                      <h4 className="text-sm font-semibold text-foreground">
                        Challenge
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {project.challenge}
                      </p>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-foreground">
                        Solution
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {project.solution}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="inline-flex items-center rounded-full bg-secondary px-3 py-1 text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4 pt-2">
                    <Button variant="outline" size="sm">
                      <ExternalLink size={16} className="mr-2" />
                      Live Demo
                    </Button>
                    <Button variant="ghost" size="sm">
                      <Github size={16} className="mr-2" />
                      Code
                    </Button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <Button size="lg">
            View All Projects
            <ArrowRight size={16} className="ml-2" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}