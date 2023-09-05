import { Fragment } from "react";

import { FinalObjectRange, FinalShopGroup, FinalShopItem } from "@data/shop.schema";

import { Final } from "@/data/types/final.schema";
import { FilterProps } from "@/store/atom/types";

import { Arrow } from "./Arrow";
import { EmptyDiv } from "./EmptyDiv";
import { RenderTechTreeItem } from "./RenderTechTreeItem";

export function RenderTreeSingleItem(props: {
  element: FinalShopItem;
  final: Final;
  filter: FilterProps;
  search: string | undefined;
  isLastElement: boolean;
  hasNextRank: boolean;
  index: number;
  topindex: number;
  nextRank: FinalObjectRange;
  rowindex: number;
  height: number;
  maxRank: number;
  array: (FinalShopItem | FinalShopGroup)[];
}) {
  const {
    element,
    final,
    filter,
    search,
    isLastElement,
    hasNextRank,
    index,
    topindex,
    nextRank,
    rowindex,
    height,
    maxRank,
    array,
  } = props;
  const techTreeItem = RenderTechTreeItem({ element, final, filter, search });

  if (isLastElement) {
    if (hasNextRank && topindex !== maxRank) {
      const nextRankItem = nextRank[rowindex]?.[0];

      if (nextRankItem && typeof nextRankItem !== "string" && nextRankItem.reqAir !== "") {
        if (index < height) {
          return (
            <Fragment key={element.name}>
              {techTreeItem}
              {Arrow({ length: height - index - 1, type: "short" })}
            </Fragment>
          );
        } else {
          return (
            <Fragment key={element.name}>
              {techTreeItem}
              <Arrow length={0} type="short" />
            </Fragment>
          );
        }
      } else {
        if (nextRank[rowindex] === "drawArrow") {
          return (
            <Fragment key={element.name}>
              {techTreeItem}
              {Arrow({ length: height - index - 1, type: "short" })}
            </Fragment>
          );
        }
      }
    }

    return (
      <Fragment key={element.name}>
        {techTreeItem}
        <EmptyDiv size={30} />
      </Fragment>
    );
  } else {
    if (array[index + 1]?.reqAir !== "") {
      return (
        <Fragment key={element.name}>
          {techTreeItem}
          {Arrow({ length: 0, type: "short" })}
        </Fragment>
      );
    } else {
      return (
        <Fragment key={element.name}>
          {techTreeItem}
          <EmptyDiv size={30} />
        </Fragment>
      );
    }
  }
}
