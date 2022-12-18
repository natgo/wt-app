import { DefaultValue } from "recoil";

import localforage from "localforage";

export const localForageEffect =
  (key) =>
  ({ setSelf, onSet }) => {
    setSelf(
      localforage.getItem(key).then(
        (savedValue) => (savedValue != null ? JSON.parse(savedValue) : new DefaultValue()), // Abort initialization if no value was stored
      ),
    );

    // Subscribe to state changes and persist them to localForage
    onSet((newValue, _, isReset) => {
      isReset ? localforage.removeItem(key) : localforage.setItem(key, JSON.stringify(newValue));
    });
  };
