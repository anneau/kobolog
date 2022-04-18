import { InferGetStaticPropsType } from "next";
import React, { FC } from "react";
import { useLazyLoadQuery } from "react-relay";
import { Detail } from "../../../components/notes/Detail";
import { query_NoteDetalQuery } from "../../../__generated__/query_NoteDetalQuery.graphql";
import { detailQuery } from "./query";
import { getStaticProps } from "./server";
export { getStaticPaths, getStaticProps } from "./server";

type Props = InferGetStaticPropsType<typeof getStaticProps>;

const Note: FC<Props> = ({ code }) => {
  const data = useLazyLoadQuery<query_NoteDetalQuery>(detailQuery, {
    code,
  });
  const node = data.notesCollection?.edges[0].node;
  if (!data || !node) return <div>Loading...</div>;

  return <Detail fragmentRef={node} />;
};

export default Note;
