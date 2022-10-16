import { FinalProps } from "../types";

/**
 * Converts vehicle classes to human readable format.
 * @export
 * @param {FinalProps} vehicle - The Vehicle to parse classes.
 * @returns  {({ vehicle_type: string; extended_type: string[] | undefined; })} Object with normal type of the vehicle and array of extended types
 */
export function vehicleType(vehicle: FinalProps): {
  vehicle_type: string;
  extended_type: string[] | undefined;
} {
  let vehicle_type = "";
  switch (vehicle.normal_type) {
    case "type_tank_destroyer":
      vehicle_type = "Tank destroyer";
      break;
    case "type_light_tank":
      vehicle_type = "Light Tank";
      break;
    case "type_medium_tank":
      vehicle_type = "Medium tank";
      break;
    case "type_heavy_tank":
      vehicle_type = "Heavy tank";
      break;
    case "type_spaa":
      vehicle_type = "SPAA";
      break;
    case "type_fighter":
      vehicle_type = "Fighter";
      break;
    case "type_bomber":
      vehicle_type = "Bomber";
      break;
    case "type_assault":
      vehicle_type = "Strike aircraft";
      break;
    case "type_attack_helicopter":
      vehicle_type = "Attack helicopter";
      break;
    case "type_utility_helicopter":
      vehicle_type = "Utility helicopter";
      break;
  }

  const extended_type: string[] = [];
  vehicle.extended_type?.forEach((element) => {
    switch (element) {
      case "type_missile_tank":
        extended_type.push("ATGM vehicle");
        break;
      case "type_jet_fighter":
        extended_type.push("Jet fighter");
        break;
      case "type_jet_bomber":
        extended_type.push("Jet bomber");
        break;
      case "type_longrange_bomber":
        extended_type.push("Long Range bomber");
        break;
      case "type_frontline_bomber":
        extended_type.push("Frontline bomber");
        break;
      case "type_hydroplane":
        extended_type.push("Hydroplane");
        break;
      case "type_naval_aircraft":
        extended_type.push("Naval aircraft");
        break;
      case "type_torpedo_bomber":
        extended_type.push("Torpedo bomber");
        break;
      case "type_dive_bomber":
        extended_type.push("Dive bomber");
        break;
      case "type_interceptor":
        extended_type.push("Interceptor");
        break;
      case "type_aa_fighter":
        extended_type.push("Air Defence fighter");
        break;
      case "type_light_bomber":
        extended_type.push("Light bomber");
        break;
      case "type_utility_helicopter":
        extended_type.push("Utility helicopter");
        break;
    }
  });
  extended_type.sort();

  return { vehicle_type, extended_type: extended_type.length > 0 ? extended_type : undefined };
}
