import { useSetRecoilState } from "recoil";

import axios from "axios";

import { Final, SkinAtom } from "./atom";
import { FinalProp, SkinsProp } from "./types";

export function Home(): JSX.Element {
  const finalSetValue = useSetRecoilState(Final);
  axios.get("./final.json").then((response) => {
    const final: FinalProp = response.data;
    finalSetValue(final);
  });
  const skinsSetValue = useSetRecoilState(SkinAtom);
  axios.get("./skins.json").then((response) => {
    const skins: SkinsProp = response.data;
    skinsSetValue(skins);
  });

  return <div>Kotisivu</div>;
}
