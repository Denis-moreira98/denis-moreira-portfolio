import {
   CalendarBlank,
   CalendarCheck,
   Certificate,
   Student,
} from "@phosphor-icons/react";

import { StyledQualification } from "./styles";
import { useState } from "react";

export function Qualification() {
   const [selectedTab, setSelectedTab] = useState(1);

   function toggleTab(index: number) {
      setSelectedTab(index);
   }

   return (
      <StyledQualification className="section" id="qualification">
         <h2 className="section-title">Qualificações</h2>
         <span className="section-subtitle">Minha jornada pessoal</span>

         <div className="qualification-container container">
            <div className="qualification-tabs">
               <div
                  className={`qualification-button ${
                     selectedTab === 1 ? "active" : ""
                  }`}
                  onClick={() => toggleTab(1)}
               >
                  <Student />
                  Educação
               </div>
               <div
                  className={`qualification-button ${
                     selectedTab === 2 ? "active" : ""
                  }`}
                  onClick={() => toggleTab(2)}
               >
                  <Certificate />
                  Experiência
               </div>
            </div>

            <div className="qualification-sections">
               <div
                  className={`qualification-content ${
                     selectedTab === 1 ? "active" : ""
                  }`}
               >
                  <div className="qualification-info">
                     <div></div>

                     <div>
                        <span className="qualification-rounder"></span>
                        <span className="qualification-line"></span>
                     </div>

                     <div className="qualification-title">
                        <h3>
                           Projeto Completo, NodeJS, React, React Native,
                           TypeScript
                        </h3>
                        <span>Udemy</span>

                        <div className="qualification-calendar">
                           <CalendarCheck />
                           2023 - 2023
                        </div>
                     </div>
                  </div>
                  <div className="qualification-info left">
                     <div className="qualification-title">
                        <h3>TypeScript do básico ao avançado</h3>
                        <span>Udemy</span>

                        <div className="qualification-calendar">
                           <CalendarCheck />
                           2023 - 2023
                        </div>
                     </div>

                     <div>
                        <span className="qualification-rounder"></span>
                        <span className="qualification-line"></span>
                     </div>
                  </div>

                  <div className="qualification-info">
                     <div></div>

                     <div>
                        <span className="qualification-rounder"></span>
                        <span className="qualification-line"></span>
                     </div>

                     <div className="qualification-title">
                        <h3>NextJs do zero ao avançado na prática</h3>
                        <span>Udemy</span>

                        <div className="qualification-calendar">
                           <CalendarCheck />
                           2023 - 2023
                        </div>
                     </div>
                  </div>

                  <div className="qualification-info left">
                     <div className="qualification-title">
                        <h3>React com TypeScript do zero ao avançado</h3>
                        <span>Udemy</span>

                        <div className="qualification-calendar">
                           <CalendarCheck />
                           2023 - 2023
                        </div>
                     </div>

                     <div>
                        <span className="qualification-rounder"></span>
                        <span className="qualification-line"></span>
                     </div>
                  </div>

                  <div className="qualification-info">
                     <div></div>

                     <div>
                        <span className="qualification-rounder"></span>
                        <span className="qualification-line"></span>
                     </div>

                     <div className="qualification-title">
                        <h3>JavaScript</h3>
                        <span>IFRS</span>

                        <div className="qualification-calendar">
                           <CalendarCheck />
                           2022 - 2022
                        </div>
                     </div>
                  </div>

                  <div className="qualification-info left">
                     <div className="qualification-title">
                        <h3>Desenvolvimento web completo</h3>
                        <span>Udemy</span>

                        <div className="qualification-calendar">
                           <CalendarCheck />
                           2021 - 2022
                        </div>
                     </div>

                     <div>
                        <span className="qualification-rounder"></span>
                        <span className="qualification-line"></span>
                     </div>
                  </div>

                  <div className="qualification-info">
                     <div></div>

                     <div>
                        <span className="qualification-rounder"></span>
                        <span className="qualification-line"></span>
                     </div>

                     <div className="qualification-title">
                        <h3>Analise e Desenvolvimento de Sistemas</h3>
                        <span>Faculdade Imaculada da Conceição do Recife</span>

                        <div className="qualification-calendar">
                           <CalendarCheck />
                           2020 - 2022
                        </div>
                     </div>
                  </div>
               </div>

               <div
                  className={`qualification-content ${
                     selectedTab === 2 ? "active" : ""
                  }`}
               >
                  {/* 
                  <div className="qualification-info">
                     <div></div>

                     <div>
                        <span className="qualification-rounder"></span>
                        <span className="qualification-line"></span>
                     </div>

                     <div className="qualification-title">
                        <h3>Desenvolvedor de Software</h3>
                        <span>Freelancer</span>

                        <div className="qualification-calendar">
                           <CalendarBlank />
                           Jan de 2023 - Presente
                        </div>
                     </div>
                  </div>
                  */}

                  <div className="qualification-info left">
                     <div className="qualification-title">
                        <h3>Desenvolvedor de Software</h3>
                        <span>Freelancer</span>

                        <div className="qualification-calendar">
                           <CalendarBlank />
                           Jan 2023 - Presente
                        </div>
                     </div>

                     <div>
                        <span className="qualification-rounder"></span>
                        <span className="qualification-line"></span>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </StyledQualification>
   );
}
