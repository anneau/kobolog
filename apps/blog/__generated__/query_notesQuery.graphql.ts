/**
 * @generated SignedSource<<e7f4ee587098cf7b6d81c6a8dace2394>>
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
    readonly " $fragmentSpreads": FragmentRefs<"List_notesListFragment">;
  } | null;
};
export type query_notesQuery = {
  variables: query_notesQuery$variables;
  response: query_notesQuery$data;
};

const node: ConcreteRequest = {
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
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "code",
                    "storageKey": null
                  },
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
    "cacheID": "2ce8be1d3cd5189671f8854d6ee26bbc",
    "id": null,
    "metadata": {},
    "name": "query_notesQuery",
    "operationKind": "query",
    "text": "query query_notesQuery {\n  notesCollection {\n    ...List_notesListFragment\n  }\n}\n\nfragment Item_notesItemFragment on notes {\n  title\n  published_at\n}\n\nfragment List_notesListFragment on notesConnection {\n  edges {\n    node {\n      code\n      ...Item_notesItemFragment\n    }\n  }\n}\n"
  }
};

(node as any).hash = "ed6bb6cd6e14ad64001118236d0a08c2";

export default node;
