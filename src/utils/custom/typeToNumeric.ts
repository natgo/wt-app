export function typeToNumeric(type: "army" | "aviation" | "helicopters" | "ship" | "boat"): number {
  let numeric = 0;
  switch (type) {
    case "army":
      numeric = 0;
      break;
    case "helicopters":
      numeric = 1;
      break;
    case "aviation":
      numeric = 2;
      break;
    case "ship":
      numeric = 3;
      break;
    case "boat":
      numeric = 4;
      break;
  }
  return numeric;
}
