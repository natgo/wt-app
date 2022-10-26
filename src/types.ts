export type { FinalProp };
export type { SkinsProp };
interface FinalProp {
  updated: Date;
  ground: GroundProps[];
  aircraft: FinalProps[];
  helicopter: FinalProps[];
}

export interface FinalProps {
  intname: string;
  wikiname: string;
  type: "tank" | "aircraft" | "helicopter";
  normal_type: string;
  extended_type?: string[];
  country: string;
  rank: number;
  crew: number;
  sl_price: number;
  reqRP: number;
  ab_br: string;
  ab_realbr: number;
  rb_br: string;
  rb_realbr: number;
  sb_br: string;
  sb_realbr: number;
  base_ab_repair: number;
  base_rb_repair: number;
  base_sb_repair: number;
  rp_multiplyer: number;
  ab_sl_multiplyer: number;
  rb_sl_multiplyer: number;
  sb_sl_multiplyer: number;
  prem_type: string;
  cost_gold: number | undefined;
  hidden: boolean;
  marketplace?: number;
}

export interface GroundProps extends FinalProps {
  mass: number;
  horsepower: number;
  gears_forward: number;
  gears_backward: number;
  night_vision?: NightVision;
  hydro_suspension?: boolean;
  can_float?: boolean;
  has_synchro?: boolean;
  has_neutral?: boolean;
  has_dozer?: boolean;
  has_ess?: boolean;
  has_smoke?: boolean;
  has_lws?: boolean;
  has_era?: boolean;
  has_composite?: boolean;
}

export interface NightVision {
  commanderViewThermal?: { resolution: [800, 600]; noiseFactor: 0.04 };
  gunnerThermal?: {
    resolution: [500 | 800 | 1200, 300 | 600 | 800];
    noiseFactor: 0.05 | 0.04;
  };
  commanderViewIr?: {
    resolution: [800 | 1600, 600 | 1200];
    lightMult: 8.0 | 9.0;
    ghosting: 0.75 | 0.6;
    noiseFactor: 0.2;
  };
  driverIr?: {
    resolution: [800 | 1200, 600 | 800];
    lightMult: 5.0 | 7.0;
    ghosting: 0.7 | 0.6;
    noiseFactor: 0.2;
  };
  gunnerIr?: {
    resolution: [800, 600];
    lightMult: 5.0 | 8;
    ghosting: 0.7 | 0.75;
    noiseFactor: 0.2;
  };
}

interface SkinsProp {
  historical: Historical;
  fictional: Fictional;
}

export interface Fictional {
  USA: Countries;
  Germany: Countries;
  USSR: Countries;
  "Great Britain": Countries;
  China: Countries;
  Japan: Countries;
  Italy: Countries;
  France: Countries;
  Sweden: Countries;
  Israel?: Countries;
}

export interface Ungrouped {
  intnames: string[];
  dislayname: string;
  post: string;
  camo?: Array<Camo>;
  type?: Type;
  repack?: boolean;
}

export enum Type {
  Semi = "semi",
}

export type Camo = "summer" | "desert" | "fall" | "winter";

export type Country =
  | "USA"
  | "Germany"
  | "USSR"
  | "Britain"
  | "Japan"
  | "Italy"
  | "France"
  | "Sweden";

export interface Countries {
  aircraft?: Aircraft;
  ground?: Aircraft;
}

export interface Aircraft {
  ungrouped: Ungrouped[];
  grouped: Record<string, Ungrouped[]>;
}

export interface Historical {
  USA: Countries;
  Germany: Countries;
  USSR: Countries;
  "Great Britain": Countries;
  China?: Countries;
  Japan?: Countries;
  Italy: Countries;
  France: Countries;
  Sweden: Countries;
  Israel?: Countries;
}

export interface TypeProp {
  type:
    | "USA"
    | "Germany"
    | "USSR"
    | "Great Britain"
    | "Japan"
    | "China"
    | "Italy"
    | "France"
    | "Sweden"
    | "Israel";
}
