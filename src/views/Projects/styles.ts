import { styled } from "styled-components";

export const StyledProjects = styled.section`
   .projects-container {
      width: 968px;
      padding: 0.5rem;
      padding-bottom: 3rem;
   }

   .social-icon {
      margin-top: 5px;
      font-size: 2rem;
      color: ${({ theme }) => theme.colors.main500};
      transition: 0.5s;
   }
   .social-icon:hover {
      color: ${({ theme }) => theme.colors.second};
      transform: scale(1.2);
   }

   .projects-card {
      background-color: ${({ theme }) => theme.colors.containerBg};
      box-shadow: ${({ theme }) => theme.effects.shadowAround};
      margin-bottom: 3rem;
      border-radius: 1.5rem;
      width: 100%;
      height: 100%;

      img {
         width: 100%;
         height: 370px;
         border-radius: 25px 25px 0 0;
         margin-bottom: 0.1rem;
         object-fit: cover;
      }

      h3 {
         text-align: center;
         padding-left: 10px;
         font-size: 1.2rem;
         font-weight: 500;
         margin-bottom: 0.25rem;
      }

      div {
         display: flex;
         flex-direction: row;
         justify-content: center;
         font-size: 15px;
         gap: 1rem;
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
   @media screen and (max-width: 521px) {
      .projects-card {
         img {
            height: 250px;
         }
         h3 {
            display: block;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
         }
      }
   }
   @media screen and (max-width: 428px) {
      .projects-card {
         img {
            height: 200px;
         }
      }
   }
`;
