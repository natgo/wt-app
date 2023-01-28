export function typeToNumeric(type: "tank" | "aircraft" | "helicopter") {
  let numeric = 0;
  switch (type) {
    case "tank":
      numeric = 0;
      break;
    case "helicopter":
      numeric = 1;
      break;
    case "aircraft":
      numeric = 2;
      break;
  }
  return numeric;
}
