import { useSetRecoilState } from "recoil";

import axios from "axios";

import ayskari from "@/assets/img/as.webp";
import { SkinsProp } from "@/skins.types";
import { SkinAtom } from "@/store/atom/atom";
import { finalDevState, finalLiveState } from "@/store/final";
import { ModificationDevState, ModificationLiveState } from "@/store/modifications";
import { shopDevState, shopLiveState } from "@/store/shop";
import { WikiState } from "@/store/wiki";
import { Final, FinalShop, Modifications, ScrapeFull } from "@/types";

export default function Home(): JSX.Element {
  const setFinalLive = useSetRecoilState(finalLiveState);
  const setFinalDev = useSetRecoilState(finalDevState);
  const skinsSetValue = useSetRecoilState(SkinAtom);
  const setShopLive = useSetRecoilState(shopLiveState);
  const setShopDev = useSetRecoilState(shopDevState);
  const setModificationLive = useSetRecoilState(ModificationLiveState);
  const setModificationDev = useSetRecoilState(ModificationDevState);
  const setWiki = useSetRecoilState(WikiState);

  axios.get("./final.json").then((response) => {
    const final: Final = response.data;
    setFinalLive(final);
  });

  axios.get("./final-dev.json").then((response) => {
    const final: Final = response.data;
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

  axios.get("./modifications.json").then((response) => {
    const modifications: Modifications = response.data;
    setModificationLive(modifications);
  });

  axios.get("./modifications-dev.json").then((response) => {
    const modifications: Modifications = response.data;
    setModificationDev(modifications);
  });

  axios.get("./wiki.json").then((response) => {
    const wiki: ScrapeFull = response.data;
    setWiki(wiki);
  });

  return (
    <img
      src={ayskari}
      alt="äyskäri"
      style={{ width: "100%", height: "100%", maxWidth: "initial" }}
    />
  );
}
