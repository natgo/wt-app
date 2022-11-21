import { ComponentType, StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RecoilRoot } from "recoil";

import RecoilNexus from "recoil-nexus";

import ThemeProvider from "@/theme/Provider";

const container = document.getElementById("root") as HTMLElement;
const root = createRoot(container);

function render(App: ComponentType) {
  root.render(
    <StrictMode>
      <RecoilRoot>
        <RecoilNexus />
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </RecoilRoot>
    </StrictMode>,
  );
}

export default render;
