export function typeToNumeric(
  type: "ground" | "aircraft" | "helicopter" | "ship" | "boat",
): number {
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
    case "ship":
      numeric = 3;
      break;
    case "boat":
      numeric = 4;
      break;
  }
  return numeric;
}
