import { useParams } from "react-router-dom";

import { queryVehicleIntname } from "../utils/QueryVehicle";

import "./App2.css";
import { Mobility, SpecsCard, Survivability, VehicleSkinsCard } from "./VehicleItem";
import { Optics } from "./VehicleOptics";
import { Weapon } from "./VehicleWeapon";

export function Vehicle(): JSX.Element {
  const params = useParams();
  if (params.vehicleId) {
    console.log(params.vehicleId);
    const match = queryVehicleIntname(params.vehicleId);
    console.log(match);
    if (match) {
      if ("horsepower" in match) {
        return (
          <div>
            <SpecsCard vehicle={match} link={params.vehicleId} />
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
            <SpecsCard vehicle={match} link={params.vehicleId} />
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
