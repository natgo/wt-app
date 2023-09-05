import { Fragment } from "react";

import { FinalObjectRange, FinalShopGroup } from "@data/shop.schema";

import { Final } from "@/data/types/final.schema";
import { FilterProps } from "@/store/atom/types";

import { Arrow } from "./Arrow";
import { EmptyDiv } from "./EmptyDiv";
import { RenderTechTreeItem } from "./RenderTechTreeItem";
import { TreeFolder } from "./TreeFolder";

export function RenderTreeFolder(props: {
  element: FinalShopGroup;
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
}): JSX.Element {
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
  } = props;
  console.log(element);

  const renderTechTreeItems = element.vehicles.map((element, index, array) => {
    const hasNextElement = array[index + 1] !== undefined;
    const nextElement = array[index + 1];

    const techTreeItem = RenderTechTreeItem({ element, final, filter, search });

    if (hasNextElement && nextElement && nextElement.reqAir !== "") {
      return [techTreeItem, Arrow({ length: 0, type: "short" })];
    } else if (!hasNextElement) {
      return [techTreeItem];
    }

    return [techTreeItem, <EmptyDiv size={30} key={element.name + "_arrow"} />];
  });

  const treeFolder = (
    <TreeFolder name={element.displayname} img={element.image}>
      {renderTechTreeItems}
    </TreeFolder>
  );

  if (isLastElement) {
    if (hasNextRank && topindex !== maxRank) {
      const nextRankItem = nextRank[rowindex]?.[0];

      if (nextRankItem && typeof nextRankItem !== "string" && nextRankItem.reqAir !== "") {
        return (
          <Fragment key={element.name}>
            {treeFolder}
            {Arrow({ length: height - index - 1, type: "short" })}
          </Fragment>
        );
      } else {
        return (
          <Fragment key={element.name}>
            {treeFolder}
            <EmptyDiv size={30} />
          </Fragment>
        );
      }
    } else {
      return (
        <Fragment key={element.name}>
          {treeFolder}
          <EmptyDiv size={30} />
        </Fragment>
      );
    }
  } else {
    return (
      <Fragment key={element.name}>
        {treeFolder}
        <Arrow length={0} type="short" />
      </Fragment>
    );
  }
}
