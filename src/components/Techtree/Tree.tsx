import { useRecoilValue } from "recoil";

import { FinalObjectRange } from "@data/shop.schema";

import { CountryProp } from "@/skins.types";
import { FilterAtom } from "@/store/atom/atom";
import { finalQuery } from "@/store/final";
import { shopQuery } from "@/store/shop";
import { queryVehicleIntname } from "@/utils/custom/queryVehicle";

import { Research } from "./Research";
import { TreeRank } from "./TreeRank";

interface TechTreeProp extends CountryProp {
  type: "army" | "aviation" | "helicopters" | "ship" | "boat";
}

export function TechTree(props: TechTreeProp): JSX.Element {
  const { type, country } = props;
  const final = useRecoilValue(finalQuery);
  const shopData = useRecoilValue(shopQuery);
  const filter = useRecoilValue(FilterAtom);
  const shop = shopData[country][type];

  if (shop === undefined) {
    return <div>No techtree</div>;
  }

  const range: FinalObjectRange[] = JSON.parse(JSON.stringify(shop.range));

  range.forEach((element) => {
    element.forEach((element) => {
      if (element === "drawArrow") {
        return;
      }
      element.forEach((element, index, array) => {
        if ("vehicles" in element) {
          if (filter.hide_ingame) {
            element.vehicles.forEach((hiddenElement, index, array) => {
              if (hiddenElement.hidden) {
                array.splice(index, 1);
              }
            });
          }
        } else {
          if (filter.hide_ingame && element.hidden) {
            array.splice(index, 1);
          } else if (filter.hide_wiki) {
            const match = queryVehicleIntname(element.name, final);
            if (match && !match.wikiname) {
              array.splice(index, 1);
            }
          }
        }
      });
    });
  });

  return (
    <div className="mw-parser-output">
      <div className="tree">
        <table width="100%">
          <tbody>
            <Research research={shop.col_normal} max={shop.range.length} />
            {range.map((element, index) => {
              if (index >= shop.min_rank - 1) {
                return <TreeRank key={index + "_rank"} rank={element} index={index} shop={shop} />;
              }
              return null;
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
