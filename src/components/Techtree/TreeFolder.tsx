import { useState } from "react";
import { useRecoilValue } from "recoil";

import { Menu } from "@mui/material";

import { FilterAtom, SearchName } from "@/store/atom/atom";
import { finalQuery } from "@/store/final";
import { querySkins } from "@/utils/custom/querySkins";
import { queryVehicleIntname } from "@/utils/custom/queryVehicle";
import { vehicleIcon } from "@/utils/custom/vehicleIcon";

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

  let br: string | undefined = "-1.0";
  const brarr: { br: string; realbr: number }[] = [];
  console.log(children);
  const match = queryVehicleIntname(children[0][0].props.intname, final);
  const fig_src = vehicleIcon(match);
  br = match?.br[1];
  children.forEach((element) => {
    if (element[0].props && element[0].props.intname) {
      const match = queryVehicleIntname(element[0].props.intname, final);
      if (match) {
        brarr.push({ br: match.br[1], realbr: match.realbr[1] });
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
        if (filter.show_features && match.type === "ground" && match[filter.show_features]) {
          features = true;
        }
        if (findClass) {
          classes = true;
        }
      }
    }
  });

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
