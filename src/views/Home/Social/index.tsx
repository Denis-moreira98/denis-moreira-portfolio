import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";

export function Social() {
   return (
      <div className="social-container">
         <a
            href="https://github.com/Denis-moreira98"
            className="social-icon"
            target="_blank"
         >
            <FaGithub />
         </a>
         <a
            href="https://www.linkedin.com/in/denismoreira/"
            className="social-icon"
            target="_blank"
         >
            <FaLinkedin />
         </a>
         <a
            href="https://wa.me/5581986140352"
            className="social-icon"
            target="_blank"
         >
            <FaWhatsapp />
         </a>
      </div>
   );
}
