import { useParams } from "react-router-dom";

import "./App2.css";
import { SpecsCard } from "./VehicleItem";

export function Vehicle(): JSX.Element {
  const params = useParams();
  console.log(params);
  return (
    <SpecsCard
      intname={"b_48_firecrest"}
      link={params.vehicleId}
      type="aircraft"
      item_type={"own"}
    />
  );
}
