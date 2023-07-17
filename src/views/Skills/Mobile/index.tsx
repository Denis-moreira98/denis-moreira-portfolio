import { FaReact } from "react-icons/fa";
import { SiExpo, SiFigma } from "react-icons/si";

export function Mobile() {
   return (
      <div className="skills-content">
         <h2>Mobile</h2>

         <div className="skills-box">
            <div className="skills-group">
               <div className="skill-item">
                  <FaReact />

                  <div>
                     <h3>React Native</h3>
                     <span>Básico</span>
                  </div>
               </div>

               <div className="skill-item">
                  <SiExpo />

                  <div>
                     <h3>Expo</h3>
                     <span>Básico</span>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}
