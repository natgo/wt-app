import { useState } from "react";
import { useRecoilValue } from "recoil";

import { Menu } from "@mui/material";

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
import { querySkins } from "@/utils/custom/querySkins";
import { queryVehicleIntname } from "@/utils/custom/queryVehicle";

export function TreeFolder(props: {
  children: JSX.Element[][];
  name: string;
  img: string;
}): JSX.Element {
  const { children, name, img } = props;
  const final = useRecoilValue(finalQuery);
  const filter = useRecoilValue(FilterAtom);
  const search = useRecoilValue(SearchName);

  let skins = false;
  let searches = false;
  let features = false;
  let classes = false;

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  let fig_src = attack_helicopter;
  let br: string | undefined = "-1.0";
  const brarr: { br: string; realbr: number }[] = [];
  console.log(children);
  const match = queryVehicleIntname(children[0][0].props.intname, final);
  br = match?.rb_br;
  children.forEach((element) => {
    if (element[0].props && element[0].props.intname) {
      const match = queryVehicleIntname(element[0].props.intname, final);
      if (match) {
        brarr.push({ br: match.rb_br, realbr: match.rb_realbr });
        const vehicleSkins = querySkins(match);
        const findClass = filter.show_class.find((value) => {
          return value === match.normal_type;
        });
        if (vehicleSkins.historical.length > 0 || vehicleSkins.fictional.length > 0) {
          skins = true;
        }
        if (search === match.intname) {
          searches = true;
        }
        if (filter.show_features && match.type === "tank" && match[filter.show_features]) {
          features = true;
        }
        if (findClass) {
          classes = true;
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

  brarr.sort((a, b) => {
    return a.realbr - b.realbr;
  });

  let groupbr = "-1.0";
  if (br === brarr[brarr.length - 1].br) {
    if (br > brarr[0].br) {
      groupbr = `${brarr[0].br} - ${br}`;
    } else {
      groupbr = br;
    }
  } else {
    groupbr = `${br} - ${brarr[brarr.length - 1].br}`;
  }

  return (
    <div style={{ position: "relative" }}>
      <Menu
        id="tree-group-collapse"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        {children}
      </Menu>
      <div
        className="tree-group"
        aria-controls={open ? "demo-positioned-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        style={
          (!searches && search) ||
          (!features && filter.show_features) ||
          (filter.show_skins && !skins) ||
          (filter.show_class.length > 0 && !classes)
            ? { filter: "blur(4px)" }
            : {}
        }
      >
        <div className="tree-group-text">
          <span className="tree-item-text-scroll">{name}</span>
        </div>
        <div className="tree-group-img">
          <img src={`./images/units/${img.toLowerCase()}.png`} alt={`${img}.png`} />
          <div className="br_container">
            <div className="br">{groupbr}</div>
            <img src={fig_src} className="class" />
          </div>
        </div>
      </div>
    </div>
  );
}
