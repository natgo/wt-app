import { atom, selector } from "recoil";

import { Final } from "@/types";

import { dataModeState } from "../datasource";

import { localForageEffect } from "..";

export const finalLiveState = atom<Final>({
  key: "final-live-state",
  default: { version: "0.0", aircraft: [], ground: [], helicopter: [], ship: [], boat: [] },
  effects: [localForageEffect("final-live")],
});

export const finalDevState = atom<Final>({
  key: "final-dev-state",
  default: { version: "0.0", aircraft: [], ground: [], helicopter: [], ship: [], boat: [] },
  effects: [localForageEffect("final-dev")],
});

export const finalQuery = selector({
  key: "final-state",
  get: ({ get }) => {
    const dataMode = get(dataModeState);
    const finalLive = get(finalLiveState);
    const finalDev = get(finalDevState);
    switch (dataMode) {
      case "live":
        return finalLive;
      case "dev":
        return finalDev;
      default:
        return finalLive;
    }
  },
});
