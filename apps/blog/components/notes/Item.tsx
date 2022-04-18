import { FC } from "react";
import { graphql, useFragment } from "react-relay";
import { Card, Text } from "ui/components";
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
        <Text>{data.title}</Text>
        <Text>{data.published_at}</Text>
      </Card>
    </li>
  );
};
