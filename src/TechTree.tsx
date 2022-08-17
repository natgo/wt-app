import { Link } from "react-router-dom";

import own_img from "./img/Item_own.png";
import prem_img from "./img/Item_prem.png";
import squad_img from "./img/Item_squad.png";
import assault from "./img/def_assault_radar.svg";
import attack_helicopter from "./img/def_attack_helicopter_radar.svg";
import bomber from "./img/def_bomber_radar.svg";
import fighter from "./img/def_fighter_radar.svg";
import heavy_tank from "./img/def_heavy_tank_radar.svg";
import light_tank from "./img/def_light_tank_radar.svg";
import medium_tank from "./img/def_medium_tank_radar.svg";
import spaa from "./img/def_spaa_radar.svg";
import tank_destroyer from "./img/def_tank_destroyer_radar.svg";
import utility_helicopter from "./img/def_utility_helicopter_radar.svg";
import { openfolder } from "./tt";
import { QueryVehicle } from "./Vehicle";

export function ItemImg(props: { type: "own" | "prem" | "squad" }): JSX.Element {
  const { type } = props;
  let src = squad_img;
  switch (type) {
    case "own":
      src = own_img;
      break;
    case "prem":
      src = prem_img;
      break;
    case "squad":
      src = squad_img;
      break;
  }
  return (
    <img
      alt={`Item ${type}.png`}
      src={src}
      className="tree-item-js"
      data-file-width={160}
      data-file-height={48}
      width={160}
      height={48}
    />
  );
}

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
  const match = QueryVehicle(intname,"intname");
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
        <Link to={"/techtree" + encodeURI(itemLink)} title={title}>
          <ItemImg type={item_type} />
        </Link>
      </div>
      <div className="tree-item-text">
        <span className="tree-item-text-scroll">{text}</span>
      </div>
      <div className="tree-item-img">
        <img
          src={`https://encyclopedia.warthunder.com/slots/${intname}.png`}
          alt={`${intname}.png`}
        />
        <div className="br">{br}</div>
        <img src={fig_src} className="class" />
      </div>
    </div>
  );
}

export function Rank(props: { rank: "I" | "II" | "III" | "IV" | "V" | "VI" | "VII" }): JSX.Element {
  const { rank } = props;
  return (
    <th
      style={{
        textAlign: "center",
        whiteSpace: "nowrap",
        verticalAlign: "middle",
        borderRight: "solid 1px #eeeeee",
        width: 32,
      }}
    >
      <div
        style={{
          transform: "rotate(-90deg)",
          marginLeft: "-10em",
          marginRight: "-10em",
        }}
      >
        {rank} Rank
      </div>
    </th>
  );
}

export function Research(props: { research: number; premium: number }): JSX.Element {
  const { research, premium } = props;
  return (
    <tr>
      <th style={{ borderRight: "solid 1px #eeeeee" }} />
      <th colSpan={research} style={{ borderRight: "solid 1px #eeeeee" }}>
        <span>Researchable vehicles</span>
      </th>
      <th colSpan={premium}>
        <span>Premium vehicles</span>
      </th>
    </tr>
  );
}

export function Arrow(props: { type: string }): JSX.Element {
  const { type } = props;
  if (type === "small") {
    return (
      <div
        className="tree-arrow"
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <img src="/images/Arrow-small.png" alt="Arrow.png" />
      </div>
    );
  } else {
    return (
      <div
        className="tree-arrow"
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <img src="/images/Arrow-small.png" alt="Arrow.png" />
      </div>
    );
  }
}

export function EmptyDiv(): JSX.Element {
  return (
    <div
      style={{
        position: "relative",
        width: 160,
        height: 30,
        margin: "auto",
      }}
    />
  );
}

export function TreeFolder(props: { children: React.ReactElement[]; name: string; img: string }) {
  const { children, name, img } = props;
  let fig_src = attack_helicopter;
  let br: string | undefined = "-1.0";
  const brarr: string[] = [];
  const match = QueryVehicle(children[0].props.intname,"intname");
  br = match?.rb_br;
  children.forEach((element) => {
    if (element.props) {
      if (element.props.intname) {
        const match = QueryVehicle(element.props.intname,"intname");
        if (match) {
          brarr.push(match.rb_br);
        }
      }
    }
  });
  
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

  brarr.sort();
  let groupbr = "-1.0";
  if (br === brarr[brarr.length - 1]) {
    if (br > brarr[0]) {
      groupbr = `${brarr[0]} - ${br}`;
    } else {
      groupbr = br;
    }
  } else {
    groupbr = `${br} - ${brarr[brarr.length - 1]}`;
  }
  return (
    <div style={{ position: "relative" }}>
      <div className="tree-group-collapse" style={{ display: "none", position: "absolute" }}>
        {children}
      </div>
      <div
        className="tree-group"
        onClick={(event) => {
          openfolder(event);
        }}
      >
        <div className="tree-group-text">
          <span className="tree-item-text-scroll">{name}</span>
        </div>
        <div className="tree-group-img">
          <img src={`https://encyclopedia.warthunder.com/slots/${img}.png`} alt={`${img}.png`} />
          <div className="br_container">
            <div className="br">{groupbr}</div>
            <img src={fig_src} className="class" />
          </div>
        </div>
      </div>
    </div>
  );
}

export function MediaHead() {
  return (
    <h2>
      <span className="mw-headline" id="Media">
        Media
      </span>
    </h2>
  );
}
