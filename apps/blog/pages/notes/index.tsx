import { useLazyLoadQuery } from "react-relay";
import { List } from "../../components/notes/List";
import { query_notesQuery } from "../../__generated__/query_notesQuery.graphql";
import { query } from "./query";
export { getStaticProps } from "./server";

export const Notes = () => {
  const data = useLazyLoadQuery<query_notesQuery>(
    query,
    {},
    { fetchPolicy: "store-only" }
  );
  if (!data.notesCollection) return <div>Loading...</div>;

  return (
    <>
      <h1 className="text-3xl font-bold underline">Tailwind works!</h1>
      <List fragmentRef={data.notesCollection} />
    </>
  );
};

export default Notes;
