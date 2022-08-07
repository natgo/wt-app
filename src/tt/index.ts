import $ from "jquery";

import { BritainAircraft } from "./BritainAircraft";
import { BritainGround } from "./BritainGround";
import { BritainHeli } from "./BritainHeli";
import { ChinaAircraft } from "./ChinaAircraft";
import { ChinaGround } from "./ChinaGround";
import { ChinaHeli } from "./ChinaHeli";
import { FranceAircraft } from "./FranceAircraft";
import { FranceGround } from "./FranceGround";
import { FranceHeli } from "./FranceHeli";
import { GermanyAircraft } from "./GermanyAircraft";
import { GermanyGround } from "./GermanyGround";
import { GermanyHeli } from "./GermanyHeli";
import { IsraelAircraft } from "./IsraelAircraft";
import { IsraelGround } from "./IsraelGround";
import { IsraelHeli } from "./IsraelHeli";
import { ItalyAircraft } from "./ItalyAircraft";
import { ItalyGround } from "./ItalyGround";
import { ItalyHeli } from "./ItalyHeli";
import { JapanAircraft } from "./JapanAircraft";
import { JapanGround } from "./JapanGround";
import { JapanHeli } from "./JapanHeli";
import { SwedenAircraft } from "./SwedenAircraft";
import { SwedenGround } from "./SwedenGround";
import { SwedenHeli } from "./SwedenHeli";
import { USAAircraft } from "./USAAircraft";
import { USAGround } from "./USAGround";
import { USAHeli } from "./USAHeli";
import { USSRAircraft } from "./USSRAircraft";
import { USSRGround } from "./USSRGround";
import { USSRHeli } from "./USSRHeli";

export function openfolder(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
  console.log("click");
  $(".tree-group-collapse").slideUp();
  $(event.currentTarget).siblings(".tree-group-collapse").slideToggle("slow");
}

export {
  BritainAircraft,
  BritainGround,
  BritainHeli,
  ChinaAircraft,
  ChinaGround,
  ChinaHeli,
  FranceAircraft,
  FranceGround,
  FranceHeli,
  GermanyAircraft,
  GermanyGround,
  GermanyHeli,
  IsraelAircraft,
  IsraelGround,
  IsraelHeli,
  ItalyAircraft,
  ItalyGround,
  ItalyHeli,
  JapanAircraft,
  JapanGround,
  JapanHeli,
  SwedenAircraft,
  SwedenGround,
  SwedenHeli,
  USAAircraft,
  USAGround,
  USAHeli,
  USSRAircraft,
  USSRGround,
  USSRHeli,
};
