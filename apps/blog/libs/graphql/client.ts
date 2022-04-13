import { Environment } from "relay-runtime";
import { RecordMap } from "relay-runtime/lib/store/RelayStoreTypes";

import createEnvironment from "./create-environment";

export default function createRelayEnvironment(
  records?: RecordMap
): Environment {
  return createEnvironment(records);
}
