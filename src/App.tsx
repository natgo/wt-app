import { useRecoilValue, useSetRecoilState } from "recoil";

import { Box, Tab, Tabs } from "@mui/material";

import $ from "jquery";

import * as tt from "./tt";
import "./App2.css";
import "./App3.css";
import { CountryTab, TypeTab } from "./atom";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps): JSX.Element {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 1 }}>{children}</Box>}
    </div>
  );
}
function TypeTabs() {
  const value = useRecoilValue(TypeTab);
  const setValue = useSetRecoilState(TypeTab);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Tabs value={value} onChange={handleChange}>
      <Tab label="Aviation" />
      <Tab label="Ground Vehicles" />
      <Tab label="Helicopters" />
    </Tabs>
  );
}

interface TypeProp {
  type:
    | "USA"
    | "Germany"
    | "USSR"
    | "Great Britain"
    | "Japan"
    | "China"
    | "Italy"
    | "France"
    | "Sweden"
    | "Israel";
}
interface TypeProps extends TypeProp {
  index: number;
}

function folder(): void {
  $(function () {
    $(document).on("click", "body", function () {
      if (event.target.className != "tree-group") $(".tree-group-collapse").slideUp();
    });
  });
}
folder();

function Aircraft(props: TypeProp): JSX.Element {
  const { type } = props;
  switch (type) {
    case "USA":
      return <tt.USAAircraft />;
    case "Germany":
      return <tt.GermanyAircraft />;
    case "USSR":
      return <tt.USSRAircraft />;
    case "Great Britain":
      return <tt.BritainAircraft />;
    case "Japan":
      return <tt.JapanAircraft />;
    case "China":
      return <tt.ChinaAircraft />;
    case "Italy":
      return <tt.ItalyAircraft />;
    case "France":
      return <tt.FranceAircraft />;
    case "Sweden":
      return <tt.SwedenAircraft />;
    case "Israel":
      return <tt.IsraelAircraft />;
  }
}

function Ground(props: TypeProp): JSX.Element {
  const { type } = props;
  switch (type) {
    case "USA":
      return <tt.USAGround />;
    case "Germany":
      return <tt.GermanyGround />;
    case "USSR":
      return <tt.USSRGround />;
    case "Great Britain":
      return <tt.BritainGround />;
    case "Japan":
      return <tt.JapanGround />;
    case "China":
      return <tt.ChinaGround />;
    case "Italy":
      return <tt.ItalyGround />;
    case "France":
      return <tt.FranceGround />;
    case "Sweden":
      return <tt.SwedenGround />;
    case "Israel":
      return <tt.IsraelGround />;
  }
}

function Helicopters(props: TypeProp): JSX.Element {
  const { type } = props;
  switch (type) {
    case "USA":
      return <tt.USAHeli />;
    case "Germany":
      return <tt.GermanyHeli />;
    case "USSR":
      return <tt.USSRHeli />;
    case "Great Britain":
      return <tt.BritainHeli />;
    case "Japan":
      return <tt.JapanHeli />;
    case "China":
      return <tt.ChinaHeli />;
    case "Italy":
      return <tt.ItalyHeli />;
    case "France":
      return <tt.FranceHeli />;
    case "Sweden":
      return <tt.SwedenHeli />;
    case "Israel":
      return <tt.IsraelHeli />;
  }
}
//@const light_fighterColor:  #ffd2b2; @const medium_fighterColor: #ffac6f; @const heavy_fighterColor:  #ff8932; @const naval_fighterColor:  #ffaba1; @const jet_fighterColor:    #ffcc66; @const light_bomberColor:   #bfd4ff; @const medium_bomberColor:  #a3b1ff; @const heavy_bomberColor:   #938aff; @const naval_bomberColor:   #89b7ff; @const jet_bomberColor:     #c6a0ff; @const dive_bomberColor:    #a6a6d0; @const common_assaultColor: #bde9b5; @const strike_fighterColor: #bde9b5; @const attack_helicopterColor:  #f2f266; @const utility_helicopterColor: #9bf266; @const light_tankColor:     #ffeeee; @const medium_tankColor:    #ffaaaa; @const heavy_tankColor:     #ff6666; @const tank_destroyerColor: #bde9b5; @const spaaColor:           #c6a0ff;
function CountryTabs(props: TypeProps): JSX.Element {
  const { type, index } = props;
  const typeValue = useRecoilValue(TypeTab);
  const countryValue = useRecoilValue(CountryTab);

  return (
    <TabPanel value={countryValue} index={index}>
      <TypeTabs />
      <TabPanel value={typeValue} index={0}>
        <Aircraft type={type} />
      </TabPanel>
      <TabPanel value={typeValue} index={1}>
        <Ground type={type} />
      </TabPanel>
      <TabPanel value={typeValue} index={2}>
        <Helicopters type={type} />
      </TabPanel>
    </TabPanel>
  );
}

export default function App(): JSX.Element {
  const countryValue = useRecoilValue(CountryTab);
  const countrySetValue = useSetRecoilState(CountryTab);

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
        <Tab label="China" />
        <Tab label="Italy" />
        <Tab label="France" />
        <Tab label="Sweden" />
        <Tab label="Israel" />
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
