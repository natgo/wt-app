export function vehicleCountryFlag(country: string): string {
  switch (country) {
    case "country_czech":
      return "lang_czech";
    case "country_republic_china":
      return "flag_republic_china";
    case "country_spain":
      return "lang_spain";
    case "country_invisible":
      return "flag_invisible";
    default:
      return country;
  }
}
