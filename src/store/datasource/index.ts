import { atom, useRecoilState } from "recoil";

import type { AtomEffectParams } from "../types";

import { Actions } from "./types";

export const dataModeState = atom<"live" | "dev">({
  key: "data-mode-state",
  default: "live",
  effects: [synchronizeWithLocalStorage],
});

function synchronizeWithLocalStorage({ setSelf, onSet }: AtomEffectParams) {
  const storedMode = localStorage.getItem("data-mode");
  storedMode && setSelf(storedMode);
  onSet((value: "live" | "dev") => localStorage.setItem("data-mode", value));
}

function useDataMode(): ["live" | "dev", Actions] {
  const [dataMode, setDataMode] = useRecoilState(dataModeState);

  function setMode(mode: "live" | "dev") {
    setDataMode(mode);
  }

  return [dataMode, { setMode }];
}

export default useDataMode;
