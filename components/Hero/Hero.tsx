"use client";

import { useEffect, useRef } from "react";
import { ChevronDown, MessageCircle } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MagneticButton } from "@/components/ui/MagneticButton/MagneticButton";
import styles from "./Hero.module.scss";

gsap.registerPlugin(ScrollTrigger);

export function Hero() {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        [`.${styles.eyebrow}`, `.${styles.title}`, `.${styles.copy}`, `.${styles.buttons}`, `.${styles.heroStats}`],
        { y: 42, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, stagger: 0.14, delay: 1.35, ease: "power3.out" }
      );

      gsap.to(`.${styles.media}`, {
        yPercent: 14,
        ease: "none",
        scrollTrigger: {
          trigger: ref.current,
          start: "top top",
          end: "bottom top",
          scrub: true
        }
      });
    }, ref);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} id="home" className={styles.hero}>
      <video
        className={styles.media}
        autoPlay
        muted
        loop
        playsInline
        poster="https://images.unsplash.com/photo-1565008576549-57569a49371d?auto=format&fit=crop&w=1800&q=85"
      >
        <source src="https://videos.pexels.com/video-files/15708451/15708451-uhd_2560_1440_30fps.mp4" type="video/mp4" />
      </video>
      <div className={styles.overlay} />
      <div className={styles.content}>
        <p className={styles.eyebrow}>Exclusive Georgian Journeys</p>
        <h1 className={styles.title}>Discover Georgia in Absolute Style</h1>
        <p className={styles.copy}>
          Private tours, luxury escapes and unforgettable adventures through one of Europe&apos;s hidden gems.
        </p>
        <div className={styles.buttons}>
          <MagneticButton href="#tours" variant="gold">
            Explore Tours
          </MagneticButton>
          <MagneticButton href="#contact" variant="light">
            <MessageCircle size={17} />
            Speak With Concierge
          </MagneticButton>
        </div>
        <div className={styles.heroStats} aria-label="Agency highlights">
          <span>Private guides</span>
          <span>Wine estates</span>
          <span>Caucasus lodges</span>
        </div>
      </div>
      <a className={styles.scroll} href="#trust" aria-label="Scroll to trust section">
        <ChevronDown size={22} />
      </a>
    </section>
  );
}
