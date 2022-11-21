import { useParams } from "react-router-dom";

import {
  Mobility,
  SpecsCard,
  Survivability,
  VehicleSkinsCard,
} from "@/components/Vehicle/VehicleItem";
import { Optics } from "@/components/Vehicle/VehicleOptics";
import { Weapon } from "@/components/Vehicle/VehicleWeapon";
import { queryVehicleIntname } from "@/utils/custom/QueryVehicle";

import "../Techtree/App.css";

export default function Vehicle(): JSX.Element {
  const params = useParams();
  if (params.vehicleId) {
    console.log(params.vehicleId);
    const match = queryVehicleIntname(params.vehicleId);
    console.log(match);
    if (match) {
      if ("horsepower" in match) {
        return (
          <div>
            <SpecsCard vehicle={match} />
            <VehicleSkinsCard vehicle={match} />
            <Survivability vehicle={match} />
            <Mobility vehicle={match} />
            <Weapon vehicle={match} />
            <Optics vehicle={match} />
          </div>
        );
      } else {
        return (
          <div>
            <SpecsCard vehicle={match} />
            <VehicleSkinsCard vehicle={match} />
          </div>
        );
      }
    } else {
      return <b>No Match</b>;
    }
  } else {
    return <b>Not a vehicle.</b>;
  }
}
