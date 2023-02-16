import { Final, VehicleProps } from "@/types";

export function queryVehicleWikiname(vehicle: string, final: Final): VehicleProps | undefined {
  const matchAir = final.aircraft.find((curval) => {
    return curval.wikiname?.toLowerCase() === decodeURI(vehicle).replace(/_/g, " ").toLowerCase();
  });
  const matchGround = final.ground.find((curval) => {
    return curval.wikiname?.toLowerCase() === decodeURI(vehicle).replace(/_/g, " ").toLowerCase();
  });
  const matchHelicopter = final.helicopter.find((curval) => {
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

export function queryVehicleIntname(vehicle: string, final: Final): VehicleProps | undefined {
  const matchAir = final.aircraft.find((curval) => {
    return curval.intname.toLowerCase() === vehicle.toLowerCase();
  });
  const matchGround = final.ground.find((curval) => {
    return curval.intname.toLowerCase() === vehicle.toLowerCase();
  });
  const matchHelicopter = final.helicopter.find((curval) => {
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

export function querypartialVehicleWikiname(
  vehicle: string,
  final: Final,
): VehicleProps[] | undefined {
  const FinalArray: VehicleProps[] = [];

  final.aircraft.forEach((element) => {
    if (element.wikiname?.search(vehicle) === 0) {
      FinalArray.push(element);
    }
  });
  final.ground.forEach((element) => {
    if (element.wikiname?.search(vehicle) === 0) {
      FinalArray.push(element);
    }
  });
  final.helicopter.forEach((element) => {
    if (element.wikiname?.search(vehicle) === 0) {
      FinalArray.push(element);
    }
  });
  return FinalArray.length > 0 ? FinalArray : undefined;
}
