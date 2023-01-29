import { FC } from "react";
import { PathRouteProps } from "react-router-dom";

import type { SvgIconProps } from "@mui/material/SvgIcon";

enum Pages {
  Home,
  Techtree,
  Squadron,
  Compare,
  Data,
  Calculator,
  Skins,
}

type PathRouteCustomProps = {
  title?: string;
  icon?: FC<SvgIconProps>;
};

type Routes = Record<Pages, PathRouteProps & PathRouteCustomProps>;

export type { Routes };
export { Pages };
