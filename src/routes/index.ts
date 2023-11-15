import {
  AccountTree,
  Brush,
  Calculate,
  DataObject,
  Difference,
  Home,
  Shield,
} from "@mui/icons-material";

import { Pages, Routes } from "./types";

const routes: Routes = {
  [Pages.Home]: {
    path: "/wt/",
    title: "Home",
    icon: Home,
  },
  [Pages.Techtree]: {
    path: "/wt/techtree",
    title: "Techtree",
    icon: AccountTree,
  },
  [Pages.Squadron]: {
    path: "/wt/squadron",
    title: "Squadron vehicles",
    icon: Shield,
  },
  [Pages.Compare]: {
    path: "/wt/compare",
    title: "Compare vehicles",
    icon: Difference,
  },
  [Pages.Data]: {
    path: "/wt/data",
    title: "WT Data Project (External)",
    icon: DataObject,
  },
  [Pages.Calculator]: {
    path: "/wt/calculator",
    title: "BR Calculator",
    icon: Calculate,
  },
  [Pages.Skins]: {
    path: "/wt/skins",
    title: "🇫🇮 Skins",
    icon: Brush,
  },
};

export default routes;
