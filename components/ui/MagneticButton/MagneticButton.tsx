"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import styles from "./MagneticButton.module.scss";

type MagneticButtonProps = {
  children: React.ReactNode;
  href?: string;
  variant?: "dark" | "light" | "gold";
  className?: string;
  type?: "button" | "submit";
};

export function MagneticButton({
  children,
  href,
  variant = "dark",
  className = "",
  type = "button"
}: MagneticButtonProps) {
  const ref = useRef<HTMLAnchorElement & HTMLButtonElement>(null);

  const move = (event: React.MouseEvent<HTMLElement>) => {
    const target = ref.current;
    if (!target) return;
    const rect = target.getBoundingClientRect();
    const x = event.clientX - rect.left - rect.width / 2;
    const y = event.clientY - rect.top - rect.height / 2;
    gsap.to(target, { x: x * 0.28, y: y * 0.34, duration: 0.45, ease: "power3.out" });
  };

  const leave = () => {
    if (!ref.current) return;
    gsap.to(ref.current, { x: 0, y: 0, duration: 0.75, ease: "elastic.out(1, 0.35)" });
  };

  const classes = `${styles.button} ${styles[variant]} ${className}`;

  if (href) {
    return (
      <a ref={ref} className={classes} href={href} onMouseMove={move} onMouseLeave={leave}>
        <span>{children}</span>
      </a>
    );
  }

  return (
    <button ref={ref} className={classes} type={type} onMouseMove={move} onMouseLeave={leave}>
      <span>{children}</span>
    </button>
  );
}
