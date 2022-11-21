import { useRecoilValue } from "recoil";

import { SkinTypeTabs } from "@/pages/Skins/Skins";
import { CountryPropIndex, TabPanel } from "@/pages/Techtree/Techtree";
import { SkinCountryTab, SkinTypeTab } from "@/store/atom/atom";

import { Historical } from "./Historical";

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
