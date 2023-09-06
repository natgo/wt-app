import { useState } from "react";
import { useRecoilValue } from "recoil";

import { Menu } from "@mui/material";

import { FinalShopGroup } from "@/data/types/shop.schema";
import { FilterAtom, SearchName } from "@/store/atom/atom";
import { finalQuery } from "@/store/final";
import { querySkins } from "@/utils/custom/querySkins";
import { queryVehicleIntname } from "@/utils/custom/queryVehicle";
import { vehicleIcon } from "@/utils/custom/vehicleIcon";

import { Arrow } from "./Arrow";
import { EmptyDiv } from "./EmptyDiv";
import { RenderTechTreeItem } from "./RenderTechTreeItem";

export function TreeFolder(props: {
  folder: FinalShopGroup;
  name: string;
  img: string;
}): JSX.Element {
  const { folder, name, img } = props;
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

  if (!folder.vehicles[0]) {
    throw new Error("no vehicles in folder");
  }

  const brArray: { br: string; realbr: number }[] = [];

  folder.vehicles.forEach((vehicle) => {
    const match = queryVehicleIntname(vehicle.name, final);

    // classic javascript 0 == false
    if (match && match.br[1] && typeof match.realbr[1] === "number") {
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
  });

  brArray.sort((a, b) => a.realbr - b.realbr);

  const groupBr =
    brArray.at(0)?.br !== brArray.at(-1)?.br
      ? `${brArray.at(0)?.br} - ${brArray.at(-1)?.br}`
      : brArray.at(0)?.br;

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
        {folder.vehicles.map((element, index, array) => {
          const hasNextElement = Boolean(array[index + 1]);
          const nextElement = array[index + 1];

          const TechTreeItem = RenderTechTreeItem({ element, final, filter, search });

          const NextArrowType =
            nextElement && nextElement.reqAir !== "" ? (
              <Arrow length={0} type="short" />
            ) : (
              <EmptyDiv size={30} />
            );

          return [TechTreeItem, hasNextElement ? NextArrowType : null];
        })}
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
            <img
              src={vehicleIcon(queryVehicleIntname(folder.vehicles[0].name, final))}
              className="class"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
