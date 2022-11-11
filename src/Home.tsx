import { useSetRecoilState } from "recoil";

import axios from "axios";

import ayskari from "./assets/img/as.webp";
import { Final, Shop, SkinAtom } from "./atom";
import { FinalProp, FinalShop, SkinsProp } from "./types";

export function Home(): JSX.Element {
  const finalSetValue = useSetRecoilState(Final);
  const skinsSetValue = useSetRecoilState(SkinAtom);
  const shopSetValue = useSetRecoilState(Shop);

  axios.get("./final.json").then((response) => {
    const final: FinalProp = response.data;
    finalSetValue(final);
  });

  axios.get("./skins.json").then((response) => {
    const skins: SkinsProp = response.data;
    skinsSetValue(skins);
  });

  axios.get("./shop.json").then((response) => {
    const shop: FinalShop = response.data;
    shopSetValue(shop);
  });

  return (
    <img
      src={ayskari}
      alt="äyskäri"
      style={{ width: "100%", height: "100%", maxWidth: "initial" }}
    />
  );
}
