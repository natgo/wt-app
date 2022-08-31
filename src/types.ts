export type { FinalProp };
export type {SkinsProp};
interface FinalProp {
  updated: Date;
  ground: GroundProps[];
  aircraft: FinalProps[];
  helicopter: FinalProps[];
}

export interface FinalProps {
  intname: string;
  wikiname: string;
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
  fictional:  Fictional;
}

export interface Fictional {
  USA:     Usa;
  Germany: FictionalGermany;
  USSR:    Usa;
  Britain: Britain;
  Japan:   Britain;
  Italy:   France;
  France:  France;
  Sweden:  FictionalSweden;
}

export interface Britain {
  aircraft: Aircraft;
}

export interface Ungrouped {
  intnames:   string[];
  dislayname: string;
  post:       string;
  camo?:      string[];
  type?:      Type;
}

export enum Type {
  Semi = "semi",
}

export type Country  ="USA"|"Germany"|"USSR"|"Britain"|"Japan"|"Italy"|"France"|"Sweden"


export interface France {
  ground: Aircraft;
}

export interface FictionalGermany {
  aircraft: Aircraft;
  ground:   Aircraft;
}

export interface Aircraft {
  ungrouped: Ungrouped[];
  grouped: Record<Country,Ungrouped[]>;
}

export interface FictionalSweden {
  aircraft: Aircraft;
  ground:   Aircraft;
}

export interface Usa {
  aircraft: Aircraft;
  ground:   Aircraft;
}

export interface Historical {
  USA:     HistoricalUSA;
  Germany: HistoricalGermany;
  USSR:    Ussr;
  Britain: HistoricalBritain;
  Italy:   Italy;
  France:  HistoricalFrance;
  Sweden:  HistoricalSweden;
}

export interface HistoricalBritain {
  aircraft: Aircraft;
  ground:   Aircraft;
}

export interface HistoricalFrance {
  aircraft: Aircraft;
}

export interface HistoricalGermany {
  aircraft: Aircraft;
  ground:   Aircraft;
}

export interface Italy {
  aircraft: Aircraft;
}

export interface HistoricalSweden {
  aircraft: Aircraft;
  ground:   Aircraft;
}

export interface HistoricalUSA {
  aircraft: Aircraft;
}

export interface Ussr {
  aircraft: Aircraft;
  ground:   Aircraft;
}
