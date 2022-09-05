import { useParams } from "react-router-dom";

import "./App2.css";
import { Mobility, SpecsCard, Survivability } from "./VehicleItem";
import { GroundProps } from "../types";
import { QueryVehicle } from "../QueryVehicle";

export function Vehicle(): JSX.Element {
  const params = useParams();
  if (params.vehicleId) {
    console.log(params.vehicleId);
    const match = QueryVehicle(params.vehicleId.replace(/\+/g, "/"), "wikiname");
    console.log(match);
    if (match) {
      if ("horsepower" in match) {
        return (
          <div>
            <SpecsCard vehicle={match} link={params.vehicleId} item_type={"own"} />
            <Survivability vehicle={match} />
            <Mobility vehicle={match} />
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
