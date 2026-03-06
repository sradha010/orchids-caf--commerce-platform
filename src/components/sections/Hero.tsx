"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { SITE_CONFIG } from "@/constants";

// Add your image paths here
const HERO_IMAGES = [
  "/hero.avif",
  "/cof2.jpeg", // Add your second image path
  "/coffee3.avif",   // Add your third image path
];

export function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    // Timer to change image every 3 seconds
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === HERO_IMAGES.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <section className="relative flex flex-col items-center justify-center py-28 md:py-40 overflow-hidden bg-[#3b2f1e]">
      
      {/* Background Image Slider Container */}
      <div className="absolute inset-0 z-0">
        {HERO_IMAGES.map((image, index) => (
          <div
            key={image}
            className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ease-in-out`}
            style={{
              backgroundImage: `linear-gradient(rgba(67, 65, 63, 0.51), rgba(0, 0, 0, 0.5)), url('${image}')`,
              opacity: currentImageIndex === index ? 1 : 0,
            }}
          />
        ))}
      </div>

      {/* Texture overlay for added depth */}
      <div className="absolute inset-0 z-10 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/worn-dots.png')]" />

      <div className="relative z-20 container px-4 md:px-6 mx-auto text-center">
        <p className="uppercase tracking-[0.25em] text-[#fefae0] text-sm font-semibold mb-4">
          Handcrafted with love
        </p>
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl text-[#dad7cd] font-serif leading-tight">
          AMA<br />
          <span className="text-[#dda15e]">Cafe</span>
        </h1>
        <p className="mx-auto mt-6 max-w-[600px] text-[#fefae0] md:text-xl leading-relaxed">
          {SITE_CONFIG.description}
        </p>
        
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#menu">
            <Button size="lg" className="bg-[#6b8f5e] hover:bg-[#5a7a4e] text-white rounded-full px-8">
              See Our Menu
            </Button>
          </a>
          <a href="#contact">
            <Button variant="outline" size="lg" className="border-[#c4a882] text-[#7a6a52] hover:bg-[#ede5d8] rounded-full px-8">
              Find Us
            </Button>
          </a>
        </div>

        <div className="mt-10 inline-flex items-center gap-2 bg-white/70 border border-[#d9ccba] rounded-full px-5 py-2 text-sm text-[#7a6a52]">
          <span className="w-2 h-2 rounded-full bg-[#6b8f5e] inline-block" />
          Open Today {SITE_CONFIG.hours.weekdays.split(": ")[1]}
        </div>
      </div>
    </section>
  );
}
