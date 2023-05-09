import { ModClassName } from "@data/modifications.schema";

export function modClassToString(className: ModClassName): string {
  let modClass = "None";
  switch (className) {
    case "lth":
      modClass = "Flight performance";
      break;
    case "armor":
      modClass = "Survivability";
      break;
    case "weapon":
      modClass = "Weaponry";
      break;
    case "mobility":
      modClass = "Mobility";
      break;
    case "protection":
      modClass = "Protection";
      break;
    case "firepower":
      modClass = "Firepower";
      break;
    case "primaryWeapon":
      modClass = "Offensive armament";
      break;
    case "secondaryWeapon":
      modClass = "Secondary weapon";
      break;
    case "premiumMods":
      modClass = "Special";
      break;
    case "expendable":
      modClass = "Supplies";
      break;
    case "seakeeping":
      modClass = "Seakeeping";
      break;
    case "unsinkability":
      modClass = "Unsinkability";
      break;
  }
  return modClass;
}
