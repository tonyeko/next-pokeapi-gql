import { AppProps } from "next/app";
import { Global } from "@emotion/react";
import { ApolloProvider } from "@apollo/client";

import { TransitionLayout } from "@/components/layouts";
import { globalStyles } from "@/shared/global";
import { apolloClient } from "@/lib";

import "@/css/reset.css";

const MyApp = ({ Component, pageProps, router }: AppProps) => (
  <>
    <Global styles={globalStyles} />
    <ApolloProvider client={apolloClient}>
      <TransitionLayout route={router.route}>
        <Component {...pageProps} />
      </TransitionLayout>
    </ApolloProvider>
  </>
);

export default MyApp;
