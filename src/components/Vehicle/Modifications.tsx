import { useRecoilValue } from "recoil";

import { modificationQuery } from "@/store/modifications";
import { BaseMod, VehicleProps } from "@/types";
import capitailze from "@/utils/Capitalize";

import { ItemImg } from "../Techtree/ItemImg";

export function Modifications(props: { vehicle: VehicleProps }): JSX.Element {
  const { vehicle } = props;
  const modifications = useRecoilValue(modificationQuery);
  const mods = modifications.ground.find((element) => {
    return element.intname === vehicle.intname;
  });
  if (!mods) {
    throw new Error(`No match for ${vehicle}`);
  }

  return (
    <div style={{ display: "grid", gridAutoFlow: "column", gridAutoColumns: "1fr" }}>
      {Object.entries(mods.mods).map(([key, value]) => {
        const value2 = value as BaseMod[][];
        return (
          <div key={key} style={{ display: "grid", gridTemplateRows: "24px 1fr" }}>
            <div>{capitailze(key)}</div>
            <div>
              {value2.map((element, index) => {
                return (
                  <div
                    key={index}
                    style={{ display: "grid", gridAutoFlow: "column", justifyContent: "start" }}
                  >
                    {element.map((element) => {
                      return (
                        <div className="tree-item" key={element.intname}>
                          <div className="tree-item-background" id={element.intname}>
                            <ItemImg type="own" />
                          </div>
                          <div className="tree-item-text">
                            <span className="tree-item-text-scroll">
                              {element.displayname ? element.displayname : element.intname}
                            </span>
                          </div>
                          <div className="tree-item-img">
                            <img src={`../images/gameuiskin/${element.image.toLowerCase()}`} />
                          </div>
                        </div>
                      );
                    })}
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}
