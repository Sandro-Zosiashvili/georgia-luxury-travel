"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { faqs } from "@/data/siteData";
import { AnimatedSection } from "@/components/ui/AnimatedSection/AnimatedSection";
import styles from "./FAQ.module.scss";

export function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section className={styles.section}>
      <AnimatedSection className={styles.header}>
        <p className="section-eyebrow">FAQ</p>
        <h2 className="section-title">Before You Arrive</h2>
      </AnimatedSection>
      <AnimatedSection className={styles.accordion}>
        {faqs.map((item, index) => (
          <div className={styles.item} key={item.question}>
            <button onClick={() => setOpen(open === index ? -1 : index)} aria-expanded={open === index}>
              {item.question}
              <ChevronDown size={20} />
            </button>
            <div className={`${styles.answer} ${open === index ? styles.visible : ""}`}>
              <p>{item.answer}</p>
            </div>
          </div>
        ))}
      </AnimatedSection>
    </section>
  );
}
