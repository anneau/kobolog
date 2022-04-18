import { InferGetStaticPropsType } from "next";
import { FC } from "react";
import { useLazyLoadQuery } from "react-relay";
import { Detail } from "../../../components/notes/Detail";
import { query_NoteDetailQuery } from "../../../__generated__/query_NoteDetailQuery.graphql";
import { detailQuery } from "./query";
import { getStaticProps } from "./server";
export { getStaticPaths, getStaticProps } from "./server";

type Props = InferGetStaticPropsType<typeof getStaticProps>;

const Note: FC<Props> = ({ code }) => {
  const data = useLazyLoadQuery<query_NoteDetailQuery>(
    detailQuery,
    {
      code,
    },
    { fetchPolicy: "store-only" }
  );
  const node = data.notesCollection?.edges[0].node;
  if (!data || !node) return <div>Loading...</div>;

  return <Detail fragmentRef={node} />;
};

export default Note;
