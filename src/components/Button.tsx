import { ForwardedRef, forwardRef } from "react";
import { AiOutlineLoading } from "react-icons/ai";
import styled from "@emotion/styled";
import { spin } from "@/shared";
import { color, fontSize, space } from "styled-system";
import { theme } from "@/utils";

type ButtonProps = {
  leftIcon?: JSX.Element;
  isLoading?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const StyledButton = styled.button<ButtonProps>`
  padding: 0.5rem 1rem;
  border: 2px solid ${theme.color.general.black};
  border-radius: 0.375rem /* 6px */;
  font-weight: 600;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  column-gap: 0.5rem;
  cursor: ${({ disabled, isLoading }) =>
    disabled || isLoading ? "wait" : "pointer"};
  transition: 0.25s all ease;
  box-shadow: 4px 5px 0 ${theme.color.general.black};
  &:hover {
    box-shadow: none;
  }
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
