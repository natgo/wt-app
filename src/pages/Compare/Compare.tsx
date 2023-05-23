import { Fragment } from "react";
import { useRecoilState } from "recoil";

import AddIcon from "@mui/icons-material/Add";
import { Fab } from "@mui/material";

import { GroundProps, VehicleProps } from "@data/final.schema";

import { SearchDialog } from "@/components/Techtree/SearchDialog";
import { SpecsCard } from "@/components/Vehicle/VehicleItem";
import { Optics } from "@/components/Vehicle/VehicleOptics";
import { GroundWeapon } from "@/components/Vehicle/VehicleWeapon";
import { compareVehicleState } from "@/store/compare";
import { searchDialogState } from "@/store/search";

export default function Compare(): JSX.Element {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [compare, setCompare] = useRecoilState(compareVehicleState);
  const [, setSearchOpen] = useRecoilState(searchDialogState);

  const handleClickOpen = () => {
    setSearchOpen(true);
  };

  return (
    <div className="grid h-full w-full auto-cols-fr px-8">
      <div className="grid auto-cols-fr grid-flow-col justify-items-center">
        {compare.map((vehicle) => (
          <div key={vehicle.intname}>
            <SpecsCard vehicle={vehicle} />
          </div>
        ))}
      </div>
      <CompareFunction vehicles={compare} />

      <Fab
        color="primary"
        sx={{ position: "absolute", bottom: "1rem", left: "1rem" }}
        onClick={handleClickOpen}
      >
        <AddIcon />
      </Fab>
      <SearchDialog type="compare" />
    </div>
  );
}

function CompareFunction(params: { vehicles: VehicleProps[] }): JSX.Element | null {
  const { vehicles } = params;
  if (vehicles.length > 0 && vehicles[0].type === "army") {
    const vehicles2 = vehicles as GroundProps[];
    return (
      <>
        <CompareGround vehicles={vehicles2} render="mass" />
        <CompareGround vehicles={vehicles2} render="horsepower" />
        <CompareGround vehicles={vehicles2} render="powertoweight" />
        <div className="row-span-2 grid auto-cols-fr grid-flow-col">
          {vehicles2.map((vehicle) => (
            <Fragment key={vehicle.intname}>
              <div>
                <GroundWeapon vehicle={vehicle} />
              </div>
              <div className="row-start-2">
                <Optics vehicle={vehicle} />
              </div>
            </Fragment>
          ))}
        </div>
      </>
    );
  }
  return null;
}

function CompareGround(props: {
  vehicles: GroundProps[];
  render: "mass" | "horsepower" | "powertoweight";
}) {
  const { vehicles, render } = props;
  let diffent = false;
  switch (render) {
    case "mass":
      diffent = isDifferent(vehicles.map((vehicle) => vehicle.mass));
      break;
    case "horsepower":
      diffent = isDifferent(vehicles.map((vehicle) => vehicle.horsepower));
      break;
    case "powertoweight":
      diffent = isDifferent(vehicles.map((vehicle) => vehicle.horsepower / (vehicle.mass / 1000)));
      break;
  }

  if (diffent) {
    return (
      <div className="grid grid-flow-col">
        {vehicles.map((vehicle) => {
          switch (render) {
            case "mass":
              return <MassRender vehicle={vehicle} key={vehicle.intname} />;
            case "horsepower":
              return <HorsepowerRender vehicle={vehicle} key={vehicle.intname} />;
            case "powertoweight":
              return <PowerToWeightRender vehicle={vehicle} key={vehicle.intname} />;
          }
        })}
      </div>
    );
  }
  return null;
}

function isDifferent(numbers: number[]) {
  let diffent = false;
  let last = numbers[0];
  numbers.forEach((element) => {
    if (element !== last) {
      diffent = true;
    }
    last = element;
  });

  return diffent;
}

function MassRender(props: { vehicle: GroundProps }) {
  return <div>Mas: {props.vehicle.mass / 1000}t</div>;
}

function HorsepowerRender(props: { vehicle: GroundProps }) {
  return <div>Horsepower: {props.vehicle.horsepower}</div>;
}

function PowerToWeightRender(props: { vehicle: GroundProps }) {
  return (
    <div>
      Power to weight: {(props.vehicle.horsepower / (props.vehicle.mass / 1000)).toFixed(1)} hp/t
    </div>
  );
}
