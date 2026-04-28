"use client";

import { useWizardStore } from "@/store/use-wizard-store";
import { CieoSelect } from "@/components/ui/cieo-select";

const GRADO_DIFERENCIACION = [
  { v: "1", d: "Grado I — bien diferenciado" },
  { v: "2", d: "Grado II — moderadamente diferenciado" },
  { v: "3", d: "Grado III — pobremente diferenciado" },
  { v: "4", d: "Grado IV — indiferenciado / anaplásico" },
  { v: "9", d: "No determinado / no señalado" },
];

const GRADO_LINAJE = [
  { v: "5", d: "Célula T" },
  { v: "6", d: "Célula B / pre-B / precursor B" },
  { v: "7", d: "Célula nula / no T y no B" },
  { v: "8", d: "Célula NK / citolítica natural" },
  { v: "9", d: "No determinado" },
];

export function GradeSelector() {
  const { comp, tipoGrado, setGrado } = useWizardStore();

  const isDisabled = !comp || comp === "0" || comp === "1";
  const esHema = tipoGrado === "linaje";

  const options = isDisabled
    ? [{ v: "9", d: "No procede (comportamiento /0 o /1)" }]
    : esHema
      ? GRADO_LINAJE
      : GRADO_DIFERENCIACION;

  const hint = esHema
    ? "§3.13.3 Tabla 22: los dígitos de linaje 5–8 prevalecen sobre diferenciación 1–4 (Regla G)."
    : "Regla G: si el informe indica dos grados, usar el mayor. Si no se especifica grado → 9.";

  const handleChange = (value: string) => {
    if (!value) return;
    const [c, d] = value.split("|");
    setGrado(c, d, tipoGrado);
  };

  return (
    <div>
      <div className="mb-3">
        <CieoSelect
          disabled={isDisabled}
          onValueChange={handleChange}
          placeholder="-- Grado --"
          options={options.map((g) => ({
            value: `${g.v}|${g.d}`,
            label: `${g.v} — ${g.d}`,
          }))}
          ariaLabel="Seleccionar grado o linaje celular"
        />
      </div>

      <p className="text-xs leading-[1.5] text-muted">
        {hint}
      </p>
    </div>
  );
}
