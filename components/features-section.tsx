"use client";

import { Check } from "lucide-react";

export function FeaturesSection() {
  return (
    <section className="bg-background py-24 px-4">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-16 text-center lg:text-left">
          <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-purple-600">
            Empowering creators and businesses
          </p>
          <h2 className="mb-4 text-4xl font-bold text-foreground md:text-5xl lg:text-6xl">
            Design anything, launch anywhere
          </h2>
          <p className="text-2xl text-muted-foreground md:text-3xl lg:text-4xl">
            From landing pages to digital products and portfolios
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Column - Testimonial Card */}
          <div className="flex flex-col gap-8">
            {/* Mockup Card */}
            <div className="overflow-hidden rounded-2xl bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 p-8 shadow-lg">
              <div className="mx-auto max-w-md rounded-xl bg-white p-6 shadow-xl">
                <div className="mb-4 flex items-center gap-3">
                  <div className="h-8 w-8 rounded-lg bg-gray-200" />
                  <div className="text-sm font-medium text-gray-600">
                    Templates
                  </div>
                </div>

                <h3 className="mb-2 text-xl font-bold text-gray-900">
                  Create Beautiful
                  <br />
                  Dashboards & Pages
                  <br />
                  <span className="text-blue-600">Effortlessly</span>
                </h3>

                <p className="mb-4 text-sm text-gray-600">
                  Access ready-to-use layouts for dashboards, portfolios, and
                  landing pages. Customize them to fit your brand and launch
                  faster.
                </p>

                <button className="mb-4 w-full rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white">
                  Explore Templates
                </button>

                <div className="flex items-center gap-2">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map((i) => (
                      <div
                        key={i}
                        className="h-6 w-6 rounded-full border-2 border-white bg-gray-300"
                      />
                    ))}
                  </div>
                  <div className="flex gap-0.5">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <div
                        key={i}
                        className="h-2 w-2 rounded-full bg-blue-600"
                      />
                    ))}
                  </div>
                </div>

                <div className="mt-6 flex items-center justify-between rounded-lg border border-gray-200 p-3">
                  <span className="text-xs text-gray-600">
                    Start Building Your Next Project
                  </span>
                  <div className="h-6 w-6 rounded bg-gray-200" />
                </div>
              </div>

              {/* Mobile Mockup */}
              <div className="absolute right-8 top-8 h-48 w-24 rounded-2xl border-4 border-gray-800 bg-white shadow-xl">
                <div className="p-2">
                  <div className="mb-2 h-2 w-12 rounded bg-gray-200" />
                  <div className="space-y-1">
                    {[1, 2, 3, 4].map((i) => (
                      <div
                        key={i}
                        className="h-1.5 w-full rounded bg-gray-200"
                      />
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-4 flex justify-center">
                <div className="rounded-full bg-white p-3 shadow-md">
                  <div className="h-6 w-6 rounded-full bg-gray-300" />
                </div>
              </div>
            </div>

            {/* Testimonial */}
            <div className="rounded-2xl bg-white p-8 shadow-lg">
              <p className="mb-6 text-lg leading-relaxed text-gray-700">
                "These templates made launching my project so easy. Within days,
                I had a clean, responsive site that impressed my clients and
                boosted sales."
              </p>

              <div className="flex items-center gap-4">
                <div className="h-12 w-12 overflow-hidden rounded-full bg-gray-200">
                  <div className="flex h-full w-full items-center justify-center bg-white">
                    <div className="h-8 w-8 rounded-full border-2 border-gray-900 bg-white" />
                  </div>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Taylor Reed</div>
                  <div className="text-sm text-gray-500">Template Designer</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Features List & Stats */}
          <div className="flex flex-col gap-12">
            {/* Features Checklist */}
            <div className="space-y-4">
              {[
                "Website Templates",
                "Dashboards",
                "Landing Pages",
                "Online Courses",
                "Portfolios",
                "Digital Products",
                "E-Commerce Stores",
              ].map((feature) => (
                <div key={feature} className="flex items-center gap-3">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-purple-100">
                    <Check className="h-4 w-4 text-purple-600" />
                  </div>
                  <span className="text-xl font-medium text-gray-900 md:text-2xl">
                    {feature}
                  </span>
                </div>
              ))}
              <div className="flex items-center gap-3">
                <div className="flex h-6 w-6 items-center justify-center">
                  <span className="text-xl text-gray-400">•••</span>
                </div>
                <span className="text-xl text-gray-500 md:text-2xl">
                  and more...
                </span>
              </div>
            </div>

            {/* Statistics */}
            <div className="grid gap-8 sm:grid-cols-3">
              <div className="flex flex-col items-center text-center sm:items-start sm:text-left">
                <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-purple-100">
                  <svg
                    className="h-6 w-6 text-purple-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <rect
                      x="3"
                      y="3"
                      width="18"
                      height="18"
                      rx="2"
                      strokeWidth="2"
                    />
                    <path d="M3 9h18" strokeWidth="2" />
                  </svg>
                </div>
                <div className="mb-1 text-3xl font-bold text-gray-900">
                  50K+
                </div>
                <div className="text-sm text-gray-600">
                  Templates Downloaded
                </div>
              </div>

              <div className="flex flex-col items-center text-center sm:items-start sm:text-left">
                <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-pink-100">
                  <svg
                    className="h-6 w-6 text-pink-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                    <path
                      d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
                <div className="mb-1 text-3xl font-bold text-gray-900">2K+</div>
                <div className="text-sm text-gray-600">Templates Published</div>
              </div>

              <div className="flex flex-col items-center text-center sm:items-start sm:text-left">
                <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-green-100">
                  <svg
                    className="h-6 w-6 text-green-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <circle cx="12" cy="12" r="10" strokeWidth="2" />
                    <path
                      d="M12 6v6l4 2"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
                <div className="mb-1 text-3xl font-bold text-gray-900">
                  800+
                </div>
                <div className="text-sm text-gray-600">Templates Sold</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
