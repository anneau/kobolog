import { graphql } from "react-relay";

export const query = graphql`
  query query_notesQuery {
    notesCollection {
      ...List_notesListFragment
    }
  }
`;
