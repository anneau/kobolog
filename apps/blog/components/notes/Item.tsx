import React, { FC } from "react";
import { graphql, useFragment } from "react-relay";
import { Card } from "ui/components";
import { Item_notesItemFragment$key } from "../../__generated__/Item_notesItemFragment.graphql";

const fragment = graphql`
  fragment Item_notesItemFragment on notes {
    title
    published_at
  }
`;

type Props = {
  fragmentRef: Item_notesItemFragment$key;
};

export const Item: FC<Props> = ({ fragmentRef }) => {
  const data = useFragment(fragment, fragmentRef);
  return (
    <li>
      <Card>
        {data.title}
        {data.published_at}
      </Card>
    </li>
  );
};
