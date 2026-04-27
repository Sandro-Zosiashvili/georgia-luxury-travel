import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { articles } from "@/data/siteData";
import { AnimatedSection } from "@/components/ui/AnimatedSection/AnimatedSection";
import styles from "./BlogInsights.module.scss";

export function BlogInsights() {
  return (
    <section className={styles.section}>
      <AnimatedSection className={styles.header}>
        <p className="section-eyebrow">Insights</p>
        <h2 className="section-title">Notes From the Journey</h2>
      </AnimatedSection>
      <div className={styles.grid}>
        {articles.map((article, index) => (
          <AnimatedSection className={styles.card} key={article.title} delay={index * 0.05}>
            <div className={styles.image}>
              <Image src={article.image} alt={article.title} fill sizes="(max-width: 768px) 100vw, 33vw" />
            </div>
            <span>{article.tag}</span>
            <h3>{article.title}</h3>
            <p>{article.copy}</p>
            <a href="#contact">
              Read insight <ArrowUpRight size={16} />
            </a>
          </AnimatedSection>
        ))}
      </div>
    </section>
  );
}
