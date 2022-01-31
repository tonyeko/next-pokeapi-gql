import styled from "@emotion/styled";
import { Typography } from "@/shared";
import { theme } from "@/utils";

export const PokemonCardContainer = styled.div<{ color: string }>`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0.5rem;
  transition: 0.25s all ease;
  border: 4px solid ${theme.color.general.black};
  border-radius: 0.375rem;
  box-shadow: 4px 5px 0 ${({ color }) => theme.color.type[color]};

  &:hover {
    box-shadow: 2px 3px 0 ${({ color }) => theme.color.type[color]};
  }

  &:active {
    box-shadow: none;
  }
`;

export const IdText = styled(Typography.Paragraph)`
  font-size: 0.8rem;
  margin: 0.5rem 0 0 0;
  opacity: 0.8;
`;

export const ToolbarText = styled(Typography.Caption)`
  position: absolute;
  top: 0.375rem;
  left: -1.125rem;
  background-color: white;
  padding: 0.1rem 0.375rem;
  font-weight: 600;
  border: 2px solid #161a2b;
  border-radius: 0.25rem;
  z-index: 10000;
`;

export const NameText = styled(Typography.Paragraph)`
  margin-bottom: 0.2rem;
  font-weight: 700;
  word-wrap: break-word;
  text-align: center;
  text-transform: uppercase;
  white-space: pre-wrap;
`;

export const TypesBadge = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 0 0.25rem 0;
  gap: 0.25rem;
  height: 1.25rem; // minimalize CLS
`;
