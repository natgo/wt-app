import { Link } from "react-router-dom";

import { QueryVehicle } from "../QueryVehicle";

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

export function TechTreeItem(props: {
  intname: string;
  type: string;
  link: string;
  text: string;
  title: string;
  item_type: "own" | "prem" | "squad";
}): JSX.Element {
  const { intname, type, link, text, title, item_type } = props;
  let fig_src = attack_helicopter;
  let br: string | undefined = "-1.0";
  const match = QueryVehicle(intname, "intname");
  br = match?.rb_br;

  switch (match?.normal_type) {
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

  let itemLink = link;
  if (link.includes("/", 1)) {
    console.log(link);
    itemLink = "/" + link.substring(1).replace("/", "+");
  }
  return (
    <div className="tree-item">
      <div className="tree-item-background" id={title}>
        <Link to={"/wt/techtree" + encodeURI(itemLink)} title={title}>
          <ItemImg type={item_type} />
        </Link>
      </div>
      <div className="tree-item-text">
        <span className="tree-item-text-scroll">{text}</span>
      </div>
      <div className="tree-item-img">
        <img src={`./images/units/${intname}.png`} alt={`${intname}.png`} />
        <div className="br">{br}</div>
        <img src={fig_src} className="class" />
      </div>
    </div>
  );
}
