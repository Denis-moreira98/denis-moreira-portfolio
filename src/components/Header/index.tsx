import {
   Student,
   Flask,
   House,
   Image,
   PaperPlaneTilt,
   SquaresFour,
   User,
   X,
} from "phosphor-react";
import { HeaderContainer } from "./styles";
import { useState } from "react";
import { ToggleDarkMode } from "../ToggleDarkMode";
import { useDarkMode } from "../../hooks/useDarkMode";
import logoImg from "../../assets/logo.svg";

export function Header() {
   const { darkMode, handleSetDarkMode } = useDarkMode();

   const [isOpenMenu, setIsOpenMenu] = useState(false);
   const [activeSection, setActiveSection] = useState("#home");

   /*=== Change background header ===*/
   window.addEventListener("scroll", () => {
      const header = document.querySelector(".header");

      if (scrollY >= 80) {
         header?.classList.add("scroll-header");
      } else {
         header?.classList.remove("scroll-header");
      }
   });

   return (
      <HeaderContainer className="header">
         <nav className="container">
            <div className="nav-logo">
               <a
                  href="#"
                  className="logo-link"
                  onClick={() => setActiveSection("#home")}
               >
                  <img src={logoImg} alt="logo D" />
               </a>
               <div className="toggle">
                  <ToggleDarkMode
                     darkMode={darkMode}
                     onHandleDarkMode={() => handleSetDarkMode()}
                     width="small"
                  />
               </div>
            </div>

            <div className={`nav-menu ${isOpenMenu ? "show" : ""}`}>
               <ul className="grid">
                  <li>
                     <a
                        href="#home"
                        className={`nav-link ${
                           activeSection === "#home" ? "active" : ""
                        }`}
                        onClick={() => setActiveSection("#home")}
                     >
                        <House /> Início
                     </a>
                  </li>
                  <li>
                     <a
                        href="#about"
                        className={`nav-link ${
                           activeSection === "#about" ? "active" : ""
                        }`}
                        onClick={() => setActiveSection("#about")}
                     >
                        <User /> Sobre
                     </a>
                  </li>
                  <li>
                     <a
                        href="#skills"
                        className={`nav-link ${
                           activeSection === "#skills" ? "active" : ""
                        }`}
                        onClick={() => setActiveSection("#skills")}
                     >
                        <Flask /> Habilidades
                     </a>
                  </li>

                  <li>
                     <a
                        href="#projects"
                        className={`nav-link ${
                           activeSection === "#projects" ? "active" : ""
                        }`}
                        onClick={() => setActiveSection("#projects")}
                     >
                        <Image /> Projetos
                     </a>
                  </li>
                  <li>
                     <a
                        href="#qualification"
                        className={`nav-link ${
                           activeSection === "#qualification" ? "active" : ""
                        }`}
                        onClick={() => setActiveSection("#qualification")}
                     >
                        <Student /> Qualificações
                     </a>
                  </li>
                  <li>
                     <a
                        href="#contact"
                        className={`nav-link ${
                           activeSection === "#contact" ? "active" : ""
                        }`}
                        onClick={() => setActiveSection("#contact")}
                     >
                        <PaperPlaneTilt /> Contato
                     </a>
                  </li>
               </ul>

               <X
                  className="nav-close"
                  onClick={() => setIsOpenMenu(!isOpenMenu)}
               />
            </div>

            <div
               className="nav-toggle"
               onClick={() => setIsOpenMenu(!isOpenMenu)}
            >
               <SquaresFour />
            </div>
         </nav>
      </HeaderContainer>
   );
}
