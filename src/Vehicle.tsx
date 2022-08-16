import { useParams } from "react-router-dom";
import { useRecoilValue } from "recoil";

import "./App2.css";
import { Final } from "./atom";
import { SpecsCard } from "./VehicleItem";

function QueryVehicle(vehicleId:string) {
  const FinalValue = useRecoilValue(Final);
  console.log(vehicleId);
  console.log(vehicleId.replace("_"," ").replace("_"," "));
  const matchAir = FinalValue.aircraft.find((curval) => {
    return curval.wikiname.toLowerCase() === vehicleId.replace("_"," ").replace("_"," ").toLowerCase();
  });
  return matchAir;
}

export function Vehicle(): JSX.Element {
  const params = useParams();
  console.log(params);
  const match = QueryVehicle(params.vehicleId);
  console.log(match);
  return (
    <SpecsCard
      intname={"b_48_firecrest"}
      link={params.vehicleId}
      type="aircraft"
      item_type={"own"}
    />
  );
}
