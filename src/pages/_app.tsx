import { AppProps } from "next/app";
import { TransitionLayout } from "@/components/layouts";

import { globalStyles } from "@/shared/styles";

const MyApp = ({ Component, pageProps, router }: AppProps) => (
  <>
    {globalStyles}
    <TransitionLayout route={router.route}>
      <Component {...pageProps} />
    </TransitionLayout>
  </>
);

export default MyApp;
