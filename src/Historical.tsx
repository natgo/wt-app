import { useRecoilValue } from "recoil";

import { TypeProp } from "./App";
import { CountrySkin } from "./Skins";
import { SkinAtom } from "./atom";
import { capitailze } from "./utils/Capitalize";

interface HistoricalProp extends TypeProp {
  historical: "historical" | "fictional";
}

export function Historical(props: HistoricalProp): JSX.Element {
  const { type, historical } = props;
  const value = useRecoilValue(SkinAtom);
  return (
    <div className="skincontainer">
      {value[historical]?.[type]?.ground ? (
        <div className="skintext">
          {type} {capitailze(historical)} Ground Vehicle skins
        </div>
      ) : null}
      <CountrySkin value={value} historical={historical} type={type} mode={"ground-ungrouped"} />
      <CountrySkin value={value} historical={historical} type={type} mode={"ground-grouped"} />
      {value[historical]?.[type]?.aircraft ? (
        <div className="skintext">
          {type} {capitailze(historical)} Aircraft skins
        </div>
      ) : null}
      <CountrySkin value={value} historical={historical} type={type} mode={"air-ungrouped"} />
      <CountrySkin value={value} historical={historical} type={type} mode={"air-grouped"} />
    </div>
  );
}
