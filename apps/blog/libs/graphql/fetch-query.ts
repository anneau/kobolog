import { RequestParameters, Variables } from "relay-runtime";

export default async function fetchQuery(
  { text: query }: RequestParameters,
  variables: Variables,
  apiKey: string
) {
  const endpoint = `${process.env.SUPABASE_URL}/graphql/v1` ?? "";
  console.log(endpoint, apiKey);

  const response = await fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      apiKey,
    },
    body: JSON.stringify({ query, variables }),
  });

  if (response.status !== 200) {
    throw new Error("invalid response from server");
  }

  return await response.json();
}
