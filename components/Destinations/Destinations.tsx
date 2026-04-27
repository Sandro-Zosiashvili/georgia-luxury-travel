import Image from "next/image";
import { destinations } from "@/data/siteData";
import { AnimatedSection } from "@/components/ui/AnimatedSection/AnimatedSection";
import styles from "./Destinations.module.scss";

export function Destinations() {
  return (
    <section id="destinations" className={styles.section}>
      <AnimatedSection className={styles.header}>
        <p className="section-eyebrow">Signature Places</p>
        <h2 className="section-title">Georgia, Curated With Taste</h2>
        <p className="section-copy">
          From silk-road city lanes to high Caucasus valleys, every destination is chosen for beauty, character and refined access.
        </p>
      </AnimatedSection>
      <div className={styles.grid}>
        {destinations.map((destination, index) => (
          <AnimatedSection key={destination.name} delay={index * 0.04} className={styles.card}>
            <Image src={destination.image} alt={`${destination.name} in Georgia`} fill sizes="(max-width: 768px) 100vw, 33vw" />
            <div className={styles.cardOverlay} />
            <div className={styles.cardContent}>
              <span>{destination.region}</span>
              <h3>{destination.name}</h3>
              <p>{destination.summary}</p>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </section>
  );
}
