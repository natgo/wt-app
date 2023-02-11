import { useRecoilValue } from "recoil";

import { modificationQuery } from "@/store/modifications";
import { BaseMod, VehicleProps, modClassName } from "@/types";
import { modClassToString } from "@/utils/custom/modClass";

import { ItemImg } from "../Techtree/ItemImg";

export function Modifications(props: { vehicle: VehicleProps }): JSX.Element {
  const { vehicle } = props;
  const modifications = useRecoilValue(modificationQuery);
  const mods = modifications[vehicle.type].find((element) => {
    return element.intname === vehicle.intname;
  });
  if (!mods) {
    throw new Error(`No match for ${vehicle}`);
  }

  return (
    <div className="m-8">
      <div className="text-lg text-black">Modifications:</div>
      <div className="grid w-max auto-cols-min grid-flow-col rounded-lg bg-[#242e33]">
        {Object.entries(mods.mods).map(([key, value]) => {
          const value2 = value as BaseMod[][];
          return (
            <div key={key} className="grid auto-rows-max border-r pt-2">
              <div className="border-b px-4 text-white">
                {modClassToString(modClassName.parse(key))}
              </div>
              <div className="grid grid-rows-4">
                {value2.map((element, index) => {
                  return (
                    <div
                      key={index}
                      className="grid grid-flow-col justify-start gap-2 border-b px-4"
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
