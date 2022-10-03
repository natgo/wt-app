import { getRecoil } from "recoil-nexus";

import { Final } from "../atom";
import { FinalProps } from "../types";

export function queryVehicle(
  vehicle: string,
  type: "intname" | "wikiname",
): FinalProps | undefined {
  const FinalValue = getRecoil(Final);
  console.log(vehicle);
  if (type === "wikiname") {
    const matchAir = FinalValue.aircraft.find((curval) => {
      return curval.wikiname.toLowerCase() === decodeURI(vehicle).replace(/_/g, " ").toLowerCase();
    });
    const matchGround = FinalValue.ground.find((curval) => {
      return curval.wikiname.toLowerCase() === decodeURI(vehicle).replace(/_/g, " ").toLowerCase();
    });
    const matchHelicopter = FinalValue.helicopter.find((curval) => {
      return curval.wikiname.toLowerCase() === decodeURI(vehicle).replace(/_/g, " ").toLowerCase();
    });
    if (matchAir) {
      return matchAir;
    }
    if (matchGround) {
      return matchGround;
    }
    if (matchHelicopter) {
      return matchHelicopter;
    }
  } else {
    const matchAir = FinalValue.aircraft.find((curval) => {
      return curval.intname.toLowerCase() === vehicle.toLowerCase();
    });
    const matchGround = FinalValue.ground.find((curval) => {
      return curval.intname.toLowerCase() === vehicle.toLowerCase();
    });
    const matchHelicopter = FinalValue.helicopter.find((curval) => {
      return curval.intname.toLowerCase() === vehicle.toLowerCase();
    });
    if (matchAir) {
      return matchAir;
    }
    if (matchGround) {
      return matchGround;
    }
    if (matchHelicopter) {
      return matchHelicopter;
    }
  }
}
