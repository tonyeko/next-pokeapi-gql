import { AppProps } from "next/app";
import { Global } from "@emotion/react";

import { TransitionLayout } from "@/components/layouts";
import { globalStyles } from "@/shared/global";

const MyApp = ({ Component, pageProps, router }: AppProps) => (
  <>
    <Global styles={globalStyles} />
    <TransitionLayout route={router.route}>
      <Component {...pageProps} />
    </TransitionLayout>
  </>
);

export default MyApp;
