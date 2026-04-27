import { MagneticButton } from "@/components/ui/MagneticButton/MagneticButton";
import { AnimatedSection } from "@/components/ui/AnimatedSection/AnimatedSection";
import styles from "./FinalCTA.module.scss";

export function FinalCTA() {
  return (
    <section className={styles.cta}>
      <AnimatedSection className={styles.inner}>
        <p>Private Georgia, designed beautifully</p>
        <h2>Ready for a Journey Worth Remembering?</h2>
        <div>
          <MagneticButton href="#contact" variant="gold">Reserve Now</MagneticButton>
          <MagneticButton href="#contact" variant="light">Talk To Advisor</MagneticButton>
        </div>
      </AnimatedSection>
    </section>
  );
}
