import { atom } from "recoil";

import { Wiki } from "@data/wiki.schema";

import { localForageEffect } from "..";

export const WikiState = atom<Wiki>({
  key: "wiki-state",
  effects: [localForageEffect("wiki-data")],
});
