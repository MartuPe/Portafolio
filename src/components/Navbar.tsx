import { useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useLang } from "@/i18n/LanguageContext";
import { hasTestimonials } from "@/lib/site";
import { LanguageSwitcher } from "./LanguageSwitcher";

export function Navbar() {
  const { t } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (y) => setScrolled(y > 24));

  const links = [
    { href: "#works", label: t.nav.works },
    { href: "#stack", label: t.nav.stack },
    { href: "#about", label: t.nav.about },
    ...(hasTestimonials ? [{ href: "#testimonials", label: t.nav.testimonials }] : []),
    { href: "#contact", label: t.nav.contact },
  ];

  return (
    <motion.header
      initial={{ y: -32, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
      className="fixed inset-x-0 top-0 z-50 px-4 md:px-10"
    >
      <motion.nav
        animate={{
          backgroundColor: scrolled
            ? "color-mix(in oklab, var(--color-background) 70%, transparent)"
            : "color-mix(in oklab, var(--color-background) 0%, transparent)",
          backdropFilter: scrolled ? "blur(14px)" : "blur(0px)",
          borderColor: scrolled ? "var(--color-border)" : "transparent",
          marginTop: scrolled ? 12 : 20,
        }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="mx-auto flex max-w-6xl items-center justify-between rounded-full border px-4 py-2.5 md:px-5 md:py-3"
        style={{ WebkitBackdropFilter: scrolled ? "blur(14px)" : "blur(0px)" }}
      >
        <a href="#top" className="font-display text-base tracking-tight">
          Martina Perrone
        </a>
        <ul className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="group relative text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {l.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-foreground transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-3">
          <LanguageSwitcher />
          <a
            href="#contact"
            className="hidden rounded-full bg-foreground px-4 py-2 text-xs font-medium text-background transition-transform duration-200 hover:scale-[1.04] sm:inline-block"
          >
            {t.nav.cta}
          </a>
        </div>
      </motion.nav>
    </motion.header>
  );
}
