/**
 * @generated SignedSource<<29847f405b91f08076953cff38fe6541>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type Item_notesItemFragment$data = {
  readonly title: string | null;
  readonly published_at: any | null;
  readonly " $fragmentType": "Item_notesItemFragment";
};
export type Item_notesItemFragment$key = {
  readonly " $data"?: Item_notesItemFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"Item_notesItemFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "Item_notesItemFragment",
  "selections": [
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
  "type": "notes",
  "abstractKey": null
};

(node as any).hash = "75ad797e419f6ab3705b198cd5661221";

export default node;
