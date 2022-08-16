import { useParams } from "react-router-dom";
import { useRecoilValue } from "recoil";

import "./App2.css";
import { SpecsCard } from "./VehicleItem";
import { Final } from "./atom";

function QueryVehicle(vehicleId: string) {
  const FinalValue = useRecoilValue(Final);
  console.log(decodeURI(vehicleId).replace(/_/g, " ").toLowerCase());
  const matchAir = FinalValue.aircraft.find((curval) => {
    return curval.wikiname.toLowerCase() === decodeURI(vehicleId).replace(/_/g, " ").toLowerCase();
  });
  const matchGround = FinalValue.ground.find((curval) => {
    return curval.wikiname.toLowerCase() === decodeURI(vehicleId).replace(/_/g, " ").toLowerCase();
  });
  const matchHelicopter = FinalValue.helicopter.find((curval) => {
    return curval.wikiname.toLowerCase() === decodeURI(vehicleId).replace(/_/g, " ").toLowerCase();
  });
  if (matchAir) {
    return matchAir;
  }
  if (matchGround) {
    return matchGround;
  }
  if (matchHelicopter) {
    return matchHelicopter;
  }
}

export function Vehicle(): JSX.Element {
  const params = useParams();
  console.log(params.vehicleId);
  const match = QueryVehicle(params.vehicleId.replace(/\+/g, "/"));
  console.log(match);
  return (
    <SpecsCard vehicle={match} link={params.vehicleId} type="ground" item_type={"own"} />
  );
}
