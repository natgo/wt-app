import axios from "axios";
import { getRecoil, setRecoil } from "recoil-nexus";

import { Final, dialogue } from "./atom";
import br from "./br";
import lookup from "./lookup";

async function getBR() {
  try {
    const response = await axios.get("http://localhost:8111/indicators");
    console.log(response.data.type);
    const bb = br(response.data.type);
    return bb;
  } catch (error) {
    setRecoil(dialogue, true);
    return "1";
    //let inp = "";
    //while (inp.search(/\d{1,2}\.0|\d{1,2}\.3|\d{1,2}\.7/g)) {
    //  const input = prompt("Input BR: ");
    //  //check this
    //  console.log(typeof input);
    //  if (typeof input === "string") {
    //    inp = input;
    //  }
    //}
    // return inp;
  }
}

export default async function changeParsed(sakke: { name: string; id: number }[]) {
  const arr = getRecoil(Final);

  const brb: string = await getBR();

  let inter: { name: string; id: number; br: string; num_br: number }[] = [];
  const result: { name: string; id: number; br: string; num_br: number }[] = [];

  sakke.forEach((sakkeFEelement) => {
    let element = sakkeFEelement.name;
    element = lookup(element);
    if (element[element.length - 2] === "." && element[element.length - 1] === ".") {
      console.log(element);
      element = element.substring(0, element.length - 2);
      // wiki = wk.csv to json
      arr.aircraft.forEach((ement) => {
        if (ement.wikiname.search(element) === 0) {
          if (ement.wikiname[ement.wikiname.length - 1] === ")") {
            // empty
          } else {
            const object = {
              name: ement.wikiname,
              br: ement.rb_br,
              num_br: ement.rb_realbr,
              id: result.length + 1,
            };
            inter.push(object);
          }
        }
      });
      inter.sort((a, b) => a.num_br - b.num_br);
      console.log(inter);
      result.push(inter[0]);
      inter = [];
    } else {
      arr.aircraft.forEach((elemen) => {
        console.log(element);
        if (elemen.wikiname == element) {
          const object = {
            name: elemen.wikiname,
            br: elemen.rb_br,
            num_br: elemen.rb_realbr,
            id: result.length + 1,
          };
          result.push(object);
        }
      });
    }
  });
  result.sort((a, b) => b.num_br - a.num_br);
  const final: { name: string; id: number; br: string; num_br: number }[] = [];
  result.forEach((element) => {
    final.push({
      name: element.name,
      id: element.id,
      br: element.br,
      num_br: element.num_br,
    });
  });
  console.log(final);
  const out = {
    result: final,
    br: brb,
  };
  return out;
}
