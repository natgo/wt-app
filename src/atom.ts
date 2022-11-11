import { atom } from "recoil";

import { recoilPersist } from "recoil-persist";

import { FinalProp, FinalShop, SkinsProp } from "./types";

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

export const SkinTypeTab = atom<number>({
  key: "SkinTypeTab",
  default: 0,
  effects_UNSTABLE: [persistAtom],
});

export const SkinCountryTab = atom<number>({
  key: "SkinCountryTab",
  default: 0,
  effects_UNSTABLE: [persistAtom],
});

export const SkinAtom = atom<SkinsProp>({
  key: "Skins",
  effects_UNSTABLE: [persistAtom],
});

export const Final = atom<FinalProp>({
  key: "Final",
  effects_UNSTABLE: [persistAtom],
});

export const Shop = atom<FinalShop>({
  key: "Shop",
  effects_UNSTABLE: [persistAtom],
});

export interface ParcedList {
  name: string;
  id: number;
}
export interface CorrectedList {
  name: string;
  id: number;
  br: string;
}

export const Parsed = atom<ParcedList[]>({
  key: "Parsed",
  default: [],
  effects_UNSTABLE: [persistAtom],
});

export const Corrected = atom<CorrectedList[]>({
  key: "Corrected",
  default: [],
  effects_UNSTABLE: [persistAtom],
});

export const base64Image = atom<string>({
  key: "base64Image",
  default: "",
  effects_UNSTABLE: [persistAtom],
});

export const brb = atom<string>({
  key: "brb",
  default: "1.0",
  effects_UNSTABLE: [persistAtom],
});

export const dialogue = atom<boolean>({
  key: "dialog",
  default: false,
});

export const CalculatorMode = atom<string>({
  key: "CalculatorMode",
  default: "Realistic",
  effects_UNSTABLE: [persistAtom],
});

export const PaginationNum = atom<number>({
  key: "PaginationNum",
  default: 0,
});
