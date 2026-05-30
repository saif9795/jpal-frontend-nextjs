"use client";

import { ReactLenis } from "@studio-freight/react-lenis";
import { useEffect, useRef, type ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function SmoothScrollProvider({ children }: Props) {
  const lenisRef = useRef<any>(null);

  useEffect(() => {
    const showHeroFirstOnMobile = () => {
      if (window.innerWidth >= 1024) return;
      if (!window.location.hash) return;

      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
      window.history.replaceState(null, "", `${window.location.pathname}${window.location.search}`);
    };

    showHeroFirstOnMobile();

    const onAnchorClick = (event: MouseEvent) => {
      if (event.defaultPrevented) return;

      const clickedElement = event.target as HTMLElement | null;
      const anchor = clickedElement?.closest<HTMLAnchorElement>('a[href^="#"]');
      const href = anchor?.getAttribute("href");

      if (!href || href === "#") return;

      const target = document.getElementById(href.slice(1));
      if (!target) return;

      event.preventDefault();
      lenisRef.current?.lenis?.scrollTo(target, { offset: -110, duration: 1.1 });
      window.history.replaceState(null, "", href);
    };

    document.addEventListener("click", onAnchorClick);
    return () => document.removeEventListener("click", onAnchorClick);
  }, []);

  return (
    <ReactLenis
      ref={lenisRef}
      root
      autoRaf
      options={{
        lerp: 0.1,
        smoothWheel: true,
      }}
    >
      {children}
    </ReactLenis>
  );
}
