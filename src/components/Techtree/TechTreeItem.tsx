import { Link } from "react-router-dom";

import { Final } from "@data/final.schema";

import { FilterProps } from "@/store/atom/types";
import { queryVehicleIntname } from "@/utils/custom/queryVehicle";
import { vehicleIcon } from "@/utils/custom/vehicleIcon";

import { BlurItem } from "./BlurItem";
import { ItemImg } from "./ItemImg";

interface TreeItemProps {
  intname: string;
  final: Final;
}

interface NormalTreeItemProps extends TreeItemProps {
  type: "normal";
}

interface FullTreeItemProps extends TreeItemProps {
  type: "blur";
  filter: FilterProps;
  search: string | undefined;
}

export function TechTreeItem(props: NormalTreeItemProps | FullTreeItemProps): JSX.Element {
  const { intname, final } = props;

  const vehicle = queryVehicleIntname(intname, final);
  if (!vehicle) {
    throw new Error(`No match for ${intname}`);
  }

  let item_type: "own" | "prem" | "squad";
  if (vehicle.cost_gold) {
    item_type = "prem";
  } else if (vehicle.prem_type === "squad") {
    item_type = "squad";
  } else {
    item_type = "own";
  }

  const classSrc = vehicleIcon(vehicle);

  return (
    <div
      className="tree-item"
      style={
        props.type === "blur"
          ? BlurItem(vehicle, props.filter, props.search)
            ? { filter: "blur(4px)" }
            : {}
          : {}
      }
    >
      <div className="tree-item-background" id={vehicle.intname}>
        <Link to={"/wt/techtree/" + vehicle.intname} title={vehicle.wikiname}>
          <ItemImg type={item_type} />
        </Link>
      </div>
      <div className="tree-item-text">
        <span className="tree-item-text-scroll">
          {vehicle.displayname ? vehicle.displayname : vehicle.intname}
        </span>
      </div>
      <div className="tree-item-img">
        <img src={`./images/units/${vehicle.intname.toLowerCase()}.png`} />
        <div className="br">{vehicle.br[1]}</div>
        <img src={classSrc} className="class" />
      </div>
    </div>
  );
}
