export function CodeBox() {
  return (
    <div className="code-surface rounded-[14px] p-8 text-white">
      <p className="code-eyebrow mb-6">
        Estructura del código completo
      </p>

      <div className="flex flex-wrap gap-1 items-stretch">
        {/* Topography: C prefix */}
        <div
          className="flex-1 min-w-[90px] rounded-[10px] p-4 text-center"
          style={{ background: "var(--color-primary)", border: "1px solid var(--color-primary-active)" }}
        >
          <span className="text-[2rem] font-semibold leading-tight block">C</span>
          <span className="code-cell-note">
            Prefijo
            <br />
            topografía
          </span>
        </div>

        {/* Topography: 2 digits */}
        <div
          className="flex-1 min-w-[90px] rounded-[10px] p-4 text-center"
          style={{ background: "var(--color-primary)", border: "1px solid var(--color-primary-active)" }}
        >
          <span className="text-[2rem] font-semibold leading-tight block">XX</span>
          <span className="code-cell-note">
            Localización
            <br />
            (2 dígitos)
          </span>
        </div>

        {/* Separator */}
        <span className="flex items-center text-white/30 text-[1.5rem] px-1 self-center">.</span>

        {/* Topography: sublocation */}
        <div
          className="flex-1 min-w-[90px] rounded-[10px] p-4 text-center"
          style={{ background: "var(--color-primary)", border: "1px solid var(--color-primary-active)" }}
        >
          <span className="text-[2rem] font-semibold leading-tight block">X</span>
          <span className="code-cell-note">
            Sublocalización
            <br />
            (decimal)
          </span>
        </div>

        {/* Plus separator */}
        <span className="mx-[10px] self-center px-2 text-[1.2rem] text-white/20">
          +
        </span>

        {/* Histology: 4 digits */}
        <div
          className="flex-1 min-w-[90px] rounded-[10px] p-4 text-center"
          style={{ background: "var(--color-secondary)", border: "1px solid var(--color-secondary)" }}
        >
          <span className="text-[2rem] font-semibold leading-tight block">XXXX</span>
          <span className="code-cell-note">
            Tipo histológico
            <br />
            (4 dígitos)
          </span>
        </div>

        {/* Slash separator */}
        <span className="flex items-center text-white/30 text-[1.5rem] px-1 self-center">/</span>

        {/* Behavior */}
        <div
          className="flex-1 min-w-[90px] rounded-[10px] p-4 text-center"
          style={{ background: "var(--color-error)", border: "1px solid var(--color-error-hover)" }}
        >
          <span className="text-[2rem] font-semibold leading-tight block">X</span>
          <span className="code-cell-note">
            Comporta-
            <br />
            miento
          </span>
        </div>

        {/* Grade */}
        <div
          className="flex-1 min-w-[90px] rounded-[10px] p-4 text-center"
          style={{ background: "var(--color-ink)", border: "1px solid var(--color-ink)" }}
        >
          <span className="text-[2rem] font-semibold leading-tight block">X</span>
          <span className="code-cell-note">
            Grado /
            <br />
            Linaje
          </span>
        </div>
      </div>

      {/* Example */}
      <div className="mt-6 border-t border-white/10 pt-6">
        <p className="code-eyebrow mb-3">
          Ejemplo — Carcinoma escamoso pobremente diferenciado, lóbulo superior del pulmón
        </p>
        <div className="flex flex-wrap gap-4 items-center">
          <div>
            <div className="text-[1.6rem] font-semibold" style={{ color: "var(--color-primary)" }}>
              C34.1
            </div>
            <div className="code-example-detail">
              Lóbulo superior del pulmón
            </div>
          </div>
          <span style={{ color: "rgba(255,255,255,.2)", fontSize: "1.5rem" }}>+</span>
          <div>
            <div className="text-[1.6rem] font-semibold" style={{ color: "var(--color-secondary)" }}>
              8070/<span style={{ color: "var(--color-error)" }}>3</span>
              <span style={{ color: "var(--color-primary-disabled)" }}>3</span>
            </div>
            <div className="code-example-detail">
              Carcinoide escamoso / maligno / pobre dif.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
