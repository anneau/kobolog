import { graphql } from "react-relay";

export const query = graphql`
  query query_notesQuery {
    notesCollection {
      edges {
        node {
          code
        }
      }
      ...List_notesListFragment
    }
  }
`;
