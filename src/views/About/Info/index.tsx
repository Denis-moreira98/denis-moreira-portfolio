import { Headset, SealCheck, Medal } from "@phosphor-icons/react";

export function AboutInfo() {
   return (
      <div className="info-container grid">
         <div className="about-box">
            <Medal />
            <div>
               <h3>Experiência</h3>
               <p>
                  mais de <span>3</span> anos desenvolvendo projetos reais
               </p>
            </div>
         </div>

         <div className="about-box">
            <SealCheck />
            <div>
               <h3>Finalizados</h3>
               <p>
                  mais de <span>6</span> projetos
               </p>
            </div>
         </div>

         <div className="about-box">
            <Headset />
            <div>
               <h3>Suporte</h3>
               <p>
                  online das <span>6h</span> ás <span>00h</span> todos os dias
               </p>
            </div>
         </div>
      </div>
   );
}
