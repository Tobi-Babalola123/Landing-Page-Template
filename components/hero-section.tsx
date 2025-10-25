"use client";

import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-[#f9fafb] relative overflow-hidden">
      {/* Dotted background pattern */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "radial-gradient(circle, #d1d5db 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      {/* Navigation */}
      <nav className="relative z-10 flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-to-br from-pink-500 to-purple-500 rounded-lg" />
          <span className="text-xl font-semibold text-gray-900">
            DreamBuilder
          </span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          <button className="flex items-center gap-1 text-gray-700 hover:text-gray-900 transition-colors">
            Categories <ChevronDown className="w-4 h-4" />
          </button>
          <button className="text-gray-700 hover:text-gray-900 transition-colors">
            Templates
          </button>
          <button className="text-gray-700 hover:text-gray-900 transition-colors">
            Inspiration
          </button>
          <button className="flex items-center gap-1 text-gray-700 hover:text-gray-900 transition-colors">
            Resources <ChevronDown className="w-4 h-4" />
          </button>
          <button className="text-gray-700 hover:text-gray-900 transition-colors">
            Pricing
          </button>
        </div>

        <Button variant="outline" className="bg-white hover:bg-gray-50">
          Login
        </Button>
      </nav>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-20 pb-32">
        <div className="relative flex items-center justify-center min-h-[600px]">
          {/* Left Card - Sell Digital Products */}
          <div
            className={`absolute left-0 top-1/2 -translate-y-1/2 transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-20"
            }`}
            style={{ transitionDelay: "200ms" }}
          >
            <div className="relative">
              <div className="absolute -top-8 left-4 bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-sm font-medium border border-emerald-200">
                💰 TEMPLATE COLLECTION
              </div>
              <div className="bg-white rounded-2xl shadow-xl p-6 w-80 transform -rotate-6 hover:rotate-0 transition-transform duration-300">
                <div className="space-y-4">
                  <h3 className="text-gray-400 text-sm">Modern & Responsive</h3>
                  <h2 className="text-2xl font-bold text-gray-900">
                    Dashboard Template Kit
                  </h2>
                  <div className="text-4xl font-bold text-gray-900">$35</div>
                  <div className="space-y-3">
                    <div className="flex gap-2">
                      <div className="flex-1 bg-gray-100 rounded h-8" />
                      <div className="w-12 h-8 bg-gray-100 rounded" />
                    </div>
                    <input
                      type="text"
                      placeholder="1234 1234 1234 1234"
                      className="w-full px-3 py-2 border border-gray-200 rounded text-sm"
                      disabled
                    />
                    <div className="flex gap-2">
                      <input
                        type="text"
                        placeholder="Expiration"
                        className="flex-1 px-3 py-2 border border-gray-200 rounded text-sm"
                        disabled
                      />
                      <input
                        type="text"
                        placeholder="CVC"
                        className="w-20 px-3 py-2 border border-gray-200 rounded text-sm"
                        disabled
                      />
                    </div>
                    <button className="w-full bg-indigo-600 text-white py-3 rounded-lg font-medium hover:bg-indigo-700 transition-colors">
                      Pay now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Center Content */}
          <div
            className={`text-center max-w-2xl transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 inline-block">
              <div className="flex items-center gap-2 text-indigo-600 text-sm font-medium mb-6">
                <span className="w-4 h-4 border-2 border-indigo-600 rounded" />
                TEMPLATE MARKETPLACE
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4 text-balance">
                Build Stunning Websites Effortlessly.
              </h1>
              <p className="text-gray-600 text-lg mb-6 text-pretty">
                Explore a collection of modern, responsive templates crafted for
                developers, creators, and businesses. Launch your next idea with
                speed and style.
              </p>
              <div className="flex items-center justify-center gap-2 mb-6">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div
                      key={i}
                      className="w-8 h-8 rounded-full bg-gradient-to-br from-pink-400 to-purple-500 border-2 border-white"
                    />
                  ))}
                </div>
                <span className="text-sm text-gray-500">★★★★★</span>
              </div>
              <Button
                size="lg"
                className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-6 text-base rounded-xl transition-all hover:scale-105"
              >
                Build your dream →
              </Button>
            </div>
          </div>

          {/* Right Card - Link in Bio */}
          <div
            className={`absolute right-0 top-1/2 -translate-y-1/2 transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-20"
            }`}
            style={{ transitionDelay: "400ms" }}
          >
            <div className="relative">
              <div className="absolute -top-8 right-4 bg-pink-100 text-pink-700 px-3 py-1 rounded-full text-sm font-medium border border-pink-200">
                🔗 LINK IN BIO
              </div>
              <div className="bg-white rounded-3xl shadow-xl p-6 w-72 transform rotate-6 hover:rotate-0 transition-transform duration-300">
                <div className="space-y-4">
                  <div className="text-center">
                    <div className="text-sm font-medium text-gray-900 mb-1">
                      StudioFlow
                    </div>
                    <div className="text-xs text-gray-500">@studioflowapp</div>
                  </div>
                  <div className="flex justify-center gap-4 text-gray-600">
                    <div className="w-6 h-6 flex items-center justify-center">
                      ✓
                    </div>
                    <div className="w-6 h-6 flex items-center justify-center">
                      ♥
                    </div>
                    <div className="w-6 h-6 flex items-center justify-center">
                      ✉
                    </div>
                    <div className="w-6 h-6 flex items-center justify-center">
                      ⚙
                    </div>
                  </div>
                  <div className="flex justify-center">
                    <div className="w-24 h-24 rounded-full bg-gradient-to-br from-pink-400 to-purple-500" />
                  </div>
                  <div className="space-y-2">
                    <div className="bg-pink-100 text-pink-700 px-4 py-3 rounded-xl text-sm font-medium text-center">
                      🛠️ Project Dashboard
                    </div>
                    <div className="bg-pink-50 px-4 py-3 rounded-xl">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-pink-200 rounded-lg" />
                        <div className="flex-1">
                          <div className="text-xs font-medium text-gray-900">
                            Task Organizer
                          </div>
                          <div className="text-xs text-gray-500">
                            Manage everything easily →
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Decorative Arrows */}
          <svg
            className="absolute left-1/4 top-1/3 w-32 h-32 text-gray-800 opacity-80"
            viewBox="0 0 100 100"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              d="M 10 50 Q 30 20, 60 30"
              strokeLinecap="round"
              className={`transition-all duration-1000 ${
                isVisible ? "opacity-100" : "opacity-0"
              }`}
            />
            <path
              d="M 55 25 L 60 30 L 55 35"
              strokeLinecap="round"
              strokeLinejoin="round"
              className={`transition-all duration-1000 ${
                isVisible ? "opacity-100" : "opacity-0"
              }`}
            />
          </svg>

          <svg
            className="absolute right-1/4 bottom-1/3 w-32 h-32 text-gray-800 opacity-80"
            viewBox="0 0 100 100"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              d="M 90 50 Q 70 80, 40 70"
              strokeLinecap="round"
              className={`transition-all duration-1000 ${
                isVisible ? "opacity-100" : "opacity-0"
              }`}
            />
            <path
              d="M 45 65 L 40 70 L 45 75"
              strokeLinecap="round"
              strokeLinejoin="round"
              className={`transition-all duration-1000 ${
                isVisible ? "opacity-100" : "opacity-0"
              }`}
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
