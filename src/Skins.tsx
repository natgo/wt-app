import { useRecoilValue, useSetRecoilState } from "recoil";

import { Tab, Tabs, Tooltip, TooltipProps, styled, tooltipClasses } from "@mui/material";

import { TabPanel, TypeProp, TypeProps } from "./App";
import { QueryVehicle } from "./Vehicle";
import { SkinAtom, SkinCountryTab, SkinTypeTab } from "./atom";
import { SkinsProp } from "./types";

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

function TypeTabs() {
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

function Skin(props: SinkProp): JSX.Element | null {
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
  const postRoot = "https://live.warthunder.com/post/";

  if (group === "ungrouped") {
    return (
      <div className="ungrouped">
        {value[historical]?.[type]?.[vehicleclass]?.ungrouped.map((value) => (
          <BlackTooltip
            key={value.post}
            title={
              <div>
                <div className="intnames">
                  {value.intnames.map((value) => (
                    <div key={value}>{QueryVehicle(value, "intname")?.wikiname}</div>
                  ))}
                </div>
                <div>
                  {value.camo?.map((value) => (
                    <div key={value}>{value[0].toUpperCase() + value.substring(1)}</div>
                  ))}
                </div>
              </div>
            }
            placement="left-start"
          >
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={postRoot + value.post}
              key={value.post}
              className="vehicle"
            >
              <span style={{ backgroundColor: value.type ? "pink" : "auto" }}>
                {value.dislayname}
              </span>
            </a>
          </BlackTooltip>
        ))}
      </div>
    );
  } else {
    const nodes: JSX.Element[] = [];
    for (const property in value[historical]?.[type]?.[vehicleclass]?.grouped) {
      nodes.push(
        <div key={property} className="group">
          <div className="group-text">{property[0].toUpperCase() + property.substring(1)}</div>
          {value[historical]?.[type]?.[vehicleclass]?.grouped[property].map((value) => (
            <BlackTooltip
              key={value.post}
              title={
                <div>
                  <div className="intnames">
                    {value.intnames.map((value) => (
                      <div key={value}>{QueryVehicle(value, "intname")?.wikiname}</div>
                    ))}
                  </div>
                  <div>
                    {value.camo?.map((value) => (
                      <div key={value}>{value[0].toUpperCase() + value.substring(1)}</div>
                    ))}
                  </div>
                </div>
              }
              placement="left-start"
            >
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={postRoot + value.post}
                className="vehicle"
              >
                <span style={{ backgroundColor: value.type ? "pink" : "auto" }}>
                  {value.dislayname}
                </span>
              </a>
            </BlackTooltip>
          ))}
        </div>,
      );
    }
    return <div id="groups">{nodes}</div>;
  }
}

function Historical(props: TypeProp): JSX.Element {
  const { type } = props;
  const value = useRecoilValue(SkinAtom);
  return (
    <div className="skincontainer">
      <div className="skintext">{type} Historical Ground Vehicle skins</div>
      <Skin value={value} historical="historical" type={type} mode={"ground-ungrouped"} />
      <Skin value={value} historical="historical" type={type} mode={"ground-grouped"} />
      <div className="skintext">{type} Historical Aircraft skins</div>
      <Skin value={value} historical="historical" type={type} mode={"air-ungrouped"} />
      <Skin value={value} historical="historical" type={type} mode={"air-grouped"} />
    </div>
  );
}

function Fictional(props: TypeProp): JSX.Element {
  const { type } = props;
  const value = useRecoilValue(SkinAtom);
  return (
    <div className="skincontainer">
      <div className="skintext">{type} Fictional Ground Vehicle skins</div>
      <Skin value={value} historical="fictional" type={type} mode={"ground-ungrouped"} />
      <Skin value={value} historical="fictional" type={type} mode={"ground-grouped"} />
      <div className="skintext">{type} Fictional Aircraft skins</div>
      <Skin value={value} historical="fictional" type={type} mode={"air-ungrouped"} />
      <Skin value={value} historical="fictional" type={type} mode={"air-grouped"} />
    </div>
  );
}

function CountryTabs(props: TypeProps): JSX.Element {
  const { type, index } = props;
  const typeValue = useRecoilValue(SkinTypeTab);
  const countryValue = useRecoilValue(SkinCountryTab);

  return (
    <TabPanel value={countryValue} index={index}>
      <TypeTabs />
      <TabPanel value={typeValue} index={0}>
        <Historical type={type} />
      </TabPanel>
      <TabPanel value={typeValue} index={1}>
        <Fictional type={type} />
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
      </Tabs>

      <CountryTabs type={"USA"} index={0} />
      <CountryTabs type={"Germany"} index={1} />
      <CountryTabs type={"USSR"} index={2} />
      <CountryTabs type={"Great Britain"} index={3} />
      <CountryTabs type={"Japan"} index={4} />
      <CountryTabs type={"China"} index={5} />
      <CountryTabs type={"Italy"} index={6} />
      <CountryTabs type={"France"} index={7} />
      <CountryTabs type={"Sweden"} index={8} />
      <CountryTabs type={"Israel"} index={9} />
    </div>
  );
}
