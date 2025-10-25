export function TestimonialsSection() {
  const testimonials = [
    {
      name: "Chris",
      handle: "@chrisdesigns",
      avatar: "/placeholder.svg?height=48&width=48",
      text: "I used to think building a website would take forever.\n\nTurns out, it’s easier than I imagined.\n\nHere’s how I built a clean, modern landing page in under an hour:",
      image: "/modern-landing-page.jpg",
    },
    {
      name: "Techlady",
      handle: "@TheTechlady",
      avatar: "/placeholder.svg?height=48&width=48",
      text: "Shoutout to this platform for helping me set up my portfolio in 30 minutes flat. 💪 Absolutely loving how flexible and intuitive the design tools are!",
    },
    {
      name: "Aprilynne Alter",
      handle: "@aprilcreates",
      avatar: "/placeholder.svg?height=48&width=48",
      text: "Just launched my new bio page! 🚀 Super simple setup and looks amazing.",
    },
    {
      name: "Milo",
      handle: "@MiloCreativeHQ",
      avatar: "/placeholder.svg?height=48&width=48",
      text: "Before: 2% conversion rate\n\nAfter switching to a cleaner layout: 7% conversion rate!\n\nCustom landing pages really make a difference 👌",
    },
    {
      name: "Harsh Makadia",
      handle: "@HarshMakadia",
      avatar: "/placeholder.svg?height=48&width=48",
      text: "Loving this builder! The UI is smooth, and customizing my site feels effortless. Huge thanks to the team for making design this simple 🙌",
      image: "/vibrant-dashboard.jpg",
    },
    {
      name: "Dan Kulkov",
      handle: "@DanKulkov",
      avatar: "/placeholder.svg?height=48&width=48",
      text: "Massive shoutout to the devs — this tool made my page look stunning without needing code.\n\n💜 Couldn’t recommend it more!",
      image: "/creative-showcase.jpg",
      flag: "🇷🇺",
    },
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-blue-500 font-semibold text-sm uppercase tracking-wide mb-4">
            WALL OF LOVE
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our users love what we build together
          </h2>
          <p className="text-2xl md:text-3xl text-gray-400">
            Ready to join them?
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-start gap-3 mb-4">
                <img
                  src={testimonial.avatar || "/placeholder.svg"}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full"
                />
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <h4 className="font-semibold text-gray-900">
                      {testimonial.name}
                    </h4>
                    {testimonial.flag && <span>{testimonial.flag}</span>}
                  </div>
                  <p className="text-sm text-gray-500">{testimonial.handle}</p>
                </div>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed mb-4 whitespace-pre-line">
                {testimonial.text}
              </p>
              {testimonial.image && (
                <img
                  src={testimonial.image || "/placeholder.svg"}
                  alt="Testimonial screenshot"
                  className="w-full rounded-lg"
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
