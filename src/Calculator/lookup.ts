export default function lookup(element: string): string {
  if (element == "Spitfire Mk la") {
    element = "Spitfire Mk Ia";
  }
  if (element[0] == "*") {
    element = element.substring(1, element.length) + " (China)";
  }
  if (element == "Ki-44-1") {
    element = "Ki-44-I";
  }
  if (element == "Ki-44-11") {
    element = "Ki-44-II";
  }
  if (element == "Ki-61-11 Kai") {
    element = "Ki-61-II Kai";
  }
  if (element == "LBf 109 E-7") {
    element = "Bf 109 E-7 (Japan)";
  }
  if (element == "OSpitfire Mk V.") {
    element = "Spitfire Mk Vb/trop (Italy)";
  }
  if (element == "Bf 110 G7") {
    element = "Bf 110 C-7";
  }
  if (element == "B-25)-20") {
    element = "B-25J-20";
  }
  if (element == "SE F4U-1A'") {
    element = "F4U-1A (Japan)";
  }
  if (element == "Ar 234 C3") {
    element = "Ar 234 C-3";
  }
  if (element == "Spithre F Mk 24") {
    element = "Spitfire F Mk 24";
  }
  if (element == "P.400") {
    element = "P-400";
  }
  if (element == "TBD 1") {
    element = "TBD-1";
  }
  if (element == "PBY 5 Catalina") {
    element = "PBY-5 Catalina";
  }
  if (element == "Beaufort Mk Vill") {
    element = "Beaufort Mk VIII";
  }
  return element;
}
