import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { RecoilRoot } from "recoil";

import RecoilNexus from "recoil-nexus";

import App from "./App";
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
        <Routes>
          <Route path="/techtree/" element={<App />}></Route>
          <Route path="/techtree/:vehicleId" element={<Vehicle />}></Route>
        </Routes>
      </RecoilRoot>
    </BrowserRouter>
  </React.StrictMode>,
);
