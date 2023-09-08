import { Final, VehicleProps } from "@data/final.schema";
import { FinalObjectRange, FinalShopGroup, FinalShopItem } from "@data/shop.schema";

import { queryVehicleIntname } from "@/utils/custom/queryVehicle";

export function parseNextCol(
  nextRank: FinalObjectRange | undefined,
  column: number,
  type: "next" | "prev",
  final: Final,
) {
  if (!nextRank) return { next: undefined, nextPos: undefined };

  const nextRankCol = nextRank[column];

  if (nextRankCol !== "drawArrow" && nextRankCol && nextRankCol.length !== 0 && nextRankCol[0]) {
    const nextItem = type === "next" ? nextRankCol[0] : nextRankCol.at(-1);

    if (nextItem) {
      const next =
        "vehicles" in nextItem && nextItem.vehicles[0]
          ? queryVehicleIntname(nextItem.vehicles[0].name, final)
          : queryVehicleIntname(nextItem.name, final);

      return { next, nextPos: nextItem };
    }
  }

  return { next: undefined, nextPos: undefined };
}

export function parseNextInCol(
  nextInCol: FinalShopItem | FinalShopGroup | undefined,
  final: Final,
): VehicleProps | undefined {
  if (!nextInCol) return undefined;

  return "vehicles" in nextInCol && nextInCol.vehicles[0]
    ? queryVehicleIntname(nextInCol.vehicles[0].name, final)
    : queryVehicleIntname(nextInCol.name, final);
}
