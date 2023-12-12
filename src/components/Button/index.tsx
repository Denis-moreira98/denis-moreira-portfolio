import { ButtonHTMLAttributes, ReactNode } from "react";
import { StyledButton } from "./styles";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
   color?: string;
   typed?: "success" | "warning" | "info" | "error" | "transparent";
   size?: "small" | "normal" | "large";
   icon?: ReactNode;
   className?: string;
}

export function Button({
   children,
   color,
   typed,
   size,
   icon,
   className,
   ...props
}: ButtonProps) {
   return (
      <StyledButton
         size={size}
         color={color}
         typed={typed}
         {...props}
         className={className}
      >
         {children}
         {icon}
      </StyledButton>
   );
}
