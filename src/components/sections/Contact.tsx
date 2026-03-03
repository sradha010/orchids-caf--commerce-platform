import { SITE_CONFIG } from "@/constants";

export function Contact() {
  // We encode the address to make sure spaces and special characters work in a URL
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(SITE_CONFIG.address)}`;

  return (
    <section id="contact" className="py-24 md:py-32 bg-[#3b2f1e]">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="text-center mb-14">
          <p className="uppercase tracking-[0.2em] text-[#6b8f5e] text-sm font-semibold mb-3">
            Come visit
          </p>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-[#f5f0e8] font-serif">
            Find Us
          </h2>
          <p className="mt-4 text-[#c4a882] max-w-lg mx-auto">
            We'd love to see you. Pull up a chair and stay a while.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {/* Address - Now Clickable! */}
          <a 
            href={googleMapsUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="group bg-[#4d3d28] rounded-2xl p-8 text-center space-y-3 transition-all hover:bg-[#5a4830] hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
          >
            <div className="w-12 h-12 bg-[#6b8f5e] rounded-full flex items-center justify-center mx-auto group-hover:bg-[#7ba36c] transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3 className="font-semibold text-[#f5f0e8] font-serif text-lg">Location</h3>
            <p className="text-[#c4a882] text-sm leading-relaxed">{SITE_CONFIG.address}</p>
            <p className="text-[#6b8f5e] text-xs font-bold uppercase mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
              Get Directions →
            </p>
          </a>

          {/* Hours (Remains the same) */}
          <div className="bg-[#4d3d28] rounded-2xl p-8 text-center space-y-3">
            <div className="w-12 h-12 bg-[#6b8f5e] rounded-full flex items-center justify-center mx-auto">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="font-semibold text-[#f5f0e8] font-serif text-lg">Hours</h3>
            <p className="text-[#c4a882] text-sm">{SITE_CONFIG.hours.weekdays}</p>
            <p className="text-[#c4a882] text-sm">{SITE_CONFIG.hours.weekends}</p>
          </div>

          {/* Contact - Clickable Phone & Email */}
          <div className="bg-[#4d3d28] rounded-2xl p-8 text-center space-y-3">
            <div className="w-12 h-12 bg-[#6b8f5e] rounded-full flex items-center justify-center mx-auto">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="font-semibold text-[#f5f0e8] font-serif text-lg">Get in Touch</h3>
            <a href={`tel:${SITE_CONFIG.phone}`} className="block text-[#c4a882] text-sm hover:text-white transition-colors">{SITE_CONFIG.phone}</a>
            <a href={`mailto:${SITE_CONFIG.email}`} className="block text-[#c4a882] text-sm hover:text-white transition-colors">{SITE_CONFIG.email}</a>
          </div>
        </div>

        {/* Social links */}
        <div className="mt-12 flex justify-center gap-6">
          <a
            href={SITE_CONFIG.links.instagram}
            target="_blank"
            rel="noreferrer"
            className="text-[#c4a882] hover:text-[#f5f0e8] text-sm font-medium transition-colors"
          >
            Instagram
          </a>
          <a
            href={SITE_CONFIG.links.facebook}
            target="_blank"
            rel="noreferrer"
            className="text-[#c4a882] hover:text-[#f5f0e8] text-sm font-medium transition-colors"
          >
            Facebook
          </a>
        </div>
      </div>
    </section>
  );
}