import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import styles from "./Footer.module.scss";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.brand}>
        <a href="#home" className={styles.logo}><span>GA</span><strong>Georgian Atelier</strong></a>
        <p>Premium private journeys through Georgia&apos;s cities, mountains, wine country and coast.</p>
      </div>
      <div className={styles.links}>
        <h3>Explore</h3>
        <a href="#tours">Tours</a>
        <a href="#destinations">Destinations</a>
        <a href="#experiences">Experiences</a>
        <a href="#contact">Contact</a>
      </div>
      <div className={styles.links}>
        <h3>Contact</h3>
        <span><Phone size={16} /> +995 32 2 11 45 77</span>
        <span><Mail size={16} /> concierge@georgianatelier.travel</span>
        <span><MapPin size={16} /> 12 Shota Rustaveli Avenue, Tbilisi, Georgia</span>
      </div>
      <div className={styles.socials}>
        <h3>Social</h3>
        <div>
          <a href="#home" aria-label="Instagram"><Instagram size={18} /></a>
          <a href="#home" aria-label="Facebook"><Facebook size={18} /></a>
          <a href="#home" aria-label="LinkedIn"><Linkedin size={18} /></a>
        </div>
      </div>
      <div className={styles.bottom}>
        <span>© 2026 Georgian Atelier Travel</span>
        <span>Luxury journeys, privately arranged</span>
      </div>
    </footer>
  );
}
