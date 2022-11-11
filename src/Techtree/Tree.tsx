import { useRecoilValue } from "recoil";

import { Shop } from "../atom";
import { CountryProp, FinalShopRange, ShopExtGroup, ShopExtItem } from "../types";

import { Arrow } from "./Arrow";
import { EmptyDiv } from "./EmptyDiv";
import { MediaHead } from "./MediaHead";
import { Rank } from "./Rank";
import { Research } from "./Research";
import { TechTreeItem } from "./TechTreeItem";
import { TreeFolder } from "./TreeFolder";

interface TechTreeProp extends CountryProp {
  type: "army" | "aviation" | "helicopters";
}

export function TechTree(props: TechTreeProp): JSX.Element {
  const { type, country } = props;
  const shopData = useRecoilValue(Shop);
  const shop = shopData[country][type];

  const ranked: { rank: number; range: Array<ShopExtItem | ShopExtGroup>[] }[] = [];

  for (let index = shop.min_rank - 1; index < shop.max_rank; index++) {
    const rank: { rank: number; range: Array<ShopExtItem | ShopExtGroup>[] } = {
      rank: index,
      range: [],
    };
    shop.range.forEach((element) => {
      const range: Array<ShopExtItem | ShopExtGroup> = [];
      element.forEach((element) => {
        if ("vehicles" in element) {
          if (element.vehicles[0].rank === index + 1) {
            range.push({ ...element, draw_arrow: false });
          }
        } else {
          if (element.rank === index + 1) {
            range.push({ ...element, draw_arrow: false });
          }
        }
      });
      rank.range.push(range);
    });
    ranked.push(rank);
  }

  console.log(ranked);

  return (
    <div className="mw-parser-output">
      <div className="tree">
        <table rules="rows" width="100%">
          <tbody>
            <Research research={shop.col_normal} max={shop.range.length} />
            {ranked.map((element, index) => {
              return <TreeRank key={index} ranked={ranked} index={index} shop={shop} />;
            })}
          </tbody>
        </table>
      </div>
      <MediaHead />
      <div className="video_gallery">
        <a href="https://yewtu.be/4tLiivpJ7nk">
          <b>Book of Records USSR</b> - <i>War Thunder Official Channel</i>
        </a>
        <a href="https://yewtu.be/klfkO6hJQGk">
          <b>Climbing the ranks with Soviet tanks</b> - <i>War Thunder Official Channel</i>
        </a>
        <a href="https://yewtu.be/z5ZZzHNPYi4">
          <b>Russian ground forces Tier I - Review and Analysis</b> - <i>Oxy</i>
        </a>
        <a href="https://yewtu.be/TXWa-Nnc6IE">
          <b>Russian ground forces Tier II - Review and Analysis</b> - <i>Oxy</i>
        </a>
        <a href="https://yewtu.be/MRlEuQRfHdk">
          <b>Russian ground forces Tier III - Review and Analysis</b> - <i>Oxy</i>
        </a>
        <a href="https://yewtu.be/nw2LFVdhm5s">
          <b>Russian ground forces Tier IV - Review and Analysis</b> - <i>Oxy</i>
        </a>
        <a href="https://yewtu.be/XtuTkDhE3OQ">
          <b>Russian ground forces Tier V - Review and Analysis</b> - <i>Oxy</i>
        </a>
        <a href="https://yewtu.be/idwfz6_Nl6I">
          <b>Russian ground forces Tier VI/VII - Review and Analysis</b> - <i>Oxy</i>
        </a>
      </div>
    </div>
  );
}

function TreeRank(props: {
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
    <tr>
      <Rank rank={rank.rank + 1} />
      {rank.range.map((element, rowindex) => {
        if (
          element.length === 0 &&
          ranked[topindex - 1] &&
          ranked[topindex - 1].range[rowindex] &&
          ranked[topindex - 1].range[rowindex][ranked[topindex - 1].range[rowindex].length - 1]
            ?.draw_arrow
        ) {
          return (
            <td key={rowindex}>
              <Arrow length={height - 0.5} />
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
                      <>
                        <TreeFolder
                          name={element.displayname}
                          img={element.image}
                          key={element.name}
                        >
                          {element.vehicles.map((element) => {
                            return <TechTreeItem key={element.name} intname={element.name} />;
                          })}
                        </TreeFolder>
                        <Arrow length={0} />
                      </>
                    );
                  } else {
                    return (
                      <>
                        <TreeFolder
                          name={element.displayname}
                          img={element.image}
                          key={element.name}
                        >
                          {element.vehicles.map((element) => {
                            return <TechTreeItem key={element.name} intname={element.name} />;
                          })}
                        </TreeFolder>
                        <EmptyDiv />
                      </>
                    );
                  }
                } else {
                  if (
                    index === array.length - 1 &&
                    ranked[topindex + 1]?.range[rowindex][0]?.reqAir !== "" &&
                    topindex !== shop.max_rank
                  ) {
                    return (
                      <>
                        <TreeFolder
                          name={element.displayname}
                          img={element.image}
                          key={element.name}
                        >
                          {element.vehicles.map((element) => {
                            return <TechTreeItem key={element.name} intname={element.name} />;
                          })}
                        </TreeFolder>
                        <Arrow length={height - index - 1} />
                      </>
                    );
                  } else {
                    return (
                      <>
                        <TreeFolder
                          name={element.displayname}
                          img={element.image}
                          key={element.name}
                        >
                          {element.vehicles.map((element) => {
                            return <TechTreeItem key={element.name} intname={element.name} />;
                          })}
                        </TreeFolder>
                        <EmptyDiv />
                      </>
                    );
                  }
                }
              } else {
                if (index < array.length - 1) {
                  if (array[index + 1].reqAir !== "") {
                    return (
                      <>
                        <TechTreeItem key={element.name} intname={element.name} />
                        <Arrow length={0} />
                      </>
                    );
                  } else {
                    return (
                      <>
                        <TechTreeItem key={element.name} intname={element.name} />
                        <EmptyDiv />
                      </>
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
                        console.log(`${element.name}:${index}:${height}`);

                        return (
                          <>
                            <TechTreeItem key={element.name} intname={element.name} />
                            <Arrow length={height - index - 1} />
                          </>
                        );
                      } else {
                        return (
                          <>
                            <TechTreeItem key={element.name} intname={element.name} />
                            <Arrow length={0} />
                          </>
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
                          <>
                            <TechTreeItem key={element.name} intname={element.name} />
                            <Arrow length={height - index - 1} />
                          </>
                        );
                      }
                    }
                  }
                  console.log(`${element.name} topindex: ${topindex}`);
                  return (
                    <>
                      <TechTreeItem key={element.name} intname={element.name} />
                      <EmptyDiv />
                    </>
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
