import { HandTap, ArrowCircleDown, MouseSimple } from "@phosphor-icons/react";

export function ScrollDown() {
   return (
      <div className="scrolldown-container">
         <a href="#about" className="scrolldown-button">
            <MouseSimple size={29} className="mouse-simple" />
            <HandTap size={29} className="hand-tap" />
            <p>
               <span className="scroll">Rolar para baixo</span>
               <span className="move">Mover para baixo</span>
            </p>
            <ArrowCircleDown size={29} className="arrow-down" />
         </a>
      </div>
   );
}
