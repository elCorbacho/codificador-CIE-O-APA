interface RuleProps {
  letter: string;
  badgeColor: string;
  title: string;
  description: string;
  example?: string;
}

function RuleItem({ letter, badgeColor, title, description, example }: RuleProps) {
  return (
    <div className="group relative flex gap-6 rounded-2xl border border-transparent p-4 transition-all duration-normal ease-premium hover:border-hairline hover:bg-surface-soft/40 hover:translate-x-1">
      <div
        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl font-code text-[16px] font-bold text-canvas transition-all duration-normal ease-premium group-hover:scale-110 group-hover:shadow-sm"
        style={{ background: badgeColor }}
      >
        {letter}
      </div>
      <div className="flex-1">
        <h4 className="font-heading font-semibold text-[15px] mb-1 tracking-tight text-ink">
          {title}
        </h4>
        <p className="text-[13.5px] mb-3 text-muted leading-relaxed">
          {description}
        </p>
        {example && (
          <div className="inline-flex items-center gap-2 rounded-lg bg-surface-soft px-3 py-1.5 font-code text-[11px] text-primary border border-hairline/50">
            <span className="opacity-40 font-bold uppercase tracking-tighter">Ejemplo:</span>
            <span className="font-medium">{example}</span>
          </div>
        )}
      </div>
    </div>
  );
}

export function ReglasGrid() {
  const topoRules = [
    {
      letter: "A",
      badgeColor: "var(--color-primary)",
      title: "Localizaciones mal definidas",
      description:
        "Si el diagnóstico no especifica tejido de origen, usar el tejido específico del índice alfabético — no C76 (SAI).",
      example: "Carcinoma del brazo → C44.6 (piel), no C76.4",
    },
    {
      letter: "B",
      badgeColor: "var(--color-primary)",
      title: "Prefijos (peri-, para-, pre-...)",
      description:
        "Localización modificada por prefijo no listado → C76 (mal definida), salvo que el tipo tumoral indique tejido específico.",
      example: "Tumor peripancreático → C48.0 (retroperitoneo)",
    },
    {
      letter: "C",
      badgeColor: "var(--color-primary)",
      title: "Tumor que rebasa límites",
      description:
        "Tumor en dos o más subcategorías contiguas sin punto de origen determinable → subcategoría .8",
      example: "Carcinoma esofágico cervicotorácico → C15.8",
    },
    {
      letter: "D",
      badgeColor: "var(--color-topo-accent)",
      title: "Linfomas",
      description:
        "Ganglionares → C77._. Extraganglionares → sitio de origen. Múltiples regiones → C77.8. Sin localización → C80.9.",
      example: "Linfoma MALT gástrico → C16.9",
    },
    {
      letter: "E",
      badgeColor: "var(--color-topo-accent)",
      title: "Leucemias",
      description:
        "TODAS las leucemias → C42.1 (médula ósea). Excepción: sarcoma mieloide (9930/3) → localización del depósito.",
      example: "LMA → C42.1",
    },
  ];

  const morfoRules = [
    {
      letter: "F",
      badgeColor: "var(--color-error)",
      title: "Sistema matricial",
      description:
        "Usar comportamiento correcto aunque el término exacto no aparezca en CIE-O. La matriz permite cualquier combinación.",
      example: "Cordoma benigno → 9370/0",
    },
    {
      letter: "G",
      badgeColor: "var(--color-ambar)",
      title: "Grado: asignar el MAYOR",
      description:
        "Si el diagnóstico indica dos niveles de grado, usar el mayor. Los dígitos de linaje 5–8 prevalecen sobre diferenciación 1–4.",
      example: "Mod. dif. con áreas pobremente dif. → grado 3",
    },
    {
      letter: "H",
      badgeColor: "var(--color-error)",
      title: "Morfología asociada a localización",
      description:
        "Usar código topo sugerido si el diagnóstico no indica localización. Si hay localización indicada, usarla aunque difiera.",
      example: "Basocelular sin loc. → C44._",
    },
    {
      letter: "J",
      badgeColor: "var(--color-error)",
      title: "Diagnósticos compuestos",
      description:
        "Si el término compuesto no aparece, invertir el orden de las raíces de las palabras.",
      example: "Mixofibrosarcoma → Fibromixosarcoma (8811/3)",
    },
    {
      letter: "K",
      badgeColor: "var(--color-error)",
      title: "Múltiples términos",
      description:
        "Si un tumor tiene dos adjetivos con códigos distintos, usar el numéricamente mayor (más específico).",
      example: "Carcinoma escamoso transicional → 8120/3",
    },
  ];

  return (
    <div className="py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="mb-16 max-w-[720px]">
          <p className="eyebrow mb-2 text-muted">
            Directrices oficiales — §4.1 Tabla 14 del PDF
          </p>

          <h2 className="section-title mb-6 font-heading font-semibold text-ink">
            Reglas de codificación A–K
          </h2>

          <p className="section-description text-body text-[18px] leading-relaxed text-muted/90">
            El sistema normativo establece 10 reglas fundamentales para garantizar la interoperabilidad de los datos oncológicos a nivel global.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Topography rules - Span 5 */}
          <div className="lg:col-span-5 space-y-2">
            <div className="flex items-center gap-4 mb-8">
              <div className="h-px flex-1 bg-hairline" />
              <h3 className="font-heading text-xl tracking-tight text-primary whitespace-nowrap">
                Eje Topográfico
              </h3>
              <div className="h-px flex-1 bg-hairline" />
            </div>
            <div className="grid gap-2">
              {topoRules.map((rule) => (
                <RuleItem key={rule.letter} {...rule} />
              ))}
            </div>
          </div>

          {/* Morphology rules - Span 7 */}
          <div className="lg:col-span-7 space-y-2">
            <div className="flex items-center gap-4 mb-8">
              <div className="h-px flex-1 bg-hairline" />
              <h3 className="font-heading text-xl tracking-tight text-error whitespace-nowrap">
                Eje Morfológico
              </h3>
              <div className="h-px flex-1 bg-hairline" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-2">
              {morfoRules.map((rule) => (
                <RuleItem key={rule.letter} {...rule} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
