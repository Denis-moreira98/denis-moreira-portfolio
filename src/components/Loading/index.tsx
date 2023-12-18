import { ImSpinner2 } from "react-icons/im";
import { LoadingContainer } from "./styles";

export function Loading() {
   return (
      <LoadingContainer>
         <div className="div_spinner">
            <ImSpinner2 size={25} />
         </div>
      </LoadingContainer>
   );
}
