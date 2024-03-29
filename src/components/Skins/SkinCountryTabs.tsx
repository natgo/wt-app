import { useRecoilState, useRecoilValue } from "recoil";

import { Tab } from "@mui/material";

import { countryname } from "@/data/types/final.schema";
import { TabPanel } from "@/pages/Techtree/Techtree";
import { SkinAtom, SkinCountryTab, SkinTypeTab } from "@/store/atom/atom";
import { numericToCountry } from "@/utils/custom/countryToNumeric";

import { Historical } from "./Historical";
import { TypeTabs } from "./SkinTypeTabs";

export function SkinCountryTabs(props: { index: number }): JSX.Element {
  const { index } = props;
  const country = countryname.parse(numericToCountry(index));
  const [typeValue, setTypeValue] = useRecoilState(SkinTypeTab);
  const countryValue = useRecoilValue(SkinCountryTab);
  const skins = useRecoilValue(SkinAtom);

  return (
    <TabPanel value={countryValue} index={index}>
      <TypeTabs value={typeValue} setValue={setTypeValue}>
        <Tab label="Historical" disabled={skins[country]?.historical ? false : true} />
        <Tab label="Fictional" disabled={skins[country]?.fictional ? false : true} />
      </TypeTabs>
      <TabPanel value={typeValue} index={0}>
        <Historical country={country} historical="historical" />
      </TabPanel>
      <TabPanel value={typeValue} index={1}>
        <Historical country={country} historical="fictional" />
      </TabPanel>
    </TabPanel>
  );
}
