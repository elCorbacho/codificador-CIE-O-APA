"use client";

import { useState } from "react";
import { useWizardStore } from "@/store/use-wizard-store";
import { CieoSelect } from "@/components/ui/cieo-select";

const COMP_TODOS = [
  { v: "0", d: "Benigno" },
  { v: "1", d: "Incierto / borderline" },
  { v: "2", d: "In situ / no invasor" },
  { v: "3", d: "Maligno primario" },
  { v: "6", d: "Maligno — metástasis (solo AP)" },
  { v: "9", d: "Incierto primario/metástasis (solo AP)" },
];

export function BehaviorSelector() {
  const { ctx, hist, setComp, setStep } = useWizardStore();
  const [alerta, setAlerta] = useState("");

  const isDisabled = !ctx || !hist;
  const soloLab = ctx === "laboratorio_ap";
  const options = COMP_TODOS.filter((c) => soloLab || (c.v !== "6" && c.v !== "9"));

  const handleChange = (value: string) => {
    if (!value) return;
    const [c, d] = value.split("|");
    setComp(c, d);
    setStep(4);

    // Special alerts
    if (c === "0" || c === "1") {
      setAlerta("Regla G + §4.6: para comportamiento /0 y /1, el sexto dígito debe ser 9 (no procede asignar grado).");
    } else if (hist === "8077" && c === "3") {
      setAlerta("⚠ Atención: para NIC III / CIN III el comportamiento correcto según el PDF es /2 (in situ), no /3. Solo cambiar a /3 si hay invasión documentada.");
    } else if (hist === "9930") {
      setAlerta("★ EXCEPCIÓN Regla E: sarcoma mieloide → NO usar C42.1. Codificar según localización del depósito.");
    } else if (hist === "9866") {
      setAlerta("★ Leucemia promielocítica aguda (PML-RARA): URGENCIA oncohematológica. Verificar que la topografía sea C42.1 (Regla E).");
    } else {
      setAlerta("");
    }
  };

  return (
    <div>
      <div className="mb-3">
        <CieoSelect
          disabled={isDisabled}
          onValueChange={handleChange}
          placeholder="-- Comportamiento --"
          options={options.map((c) => ({
            value: `${c.v}|${c.d}`,
            label: `/${c.v} — ${c.d}`,
          }))}
          ariaLabel="Seleccionar comportamiento del tumor"
        />
      </div>

      {alerta && (
        <div className="alert-warn mb-3 rounded-lg p-3 text-sm">
          {alerta}
        </div>
      )}

      <p className="text-xs leading-[1.5] text-muted">
        Regla F: el sistema matricial permite cualquier comportamiento. El patólogo tiene la última palabra.
      </p>
    </div>
  );
}
