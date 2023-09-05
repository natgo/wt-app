import { useRecoilValue } from "recoil";

import { FinalFinalShopRange, FinalObjectRange } from "@data/shop.schema";

import { FilterAtom, SearchName } from "@/store/atom/atom";
import { finalQuery } from "@/store/final";

import { Arrow } from "./Arrow";
import { Rank } from "./Rank";
import { RenderTreeFolder } from "./RenderTreeFolder";
import { RenderTreeSingleItem } from "./RenderTreeSingleItem";

export function TreeRank(props: {
  rank: FinalObjectRange;
  index: number;
  shop: FinalFinalShopRange;
}): JSX.Element {
  const { rank, index, shop } = props;
  const final = useRecoilValue(finalQuery);
  const filter = useRecoilValue(FilterAtom);
  const search = useRecoilValue(SearchName);

  const topindex = index;
  let height = 0;
  rank.forEach((element) => {
    if (element !== "drawArrow" && element.length > height) {
      height = element.length;
    }
  });

  return (
    <tr className="border">
      <Rank rank={index + 1} needed={shop.needVehicles[index]} />
      {rank.map((element, rowindex) => {
        if (element === "drawArrow") {
          return (
            <td key={rowindex}>
              <Arrow length={height} type="long" />
            </td>
          );
        }
        const renderElement = element.map((element, index, array) => {
          const isLastElement = index === array.length - 1;
          const hasNextRank = shop.range[topindex + 1] !== undefined;
          const nextRank = shop.range[topindex + 1];

          if ("vehicles" in element) {
            return (
              <RenderTreeFolder
                element={element}
                final={final}
                filter={filter}
                search={search}
                isLastElement={isLastElement}
                hasNextRank={hasNextRank}
                index={index}
                topindex={topindex}
                nextRank={nextRank}
                rowindex={rowindex}
                height={height}
                maxRank={shop.max_rank}
                key={element.name}
              />
            );
          } else {
            return (
              <RenderTreeSingleItem
                element={element}
                final={final}
                filter={filter}
                search={search}
                isLastElement={isLastElement}
                hasNextRank={hasNextRank}
                index={index}
                topindex={topindex}
                nextRank={nextRank}
                rowindex={rowindex}
                height={height}
                maxRank={shop.max_rank}
                array={array}
                key={element.name}
              />
            );
          }
        });

        return (
          <td
            key={rowindex}
            style={rowindex === shop.col_normal ? { borderLeft: "solid 1px #cccccc" } : {}}
          >
            {renderElement}
          </td>
        );
      })}
    </tr>
  );
}
