import { Mail } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection/AnimatedSection";
import styles from "./Newsletter.module.scss";

export function Newsletter() {
  return (
    <AnimatedSection className={styles.newsletter}>
      <div>
        <p className="section-eyebrow">Private Dispatch</p>
        <h2>Receive seasonal routes and rare Georgian finds.</h2>
      </div>
      <form>
        <Mail size={19} />
        <input type="email" placeholder="Email address" aria-label="Email address" />
        <button type="submit">Subscribe</button>
      </form>
    </AnimatedSection>
  );
}
