import { Tab, Tabs } from "@mui/material";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { TabPanel, TypeProp, TypeProps } from "./App";
import { SkinTypeTab, SkinCountryTab } from "./atom";
import * as skins from "./skins";
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
  switch (type) {
    case "USA":
      return <skins.USAHistorical />;
    case "Germany":
      return <skins.GermanyHistorical />;
    case "USSR":
      return <skins.USSRHistorical />;
    case "Great Britain":
      return <skins.BritainHistorical />;
    case "Japan":
      return <skins.JapanHistorical />;
    case "China":
      return <skins.ChinaHistorical />;
    case "Italy":
      return <skins.ItalyHistorical />;
    case "France":
      return <skins.FranceHistorical />;
    case "Sweden":
      return <skins.SwedenHistorical />;
    case "Israel":
      return <skins.IsraelHistorical />;
  }
}

function Fictional(props: TypeProp): JSX.Element {
  const { type } = props;
  switch (type) {
    case "USA":
      return <skins.USAFictional />;
    case "Germany":
      return <skins.GermanyFictional />;
    case "USSR":
      return <skins.USSRFictional />;
    case "Great Britain":
      return <skins.BritainFictional />;
    case "Japan":
      return <skins.JapanFictional />;
    case "China":
      return <skins.ChinaFictional />;
    case "Italy":
      return <skins.ItalyFictional />;
    case "France":
      return <skins.FranceFictional />;
    case "Sweden":
      return <skins.SwedenFictional />;
    case "Israel":
      return <skins.IsraelFictional />;
  }
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
  return <div>Kotisivu</div>;
}
