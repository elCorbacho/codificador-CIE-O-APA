"use client";

import { useWizardStore } from "@/store/use-wizard-store";
import { CieoSelect, type CieoSelectOption } from "@/components/ui/cieo-select";

const CONTEXT_OPTIONS: CieoSelectOption[] = [
  {
    value: "laboratorio_ap",
    label: "Laboratorio de Anatomía Patológica (permite /6 y /9)",
  },
  {
    value: "registro_cancer",
    label: "Registro de cáncer / DEIS (solo /2 y /3)",
  },
];

export function ContextSelector() {
  const { ctx, setCtx, setStep } = useWizardStore();

  const handleChange = (value: string) => {
    const newCtx = value as "laboratorio_ap" | "registro_cancer";
    setCtx(newCtx);
    if (newCtx) {
      setStep(1);
    }
  };

  return (
    <div>
      <div className="mb-4">
        <CieoSelect
          value={ctx}
          onValueChange={handleChange}
          placeholder="-- Seleccionar contexto --"
          options={CONTEXT_OPTIONS}
          ariaLabel="Seleccionar contexto de uso (Laboratorio o Registro)"
        />
      </div>
      <p className="mt-2 text-xs leading-[1.5] text-muted">
        El contexto determina qué comportamientos están disponibles según §4.3.2 del PDF.
      </p>
    </div>
  );
}
