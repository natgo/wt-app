import React from "react";
import { createRoot } from "react-dom/client";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { RecoilRoot } from "recoil";

import RecoilNexus from "recoil-nexus";

import { Data } from "@/pages/Data/Data";
import { Home } from "@/pages/Home/Home";
import { Skins } from "@/pages/Skins/Skins";
import App from "@/pages/Techtree/Techtree";
import { Vehicle } from "@/pages/Vehicle/Vehicle";
import { MiniDrawer } from "@/sections/Drawer";

import Calculator from "./Calculator/Calculator";
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
