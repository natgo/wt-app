export function featureToDisplay(feature: string): string {
  let display_feature = "";
  switch (feature) {
    case "has_lws":
      display_feature = "LWS";
      break;
    case "hydro_suspension":
      display_feature = "Hydroneumatic Suspension";
      break;
    case "can_float":
      display_feature = "Amphibious";
      break;
    case "has_synchro":
      display_feature = "Full synchro gearbox";
      break;
    case "has_neutral":
      display_feature = "Neutral Steer";
      break;
    case "has_dozer":
      display_feature = "Self-entrenching equipment";
      break;
    case "has_ess":
      display_feature = "ESS";
      break;
    case "has_smoke":
      display_feature = "Smoke grenades";
      break;
    case "has_era":
      display_feature = "ERA";
      break;
    case "has_composite":
      display_feature = "Composite armour";
      break;
    case "has_laser_range":
      display_feature = "Laser Rangefinder";
      break;
    case "has_range":
      display_feature = "Rangefinder";
      break;
  }
  return display_feature;
}
