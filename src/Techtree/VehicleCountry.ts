/**
 * Converts vehicle country to human readable format.
 * @export
 * @param {string} country - The country to parse.
 * @returns  {string} Human readable country name
 */
export function vehicleCountry(country: string): string {
  let styled_country = "";
  switch (country) {
    case "country_usa":
      styled_country = "USA";
      break;
    case "country_germany":
      styled_country = "Germany";
      break;
    case "country_ussr":
      styled_country = "USSR";
      break;
    case "country_britain":
      styled_country = "Britain";
      break;
    case "country_japan":
      styled_country = "Japan";
      break;
    case "country_china":
      styled_country = "China";
      break;
    case "country_italy":
      styled_country = "Italy";
      break;
    case "country_france":
      styled_country = "France";
      break;
    case "country_sweden":
      styled_country = "Sweden";
      break;
    case "country_israel":
      styled_country = "Israel";
      break;
  }

  return styled_country;
}
