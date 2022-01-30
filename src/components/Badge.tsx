import { Typography } from "@/shared/typography";
import { useTheme } from "@emotion/react";
import styled from "@emotion/styled";
import React from "react";

type BadgeProps = {
  variant?: "primary" | "ghost";
} & React.HTMLAttributes<HTMLParagraphElement>;

const Badge = ({ children, variant = "primary" }: BadgeProps) => {
  const theme = useTheme();
  const StyledBadge = styled(Typography.Caption)`
    ${variant === "ghost"
      ? `
      color: ${theme.color.type[(children as string) || "unknown"]};
      background-color: ${theme.color.general.white};
    `
      : `
      color: ${theme.color.general.black};
      background-color: ${
        theme.color.type[(children as string) || "unknown"]
      };`}
    /* color: ${theme.color.type[(children as string) || "unknown"]};
    background-color: ${theme.color.general.white}; */
    text-transform: uppercase;
    padding: 0.1rem;
    font-weight: 600;
    border-radius: 0.25rem;
  `;

  return <StyledBadge>{children}</StyledBadge>;
};

export default Badge;
