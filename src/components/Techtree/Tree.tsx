/* eslint-disable react/no-unknown-property */
import { useRecoilValue } from "recoil";

import { MediaHead } from "@/components/Techtree/MediaHead";
import { FilterAtom } from "@/store/atom/atom";
import { finalQuery } from "@/store/final";
import { shopQuery } from "@/store/shop";
import { CountryProp, FinalShopGroup, ShopExtGroup, ShopExtItem } from "@/types";
import { queryVehicleIntname } from "@/utils/custom/queryVehicle";

import { Research } from "./Research";
import { TreeRank } from "./TreeRank";

interface TechTreeProp extends CountryProp {
  type: "army" | "aviation" | "helicopters";
}

export function TechTree(props: TechTreeProp): JSX.Element {
  const { type, country } = props;
  const final = useRecoilValue(finalQuery);
  const shopData = useRecoilValue(shopQuery);
  const filter = useRecoilValue(FilterAtom);
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
            if (filter.hide_ingame) {
              const out: FinalShopGroup = {
                name: element.image,
                displayname: element.displayname,
                image: element.image,
                reqAir: element.reqAir,
                vehicles: [],
              };
              element.vehicles.forEach((element) => {
                if (!element.hidden) {
                  out.vehicles.push(element);
                }
              });
              range.push({ ...out, draw_arrow: false });
            } else {
              range.push({ ...element, draw_arrow: false });
            }
          }
        } else {
          if (element.rank === index + 1) {
            if (filter.hide_ingame && element.hidden) {
              //d
            } else if (filter.hide_wiki) {
              const match = queryVehicleIntname(element.name, final);
              if (match?.wikiname) {
                range.push({ ...element, draw_arrow: false });
              }
            } else {
              range.push({ ...element, draw_arrow: false });
            }
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
              return <TreeRank key={index + "_rank"} ranked={ranked} index={index} shop={shop} />;
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
