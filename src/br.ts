import { setRecoil } from "recoil-nexus";

import { dialogue } from "./atom";

export default function br(vehicle: string): string {
  if (vehicle === "he-177a-5") {
    return "6.0";
  }
  if (vehicle === "p_108b_serie1") {
    return "3.3";
  }
  if (vehicle === "z_1007_bis_serie3") {
    return "2.7";
  }
  if (vehicle === "z_1007_bis_serie5") {
    return "3.0";
  }
  if (vehicle === "b-17e") {
    return "4.7";
  }
  if (vehicle === "leo_451_early") {
    return "3.0";
  }
  if (vehicle === "mb_175t") {
    return "3.3";
  }
  if (vehicle === "pb4y-2") {
    return "5.3";
  }
  if (vehicle === "go229_v3") {
    return "7.0";
  }
  if (vehicle === "he-162a-2") {
    return "6.0";
  }
  setRecoil(dialogue, true);
  return "1";
}
