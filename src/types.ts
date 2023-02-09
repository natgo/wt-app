import { z } from "zod";

// Final

export interface FinalProp {
  version: string;
  ground: GroundProps[];
  aircraft: AircraftProps[];
  helicopter: HelicopterProps[];
}

export type VehicleProps = GroundProps | AircraftProps | HelicopterProps;

export interface FinalProps {
  intname: string;
  wikiname?: string;
  displayname?: string;
  normal_type: string;
  extended_type?: string[];
  country: string;
  operator_country?: string;
  rank: number;
  crew: number;
  sl_price: number;
  reqRP: number;
  br: string[];
  realbr: number[];
  base_repair: number[];
  rp_multiplyer: number;
  sl_multiplyer: number[];
  prem_type: string;
  prem_vehicle?: boolean;
  event?: string;
  cost_gold?: number;
  hidden?: boolean;
  marketplace?: string;
  store?: string;
}

export interface AircraftProps extends FinalProps {
  type: "aircraft";
  ballistic_computer?: BallisticComputer;
  secondary_weapon_preset?: SecondaryWeaponPreset;
}

export interface BallisticComputer {
  ccip_guns?: true;
  ccip_rockets?: true;
  ccip_bombs?: true;
  ccrp_bombs?: true;
}

export interface SecondaryWeaponPreset {
  maxload: number;
  maxloadLeft: number;
  maxloadRight: number;
  maxDisbalance: number;
  weaponSlots: Array<{
    hidden?: boolean;
    slot: Array<FinalWeapons | FinalWeapon | { name: string }>;
  }>;
}

export interface FinalWeapons {
  intname: string;
  iconType: string;
  reqModification?: string;
  weapons: FinalWeaponArray[];
}

export interface FinalWeaponArray {
  type:
    | "aam"
    | "agm"
    | "bomb"
    | "guided_bomb"
    | "torpedo"
    | "rocket"
    | "gun"
    | "countermeasures"
    | "fuel_tank"
    | "optics"
    | "targeting_pod"
    | "booster"
    | null;
  displayname?: string;
  bullets?: number;
}

export interface FinalWeapon {
  type:
    | "aam"
    | "agm"
    | "bomb"
    | "guided_bomb"
    | "torpedo"
    | "rocket"
    | "gun"
    | "countermeasures"
    | "fuel_tank"
    | "optics"
    | "targeting_pod"
    | "booster"
    | null;
  bullets?: number;
  intname: string;
  displayname?: string;
  iconType: string;
  reqModification?: string;
}

export interface GroundProps extends FinalProps {
  type: "tank";
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
  zoomInFov: number; //73.66
  zoomOutFov: number;
}

export interface TankWeapons {
  cannon?: TankCannon[];
  machineGun?: GenericGun[];
  launcher?: TankCannon;
}

export interface GenericGun {
  intname: string;
  displayname: string;
  ammo: number;
  shells?: Shell[];
  belts?: ShellBelt[];
  shotFreq: number;
  caliber: number;
  horizonalSpeed: number | "primary";
  verticalSpeed: number | "primary";
  horizonalLimit: number[] | "primary";
  verticalLimit: number[] | "primary";
}

export interface TankCannon extends GenericGun {
  secondary?: boolean;
  autoloader?: boolean;
  stabilizer?: Stabilizer;
  hullAiming?: HullAiming;
}

export interface Shell {
  modname: string;
  intname?: string;
  name?: string;
  maxamount?: number;
  modmaxamount?: number;
}

export interface ShellBelt {
  modname: string;
  name: string;
  maxamount?: number;
  modmaxamount?: number;
  shells: Belt[];
}

export interface Belt {
  intname: string;
  type: string;
  name?: string;
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

export interface NightVision {
  commanderViewThermal?: {
    resolution: [500 | 800 | 1200, 300 | 600 | 800];
    noiseFactor: 0.05 | 0.04;
  };
  gunnerThermal?: {
    resolution: [500 | 800 | 1200, 300 | 600 | 800];
    noiseFactor: 0.05 | 0.04;
  };
  driverThermal?: {
    resolution: [500 | 800 | 1200, 300 | 600 | 800];
    noiseFactor: 0.05 | 0.04;
  };
  commanderViewIr?: {
    resolution: [800 | 1600, 600 | 1200];
    lightMult: 5.0 | 8 | 9;
    ghosting: 0.7 | 0.75 | 0.6;
    noiseFactor: 0.2;
  };
  driverIr?: {
    resolution: [800 | 1600, 600 | 1200];
    lightMult: 5.0 | 8 | 9;
    ghosting: 0.7 | 0.75 | 0.6;
    noiseFactor: 0.2;
  };
  gunnerIr?: {
    resolution: [800 | 1600, 600 | 1200];
    lightMult: 5.0 | 8 | 9;
    ghosting: 0.7 | 0.75 | 0.6;
    noiseFactor: 0.2;
  };
}

export interface HelicopterProps extends FinalProps {
  type: "helicopter";
  ballistic_computer?: BallisticComputer;
  secondary_weapon_preset?: SecondaryWeaponPreset;
  has_maw?: boolean;
  has_lws?: boolean;
  has_rwr?: boolean;
  has_ircm?: boolean;
  has_hirss?: boolean;
  optics?: HelicopterOptics;
}

export interface HelicopterOptics {
  pilot?: HeliSight;
  gunner?: HeliSight;
  sight?: HeliGunnerSight;
}

export interface HeliSight {
  ir?: {
    resolution: number[];
    lightMult: number;
    ghosting: number;
    noiseFactor: number;
  };
}

export interface HeliGunnerSight extends HeliSight {
  zoomInFov: number; //73.66
  zoomOutFov: number;
  thermal?: {
    resolution: [1024, 768];
    noiseFactor: 0.5;
  };
}

//Final Shop

export type FinalShop = Record<string, FinalShopCountry>;

export interface FinalShopCountry {
  army: FinalShopRange;
  helicopters: FinalShopRange;
  aviation: FinalShopRange;
}

export interface FinalShopRange {
  col_normal: number;
  min_rank: number;
  max_rank: number;
  needVehicles: number[];
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

export type FinalShopGroup = {
  name: string;
  displayname: string;
  image: string;
  reqAir?: "" | string;
  vehicles: FinalShopItem[];
};

export interface ShopExtItem extends FinalShopItem {
  draw_arrow: boolean;
}

export interface ShopExtGroup extends FinalShopGroup {
  draw_arrow: boolean;
}

// Modifications

export interface Modifications {
  ground: VehicleMods[];
  aircraft: VehicleMods[];
  helicopter: VehicleMods[];
}

export const modClassName = z.enum([
  "lth",
  "armor",
  "weapon",
  "mobility",
  "protection",
  "firepower",
  "primaryWeapon",
  "secondaryWeapon",
  "premiumMods",
  "expendables",
  "seakeeping",
  "unsinkability",
]);
export type ModClassName = z.infer<typeof modClassName>;

export interface VehicleMods {
  intname: string;
  mods: ModClass;
}

export interface ModClass {
  lth?: BaseMod[][];
  armor?: BaseMod[][];
  weapon?: BaseMod[][];
  mobility?: BaseMod[][];
  protection?: BaseMod[][];
  firepower?: BaseMod[][];
  primaryWeapon?: BaseMod[][];
  secondaryWeapon?: BaseMod[][];
  premiumMods?: BaseMod[][];
  expendables?: BaseMod[][];
  seakeeping?: BaseMod[][];
  unsinkability?: BaseMod[][];
}

export interface BaseMod {
  intname: string;
  displayname?: string;
  reqMod?: string;
  image: string;
}
