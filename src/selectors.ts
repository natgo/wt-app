import axios from "axios";
import { setRecoil } from "recoil-nexus";

import { dialogue } from "./atom";
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

async function getcsv() {
  //get the wiki csv
  try {
    const response = await axios.get("./wiki.csv");
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

function csvJSON(csv: string) {
  const lines = csv.split("\n");

  const result: { name: string; rb_br: number; cls: string }[] = [];

  const headers = lines[0].split(",");

  for (let i = 1; i < lines.length; i++) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const obj: any = {
      name: "",
      rb_br: 0,
      cls: "",
    };
    // eslint-disable-next-line security/detect-object-injection
    const currentline = lines[i].split(",");

    for (let j = 0; j < headers.length; j++) {
      // eslint-disable-next-line security/detect-object-injection
      obj[headers[j]] = currentline[j];
    }

    result.push(obj);
  }
  return result;
}

export default async function changeParsed(sakke: { name: string; id: number }[]) {
  const file = await getcsv();
  const arr = csvJSON(file);
  const ress = arr.filter(air);

  function air(vehicle: { cls: string }): boolean {
    return vehicle.cls === "Aviation";
  }
  const brb: string = await getBR();

  let inter: { name: string; id: number; br: number }[] = [];
  const result: { name: string; id: number; br: number }[] = [];

  sakke.forEach((ele) => {
    let element = ele.name.replace(/\s/g, "_");
    element = lookup(element);
    if (element[element.length - 2] == "." && element[element.length - 1] == ".") {
      console.log(element);
      element = element.substring(0, element.length - 2);
      // wiki = wk.csv to json
      ress.forEach((ement) => {
        if (ement.name.search(element) === 0) {
          if (ement.name[ement.name.length - 1] === ")") {
            // empty
          } else {
            const object = {
              name: ement.name,
              br: ement.rb_br,
              id: result.length + 1,
            };
            inter.push(object);
          }
        }
      });
      inter.sort((a, b) => a.br - b.br);
      console.log(inter);
      result.push(inter[0]);
      inter = [];
    } else {
      ress.forEach((elemen) => {
        if (elemen.name == element) {
          const object = {
            name: elemen.name,
            br: elemen.rb_br,
            id: result.length + 1,
          };
          result.push(object);
        }
      });
    }
  });
  result.sort((a, b) => b.br - a.br);
  const final: { name: string; id: number; br: string }[] = [];
  result.forEach((element) => {
    final.push({
      name: element.name,
      id: element.id,
      br: element.br.toString(),
    });
  });
  console.log(final);
  const out = {
    result: final,
    br: brb,
  };
  return out;
}
