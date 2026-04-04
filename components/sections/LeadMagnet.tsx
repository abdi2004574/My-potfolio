"use client";

import * as React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Download, Mail, Phone, User, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Input, Textarea } from "@/components/ui/Input";
import { ProgressBar } from "@/components/ui/ProgressBar";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import {
  projectTypes,
  budgetRanges,
  timelines,
} from "@/lib/constants";

const contactSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Valid email is required"),
  phone: z.string().optional(),
  message: z.string().optional(),
});

type ContactForm = z.infer<typeof contactSchema>;

const steps = [
  { id: "type", title: "Project Type" },
  { id: "budget", title: "Budget Range" },
  { id: "timeline", title: "Timeline" },
  { id: "contact", title: "Contact Details" },
];

export function LeadMagnet() {
  const [currentStep, setCurrentStep] = React.useState(0);
  const [selectedType, setSelectedType] = React.useState<string>("");
  const [selectedBudget, setSelectedBudget] = React.useState<string>("");
  const [selectedTimeline, setSelectedTimeline] = React.useState<string>("");
  const [isSubmitted, setIsSubmitted] = React.useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<ContactForm>({
    resolver: zodResolver(contactSchema),
    mode: "onChange",
  });

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const onSubmit = (data: ContactForm) => {
    console.log("Form submitted:", { ...data, selectedType, selectedBudget, selectedTimeline });
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <section id="contact" className="py-24 relative">
        <div className="mx-auto max-w-2xl px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center"
          >
            <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
              <Check size={40} className="text-primary" />
            </div>
            <h2 className="text-3xl font-bold">Thank You!</h2>
            <p className="mt-4 text-muted-foreground">
              Your project inquiry has been received. I&apos;ll get back to you within 24 hours.
            </p>
            <div className="mt-8 p-6 bg-secondary/30 rounded-xl border border-border">
              <h3 className="text-lg font-semibold mb-2">Free Resource</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Download my free eBook: &quot;Building Scalable Web Apps with MERN Stack&quot;
              </p>
              <Button variant="secondary">
                <Download size={16} className="mr-2" />
                Download eBook
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-24 relative">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Let&apos;s Plan Your Project
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              Tell me about your project and I&apos;ll provide a detailed proposal within 24 hours.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="rounded-2xl border border-border bg-card p-4 sm:p-8 shadow-sm">
            <ProgressBar currentStep={currentStep} totalSteps={steps.length} />

            <form onSubmit={handleSubmit(onSubmit)} className="mt-8">
              <AnimatePresence mode="wait">
                {currentStep === 0 && (
                  <motion.div
                    key="step-0"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-6"
                  >
                    <h3 className="text-xl font-semibold">What type of project do you need?</h3>
                    <div className="grid gap-4 sm:grid-cols-2">
                      {projectTypes.map((type) => (
                        <button
                          key={type.id}
                          type="button"
                          onClick={() => setSelectedType(type.id)}
                          className={`flex items-center gap-3 rounded-lg border p-4 text-left transition-all hover:border-primary ${
                            selectedType === type.id
                              ? "border-primary bg-primary/10"
                              : "border-border"
                          }`}
                        >
                          <span className="text-2xl">{type.icon}</span>
                          <span className="font-medium">{type.label}</span>
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}

                {currentStep === 1 && (
                  <motion.div
                    key="step-1"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-6"
                  >
                    <h3 className="text-xl font-semibold">What&apos;s your budget range?</h3>
                    <div className="space-y-3">
                      {budgetRanges.map((range) => (
                        <button
                          key={range.id}
                          type="button"
                          onClick={() => setSelectedBudget(range.id)}
                          className={`w-full rounded-lg border p-4 text-left transition-all hover:border-primary ${
                            selectedBudget === range.id
                              ? "border-primary bg-primary/10"
                              : "border-border"
                          }`}
                        >
                          <span className="font-medium">{range.label}</span>
                          <p className="text-sm text-muted-foreground">
                            {range.description}
                          </p>
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}

                {currentStep === 2 && (
                  <motion.div
                    key="step-2"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-6"
                  >
                    <h3 className="text-xl font-semibold">What&apos;s your timeline?</h3>
                    <div className="space-y-3">
                      {timelines.map((timeline) => (
                        <button
                          key={timeline.id}
                          type="button"
                          onClick={() => setSelectedTimeline(timeline.id)}
                          className={`w-full rounded-lg border p-4 text-left transition-all hover:border-primary ${
                            selectedTimeline === timeline.id
                              ? "border-primary bg-primary/10"
                              : "border-border"
                          }`}
                        >
                          <span className="font-medium">{timeline.label}</span>
                          <p className="text-sm text-muted-foreground">
                            {timeline.description}
                          </p>
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}

                {currentStep === 3 && (
                  <motion.div
                    key="step-3"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-6"
                  >
                    <h3 className="text-xl font-semibold">Your contact details</h3>
                    <div className="space-y-4">
                      <div>
                        <label className="text-sm font-medium mb-2 block">
                          Name *
                        </label>
                        <Input
                          {...register("name")}
                          error={!!errors.name}
                          icon={<User size={18} />}
                          placeholder="Your name"
                          className="text-base sm:text-sm" // 16px minimum on mobile
                        />
                        {errors.name && (
                          <p className="mt-1 text-sm text-red-500">
                            {errors.name.message}
                          </p>
                        )}
                      </div>
                      <div>
                        <label className="text-sm font-medium mb-2 block">
                          Email *
                        </label>
                        <Input
                          {...register("email")}
                          type="email"
                          error={!!errors.email}
                          icon={<Mail size={18} />}
                          placeholder="your@email.com"
                          className="text-base sm:text-sm"
                        />
                        {errors.email && (
                          <p className="mt-1 text-sm text-red-500">
                            {errors.email.message}
                          </p>
                        )}
                      </div>
                      <div>
                        <label className="text-sm font-medium mb-2 block">
                          Phone (optional)
                        </label>
                        <Input
                          {...register("phone")}
                          icon={<Phone size={18} />}
                          placeholder="+1 (555) 000-0000"
                          className="text-base sm:text-sm"
                        />
                      </div>
                      <div>
                        <label className="text-sm font-medium mb-2 block">
                          Message (optional)
                        </label>
                        <Textarea
                          {...register("message")}
                          placeholder="Tell me about your project..."
                          className="text-base sm:text-sm min-h-[150px]"
                        />
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="mt-8 flex justify-between">
                <Button
                  type="button"
                  variant="outline"
                  onClick={prevStep}
                  disabled={currentStep === 0}
                >
                  Back
                </Button>
                {currentStep < steps.length - 1 ? (
                  <Button
                    type="button"
                    onClick={nextStep}
                    disabled={
                      (currentStep === 0 && !selectedType) ||
                      (currentStep === 1 && !selectedBudget) ||
                      (currentStep === 2 && !selectedTimeline)
                    }
                  >
                    Continue
                  </Button>
                ) : (
                  <Button type="submit">Submit Inquiry</Button>
                )}
              </div>
            </form>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}