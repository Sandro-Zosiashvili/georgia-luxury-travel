import Image from "next/image";
import { itinerary } from "@/data/siteData";
import { AnimatedSection } from "@/components/ui/AnimatedSection/AnimatedSection";
import styles from "./Itinerary.module.scss";

export function Itinerary() {
  return (
    <section className={styles.section}>
      <AnimatedSection className={styles.header}>
        <p className="section-eyebrow">Sample Timeline</p>
        <h2 className="section-title">Three Days, Beautifully Paced</h2>
      </AnimatedSection>
      <div className={styles.timeline}>
        {itinerary.map((item, index) => (
          <AnimatedSection className={styles.step} key={item.day} delay={index * 0.05}>
            <div className={styles.index}>{item.day}</div>
            <div className={styles.image}>
              <Image src={item.image} alt={item.title} fill sizes="(max-width: 768px) 100vw, 34vw" />
            </div>
            <div className={styles.copy}>
              <h3>{item.title}</h3>
              <p>{item.copy}</p>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </section>
  );
}
