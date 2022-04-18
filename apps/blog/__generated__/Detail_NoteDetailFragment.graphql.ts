/**
 * @generated SignedSource<<cb12f6988dc96c6d1977546e6f8492ab>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type Detail_NoteDetailFragment$data = {
  readonly title: string | null;
  readonly code: string | null;
  readonly body: string | null;
  readonly icon: string | null;
  readonly created_at: any | null;
  readonly published_at: any | null;
  readonly " $fragmentType": "Detail_NoteDetailFragment";
};
export type Detail_NoteDetailFragment$key = {
  readonly " $data"?: Detail_NoteDetailFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"Detail_NoteDetailFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "Detail_NoteDetailFragment",
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
      "name": "code",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "body",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "icon",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "created_at",
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

(node as any).hash = "35b1b145ea1f3a58f14d2e92147a19e7";

export default node;
