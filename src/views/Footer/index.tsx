import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";

import { StyledFooter } from "./styles";

export function Footer() {
   return (
      <StyledFooter>
         <div className="footer-container container">
            <h1>Denis Moreira</h1>

            <ul className="footer-list">
               <li>
                  <a href="#about" className="footer-link">
                     Sobre
                  </a>
               </li>
               <li>
                  <a href="#projects" className="footer-link">
                     Projetos
                  </a>
               </li>
            </ul>

            <div className="footer-social">
               <a
                  href="https://github.com/Denis-moreira98"
                  className="footer-social-link"
                  target="_blank"
               >
                  <FaGithub />
               </a>
               <a
                  href="https://www.linkedin.com/in/denismoreira/"
                  className="footer-social-link"
                  target="_blank"
               >
                  <FaLinkedin />
               </a>
               <a
                  href="https://wa.me/5581986140352"
                  className="footer-social-link"
                  target="_blank"
               >
                  <FaWhatsapp />
               </a>
            </div>

            <p>
               Copyright © {new Date().getFullYear()} Denis Moreira. Todos os
               direitos reservados.
            </p>
         </div>
      </StyledFooter>
   );
}
