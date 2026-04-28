import type { ReactNode } from "react";

interface InfoCardProps {
  dotColor: string;
  title: string;
  children: ReactNode;
  extra?: ReactNode;
}

function InfoCard({ dotColor, title, children, extra }: InfoCardProps) {
  return (
    <div className="surface-card rounded-[14px] border border-hairline bg-canvas p-7">
      <div className="flex items-center gap-3 mb-5">
        <div
          data-testid="topography-dot"
          className="w-2.5 h-2.5 rounded-full flex-shrink-0"
          style={{ background: dotColor }}
        />
        <h3 className="font-heading text-[1.15rem] leading-[1.2]">
          {title}
        </h3>
      </div>
      {children}
      {extra}
    </div>
  );
}

export function InfoCards() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
      {/* Topography card - Span 7 */}
      <div className="lg:col-span-7">
        <InfoCard dotColor="var(--color-primary)" title="Eje 1 — Topografía">
          <p className="mb-6 text-[15px] leading-relaxed">
            Indica el <strong>sitio de origen</strong> del tumor. Mismo conjunto C00–C80 que la CIE-10,
            pero para todas las neoplasias (no solo malignas).
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <table className="mb-0 w-full text-[13px]">
              <tbody>
                <tr>
                  <td className="table-code font-code text-primary pr-4 pb-2">C</td>
                  <td className="pb-2">Prefijo fijo</td>
                </tr>
                <tr>
                  <td className="table-code font-code text-primary pr-4 pb-2">XX</td>
                  <td className="pb-2">Localización (órgano)</td>
                </tr>
                <tr>
                  <td className="table-code font-code text-primary pr-4 pb-2">.X</td>
                  <td className="pb-2">Sublocalización</td>
                </tr>
              </tbody>
            </table>
            <div className="hint-box rounded-xl bg-primary/5 border border-primary/10 p-4 text-[13px]">
              <p className="font-semibold mb-2">Códigos especiales:</p>
              <ul className="space-y-1 text-muted">
                <li><code className="text-primary font-semibold">C42.1</code> = médula ósea</li>
                <li><code className="text-primary font-semibold">C77._</code> = ganglios linfáticos</li>
              </ul>
            </div>
          </div>
        </InfoCard>
      </div>

      {/* Histology card - Span 5 */}
      <div className="lg:col-span-5">
        <InfoCard dotColor="var(--color-secondary)" title="Tipo histológico">
          <p className="mb-4 text-[14px] text-muted">
            El tipo celular que se transformó en neoplásico. Rangos M8000–M9989.
          </p>
          <div className="max-h-[220px] overflow-y-auto pr-2 scrollbar-thin">
            <table className="mb-0 w-full text-[12.5px] border-separate border-spacing-y-1">
              <tbody>
                <tr>
                  <td className="font-code font-semibold text-secondary pr-3">8000–8004</td>
                  <td className="text-muted">Neoplasias SAI</td>
                </tr>
                <tr>
                  <td className="font-code font-semibold text-secondary pr-3">8010–8084</td>
                  <td className="text-muted">Carcinomas epiteliales</td>
                </tr>
                <tr>
                  <td className="font-code font-semibold text-secondary pr-3">8140–8389</td>
                  <td className="text-muted">Adenocarcinomas</td>
                </tr>
                <tr>
                  <td className="font-code font-semibold text-secondary pr-3">8720–8790</td>
                  <td className="text-muted">Melanocíticos</td>
                </tr>
                <tr>
                  <td className="font-code font-semibold text-secondary pr-3">8800–8990</td>
                  <td className="text-muted">Tejidos blandos</td>
                </tr>
                <tr>
                  <td className="font-code font-semibold text-secondary pr-3">9590–9699</td>
                  <td className="text-muted">Linfomas</td>
                </tr>
              </tbody>
            </table>
          </div>
        </InfoCard>
      </div>

      {/* Behavior card - Span 6 */}
      <div className="lg:col-span-6">
        <InfoCard dotColor="var(--color-error)" title="Comportamiento (/X)">
          <div className="overflow-x-auto">
            <table className="w-full text-[13px]">
              <thead>
                <tr className="border-b border-hairline">
                  <th className="text-left py-3 font-medium text-muted uppercase tracking-wider text-[10px]">Dígito</th>
                  <th className="text-left py-3 font-medium text-muted uppercase tracking-wider text-[10px]">Significado</th>
                  <th className="text-left py-3 font-medium text-muted uppercase tracking-wider text-[10px]">Registro</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-hairline">
                <tr>
                  <td className="py-3 font-code font-bold text-secondary">/0</td>
                  <td className="py-3">Benigno</td>
                  <td className="py-3 text-muted">—</td>
                </tr>
                <tr>
                  <td className="py-3 font-code font-bold text-ambar">/1</td>
                  <td className="py-3">Incierto / borderline</td>
                  <td className="py-3 text-muted">—</td>
                </tr>
                <tr>
                  <td className="py-3 font-code font-bold text-primary">/2</td>
                  <td className="py-3">In situ / no invasor</td>
                  <td className="py-3 text-primary">✓</td>
                </tr>
                <tr>
                  <td className="py-3 font-code font-bold text-error">/3</td>
                  <td className="py-3 font-medium">Maligno primario</td>
                  <td className="py-3 text-error">✓</td>
                </tr>
              </tbody>
            </table>
          </div>
        </InfoCard>
      </div>

      {/* Grade card - Span 6 */}
      <div className="lg:col-span-6">
        <InfoCard dotColor="var(--color-ambar)" title="Grado / Linaje">
          <p className="text-[13px] text-muted mb-6">
            Tumores sólidos: diferenciación. Hematología: linaje celular.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-xl p-4 bg-muted/5 border border-hairline">
              <span className="block text-[11px] font-bold text-ambar uppercase tracking-tight mb-3">Diferenciación</span>
              <div className="space-y-1 font-code text-[12px] leading-relaxed">
                <span className="text-ink">1</span> → bien dif.<br />
                <span className="text-ink">2</span> → mod. dif.<br />
                <span className="text-ink">3</span> → pobre dif.<br />
                <span className="text-ink">4</span> → indiferenciado
              </div>
            </div>
            <div className="rounded-xl p-4 bg-muted/5 border border-hairline">
              <span className="block text-[11px] font-bold text-lila uppercase tracking-tight mb-3">Linaje Hema</span>
              <div className="space-y-1 font-code text-[12px] leading-relaxed">
                <span className="text-ink">5</span> → célula T<br />
                <span className="text-ink">6</span> → célula B<br />
                <span className="text-ink">7</span> → célula nula<br />
                <span className="text-ink">8</span> → célula NK
              </div>
            </div>
          </div>
        </InfoCard>
      </div>
    </div>
  );
}
