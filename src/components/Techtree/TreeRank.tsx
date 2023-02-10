import { Fragment } from "react";

import { FinalShopRange, ShopExtGroup, ShopExtItem } from "@/types";

import { Arrow } from "./Arrow";
import { EmptyDiv } from "./EmptyDiv";
import { Rank } from "./Rank";
import { TechTreeItem } from "./TechTreeItem";
import { TreeFolder } from "./TreeFolder";

export function TreeRank(props: {
  ranked: { rank: number; range: Array<ShopExtItem | ShopExtGroup>[] }[];
  index: number;
  shop: FinalShopRange;
}): JSX.Element {
  const { ranked, index, shop } = props;
  const topindex = index;
  const rank = ranked[index];
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
        if (element.length === 0 && ranked[topindex - 1] && ranked[topindex - 1].range[rowindex]) {
          if (
            ranked[topindex - 1].range[rowindex][ranked[topindex - 1].range[rowindex].length - 1]
              ?.draw_arrow
          ) {
            return (
              <td key={rowindex}>
                <Arrow length={height} type="long" />
              </td>
            );
          }

          let draw = false;
          let trip = true;
          let i = 1;
          while (draw === false && i <= 8 && trip) {
            if (ranked[topindex - i] && ranked[topindex - i].range[rowindex]) {
              if (
                ranked[topindex - i].range[rowindex][
                  ranked[topindex - i].range[rowindex].length - 1
                ]
              ) {
                if (
                  ranked[topindex - i].range[rowindex][
                    ranked[topindex - i].range[rowindex].length - 1
                  ].draw_arrow
                ) {
                  draw = true;
                } else {
                  trip = false;
                }
              }
              i++;
            } else {
              trip = false;
            }
          }
          if (draw) {
            return (
              <td key={rowindex}>
                <Arrow length={height} type="long" />
              </td>
            );
          }
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
                                <TechTreeItem key={element.name} intname={element.name} />,
                                <Arrow length={0} type="short" key={element.name + "_arrow"} />,
                              ];
                            } else if (!array[index + 1]) {
                              return [<TechTreeItem key={element.name} intname={element.name} />];
                            }
                            return [
                              <TechTreeItem key={element.name} intname={element.name} />,
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
                                <TechTreeItem key={element.name} intname={element.name} />,
                                <Arrow length={0} type="short" key={element.name + "_arrow"} />,
                              ];
                            } else if (!array[index + 1]) {
                              return [<TechTreeItem key={element.name} intname={element.name} />];
                            }
                            return [
                              <TechTreeItem key={element.name} intname={element.name} />,
                              <EmptyDiv size={30} key={element.name + "_arrow"} />,
                            ];
                          })}
                        </TreeFolder>
                        <EmptyDiv size={30} />
                      </Fragment>
                    );
                  }
                } else {
                  if (
                    index === array.length - 1 &&
                    ranked[topindex + 1]?.range[rowindex][0]?.reqAir !== "" &&
                    topindex !== shop.max_rank
                  ) {
                    return (
                      <Fragment key={element.name}>
                        <TreeFolder name={element.displayname} img={element.image}>
                          {element.vehicles.map((element, index, array) => {
                            if (array[index + 1] && array[index + 1].reqAir !== "") {
                              return [
                                <TechTreeItem key={element.name} intname={element.name} />,
                                <Arrow length={0} type="short" key={element.name + "_arrow"} />,
                              ];
                            } else if (!array[index + 1]) {
                              return [<TechTreeItem key={element.name} intname={element.name} />];
                            }
                            return [
                              <TechTreeItem key={element.name} intname={element.name} />,
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
                                <TechTreeItem key={element.name} intname={element.name} />,
                                <Arrow length={0} type="short" key={element.name + "_arrow"} />,
                              ];
                            } else if (!array[index + 1]) {
                              return [<TechTreeItem key={element.name} intname={element.name} />];
                            }
                            return [
                              <TechTreeItem key={element.name} intname={element.name} />,
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
                        <TechTreeItem intname={element.name} />
                        <Arrow length={0} type="short" />
                      </Fragment>
                    );
                  } else {
                    return (
                      <Fragment key={element.name}>
                        <TechTreeItem intname={element.name} />
                        <EmptyDiv size={30} />
                      </Fragment>
                    );
                  }
                } else {
                  if (
                    index === array.length - 1 &&
                    ranked[topindex + 1]?.range[rowindex][0]?.reqAir !== "" &&
                    topindex !== shop.max_rank
                  ) {
                    if (ranked[topindex + 1]?.range[rowindex][0]) {
                      if (index < height) {
                        console.info(`${element.name}:${index}:${height}`);
                        return (
                          <Fragment key={element.name}>
                            <TechTreeItem intname={element.name} />
                            <Arrow length={height - index - 1} type="short" />
                          </Fragment>
                        );
                      } else {
                        return (
                          <Fragment key={element.name}>
                            <TechTreeItem intname={element.name} />
                            <Arrow length={0} type="short" />
                          </Fragment>
                        );
                      }
                    } else {
                      let i = 0;
                      let draw_arrow = false;
                      while (topindex + 1 + i <= shop.max_rank) {
                        if (
                          ranked[topindex + 1 + i]?.range[rowindex][0] &&
                          ranked[topindex + 1 + i]?.range[rowindex][0].reqAir !== ""
                        ) {
                          draw_arrow = true;
                          element.draw_arrow = true;
                        }
                        i++;
                      }

                      if (draw_arrow) {
                        return (
                          <Fragment key={element.name}>
                            <TechTreeItem intname={element.name} />
                            <Arrow length={height - index - 1} type="short" />
                          </Fragment>
                        );
                      }
                    }
                  }
                  console.info(`${element.name} topindex: ${topindex}`);
                  return (
                    <Fragment key={element.name}>
                      <TechTreeItem intname={element.name} />
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
