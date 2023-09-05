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

  let hasSkins = false;
  let hasSearchResults = false;
  let hasFeatures = false;
  let hasClasses = false;

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const match = queryVehicleIntname(children[0]?.[0]?.props.intname, final);

  const currentBr = match?.br[1] ?? "-1.0";
  const brArray: { br: string; realbr: number }[] = [];

  children.forEach((child) => {
    const childProps = child[0]?.props;

    if (childProps && childProps.intname) {
      const match = queryVehicleIntname(childProps.intname, final);

      if (match && match.br[1] && match.realbr[1]) {
        brArray.push({ br: match.br[1], realbr: match.realbr[1] });
        const vehicleSkins = querySkins(match);
        const findClass = filter.show_class.find((value) => value === match.normal_type);

        if (vehicleSkins.historical.length > 0 || vehicleSkins.fictional.length > 0) {
          hasSkins = true;
        }
        if (search === match.intname) {
          hasSearchResults = true;
        }
        if (filter.show_features && match.type === "army" && match[filter.show_features]) {
          hasFeatures = true;
        }
        if (findClass) {
          hasClasses = true;
        }
      }
    }
  });

  brArray.sort((a, b) => a.realbr - b.realbr);

  let groupBr = "-1.0";

  if (currentBr === brArray.at(-1)?.br) {
    if (brArray[0]?.br && currentBr > brArray[0].br) {
      groupBr = `${brArray[0].br} - ${currentBr}`;
    } else {
      groupBr = currentBr;
    }
  } else {
    groupBr = `${currentBr} - ${brArray.at(-1)?.br}`;
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
          (!hasSearchResults && search) ||
          (!hasFeatures && filter.show_features) ||
          (filter.show_skins && !hasSkins) ||
          (filter.show_class.length > 0 && !hasClasses)
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
            <div className="br">{groupBr}</div>
            <img src={vehicleIcon(match)} className="class" />
          </div>
        </div>
      </div>
    </div>
  );
}
