import { motion } from "framer-motion";
import { useLang } from "@/i18n/LanguageContext";
import { fadeUp, stagger, viewportOnce } from "@/lib/motion";
import { stackGroups } from "@/lib/site";

export function Stack() {
  const { t, lang } = useLang();
  return (
    <section id="stack" className="border-t border-border px-6 py-24 md:px-10 md:py-36">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 flex flex-col gap-2">
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
            {t.stack.eyebrow}
          </p>
          <h2 className="font-display text-3xl tracking-tight md:text-4xl">{t.stack.title}</h2>
        </div>

        <motion.div
          variants={stagger(0, 0.06)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-1 gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-3"
        >
          {stackGroups.map((group) => (
            <motion.div key={group.label.en} variants={fadeUp}>
              <h3 className="mb-3 text-sm font-medium">{group.label[lang]}</h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-border bg-surface px-3 py-1 text-xs text-muted-foreground"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
