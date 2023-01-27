import localforage from "localforage";

export function reloadApp() {
  return window.location.reload();
}

export function resetApp() {
  localStorage.clear();
  localforage.clear();
  window.location.pathname = "/wt/";
}
