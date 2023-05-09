import { Link } from "react-router-dom";
import { useRecoilValue } from "recoil";

import { Final, VehicleProps } from "@data/final.schema";
import { FinalObjectRange, FinalRange, FinalShopGroup, FinalShopItem } from "@data/shop.schema";

import { finalQuery } from "@/store/final";
import { shopQuery } from "@/store/shop";
import { queryVehicleIntname } from "@/utils/custom/queryVehicle";

import { VehicleNeighborFolder } from "./VehicleNeighborFolder";

function parseNextCol(
  nextRank: FinalObjectRange | undefined,
  column: number,
  type: "next" | "prev",
  final: Final,
) {
  let next: VehicleProps | undefined = undefined;
  let nextPos: FinalShopItem | FinalShopGroup | undefined = undefined;
  let nextRankCol: FinalRange | undefined = undefined;

  if (nextRank) {
    nextRankCol = nextRank[column];

    if (nextRankCol !== "drawArrow" && nextRankCol && nextRankCol.length !== 0) {
      switch (type) {
        case "next":
          next = queryVehicleIntname(nextRankCol[0].name, final);
          nextPos = nextRankCol[0];
          break;
        case "prev":
          next = queryVehicleIntname(nextRankCol[nextRankCol.length - 1].name, final);
          break;
      }
    }
  }

  return { next, nextPos };
}

function parseNextInCol(
  nextInCol: FinalShopItem | FinalShopGroup | undefined,
  final: Final,
): VehicleProps | undefined {
  let next: VehicleProps | undefined = undefined;

  if (nextInCol) {
    if ("vehicles" in nextInCol) {
      next = queryVehicleIntname(nextInCol.vehicles[0].name, final);
    } else {
      next = queryVehicleIntname(nextInCol.name, final);
    }
  }

  return next;
}

export function VehicleNeighbor(props: { vehicle: VehicleProps }) {
  const { vehicle } = props;
  const final = useRecoilValue(finalQuery);
  const shopData = useRecoilValue(shopQuery);

  let type: "army" | "aviation" | "helicopters" | "ship" | "boat" = "army";
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
    default:
      type = vehicle.type;
      break;
  }

  const tree = shopData[vehicle.country][type];
  if (tree === undefined) {
    return <div>No tree</div>;
  }
  const vehicleRange = tree.range;

  const currentRank = vehicleRange[vehicle.rank - 1];
  const nextRank = vehicleRange[vehicle.rank] as FinalObjectRange | undefined;
  const prevRank = vehicleRange[vehicle.rank - 2] as FinalObjectRange | undefined;

  let pos: number | undefined = undefined;
  const col = currentRank.findIndex((element) => {
    if (element === "drawArrow") {
      return false;
    }

    return element.find((element, index) => {
      if ("vehicles" in element) {
        return element.vehicles.find((element) => {
          if (element.name === vehicle.intname) {
            pos = index;
            return true;
          }
        });
      } else if (element.name === vehicle.intname) {
        pos = index;
        return true;
      }
    });
  });

  const currentCol = currentRank[col];
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
  const next = parseNextInCol(nextInCol, final);
  const rankNext = parseNextCol(nextRank, col, "next", final);
  console.log(rankNext);

  const prevInCol = currentCol[pos - 1];
  const prev = parseNextInCol(prevInCol, final);
  const rankPrev = parseNextCol(prevRank, col, "prev", final);

  return (
    <VehicleNeighbors
      next={next ? next : rankNext.next}
      nextPos={next ? nextInCol : rankNext.nextPos}
      prev={prev ? prev : rankPrev.next}
      currentpos={currentPos}
    >
      <VehicleNeighborFolder vehicle={vehicle} currentPos={currentPos} isFolder={curfolder} />
    </VehicleNeighbors>
  );
}

export function VehicleNeighbors(props: {
  children: JSX.Element;
  next: VehicleProps | undefined;
  nextPos: FinalShopItem | FinalShopGroup | undefined;
  prev: VehicleProps | undefined;
  currentpos: FinalShopItem | FinalShopGroup | undefined;
}) {
  const { children, next, nextPos, prev, currentpos } = props;

  if (next && nextPos && nextPos.reqAir !== "" && prev && currentpos && currentpos.reqAir !== "") {
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

  if (next && nextPos && nextPos.reqAir !== "") {
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
