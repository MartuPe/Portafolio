import { useState } from "react";

/**
 * Muestra /perfil.jpg si existe. Si no, cae a un monograma elegante "MP".
 * Para poner tu foto: dejá el archivo en web/public/perfil.jpg
 */
export function Avatar({ alt }: { alt: string }) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        className="flex aspect-[4/5] w-full items-center justify-center rounded-sm"
        style={{
          background:
            "linear-gradient(160deg, oklch(0.3 0.02 60), oklch(0.22 0.03 40))",
        }}
        role="img"
        aria-label={alt}
      >
        <span className="font-emphasis text-7xl text-[oklch(0.8_0.13_55)] md:text-8xl">
          MP
        </span>
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-sm">
      <img
        src="/perfil.jpg"
        alt={alt}
        onError={() => setFailed(true)}
        className="aspect-[4/5] h-auto w-full object-cover"
      />
    </div>
  );
}
