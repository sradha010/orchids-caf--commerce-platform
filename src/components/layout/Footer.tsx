import { SITE_CONFIG } from "@/constants";

export function Footer() {
  return (
    <footer className="border-t border-[#d9ccba] bg-[#f5f0e8]">
      <div className="container px-4 md:px-6 mx-auto py-8">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="text-center md:text-left">
            <p className="font-bold text-[#3b2f1e] font-serif">{SITE_CONFIG.name}</p>
            <p className="text-sm text-[#9a8a72] mt-1">{SITE_CONFIG.address}</p>
          </div>
          <p className="text-sm text-[#9a8a72]">
            &copy; {new Date().getFullYear()} {SITE_CONFIG.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            <a
              href={SITE_CONFIG.links.instagram}
              target="_blank"
              rel="noreferrer"
              className="text-sm text-[#7a6a52] hover:text-[#3b2f1e] font-medium transition-colors"
            >
              Instagram
            </a>
            <a
              href={SITE_CONFIG.links.facebook}
              target="_blank"
              rel="noreferrer"
              className="text-sm text-[#7a6a52] hover:text-[#3b2f1e] font-medium transition-colors"
            >
              Facebook
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
