import { useParams } from "react-router-dom";
import { useRecoilValue } from "recoil";

import { Mobility, SpecsCard, Survivability } from "@/components/Vehicle/VehicleItem";
import { Optics } from "@/components/Vehicle/VehicleOptics";
import { VehicleSkinsCard } from "@/components/Vehicle/VehicleSkinsCard";
import { Weapon } from "@/components/Vehicle/VehicleWeapon";
import { finalQuery } from "@/store/final";
import { queryVehicleIntname } from "@/utils/custom/QueryVehicle";

import "../Techtree/App.css";

export default function Vehicle(): JSX.Element {
  const params = useParams();
  const final = useRecoilValue(finalQuery);
  if (params.vehicleId) {
    console.log(params.vehicleId);
    const match = queryVehicleIntname(params.vehicleId, final);
    console.log(match);
    if (match) {
      if (match.type === "tank") {
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
      } else if (match.type === "aircraft") {
        return (
          <div>
            <SpecsCard vehicle={match} />
            <VehicleSkinsCard vehicle={match} />
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
