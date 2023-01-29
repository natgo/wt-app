import { atom } from "recoil";

export const searchDialogState = atom<boolean>({
  key: "search-dialog-state",
  default: false,
});
