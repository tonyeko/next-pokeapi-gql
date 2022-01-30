import { AppProps } from "next/app";
import { Global, ThemeProvider } from "@emotion/react";
import { ApolloProvider } from "@apollo/client";

import { globalStyles } from "@/shared/global";
import { MyPokemonProvider } from "@/context";
import { Navbar } from "@/components";
import { apolloClient } from "@/lib";
import { theme } from "@/utils";

import "@/css/reset.css";

const MyApp = ({ Component, pageProps }: AppProps) => (
  <>
    <Global styles={globalStyles} />
    <ApolloProvider client={apolloClient}>
      <ThemeProvider theme={theme}>
        <MyPokemonProvider>
          <Navbar />
          <Component {...pageProps} />
        </MyPokemonProvider>
      </ThemeProvider>
    </ApolloProvider>
  </>
);

export default MyApp;
