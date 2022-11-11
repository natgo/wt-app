import { useParams } from "react-router-dom";

import { queryVehicle } from "../utils/QueryVehicle";

import "./App2.css";
import { Mobility, SpecsCard, Survivability } from "./VehicleItem";
import { Optics } from "./VehicleOptics";
import { Weapon } from "./VehicleWeapon";

export function Vehicle(): JSX.Element {
  const params = useParams();
  if (params.vehicleId) {
    console.log(params.vehicleId);
    const match = queryVehicle(params.vehicleId, "intname");
    console.log(match);
    if (match) {
      if ("horsepower" in match) {
        return (
          <div>
            <SpecsCard vehicle={match} link={params.vehicleId} item_type={"own"} />
            <Survivability vehicle={match} />
            <Mobility vehicle={match} />
            <Weapon vehicle={match} />
            <Optics vehicle={match} />
          </div>
        );
      } else {
        return (
          <div>
            <SpecsCard vehicle={match} link={params.vehicleId} item_type={"own"} />
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
