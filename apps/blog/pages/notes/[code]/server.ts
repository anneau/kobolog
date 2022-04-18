import { GetStaticPropsContext } from "next";
import { ParsedUrlQuery } from "querystring";
import { fetchQuery } from "react-relay";
import createServerRelayEnvironment from "../../../libs/graphql/server";
import { query_NoteCodesQuery } from "../../../__generated__/query_NoteCodesQuery.graphql";
import { query_NoteDetailQuery } from "../../../__generated__/query_NoteDetailQuery.graphql";
import { codesQuery, detailQuery } from "./query";

export const getStaticPaths = async () => {
  const environment = createServerRelayEnvironment();
  const data = await fetchQuery<query_NoteCodesQuery>(
    environment,
    codesQuery,
    {},
    {
      fetchPolicy: "network-only",
    }
  ).toPromise();
  const paths = data?.notesCollection?.edges.map(({ node }) => ({
    params: { code: node?.code },
  }));

  return {
    paths,
    fallback: true,
  };
};

type Params = ParsedUrlQuery & { code: string };

export const getStaticProps = async ({
  params,
}: GetStaticPropsContext<Params>) => {
  const code = params?.code ?? ""; // TODO: エラーハンドリング
  const environment = createServerRelayEnvironment();
  await fetchQuery<query_NoteDetailQuery>(
    environment,
    detailQuery,
    { code },
    {
      fetchPolicy: "network-only",
    }
  ).toPromise();
  const records = environment.getStore().getSource().toJSON();
  return { props: { records, code } };
};
