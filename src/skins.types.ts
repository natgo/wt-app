import { z } from "zod";

// Skins

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
  type?: "semi";
  repack?: boolean;
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
  aviation?: Aircraft;
  army?: Aircraft;
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

export const countryname = z.enum([
  "country_usa",
  "country_germany",
  "country_ussr",
  "country_britain",
  "country_japan",
  "country_china",
  "country_italy",
  "country_france",
  "country_sweden",
  "country_israel",
]);
export type CountryName = z.infer<typeof countryname>;

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
