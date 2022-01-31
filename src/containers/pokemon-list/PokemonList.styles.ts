import styled from "@emotion/styled";
import InfiniteScroll from "react-infinite-scroll-component";
import { up } from "styled-breakpoints";

export const InfiniteScrollGrid = styled(InfiniteScroll)`
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

export const LoadingImageContainer = styled.div`
  display: flex;
  justify-content: center;
  grid-column: span 1 / span 1;
  ${up("sm")} {
    grid-column: span 2 / span 2;
  }
  ${up("md")} {
    grid-column: span 4 / span 4;
  }
`;
