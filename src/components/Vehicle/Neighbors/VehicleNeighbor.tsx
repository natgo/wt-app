import { useRecoilValue } from "recoil";

import { VehicleProps } from "@data/final.schema";
import { FinalObjectRange } from "@data/shop.schema";

import { finalQuery } from "@/store/final";
import { shopQuery } from "@/store/shop";

import { VehicleNeighborFolder } from "./VehicleNeighborFolder";
import { VehicleNeighbors } from "./VehicleNeighbors";
import { parseNextCol, parseNextInCol } from "./parseNextCol";

export function VehicleNeighbor(props: { vehicle: VehicleProps }) {
  const { vehicle } = props;
  const final = useRecoilValue(finalQuery);
  const shopData = useRecoilValue(shopQuery);

  const tree = shopData[vehicle.country][vehicle.type];
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
  console.log(rankPrev);

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
