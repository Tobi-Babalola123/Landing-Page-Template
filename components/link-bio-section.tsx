export function LinkBioSection() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-pink-500 font-semibold text-sm uppercase tracking-wide mb-4">
            PERFECT ON MOBILE & DESKTOP
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Consistently impressive</h2>
          <p className="text-2xl md:text-3xl text-gray-400">Meet your best link-in-bio yet</p>
        </div>

        {/* Mobile Mockup with Floating Elements */}
        <div className="relative max-w-4xl mx-auto h-[600px] flex items-center justify-center">
          {/* Floating Icons */}
          <div className="absolute top-10 left-20 w-12 h-12 bg-red-500 rounded-full flex items-center justify-center text-white animate-float">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
            </svg>
          </div>

          <div
            className="absolute top-32 right-24 w-10 h-10 bg-purple-500 rounded-full animate-float"
            style={{ animationDelay: "0.5s" }}
          ></div>

          <div
            className="absolute bottom-32 left-32 w-8 h-8 bg-green-500 rounded-full animate-float"
            style={{ animationDelay: "1s" }}
          ></div>

          <div
            className="absolute top-20 right-32 w-10 h-10 bg-blue-500 rounded-full animate-float"
            style={{ animationDelay: "1.5s" }}
          ></div>

          {/* Pink Card - Left */}
          <div
            className="absolute left-0 top-1/2 -translate-y-1/2 w-48 h-32 bg-pink-100 rounded-2xl shadow-lg border-4 border-pink-200 animate-float"
            style={{ animationDelay: "0.3s" }}
          ></div>

          {/* Purple Card - Right Top */}
          <div
            className="absolute right-8 top-24 w-40 h-28 bg-purple-100 rounded-2xl shadow-lg p-4 animate-float"
            style={{ animationDelay: "0.7s" }}
          >
            <div className="text-xs font-semibold text-purple-900">My awesome link</div>
          </div>

          {/* Pink Cards - Right Bottom */}
          <div className="absolute right-0 bottom-32 flex gap-2 animate-float" style={{ animationDelay: "1.2s" }}>
            <div className="w-20 h-20 bg-pink-400 rounded-xl"></div>
            <div className="w-20 h-20 bg-gray-800 rounded-xl"></div>
          </div>

          {/* Central Mobile Mockup */}
          <div className="relative z-10 w-80 h-[560px] bg-white rounded-[3rem] shadow-2xl border-8 border-gray-900 overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-gray-900 rounded-b-2xl"></div>
            <div className="p-6 pt-10 h-full overflow-hidden">
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-gray-200 rounded-full mx-auto mb-3"></div>
                <h3 className="font-bold text-lg">Mia Villa</h3>
                <p className="text-sm text-gray-500">Content Creator</p>
              </div>
              <div className="space-y-3">
                <div className="flex gap-3 justify-center">
                  <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
                  <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
                  <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
                  <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
                </div>
                <div className="bg-gray-900 text-white rounded-2xl p-4">
                  <img
                    src="/placeholder.svg?height=200&width=300"
                    alt="Featured content"
                    className="w-full h-32 object-cover rounded-lg mb-2"
                  />
                  <p className="text-sm font-semibold">My Latest YouTube Video</p>
                  <p className="text-xs text-gray-400">Check out my new content!</p>
                </div>
              </div>
            </div>
          </div>

          {/* Orange Icon - Bottom Right */}
          <div
            className="absolute bottom-16 right-16 w-12 h-12 bg-orange-500 rounded-lg animate-float"
            style={{ animationDelay: "0.9s" }}
          ></div>
        </div>
      </div>
    </section>
  )
}
