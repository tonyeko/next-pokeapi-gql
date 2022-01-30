import { Container, Typography } from "@/shared";
import { useTheme } from "@emotion/react";
import styled from "@emotion/styled";
import { Link } from "@/components";
import Image from "next/image";
import { down, up } from "styled-breakpoints";

const Navbar = () => {
  const theme = useTheme();

  const NavbarContainer = styled(Container)`
    position: sticky;
    top: 0;
    display: flex;
    padding: 1.25rem;
    flex-direction: column;
    align-items: center;
    background-color: ${theme.color.general.white};
    height: 7.5vh;
    z-index: 10000;
    justify-content: space-between;
    text-decoration: none;
    ${up("md")} {
      flex-direction: row;
      padding: 0.25rem;
    }
  `;

  const NavbarFlex = styled.div`
    display: flex;
    gap: 2rem;

    ${down("md")} {
      margin: 0.5rem auto;
    }

    & > a {
      text-decoration: none;
    }
  `;

  const NavbarText = styled(Typography.H4)`
    color: ${theme.color.general.yellow};
    font-weight: 900;
    text-transform: uppercase;
    letter-spacing: 0.025rem;
  `;

  return (
    <NavbarContainer>
      <Link href="/">
        <Image src="/pokemon.svg" alt="pokemon" width={150} height={45} />
      </Link>
      <NavbarFlex>
        <Link href="/">
          <NavbarText>All</NavbarText>
        </Link>
        <Link href="/my-pokemons">
          <NavbarText>My Pokemons</NavbarText>
        </Link>
      </NavbarFlex>
    </NavbarContainer>
  );
};

export default Navbar;
