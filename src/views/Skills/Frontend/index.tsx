import { FaCss3Alt, FaHtml5, FaReact } from "react-icons/fa";
import {
   SiJavascript,
   SiSass,
   SiStyledcomponents,
   SiTailwindcss,
   SiTypescript,
   SiBootstrap,
   SiRedux,
} from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";

export function Frontend() {
   return (
      <div className="skills-content">
         <h2>Frontend</h2>

         <div className="skills-box">
            <div className="skills-group">
               <div className="skill-item">
                  <FaHtml5 />

                  <div>
                     <h3>HTML</h3>
                  </div>
               </div>

               <div className="skill-item">
                  <FaCss3Alt />

                  <div>
                     <h3>CSS</h3>
                  </div>
               </div>

               <div className="skill-item">
                  <SiSass />

                  <div>
                     <h3>SASS</h3>
                  </div>
               </div>

               <div className="skill-item">
                  <SiTailwindcss />

                  <div>
                     <h3>Tailwind</h3>
                  </div>
               </div>

               <div className="skill-item">
                  <SiJavascript />

                  <div>
                     <h3>JavaScript</h3>
                  </div>
               </div>

               <div className="skill-item">
                  <SiTypescript />

                  <div>
                     <h3>TypeScript</h3>
                  </div>
               </div>

               <div className="skill-item">
                  <FaReact />

                  <div>
                     <h3>React.js</h3>
                  </div>
               </div>
               <div className="skill-item">
                  <SiRedux />

                  <div>
                     <h3>Redux</h3>
                  </div>
               </div>

               <div className="skill-item">
                  <TbBrandNextjs />

                  <div>
                     <h3>Next.js</h3>
                  </div>
               </div>
               <div className="skill-item">
                  <SiBootstrap />

                  <div>
                     <h3>Bootstrap</h3>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}
