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
          <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">
            Portfolio
          </p>
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
                {/* Project Image */}
                <div className="flex-1 relative group">
                  <div className="relative aspect-video overflow-hidden rounded-xl border border-border group-hover:border-primary/50 transition-all duration-500 shadow-lg group-hover:shadow-xl group-hover:shadow-primary/10">
                    {/* Actual project screenshot */}
                    <img
                      src={project.imageUrl}
                      alt={`${project.name} - Project Screenshot`}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center pb-6">
                      <div className="flex gap-3">
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          <Button size="sm" className="shadow-lg">
                            <ExternalLink size={14} className="mr-2" />
                            Live Demo
                          </Button>
                        </a>
                        <a href={project.codeUrl} target="_blank" rel="noopener noreferrer">
                          <Button size="sm" variant="secondary" className="shadow-lg">
                            <Github size={14} className="mr-2" />
                            Code
                          </Button>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Project Info */}
                <div className="flex-1 space-y-4">
                  <h3 className="text-2xl font-bold">{project.name}</h3>
                  <p className="text-muted-foreground leading-relaxed">{project.description}</p>

                  <div className="space-y-3 py-2">
                    <div className="rounded-lg bg-primary/5 border border-primary/10 p-3">
                      <h4 className="text-sm font-semibold text-primary mb-1">
                        Challenge
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {project.challenge}
                      </p>
                    </div>
                    <div className="rounded-lg bg-accent/5 border border-accent/10 p-3">
                      <h4 className="text-sm font-semibold text-accent mb-1">
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
                        className="inline-flex items-center rounded-full bg-secondary px-3 py-1 text-xs font-medium border border-border"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4 pt-2">
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" size="sm">
                        <ExternalLink size={16} className="mr-2" />
                        Live Demo
                      </Button>
                    </a>
                    <a href={project.codeUrl} target="_blank" rel="noopener noreferrer">
                      <Button variant="ghost" size="sm">
                        <Github size={16} className="mr-2" />
                        Code
                      </Button>
                    </a>
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
          <a href="https://github.com/abdi2004574" target="_blank" rel="noopener noreferrer">
            <Button size="lg">
              View All Projects
              <ArrowRight size={16} className="ml-2" />
            </Button>
          </a>
        </motion.div>
      </div>
    </section>
  );
}