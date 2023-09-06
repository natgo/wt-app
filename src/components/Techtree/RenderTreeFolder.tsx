import { Fragment } from "react";

import { FinalObjectRange, FinalShopGroup } from "@data/shop.schema";

import { Final } from "@/data/types/final.schema";
import { FilterProps } from "@/store/atom/types";

import { Arrow } from "./Arrow";
import { EmptyDiv } from "./EmptyDiv";
import { TreeFolder } from "./TreeFolder";

export function RenderTreeFolder(props: {
  folder: FinalShopGroup;
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
    folder,
    isLastElement,
    hasNextRank,
    index,
    topindex,
    nextRank,
    rowindex,
    height,
    maxRank,
  } = props;

  const treeFolder = <TreeFolder folder={folder} name={folder.displayname} img={folder.image} />;

  if (isLastElement) {
    if (hasNextRank && topindex !== maxRank) {
      const nextRankItem = nextRank[rowindex]?.[0];

      if (nextRankItem && typeof nextRankItem !== "string" && nextRankItem.reqAir !== "") {
        return (
          <Fragment key={folder.name}>
            {treeFolder}
            {Arrow({ length: height - index - 1, type: "short" })}
          </Fragment>
        );
      } else {
        return (
          <Fragment key={folder.name}>
            {treeFolder}
            <EmptyDiv size={30} />
          </Fragment>
        );
      }
    } else {
      return (
        <Fragment key={folder.name}>
          {treeFolder}
          <EmptyDiv size={30} />
        </Fragment>
      );
    }
  } else {
    return (
      <Fragment key={folder.name}>
        {treeFolder}
        <Arrow length={0} type="short" />
      </Fragment>
    );
  }
}
