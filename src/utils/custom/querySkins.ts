import { VehicleProps } from "@data/final.schema";
import { getRecoil } from "recoil-nexus";

import { Countries, VehicleSkinsProp } from "@/skins.types";
import { SkinAtom } from "@/store/atom/atom";

function skinsFEloop(
  country: Countries,
  vehicle: VehicleProps,
  type: "army" | "aviation",
  historical: "historical" | "fictional",
): VehicleSkinsProp {
  const vehicleSkins: VehicleSkinsProp = {
    historical: [],
    fictional: [],
  };
  const countryType = country[type];
  if (countryType !== undefined) {
    countryType.ungrouped?.forEach((skinelement) => {
      skinelement.intnames.forEach((element) => {
        if (element === vehicle.intname) {
          vehicleSkins[historical].push(skinelement);
        }
      });
    });
    if (countryType.grouped) {
      Object.values(countryType.grouped).forEach((value) => {
        value.forEach((skinelement) => {
          skinelement.intnames.forEach((element) => {
            if (element === vehicle.intname) {
              vehicleSkins[historical].push(skinelement);
            }
          });
        });
      });
    }
  }
  return vehicleSkins;
}

function skinsCountryLoop(
  country: Countries,
  vehicle: VehicleProps,
  historical: "historical" | "fictional",
): VehicleSkinsProp {
  const vehicleSkins: VehicleSkinsProp = {
    historical: [],
    fictional: [],
  };
  if (vehicle.type === "army" && country.army) {
    const vehicleSkin = skinsFEloop(country, vehicle, "army", historical);
    vehicleSkins.fictional.push(...vehicleSkin.fictional);
    vehicleSkins.historical.push(...vehicleSkin.historical);
  }

  if ((vehicle.type === "aviation" || vehicle.type === "helicopters") && country.aviation) {
    const vehicleSkin = skinsFEloop(country, vehicle, "aviation", historical);
    vehicleSkins.fictional.push(...vehicleSkin.fictional);
    vehicleSkins.historical.push(...vehicleSkin.historical);
  }
  return vehicleSkins;
}

export function querySkins(vehicle: VehicleProps): VehicleSkinsProp {
  const skins = getRecoil(SkinAtom);
  const vehicleSkins: VehicleSkinsProp = {
    historical: [],
    fictional: [],
  };
  const skinscountry = skins[vehicle.country];

  if (!skinscountry) {
    return vehicleSkins;
  }

  Object.values(skinscountry).forEach((value) => {
    const value2 = value as Countries;
    const vehicleSkinHistorical = skinsCountryLoop(value2, vehicle, "historical");
    vehicleSkins.fictional.push(...vehicleSkinHistorical.fictional);

    const vehicleSkinFictional = skinsCountryLoop(value2, vehicle, "fictional");
    vehicleSkins.fictional.push(...vehicleSkinFictional.fictional);
  });

  return vehicleSkins;
}
