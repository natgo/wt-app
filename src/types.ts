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
  extended_type: string[];
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
}

export interface GroundProps extends FinalProps {
  mass: number;
  horsepower: number;
  turret_armour: number[];
  hull_armour: number[];
  gears_forward: number;
  gears_backward: number;
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
