import { useRecoilState } from "recoil";

import AddIcon from "@mui/icons-material/Add";
import { Fab } from "@mui/material";

import { SearchDialog } from "@/components/Techtree/SearchDialog";
import { SpecsCard } from "@/components/Vehicle/VehicleItem";
import { compareVehicleState } from "@/store/compare";
import { searchDialogState } from "@/store/search";
import { VehicleProps } from "@/types";

export default function Compare(): JSX.Element {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [compare, setCompare] = useRecoilState(compareVehicleState);
  const [, setSearchOpen] = useRecoilState(searchDialogState);

  const handleClickOpen = () => {
    setSearchOpen(true);
  };

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        paddingLeft: "30px",
        display: "grid",
        gridAutoFlow: "column",
        gridAutoColumns: "1fr",
        justifyItems: "center",
      }}
    >
      {compare.map((vehicle) => (
        <div key={vehicle.intname}>
          <SpecsCard vehicle={vehicle} />
          <CompareFunction vehicle={vehicle} />
        </div>
      ))}
      <Fab
        color="primary"
        sx={{ position: "absolute", bottom: "16px", left: "16px" }}
        onClick={handleClickOpen}
      >
        <AddIcon />
      </Fab>
      <SearchDialog type="compare" />
    </div>
  );
}

function CompareFunction(params: { vehicle: VehicleProps }) {
  const { vehicle } = params;
  if (vehicle.type === "tank") {
    return (
      <div>
        <div>Mas: {vehicle.mass / 1000}t</div>
        <div>Horsepower: {vehicle.horsepower}</div>
        <div>Power to weight: {(vehicle.horsepower / (vehicle.mass / 1000)).toFixed(1)} hp/t</div>
      </div>
    );
  }
  return null;
}
