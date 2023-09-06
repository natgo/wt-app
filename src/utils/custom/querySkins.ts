import { VehicleProps } from "@data/final.schema";
import { getRecoil } from "recoil-nexus";

import { Aircraft, CountryTypes, Ungrouped, VehicleSkinsProp } from "@/skins.types";
import { SkinAtom } from "@/store/atom/atom";

function skinsFEloop(vehicles: Aircraft, vehicle: VehicleProps): Ungrouped[] {
  const vehicleSkins: Ungrouped[] = [];
  if (vehicles) {
    vehicles.ungrouped?.forEach((skin) => {
      skin.intnames.forEach((intname) => {
        if (intname === vehicle.intname) {
          vehicleSkins.push(skin);
        }
      });
    });
    if (vehicles.grouped) {
      Object.values(vehicles.grouped).forEach((skinArray) => {
        skinArray.forEach((skin) => {
          skin.intnames.forEach((intname) => {
            if (intname === vehicle.intname) {
              vehicleSkins.push(skin);
            }
          });
        });
      });
    }
  }
  return vehicleSkins;
}

function skinsCountryLoop(country: CountryTypes, vehicle: VehicleProps) {
  if (vehicle.type === "army" && country.army) {
    return skinsFEloop(country.army, vehicle);
  }

  if ((vehicle.type === "aviation" || vehicle.type === "helicopters") && country.aviation) {
    return skinsFEloop(country.aviation, vehicle);
  }

  return [];
}

export function querySkins(vehicle: VehicleProps): VehicleSkinsProp {
  const skins = getRecoil(SkinAtom);

  const skinscountry = skins[vehicle.country];

  return {
    historical: skinscountry?.historical ? skinsCountryLoop(skinscountry.historical, vehicle) : [],
    fictional: skinscountry?.fictional ? skinsCountryLoop(skinscountry.fictional, vehicle) : [],
  };
}
