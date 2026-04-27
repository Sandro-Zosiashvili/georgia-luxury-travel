"use client";

import { useEffect } from "react";

export function useSmoothScroll() {
  useEffect(() => {
    let lenisInstance: { raf: (time: number) => void; destroy: () => void } | null = null;
    let frame = 0;

    const setup = async () => {
      const LenisModule = await import("@studio-freight/lenis");
      const Lenis = LenisModule.default;
      lenisInstance = new Lenis({
        duration: 1.18,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
        wheelMultiplier: 0.9
      });

      const raf = (time: number) => {
        lenisInstance?.raf(time);
        frame = requestAnimationFrame(raf);
      };

      frame = requestAnimationFrame(raf);
    };

    setup();

    return () => {
      cancelAnimationFrame(frame);
      lenisInstance?.destroy();
    };
  }, []);
}
