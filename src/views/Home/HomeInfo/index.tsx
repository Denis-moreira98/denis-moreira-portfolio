import { HandWaving, PaperPlaneTilt } from "phosphor-react";
import { Button } from "../../../components/Button";

export function HomeInfo() {
   return (
      <div className="info-container">
         <h1>
            Olá, eu sou Denis
            <HandWaving />
         </h1>
         <h2>Desenvolvedor de Software</h2>
         <p>
            A tecnologia é a capacidade de organizar o mundo para que não
            precisemos senti-lo.
         </p>
         <Button icon={<PaperPlaneTilt />}>
            <a href="#contact">Fale comigo</a>
         </Button>
      </div>
   );
}
