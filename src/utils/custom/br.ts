import { setRecoil } from "recoil-nexus";

import { dialogue } from "@/store/atom/atom";
import { Final } from "@/types";
import { queryVehicleIntname } from "@/utils/custom/queryVehicle";

export default function br(vehicle: string, final: Final): string {
  const query = queryVehicleIntname(vehicle, final);
  if (query) {
    return query.br[1];
  } else {
    setRecoil(dialogue, true);
    console.error("no match in final");
    return "1";
  }
}
