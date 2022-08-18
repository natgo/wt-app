import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { RecoilRoot } from "recoil";

import RecoilNexus from "recoil-nexus";

import App from "./App";
import Dashboard from "./Dashboard";
import { Data } from "./Data";
import { MiniDrawer } from "./Drawer";
import { Home } from "./Home";
import { Vehicle } from "./Vehicle";
import "./index.css";

const container = document.getElementById("root");
// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const root = createRoot(container!); // createRoot(container!) if you use TypeScript
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <RecoilRoot>
        <RecoilNexus />
        <MiniDrawer>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/techtree/" element={<App />} />
            <Route path="/data/" element={<Data />} />
            <Route path="/techtree/:vehicleId" element={<Vehicle />} />
            <Route path="/calculator/" element={<Dashboard />} />
          </Routes>
        </MiniDrawer>
      </RecoilRoot>
    </BrowserRouter>
  </React.StrictMode>,
);
