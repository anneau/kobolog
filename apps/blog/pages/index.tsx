import type { GetServerSideProps, NextPage } from "next";
import { fetchQuery, graphql, useLazyLoadQuery } from "react-relay";
import createServerRelayEnvironment from "../libs/graphql/server";
import { pages_indexQuery } from "../__generated__/pages_indexQuery.graphql";

type Props = {
  code: string;
};

export const getServerSideProps: GetServerSideProps = async () => {
  const environment = createServerRelayEnvironment();
  const res = await fetchQuery(
    environment,
    query,
    {},
    {
      fetchPolicy: "network-only",
    }
  ).toPromise();
  console.log(res);

  const records = environment.getStore().getSource().toJSON();

  return { props: { records } };
};

const query = graphql`
  query pages_indexQuery {
    notesCollection {
      edges {
        node {
          code
        }
      }
    }
  }
`;

const Home: NextPage = () => {
  const data = useLazyLoadQuery<pages_indexQuery>(query, {});

  return (
    <>
      <h1 className="text-3xl font-bold underline">Tailwind works!</h1>
      {data.notesCollection?.edges[0]?.node?.code ?? "Supabase query works!"}
    </>
  );
};

export default Home;
