import Image from "next/image";
import { galleryImages } from "@/data/siteData";
import { AnimatedSection } from "@/components/ui/AnimatedSection/AnimatedSection";
import styles from "./Gallery.module.scss";

export function Gallery() {
  return (
    <section className={styles.section}>
      <AnimatedSection className={styles.header}>
        <p className="section-eyebrow">Photo Gallery</p>
        <h2 className="section-title">A Country Built for the Camera</h2>
      </AnimatedSection>
      <div className={styles.masonry}>
        {galleryImages.map((image, index) => (
          <AnimatedSection className={styles.tile} key={image} delay={index * 0.03}>
            <Image src={image} alt={`Georgia travel gallery image ${index + 1}`} fill sizes="(max-width: 768px) 50vw, 25vw" />
          </AnimatedSection>
        ))}
      </div>
    </section>
  );
}
