import { atom } from "recoil";

import { ScrapeFull } from "@/types";

import { localForageEffect } from "..";

export const WikiState = atom<ScrapeFull>({
  key: "wiki-state",
  effects: [localForageEffect("wiki-data")],
});
