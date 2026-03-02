import Link from "next/link";
import { NAV_ITEMS, SITE_CONFIG } from "@/constants";

export function Navbar() {
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

        {/* Nav links */}
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

          {/* Panel links */}
          <div className="flex items-center gap-2">
            <Link
              href="/customer"
              className="hidden sm:inline-flex items-center justify-center rounded-full border border-[#6b8f5e] px-4 py-2 text-sm font-medium text-[#6b8f5e] hover:bg-[#6b8f5e] hover:text-white transition-colors"
            >
              Order Now
            </Link>
            <Link
              href="/admin"
              className="hidden sm:inline-flex items-center justify-center rounded-full bg-[#3b2f1e] px-4 py-2 text-sm font-medium text-[#f5f0e8] hover:bg-[#4d3d28] transition-colors"
            >
              Staff Login
            </Link>
          </div>
      </div>
    </nav>
  );
}
