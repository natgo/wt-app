import { Link } from "react-router-dom";
import { useRecoilValue } from "recoil";

import assault from "@/assets/img/def_assault_radar.svg";
import attack_helicopter from "@/assets/img/def_attack_helicopter_radar.svg";
import bomber from "@/assets/img/def_bomber_radar.svg";
import fighter from "@/assets/img/def_fighter_radar.svg";
import heavy_tank from "@/assets/img/def_heavy_tank_radar.svg";
import light_tank from "@/assets/img/def_light_tank_radar.svg";
import medium_tank from "@/assets/img/def_medium_tank_radar.svg";
import spaa from "@/assets/img/def_spaa_radar.svg";
import tank_destroyer from "@/assets/img/def_tank_destroyer_radar.svg";
import utility_helicopter from "@/assets/img/def_utility_helicopter_radar.svg";
import { FilterAtom, SearchName } from "@/store/atom/atom";
import { finalQuery } from "@/store/final";
import { queryVehicleIntname } from "@/utils/custom/queryVehicle";

import { BlurItem } from "./BlurItem";
import { ItemImg } from "./ItemImg";

export function TechTreeItem(props: { intname: string }): JSX.Element {
  const { intname } = props;
  const final = useRecoilValue(finalQuery);
  const filter = useRecoilValue(FilterAtom);
  const search = useRecoilValue(SearchName);

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

  let classSrc = attack_helicopter;
  switch (vehicle.normal_type) {
    case "type_fighter":
      classSrc = fighter;
      break;
    case "type_bomber":
      classSrc = bomber;
      break;
    case "type_assault":
      classSrc = assault;
      break;
    case "type_light_tank":
      classSrc = light_tank;
      break;
    case "type_medium_tank":
      classSrc = medium_tank;
      break;
    case "type_heavy_tank":
      classSrc = heavy_tank;
      break;
    case "type_tank_destroyer":
      classSrc = tank_destroyer;
      break;
    case "type_spaa":
      classSrc = spaa;
      break;
    case "type_utility_helicopter":
      classSrc = utility_helicopter;
      break;
    case "type_attack_helicopter":
      classSrc = attack_helicopter;
      break;
  }

  return (
    <div
      className="tree-item"
      style={BlurItem(vehicle, filter, search) ? { filter: "blur(4px)" } : {}}
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
