import { GetServerSideProps } from "next";
import { fetchQuery } from "react-relay";
import createServerRelayEnvironment from "../../libs/graphql/server";
import { query } from "./query";

export const getServerSideProps: GetServerSideProps = async () => {
  const environment = createServerRelayEnvironment();
  await fetchQuery(
    environment,
    query,
    {},
    {
      fetchPolicy: "network-only",
    }
  ).toPromise();
  const records = environment.getStore().getSource().toJSON();
  return { props: { records } };
};
