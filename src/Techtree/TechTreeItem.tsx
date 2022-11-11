import { Link } from "react-router-dom";

import { queryVehicle } from "../utils/QueryVehicle";

import { ItemImg } from "./ItemImg";
import assault from "./assets/img/def_assault_radar.svg";
import attack_helicopter from "./assets/img/def_attack_helicopter_radar.svg";
import bomber from "./assets/img/def_bomber_radar.svg";
import fighter from "./assets/img/def_fighter_radar.svg";
import heavy_tank from "./assets/img/def_heavy_tank_radar.svg";
import light_tank from "./assets/img/def_light_tank_radar.svg";
import medium_tank from "./assets/img/def_medium_tank_radar.svg";
import spaa from "./assets/img/def_spaa_radar.svg";
import tank_destroyer from "./assets/img/def_tank_destroyer_radar.svg";
import utility_helicopter from "./assets/img/def_utility_helicopter_radar.svg";

export function TechTreeItem(props: { intname: string }): JSX.Element {
  const { intname } = props;

  const match = queryVehicle(intname, "intname");
  if (!match) {
    throw new Error(`No match for ${intname}`);
  }

  let item_type: "own" | "prem" | "squad";
  if (match.cost_gold) {
    item_type = "prem";
  } else if (match.prem_type === "squad") {
    item_type = "squad";
  } else {
    item_type = "own";
  }

  let fig_src = attack_helicopter;
  switch (match.normal_type) {
    case "type_fighter":
      fig_src = fighter;
      break;
    case "type_bomber":
      fig_src = bomber;
      break;
    case "type_assault":
      fig_src = assault;
      break;
    case "type_light_tank":
      fig_src = light_tank;
      break;
    case "type_medium_tank":
      fig_src = medium_tank;
      break;
    case "type_heavy_tank":
      fig_src = heavy_tank;
      break;
    case "type_tank_destroyer":
      fig_src = tank_destroyer;
      break;
    case "type_spaa":
      fig_src = spaa;
      break;
    case "type_utility_helicopter":
      fig_src = utility_helicopter;
      break;
    case "type_attack_helicopter":
      fig_src = attack_helicopter;
      break;
  }

  return (
    <div className="tree-item">
      <div className="tree-item-background" id={match.intname}>
        <Link to={"/wt/techtree/" + match.intname} title={match.wikiname}>
          <ItemImg type={item_type} />
        </Link>
      </div>
      <div className="tree-item-text">
        <span className="tree-item-text-scroll">
          {match.displayname ? match.displayname : match.intname}
        </span>
      </div>
      <div className="tree-item-img">
        <img src={`./images/units/${intname.toLowerCase()}.png`} />
        <div className="br">{match.rb_br}</div>
        <img src={fig_src} className="class" />
      </div>
    </div>
  );
}
