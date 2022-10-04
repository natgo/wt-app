import axios from "axios";
import { setRecoil } from "recoil-nexus";

import { dialogue } from "../atom";
import { querypartialVehicle, queryVehicle } from "../utils/QueryVehicle";

import br from "./br";
import lookup from "./lookup";

async function getBR() {
  try {
    const response = await axios.get("http://localhost:8111/indicators");
    console.log(response.data.type);
    const bb = br(response.data.type);
    return bb;
  } catch (error) {
    // manual br input if the br getter didn't work
    setRecoil(dialogue, true);
    return "1";
  }
}

export default async function changeParsed(sakke: { name: string; id: number }[]) {
  const userBr: string = await getBR();

  let inter: { name: string; id: number; br: string; real_br: number }[] = [];
  const result: { name: string; id: number; br: string; real_br: number }[] = [];

  sakke.forEach((notFixedElement) => {
    let element = notFixedElement.name;

    // try to fix ocr errors
    element = lookup(element);

    if (element[element.length - 2] === "." && element[element.length - 1] === ".") {
      console.log(`has .. in element: ${element}`);
      element = element.substring(0, element.length - 2);

      const finalarray = (querypartialVehicle(element,"wikiname"));
      if (finalarray) {
        finalarray.forEach(ement => {
          const object = {
            name: ement.wikiname,
            br: ement.rb_br,
            real_br: ement.rb_realbr,
            id: result.length + 1,
          };
          inter.push(object);
        });
      }

      inter.sort((a, b) => a.real_br - b.real_br);
      console.log(inter);
      result.push(inter[0]);
      inter = [];
    } else {
      const query = queryVehicle(element, "wikiname");
      if (query) {
        const object = {
          name: query.wikiname,
          br: query.rb_br,
          real_br: query.rb_realbr,
          id: result.length + 1,
        };
        result.push(object);
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
