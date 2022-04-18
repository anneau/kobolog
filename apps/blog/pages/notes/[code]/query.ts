import { graphql } from "react-relay";

export const codesQuery = graphql`
  query query_NoteCodesQuery {
    notesCollection {
      edges {
        node {
          code
        }
      }
    }
  }
`;

export const detailQuery = graphql`
  query query_NoteDetalQuery($code: String!) {
    notesCollection(first: 1, filter: { code: { eq: $code } }) {
      edges {
        node {
          ...Detail_NoteDetailFragment
        }
      }
    }
  }
`;
