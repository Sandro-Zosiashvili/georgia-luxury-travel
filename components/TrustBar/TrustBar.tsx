"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { trustSignals } from "@/data/siteData";
import styles from "./TrustBar.module.scss";

gsap.registerPlugin(ScrollTrigger);

export function TrustBar() {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>("[data-count]").forEach((item) => {
        const value = Number(item.dataset.count);
        const counter = { value: 0 };
        gsap.to(counter, {
          value,
          duration: 1.8,
          ease: "power2.out",
          scrollTrigger: { trigger: ref.current, start: "top 80%", once: true },
          onUpdate: () => {
            item.textContent = value <= 5 ? counter.value.toFixed(1).replace(".0", "") : Math.round(counter.value).toString();
          }
        });
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section id="trust" ref={ref} className={styles.trust} aria-label="Trust signals">
      {trustSignals.map(({ label, value, suffix, icon: Icon }) => (
        <div className={styles.item} key={label}>
          <Icon size={22} />
          <strong>
            <span data-count={value}>0</span>
            {suffix}
          </strong>
          <span>{label}</span>
        </div>
      ))}
    </section>
  );
}
