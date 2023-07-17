import { HandTap, ArrowCircleDown, MouseSimple } from "@phosphor-icons/react";

export function ScrollDown() {
   return (
      <div className="scrolldown-container">
         <a href="#about" className="scrolldown-button">
            <MouseSimple className="mouse-simple" />
            <HandTap className="hand-tap" />
            <p>
               <span className="scroll">Rolar</span>
               <span className="move">Mover</span>
               para baixo
            </p>
            <ArrowCircleDown className="arrow-down" />
         </a>
      </div>
   );
}
