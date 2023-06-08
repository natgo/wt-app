import { useRecoilValue, useSetRecoilState } from "recoil";

import { Tab, Tabs, Tooltip, TooltipProps, styled, tooltipClasses } from "@mui/material";

import { OtherTab } from "@/components/Skins/OtherTab";
import { SkinCountryTabs } from "@/components/Skins/SkinCountryTabs";
import { countryname } from "@/data/types/final.schema";
import { SkinAtom, SkinCountryTab, SkinTypeTab } from "@/store/atom/atom";
import { numericToCountry } from "@/utils/custom/countryToNumeric";

export const BlackTooltip = styled(({ className, placement, ...props }: TooltipProps) => (
  <Tooltip {...props} arrow classes={{ popper: className }} placement={placement} />
))(({ theme }) => ({
  [`& .${tooltipClasses.arrow}`]: {
    color: theme.palette.common.black,
  },
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.common.black,
  },
}));

export default function Skins(): JSX.Element {
  const countryValue = useRecoilValue(SkinCountryTab);
  const countrySetValue = useSetRecoilState(SkinCountryTab);
  const skins = useRecoilValue(SkinAtom);
  const setTypeValue = useSetRecoilState(SkinTypeTab);

  const handleCountryChange = (_event: React.SyntheticEvent, newValue: number) => {
    countrySetValue(newValue);

    const countryName = numericToCountry(newValue);
    if (countryName) {
      if (skins[countryname.parse(countryName)]?.historical === undefined) {
        setTypeValue(1);
      } else if (skins[countryname.parse(countryName)]?.fictional === undefined) {
        setTypeValue(0);
      }
    }
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
        <Tab label="Other" />
      </Tabs>

      <SkinCountryTabs index={0} />
      <SkinCountryTabs index={1} />
      <SkinCountryTabs index={2} />
      <SkinCountryTabs index={3} />
      <SkinCountryTabs index={4} />
      <SkinCountryTabs index={5} />
      <SkinCountryTabs index={6} />
      <SkinCountryTabs index={7} />
      <SkinCountryTabs index={8} />
      <SkinCountryTabs index={9} />
      <OtherTab />
    </div>
  );
}
