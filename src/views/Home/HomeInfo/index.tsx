import { FileArrowDown, HandWaving, PaperPlaneTilt } from "phosphor-react";
import { Button } from "../../../components/Button";
// import CV from "../../assets/cv-denis-moreira.pdf";

export function HomeInfo() {
   return (
      <div className="info-container">
         <div>
            <span className="span-info">Olá, eu sou</span>
            <h1>
               Denis Moreira
               <HandWaving />
            </h1>
            <h2>Desenvolvedor de Software</h2>
            <p>
               A tecnologia é a capacidade de organizar o mundo para que não
               precisemos senti-lo.
            </p>
         </div>
         <div className="button-container">
            <Button className="button-info" icon={<FileArrowDown />}>
               <a href="#" download>
                  Download CV
               </a>
            </Button>
            <Button className="button-info" icon={<PaperPlaneTilt />}>
               <a href="#contact">Fale comigo</a>
            </Button>
         </div>
      </div>
   );
}
