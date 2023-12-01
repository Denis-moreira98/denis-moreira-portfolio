import { styled } from "styled-components";

export const StyledSkills = styled.section`
   .skills-container {
      grid-template-columns: repeat(2, 350px);
      column-gap: 3rem;
      justify-content: center;
   }

   .skills-content {
      background-color: ${({ theme }) => theme.colors.containerBg};
      box-shadow: ${({ theme }) => theme.effects.shadowAround};
      padding: 2rem;
      border-radius: 1.25rem;

      h2 {
         font-size: 1.1rem;
         font-weight: 500;
         text-align: center;
         margin-bottom: 1.5rem;
      }
   }

   .skills-group {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 0.8rem;
   }

   .skill-item {
      display: flex;
      align-items: center;

      svg {
         font-size: 1.4rem;
         margin-right: 0.8rem;
         color: ${({ theme }) => theme.colors.main500};
      }

      div {
         h3 {
            font-size: 0.9rem;
            margin-bottom: -0.3rem;
            overflow: hidden;
         }

         span {
            font-size: 0.8rem;
         }
      }
   }

   /*=== Breakpoints ===*/
   /* For large devices */
   @media screen and (max-width: 992px) {
      .skills-container {
         display: flex;
         flex-direction: column;
         padding: 0 8rem;
      }
   }

   /* For medium devices */
   @media screen and (max-width: 768px) {
      .skills-container {
         padding: 0 4rem;
      }
   }

   @media screen and (max-width: 576px) {
      .skills-container {
         padding: 0 0rem;
      }

      .skills-content {
         padding: 1.5rem;
      }
   }

   /* For small devices */
   @media screen and (max-width: 350px) {
   }
`;
