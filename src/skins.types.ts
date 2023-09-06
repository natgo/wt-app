// Skins
import { z } from "zod";

import { CountryName } from "./data/types/final.schema";

const camoSchema = z.enum(["summer", "desert", "fall", "winter"]);
export type Camo = z.infer<typeof camoSchema>;

const ungroupedSchema = z.object({
  intnames: z.array(z.string()),
  displayname: z.string(),
  post: z.string(),
  camo: z.array(camoSchema).optional(),
  type: z.literal("semi").optional(),
  repack: z.boolean().optional(),
});
export type Ungrouped = z.infer<typeof ungroupedSchema>;

const aircraftSchema = z.object({
  ungrouped: z.array(ungroupedSchema).optional(),
  grouped: z.record(z.array(ungroupedSchema)).optional(),
});
export type Aircraft = z.infer<typeof aircraftSchema>;

const countryTypesSchema = z.object({
  aviation: aircraftSchema.optional(),
  army: aircraftSchema.optional(),
});
export type CountryTypes = z.infer<typeof countryTypesSchema>;

const countrySchema = z.object({
  historical: countryTypesSchema.optional(),
  fictional: countryTypesSchema.optional(),
});
export type Country = z.infer<typeof countrySchema>;

const skinsPropSchema = z.object({
  country_usa: countrySchema,
  country_germany: countrySchema,
  country_ussr: countrySchema,
  country_britain: countrySchema,
  country_japan: countrySchema,
  country_china: countrySchema.optional(),
  country_italy: countrySchema,
  country_france: countrySchema,
  country_sweden: countrySchema,
  country_israel: countrySchema.optional(),
});
export type SkinsProp = z.infer<typeof skinsPropSchema>;

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
