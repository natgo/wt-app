/**
 * Converts vehicle classes to human readable format.
 * @export
 * @param {string} normal_type - The regular class to convert to human readable format.
 * @param {string} extended_type - Array of extended types to convert to human readable format.
 * @returns  {({ vehicle_type: string; extended_type: string[] | undefined; })} Object with normal type of the vehicle and array of extended types
 */
export function vehicleType(
  normal_type: string,
  extended_type?: string[],
): {
  vehicle_type: string;
  extended_type: string[] | undefined;
} {
  let vehicle_type = "";
  switch (normal_type) {
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

  const extended_type_out: string[] = [];
  extended_type?.forEach((element) => {
    switch (element) {
      case "type_missile_tank":
        extended_type_out.push("ATGM vehicle");
        break;
      case "type_jet_fighter":
        extended_type_out.push("Jet fighter");
        break;
      case "type_jet_bomber":
        extended_type_out.push("Jet bomber");
        break;
      case "type_longrange_bomber":
        extended_type_out.push("Long Range bomber");
        break;
      case "type_frontline_bomber":
        extended_type_out.push("Frontline bomber");
        break;
      case "type_hydroplane":
        extended_type_out.push("Hydroplane");
        break;
      case "type_naval_aircraft":
        extended_type_out.push("Naval aircraft");
        break;
      case "type_torpedo_bomber":
        extended_type_out.push("Torpedo bomber");
        break;
      case "type_dive_bomber":
        extended_type_out.push("Dive bomber");
        break;
      case "type_interceptor":
        extended_type_out.push("Interceptor");
        break;
      case "type_aa_fighter":
        extended_type_out.push("Air Defence fighter");
        break;
      case "type_light_bomber":
        extended_type_out.push("Light bomber");
        break;
      case "type_utility_helicopter":
        extended_type_out.push("Utility helicopter");
        break;
    }
  });
  extended_type_out.sort();

  return {
    vehicle_type,
    extended_type: extended_type_out.length > 0 ? extended_type_out : undefined,
  };
}
