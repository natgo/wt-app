export default function lookup(element: string): string {
  if (element == "Spitfire_Mk_la") {
    element = "Spitfire_Mk_Ia";
  }
  if (element[0] == "*") {
    element = element.substring(1, element.length) + "_(China)";
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
  if (element == "LBf_109_E-7") {
    element = "Bf_109_E-7_(Japan)";
  }
  if (element == "OSpitfire_Mk_V.") {
    element = "Spitfire_Mk_Vb/trop_(Italy)";
  }
  if (element == "Bf_110_G7") {
    element = "Bf_110_C-7";
  }
  if (element == "B-25)-20") {
    element = "B-25J-20";
  }
  if (element == "SE_F4U-1A'") {
    element = "F4U-1A_(Japan)";
  }
  if (element == "Ar_234_C3") {
    element = "Ar_234_C-3";
  }
  if (element == "Spithre_F_Mk_24") {
    element = "Spitfire_F_Mk_24";
  }
  if (element == "P.400") {
    element = "P-400";
  }
  if (element == "TBD_1") {
    element = "TBD-1";
  }
  if (element == "PBY_5_Catalina") {
    element = "PBY-5_Catalina";
  }
  if (element == "Beaufort_Mk_Vill") {
    element = "Beaufort_Mk_VIII";
  }
  return element;
}
