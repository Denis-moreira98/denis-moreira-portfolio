import { styled } from "styled-components";

export const StyledQualification = styled.section`
   .qualification-container {
      max-width: 768px;
      padding-bottom: 4rem;
   }

   .qualification-tabs {
      display: flex;
      justify-content: center;
      margin-bottom: 2rem;
   }

   .qualification-button {
      display: flex;
      align-items: center;
      font-size: 1.5rem;
      font-weight: 500;
      color: ${({ theme }) => theme.colors.title};
      margin: 0 1rem;
      cursor: pointer;

      &:hover {
         color: ${({ theme }) => theme.effects.hoverLight(theme.colors.title)};
      }

      &.active {
         color: ${({ theme }) => theme.colors.main500};
      }

      svg {
         font-size: 2rem;
         margin-right: 0.5rem;
      }
   }

   .qualifications-sections {
      display: grid;
      grid-template-columns: 0.5fr;
      justify-content: center;
   }

   .qualification-content {
      display: none;

      &.active {
         display: flex;
         flex-direction: column;
         align-items: center;
      }
   }

   .qualification-info {
      display: grid;
      grid-template-columns: 1fr max-content 1fr;
      column-gap: 1.5rem;
      width: 80%;

      &.left {
         .qualification-title {
            text-align: right;
         }

         .qualification-calendar {
            justify-content: flex-end;
         }
      }
   }

   .qualification-title {
      h3 {
         font-size: 1.1rem;
         font-weight: 500;
      }

      span {
         display: inline-block;
         font-size: 0.9rem;
         margin-bottom: 1rem;
      }
   }

   .qualification-calendar {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      font-size: 0.9rem;
   }

   .qualification-rounder {
      display: inline-block;
      width: 13px;
      height: 13px;
      background-color: ${({ theme }) => theme.colors.text};
      border-radius: 50%;
   }

   .qualification-line {
      display: block;
      width: 1px;
      height: 100%;
      background-color: ${({ theme }) => theme.colors.text};
      transform: translate(6px, -7px);
   }

   /*=== Breakpoints ===*/
   /* For large devices */
   @media screen and (max-width: 992px) {
      .qualification-container {
         margin-left: auto;
         margin-right: auto;
      }
   }

   /* For medium devices */
   @media screen and (max-width: 768px) {
      .qualification-container {
         margin-left: 1.5rem;
         margin-right: 1.5rem;
      }

      .qualification-info {
         width: 100%;
      }
   }

   @media screen and (max-width: 576px) {
      .qualifications-sections {
         grid-template-columns: initial;
      }

      .qualification-button {
         margin: 0 0.75rem;
      }

      .qualification-title {
         h3 {
            font-size: 1rem;
         }

         span {
            font-size: 0.8rem;
         }
      }

      .qualification-calendar {
         font-size: 0.8rem;
      }
   }

   /* For small devices */
   @media screen and (max-width: 350px) {
      .qualification-info {
         gap: 0.5rem;
      }
   }
`;
