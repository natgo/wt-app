import { setRecoil } from "recoil-nexus";

import { dialogue } from "@/store/atom";
import { queryVehicleIntname } from "@/utils/QueryVehicle";

export default function br(vehicle: string): string {
  const query = queryVehicleIntname(vehicle);
  if (query) {
    return query.rb_br;
  } else {
    setRecoil(dialogue, true);
    console.error("no match in final");
    return "1";
  }
}
