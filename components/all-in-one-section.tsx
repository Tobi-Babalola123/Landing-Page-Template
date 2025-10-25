"use client";

import { Mail, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";

export function AllInOneSection() {
  return (
    <section className="py-24 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-blue-600 font-semibold text-sm uppercase tracking-wide mb-4">
            THE END OF JUGGLING MULTIPLE TOOLS
          </p>
          <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-4">
            Your All-in-One Creator Hub
          </h2>
          <p className="text-3xl md:text-4xl text-muted-foreground">
            Everything you need to build, grow, and make money online, all in
            one place.
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left Column */}
          <div className="space-y-8">
            {/* Showcase Products Card */}
            <div className="bg-card rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-center mb-8">
                Showcase Your Products & Services
              </h3>
              <div className="grid grid-cols-3 gap-4">
                {/* Product Card 1 */}
                <div className="bg-background rounded-lg p-4 shadow-sm">
                  <div className="w-8 h-8 bg-foreground rounded mb-2 flex items-center justify-center text-background font-bold">
                    N
                  </div>
                  <p className="text-xs font-semibold mb-1">
                    Digital Organizer Kit
                  </p>
                  <p className="text-xs text-muted-foreground mb-2">
                    Simplify your workflow and manage daily tasks with ease —
                    perfect for entrepreneurs and creatives.
                  </p>
                  <div className="flex gap-1 mb-2">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <div
                        key={i}
                        className="w-1.5 h-1.5 bg-yellow-400 rounded-full"
                      />
                    ))}
                  </div>
                  <Button size="sm" className="w-full text-xs h-7">
                    Learn More →
                  </Button>
                </div>

                {/* Product Card 2 */}
                <div className="bg-background rounded-lg p-4 shadow-sm">
                  <div className="aspect-video bg-muted rounded mb-2 flex items-center justify-center">
                    <div className="w-12 h-12 bg-blue-500 rounded" />
                  </div>
                  <p className="text-xs font-semibold mb-1">
                    Content Strategy Course
                  </p>
                  <p className="text-xs text-muted-foreground mb-2">
                    Build your personal brand and attract clients with this
                    beginner-friendly course on content creation.
                  </p>
                  <div className="flex gap-1 mb-2">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <div
                        key={i}
                        className="w-1.5 h-1.5 bg-yellow-400 rounded-full"
                      />
                    ))}
                  </div>
                  <Button
                    size="sm"
                    variant="destructive"
                    className="w-full text-xs h-7"
                  >
                    Enroll Now →
                  </Button>
                </div>

                {/* Product Card 3 */}
                <div className="bg-background rounded-lg p-4 shadow-sm">
                  <div className="aspect-[3/4] bg-muted rounded mb-2 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-8 h-8 bg-blue-400 rounded-full mx-auto mb-2" />
                      <p className="text-xs font-bold">
                        Day in a life of a Product Designer
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Labels */}
              <div className="grid grid-cols-3 gap-4 mt-6 text-xs text-muted-foreground">
                <div>
                  <p className="font-semibold">Business Starter Kit</p>
                  <p>Marketing Roadmap</p>
                </div>
                <div>
                  <p className="font-semibold">Growth Newsletter</p>
                  <p className="font-semibold">Online Course Blueprint</p>
                </div>
                <div>
                  <p className="font-semibold">Design Templates Pack</p>
                  <p className="font-semibold">Smart Budget Guide</p>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4 mt-4 text-xs text-muted-foreground">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 bg-pink-100 rounded-full" />
                  <p>Automation Tips</p>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 bg-orange-100 rounded-full" />
                  <p>Brand Identity Toolkit</p>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 bg-blue-100 rounded-full" />
                  <p>Website Launch Guide</p>
                </div>
              </div>
            </div>

            {/* Sell Products Card */}
            <div className="bg-card rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-center mb-8">
                Launch products, share free resources, and receive payments
                effortlessly
              </h3>

              <div className="grid grid-cols-3 gap-4">
                {/* Free Product */}
                <div className="text-center">
                  <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-4 mb-3">
                    <div className="w-8 h-8 bg-foreground rounded mx-auto mb-2 flex items-center justify-center text-background font-bold">
                      N
                    </div>
                    <div className="h-12 bg-blue-100 rounded mb-2" />
                    <div className="h-2 bg-blue-100 rounded mb-1" />
                    <div className="h-2 bg-blue-100 rounded w-3/4 mx-auto" />
                  </div>
                  <p className="font-bold text-lg">FREE</p>
                </div>

                {/* $35 Product */}
                <div className="text-center">
                  <div className="bg-yellow-50 border-2 border-yellow-200 rounded-lg p-4 mb-3">
                    <div className="bg-foreground rounded p-2 mb-2">
                      <div className="w-6 h-6 bg-background rounded mx-auto" />
                    </div>
                    <div className="h-12 bg-yellow-100 rounded mb-2" />
                    <div className="h-2 bg-yellow-100 rounded mb-1" />
                    <div className="h-2 bg-yellow-100 rounded w-3/4 mx-auto" />
                  </div>
                  <p className="font-bold text-lg">$35</p>
                </div>

                {/* $99 Product */}
                <div className="text-center">
                  <div className="bg-purple-50 border-2 border-purple-200 rounded-lg p-4 mb-3">
                    <div className="aspect-video bg-purple-200 rounded mb-2 flex items-center justify-center">
                      <div className="w-8 h-8 bg-blue-500 rounded" />
                    </div>
                    <div className="h-2 bg-purple-100 rounded mb-1" />
                    <div className="h-2 bg-purple-100 rounded w-3/4 mx-auto" />
                  </div>
                  <p className="font-bold text-lg">$99</p>
                </div>
              </div>

              {/* Payment Options */}
              <div className="grid grid-cols-3 gap-4 mt-6 text-xs text-muted-foreground text-center">
                <div>
                  <p className="font-semibold">Instant Sale</p>
                </div>
                <div>
                  <p className="font-semibold">Paid</p>
                  <p>Single transaction</p>
                </div>
                <div>
                  <p className="font-semibold">Free</p>
                  <p>Grow your audience</p>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4 mt-4 text-xs text-muted-foreground text-center">
                <div>
                  <p className="font-semibold">Discount Offer</p>
                </div>
                <div />
                <div>
                  <p className="font-semibold">New Subscriber</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            {/* Audience Engagement Card */}
            <div className="bg-card rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-center mb-8">
                Build, grow, and connect with your audience
              </h3>

              {/* Email Stats */}
              <div className="bg-background rounded-lg p-6 mb-6 shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <Mail className="w-8 h-8 text-yellow-500" />
                  <div className="text-right">
                    <p className="text-2xl font-bold">2,480</p>
                    <p className="text-sm text-muted-foreground">
                      active subscribers
                    </p>
                  </div>
                </div>
                <div className="space-y-2">
                  {["Maya", "Chris", "Tolu"].map((name, i) => (
                    <div key={name} className="flex items-center gap-2 text-sm">
                      <div className="w-6 h-6 bg-yellow-100 rounded-full" />
                      <span>{name}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Email Signup Form */}
              <div className="bg-background rounded-lg p-6 mb-6 shadow-sm">
                <div className="flex gap-4">
                  <div className="w-24 h-24 bg-yellow-50 rounded-lg flex items-center justify-center">
                    <Mail className="w-8 h-8 text-yellow-500" />
                  </div>
                  <div className="flex-1">
                    <p className="font-bold mb-1">
                      Join thousands of creators leveling up their digital
                      presence
                    </p>
                    <p className="text-xs text-muted-foreground mb-3">
                      Receive free resources, tools, and tips to grow your brand
                    </p>

                    <div className="space-y-2">
                      <input
                        type="email"
                        placeholder="Enter your email"
                        className="w-full px-3 py-2 text-sm border rounded-lg"
                        disabled
                      />
                      <Button className="w-full" size="sm">
                        Join Now →
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Analytics Graph */}
              <div className="bg-background rounded-lg p-6 shadow-sm">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <p className="text-3xl font-bold">98K</p>
                    <p className="text-sm text-muted-foreground">
                      Active visitors
                    </p>
                  </div>
                  <TrendingUp className="w-6 h-6 text-purple-500" />
                </div>
                <div className="h-32 relative">
                  <svg
                    className="w-full h-full"
                    viewBox="0 0 300 100"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M 0 80 Q 50 65 100 55 T 200 40 Q 250 30 300 20"
                      fill="none"
                      stroke="rgb(168, 85, 247)"
                      strokeWidth="2"
                    />
                  </svg>
                  <div className="absolute bottom-0 left-0 right-0 flex justify-between text-xs text-muted-foreground">
                    <span>Active Users</span>
                  </div>
                </div>
                <div className="flex gap-4 mt-4 text-xs">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-purple-200 rounded" />
                    <span>Regions</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-purple-400 rounded" />
                    <span>Global Reach</span>
                  </div>
                </div>

                {/* World Map Visualization */}
                <div className="mt-4 h-32 bg-muted/30 rounded-lg relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-full h-full opacity-20">
                      <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-purple-500 rounded-full" />
                      <div className="absolute top-1/3 left-1/2 w-2 h-2 bg-purple-500 rounded-full" />
                      <div className="absolute bottom-1/3 right-1/3 w-2 h-2 bg-purple-500 rounded-full" />
                      <div className="absolute top-1/2 left-1/3 w-3 h-3 bg-purple-600 rounded-full" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
