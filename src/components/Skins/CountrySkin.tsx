import { SinkProp } from "@/skins.types";
import capitailze from "@/utils/Capitalize";

import { ToolTip } from "./ToolTip";

export function CountrySkin(props: SinkProp): JSX.Element | null {
  const { country, value, mode, historical } = props;
  let vehicleclass: "army" | "aviation" = "aviation";
  let group: "grouped" | "ungrouped" = "ungrouped";
  switch (mode) {
    case "ground-ungrouped":
      vehicleclass = "army";
      group = "ungrouped";
      break;
    case "ground-grouped":
      vehicleclass = "army";
      group = "grouped";
      break;
    case "air-ungrouped":
      vehicleclass = "aviation";
      group = "ungrouped";
      break;
    case "air-grouped":
      vehicleclass = "aviation";
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
