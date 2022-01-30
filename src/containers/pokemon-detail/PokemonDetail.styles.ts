import { Typography } from "@/shared";
import { theme } from "@/utils";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { up } from "styled-breakpoints";

export const customBorderStyles = (color: string) => {
  return css`
    border: 4px solid ${theme.color.general.black};
    border-radius: 0.375rem;
    box-shadow: 4px 5px 0 ${theme.color.type[color]};
  `;
};

export const Grid = styled.div`
  margin: 1rem 1rem 0;
  display: grid;
  grid-gap: 1.5rem;
  overflow: visible !important;
  grid-template-columns: repeat(1, minmax(0, 1fr));
  ${up("md")} {
    margin: 1rem;
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;

export const ImageContainer = styled.div<{ color: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  ${({ color }) => customBorderStyles(color)}
`;

export const TitleContainer = styled.div`
  display: flex;
  gap: 0.25rem;
  justify-content: center;
  flex-direction: column;
  margin: 1.5rem auto;
  ${up("md")} {
    margin: 3rem auto;
    flex-direction: row;
    gap: 1rem;
  }
  text-align: center;
`;

export const Title = styled(Typography.H1)`
  text-transform: uppercase;
  font-weight: 900;
  letter-spacing: 0.025rem;
`;

export const SubTitle = styled(Typography.H2)`
  font-weight: 700;
`;

export const ContentContainer = styled.div<{ color: string }>`
  display: flex;
  flex-direction: column;
  margin: 0.75rem auto 1.25rem;
  padding: 0.25rem;
  ${({ color }) => customBorderStyles(color)}
`;

export const ContentText = styled(Typography.Paragraph)`
  text-transform: capitalize;
  font-weight: 500;
  padding: 0.125rem 0.25rem;
`;

export const ContentFlex = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  border-radius: 0.375rem;
  margin: 0.5rem;
`;

export const MovesContentText = styled(ContentText)`
  border: 2px solid ${theme.color.general.black};
  border-radius: 0.375rem;
`;
