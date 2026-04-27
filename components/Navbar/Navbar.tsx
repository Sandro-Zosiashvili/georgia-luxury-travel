"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { navItems } from "@/data/siteData";
import { MagneticButton } from "@/components/ui/MagneticButton/MagneticButton";
import styles from "./Navbar.module.scss";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 28);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}>
      <a href="#home" className={styles.logo} aria-label="Georgian Atelier Travel home">
        <span>GA</span>
        <strong>Georgian Atelier</strong>
      </a>

      <nav className={`${styles.links} ${open ? styles.open : ""}`} aria-label="Primary navigation">
        {navItems.map((item) => (
          <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setOpen(false)}>
            {item}
          </a>
        ))}
      </nav>

      <div className={styles.actions}>
        <MagneticButton href="#contact" variant={scrolled ? "dark" : "light"}>
          Book Now
        </MagneticButton>
        <button className={styles.menu} onClick={() => setOpen((value) => !value)} aria-label="Toggle menu">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
    </header>
  );
}
