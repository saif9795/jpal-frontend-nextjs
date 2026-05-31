"use client";

import Image from "next/image";
import Link from "next/link";

// ── Social icon SVGs (brand icons removed from lucide-react v1.x) ──────────
const SocialIcons = {
  Facebook: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  ),
  Instagram: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  ),
  LinkedIn: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  ),
  X: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  ),
  YouTube: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
      <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="white" />
    </svg>
  ),
};

const socialLinks = [
  { label: "Facebook",  href: "#", Icon: SocialIcons.Facebook  },
  { label: "Instagram", href: "#", Icon: SocialIcons.Instagram },
  { label: "LinkedIn",  href: "#", Icon: SocialIcons.LinkedIn  },
  { label: "X",         href: "#", Icon: SocialIcons.X         },
  { label: "YouTube",   href: "#", Icon: SocialIcons.YouTube   },
];

export default function Footer() {
  const navLinks = [
    { label: "About",    href: "#about"    },
    { label: "Strategy", href: "#strategy" },
    { label: "Markets",  href: "#markets"  },
    { label: "Partners", href: "#investors"},
    { label: "Contact",  href: "#contact"  },
  ];

  return (
    <footer className="bg-[#173f67] px-4 py-12 text-[#7f94ab] sm:px-6 md:py-14">
      <div className="container mx-auto">
        {/* Top row: Logo | Nav | Social */}
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          {/* Logo */}
          <Link
            href="#home"
            aria-label="Go to top section"
            className="inline-flex h-[80px] w-[80px] shrink-0 items-center justify-center overflow-hidden bg-white"
          >
            <Image
              src="/logo.png"
              alt="Buy-Rite Properties"
              width={120}
              height={120}
              className="h-[80px] w-[80px] object-cover"
              priority={false}
            />
          </Link>

          {/* Nav links */}
          <nav className="flex flex-wrap items-center gap-x-9 gap-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-sans text-[16px] text-[#8ea2b8] transition-colors hover:text-[#b8c8d8]"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Social icons */}
          <div className="flex items-center gap-3">
            {socialLinks.map(({ label, href, Icon }) => (
              <Link
                key={label}
                href={href}
                aria-label={label}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-[#345b83] text-[#8ea2b8] transition-colors duration-200 hover:border-[#5b82a8] hover:bg-[#1e5080] hover:text-white"
              >
                <Icon />
              </Link>
            ))}
          </div>
        </div>

        <div className="my-8 border-t border-[#345b83]" />

        {/* Bottom row */}
        <div className="flex flex-col gap-3 text-center md:flex-row md:items-center md:justify-between md:text-left">
          <p className="font-sans text-[16px] text-[#7f94ab]">
            © 2026 Buy Rite Properties LLC. All rights reserved.
          </p>
          <p className="font-sans text-[16px] text-[#7f94ab]">
            Palm Beach County &amp; Martin County, Florida
          </p>
        </div>

        <p className="mx-auto mt-6 max-w-[920px] text-center font-sans text-[15px] leading-relaxed text-[#5f7590]">
          This website is for informational purposes only and does not
          constitute an offer to sell or a solicitation of an offer to buy any
          security. Real estate investments involve risk. Past performance is
          not indicative of future results.
        </p>
      </div>
    </footer>
  );
}