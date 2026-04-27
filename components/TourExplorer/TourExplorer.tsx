"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { ArrowUpRight, Star } from "lucide-react";
import { TourCategory, TourType, tours } from "@/data/siteData";
import { AnimatedSection } from "@/components/ui/AnimatedSection/AnimatedSection";
import styles from "./TourExplorer.module.scss";

const categories: Array<"All" | TourCategory> = ["All", "Adventure", "Relax", "Wine", "Culture"];
const types: Array<"All" | TourType> = ["All", "Private", "Group"];
const regions = ["All", ...Array.from(new Set(tours.map((tour) => tour.region)))];

export function TourExplorer() {
  const [category, setCategory] = useState<"All" | TourCategory>("All");
  const [type, setType] = useState<"All" | TourType>("All");
  const [region, setRegion] = useState("All");
  const [duration, setDuration] = useState(6);
  const [price, setPrice] = useState(1000);

  const filteredTours = useMemo(
    () =>
      tours.filter((tour) => {
        return (
          (category === "All" || tour.category === category) &&
          (type === "All" || tour.type === type) &&
          (region === "All" || tour.region === region) &&
          tour.days <= duration &&
          tour.price <= price
        );
      }),
    [category, duration, price, region, type]
  );

  return (
    <section id="tours" className={styles.section}>
      <AnimatedSection className={styles.header}>
        <div>
          <p className="section-eyebrow">Private Tours</p>
          <h2 className="section-title">Find Your Perfect Georgian Experience</h2>
        </div>
        <p className="section-copy">
          Filter by pace, region and mood, then let our concierge polish the route around your exact travel style.
        </p>
      </AnimatedSection>

      <AnimatedSection className={styles.filters}>
        <div className={styles.filterGroup}>
          <span>Experience</span>
          <div className={styles.segmented}>
            {categories.map((item) => (
              <button className={item === category ? styles.active : ""} key={item} onClick={() => setCategory(item)}>
                {item}
              </button>
            ))}
          </div>
        </div>
        <label className={styles.selectLabel}>
          Region
          <select value={region} onChange={(event) => setRegion(event.target.value)}>
            {regions.map((item) => (
              <option key={item}>{item}</option>
            ))}
          </select>
        </label>
        <label className={styles.selectLabel}>
          Tour Type
          <select value={type} onChange={(event) => setType(event.target.value as "All" | TourType)}>
            {types.map((item) => (
              <option key={item}>{item}</option>
            ))}
          </select>
        </label>
        <label className={styles.rangeLabel}>
          Duration <strong>up to {duration} days</strong>
          <input type="range" min={1} max={6} value={duration} onChange={(event) => setDuration(Number(event.target.value))} />
        </label>
        <label className={styles.rangeLabel}>
          Price <strong>up to ${price}</strong>
          <input type="range" min={120} max={1000} step={10} value={price} onChange={(event) => setPrice(Number(event.target.value))} />
        </label>
      </AnimatedSection>

      <div className={styles.grid}>
        {filteredTours.map((tour, index) => (
          <AnimatedSection className={styles.card} key={tour.id} delay={index * 0.03}>
            <div className={styles.imageWrap}>
              <Image src={tour.image} alt={tour.title} fill sizes="(max-width: 768px) 100vw, 33vw" />
              <span className={styles.badge}>{tour.category}</span>
            </div>
            <div className={styles.cardBody}>
              <div className={styles.meta}>
                <span>{tour.duration}</span>
                <span>{tour.type}</span>
                <span className={styles.rating}>
                  <Star size={15} fill="currentColor" /> {tour.rating}
                </span>
              </div>
              <h3>{tour.title}</h3>
              <p>{tour.summary}</p>
              <div className={styles.cardFooter}>
                <strong>${tour.price}</strong>
                <a href="#contact" aria-label={`Book ${tour.title}`}>
                  Book
                  <ArrowUpRight size={17} />
                </a>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </section>
  );
}
