"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react"; 
import { NAV_ITEMS } from "@/constants";

// Keep as 'export function' to match your layout.tsx import
export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-[#d9ccba] bg-[#f5f0e8]/95 backdrop-blur supports-[backdrop-filter]:bg-[#f5f0e8]/80">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6 mx-auto">
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <span className="text-xl font-bold text-[#3b2f1e] font-serif tracking-tight">
            AMA
          </span>
          <span className="text-xs text-[#6b8f5e] font-medium tracking-widest uppercase hidden sm:inline">
            Cafe
          </span>
        </Link>

        {/* Desktop Nav links */}
        <div className="hidden md:flex gap-7">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-[#7a6a52] hover:text-[#3b2f1e] transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-2">
          {/* STAFF LOGIN - Added for Desktop View */}
          <Link
            href="/admin"
            className="hidden md:inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-[#7a6a52] hover:text-[#3b2f1e] transition-colors"
          >
            Staff Login
          </Link>

          <Link
            href="/customer"
            className="hidden sm:inline-flex items-center justify-center rounded-full border border-[#6b8f5e] px-4 py-2 text-sm font-medium text-[#6b8f5e] hover:bg-[#6b8f5e] hover:text-white transition-colors"
          >
            Order Now
          </Link>
          
          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 md:hidden text-[#3b2f1e] hover:bg-[#ede5d8] rounded-md transition-colors"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="md:hidden bg-[#f5f0e8] border-b border-[#d9ccba] animate-in slide-in-from-top duration-200">
          <div className="flex flex-col space-y-4 px-6 py-8">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="text-lg font-medium text-[#7a6a52] hover:text-[#3b2f1e]"
              >
                {item.label}
              </Link>
            ))}
            <div className="flex flex-col gap-3 pt-4 border-t border-[#d9ccba]">
              <Link
                href="/customer"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center rounded-full border border-[#6b8f5e] px-4 py-3 text-sm font-medium text-[#6b8f5e]"
              >
                Order Now
              </Link>
              <Link
                href="/admin"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center rounded-full bg-[#3b2f1e] px-4 py-3 text-sm font-medium text-[#f5f0e8]"
              >
                Staff Login
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
