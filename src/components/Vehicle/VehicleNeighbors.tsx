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
    case "ground":
      type = "army";
      break;
    case "aircraft":
      type = "aviation";
      break;
    case "helicopter":
      type = "helicopters";
      break;
  }

  const vehicleRange = shopData[vehicle.country][type].range;
  const currentRank = vehicleRange[vehicle.rank - 1];

  let pos: number | undefined = undefined;
  const col = currentRank.range.findIndex((element) => {
    if (element === "drawArrow") {
      return false;
    }
    return element.find((element, index) => {
      if (element.name === vehicle.intname) {
        pos = index;
        return true;
      }
    });
  });

  const currentCol = currentRank.range[col];
  if (currentCol === "drawArrow") {
    throw new Error("CurrentCol is Arrow");
  }
  if (pos === undefined) {
    throw new Error("Currentpos not found");
  }

  const currentPos = currentCol[pos];
  let curfolder = false;
  if ("vehicles" in currentPos) {
    curfolder = true;
  }

  const nextInCol = currentCol[pos + 1];
  let next: VehicleProps | undefined = undefined;

  if (nextInCol) {
    if ("vehicles" in nextInCol) {
      next = queryVehicleIntname(nextInCol.vehicles[0].name, final);
    } else {
      next = queryVehicleIntname(nextInCol.name, final);
    }
  }

  const prevInCol = currentCol[pos - 1];
  let prev: VehicleProps | undefined = undefined;
  if (prevInCol) {
    if ("vehicles" in prevInCol) {
      prev = queryVehicleIntname(prevInCol.vehicles[0].name, final);
    } else {
      prev = queryVehicleIntname(prevInCol.name, final);
    }
  }

  return (
    <VehicleNeighbors next={next} nextpos={nextInCol} prev={prev} currentpos={currentPos}>
      <VehicleNeighborFolder vehicle={vehicle} currentPos={currentPos} isFolder={curfolder} />
    </VehicleNeighbors>
  );
}

export function VehicleNeighbors(props: {
  children: JSX.Element;
  next: VehicleProps | undefined;
  nextpos: FinalShopItem | FinalShopGroup | undefined;
  prev: VehicleProps | undefined;
  currentpos: FinalShopItem | FinalShopGroup | undefined;
}) {
  const { children, next, nextpos, prev, currentpos } = props;

  if (next && nextpos && nextpos.reqAir !== "" && prev && currentpos && currentpos.reqAir !== "") {
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

  if (next && nextpos && nextpos.reqAir !== "") {
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

  if (prev && currentpos && currentpos.reqAir !== "") {
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
