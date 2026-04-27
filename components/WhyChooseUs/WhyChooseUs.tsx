import { whyChooseUs } from "@/data/siteData";
import { AnimatedSection } from "@/components/ui/AnimatedSection/AnimatedSection";
import styles from "./WhyChooseUs.module.scss";

export function WhyChooseUs() {
  return (
    <section id="experiences" className={styles.section}>
      <AnimatedSection className={styles.header}>
        <p className="section-eyebrow">Why Choose Us</p>
        <h2 className="section-title">Luxury That Feels Effortless</h2>
      </AnimatedSection>
      <div className={styles.grid}>
        {whyChooseUs.map(({ title, copy, icon: Icon }, index) => (
          <AnimatedSection key={title} className={styles.card} delay={index * 0.04}>
            <Icon size={28} />
            <h3>{title}</h3>
            <p>{copy}</p>
          </AnimatedSection>
        ))}
      </div>
    </section>
  );
}
