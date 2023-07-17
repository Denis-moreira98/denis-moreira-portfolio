import { FileArrowDown } from "phosphor-react";
import { BsCup } from "react-icons/bs";

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
                  Graduado em Análise e Desenvolvimento de Sistemas ,
                  desenvolvedor de software, front-end. Os avanços tecnológicos
                  vêm carregados de facilidades que objetivam melhorar nosso
                  desempenho nas tarefas do dia a dia, seja tornando-as mais
                  rápidas, mais seguras ou mais simples. Fascinado pelos avanços
                  tecnológicos, busco uma vaga para progredir na área. Tenho
                  como objetivo contribuir com meus conhecimentos, aprender e
                  evoluir profissionalmente. Me considero ágil e consistente em
                  aprender uma nova tecnologia e alta adaptabilidade às
                  mudanças, pronto para superar qualquer desafio!
               </p>
               <div className="div_button">
                  <Button icon={<FileArrowDown />}>
                     <a href="#" download>
                        Baixar Currículo
                     </a>
                  </Button>
               </div>
            </div>
         </div>
      </StyledAbout>
   );
}
