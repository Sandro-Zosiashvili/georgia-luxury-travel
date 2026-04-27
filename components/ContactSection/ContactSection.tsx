import { CalendarDays, Mail, MapPin, Phone } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection/AnimatedSection";
import { MagneticButton } from "@/components/ui/MagneticButton/MagneticButton";
import styles from "./ContactSection.module.scss";

export function ContactSection() {
  return (
    <section id="contact" className={styles.section}>
      <AnimatedSection className={styles.copy}>
        <p className="section-eyebrow">Concierge Contact</p>
        <h2 className="section-title">Begin With a Private Travel Brief</h2>
        <p className="section-copy">
          Tell us how you like to travel. Within one business day, a Georgia specialist will shape a polished route with hotels,
          pace, access and budget clearly considered.
        </p>
        <div className={styles.info}>
          <span><Phone size={18} /> +995 32 2 11 45 77</span>
          <span><Mail size={18} /> concierge@georgianatelier.travel</span>
          <span><MapPin size={18} /> 12 Shota Rustaveli Avenue, Tbilisi, Georgia</span>
          <span><CalendarDays size={18} /> Daily consultations by appointment</span>
        </div>
      </AnimatedSection>
      <AnimatedSection className={styles.formWrap}>
        <form className={styles.form}>
          <label>Name<input name="name" type="text" placeholder="Your name" required /></label>
          <label>Email<input name="email" type="email" placeholder="you@example.com" required /></label>
          <label>Tour Interest<select name="interest" defaultValue="Kakheti Wine Prestige"><option>Kakheti Wine Prestige</option><option>Kazbegi Scenic Drive</option><option>Svaneti Alpine Luxury</option><option>Tailor-made Journey</option></select></label>
          <label>Date<input name="date" type="date" /></label>
          <label>Guests<input name="guests" type="number" min="1" placeholder="2" /></label>
          <label className={styles.full}>Message<textarea name="message" rows={5} placeholder="Preferred dates, hotel style, pace, celebrations or special requests" /></label>
          <MagneticButton type="submit" variant="dark">Send Request</MagneticButton>
        </form>
      </AnimatedSection>
    </section>
  );
}
