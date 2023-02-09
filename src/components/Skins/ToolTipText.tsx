import { useRecoilValue } from "recoil";

import { Ungrouped } from "@/skins.types";
import { finalQuery } from "@/store/final";
import capitailze from "@/utils/Capitalize";
import { queryVehicleIntname } from "@/utils/custom/queryVehicle";

export function ToolTipText(value: Ungrouped): JSX.Element {
  const final = useRecoilValue(finalQuery);
  return (
    <div>
      <div className="intnames">
        {value.intnames.map((value) => (
          <div key={value}>{queryVehicleIntname(value, final)?.wikiname}</div>
        ))}
      </div>
      <div>
        {value.camo?.map((value) => (
          <div key={value}>{capitailze(value)}</div>
        ))}
      </div>
    </div>
  );
}
