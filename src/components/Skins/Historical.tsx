import { useRecoilValue } from "recoil";

import { SkinAtom } from "@/store/atom/atom";
import { HistoricalProp } from "@/types";
import { capitailze } from "@/utils/Capitalize";
import { vehicleCountry } from "@/utils/custom/VehicleCountry";

import { CountrySkin } from "./CountrySkin";

export function Historical(props: HistoricalProp): JSX.Element {
  const { country, historical } = props;
  const value = useRecoilValue(SkinAtom);
  return (
    <div className="skincontainer">
      {value[historical]?.[country]?.ground ? (
        <div className="skintext">
          {vehicleCountry(country)} {capitailze(historical)} Ground Vehicle skins
        </div>
      ) : null}
      <CountrySkin
        value={value}
        historical={historical}
        country={country}
        mode={"ground-ungrouped"}
      />
      <CountrySkin
        value={value}
        historical={historical}
        country={country}
        mode={"ground-grouped"}
      />
      {value[historical]?.[country]?.aircraft ? (
        <div className="skintext">
          {vehicleCountry(country)} {capitailze(historical)} Aircraft skins
        </div>
      ) : null}
      <CountrySkin value={value} historical={historical} country={country} mode={"air-ungrouped"} />
      <CountrySkin value={value} historical={historical} country={country} mode={"air-grouped"} />
    </div>
  );
}
