// app/components/Navbar.tsx
"use client";

import { Button } from "@/components/ui/button";
import { useLenis } from "@studio-freight/react-lenis";
import { ArrowUpRight, Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, type MouseEvent } from "react";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Strategy", href: "#strategy" },
  { label: "Markets", href: "#markets" },
  { label: "Partners", href: "#investors" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [activeHref, setActiveHref] = useState<string>("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const lenis = useLenis();

  useEffect(() => {
    const syncActiveFromHash = () => {
      const hash = window.location.hash;
      if (navLinks.some((link) => link.href === hash)) {
        setActiveHref(hash);
      }
    };

    syncActiveFromHash();
    window.addEventListener("hashchange", syncActiveFromHash);

    const sections = navLinks
      .map((link) => document.getElementById(link.href.slice(1)))
      .filter((section): section is HTMLElement => Boolean(section));

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visibleSection) {
          setActiveHref(`#${(visibleSection.target as HTMLElement).id}`);
        }
      },
      {
        rootMargin: "-45% 0px -45% 0px",
        threshold: [0.15, 0.35, 0.55],
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      observer.disconnect();
      window.removeEventListener("hashchange", syncActiveFromHash);
    };
  }, []);

  const handleSectionNav =
    (href: string, closeMenuOnNavigate = false) =>
    (event: MouseEvent<HTMLAnchorElement>) => {
      if (!href.startsWith("#")) return;

      const sectionId = href.slice(1);
      const section = document.getElementById(sectionId);

      if (!section) return;

      event.preventDefault();
      setActiveHref(href);
      if (closeMenuOnNavigate) setMobileMenuOpen(false);

      if (lenis) {
        lenis.scrollTo(section, { offset: -110, duration: 1.1 });
      } else {
        const sectionTop = section.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({ top: sectionTop - 110, behavior: "smooth" });
      }
      window.history.replaceState(null, "", href);
    };

  return (
    <section className="bg-[#224262] sticky top-0 z-50">
      <nav className="container relative mx-auto flex items-center justify-center px-4 py-4 text-white lg:px-4 lg:py-10">
        {/* Logo */}
        <div className="absolute left-4 flex h-[34px] w-[86px] items-center lg:h-[64px] lg:w-[150px]">
          <Link
            href="#home"
            aria-label="Go to top section"
            onClick={handleSectionNav("#home")}
          >
            <Image
              src="/logo.png"
              width={1500}
              height={1500}
              alt="Buy-Rite Properties"
              className="h-full w-full object-cover"
            />
          </Link>
        </div>

        <section className="flex flex-col items-center gap-4 text-center">
          <div>
            <h1 className="font-serif text-base font-semibold lg:text-5xl">
              Buy Rite Properties
            </h1>
          </div>

          {/* Desktop links */}
          <div className="hidden items-center space-x-6 lg:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={handleSectionNav(link.href)}
                className={`font-sans text-base font-normal transition-colors ${
                  activeHref === link.href
                    ? "text-yellow-400"
                    : "text-white hover:text-yellow-400"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Button
              asChild
              className="bg-[#BC933E] text-[#1A1A1A] hover:bg-[#d6ab5a] font-sans h-10 rounded-[4px] text-base font-normal"
            >
              <Link href="#contact" onClick={handleSectionNav("#contact")}>
                Contact us
              </Link>
            </Button>
          </div>
        </section>

        {/* Mobile & tablet menu */}
        <div className="absolute right-4 lg:hidden">
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger className="inline-flex size-10 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition hover:bg-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A84C]">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Open navigation menu</span>
            </SheetTrigger>
            <SheetContent
              side="right"
              showCloseButton={false}
              className="w-[86%] max-w-xs border-l border-white/15 bg-gradient-to-b from-[#224262] via-[#1B3653] to-[#0E223D] p-0 text-white"
            >
              <div className="flex h-full flex-col">
                <div className="border-b border-white/15 px-6 pb-5 pt-8">
                  <p className="text-xs uppercase tracking-[0.18em] text-[#C9A84C]">
                    Navigation
                  </p>
                  <p className="mt-2 text-base text-white/80">
                    Explore each section
                  </p>
                </div>
                <div className="flex flex-1 flex-col gap-3 px-6 py-6">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={handleSectionNav(link.href, true)}
                      className={`flex items-center justify-between rounded-lg px-4 py-3 text-base font-medium tracking-wide transition ${
                        activeHref === link.href
                          ? "border border-[#C9A84C]/70 bg-white/10 text-[#F4D892]"
                          : "border border-white/15 bg-white/5 text-white hover:-translate-y-0.5 hover:border-[#C9A84C]/70 hover:bg-white/10 hover:text-[#F4D892]"
                      }`}
                    >
                      <span>{link.label}</span>
                      <ArrowUpRight className="h-4 w-4 opacity-70" />
                    </Link>
                  ))}
                  <Button
                    asChild
                    className="mt-3 h-12 rounded-lg bg-[#CE9D3B] text-white hover:bg-[#d6ab5a]"
                  >
                    <Link
                      href="#contact"
                      onClick={handleSectionNav("#contact", true)}
                    >
                      Get In Touch
                    </Link>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </section>
  );
}
