import { atom } from "recoil";

import { VehicleProps } from "@data/final.schema";

export const compareVehicleState = atom<VehicleProps[]>({
  key: "compare-vehicle-state",
  default: [],
});
