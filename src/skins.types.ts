// Skins
import { CountryName } from "./data/types/final.schema";

export interface SkinsProp {
  country_usa: Country;
  country_germany: Country;
  country_ussr: Country;
  country_britain: Country;
  country_japan: Country;
  country_china?: Country;
  country_italy: Country;
  country_france: Country;
  country_sweden: Country;
  country_israel?: Country;
}

export interface Ungrouped {
  intnames: string[];
  dislayname: string;
  post: string;
  camo?: Array<Camo>;
  type?: "semi";
  repack?: boolean;
}

export type Camo = "summer" | "desert" | "fall" | "winter";

export interface Country {
  historical: CountryTypes;
  fictional: CountryTypes;
}

export interface CountryTypes {
  aviation?: Aircraft;
  army?: Aircraft;
}

export interface Aircraft {
  ungrouped?: Ungrouped[];
  grouped?: Record<string, Ungrouped[]>;
}

export interface CountryProp {
  country: CountryName;
}

export interface VehicleSkinsProp {
  historical: Ungrouped[];
  fictional: Ungrouped[];
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
