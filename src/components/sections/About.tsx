export function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-[#ede5d8]">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-5">
            <p className="uppercase tracking-[0.2em] text-[#6b8f5e] text-sm font-semibold">
              Our Story
            </p>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-[#3b2f1e] font-serif">
              A Corner of Calm in the Heart of Delhi
            </h2>
            <p className="text-[#7a6a52] text-lg leading-relaxed">
              AMA Cafe is tucked away on the 1st floor in the vibrant neighbourhood of Majnu-ka-tilla,
              New Delhi. We created a cozy escape from the city buzz — a place where good coffee,
              honest food, and warm company come together.
            </p>
            <p className="text-[#7a6a52] text-lg leading-relaxed">
              Every cup is brewed with care, every bite made fresh. Whether you're dropping in for
              a quick espresso or staying for hours — you're always welcome at AMA.
            </p>
            <div className="flex gap-8 pt-2">
              <div>
                <p className="text-3xl font-bold text-[#3b2f1e] font-serif">7+</p>
                <p className="text-sm text-[#7a6a52] mt-1">Years brewing</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-[#3b2f1e] font-serif">12</p>
                <p className="text-sm text-[#7a6a52] mt-1">Menu items</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-[#3b2f1e] font-serif">100%</p>
                <p className="text-sm text-[#7a6a52] mt-1">Ethically sourced</p>
              </div>
            </div>
          </div>

          {/* Image placeholder with a warm cafe feel */}
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-[#c4a882] flex items-center justify-center shadow-md">
            <img
              src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800&q=80"
              alt="Inside Brew & Bloom Café"
              className="absolute inset-0 w-full h-full object-cover"
            />
            {/* Vintage overlay */}
            <div className="absolute inset-0 bg-[#7a6a52]/10 mix-blend-multiply" />
          </div>
        </div>
      </div>
    </section>
  );
}
