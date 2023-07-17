import { styled } from "styled-components";

export const StyledProjects = styled.section`
   projects-container {
      width: 800px;
      padding: 0.5rem;
      padding-bottom: 3rem;
   }

   .social-icon{
      font-size: 2rem;
      color: ${({ theme }) => theme.colors.main500}
      

      
   }
   

   .projects-card {
      background-color: ${({ theme }) => theme.colors.containerBg};
      box-shadow: ${({ theme }) => theme.effects.shadowAround};
      width:
      margin-bottom: 3rem;
      border-radius: 1.5rem;
      height: 360px;
      


      img {
         width: 100%;
         height: 250px;
         border-radius: 25px 25px 0 0;
         margin-bottom: 0.1rem;

      }

      h3 {
         padding-left: 10px;
         font-size: 1.2rem;
         font-weight: 500;
         margin-bottom: 0.25rem;
      }

      p {
         font-size: 0.9rem;
         margin-bottom: 1rem;
      }
      div {
         display: flex;
         flex-direction: row;
         justify-content: center;
         font-size: 15px;
         gap: 1rem;
         padding-bottom: ;
      }

      button {
         position: absolute;
         bottom: 1.5rem;
         right: 2rem;
         background-color: ${({ theme }) => theme.colors.main500};

         &:hover {
            background-color: ${({ theme }) =>
               theme.effects.hoverLight(theme.colors.main500)};
         }
      }
   }

   /* Swiper class */
   .swiper-pagination-bullet {
      background-color: ${({ theme }) => theme.colors.text} !important;
   }

   .swiper-pagination-bullet-active {
      background-color: ${({ theme }) => theme.colors.main500} !important;
   }

   /*=== Breakpoints ===*/
   /* For large devices */
   @media screen and (max-width: 992px) {
      .projects-container {
         width: initial;
      }

      
   }
`;
