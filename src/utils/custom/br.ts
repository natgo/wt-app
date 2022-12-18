import { setRecoil } from "recoil-nexus";

import { dialogue } from "@/store/atom/atom";
import { FinalProp } from "@/types";
import { queryVehicleIntname } from "@/utils/custom/QueryVehicle";

export default function br(vehicle: string, final: FinalProp): string {
  const query = queryVehicleIntname(vehicle, final);
  if (query) {
    return query.rb_br;
  } else {
    setRecoil(dialogue, true);
    console.error("no match in final");
    return "1";
  }
}
