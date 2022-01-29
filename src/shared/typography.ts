import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { up } from "styled-breakpoints";
import { TypographyProps, typography } from "styled-system";

/**
 * Typography Styles
 * Based on TailwindCSS
 */

const textSmallStyles = css`
  font-size: 0.875rem /* 14px */;
  line-height: 1.25rem /* 20px */;
`;

const textBaseStyles = css`
  font-size: 1rem /* 16px */;
  line-height: 1.5rem; /* 24px */
`;

const textLargeStyles = css`
  font-size: 1.125rem /* 18px */;
  line-height: 1.75rem /* 28px */;
`;

const textXLStyles = css`
  font-size: 1.25rem /* 20px */;
  line-height: 1.75rem /* 28px */;
`;

const text2XLStyles = css`
  font-size: 1.5rem /* 24px */;
  line-height: 2rem /* 32px */;
`;

const text3XLStyles = css`
  font-size: 1.875rem /* 30px */;
  line-height: 2.25rem /* 36px */;
`;

const text4XLStyles = css`
  font-size: 2.25rem /* 36px */;
  line-height: 2.5rem /* 40px */;
`;

const text5XLStyles = css`
  font-size: 3rem /* 48px */;
  line-height: 1;
`;

/**
 * Typography Components
 */

export const H1 = styled.h1<TypographyProps>`
  font-weight: "bold";
  ${text3XLStyles}
  ${up("md")} {
    ${text5XLStyles}
  }
  ${typography}
`;

export const H2 = styled.h2<TypographyProps>`
  font-weight: "bold";
  ${text2XLStyles}
  ${up("md")} {
    ${text4XLStyles}
  }
  ${typography}
`;

export const H3 = styled.h3<TypographyProps>`
  font-weight: "bold";
  ${textXLStyles}
  ${up("md")} {
    ${text2XLStyles}
  }
  ${typography}
`;

export const H4 = styled.h4<TypographyProps>`
  font-weight: "bold";
  ${textLargeStyles}
  ${up("md")} {
    ${textXLStyles}
  }
  ${typography}
`;

export const Paragraph = styled.p<TypographyProps>`
  ${textSmallStyles}
  ${up("md")} {
    ${textBaseStyles}
  }
  ${typography}
`;

export const Typography = {
  H1,
  H2,
  H3,
  H4,
  Paragraph,
};
