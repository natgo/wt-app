import { Tab, Tabs } from "@mui/material";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { TabPanel, TypeProp, TypeProps } from "./App";
import { SkinTypeTab, SkinCountryTab, SkinAtom } from "./atom";

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

function Historical(props: TypeProp): JSX.Element {
  const { type } = props;
  const value = useRecoilValue(SkinAtom);
  return(
    <div>
      {type} Historical skins
      <div>
        {value.historical.Sweden.ground.ungrouped.map((value)=> (
          <div key={value.post}>
            {value.dislayname}
          </div>
        ))}
      </div>
    </div>
  );
}

function Fictional(props: TypeProp): JSX.Element {
  const { type } = props;
  return(
    <div>
      {type} Fictional skins
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
