import Image from "next/image";
import { Star } from "lucide-react";
import { testimonials } from "@/data/siteData";
import { AnimatedSection } from "@/components/ui/AnimatedSection/AnimatedSection";
import styles from "./Testimonials.module.scss";

export function Testimonials() {
  return (
    <section id="testimonials" className={styles.section}>
      <AnimatedSection className={styles.header}>
        <p className="section-eyebrow">Traveler Notes</p>
        <h2 className="section-title">Guests Remember the Details</h2>
      </AnimatedSection>
      <div className={styles.grid}>
        {testimonials.map((review, index) => (
          <AnimatedSection className={styles.card} key={review.name} delay={index * 0.05}>
            <div className={styles.stars} aria-label="Five star review">
              {Array.from({ length: 5 }).map((_, starIndex) => (
                <Star key={starIndex} size={16} fill="currentColor" />
              ))}
            </div>
            <p>“{review.quote}”</p>
            <div className={styles.person}>
              <Image src={review.image} alt={`${review.name} traveler portrait`} width={54} height={54} />
              <div>
                <strong>{review.name}</strong>
                <span>{review.country}</span>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </section>
  );
}
