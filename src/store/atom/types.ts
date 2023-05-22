import { z } from "zod";

export interface ParcedList {
  name: string;
  id: number;
}

export interface CorrectedList {
  name: string;
  id: number;
  br: string;
}

export interface FilterProps {
  hide_wiki: boolean;
  hide_ingame: boolean;
  show_skins: boolean;
  show_features: Features;
  show_class: Classes[];
}

export const features = z.union([
  z.enum([
    "hydro_suspension",
    "can_float",
    "has_synchro",
    "has_neutral",
    "has_dozer",
    "has_ess",
    "has_smoke",
    "has_lws",
    "has_era",
    "has_composite",
    "has_laser_range",
    "has_range",
  ]),
  z.null(),
]);
export type Features = z.infer<typeof features>;

export const classes = z.enum([
  "type_light_tank",
  "type_medium_tank",
  "type_heavy_tank",
  "type_tank_destroyer",
  "type_spaa",
]);
export type Classes = z.infer<typeof classes>;
