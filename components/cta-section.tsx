"use client";

import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

export function CtaSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const words = [
    "website",
    "template",
    "portfolio",
    "dashboard",
    "landing page",
  ];

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % words.length);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-white py-24 px-6">
      <div
        className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <h2 className="text-5xl md:text-7xl font-bold text-gray-900 mb-8 text-balance leading-tight">
          Launch your{" "}
          <span className="inline-block relative">
            <span
              key={currentWordIndex}
              className="text-purple-600 inline-block animate-in fade-in duration-500"
            >
              {words[currentWordIndex]}
            </span>
          </span>{" "}
          in minutes
        </h2>
        <p className="text-3xl md:text-4xl text-gray-400 mb-12 text-balance font-medium leading-relaxed">
          Design, customize, and share stunning projects — no coding required.
        </p>
        <Button
          size="lg"
          className="bg-gray-900 hover:bg-gray-800 text-white px-10 py-7 text-lg rounded-full transition-all hover:scale-105 shadow-lg hover:shadow-xl"
        >
          Explore Templates
        </Button>
      </div>
    </section>
  );
}
