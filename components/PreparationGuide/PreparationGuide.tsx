import { guideCards } from "@/data/siteData";
import { AnimatedSection } from "@/components/ui/AnimatedSection/AnimatedSection";
import styles from "./PreparationGuide.module.scss";

export function PreparationGuide() {
  return (
    <section className={styles.section}>
      <AnimatedSection className={styles.header}>
        <p className="section-eyebrow">Preparation Guide</p>
        <h2 className="section-title">Arrive Ready, Travel Light</h2>
      </AnimatedSection>
      <div className={styles.grid}>
        {guideCards.map(({ title, copy, icon: Icon }, index) => (
          <AnimatedSection className={styles.card} key={title} delay={index * 0.03}>
            <Icon size={24} />
            <h3>{title}</h3>
            <p>{copy}</p>
          </AnimatedSection>
        ))}
      </div>
    </section>
  );
}
