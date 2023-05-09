import { Final, VehicleProps } from "@data/final.schema";

export function queryVehicleWikiname(vehicle: string, final: Final): VehicleProps | undefined {
  const matchAir = final.aircraft.find((curval) => {
    return curval.wikiname?.toLowerCase() === decodeURI(vehicle).replace(/_/g, " ").toLowerCase();
  });
  if (matchAir) {
    return matchAir;
  }

  const matchGround = final.ground.find((curval) => {
    return curval.wikiname?.toLowerCase() === decodeURI(vehicle).replace(/_/g, " ").toLowerCase();
  });
  if (matchGround) {
    return matchGround;
  }

  const matchHelicopter = final.helicopter.find((curval) => {
    return curval.wikiname?.toLowerCase() === decodeURI(vehicle).replace(/_/g, " ").toLowerCase();
  });
  if (matchHelicopter) {
    return matchHelicopter;
  }

  const matchShip = final.ship.find((curval) => {
    return curval.wikiname?.toLowerCase() === decodeURI(vehicle).replace(/_/g, " ").toLowerCase();
  });
  if (matchShip) {
    return matchShip;
  }

  const matchBoat = final.boat.find((curval) => {
    return curval.wikiname?.toLowerCase() === decodeURI(vehicle).replace(/_/g, " ").toLowerCase();
  });
  if (matchBoat) {
    return matchBoat;
  }
}

export function queryVehicleIntname(vehicle: string, final: Final): VehicleProps | undefined {
  const matchAir = final.aircraft.find((curval) => {
    return curval.intname.toLowerCase() === vehicle.toLowerCase();
  });
  if (matchAir) {
    return matchAir;
  }

  const matchGround = final.ground.find((curval) => {
    return curval.intname.toLowerCase() === vehicle.toLowerCase();
  });
  if (matchGround) {
    return matchGround;
  }

  const matchHelicopter = final.helicopter.find((curval) => {
    return curval.intname.toLowerCase() === vehicle.toLowerCase();
  });
  if (matchHelicopter) {
    return matchHelicopter;
  }

  const matchShip = final.ship.find((curval) => {
    return curval.intname.toLowerCase() === vehicle.toLowerCase();
  });
  if (matchShip) {
    return matchShip;
  }

  const matchBoat = final.boat.find((curval) => {
    return curval.intname.toLowerCase() === vehicle.toLowerCase();
  });
  if (matchBoat) {
    return matchBoat;
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
