import { styled } from "styled-components";

export const StyledScrollUp = styled.a`
   display: flex;
   align-items: center;
   justify-content: center;
   position: fixed;
   right: 2.5rem;
   bottom: -20%;
   background-color: ${({ theme }) => theme.colors.title};
   padding: 0.5rem 0.8rem;
   border-radius: 0.4rem;
   z-index: var(--z-tooltip);
   transition: all 0.4s;
   cursor: pointer;

   &.show {
      bottom: 3.8rem;
   }

   &:hover {
      background-color: ${({ theme }) =>
         theme.effects.hoverLight(theme.colors.title)};
   }

   svg {
      font-size: 1.5rem;
      color: ${({ theme }) => theme.colors.textContrast};
   }

   /*=== Breakpoints ===*/
   /* For large devices */
   @media screen and (max-width: 992px) {
      right: 1.5rem;
      padding: 0.3rem 0.5rem;

      svg {
         font-size: 1.25rem;
      }
   }

   /* For medium devices */
   @media screen and (max-width: 710px) {
      bottom: 4.5rem;
   }

   /* For small devices */
   @media screen and (max-width: 390px) {
      right: 1.5rem;
   }
`;
