import React from "react";
import { createRoot } from "react-dom/client";
import { RecoilRoot } from "recoil";

import RecoilNexus from "recoil-nexus";

import App from "./App";
import "./index.css";

const container = document.getElementById("root");
// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const root = createRoot(container!); // createRoot(container!) if you use TypeScript
root.render(
  <React.StrictMode>
    <RecoilRoot>
      <RecoilNexus />
      <App />
    </RecoilRoot>
  </React.StrictMode>,
);
