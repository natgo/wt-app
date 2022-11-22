import { registerSW } from "virtual:pwa-register";

import welcome from "@/utils/welcome";

// Root contains the main dependencies and providers of the base app
//  - React, ReactDom, RecoilRoot, HelmetProvider, ThemeProvider, MUI-core)
// App contains the main structure of the base app

// These are the two main chunks that are used to render the core structure of the app
// Importing them with Promise.all (by using HTTP/2 multiplexing) we can load them in parallel
// and achieve the best possible performance

Promise.all([import("@/Root"), import("@/App")]).then(([{ default: render }, { default: App }]) => {
  render(App);
});

// welcome message for users in the console
welcome();

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const updateSW = registerSW({
  onRegisterError(error) {
    console.log(error);
  },
});

// ts(1208)
export {};
