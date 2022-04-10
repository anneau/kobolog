import type { AppProps } from "next/app";
import "../styles/globals.css";

type Props = AppProps & {
  Component: {
    layout?: Layout;
  };
};

function MyApp({ Component, pageProps }: Props) {
  const { layout = (page) => page } = Component;
  return layout(<Component {...pageProps} />);
}

export default MyApp;
