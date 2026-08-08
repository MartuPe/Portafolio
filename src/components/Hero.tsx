import { motion } from "framer-motion";
import { useLang } from "@/i18n/LanguageContext";
import { fadeUp, stagger } from "@/lib/motion";
import { Avatar } from "./Avatar";

export function Hero() {
  const { t } = useLang();
  return (
    <section id="top" className="relative px-6 pt-36 pb-20 md:px-10 md:pt-48 md:pb-28">
      <div className="mx-auto max-w-6xl">
        <motion.div
          variants={stagger(0.1, 0.12)}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-12"
        >
          {/* Left: portrait */}
          <motion.div variants={fadeUp} className="md:col-span-5 md:col-start-1 md:mt-24">
            <Avatar alt="Retrato de Martina Abril Perrone" />
          </motion.div>

          {/* Right: copy */}
          <div className="md:col-span-6 md:col-start-7 md:self-center">
            <motion.h2
              variants={fadeUp}
              className="font-display text-4xl leading-[1.05] tracking-tight md:text-5xl"
            >
              {t.hero.welcome}
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="mt-6 max-w-md text-base text-muted-foreground md:text-lg"
            >
              {t.hero.intro}{" "}
              <span className="font-emphasis text-foreground">{t.hero.introItalic}</span>
              {t.hero.together}
            </motion.p>
            <motion.a
              variants={fadeUp}
              href="#about"
              className="group mt-8 inline-flex items-center gap-2 text-sm text-foreground"
            >
              {t.hero.aboutLink}
              <span className="inline-block transition-transform duration-300 group-hover:translate-y-0.5">
                ↓
              </span>
            </motion.a>
          </div>
        </motion.div>

        {/* Big name */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="font-display mt-16 text-[13vw] leading-none tracking-[-0.05em] md:mt-24 md:text-[9rem]"
        >
          Martina Perrone
        </motion.h1>

        <div className="mt-8 flex flex-wrap items-center justify-between gap-3 text-xs text-muted-foreground md:text-sm">
          <span>{t.hero.role}</span>
          <a href="#works" className="group inline-flex items-center gap-2">
            {t.hero.scroll}
            <span className="inline-block transition-transform duration-300 group-hover:translate-y-0.5">
              ↓
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
