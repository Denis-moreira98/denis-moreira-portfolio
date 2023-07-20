import { FileArrowDown } from "phosphor-react";

import { Button } from "../../components/Button";
import { AboutInfo } from "./Info";

//import cv from "../../assets/denismoreira.pdf";

import { StyledAbout } from "./styles";

export function About() {
   return (
      <StyledAbout className="section" id="about">
         <h2 className="section-title">Sobre mim</h2>
         <span className="section-subtitle">Minha introdução</span>

         <div className="about-container container">
            <div className="about-info">
               <AboutInfo />

               <p>
                  Sou graduado em Análise e Desenvolvimento de Sistemas ,
                  desenvolvedor de software, voltado para aplicações web. <br />
                  Os avanços tecnológicos vêm carregados de facilidades que
                  objetivam melhorar nosso desempenho nas tarefas do dia a dia,
                  seja tornando-as mais rápidas, mais seguras ou mais simples.
                  Fascinado pelos avanços tecnológicos, estou sempre em busca de
                  novos desafios para poder progredir na área. Me considero ágil
                  e consistente em aprender uma nova tecnologia e alta
                  adaptabilidade às mudanças, pronto para superar qualquer
                  desafio! Tenho como objetivo contribuir com meus
                  conhecimentos, aprender e evoluir profissionalmente. Possuo
                  foco em desenvolvimento com React, React Native, Nextjs, HTML,
                  CSS, Javascript, TypeScript e NodeJS dentre outras tecnologias
                  que uso para criar aplicações web de alto nível.
               </p>
               <div className="div_button">
                  <Button icon={<FileArrowDown />}>
                     <a href="#" download>
                        Download CV
                     </a>
                  </Button>
               </div>
            </div>
         </div>
      </StyledAbout>
   );
}
