import { VehicleProps } from "@data/final.schema";

import assault from "@/assets/img/def_assault_radar.svg";
import attack_helicopter from "@/assets/img/def_attack_helicopter_radar.svg";
import bomber from "@/assets/img/def_bomber_radar.svg";
import fighter from "@/assets/img/def_fighter_radar.svg";
import heavy_tank from "@/assets/img/def_heavy_tank_radar.svg";
import light_tank from "@/assets/img/def_light_tank_radar.svg";
import medium_tank from "@/assets/img/def_medium_tank_radar.svg";
import ship from "@/assets/img/def_ship_radar.svg";
import spaa from "@/assets/img/def_spaa_radar.svg";
import tank_destroyer from "@/assets/img/def_tank_destroyer_radar.svg";
import utility_helicopter from "@/assets/img/def_utility_helicopter_radar.svg";

export function vehicleIcon(vehicle: VehicleProps | undefined) {
  let classSrc = "";

  if (vehicle === undefined) {
    return classSrc;
  }

  switch (vehicle.normal_type) {
    case "type_fighter":
      classSrc = fighter;
      break;
    case "type_bomber":
      classSrc = bomber;
      break;
    case "type_assault":
      classSrc = assault;
      break;
    case "type_light_tank":
      classSrc = light_tank;
      break;
    case "type_medium_tank":
      classSrc = medium_tank;
      break;
    case "type_heavy_tank":
      classSrc = heavy_tank;
      break;
    case "type_tank_destroyer":
      classSrc = tank_destroyer;
      break;
    case "type_spaa":
      classSrc = spaa;
      break;
    case "type_utility_helicopter":
      classSrc = utility_helicopter;
      break;
    case "type_attack_helicopter":
      classSrc = attack_helicopter;
      break;
    case "type_boat":
      classSrc = ship;
      break;
    case "type_barge":
      classSrc = ship;
      break;
    case "type_battlecruiser":
      classSrc = ship;
      break;
    case "type_battleship":
      classSrc = ship;
      break;
    case "type_destroyer":
      classSrc = ship;
      break;
    case "type_frigate":
      classSrc = ship;
      break;
    case "type_heavy_cruiser":
      classSrc = ship;
      break;
    case "type_light_cruiser":
      classSrc = ship;
      break;
    case "type_strike_ucav":
      // fix if not fighter
      classSrc = fighter;
      break;
  }

  return classSrc;
}
