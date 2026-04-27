import Image from "next/image";
import { AnimatedSection } from "@/components/ui/AnimatedSection/AnimatedSection";
import styles from "./StorySection.module.scss";

export function StorySection() {
  return (
    <section id="about" className={styles.section}>
      <AnimatedSection className={styles.media}>
        <Image
          src="https://images.unsplash.com/photo-1551218808-94e220e084d2?auto=format&fit=crop&w=1200&q=85"
          alt="Traditional Georgian table with wine and cuisine"
          fill
          sizes="(max-width: 900px) 100vw, 50vw"
        />
      </AnimatedSection>
      <AnimatedSection className={styles.copy}>
        <p className="section-eyebrow">The Georgian Art of Hosting</p>
        <h2 className="section-title">Ancient Roads, Modern Comfort</h2>
        <p className="section-copy">
          Georgia is a place where mountain passes, monasteries, family cellars and Black Sea evenings still feel deeply personal.
          We design journeys that honor that spirit while removing friction: private drivers, trusted guides, refined hotels and
          tables where the best stories unfold.
        </p>
        <div className={styles.signature}>
          <span>Designed by locals</span>
          <strong>Delivered with concierge precision</strong>
        </div>
      </AnimatedSection>
    </section>
  );
}
