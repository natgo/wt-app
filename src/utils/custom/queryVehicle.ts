import { Final, VehicleProps } from "@data/final.schema";

export function queryVehicleWikiname(vehicle: string, final: Final): VehicleProps | undefined {
  const matchAir = final.aviation.find((curval) => {
    return curval.wikiname?.toLowerCase() === decodeURI(vehicle).replace(/_/g, " ").toLowerCase();
  });
  if (matchAir) {
    return matchAir;
  }

  const matchGround = final.army.find((curval) => {
    return curval.wikiname?.toLowerCase() === decodeURI(vehicle).replace(/_/g, " ").toLowerCase();
  });
  if (matchGround) {
    return matchGround;
  }

  const matchHelicopter = final.helicopters.find((curval) => {
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
  const matchAir = final.aviation.find((curval) => {
    return curval.intname.toLowerCase() === vehicle.toLowerCase();
  });
  if (matchAir) {
    return matchAir;
  }

  const matchGround = final.army.find((curval) => {
    return curval.intname.toLowerCase() === vehicle.toLowerCase();
  });
  if (matchGround) {
    return matchGround;
  }

  const matchHelicopter = final.helicopters.find((curval) => {
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

  final.aviation.forEach((element) => {
    if (element.wikiname?.search(vehicle) === 0) {
      FinalArray.push(element);
    }
  });
  final.army.forEach((element) => {
    if (element.wikiname?.search(vehicle) === 0) {
      FinalArray.push(element);
    }
  });
  final.helicopters.forEach((element) => {
    if (element.wikiname?.search(vehicle) === 0) {
      FinalArray.push(element);
    }
  });
  return FinalArray.length > 0 ? FinalArray : undefined;
}
