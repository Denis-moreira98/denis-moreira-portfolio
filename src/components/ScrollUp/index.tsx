import { ArrowFatLineUp } from "@phosphor-icons/react";
import { StyledScrollUp } from "./styles";

export function ScrollUp() {
   window.addEventListener("scroll", () => {
      const scrollUp = document.querySelector(".scrollup");

      if (scrollY >= 560) {
         scrollUp?.classList.add("show");
      } else {
         scrollUp?.classList.remove("show");
      }
   });

   return (
      <StyledScrollUp href="#" className="scrollup">
         <ArrowFatLineUp />
      </StyledScrollUp>
   );
}
