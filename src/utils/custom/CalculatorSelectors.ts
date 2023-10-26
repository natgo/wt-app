import { Final } from "@data/final.schema";
import axios from "axios";
import { getRecoil, setRecoil } from "recoil-nexus";

import { CalculatorMode, dialogue } from "@/store/atom/atom";
import { queryVehicleWikiname, querypartialVehicleWikiname } from "@/utils/custom/queryVehicle";

import br from "./CalculatorBr";
import lookup from "./lookup";

async function getBR(final: Final) {
  try {
    const response = await axios.get("http://localhost:8111/indicators");
    console.log(response.data.type);
    const bb = br(response.data.type, final);
    return bb;
  } catch (error) {
    // manual br input if the br getter didn't work
    setRecoil(dialogue, true);
    return "1";
  }
}

export default async function changeParsed(arr: { name: string; id: number }[], final: Final) {
  const mode = getRecoil(CalculatorMode);

  const userBr = await getBR(final);

  let inter: { name: string; id: number; br: string; real_br: number }[] = [];
  const result: { name: string; id: number; br: string; real_br: number }[] = [];

  let brmodeset: 0 | 1 | 2;
  switch (mode) {
    case "Realistic":
      brmodeset = 1;
      break;
    case "Arcade":
      brmodeset = 0;
      break;
    case "Simulator":
      brmodeset = 2;
      break;
  }

  arr.forEach((notFixedElement) => {
    let element = notFixedElement.name;

    // try to fix ocr errors
    element = lookup(element);

    if (element[element.length - 2] === "." && element[element.length - 1] === ".") {
      console.log(`has .. in element: ${element}`);
      element = element.substring(0, element.length - 2);

      const finalarray = querypartialVehicleWikiname(element, final);
      if (finalarray) {
        finalarray.forEach((vehicle) => {
          if (vehicle.wikiname) {
            inter.push({
              name: vehicle.wikiname,
              br: vehicle.br[brmodeset] || "0",
              real_br: vehicle.realbr[brmodeset] || 0,
              id: result.length + 1,
            });
          }
        });
      }

      inter.sort((a, b) => a.real_br - b.real_br);
      console.log(inter);
      if (inter[0]) {
        result.push(inter[0]);
      }

      inter = [];
    } else {
      const query = queryVehicleWikiname(element, final);
      if (query) {
        if (query.wikiname) {
          result.push({
            name: query.wikiname,
            br: query.br[brmodeset] || "0",
            real_br: query.realbr[brmodeset] || 0,
            id: result.length + 1,
          });
        }
      } else {
        // if the ocr fixes don't work
        console.log(`not in final: ${element}`);
      }
    }
  });
  result.sort((a, b) => b.real_br - a.real_br);

  const out = {
    result: result,
    br: userBr,
  };
  return out;
}
