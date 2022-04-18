import Link from "next/link";
import { VFC } from "react";
import { graphql, useFragment } from "react-relay";
import { List_notesListFragment$key } from "../../__generated__/List_notesListFragment.graphql";
import { Item } from "./Item";

const fragment = graphql`
  fragment List_notesListFragment on notesConnection {
    edges {
      node {
        code
        ...Item_notesItemFragment
      }
    }
  }
`;

type Props = {
  fragmentRef: List_notesListFragment$key;
};

export const List: VFC<Props> = ({ fragmentRef }) => {
  const data = useFragment(fragment, fragmentRef);

  if (!data) return <div>Loading...</div>;
  const nodes = data.edges ? data.edges.map((edge) => edge?.node) : [];

  return (
    <ul>
      {nodes.map((node) =>
        node != null && node.code ? (
          <Link
            href={`/notes/${encodeURIComponent(node.code)}`}
            passHref
            key={node?.code}
          >
            <a>
              <Item fragmentRef={node} />
            </a>
          </Link>
        ) : null
      )}
    </ul>
  );
};
