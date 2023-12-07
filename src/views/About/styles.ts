import { lighten } from "polished";
import { styled } from "styled-components";

export const StyledAbout = styled.section`
   .about-container {
      display: flex;

      .about-highlight {
         position: relative;
         display: flex;
         flex-direction: column;
         padding: 4rem 3rem;
         gap: 1rem;

         .curves-container {
            position: absolute;
            top: 0.5rem;
            display: grid;
            grid-template-columns: repeat(3, 32px);

            .line {
               display: block;
               width: 4.2rem;
               height: 5px;
               border-radius: 50%;
               background: ${({ theme }) => lighten(0.1, theme.colors.main500)};
               transform: rotate(90deg);

               &:nth-child(1) {
                  margin-top: 1rem;
                  margin-right: 1rem;
                  animation: downTop 2s ease infinite;
               }

               &:nth-child(2) {
                  margin-top: 1.6rem;
                  animation: topDown 2s ease infinite;
               }

               &:nth-child(3) {
                  margin-top: 1rem;
                  margin-right: 1rem;
                  animation: downTop 2s ease infinite;
               }
            }
         }

         > svg {
            margin-left: 0.5rem;
            font-size: 8rem;
         }
      }
      .div_button {
         display: flex;
         justify-content: center;
      }
      .p_about {
         text-align: justify;
      }
      .about-info {
         .info-container {
            grid-template-columns: repeat(3, 1fr);
            gap: 1rem;
            margin-bottom: 2rem;

            .about-box {
               background-color: ${({ theme }) => theme.colors.containerBg};
               box-shadow: ${({ theme }) => theme.effects.shadowAround};
               border-radius: 0.75rem;
               text-align: center;
               padding: 1rem 1.25rem;

               svg {
                  font-size: 2.5rem;
                  color: ${({ theme }) => lighten(0.1, theme.colors.main500)};
               }

               div {
                  p {
                     font-size: 0.9rem;

                     span {
                        color: ${({ theme }) =>
                           lighten(0.1, theme.colors.main500)};
                        font-size: 1.1rem;
                        font-weight: 500;
                     }
                  }
               }
            }
         }

         > p {
            width: 100%;
            margin-bottom: 2rem;
         }

         button {
            background: ${({ theme }) => theme.colors.main500};

            &:hover {
               background: ${({ theme }) => lighten(0.1, theme.colors.main500)};
            }
         }
      }
   }

   @keyframes downTop {
      0% {
         margin-top: 1rem;
      }

      30% {
         margin-top: 0.5rem;
      }
   }

   @keyframes topDown {
      0% {
         margin-top: 1.6rem;
      }

      30% {
         margin-top: 1rem;
      }
   }

   /*=== Breakpoints ===*/
   /* For large devices */
   @media screen and (max-width: 992px) {
      .about-container {
         flex-direction: column-reverse;
      }

      .about-highlight {
         align-items: center;
         justify-content: center;

         .curves-container {
            margin-left: -2.5rem;
         }
      }
   }

   /* For medium devices */
   @media screen and (max-width: 768px) {
      .about-highlight {
         margin-top: 4rem;
      }

      .about-container {
         .about-info {
            > p {
               padding: 0;
            }
         }
      }
   }

   @media screen and (max-width: 576px) {
      .about-info {
         .info-container {
            display: flex;
            flex-direction: column;
         }
      }
   }

   /* For small devices */
   @media screen and (max-width: 350px) {
   }
`;
