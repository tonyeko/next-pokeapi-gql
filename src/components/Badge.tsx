import { Typography } from "@/shared/typography";
import { useTheme } from "@emotion/react";
import styled from "@emotion/styled";
import React from "react";

const Badge = ({ children }: React.HTMLAttributes<HTMLParagraphElement>) => {
  const theme = useTheme();
  const StyledBadge = styled(Typography.Caption)`
    color: ${theme.color.type[(children as string) || "unknown"]};
    text-transform: uppercase;
    padding: 0.1rem;
    font-weight: 600;
    border-radius: 0.25rem;
  `;

  return <StyledBadge>{children}</StyledBadge>;
};

export default Badge;
