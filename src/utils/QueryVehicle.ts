import { getRecoil } from "recoil-nexus";

import { Final } from "@/store/atom";

import { FinalProps } from "../types";

export function queryVehicleWikiname(vehicle: string): FinalProps | undefined {
  const FinalValue = getRecoil(Final);
  console.log(vehicle);

  const matchAir = FinalValue.aircraft.find((curval) => {
    return curval.wikiname?.toLowerCase() === decodeURI(vehicle).replace(/_/g, " ").toLowerCase();
  });
  const matchGround = FinalValue.ground.find((curval) => {
    return curval.wikiname?.toLowerCase() === decodeURI(vehicle).replace(/_/g, " ").toLowerCase();
  });
  const matchHelicopter = FinalValue.helicopter.find((curval) => {
    return curval.wikiname?.toLowerCase() === decodeURI(vehicle).replace(/_/g, " ").toLowerCase();
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

export function queryVehicleIntname(vehicle: string): FinalProps | undefined {
  const FinalValue = getRecoil(Final);
  console.log(vehicle);

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

export function querypartialVehicleWikiname(vehicle: string): FinalProps[] | undefined {
  const FinalValue = getRecoil(Final);
  const FinalArray: FinalProps[] = [];
  console.log(vehicle);

  FinalValue.aircraft.forEach((element) => {
    if (element.wikiname?.search(vehicle) === 0) {
      FinalArray.push(element);
    }
  });
  FinalValue.ground.forEach((element) => {
    if (element.wikiname?.search(vehicle) === 0) {
      FinalArray.push(element);
    }
  });
  FinalValue.helicopter.forEach((element) => {
    if (element.wikiname?.search(vehicle) === 0) {
      FinalArray.push(element);
    }
  });
  return FinalArray.length > 0 ? FinalArray : undefined;
}
