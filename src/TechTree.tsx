import own_img from "./img/Item_own.png";
import prem_img from "./img/Item_prem.png";
import squad_img from "./img/Item_squad.png";
import fighter from "./img/def_fighter_radar.svg";
import bomber from "./img/def_bomber_radar.svg";
import assault from "./img/def_assault_radar.svg";
import heavy_tank from "./img/def_heavy_tank_radar.svg";
import light_tank from "./img/def_light_tank_radar.svg";
import medium_tank from "./img/def_medium_tank_radar.svg";
import spaa from "./img/def_spaa_radar.svg";
import tank_destroyer from "./img/def_tank_destroyer_radar.svg";
import attack_helicopter from "./img/def_attack_helicopter_radar.svg";
import utility_helicopter from "./img/def_utility_helicopter_radar.svg";

import { useRecoilValue } from "recoil";
import { Final } from "./atom";

export function Item_own(): JSX.Element {
  return (
    <img
      alt="Item own.png"
      src={own_img}
      className="tree-item-js"
      data-file-width={160}
      data-file-height={48}
      width={160}
      height={48}
    />
  );
}

export function Item_prem(): JSX.Element {
  return (
    <img
      alt="Item prem.png"
      src={prem_img}
      className="tree-item-js"
      data-file-width={160}
      data-file-height={48}
      width={160}
      height={48}
    />
  );
}

export function Item_squad(): JSX.Element {
  return (
    <img
      alt="Item squad.png"
      src={squad_img}
      className="tree-item-js"
      data-file-width={160}
      data-file-height={48}
      width={160}
      height={48}
    />
  );
}

export function TechTreeImg(props: { vehicle: string,type: string }): JSX.Element {
  const { vehicle, type } = props;
  const FinalValue = useRecoilValue(Final);
  let fig_src = attack_helicopter;
  let br = "-1.0";
  if (type === "aircraft") {
    const fig = FinalValue.aircraft.find((curval)=>{
      return curval.intname === vehicle;
    });
    br = fig?.rb_br;
    switch (fig?.normal_type) {
      case "type_fighter":
        fig_src = fighter;
        break;
      case "type_bomber":
        fig_src=bomber;
        break;
      case "type_assault":
        fig_src=assault;
        break;
    }
  }
  if (type === "ground") {
    console.log(vehicle);
    const fig = FinalValue.ground.find((curval)=>{
      return curval.intname.toLowerCase() === vehicle;
    });
    br = fig?.rb_br;
    switch (fig?.normal_type) {
      case "type_light_tank":
        fig_src=light_tank;
        break;
      case "type_medium_tank":
        fig_src=medium_tank;
        break;
      case "type_heavy_tank":
        fig_src=heavy_tank;
        break;
      case "type_tank_destroyer":
        fig_src=tank_destroyer;
        break;
      case "type_spaa":
        fig_src=spaa;
        break;
    }
  }
  if (type === "helicopter") {
    const match = FinalValue.helicopter.find((curval)=>{
      return curval.intname === vehicle;
    });
    br = fig?.rb_br;
    switch (match?.normal_type) {
      case "type_utility_helicopter":
        fig_src = utility_helicopter;
        break;
      case "type_attack_helicopter":
        fig_src=attack_helicopter;
        break;
    }
  }
  return (
    <div className="tree-item-img">
      
      <img
        src={`https://encyclopedia.warthunder.com/slots/${vehicle}.png`}
        alt={`${vehicle}.png`}
      /><div className="br">{br}</div>
      <img src={fig_src} className="class" />
    </div>
  );
}
