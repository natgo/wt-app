/* eslint-disable @typescript-eslint/no-explicit-any */
import { AtomEffect, DefaultValue } from "recoil";

import localforage from "localforage";

export const localForageEffect =
  (key: string): AtomEffect<any> =>
  ({ setSelf, onSet }) => {
    setSelf(
      localforage.getItem(key).then(
        (savedValue) =>
          typeof savedValue === "string" ? JSON.parse(savedValue) : new DefaultValue(), // Abort initialization if no value was stored
      ),
    );

    // Subscribe to state changes and persist them to localForage
    onSet((newValue, _, isReset) => {
      isReset ? localforage.removeItem(key) : localforage.setItem(key, JSON.stringify(newValue));
    });
  };
