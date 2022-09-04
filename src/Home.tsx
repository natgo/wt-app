import { useSetRecoilState } from "recoil";

import axios from "axios";

import ayskari from "./assets/img/as.png";
import { Final, SkinAtom } from "./atom";
import { FinalProp, SkinsProp } from "./types";

export function Home(): JSX.Element {
  const finalSetValue = useSetRecoilState(Final);
  const skinsSetValue = useSetRecoilState(SkinAtom);

  axios.get("./final.json").then((response) => {
    const final: FinalProp = response.data;
    finalSetValue(final);
  });

  axios.get("./skins.json").then((response) => {
    const skins: SkinsProp = response.data;
    skinsSetValue(skins);
  });

  return <img src={ayskari} alt="äyskäri" style={{ width: "100%", height: "100%" }} />;
}
