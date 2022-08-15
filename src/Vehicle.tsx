import { useParams } from "react-router-dom";

import "./App2.css";
import { SpecsCard } from "./VehicleItem";

export function Vehicle(): JSX.Element {
  const params = useParams();
  console.log(params);
  return (
    <SpecsCard
      intname={"germ_vt_1_2"}
      link={params.vehicleId}
      type="ground"
      text="Fury&nbsp;Mk I"
      item_type={"own"}
    />
  );
}
