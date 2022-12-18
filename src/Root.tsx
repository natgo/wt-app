import { ComponentType, StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import { RecoilRoot } from "recoil";

import RecoilNexus from "recoil-nexus";

import ThemeProvider from "@/theme/Provider";

import Loading from "./components/Loading";

const container = document.getElementById("root") as HTMLElement;
const root = createRoot(container);

function render(App: ComponentType) {
  root.render(
    <StrictMode>
      <RecoilRoot>
        <RecoilNexus />
        <ThemeProvider>
          <Suspense fallback={<Loading />}>
            <App />
          </Suspense>
        </ThemeProvider>
      </RecoilRoot>
    </StrictMode>,
  );
}

export default render;
