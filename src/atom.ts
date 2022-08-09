import { atom } from "recoil";

import { recoilPersist } from "recoil-persist";
import { FinalProp } from "./types";

const { persistAtom } = recoilPersist();

export const TypeTab = atom<number>({
  key: "TypeTab",
  default: 0,
  effects_UNSTABLE: [persistAtom],
});

export const CountryTab = atom<number>({
  key: "CountryTab",
  default: 0,
  effects_UNSTABLE: [persistAtom],
});

export const Final = atom<FinalProp>({
  key: "Final",
  effects_UNSTABLE: [persistAtom],
});