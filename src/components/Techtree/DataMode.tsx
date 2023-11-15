import { useRecoilValue } from "recoil";
import { useSetRecoilState } from "recoil";

import { Refresh } from "@mui/icons-material";
import {
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Tooltip,
} from "@mui/material";

import { Final } from "@data/final.schema";
import { Modifications } from "@data/modifications.schema";
import { FinalShop } from "@data/shop.schema";
import { Wiki } from "@data/wiki.schema";
import axios from "axios";

import finalDevPath from "@/data/data/final-dev.json?url";
import finalPath from "@/data/data/final.json?url";
import modificationsDevPath from "@/data/data/modifications-dev.json?url";
import modificationsPath from "@/data/data/modifications.json?url";
import shopDevPath from "@/data/data/shop-dev.json?url";
import shopPath from "@/data/data/shop.json?url";
import wikiPath from "@/data/data/wiki.json?url";
import { SkinsProp } from "@/skins.types";
import { SkinAtom } from "@/store/atom/atom";
import useDataMode from "@/store/datasource";
import { finalDevState, finalLiveState } from "@/store/final";
import { ModificationDevState, ModificationLiveState } from "@/store/modifications";
import { shopDevState, shopLiveState } from "@/store/shop";
import { WikiState } from "@/store/wiki";

export function DataMode(): JSX.Element {
  const [dataMode, dataModeActions] = useDataMode();
  const finalLive = useRecoilValue(finalLiveState);
  const finalDev = useRecoilValue(finalDevState);

  const setFinalLive = useSetRecoilState(finalLiveState);
  const setFinalDev = useSetRecoilState(finalDevState);
  const skinsSetValue = useSetRecoilState(SkinAtom);
  const setShopLive = useSetRecoilState(shopLiveState);
  const setShopDev = useSetRecoilState(shopDevState);
  const setModificationLive = useSetRecoilState(ModificationLiveState);
  const setModificationDev = useSetRecoilState(ModificationDevState);
  const setWiki = useSetRecoilState(WikiState);

  const handleChange = (event: SelectChangeEvent) => {
    if (event.target.value === "live" || event.target.value === "dev") {
      dataModeActions.setMode(event.target.value);
    }
  };

  return (
    <FormControl size="small" sx={{ display: "flex", flexDirection: "row" }}>
      <InputLabel id="server-select-label">Server</InputLabel>
      <Select
        labelId="server-select-label"
        id="server-select"
        value={dataMode}
        label="Server"
        onChange={handleChange}
      >
        <MenuItem value="live">Live v{finalLive.version}</MenuItem>
        <MenuItem value="dev">Dev v{finalDev.version}</MenuItem>
      </Select>
      <Tooltip title="Refresh Data" arrow>
        <IconButton
          onClick={() => {
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
          }}
          color="primary"
        >
          <Refresh />
        </IconButton>
      </Tooltip>
    </FormControl>
  );
}
