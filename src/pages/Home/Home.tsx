import { useSetRecoilState } from "recoil";

import { Final } from "@data/final.schema";
import { Modifications } from "@data/modifications.schema";
import { FinalShop } from "@data/shop.schema";
import { Wiki } from "@data/wiki.schema";
import axios from "axios";

import ayskari from "@/assets/img/as.webp";
import finalDevPath from "@/data/data/final-dev.json?url";
import finalPath from "@/data/data/final.json?url";
import modificationsDevPath from "@/data/data/modifications-dev.json?url";
import modificationsPath from "@/data/data/modifications.json?url";
import shopDevPath from "@/data/data/shop-dev.json?url";
import shopPath from "@/data/data/shop.json?url";
import wikiPath from "@/data/data/wiki.json?url";
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

  axios.get(finalPath).then((response) => {
    const final: Final = response.data;
    setFinalLive(final);
  });

  axios.get(finalDevPath).then((response) => {
    const final: Final = response.data;
    setFinalDev(final);
  });

  axios.get("./skins.json").then((response) => {
    const skins: SkinsProp = response.data;
    skinsSetValue(skins);
  });

  axios.get(shopPath).then((response) => {
    const shop: FinalShop = response.data;
    setShopLive(shop);
  });

  axios.get(shopDevPath).then((response) => {
    const shop: FinalShop = response.data;
    setShopDev(shop);
  });

  axios.get(modificationsPath).then((response) => {
    const modifications: Modifications = response.data;
    setModificationLive(modifications);
  });

  axios.get(modificationsDevPath).then((response) => {
    const modifications: Modifications = response.data;
    setModificationDev(modifications);
  });

  axios.get(wikiPath).then((response) => {
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
