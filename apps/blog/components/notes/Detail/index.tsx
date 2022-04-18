import React, { FC } from "react";
import { graphql, useFragment } from "react-relay";
import { Detail_NoteDetailFragment$key } from "../../../__generated__/Detail_NoteDetailFragment.graphql";

const fragment = graphql`
  fragment Detail_NoteDetailFragment on notes {
    title
    code
    body
    icon
    created_at
    published_at
  }
`;

type Props = {
  fragmentRef: Detail_NoteDetailFragment$key;
};

export const Detail: FC<Props> = ({ fragmentRef }) => {
  const data = useFragment(fragment, fragmentRef);
  return (
    <>
      {data.title}
      {data.body}
    </>
  );
};
