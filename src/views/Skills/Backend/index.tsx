import { FaDocker, FaNodeJs } from "react-icons/fa";
import {
   SiExpress,
   SiMongodb,
   SiMysql,
   SiPostgresql,
   SiPrisma,
} from "react-icons/si";
import { BsFiletypeSql } from "react-icons/bs";

export function Backend() {
   return (
      <div className="skills-content">
         <h2>Backend</h2>

         <div className="skills-box">
            <div className="skills-group">
               <div className="skill-item">
                  <FaNodeJs />

                  <div>
                     <h3>Node.js</h3>
                     <span>Básico</span>
                  </div>
               </div>

               <div className="skill-item">
                  <SiExpress />

                  <div>
                     <h3>Express</h3>
                     <span>Básico</span>
                  </div>
               </div>

               <div className="skill-item">
                  <SiPostgresql />

                  <div>
                     <h3>PostgreSQL</h3>
                     <span>básico</span>
                  </div>
               </div>

               <div className="skill-item">
                  <SiMysql />

                  <div>
                     <h3>MySQL</h3>
                     <span>Básico</span>
                  </div>
               </div>

               <div className="skill-item">
                  <SiPrisma />

                  <div>
                     <h3>Prisma</h3>
                     <span>Básico</span>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}
