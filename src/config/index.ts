import isMobile from "@/utils/is-mobile";

import type { Notifications } from "./types";

const title = "War Thuner App";

const repository = "https://github.com/natgo/wt-app";

const messages = {
  app: {
    crash: {
      title: "Oooops... Sorry, I guess, something went wrong. You can:",
      options: {
        reload: "Click here to reload the application",
        reset: "Click here to clear data and reset application",
      },
    },
  },
  loader: {
    fail: "Hmmmmm, there is something wrong with this component loading process... Maybe trying later would be the best idea",
  },
  images: {
    failed: "something went wrong during image loading :(",
  },
  404: "Hey bro? What are you looking for?",
};

const notifications: Notifications = {
  options: {
    autoHideDuration: 6000,
  },
  maxSnack: isMobile ? 3 : 4,
};

const loader = {
  // no more blinking in your app
  delay: 300, // if your asynchronous process is finished during 300 milliseconds you will not see the loader at all
  minimumLoading: 700, // but if it appears, it will stay for at least 700 milliseconds
};

const giphy404 = "https://giphy.com/embed/xTiN0L7EW5trfOvEk0";

export { loader, notifications, messages, repository, title, giphy404 };
