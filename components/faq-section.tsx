"use client";

import { useState } from "react";

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What is this platform about?",
      answer:
        "It’s an all-in-one creator toolkit that helps you design, launch, and grow your online brand — no coding required.",
    },
    {
      question: "Why should I use this platform?",
      answer:
        "Because it saves you time. With beautiful templates, smart tools, and an easy interface, you can bring your ideas to life faster than ever.",
    },
    {
      question: "Can I connect it with other tools?",
      answer:
        "Absolutely! It supports smooth integrations with popular apps and services to keep your workflow simple and efficient.",
    },
    {
      question: "Is it optimized for search engines?",
      answer:
        "Yes, every page is built with SEO best practices in mind, so your brand can get the visibility it deserves online.",
    },
    {
      question: "Do I need any design or tech skills?",
      answer:
        "Not at all! The platform was created for everyone — from beginners to professionals — with a simple drag-and-drop setup.",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 max-w-3xl">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-blue-500 font-semibold text-sm uppercase tracking-wide mb-4">
            COMMON QUESTIONS
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Got any questions in mind?
          </h2>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-2xl overflow-hidden transition-all"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-100 transition-colors"
              >
                <span className="font-semibold text-gray-900 text-lg">
                  {faq.question}
                </span>
                <span className="text-2xl text-gray-400 ml-4">
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>
              {openIndex === index && (
                <div className="px-6 pb-6">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
