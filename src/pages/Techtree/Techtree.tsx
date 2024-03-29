import { useRecoilState, useRecoilValue } from "recoil";

import { Box, Tab, Tabs } from "@mui/material";

import { TypeTabs } from "@/components/Skins/SkinTypeTabs";
import { TechTree } from "@/components/Techtree/Tree";
import { countryname } from "@/data/types/final.schema";
import { CountryTab, SearchName, TypeTab } from "@/store/atom/atom";
import { shopQuery } from "@/store/shop";
import { numericToCountry } from "@/utils/custom/countryToNumeric";

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

function CountryTabs(props: { index: number }): JSX.Element {
  const { index } = props;
  const country = countryname.parse(numericToCountry(index));
  const [typeValue, setTypeValue] = useRecoilState(TypeTab);
  const countryValue = useRecoilValue(CountryTab);
  const shopData = useRecoilValue(shopQuery);

  return (
    <TabPanel value={countryValue} index={index}>
      <TypeTabs value={typeValue} setValue={setTypeValue}>
        <Tab label="Ground Vehicles" />
        <Tab label="Helicopters" />
        <Tab label="Aviation" />
        {shopData[country]?.ship ? <Tab label="Bluewater Fleet" /> : null}
        {shopData[country]?.boat ? <Tab label="Coastal Fleet" /> : null}
      </TypeTabs>
      <TabPanel value={typeValue} index={0}>
        <TechTree country={country} type="army" />
      </TabPanel>
      <TabPanel value={typeValue} index={1}>
        <TechTree country={country} type="helicopters" />
      </TabPanel>
      <TabPanel value={typeValue} index={2}>
        <TechTree country={country} type="aviation" />
      </TabPanel>
      {shopData[country]?.ship ? (
        <TabPanel value={typeValue} index={3}>
          <TechTree country={country} type="ship" />
        </TabPanel>
      ) : null}
      {shopData[country]?.boat ? (
        <TabPanel value={typeValue} index={4}>
          <TechTree country={country} type="boat" />
        </TabPanel>
      ) : null}
    </TabPanel>
  );
}

export default function TreeTech(): JSX.Element {
  const [countryValue, countrySetValue] = useRecoilState(CountryTab);
  const [search, setSearch] = useRecoilState(SearchName);
  const shopData = useRecoilValue(shopQuery);
  const [typeValue, setTypeValue] = useRecoilState(TypeTab);

  const handleCountryChange = (_event: React.SyntheticEvent, newValue: number) => {
    countrySetValue(newValue);
    const countryName = numericToCountry(newValue);
    if (countryName && (typeValue === 3 || typeValue === 4)) {
      if (!shopData[countryName]?.ship) {
        setTypeValue(0);
      } else if (!shopData[countryName]?.boat) {
        setTypeValue(0);
      }
    }
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

      <CountryTabs index={0} />
      <CountryTabs index={1} />
      <CountryTabs index={2} />
      <CountryTabs index={3} />
      <CountryTabs index={4} />
      <CountryTabs index={5} />
      <CountryTabs index={6} />
      <CountryTabs index={7} />
      <CountryTabs index={8} />
      <CountryTabs index={9} />
    </div>
  );
}
