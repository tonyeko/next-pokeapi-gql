import { AppProps } from "next/app";
import { Global, ThemeProvider } from "@emotion/react";
import { ApolloProvider } from "@apollo/client";

import { globalStyles } from "@/shared/global";
import { apolloClient } from "@/lib";
import { theme } from "@/utils";

import "@/css/reset.css";
import { MyPokemonProvider } from "@/context/MyPokemonContext";

const MyApp = ({ Component, pageProps }: AppProps) => (
  <>
    <Global styles={globalStyles} />
    <ApolloProvider client={apolloClient}>
      <ThemeProvider theme={theme}>
        <MyPokemonProvider>
          <Component {...pageProps} />
        </MyPokemonProvider>
      </ThemeProvider>
    </ApolloProvider>
  </>
);

export default MyApp;
