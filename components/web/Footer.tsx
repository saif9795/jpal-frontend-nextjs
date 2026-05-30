// app/components/Footer.tsx
"use client";

import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Strategy", href: "#strategy" },
    { label: "Markets", href: "#markets" },
    { label: "Partners", href: "#investors" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <footer className="bg-[#173f67] px-4 py-12 text-[#7f94ab] sm:px-6 md:py-14">
      <div className="container mx-auto ">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <Link
            href="#home"
            aria-label="Go to top section"
            className="inline-flex h-[80px] w-[80px] items-center justify-center overflow-hidden bg-white"
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
        </div>

        <div className="my-8 border-t border-[#345b83]" />

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
