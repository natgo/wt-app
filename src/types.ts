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
  prem_vehicle?: boolean;
  event?: string;
  cost_gold?: number;
  hidden?: boolean;
  marketplace?: number;
}

export interface GroundProps extends FinalProps {
  mass: number;
  horsepower: number;
  gears_forward: number;
  gears_backward: number;
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
  laser_range?: boolean;
  weapons?: TankWeapons;
  optics: Sights;
}

export interface Sights {
  driver?: driverSight;
  gunner: gunnerSight;
  commander?: commanderSight;
}

export interface driverSight {
  driverIr?: {
    resolution: [800 | 1200, 600 | 800];
    lightMult: 5.0 | 7.0;
    ghosting: 0.7 | 0.6;
    noiseFactor: 0.2;
  };
  driverThermal?: {
    resolution: [500 | 800, 300 | 600];
    noiseFactor: 0.05 | 0.04;
  };
}

export interface gunnerSight {
  gunnerIr?: {
    resolution: [800 | 1600, 600 | 1200];
    lightMult: 5.0 | 8 | 9;
    ghosting: 0.7 | 0.75 | 0.6;
    noiseFactor: 0.2;
  };
  gunnerThermal?: {
    resolution: [500 | 800 | 1200, 300 | 600 | 800];
    noiseFactor: 0.05 | 0.04;
  };
  zoomInFov: number; //74
  zoomOutFov: number;
}

export interface commanderSight {
  commanderViewIr?: {
    resolution: [800 | 1600, 600 | 1200];
    lightMult: 8.0 | 9.0;
    ghosting: 0.75 | 0.6;
    noiseFactor: 0.2;
  };
  commanderViewThermal?: {
    resolution: [800, 600];
    noiseFactor: 0.04;
  };
  zoomInFov: number;
  zoomOutFov: number;
}

export interface TankWeapons {
  cannon?: TankCannon[];
  machineGun?: MG[];
  launcher?: TankCannon;
}

export interface MG {
  ammo: number;
  horizonalSpeed: number;
  verticalSpeed: number;
  horizonalLimit: number[];
  verticalLimit: number[];
}

export interface TankCannon {
  intname: string;
  name: string;
  secondary?: boolean;
  ammo: number;
  shotFreq: number;
  caliber: number;
  shells?: Shell[];
  belts?: ShellBelt[];
  autoloader?: boolean;
  horizonalSpeed: number | "primary";
  verticalSpeed: number | "primary";
  horizonalLimit: number[] | "primary";
  verticalLimit: number[] | "primary";
  stabilizer?: Stabilizer;
  hullAiming?: HullAiming;
}

export interface Shell {
  modname: string;
  intname: string;
  name: string;
  maxamount?: number;
  modmaxamount?: number;
}

export interface ShellBelt {
  modname: string;
  maxamount?: number;
  modmaxamount?: number;
  shells: Belt[];
}

export interface Belt {
  intname: string;
  name: string;
}

export interface HullAiming {
  horizontal?: boolean;
  vertical?: boolean;
  maxRoll: number;
}

export interface Stabilizer {
  shoulderStop?: boolean;
  horizontal?: boolean;
  vertical?: boolean;
  horizontalSpeed?: number;
  verticalSpeed?: number;
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
