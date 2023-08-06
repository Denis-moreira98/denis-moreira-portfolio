import { styled } from "styled-components";

import avatarImg from "../../assets/avatar.jpeg";

export const StyledHome = styled.section`
   .home-container {
      row-gap: 7rem;
   }

   .home-content {
      display: flex;
      justify-content: space-between;
      padding-top: 5.5rem;
      column-gap: 2rem;
      align-items: center;

      
         h1 {
            font-size: 3rem;
            margin-bottom: 0.25rem;

            svg {
               font-size: 4rem;
               margin-left: 0.8rem;
               color: ${({ theme }) => theme.colors.main500};
               animation: hand_animate 3s ease-in-out infinite;
               animation-delay: 3s;
            }
         }

         h3 {
            position: relative;
            font-size: 1.5rem;
            padding-left: 5.4rem;
            font-weight: 1rem;
            margin-bottom: 1rem;

            &::before {
               content: "";
               position: absolute;
               top: 1.1rem;
               left: 0;
               width: 70px;
               height: 1px;
               background-color: ${({ theme }) => theme.colors.text};
            }
         }

         p {
            max-width: 400px;
            margin-bottom: 3rem;
         }

         button {
            margin: auto;
            background: ${({ theme }) => theme.colors.main500};

            &:hover {
               background: ${({ theme }) =>
                  theme.effects.hoverLight(theme.colors.main500)};
            }
         }
      }

      .avatar-container {
         display: flex;
         height: 100%;

         .home-img {
            background-image: url(${avatarImg});
            background-repeat: no-repeat;
            background-position: center;
            background-size: cover;
            width: 300px;
            height: 300px;
            justify-self: center;
            border-radius: 100%;
            box-shadow: inset 0 0 0 9px rgb(255 255 255 / 30%);
            animation: avatar_animate 8s ease-in-out infinite 1s;
         }

         .social-container {
            height: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 1rem;
            margin-left: 4rem;

            .social-icon {
               font-size: 2rem;
               color: ${({ theme }) => theme.colors.main500};
               transition: 0.3s;

               &:hover {
                  color: ${({ theme }) => theme.colors.second};
                  transform: scale(1.2);
               }
            }
         }
      }
   }

   .scrollDown {
      display: flex;
      justify-content: center;
   }

   .scrolldown-container {
      .scrolldown-button {
         display: flex;
         align-items: center;
         justify

         scroll-button{
            scale: 1.2;
         }

         .mouse-simple {
            font-size: 2.5rem;
            margin-bottom: 0.3rem;
            animation: scroll 2s ease infinite;
         }

         .hand-tap {
            display: none;
            font-size: 2.5rem;
            margin-bottom: 0.3rem;
            animation: scroll 2s ease infinite;

         }
         .arrow-down{
            font-size: 2.5rem;
            margin-bottom: 0.3rem;
            animation: scroll 2s ease infinite;
         }

        

         p {
            display: flex;
            font-weight: 700;
            font-size: 1rem;
            margin-right: 0.5rem;
            margin-left: 0.5rem;

            span {
               margin-right: 0.2rem;
            }

            .move {
               display: none;
            }
         }

         .arrow-down {
            font-size: 1.5rem;
         }
      }

      @keyframes scroll {
         0% {
            transform: translateY(0);
         }

         30% {
            transform: translateY(0.5rem);
         }
      }
   }

   /*=== Breakpoints ===*/
   /* For large devices */
   @media screen and (max-width: 992px) {
      .home-content {
         grid-template-columns: repeat(2, 1fr) 100px;
         column-gap: 1.25rem;

         .info-container {
            h1 {
               font-size: 2.25rem;

               svg {
                  font-size: 3rem;
               }
            }

            h3 {
               font-size: 1.2rem;
               padding-left: 3.75rem;
               margin-bottom: 0.5rem;

               &::before {
                  width: 42px;
                  top: 0.8rem;
               }
            }

            p {
               max-width: initial;
               margin-bottom: 2.5rem;
            }
         }

         .avatar-container {
            .home-img {
               width: 250px;
               height: 250px;
               box-shadow: inset 0 0 0 8px rgb(255 255 255 / 30%);
            }
         }
      }
   }

   /* For medium devices */
   @media screen and (max-width: 768px) {
      .home-content {
         display: flex;
         padding-top: 1rem;
         flex-direction: column-reverse;

         .info-container {
            grid-column: 1/3;
         }

         .avatar-container {
            .home-img {
               justify-self: initial;
               width: 200px;
               height: 200px;
               box-shadow: inset 0 0 0 6px rgb(255 255 255 / 30%);
            }

            .social-container {
               display: flex;
               flex-direction: column;
               order: 1;
               gap: 0.5rem;

               .social-icon {
                  font-size: 1.8rem;
                  color: ${({ theme }) => theme.colors.main500};
                  transition: 0.3s;

                  &:hover {
                     color: ${({ theme }) =>
                        theme.effects.hoverLight(theme.colors.main500)};
                  }
               }
            }
         }
      }

      .scrolldown-container {
         margin-top: -4rem;
         .scrolldown-button {
            justify-content: center;

            .mouse-simple {
               display: none;
            }

            .hand-tap {
               display: block;
               font-size: 2rem;
            }

            p {
               font-size: 0.9rem;

               .scroll {
                  display: none;
               }

               .move {
                  display: block;
               }
            }
         }
      }
   }

   /* For small devices */
   @media screen and (max-width: 350px) {
      .home-content {
         grid-template-columns: 0.5fr 3fr;
         padding-top: 3.5rem;

         .avatar-container {
            .home-img {
               width: 180px;
               height: 180px;
            }
         }

         .info-container {
            h1 {
               font-size: 2.25rem;
            }
         }
      }
   }

   @keyframes avatar_animate {
      0% {
         border-radius: 60% 40% 30% 70%/60% 30% 70% 40%;
      }

      50% {
         border-radius: 30% 60% 70% 40%/50% 60% 30% 60%;
      }

      100% {
         border-radius: 60% 40% 30% 70%/60% 30% 70% 40%;
      }
   }

   @keyframes hand_animate {
      0% {
         transform: rotate(0);
      }

      20% {
         transform: rotate(25deg);
      }

      50% {
         transform: rotate(0);
      }
   }
`;
