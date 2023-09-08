import { useRecoilValue } from "recoil";

import { VehicleProps } from "@data/final.schema";
import { FinalObjectRange } from "@data/shop.schema";

import { finalQuery } from "@/store/final";
import { shopQuery } from "@/store/shop";

import { VehicleNeighbors } from "./VehicleNeighbors";
import { parseNextCol, parseNextInCol } from "./parseNextCol";

export function VehicleNeighbor(props: { vehicle: VehicleProps }) {
  const { vehicle } = props;
  const final = useRecoilValue(finalQuery);
  const shopData = useRecoilValue(shopQuery);

  const tree = shopData[vehicle.country]?.[vehicle.type];
  if (tree === undefined) {
    return <div>No tree</div>;
  }

  const vehicleRange = tree.range;

  const currentRank = vehicleRange[vehicle.rank - 1];
  if (!currentRank) {
    return <div>Rank not found</div>;
  }

  let nextRank = vehicleRange[vehicle.rank] as FinalObjectRange | undefined;
  let prevRank = vehicleRange[vehicle.rank - 2] as FinalObjectRange | undefined;

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
  if (!currentCol) {
    return <div>Column not found</div>;
  }
  if (currentCol === "drawArrow") {
    throw new Error("CurrentCol is Arrow");
  }
  if (pos === undefined) {
    throw new Error("Currentpos not found");
  }

  const currentPos = currentCol[pos];
  if (!currentPos) {
    return <div>Position not found</div>;
  }
  let curfolder = false;
  if ("vehicles" in currentPos) {
    curfolder = true;
  }

  const nextInCol = currentCol[pos + 1];
  const next = parseNextInCol(nextInCol, final);

  let ni = 1;
  while (nextRank && nextRank[col] === "drawArrow") {
    nextRank = vehicleRange[vehicle.rank + ni];
    ni++;
  }
  const rankNext = parseNextCol(nextRank, col, "next", final);

  const prevInCol = currentCol[pos - 1];
  const prev = parseNextInCol(prevInCol, final);

  let pi = 1;
  while (prevRank && prevRank[col] === "drawArrow") {
    prevRank = vehicleRange[vehicle.rank - 2 - pi];
    console.log(prevRank);

    pi++;
  }
  const rankPrev = parseNextCol(prevRank, col, "prev", final);

  return (
    <VehicleNeighbors
      vehicle={vehicle}
      next={next ? next : rankNext.next}
      nextPos={next ? nextInCol : rankNext.nextPos}
      prev={prev ? prev : rankPrev.next}
      currentpos={currentPos}
      isFolder={curfolder}
    />
  );
}
