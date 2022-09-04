import { TypeProp } from "../types";
import { SkinsProp } from "../types";
import { Ungrouped } from "../types";

export interface HistoricalProp extends TypeProp {
  historical: "historical" | "fictional";
}

export interface ToolTipProp {
  value: Ungrouped;
}

export interface SinkProp extends TypeProp {
  value: SkinsProp;
  mode: "ground-ungrouped" | "ground-grouped" | "air-ungrouped" | "air-grouped";
  historical: "historical" | "fictional";
}
