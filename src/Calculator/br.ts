import { setRecoil } from "recoil-nexus";

import { dialogue } from "../atom";
import { queryVehicle } from "../utils/QueryVehicle";

export default function br(vehicle: string): string {
  const query = queryVehicle(vehicle, "intname");
  if (query) {
    return query.rb_br;
  } else {
    setRecoil(dialogue, true);
    console.error("no match in final");
    return "1";
  }
}
