import { FilterProps } from "@/store/atom/types";
import { VehicleProps } from "@/types";
import { querySkins } from "@/utils/custom/querySkins";

export function BlurItem(
  vehicle: VehicleProps,
  filter: FilterProps,
  search: string | undefined,
): boolean {
  const vehicleSkins = querySkins(vehicle);

  if (search !== vehicle.intname && search) {
    return true;
  }
  if (search !== vehicle.intname && search) {
    return true;
  }
  if (
    filter.show_skins &&
    vehicleSkins.historical.length === 0 &&
    vehicleSkins.fictional.length === 0
  ) {
    return true;
  }
  if (vehicle.type === "tank" && filter.show_features && !vehicle[filter.show_features]) {
    return true;
  }

  const findClass = filter.show_class.find((value) => {
    return value === vehicle.normal_type;
  });
  if (!findClass && filter.show_class.length > 0) {
    return true;
  }

  return false;
}
