import { motion } from "framer-motion";
import { useLang } from "@/i18n/LanguageContext";
import type { Language } from "@/i18n/translations";

const options: { code: Language; label: string; flag: string }[] = [
  { code: "es", label: "ES", flag: "🇪🇸" },
  { code: "en", label: "EN", flag: "🇬🇧" },
];

export function LanguageSwitcher() {
  const { lang, setLang } = useLang();

  return (
    <div className="flex items-center gap-1 rounded-full border border-border bg-background/40 p-1 text-xs">
      {options.map((opt) => {
        const active = lang === opt.code;
        return (
          <button
            key={opt.code}
            type="button"
            onClick={() => setLang(opt.code)}
            aria-pressed={active}
            aria-label={opt.code === "es" ? "Cambiar a español" : "Switch to English"}
            className="relative px-3 py-1 uppercase tracking-wider transition-colors"
          >
            {active && (
              <motion.span
                layoutId="lang-pill"
                className="absolute inset-0 rounded-full bg-foreground"
                transition={{ type: "spring", stiffness: 320, damping: 28 }}
              />
            )}
            <span
              className={`relative z-10 flex items-center gap-1 ${
                active ? "text-background" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <span aria-hidden>{opt.flag}</span>
              {opt.label}
            </span>
          </button>
        );
      })}
    </div>
  );
}
