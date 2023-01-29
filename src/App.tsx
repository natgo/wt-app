import { Fragment } from "react";

import CssBaseline from "@mui/material/CssBaseline";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import Pages from "@/routes/Pages";
import Notifications from "@/sections/Notifications";
import SW from "@/sections/SW";

import "./index.css";

function App() {
  return (
    <Fragment>
      <CssBaseline />
      <Notifications />
      <SW />
      <Pages />
    </Fragment>
  );
}

export default App;
