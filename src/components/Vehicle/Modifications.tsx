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
    <div className="m-8">
      <div className="text-black text-lg">Modifications:</div>
      <div className="grid grid-flow-col auto-cols-min bg-[#242e33] w-max rounded-lg">
        {Object.entries(mods.mods).map(([key, value]) => {
          const value2 = value as BaseMod[][];
          return (
            <div key={key} className="grid auto-rows-max pt-2 border-r">
              <div className="text-white px-4 border-b">{capitailze(key)}</div>
              <div className="grid grid-rows-4">
                {value2.map((element, index) => {
                  return (
                    <div
                      key={index}
                      className="grid grid-flow-col justify-start gap-2 px-4 border-b"
                    >
                      {element.map((element) => {
                        return (
                          <div className="tree-item my-4" key={element.intname}>
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
    </div>
  );
}
