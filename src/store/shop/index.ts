import { atom, selector } from "recoil";

import { FinalShop } from "@/types";

import { dataModeState } from "../datasource";

import { localForageEffect } from "..";

export const shopLiveState = atom<FinalShop>({
  key: "shop-live-state",
  effects: [localForageEffect("shop-live")],
});

export const shopDevState = atom<FinalShop>({
  key: "shop-dev-state",
  effects: [localForageEffect("shop-dev")],
});

export const shopQuery = selector({
  key: "shop-state",
  get: ({ get }) => {
    const dataMode = get(dataModeState);
    const shopLive = get(shopLiveState);
    const shopDev = get(shopDevState);
    switch (dataMode) {
      case "live":
        return shopLive;
      case "dev":
        return shopDev;
      default:
        return shopLive;
    }
  },
});
