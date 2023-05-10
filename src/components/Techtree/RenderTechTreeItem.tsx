import { FinalShopGroup, FinalShopItem } from "@data/shop.schema";

import { Final } from "@/data/types/final.schema";
import { FilterProps } from "@/store/atom/types";

import { TechTreeItem } from "./TechTreeItem";

export function RenderTechTreeItem(props: {
  element: FinalShopItem | FinalShopGroup;
  final: Final;
  filter: FilterProps;
  search: string | undefined;
}) {
  const { element, final, filter, search } = props;
  return (
    <TechTreeItem
      key={element.name}
      intname={element.name}
      final={final}
      filter={filter}
      search={search}
      type="blur"
    />
  );
}
