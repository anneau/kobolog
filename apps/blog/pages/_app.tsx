import type { AppProps } from "next/app";
import { RelayEnvironmentProvider } from "react-relay";
import { RecordMap } from "relay-runtime/lib/store/RelayStoreTypes";
import createRelayEnvironment from "../libs/graphql/client";
import "../styles/globals.css";

type PageProps = {
  records: RecordMap;
};

type Props = Omit<AppProps<PageProps>, "pageProps"> & {
  pageProps: PageProps;
};

function MyApp({ Component, pageProps }: Props) {
  const environment = createRelayEnvironment(pageProps.records);
  return (
    <RelayEnvironmentProvider environment={environment}>
      <Component {...pageProps} />
    </RelayEnvironmentProvider>
  );
}

export default MyApp;
