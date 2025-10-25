"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

const steps = [
  {
    id: 1,
    label: "START",
    tagline: "ALL-IN-ONE TOOL FOR DEVELOPERS & CREATORS",
    title: "Kickstart your next idea with ease",
    subtitle: "Everything you need to begin building fast",
    heading: "Choose a template and customize",
    description:
      "Select from dozens of ready-made layouts — portfolios, dashboards, or landing pages — and make them yours.",
    color: "emerald",
  },
  {
    id: 2,
    label: "LAUNCH",
    tagline: "BUILT FOR SPEED AND SIMPLICITY",
    title: "Launch your site instantly",
    subtitle: "Deploy to the web in one click",
    heading: "Go live in minutes",
    description:
      "Host your project on Vercel or Netlify effortlessly — no setup required, just edit and publish.",
    link: "One-click deployment",
    color: "indigo",
  },
  {
    id: 3,
    label: "GROW",
    tagline: "DESIGNED TO SCALE WITH YOU",
    title: "Grow your audience and visibility",
    subtitle: "Reach more clients with beautiful designs",
    heading: "Showcase your work & attract clients",
    description:
      "Promote your templates or projects, share your link, and build your personal brand effortlessly.",
    color: "purple",
  },
  {
    id: 4,
    label: "EARN",
    tagline: "MONETIZE YOUR CREATIVITY",
    title: "Turn your projects into profit",
    subtitle: "Sell templates or custom builds easily",
    heading: "Earn from your creativity",
    description:
      "Monetize your templates or services through a growing marketplace of creators and developers.",
    color: "pink",
  },
];

