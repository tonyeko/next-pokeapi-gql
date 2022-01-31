import Image from "next/image";
import { useState } from "react";

import { Button, Modal } from "@/components";
import { useMyPokemon } from "@/context";
import { useDisclosure } from "@/lib/hooks";
import { spin, Typography } from "@/shared";

import {
  CatchForm,
  CatchPokemonContainer,
  ModalButtonGroup,
  NicknameInput,
} from "./CatchButton.styles";
import { theme } from "@/utils";

type CatchButtonProps = {
  pokemon: PokeAPI.Pokemon;
};

const CatchButton = ({ pokemon }: CatchButtonProps) => {
  const { myPokemon, savePokemon } = useMyPokemon();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [nickname, setNickname] = useState<string>();
  const [isSuccessCatch, setIsSuccessCatch] = useState<boolean>(false);
  const [error, setError] = useState<string>();

  const handleCatch = () => {
    const random = Math.random();
    if (random > 0.5) {
      setIsSuccessCatch(true);
    }
    onOpen();
  };

  const handleSave = (nickname: string) => {
    if (pokemon) {
      savePokemon(pokemon, nickname);
      setNickname(undefined);
      handleCloseModal();
    }
  };

  const handleCloseModal = () => {
    onClose();
    setIsSuccessCatch(false);
  };

  const handleChangeNickname: React.ChangeEventHandler<HTMLInputElement> = (
    e
  ) => {
    setNickname(e.target.value);
    error && setError(undefined);
  };

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    if (!nickname) {
      setError("Nickname can't be empty");
    } else {
      const isExist = myPokemon.find(
        (pokemon) => pokemon.nickname === nickname
      );
      if (!isExist) {
        handleSave(nickname);
      } else {
        setError("Nickname already exist!");
      }
    }
  };

  return (
    <>
      <CatchPokemonContainer>
        <Button
          onClick={handleCatch}
          css={{
            "&:hover": {
              "div:first-of-type": spin,
            },
          }}
        >
          <Image src="/pokeball.svg" width="32" height="32" alt="pokeball" />
          <Typography.H4>Catch Pokemon</Typography.H4>
        </Button>
      </CatchPokemonContainer>
      <Modal isOpen={isOpen}>
        {isSuccessCatch ? (
          <>
            <Typography.H3
              css={{ fontWeight: 700, textTransform: "capitalize" }}
            >{`${pokemon.name} Catched!!`}</Typography.H3>
            <CatchForm onSubmit={handleSubmit} id="pokemon-nickname">
              <NicknameInput
                maxLength={80}
                name="nickname"
                placeholder="Input a nickname..."
                onChange={handleChangeNickname}
              />
              {error && (
                <Typography.Caption css={{ color: theme.color.general.red }}>
                  {error}
                </Typography.Caption>
              )}
            </CatchForm>
            <ModalButtonGroup>
              <Button onClick={handleCloseModal}>Release</Button>
              <Button type="submit" form="pokemon-nickname">
                Adopt
              </Button>
            </ModalButtonGroup>
          </>
        ) : (
          <>
            <Typography.H3
              css={{
                fontWeight: 700,
                textTransform: "capitalize",
                marginBottom: "1rem",
              }}
            >{`${pokemon.name} Run Away!!`}</Typography.H3>
            <ModalButtonGroup>
              <Button onClick={handleCloseModal}>Close</Button>
            </ModalButtonGroup>
          </>
        )}
      </Modal>
    </>
  );
};

export default CatchButton;
