import styled from "styled-components";
export const LoadingContainer = styled.div`
   .div_spinner {
      position: absolute;
      max-height: 25px;
      max-width: 25px;
      right: 44%;
      top: 30%;
      animation: spin 1s linear infinite;
   }

   @keyframes spin {
      to {
         transform: rotate(360deg);
      }
   }
`;
