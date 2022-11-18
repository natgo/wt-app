export function countryToNumeric(country: string): number {
  let numeric = 0;
  switch (country) {
    case "country_usa":
      numeric = 0;
      break;
    case "country_germany":
      numeric = 1;
      break;
    case "country_ussr":
      numeric = 2;
      break;
    case "country_britain":
      numeric = 3;
      break;
    case "country_japan":
      numeric = 4;
      break;
    case "country_china":
      numeric = 5;
      break;
    case "country_italy":
      numeric = 6;
      break;
    case "country_france":
      numeric = 7;
      break;
    case "country_sweden":
      numeric = 8;
      break;
    case "country_israel":
      numeric = 9;
      break;
  }
  return numeric;
}
