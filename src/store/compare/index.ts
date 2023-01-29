import { atom } from "recoil";

import { VehicleProps } from "@/types";

export const compareVehicleState = atom<VehicleProps[]>({
  key: "compare-vehicle-state",
  default: [],
});
