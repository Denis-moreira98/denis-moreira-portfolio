import { FileArrowDown } from "phosphor-react";

import { Button } from "../../components/Button";
import { AboutInfo } from "./Info";

// import CV from "../../assets/cv-denis-moreira.pdf";

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
                  Eu sou Denis Moreira, um profissional em crescimento no campo
                  de Análise e Desenvolvimento de Sistemas, com uma
                  especialização em desenvolvimento front-end e aplicações
                  centradas na experiência do usuário. Compreendo que os avanços
                  tecnológicos trazem consigo soluções que visam aprimorar nossa
                  eficiência diária, seja tornando tarefas mais ágeis, seguras
                  ou simples. Essa fascinação pelos avanços tecnológicos me
                  impulsiona a buscar constantemente novos desafios para
                  progredir na minha área. Meu foco é encontrar soluções
                  criativas que considerem minuciosamente cada detalhe, com o
                  objetivo de proporcionar uma experiência do usuário
                  excepcional e impactante. Minha capacidade de aprender
                  rapidamente novas tecnologias e minha habilidade em me adaptar
                  a mudanças me tornam ágil e consistente. Estou sempre pronto
                  para enfrentar qualquer desafio que se apresente. Tenho foco
                  em desenvolvimento utilizando React, React Native, Next.js,
                  HTML, CSS, JavaScript, TypeScript e Node.js, entre outras
                  tecnologias. Utilizo essas ferramentas para criar aplicações
                  web de alta qualidade, sempre visando atingir os mais altos
                  padrões.
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
