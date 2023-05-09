import { useSetRecoilState } from "recoil";

import { Final } from "@data/final.schema";
import { Modifications } from "@data/modifications.schema";
import { FinalShop } from "@data/shop.schema";
import { Wiki } from "@data/wiki.schema";
import axios from "axios";

import ayskari from "@/assets/img/as.webp";
import { SkinsProp } from "@/skins.types";
import { SkinAtom } from "@/store/atom/atom";
import { finalDevState, finalLiveState } from "@/store/final";
import { ModificationDevState, ModificationLiveState } from "@/store/modifications";
import { shopDevState, shopLiveState } from "@/store/shop";
import { WikiState } from "@/store/wiki";

export default function Home(): JSX.Element {
  const setFinalLive = useSetRecoilState(finalLiveState);
  const setFinalDev = useSetRecoilState(finalDevState);
  const skinsSetValue = useSetRecoilState(SkinAtom);
  const setShopLive = useSetRecoilState(shopLiveState);
  const setShopDev = useSetRecoilState(shopDevState);
  const setModificationLive = useSetRecoilState(ModificationLiveState);
  const setModificationDev = useSetRecoilState(ModificationDevState);
  const setWiki = useSetRecoilState(WikiState);

  axios.get("./data/data/final.json").then((response) => {
    const final: Final = response.data;
    setFinalLive(final);
  });

  axios.get("./data/data/final-dev.json").then((response) => {
    const final: Final = response.data;
    setFinalDev(final);
  });

  axios.get("./skins.json").then((response) => {
    const skins: SkinsProp = response.data;
    skinsSetValue(skins);
  });

  axios.get("./data/data/shop.json").then((response) => {
    const shop: FinalShop = response.data;
    setShopLive(shop);
  });

  axios.get("./data/data/shop-dev.json").then((response) => {
    const shop: FinalShop = response.data;
    setShopDev(shop);
  });

  axios.get("./data/data/modifications.json").then((response) => {
    const modifications: Modifications = response.data;
    setModificationLive(modifications);
  });

  axios.get("./data/data/modifications-dev.json").then((response) => {
    const modifications: Modifications = response.data;
    setModificationDev(modifications);
  });

  axios.get("./data/data/wiki.json").then((response) => {
    const wiki: Wiki = response.data;
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
