import { useRecoilValue, useSetRecoilState } from "recoil";

import { Tab, Tabs, Tooltip, TooltipProps, styled, tooltipClasses } from "@mui/material";

import { TabPanel, TypeProp, TypeProps } from "./App";
import { Historical } from "./Historical";
import { OtherTab } from "./OtherTab";
import { QueryVehicle } from "./Vehicle";
import { SkinCountryTab, SkinTypeTab } from "./atom";
import { SkinsProp, Ungrouped } from "./types";
import { capitailze } from "./utils/Capitalize";

const BlackTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} arrow classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.arrow}`]: {
    color: theme.palette.common.black,
  },
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.common.black,
  },
}));

function SkinTypeTabs() {
  const value = useRecoilValue(SkinTypeTab);
  const setValue = useSetRecoilState(SkinTypeTab);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Tabs value={value} onChange={handleChange}>
      <Tab label="Historical" />
      <Tab label="Fictional" />
    </Tabs>
  );
}

interface SinkProp extends TypeProp {
  value: SkinsProp;
  mode: "ground-ungrouped" | "ground-grouped" | "air-ungrouped" | "air-grouped";
  historical: "historical" | "fictional";
}

function ToolTipText(value: Ungrouped) {
  return (
    <div>
      <div className="intnames">
        {value.intnames.map((value) => (
          <div key={value}>{QueryVehicle(value, "intname")?.wikiname}</div>
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

interface ToolTipProp {
  value: Ungrouped;
}

function ToolTip(props: ToolTipProp): JSX.Element {
  const { value } = props;

  return (
    <BlackTooltip title={ToolTipText(value)} placement="left-start">
      <a target="_blank" rel="noopener noreferrer" href={value.repack? "https://natgo.xyz/files/wt/" + value.post : "https://live.warthunder.com/post/" + value.post} className="vehicle">
        <span style={{ backgroundColor: value.type ? "pink" : "auto" }}>{value.dislayname}</span>
      </a>
    </BlackTooltip>
  );
}

export function CountrySkin(props: SinkProp): JSX.Element | null {
  const { type, value, mode, historical } = props;
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

  const mapping = value[historical]?.[type]?.[vehicleclass]?.[group];
  if (mapping === undefined) {
    return null;
  }

  if (group === "ungrouped") {
    return (
      <div className="ungrouped">
        {value[historical]?.[type]?.[vehicleclass]?.ungrouped.map((value) => (
          <ToolTip value={value} key={value.post} />
        ))}
      </div>
    );
  } else {
    const nodes: JSX.Element[] = [];
    for (const property in value[historical]?.[type]?.[vehicleclass]?.grouped) {
      nodes.push(
        <div key={property} className="group">
          <div className="group-text">{capitailze(property)}</div>
          {value[historical]?.[type]?.[vehicleclass]?.grouped[property].map((value) => (
            <ToolTip value={value} key={value.post} />
          ))}
        </div>,
      );
    }
    return <div id="groups">{nodes}</div>;
  }
}

function SkinCountryTabs(props: TypeProps): JSX.Element {
  const { type, index } = props;
  const typeValue = useRecoilValue(SkinTypeTab);
  const countryValue = useRecoilValue(SkinCountryTab);

  return (
    <TabPanel value={countryValue} index={index}>
      <SkinTypeTabs />
      <TabPanel value={typeValue} index={0}>
        <Historical type={type} historical="historical" />
      </TabPanel>
      <TabPanel value={typeValue} index={1}>
        <Historical type={type} historical="fictional" />
      </TabPanel>
    </TabPanel>
  );
}

export function Skins(): JSX.Element {
  const countryValue = useRecoilValue(SkinCountryTab);
  const countrySetValue = useSetRecoilState(SkinCountryTab);

  const handleCountryChange = (event: React.SyntheticEvent, newValue: number) => {
    countrySetValue(newValue);
  };
  return (
    <div className="app">
      <Tabs
        value={countryValue}
        onChange={handleCountryChange}
        variant="scrollable"
        scrollButtons="auto"
      >
        <Tab label="USA" />
        <Tab label="Germany" />
        <Tab label="USSR" />
        <Tab label="Great Britain" />
        <Tab label="Japan" />
        <Tab label="China" disabled />
        <Tab label="Italy" />
        <Tab label="France" />
        <Tab label="Sweden" />
        <Tab label="Israel" disabled />
        <Tab label="Other" />
      </Tabs>

      <SkinCountryTabs type={"USA"} index={0} />
      <SkinCountryTabs type={"Germany"} index={1} />
      <SkinCountryTabs type={"USSR"} index={2} />
      <SkinCountryTabs type={"Great Britain"} index={3} />
      <SkinCountryTabs type={"Japan"} index={4} />
      <SkinCountryTabs type={"China"} index={5} />
      <SkinCountryTabs type={"Italy"} index={6} />
      <SkinCountryTabs type={"France"} index={7} />
      <SkinCountryTabs type={"Sweden"} index={8} />
      <SkinCountryTabs type={"Israel"} index={9} />
      <OtherTab />
    </div>
  );
}
