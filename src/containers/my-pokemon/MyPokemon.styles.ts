import styled from "@emotion/styled";
import { up } from "styled-breakpoints";

export const Grid = styled.div`
  margin: 1rem;
  display: grid;
  grid-gap: 1.5rem;
  overflow: visible !important;
  grid-template-columns: repeat(1, minmax(0, 1fr));
  ${up("sm")} {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  ${up("md")} {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
`;
