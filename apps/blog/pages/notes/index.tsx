import React from "react";
import { useLazyLoadQuery } from "react-relay";
import { query_notesQuery } from "../../__generated__/query_notesQuery.graphql";
import { query } from "./query";
export { getServerSideProps } from "./server";

export const Notes = () => {
  const data = useLazyLoadQuery<query_notesQuery>(query, {});
  return (
    <>
      <h1 className="text-3xl font-bold underline">Tailwind works!</h1>
      {data.notesCollection?.edges[0]?.node?.code && "Supabase query works!"}
    </>
  );
};

export default Notes;
