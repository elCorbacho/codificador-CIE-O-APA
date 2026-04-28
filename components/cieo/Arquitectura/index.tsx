import { CodeBox } from "./code-box";
import { InfoCards } from "./info-cards";

export function ArquitecturaSection() {
  return (
    <div className="py-10">
      <div className="container mx-auto px-4">
        <p
          className="font-code uppercase text-muted"
          style={{
            fontSize: "10.5px",
            letterSpacing: ".14em",
            marginBottom: ".4rem",
          }}
        >
          Estructura fundamental
        </p>

        <h2
          className="font-heading mb-3 text-ink"
          style={{
            fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
            lineHeight: 1.15,
          }}
        >
          Código de 10 caracteres
        </h2>

        <p
          className="text-muted"
          style={{
            fontSize: "14.5px",
            maxWidth: "600px",
            marginBottom: "2rem",
          }}
        >
          Cada diagnóstico oncológico genera exactamente dos códigos simultáneos: un código de
          topografía y un código de morfología. Juntos suman 10 caracteres.
        </p>

        <div className="flex flex-col gap-5">
          <div>
            <CodeBox />
          </div>
          <div>
            <InfoCards />
          </div>
        </div>
      </div>
    </div>
  );
}
