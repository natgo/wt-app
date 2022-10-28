import React from "react";
import { createRoot } from "react-dom/client";
import {
  BrowserRouter,
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { RecoilRoot } from "recoil";

import RecoilNexus from "recoil-nexus";

import Calculator from "./Calculator/Calculator";
import { Data } from "./Data";
import { MiniDrawer } from "./Drawer";
import { Home } from "./Home";
import { Skins } from "./Skins/Skins";
import App from "./Techtree/Techtree";
import { Vehicle } from "./Techtree/Vehicle";
import "./index.css";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/wt/" element={<MiniDrawer />}>
      <Route path="/wt/" element={<Home />} />
      <Route path="/wt/techtree/" element={<App />} />
      <Route path="/wt/data/" element={<Data />} />
      <Route path="/wt/techtree/:vehicleId" element={<Vehicle />} />
      <Route path="/wt/calculator/" element={<Calculator />} />
      <Route path="/wt/skins/" element={<Skins />} />
    </Route>,
  ),
);

const container = document.getElementById("root");
// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const root = createRoot(container!);
root.render(
  <React.StrictMode>
    <RecoilRoot>
      <RecoilNexus />
      <RouterProvider router={router} />
    </RecoilRoot>
  </React.StrictMode>,
);
