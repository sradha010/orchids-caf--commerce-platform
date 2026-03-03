import { SITE_CONFIG } from "@/constants";

export function Contact() {
  // Updated Google Maps Link
  const googleMapsUrl = "https://maps.app.goo.gl/uCz1uz5Mdiw4HF7S8";

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
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Left Side: Contact Details */}
          <div className="grid grid-cols-1 gap-4">
            
            {/* Location Card - Card is NOT a link, only the text inside is */}
            <div className="group bg-[#4d3d28] rounded-2xl p-6 flex items-start gap-4 transition-all hover:bg-[#5a4830] border border-transparent hover:border-[#6b8f5e]/30 hover:scale-[1.01]">
              <div className="w-10 h-10 bg-[#6b8f5e] rounded-full flex items-center justify-center shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-[#f5f0e8] font-serif text-lg">Location</h3>
                <p className="text-[#c4a882] text-sm leading-relaxed">
                  House no. 6, 1st Floor, New Aruna Colony, Majnu-ka-tilla, New Aruna Nagar, New Delhi, 110054
                </p>
                {/* Only this text is clickable */}
                <a 
                  href={googleMapsUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block text-[#6b8f5e] text-xs font-bold uppercase mt-2 hover:text-[#86b076] transition-colors cursor-pointer"
                >
                  Get Directions →
                </a>
              </div>
            </div>

            {/* Hours Card */}
            <div className="bg-[#4d3d28] rounded-2xl p-6 flex items-start gap-4 border border-transparent">
              <div className="w-10 h-10 bg-[#6b8f5e] rounded-full flex items-center justify-center shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-[#f5f0e8] font-serif text-lg">Hours</h3>
                <p className="text-[#c4a882] text-sm">{SITE_CONFIG.hours.weekdays}</p>
                <p className="text-[#c4a882] text-sm">{SITE_CONFIG.hours.weekends}</p>
              </div>
            </div>

            {/* Contact Card */}
            <div className="bg-[#4d3d28] rounded-2xl p-6 flex items-start gap-4 border border-transparent">
              <div className="w-10 h-10 bg-[#6b8f5e] rounded-full flex items-center justify-center shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-[#f5f0e8] font-serif text-lg">Socials</h3>
                <div className="flex gap-4 mt-1">
                   <a href={SITE_CONFIG.links.instagram} target="_blank" rel="noopener noreferrer" className="text-[#c4a882] hover:text-white text-sm transition-colors">Instagram</a>
                   <a href={SITE_CONFIG.links.facebook} target="_blank" rel="noopener noreferrer" className="text-[#c4a882] hover:text-white text-sm transition-colors">Facebook</a>
                </div>
              </div>
            </div>
          </div>

        

        </div>
      </div>
    </section>
  );
}
