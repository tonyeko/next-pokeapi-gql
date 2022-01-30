import { Typography } from "@/shared";
import styled from "@emotion/styled";

export const IdText = styled(Typography.Paragraph)`
  font-size: 0.8rem;
  margin: 0.5rem 0 0 0;
  opacity: 0.8;
`;

export const OwnedText = styled(Typography.Caption)`
  position: absolute;
  top: 0.375rem;
  left: -1.125rem;
  background-color: white;
  padding: 0.1rem 0.375rem;
  font-weight: 600;
  border: 2px solid #161a2b;
  border-radius: 0.25rem;
`;

export const NameText = styled(Typography.Paragraph)`
  margin-bottom: 0.2rem;
  font-weight: 700;
  word-wrap: break-word;
  text-align: center;
  text-transform: uppercase;
`;

export const TypesBadge = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 0 0.25rem 0;
  gap: 0.25rem;
  height: 1.25rem; // minimalize CLS
`;
