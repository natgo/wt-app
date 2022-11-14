import { useRecoilValue } from "recoil";

import { CountryPropIndex, TabPanel } from "../Techtree/Techtree";
import { SkinCountryTab, SkinTypeTab } from "../atom";

import { Historical } from "./Historical";
import { SkinTypeTabs } from "./Skins";

export function SkinCountryTabs(props: CountryPropIndex): JSX.Element {
  const { country, index } = props;
  const typeValue = useRecoilValue(SkinTypeTab);
  const countryValue = useRecoilValue(SkinCountryTab);

  return (
    <TabPanel value={countryValue} index={index}>
      <SkinTypeTabs country={country} />
      <TabPanel value={typeValue} index={0}>
        <Historical country={country} historical="historical" />
      </TabPanel>
      <TabPanel value={typeValue} index={1}>
        <Historical country={country} historical="fictional" />
      </TabPanel>
    </TabPanel>
  );
}
