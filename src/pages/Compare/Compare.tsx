import { useRecoilState } from "recoil";

import AddIcon from "@mui/icons-material/Add";
import { Fab } from "@mui/material";

import { SearchDialog } from "@/components/Techtree/SearchDialog";
import { SpecsCard } from "@/components/Vehicle/VehicleItem";
import { Optics } from "@/components/Vehicle/VehicleOptics";
import { GroundWeapon } from "@/components/Vehicle/VehicleWeapon";
import { compareVehicleState } from "@/store/compare";
import { searchDialogState } from "@/store/search";
import { GroundProps, VehicleProps } from "@/types";

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
      }}
    >
      <div
        style={{
          display: "grid",
          gridAutoFlow: "column",
          gridAutoColumns: "1fr",
          justifyItems: "center",
        }}
      >
        {compare.map((vehicle) => (
          <div key={vehicle.intname}>
            <SpecsCard vehicle={vehicle} />
          </div>
        ))}
      </div>
      <CompareFunction vehicles={compare} />

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

function CompareFunction(params: { vehicles: VehicleProps[] }) {
  const { vehicles } = params;
  if (vehicles.length > 0 && vehicles[0].type === "tank") {
    const vehicles2 = vehicles as GroundProps[];
    return (
      <div
        style={{
          display: "grid",
          gridAutoFlow: "column",
          gridAutoRows: "1fr",
          gridRow: 2,
        }}
      >
        {vehicles2.map((vehicle) => (
          <>
            <div>
              <div>Mas: {vehicle.mass / 1000}t</div>
              <div>Horsepower: {vehicle.horsepower}</div>
              <div>
                Power to weight: {(vehicle.horsepower / (vehicle.mass / 1000)).toFixed(1)} hp/t
              </div>
              <GroundWeapon vehicle={vehicle} />
            </div>
            <div style={{ gridRow: 2 }}>
              <Optics vehicle={vehicle} />
            </div>
          </>
        ))}
      </div>
    );
  }
  return null;
}
