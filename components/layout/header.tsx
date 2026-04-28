export function Header() {
  return (
    <header className="relative overflow-hidden bg-ink py-[4.5rem] pb-[3.5rem] text-canvas">
      {/* Subtle rings (no shadows) */}
      <div className="pointer-events-none absolute -right-20 -top-[120px] h-[520px] w-[520px] rounded-full border-[80px] border-white/[0.06]" />
      <div className="pointer-events-none absolute bottom-[-160px] left-[35%] h-[420px] w-[420px] rounded-full border-[70px] border-white/[0.04]" />

      <div className="relative z-10 container mx-auto px-4">
        <p className="eyebrow mb-[.6rem] text-white/70">
          OMS · IARC · Min. Sanidad España 2021
        </p>

        <h1 className="mb-[.8rem] font-heading text-[clamp(2.4rem,5.2vw,4.2rem)] leading-[1.02] tracking-[-0.04em]">
          CIE-<em className="text-lila italic">O</em>-3
        </h1>

        <p className="max-w-[540px] font-body text-[16px] leading-[1.56] tracking-[0.016em] text-white/75">
          Clasificación Internacional de Enfermedades para Oncología — Tercera Edición, Primera Revisión. Sistema de codificación anatomopatológica.
        </p>

        <span className="mt-6 inline-block rounded-full border border-white/20 bg-white/10 px-[14px] py-[6px] font-code text-[11px] text-white/80">
          CIE-O-3.1 · Versión normativa
        </span>
      </div>
    </header>
  );
}
