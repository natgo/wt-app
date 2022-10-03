import { Ungrouped } from "../types";
import { capitailze } from "../utils/Capitalize";
import { queryVehicle } from "../utils/QueryVehicle";

export function ToolTipText(value: Ungrouped): JSX.Element {
  return (
    <div>
      <div className="intnames">
        {value.intnames.map((value) => (
          <div key={value}>{queryVehicle(value, "intname")?.wikiname}</div>
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
