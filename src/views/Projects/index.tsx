import { StyledProjects } from "./styles";
import { useRef } from "react";
import { BsGithub, BsLink } from "react-icons/bs";
import { projectsData } from "./projectsData";

import { Swiper, SwiperSlide } from "swiper/react";

import { Pagination } from "swiper";

export function Projects() {
   const navigationPrevRef = useRef(null);
   const navigationNextRef = useRef(null);

   return (
      <StyledProjects className="container section" id="projects">
         <h2 className="section-title">Projetos</h2>
         <span className="section-subtitle">Projetos pessoais</span>

         <Swiper
            spaceBetween={10}
            navigation={true}
            grabCursor={true}
            mousewheel={true}
            speed={1000}
            loop={true}
            modules={[Pagination]}
            breakpoints={{
               576: {
                  slidesPerView: 1,
               },
               768: {
                  slidesPerView: 1.4,
               },
            }}
         >
            {projectsData.map(({ id, image, title, url, deploy }) => (
               <SwiperSlide className="projects-card" key={id}>
                  <img src={image} alt={title} />

                  <h3>{title}</h3>

                  <div className="div_link">
                     <a href={url} className="social-icon" target="_blank">
                        <BsGithub size={31} />
                     </a>
                     <a href={deploy} className="social-icon" target="_blank">
                        <BsLink size={31} />
                     </a>
                  </div>
               </SwiperSlide>
            ))}
         </Swiper>
      </StyledProjects>
   );
}
