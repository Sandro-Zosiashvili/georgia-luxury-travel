import Image from "next/image";
import { tourFacts } from "@/data/siteData";
import { MagneticButton } from "@/components/ui/MagneticButton/MagneticButton";
import { AnimatedSection } from "@/components/ui/AnimatedSection/AnimatedSection";
import styles from "./TourPreview.module.scss";

export function TourPreview() {
  return (
    <section className={styles.section}>
      <AnimatedSection className={styles.header}>
        <p className="section-eyebrow">Featured Booking Preview</p>
        <h2 className="section-title">Kakheti Wine Prestige</h2>
        <p className="section-copy">
          A polished sample itinerary built around private cellar access, vineyard stays and the golden calm of eastern Georgia.
        </p>
      </AnimatedSection>

      <div className={styles.layout}>
        <AnimatedSection className={styles.gallery}>
          <Image
            src="https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=1400&q=85"
            alt="Premium wine tasting in Kakheti"
            fill
            sizes="(max-width: 900px) 100vw, 62vw"
          />
        </AnimatedSection>
        <AnimatedSection className={styles.panel}>
          <div className={styles.price}>
            <span>from</span>
            <strong>$340</strong>
            <em>per guest</em>
          </div>
          <div className={styles.facts}>
            {tourFacts.map(({ label, value, icon: Icon }) => (
              <div key={label} className={styles.fact}>
                <Icon size={20} />
                <span>{label}</span>
                <strong>{value}</strong>
              </div>
            ))}
          </div>
          <MagneticButton href="#contact" variant="dark">
            Book This Tour
          </MagneticButton>
        </AnimatedSection>
      </div>
    </section>
  );
}
