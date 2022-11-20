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
  show_features: Features | null;
  show_class: Classes[];
}

export enum Features {
  hydro_suspension = "hydro_suspension",
  can_float = "can_float",
  has_synchro = "has_synchro",
  has_neutral = "has_neutral",
  has_dozer = "has_dozer",
  has_ess = "has_ess",
  has_smoke = "has_smoke",
  has_lws = "has_lws",
  has_era = "has_era",
  has_composite = "has_composite",
  has_laser_range = "has_laser_range",
  has_range = "has_range",
}

export enum Classes {
  type_light_tank = "type_light_tank",
  type_medium_tank = "type_medium_tank",
  type_heavy_tank = "type_heavy_tank",
  type_tank_destroyer = "type_tank_destroyer",
  type_spaa = "type_spaa",
}
