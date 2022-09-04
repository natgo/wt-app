import { useRecoilValue } from "recoil";

import { TabPanel, TypePropIndex } from "../Techtree/Techtree";
import { SkinCountryTab, SkinTypeTab } from "../atom";

import { Historical } from "./Historical";
import { SkinTypeTabs } from "./Skins";

export function SkinCountryTabs(props: TypePropIndex): JSX.Element {
  const { type, index } = props;
  const typeValue = useRecoilValue(SkinTypeTab);
  const countryValue = useRecoilValue(SkinCountryTab);

  return (
    <TabPanel value={countryValue} index={index}>
      <SkinTypeTabs type={type} />
      <TabPanel value={typeValue} index={0}>
        <Historical type={type} historical="historical" />
      </TabPanel>
      <TabPanel value={typeValue} index={1}>
        <Historical type={type} historical="fictional" />
      </TabPanel>
    </TabPanel>
  );
}
