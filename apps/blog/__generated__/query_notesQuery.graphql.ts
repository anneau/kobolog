/**
 * @generated SignedSource<<125f18449113f2ad1718b5a73216abd3>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type query_notesQuery$variables = {};
export type query_notesQuery$data = {
  readonly notesCollection: {
    readonly edges: ReadonlyArray<{
      readonly node: {
        readonly code: string | null;
      } | null;
    }>;
    readonly " $fragmentSpreads": FragmentRefs<"List_notesListFragment">;
  } | null;
};
export type query_notesQuery = {
  variables: query_notesQuery$variables;
  response: query_notesQuery$data;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "code",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "query_notesQuery",
    "selections": [
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
                  (v0/*: any*/)
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "List_notesListFragment"
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "query_notesQuery",
    "selections": [
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
                  (v0/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "title",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "published_at",
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
    ]
  },
  "params": {
    "cacheID": "665e3b985500c259f96aa656dde21a74",
    "id": null,
    "metadata": {},
    "name": "query_notesQuery",
    "operationKind": "query",
    "text": "query query_notesQuery {\n  notesCollection {\n    edges {\n      node {\n        code\n      }\n    }\n    ...List_notesListFragment\n  }\n}\n\nfragment Item_notesItemFragment on notes {\n  title\n  published_at\n}\n\nfragment List_notesListFragment on notesConnection {\n  edges {\n    node {\n      code\n      ...Item_notesItemFragment\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "551a470fe98f6a337c8ad9ff3c2a5c6a";

export default node;
