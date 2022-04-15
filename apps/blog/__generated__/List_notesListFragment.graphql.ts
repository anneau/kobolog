/**
 * @generated SignedSource<<36642f97be2a27986ba82d74a329926d>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type List_notesListFragment$data = {
  readonly edges: ReadonlyArray<{
    readonly node: {
      readonly code: string | null;
      readonly " $fragmentSpreads": FragmentRefs<"Item_notesItemFragment">;
    } | null;
  }>;
  readonly " $fragmentType": "List_notesListFragment";
};
export type List_notesListFragment$key = {
  readonly " $data"?: List_notesListFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"List_notesListFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "List_notesListFragment",
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
              "args": null,
              "kind": "FragmentSpread",
              "name": "Item_notesItemFragment"
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "notesConnection",
  "abstractKey": null
};

(node as any).hash = "38a5c9937fe7f3044a73350815893bb5";

export default node;
