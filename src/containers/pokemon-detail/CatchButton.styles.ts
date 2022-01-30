import { theme } from "@/utils";
import styled from "@emotion/styled";

export const CatchPokemonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 2rem auto 2.5rem;
`;

export const ModalButtonGroup = styled.div`
  display: flex;
  gap: 0.5rem;
  justify-content: flex-end;
  margin: 0.375rem 0;
`;

export const CatchForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  margin: 0.5rem 0 1rem;
`;

export const NicknameInput = styled.input`
  height: 1.5rem;
  border: 2px solid ${theme.color.general.black};
`;
