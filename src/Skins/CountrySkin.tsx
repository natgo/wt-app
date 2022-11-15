import { capitailze } from "../utils/Capitalize";

import { ToolTip } from "./ToolTip";
import { SinkProp } from "./types";

export function CountrySkin(props: SinkProp): JSX.Element | null {
  const { country, value, mode, historical } = props;
  let vehicleclass: "ground" | "aircraft" = "aircraft";
  let group: "grouped" | "ungrouped" = "ungrouped";
  switch (mode) {
    case "ground-ungrouped":
      vehicleclass = "ground";
      group = "ungrouped";
      break;
    case "ground-grouped":
      vehicleclass = "ground";
      group = "grouped";
      break;
    case "air-ungrouped":
      vehicleclass = "aircraft";
      group = "ungrouped";
      break;
    case "air-grouped":
      vehicleclass = "aircraft";
      group = "grouped";
      break;
  }

  const mapping = value[historical]?.[country]?.[vehicleclass]?.[group];
  if (mapping === undefined) {
    return null;
  }

  if (group === "ungrouped") {
    return (
      <div className="ungrouped">
        {value[historical]?.[country]?.[vehicleclass]?.ungrouped?.map((value) => (
          <ToolTip value={value} key={value.post} />
        ))}
      </div>
    );
  } else {
    const nodes: JSX.Element[] = [];
    for (const property in value[historical]?.[country]?.[vehicleclass]?.grouped) {
      nodes.push(
        <div key={property} className="group">
          <div className="group-text">{capitailze(property)}</div>
          {value[historical]?.[country]?.[vehicleclass]?.grouped?.[property].map((value) => (
            <ToolTip value={value} key={value.post} />
          ))}
        </div>,
      );
    }
    return <div id="groups">{nodes}</div>;
  }
}
