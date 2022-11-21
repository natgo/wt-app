import { useRecoilState, useRecoilValue } from "recoil";

import { Box, Tab, Tabs } from "@mui/material";

import { TechTree } from "@/components/Techtree/Tree";
import { CountryTab, SearchName, TypeTab } from "@/store/atom/atom";
import { CountryProp } from "@/types";

import "./App2.css";
import "./App.css";

export interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

export function TabPanel(props: TabPanelProps): JSX.Element {
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
  const [value, setValue] = useRecoilState(TypeTab);

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

export interface CountryPropIndex extends CountryProp {
  index: number;
}

function Aircraft(props: CountryProp): JSX.Element {
  const { country } = props;

  return <TechTree country={country} type="aviation" />;
}

function Ground(props: CountryProp): JSX.Element {
  const { country } = props;

  return <TechTree country={country} type="army" />;
}

function Helicopters(props: CountryProp): JSX.Element {
  const { country } = props;

  return <TechTree country={country} type="helicopters" />;
}

function CountryTabs(props: CountryPropIndex): JSX.Element {
  const { country, index } = props;
  const typeValue = useRecoilValue(TypeTab);
  const countryValue = useRecoilValue(CountryTab);

  return (
    <TabPanel value={countryValue} index={index}>
      <TypeTabs />
      <TabPanel value={typeValue} index={0}>
        <Aircraft country={country} />
      </TabPanel>
      <TabPanel value={typeValue} index={1}>
        <Ground country={country} />
      </TabPanel>
      <TabPanel value={typeValue} index={2}>
        <Helicopters country={country} />
      </TabPanel>
    </TabPanel>
  );
}

export default function TreeTech(): JSX.Element {
  const [countryValue, countrySetValue] = useRecoilState(CountryTab);
  const [search, setSearch] = useRecoilState(SearchName);

  const handleCountryChange = (event: React.SyntheticEvent, newValue: number) => {
    countrySetValue(newValue);
  };
  return (
    <div
      className="app"
      onClick={() => {
        if (search) {
          setSearch(undefined);
        }
      }}
    >
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

      <CountryTabs country={"country_usa"} index={0} />
      <CountryTabs country={"country_germany"} index={1} />
      <CountryTabs country={"country_ussr"} index={2} />
      <CountryTabs country={"country_britain"} index={3} />
      <CountryTabs country={"country_japan"} index={4} />
      <CountryTabs country={"country_china"} index={5} />
      <CountryTabs country={"country_italy"} index={6} />
      <CountryTabs country={"country_france"} index={7} />
      <CountryTabs country={"country_sweden"} index={8} />
      <CountryTabs country={"country_israel"} index={9} />
    </div>
  );
}
