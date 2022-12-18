export interface FinalProp {
  updated: Date;
  version: string;
  ground: GroundProps[];
  aircraft: FinalProps[];
  helicopter: FinalProps[];
}

export interface FinalProps {
  intname: string;
  wikiname?: string;
  displayname?: string;
  type: "tank" | "aircraft" | "helicopter";
  normal_type: string;
  extended_type?: string[];
  country: string;
  operator_country?: string;
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
  hydro_suspension?: true;
  can_float?: true;
  has_synchro?: true;
  has_neutral?: true;
  has_dozer?: true;
  has_ess?: true;
  has_smoke?: true;
  has_lws?: true;
  has_era?: true;
  has_composite?: true;
  has_laser_range?: true;
  has_range?: true;
  weapons?: TankWeapons;
  optics: Sights;
}

export interface Sights {
  driver?: Sight;
  gunner: gunnerSight;
  commander?: gunnerSight;
}

export interface Sight {
  ir?: {
    resolution: [800 | 1600, 600 | 1200];
    lightMult: 5.0 | 8 | 9;
    ghosting: 0.7 | 0.75 | 0.6;
    noiseFactor: 0.2;
  };
  thermal?: {
    resolution: [500 | 800 | 1200, 300 | 600 | 800];
    noiseFactor: 0.05 | 0.04;
  };
}

export interface gunnerSight extends Sight {
  zoomInFov: number; //74
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

export interface SkinsProp {
  historical: Historical;
  fictional: Fictional;
}

export interface Fictional {
  country_usa: Countries;
  country_germany: Countries;
  country_ussr: Countries;
  country_britain: Countries;
  country_japan: Countries;
  country_china: Countries;
  country_italy: Countries;
  country_france: Countries;
  country_sweden: Countries;
  country_israel?: Countries;
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
  ungrouped?: Ungrouped[];
  grouped?: Record<string, Ungrouped[]>;
}

export interface Historical {
  country_usa: Countries;
  country_germany: Countries;
  country_ussr: Countries;
  country_britain: Countries;
  country_japan?: Countries;
  country_china?: Countries;
  country_italy: Countries;
  country_france: Countries;
  country_sweden: Countries;
  country_israel?: Countries;
}

export interface CountryProp {
  country:
    | "country_usa"
    | "country_germany"
    | "country_ussr"
    | "country_britain"
    | "country_japan"
    | "country_china"
    | "country_italy"
    | "country_france"
    | "country_sweden"
    | "country_israel";
}

export interface VehicleSkinsProp {
  historical: Ungrouped[];
  fictional: Ungrouped[];
}

export type FinalShop = Record<string, FinalShopCountry>;

export interface FinalShopCountry {
  army: FinalShopRange;
  helicopters: FinalShopRange;
  aviation: FinalShopRange;
}

export interface FinalShopRange {
  col_normal: number;
  col_prem: number;
  min_rank: number;
  max_rank: number;
  range: Array<FinalShopItem | FinalShopGroup>[];
}

export interface FinalShopItem {
  name: string;
  rank: number;
  reqAir?: "" | string;
  gift?: true;
  hidden?: true;
  marketplace?: number;
  event?: string;
  clanVehicle?: true;
}

export interface FinalShopGroup {
  name: string;
  displayname: string;
  image: string;
  reqAir?: "" | string;
  vehicles: FinalShopItem[];
}

export interface ShopExtItem extends FinalShopItem {
  draw_arrow: boolean;
}

export interface ShopExtGroup extends FinalShopGroup {
  draw_arrow: boolean;
}

export interface HistoricalProp extends CountryProp {
  historical: "historical" | "fictional";
}

export interface ToolTipProp {
  value: Ungrouped;
}

export interface SinkProp extends CountryProp {
  value: SkinsProp;
  mode: "ground-ungrouped" | "ground-grouped" | "air-ungrouped" | "air-grouped";
  historical: "historical" | "fictional";
}