export function StepsSection() {
  const [activeStep, setActiveStep] = useState(1);
  const currentStep = steps.find((step) => step.id === activeStep) || steps[0];

  const getColorClasses = (color: string, isActive: boolean) => {
    if (!isActive) return "bg-gray-300";

    const colors: Record<string, string> = {
      emerald: "bg-emerald-500",
      indigo: "bg-indigo-500",
      purple: "bg-purple-500",
      pink: "bg-pink-500",
    };
    return colors[color] || "bg-gray-400";
  };

  const getLabelColorClasses = (color: string) => {
    const colors: Record<string, string> = {
      emerald: "text-emerald-500",
      indigo: "text-indigo-500",
      purple: "text-purple-500",
      pink: "text-pink-500",
    };
    return colors[color] || "text-gray-500";
  };

  return (
    <section className="py-24 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <p className="text-emerald-500 font-semibold text-sm uppercase tracking-wide mb-4">
            {currentStep.tagline}
          </p>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4 text-balance">
            {currentStep.title}
          </h2>
          <p className="text-3xl md:text-4xl text-gray-400 text-balance">
            {currentStep.subtitle}
          </p>
        </div>

        {/* Content Card */}
        <div className="bg-white rounded-3xl shadow-lg p-12 md:p-16">
          {/* Progress Indicators */}
          <div className="flex gap-3 mb-16">
            {steps.map((step) => (
              <button
                key={step.id}
                onClick={() => setActiveStep(step.id)}
                className={`h-1.5 flex-1 rounded-full transition-all duration-500 ${getColorClasses(
                  step.color,
                  step.id <= activeStep
                )}`}
                aria-label={`Go to step ${step.id}`}
              />
            ))}
          </div>

          {/* Step Content */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6 animate-in fade-in slide-in-from-left-8 duration-700">
              <p
                className={`font-bold text-sm uppercase tracking-wide ${getLabelColorClasses(
                  currentStep.color
                )}`}
              >
                {currentStep.label}
              </p>
              <h3 className="text-4xl md:text-5xl font-bold text-gray-900 text-balance leading-tight">
                {currentStep.heading}
              </h3>
              <p className="text-xl text-gray-500 leading-relaxed">
                {currentStep.description}
              </p>
              {currentStep.link && (
                <a
                  href="#"
                  className="inline-flex items-center text-gray-900 font-medium hover:gap-3 gap-2 transition-all group"
                >
                  {currentStep.link}
                  <span className="group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                </a>
              )}
            </div>

            {/* Right Mockup */}
            <div className="relative animate-in fade-in slide-in-from-right-8 duration-700">
              {activeStep === 1 && (
                <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 shadow-xl">
                  <div className="bg-white rounded-xl p-6 shadow-lg">
                    <div className="flex items-start justify-between mb-6">
                      <div>
                        <p className="text-gray-400 text-sm mb-2">
                          The Ultimate Creator Playbook
                        </p>
                        <p className="text-4xl font-bold text-gray-900">$35</p>
                      </div>
                      <div className="w-32 h-32 bg-gradient-to-br from-emerald-200 to-emerald-300 rounded-xl flex items-center justify-center shadow-lg transform rotate-6">
                        <div className="bg-emerald-500 text-white font-bold text-xl px-4 py-2 rounded">
                          VOL 2
                        </div>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <input
                        type="text"
                        placeholder="1234 1234 1234 1234"
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm"
                        disabled
                      />
                      <div className="flex gap-3">
                        <input
                          type="text"
                          placeholder="MM/YY"
                          className="flex-1 px-4 py-3 border border-gray-200 rounded-lg text-sm"
                          disabled
                        />
                        <input
                          type="text"
                          placeholder="CVC"
                          className="flex-1 px-4 py-3 border border-gray-200 rounded-lg text-sm"
                          disabled
                        />
                      </div>
                      <Button className="w-full bg-gray-900 hover:bg-gray-800 text-white py-6 rounded-lg font-medium">
                        Pay now
                      </Button>
                    </div>
                  </div>
                  <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-500 text-2xl font-bold shadow-lg">
                    $
                  </div>
                </div>
              )}

              {activeStep === 2 && (
                <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-6 shadow-xl">
                  <div className="bg-white rounded-xl overflow-hidden shadow-lg">
                    {/* Browser Chrome */}
                    <div className="bg-gray-100 px-4 py-3 flex items-center gap-2 border-b">
                      <div className="flex gap-1.5">
                        <div className="w-3 h-3 rounded-full bg-red-400" />
                        <div className="w-3 h-3 rounded-full bg-yellow-400" />
                        <div className="w-3 h-3 rounded-full bg-green-400" />
                      </div>
                      <div className="flex-1 bg-white rounded px-3 py-1 text-xs text-gray-500 text-center">
                        yoursite.com
                      </div>
                    </div>
                    {/* Content */}
                    <div className="p-8 text-center bg-gradient-to-br from-purple-50 to-pink-50">
                      <h4 className="text-2xl font-bold text-gray-900 mb-2">
                        Make something people love.
                      </h4>
                      <p className="text-sm text-gray-600 mb-4">
                        Join us in building, creating, and sharing our dreams
                      </p>
                      <div className="flex justify-center gap-2 mb-4">
                        {[1, 2, 3, 4, 5].map((i) => (
                          <div
                            key={i}
                            className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-400 to-pink-400"
                          />
                        ))}
                      </div>
                      <Button className="bg-gray-900 hover:bg-gray-800 text-white px-6 py-2 rounded-lg text-sm">
                        Build your dream →
                      </Button>
                    </div>
                  </div>
                </div>
              )}

              {activeStep === 3 && (
                <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-8 shadow-xl flex items-center justify-center h-96">
                  <p className="text-purple-400 text-lg font-medium">
                    Step 3 Content
                  </p>
                </div>
              )}

              {activeStep === 4 && (
                <div className="bg-gradient-to-br from-pink-50 to-pink-100 rounded-2xl p-8 shadow-xl flex items-center justify-center h-96">
                  <p className="text-pink-400 text-lg font-medium">
                    Step 4 Content
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
