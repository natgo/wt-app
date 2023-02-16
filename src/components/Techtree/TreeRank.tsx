import { Fragment } from "react";
import { useRecoilValue } from "recoil";

import { FilterAtom, SearchName } from "@/store/atom/atom";
import { finalQuery } from "@/store/final";
import { FinalObjectRange, FinalShopRange } from "@/types";

import { Arrow } from "./Arrow";
import { EmptyDiv } from "./EmptyDiv";
import { Rank } from "./Rank";
import { TechTreeItem } from "./TechTreeItem";
import { TreeFolder } from "./TreeFolder";

export function TreeRank(props: {
  rank: FinalObjectRange;
  index: number;
  shop: FinalShopRange;
}): JSX.Element {
  const { rank, index, shop } = props;
  const final = useRecoilValue(finalQuery);
  const filter = useRecoilValue(FilterAtom);
  const search = useRecoilValue(SearchName);

  const topindex = index;
  let height = 0;
  rank.range.forEach((element) => {
    if (element.length > height) {
      height = element.length;
    }
  });

  return (
    <tr className="border">
      <Rank rank={rank.rank + 1} needed={shop.needVehicles[rank.rank]} />
      {rank.range.map((element, rowindex) => {
        if (element === "drawArrow") {
          return (
            <td key={rowindex}>
              <Arrow length={height} type="long" />
            </td>
          );
        }
        return (
          <td
            key={rowindex}
            style={rowindex === shop.col_normal ? { borderLeft: "solid 1px #cccccc" } : {}}
          >
            {element.map((element, index, array) => {
              if ("vehicles" in element) {
                if (index < array.length - 1) {
                  if (array[index + 1].reqAir !== "") {
                    return (
                      <Fragment key={element.name}>
                        <TreeFolder name={element.displayname} img={element.image}>
                          {element.vehicles.map((element, index, array) => {
                            if (array[index + 1] && array[index + 1].reqAir !== "") {
                              return [
                                <TechTreeItem
                                  key={element.name}
                                  intname={element.name}
                                  final={final}
                                  filter={filter}
                                  search={search}
                                  type="blur"
                                />,
                                <Arrow length={0} type="short" key={element.name + "_arrow"} />,
                              ];
                            } else if (!array[index + 1]) {
                              return [
                                <TechTreeItem
                                  key={element.name}
                                  intname={element.name}
                                  final={final}
                                  filter={filter}
                                  search={search}
                                  type="blur"
                                />,
                              ];
                            }
                            return [
                              <TechTreeItem
                                key={element.name}
                                intname={element.name}
                                final={final}
                                filter={filter}
                                search={search}
                                type="blur"
                              />,
                              <EmptyDiv size={30} key={element.name + "_arrow"} />,
                            ];
                          })}
                        </TreeFolder>
                        <Arrow length={0} type="short" />
                      </Fragment>
                    );
                  } else {
                    return (
                      <Fragment key={element.name}>
                        <TreeFolder name={element.displayname} img={element.image}>
                          {element.vehicles.map((element, index, array) => {
                            if (array[index + 1] && array[index + 1].reqAir !== "") {
                              return [
                                <TechTreeItem
                                  key={element.name}
                                  intname={element.name}
                                  final={final}
                                  filter={filter}
                                  search={search}
                                  type="blur"
                                />,
                                <Arrow length={0} type="short" key={element.name + "_arrow"} />,
                              ];
                            } else if (!array[index + 1]) {
                              return [
                                <TechTreeItem
                                  key={element.name}
                                  intname={element.name}
                                  final={final}
                                  filter={filter}
                                  search={search}
                                  type="blur"
                                />,
                              ];
                            }
                            return [
                              <TechTreeItem
                                key={element.name}
                                intname={element.name}
                                final={final}
                                filter={filter}
                                search={search}
                                type="blur"
                              />,
                              <EmptyDiv size={30} key={element.name + "_arrow"} />,
                            ];
                          })}
                        </TreeFolder>
                        <EmptyDiv size={30} />
                      </Fragment>
                    );
                  }
                } else {
                  const nextRankItem = shop.range[topindex + 1].range[rowindex][0];
                  if (
                    index === array.length - 1 &&
                    typeof nextRankItem !== "string" &&
                    nextRankItem.reqAir !== "" &&
                    topindex !== shop.max_rank
                  ) {
                    return (
                      <Fragment key={element.name}>
                        <TreeFolder name={element.displayname} img={element.image}>
                          {element.vehicles.map((element, index, array) => {
                            if (array[index + 1] && array[index + 1].reqAir !== "") {
                              return [
                                <TechTreeItem
                                  key={element.name}
                                  intname={element.name}
                                  final={final}
                                  filter={filter}
                                  search={search}
                                  type="blur"
                                />,
                                <Arrow length={0} type="short" key={element.name + "_arrow"} />,
                              ];
                            } else if (!array[index + 1]) {
                              return [
                                <TechTreeItem
                                  key={element.name}
                                  intname={element.name}
                                  final={final}
                                  filter={filter}
                                  search={search}
                                  type="blur"
                                />,
                              ];
                            }
                            return [
                              <TechTreeItem
                                key={element.name}
                                intname={element.name}
                                final={final}
                                filter={filter}
                                search={search}
                                type="blur"
                              />,
                              <EmptyDiv size={30} key={element.name + "_arrow"} />,
                            ];
                          })}
                        </TreeFolder>
                        <Arrow length={height - index - 1} type="short" />
                      </Fragment>
                    );
                  } else {
                    return (
                      <Fragment key={element.name}>
                        <TreeFolder name={element.displayname} img={element.image}>
                          {element.vehicles.map((element, index, array) => {
                            if (array[index + 1] && array[index + 1].reqAir !== "") {
                              return [
                                <TechTreeItem
                                  key={element.name}
                                  intname={element.name}
                                  final={final}
                                  filter={filter}
                                  search={search}
                                  type="blur"
                                />,
                                <Arrow length={0} type="short" key={element.name + "_arrow"} />,
                              ];
                            } else if (!array[index + 1]) {
                              return [
                                <TechTreeItem
                                  key={element.name}
                                  intname={element.name}
                                  final={final}
                                  filter={filter}
                                  search={search}
                                  type="blur"
                                />,
                              ];
                            }
                            return [
                              <TechTreeItem
                                key={element.name}
                                intname={element.name}
                                final={final}
                                filter={filter}
                                search={search}
                                type="blur"
                              />,
                              <EmptyDiv size={30} key={element.name + "_arrow"} />,
                            ];
                          })}
                        </TreeFolder>
                        <EmptyDiv size={30} />
                      </Fragment>
                    );
                  }
                }
              } else {
                if (index < array.length - 1) {
                  if (array[index + 1].reqAir !== "") {
                    return (
                      <Fragment key={element.name}>
                        <TechTreeItem
                          intname={element.name}
                          final={final}
                          filter={filter}
                          search={search}
                          type="blur"
                        />
                        <Arrow length={0} type="short" />
                      </Fragment>
                    );
                  } else {
                    return (
                      <Fragment key={element.name}>
                        <TechTreeItem
                          intname={element.name}
                          final={final}
                          filter={filter}
                          search={search}
                          type="blur"
                        />
                        <EmptyDiv size={30} />
                      </Fragment>
                    );
                  }
                } else {
                  if (shop.range[topindex + 1]) {
                    const nextRankItem = shop.range[topindex + 1].range[rowindex][0];
                    if (nextRankItem && index === array.length - 1 && topindex !== shop.max_rank) {
                      if (typeof nextRankItem !== "string" && nextRankItem.reqAir !== "") {
                        if (index < height) {
                          console.info(`${element.name}:${index}:${height}`);
                          return (
                            <Fragment key={element.name}>
                              <TechTreeItem
                                intname={element.name}
                                final={final}
                                filter={filter}
                                search={search}
                                type="blur"
                              />
                              <Arrow length={height - index - 1} type="short" />
                            </Fragment>
                          );
                        } else {
                          return (
                            <Fragment key={element.name}>
                              <TechTreeItem
                                intname={element.name}
                                final={final}
                                filter={filter}
                                search={search}
                                type="blur"
                              />
                              <Arrow length={0} type="short" />
                            </Fragment>
                          );
                        }
                      } else {
                        if (nextRankItem === "drawArrow") {
                          return (
                            <Fragment key={element.name}>
                              <TechTreeItem
                                intname={element.name}
                                final={final}
                                filter={filter}
                                search={search}
                                type="blur"
                              />
                              <Arrow length={height - index - 1} type="short" />
                            </Fragment>
                          );
                        }
                      }
                    }
                  }
                  console.info(`${element.name} topindex: ${topindex}`);
                  return (
                    <Fragment key={element.name}>
                      <TechTreeItem
                        intname={element.name}
                        final={final}
                        filter={filter}
                        search={search}
                        type="blur"
                      />
                      <EmptyDiv size={30} />
                    </Fragment>
                  );
                }
              }
            })}
          </td>
        );
      })}
    </tr>
  );
}
