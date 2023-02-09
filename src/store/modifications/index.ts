import { atom, selector } from "recoil";

import { Modifications } from "@/types";

import { dataModeState } from "../datasource";

import { localForageEffect } from "..";

export const ModificationLiveState = atom<Modifications>({
  key: "modifications-live-state",
  effects: [localForageEffect("modifications-live")],
});

export const ModificationDevState = atom<Modifications>({
  key: "modifications-dev-state",
  effects: [localForageEffect("modifications-dev")],
});

export const modificationQuery = selector({
  key: "modification-state",
  get: ({ get }) => {
    const dataMode = get(dataModeState);
    const modificationLive = get(ModificationLiveState);
    const modificationDev = get(ModificationDevState);
    switch (dataMode) {
      case "live":
        return modificationLive;
      case "dev":
        return modificationDev;
      default:
        return modificationLive;
    }
  },
});
