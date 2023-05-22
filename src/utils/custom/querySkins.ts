import { VehicleProps } from "@data/final.schema";
import { getRecoil } from "recoil-nexus";

import { Countries, VehicleSkinsProp } from "@/skins.types";
import { SkinAtom } from "@/store/atom/atom";

function skinsFEloop(
  country: Countries,
  vehicle: VehicleProps,
  type: "ground" | "aircraft",
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
  if (vehicle.type === "ground" && country.ground) {
    const vehicleSkin = skinsFEloop(country, vehicle, "ground", historical);
    vehicleSkins.fictional.push(...vehicleSkin.fictional);
    vehicleSkins.historical.push(...vehicleSkin.historical);
  }

  if ((vehicle.type === "aircraft" || vehicle.type === "helicopter") && country.aircraft) {
    const vehicleSkin = skinsFEloop(country, vehicle, "aircraft", historical);
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

  Object.values(skins.historical).forEach((value) => {
    const value2 = value as Countries;
    const vehicleSkin = skinsCountryLoop(value2, vehicle, "historical");
    vehicleSkins.fictional.push(...vehicleSkin.fictional);
    vehicleSkins.historical.push(...vehicleSkin.historical);
  });

  Object.values(skins.fictional).forEach((value) => {
    const value2 = value as Countries;
    const vehicleSkin = skinsCountryLoop(value2, vehicle, "fictional");
    vehicleSkins.fictional.push(...vehicleSkin.fictional);
    vehicleSkins.historical.push(...vehicleSkin.historical);
  });

  return vehicleSkins;
}
