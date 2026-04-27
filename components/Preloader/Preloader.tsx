"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import styles from "./Preloader.module.scss";

export function Preloader() {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const timeline = gsap.timeline({ defaults: { ease: "power3.inOut" } });
      timeline
        .fromTo(`.${styles.mark}`, { y: 16, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7 })
        .to(`.${styles.curtain}`, { scaleY: 0, transformOrigin: "top", stagger: 0.08, duration: 1 }, "+=0.35")
        .to(ref.current, { autoAlpha: 0, pointerEvents: "none", duration: 0.25 }, "-=0.18");
    }, ref);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={ref} className={styles.preloader} aria-hidden="true">
      <div className={styles.mark}>Georgian Atelier</div>
      <div className={styles.curtain} />
      <div className={styles.curtain} />
      <div className={styles.curtain} />
    </div>
  );
}
