export function typeToNumeric(type: "tank" | "aircraft" | "helicopter") {
  let numeric = 0;
  switch (type) {
    case "aircraft":
      numeric = 0;
      break;
    case "tank":
      numeric = 1;
      break;
    case "helicopter":
      numeric = 2;
      break;
  }
  return numeric;
}
