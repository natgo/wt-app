export function typeToNumeric(type: "ground" | "aircraft" | "helicopter"): number {
  let numeric = 0;
  switch (type) {
    case "ground":
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
