export function countryToNumeric(country: string): number | undefined {
  let numeric: number | undefined = undefined;
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

export function numericToCountry(numeric: number): string | undefined {
  let country: string | undefined = undefined;

  switch (numeric) {
    case 0:
      country = "country_usa";
      break;
    case 1:
      country = "country_germany";
      break;
    case 2:
      country = "country_ussr";
      break;
    case 3:
      country = "country_britain";
      break;
    case 4:
      country = "country_japan";
      break;
    case 5:
      country = "country_china";
      break;
    case 6:
      country = "country_italy";
      break;
    case 7:
      country = "country_france";
      break;
    case 8:
      country = "country_sweden";
      break;
    case 9:
      country = "country_israel";
      break;
  }

  return country;
}
