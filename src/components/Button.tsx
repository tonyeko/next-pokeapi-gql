import { ForwardedRef, forwardRef } from "react";
import { AiOutlineLoading } from "react-icons/ai";
import styled from "@emotion/styled";
import { spin } from "@/shared";
import { color, fontSize, space } from "styled-system";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  leftIcon?: JSX.Element;
  isLoading?: boolean;
}

const StyledButton = styled.button<ButtonProps>`
  padding: 0.5rem 1rem;
  border: 0;
  border-radius: 0.375rem /* 6px */;
  font-weight: 600;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  column-gap: 0.5rem;
  box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
  cursor: ${({ disabled, isLoading }) =>
    disabled || isLoading ? "wait" : "pointer"};
  ${color}
  ${space}
  ${fontSize}
`;

const $Button = (
  { children, leftIcon, isLoading, disabled, ...props }: ButtonProps,
  ref: ForwardedRef<HTMLButtonElement>
) => (
  <StyledButton {...props} disabled={disabled || isLoading} ref={ref}>
    {isLoading ? <AiOutlineLoading css={spin} /> : leftIcon}
    {children}
  </StyledButton>
);

const Button = forwardRef($Button);

export default Button;
