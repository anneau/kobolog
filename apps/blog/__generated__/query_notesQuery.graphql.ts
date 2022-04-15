/**
 * @generated SignedSource<<e5bd3847a6becaa302d6ba04efe8c97c>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type query_notesQuery$variables = {};
export type query_notesQuery$data = {
  readonly notesCollection: {
    readonly edges: ReadonlyArray<{
      readonly node: {
        readonly code: string | null;
      } | null;
    }>;
  } | null;
};
export type query_notesQuery = {
  variables: query_notesQuery$variables;
  response: query_notesQuery$data;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "notesConnection",
    "kind": "LinkedField",
    "name": "notesCollection",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "notesEdge",
        "kind": "LinkedField",
        "name": "edges",
        "plural": true,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "notes",
            "kind": "LinkedField",
            "name": "node",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "code",
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "query_notesQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "query_notesQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "f1c883e4b3d6134bd4c604c605233f9b",
    "id": null,
    "metadata": {},
    "name": "query_notesQuery",
    "operationKind": "query",
    "text": "query query_notesQuery {\n  notesCollection {\n    edges {\n      node {\n        code\n      }\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "996944c5f5de5e42bffcee8ef4633461";

export default node;
