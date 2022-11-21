import { Fragment } from "react";

import CssBaseline from "@mui/material/CssBaseline";

import Pages from "@/routes/Pages";
import HotKeys from "@/sections/HotKeys";
import Notifications from "@/sections/Notifications";
import SW from "@/sections/SW";

import "./index.css";

function App() {
  return (
    <Fragment>
      <CssBaseline />
      <Notifications />
      <HotKeys />
      <SW />
      <Pages />
    </Fragment>
  );
}

export default App;
