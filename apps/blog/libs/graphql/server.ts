import { Network } from "relay-runtime";
import { RecordMap } from "relay-runtime/lib/store/RelayStoreTypes";

import createEnvironment from "./create-environment";
import fetchQuery from "./fetch-query";

const network = () =>
  Network.create((request, variables) =>
    fetchQuery(request, variables, process.env.SUPABASE_API_KEY ?? "")
  );

export default function createServerRelayEnvironment(records?: RecordMap) {
  return createEnvironment(records, network());
}
