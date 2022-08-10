import { atom } from "recoil";

import { recoilPersist } from "recoil-persist";

import { FinalProp } from "./types";

const { persistAtom } = recoilPersist();

export const TypeTab = atom<number>({
  key: "TypeTab",
  default: 0,
  effects_UNSTABLE: [persistAtom],
});

export const CountryTab = atom<number>({
  key: "CountryTab",
  default: 0,
  effects_UNSTABLE: [persistAtom],
});

export const Final = atom<FinalProp>({
  key: "Final",
  default: {
    updated: new Date(),
    ground: [
      {
        intname: "string",
        wikiname: "string",
        normal_type: "string",
        extended_type: [""],
        country: "string",
        rank: 0,
        sl_price: 0,
        reqRP: 0,
        ab_br: "string",
        ab_realbr: 0,
        rb_br: "string",
        rb_realbr: 0,
        sb_br: "string",
        sb_realbr: 0,
        base_ab_repair: 0,
        base_rb_repair: 0,
        base_sb_repair: 0,
        rp_multiplyer: 0,
        ab_sl_multiplyer: 0,
        rb_sl_multiplyer: 0,
        sb_sl_multiplyer: 0,
        is_prem: false,
        mass: 0,
        horsepower: 0,
      },
    ],
    aircraft: [
      {
        intname: "string",
        wikiname: "string",
        normal_type: "string",
        extended_type: [""],
        country: "string",
        rank: 0,
        sl_price: 0,
        reqRP: 0,
        ab_br: "string",
        ab_realbr: 0,
        rb_br: "string",
        rb_realbr: 0,
        sb_br: "string",
        sb_realbr: 0,
        base_ab_repair: 0,
        base_rb_repair: 0,
        base_sb_repair: 0,
        rp_multiplyer: 0,
        ab_sl_multiplyer: 0,
        rb_sl_multiplyer: 0,
        sb_sl_multiplyer: 0,
        is_prem: false,
      },
    ],
    helicopter: [
      {
        intname: "string",
        wikiname: "string",
        normal_type: "string",
        extended_type: [""],
        country: "string",
        rank: 0,
        sl_price: 0,
        reqRP: 0,
        ab_br: "string",
        ab_realbr: 0,
        rb_br: "string",
        rb_realbr: 0,
        sb_br: "string",
        sb_realbr: 0,
        base_ab_repair: 0,
        base_rb_repair: 0,
        base_sb_repair: 0,
        rp_multiplyer: 0,
        ab_sl_multiplyer: 0,
        rb_sl_multiplyer: 0,
        sb_sl_multiplyer: 0,
        is_prem: false,
      },
    ],
  },
  effects_UNSTABLE: [persistAtom],
});
