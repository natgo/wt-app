import { getRecoil } from "recoil-nexus";

import { SkinAtom } from "../atom";
import { Countries, FinalProps, VehicleSkinsProp } from "../types";

export function querySkins(vehicle: FinalProps): VehicleSkinsProp {
  const skins = getRecoil(SkinAtom);
  const vehicleSkins: VehicleSkinsProp = {
    historical: [],
    fictional: [],
  };

  Object.values(skins.historical).forEach((value) => {
    const value2 = value as Countries;
    if (vehicle.type === "tank" && value2.ground) {
      value2.ground.ungrouped?.forEach((skinelement) => {
        skinelement.intnames.forEach((element) => {
          if (element === vehicle.intname) {
            vehicleSkins.historical.push(skinelement);
          }
        });
      });
      if (value2.ground.grouped) {
        Object.values(value2.ground.grouped).forEach((value) => {
          value.forEach((skinelement) => {
            skinelement.intnames.forEach((element) => {
              if (element === vehicle.intname) {
                vehicleSkins.historical.push(skinelement);
              }
            });
          });
        });
      }
    }

    if (vehicle.type === "aircraft" && value2.aircraft) {
      value2.aircraft.ungrouped?.forEach((skinelement) => {
        skinelement.intnames.forEach((element) => {
          if (element === vehicle.intname) {
            vehicleSkins.historical.push(skinelement);
          }
        });
      });
      if (value2.aircraft.grouped) {
        Object.values(value2.aircraft.grouped).forEach((value) => {
          value.forEach((skinelement) => {
            skinelement.intnames.forEach((element) => {
              if (element === vehicle.intname) {
                vehicleSkins.historical.push(skinelement);
              }
            });
          });
        });
      }
    }
  });

  Object.values(skins.fictional).forEach((value) => {
    const value2 = value as Countries;
    if (vehicle.type === "tank" && value2.ground) {
      value2.ground.ungrouped?.forEach((skinelement) => {
        skinelement.intnames.forEach((element) => {
          if (element === vehicle.intname) {
            vehicleSkins.fictional.push(skinelement);
          }
        });
      });
      if (value2.ground.grouped) {
        Object.values(value2.ground.grouped).forEach((value) => {
          value.forEach((skinelement) => {
            skinelement.intnames.forEach((element) => {
              if (element === vehicle.intname) {
                vehicleSkins.fictional.push(skinelement);
              }
            });
          });
        });
      }
    }

    if (vehicle.type === "aircraft" && value2.aircraft) {
      value2.aircraft.ungrouped?.forEach((skinelement) => {
        skinelement.intnames.forEach((element) => {
          if (element === vehicle.intname) {
            vehicleSkins.fictional.push(skinelement);
          }
        });
      });
      if (value2.aircraft.grouped) {
        Object.values(value2.aircraft.grouped).forEach((value) => {
          value.forEach((skinelement) => {
            skinelement.intnames.forEach((element) => {
              if (element === vehicle.intname) {
                vehicleSkins.fictional.push(skinelement);
              }
            });
          });
        });
      }
    }
  });

  return vehicleSkins;
}
