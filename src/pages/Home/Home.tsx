import { useSetRecoilState } from "recoil";

import axios from "axios";

import ayskari from "@/assets/img/as.webp";
import { SkinAtom } from "@/store/atom/atom";
import { finalDevState, finalLiveState } from "@/store/final";
import { shopDevState, shopLiveState } from "@/store/shop";
import { FinalProp, FinalShop, SkinsProp } from "@/types";

export default function Home(): JSX.Element {
  const setFinalLive = useSetRecoilState(finalLiveState);
  const setFinalDev = useSetRecoilState(finalDevState);
  const skinsSetValue = useSetRecoilState(SkinAtom);
  const setShopLive = useSetRecoilState(shopLiveState);
  const setShopDev = useSetRecoilState(shopDevState);

  axios.get("./final.json").then((response) => {
    const final: FinalProp = response.data;
    setFinalLive(final);
  });

  axios.get("./final-dev.json").then((response) => {
    const final: FinalProp = response.data;
    setFinalDev(final);
  });

  axios.get("./skins.json").then((response) => {
    const skins: SkinsProp = response.data;
    skinsSetValue(skins);
  });

  axios.get("./shop.json").then((response) => {
    const shop: FinalShop = response.data;
    setShopLive(shop);
  });

  axios.get("./shop-dev.json").then((response) => {
    const shop: FinalShop = response.data;
    setShopDev(shop);
  });

  return (
    <img
      src={ayskari}
      alt="äyskäri"
      style={{ width: "100%", height: "100%", maxWidth: "initial" }}
    />
  );
}
