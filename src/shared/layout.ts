import styled from "@emotion/styled";
import { layout, LayoutProps } from "styled-system";

export const CenteredDiv = styled.div<LayoutProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  & > * {
    margin-top: "30rem";
  }
  ${layout}
`;
