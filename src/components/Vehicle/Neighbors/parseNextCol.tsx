import { Final, VehicleProps } from "@data/final.schema";
import { FinalObjectRange, FinalRange, FinalShopGroup, FinalShopItem } from "@data/shop.schema";

import { queryVehicleIntname } from "@/utils/custom/queryVehicle";

export function parseNextCol(
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

export function parseNextInCol(
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
