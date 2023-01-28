import { Link } from "react-router-dom";
import { useRecoilValue } from "recoil";

import { finalQuery } from "@/store/final";
import { shopQuery } from "@/store/shop";
import { FinalShopGroup, FinalShopItem, VehicleProps } from "@/types";
import { queryVehicleIntname } from "@/utils/custom/queryVehicle";

import { VehicleNeighborFolder } from "./VehicleNeighborFolder";

export function VehicleNeighbor(props: { vehicle: VehicleProps }) {
  const { vehicle } = props;
  const final = useRecoilValue(finalQuery);
  const shopData = useRecoilValue(shopQuery);

  let type: "army" | "aviation" | "helicopters" = "army";
  switch (vehicle.type) {
    case "tank":
      type = "army";
      break;
    case "aircraft":
      type = "aviation";
      break;
    case "helicopter":
      type = "helicopters";
      break;
  }

  let pos = 0;
  const col = shopData[vehicle.country][type].range.findIndex((element) => {
    const row = element.findIndex((element) => {
      if ("vehicles" in element) {
        return element.vehicles.find((element) => {
          return element.name === vehicle.intname;
        });
      } else {
        return element.name === vehicle.intname;
      }
    });
    if (row > pos) {
      pos = row;
    }
    if (row >= 0) {
      return true;
    }
  });
  console.log(col, pos);

  const curpos = shopData[vehicle.country][type].range[col][pos];
  let curfolder = false;
  if ("vehicles" in curpos) {
    curfolder = true;
  }

  const nextpos = shopData[vehicle.country][type].range[col][pos + 1] as
    | FinalShopItem
    | FinalShopGroup
    | undefined;
  let next: VehicleProps | undefined = undefined;

  if (nextpos) {
    if ("vehicles" in nextpos) {
      next = queryVehicleIntname(nextpos.vehicles[0].name, final);
    } else {
      next = queryVehicleIntname(nextpos.name, final);
    }
  }

  const prevpos = shopData[vehicle.country][type].range[col][pos - 1] as
    | FinalShopItem
    | FinalShopGroup
    | undefined;
  let prev: VehicleProps | undefined = undefined;
  if (prevpos) {
    if ("vehicles" in prevpos) {
      prev = queryVehicleIntname(prevpos.vehicles[0].name, final);
    } else {
      prev = queryVehicleIntname(prevpos.name, final);
    }
  }

  return (
    <VehicleNeighbors next={next} prev={prev}>
      <VehicleNeighborFolder vehicle={vehicle} folder={curpos} isFolder={curfolder} />
    </VehicleNeighbors>
  );
}

export function VehicleNeighbors(props: {
  children: JSX.Element;
  next: VehicleProps | undefined;
  prev: VehicleProps | undefined;
}) {
  const { children, next, prev } = props;

  if (next && prev) {
    return (
      <>
        <div className="prev">
          <Link to={`../techtree/${prev.intname}`} title={prev.wikiname}>
            {prev.displayname}
          </Link>
        </div>
        <div className="next">
          <Link to={`../techtree/${next.intname}`} title={next.wikiname}>
            {next.displayname}
          </Link>
        </div>
        {children}
      </>
    );
  }

  if (next) {
    return (
      <>
        <div className="next">
          <Link to={`../techtree/${next.intname}`} title={next.wikiname}>
            {next.displayname}
          </Link>
        </div>
        {children}
      </>
    );
  }

  if (prev) {
    return (
      <>
        <div className="prev">
          <Link to={`../techtree/${prev.intname}`} title={prev.wikiname}>
            {prev.displayname}
          </Link>
        </div>
        {children}
      </>
    );
  }

  return null;
}
