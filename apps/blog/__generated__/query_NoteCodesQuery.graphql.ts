/**
 * @generated SignedSource<<4b5a214308c5c3115f6602f852920564>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type query_NoteCodesQuery$variables = {};
export type query_NoteCodesQuery$data = {
  readonly notesCollection: {
    readonly edges: ReadonlyArray<{
      readonly node: {
        readonly code: string | null;
      } | null;
    }>;
  } | null;
};
export type query_NoteCodesQuery = {
  variables: query_NoteCodesQuery$variables;
  response: query_NoteCodesQuery$data;
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
    "name": "query_NoteCodesQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "query_NoteCodesQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "69b80486c0ea5622b50cd823865144aa",
    "id": null,
    "metadata": {},
    "name": "query_NoteCodesQuery",
    "operationKind": "query",
    "text": "query query_NoteCodesQuery {\n  notesCollection {\n    edges {\n      node {\n        code\n      }\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "20233cd31df5b6a74bad278df9874ee2";

export default node;
