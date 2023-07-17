import { HomeInfo } from "./HomeInfo";
import { Social } from "./Social";

import { StyledHome } from "./styles";
import { ScrollDown } from "./ScrollDown";

export function Home() {
   return (
      <StyledHome className="section" id="home">
         <div className="home-container container grid">
            <div className="home-content grid">
               <HomeInfo />

               <div className="avatar-container">
                  <div className="home-img"></div>

                  <Social />
               </div>
            </div>
            <div className="scrollDown">
               <ScrollDown />
            </div>
         </div>
      </StyledHome>
   );
}
