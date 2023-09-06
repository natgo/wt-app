/**
 * Converts vehicle country to human readable format.
 * @export
 * @param {string} country - The country to parse.
 * @returns  {string} Human readable country name
 */
export function vehicleCountry(country: string): string {
  const countryMappings: Record<string, string> = {
    country_usa: "USA",
    country_germany: "Germany",
    country_ussr: "USSR",
    country_britain: "Britain",
    country_japan: "Japan",
    country_china: "China",
    country_italy: "Italy",
    country_france: "France",
    country_sweden: "Sweden",
    country_israel: "Israel",

    country_australia: "Australia",
    country_austria: "Austria",
    country_belgium: "Belgium",
    country_bulgaria: "Bulgaria",
    country_canada: "Canada",
    country_finland: "Finland",
    country_greece: "Greece",
    country_greece_modern: "Greece",
    country_hungary: "Hungary",
    country_iraq: "Iraq",
    country_netherlands: "Netherlands",
    country_new_zealand: "New Zealand",
    country_norway: "Norway",
    country_poland: "Poland",
    country_romania: "Romania",
    country_south_africa: "South Africa",
    country_thailand: "Thailand",
    country_yugoslavia: "Yugoslavia",
    country_korea: "North Korea",
    country_usa_modern: "USA",
    country_germany_modern: "Germany",
    country_japan_modern: "Japan",
    country_russia: "Russia",
    country_italy_kingdom: "Kingdom of Italy",
    country_portugal: "Portugal",
    country_syria: "Syria",
    country_canada_modern: "Canada",
    country_argentina: "Argentina",
    country_south_africa_modern: "South Africa",
    country_vietnam: "Vietnam",
    country_turkey: "Turkey",
    country_cuba: "Cuba",
    country_philippines: "Philippines",
    country_czech: "Czech Republic",
    country_gdr: "GDR",
    country_north_korea: "North Korea",
    country_bangladesh: "Bangladesh",
    country_republic_china: "Republic China",
    country_pakistan: "Pakistan",
    country_ireland: "Ireland",
    country_slovakia: "Slovakia",
    country_saudi_arabia: "Saudi Arabia",
    country_spain: "Spain",
    country_jordan: "Jordan",
    country_britain_empire_navy: "British Empire",
    country_russia_empire_navy: "Russian Empire",
    country_germany_empire_navy: "German Empire",
    country_switzerland: "Switzerland",
    country_india: "India",
    country_kazakhstan: "Kazakhstan",
  };

  const styledCountry = countryMappings[country];

  if (styledCountry) {
    return styledCountry;
  } else {
    console.error(`not found country: ${country}`);
    return country;
  }
}
