import { useRecoilValue, useSetRecoilState } from "recoil";

import { Tab, Tabs, Tooltip, TooltipProps, styled, tooltipClasses } from "@mui/material";

import { OtherTab } from "@/components/Skins/OtherTab";
import { SkinCountryTabs } from "@/components/Skins/SkinCountryTabs";
import { SkinAtom, SkinCountryTab, SkinTypeTab } from "@/store/atom/atom";
import { CountryProp } from "@/types";

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

export function SkinTypeTabs(props: CountryProp) {
  const { country } = props;
  const value = useRecoilValue(SkinTypeTab);
  const setValue = useSetRecoilState(SkinTypeTab);
  const skins = useRecoilValue(SkinAtom);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  if (skins.historical[country] === undefined) {
    setValue(1);
  } else if (skins.fictional[country] === undefined) {
    setValue(0);
  }

  return (
    <Tabs value={value} onChange={handleChange}>
      <Tab label="Historical" disabled={skins.historical[country] ? false : true} />
      <Tab label="Fictional" disabled={skins.fictional[country] ? false : true} />
    </Tabs>
  );
}

export default function Skins(): JSX.Element {
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
        <Tab label="China" disabled />
        <Tab label="Italy" />
        <Tab label="France" />
        <Tab label="Sweden" />
        <Tab label="Israel" disabled />
        <Tab label="Other" />
      </Tabs>

      <SkinCountryTabs country={"country_usa"} index={0} />
      <SkinCountryTabs country={"country_germany"} index={1} />
      <SkinCountryTabs country={"country_ussr"} index={2} />
      <SkinCountryTabs country={"country_britain"} index={3} />
      <SkinCountryTabs country={"country_japan"} index={4} />
      <SkinCountryTabs country={"country_china"} index={5} />
      <SkinCountryTabs country={"country_italy"} index={6} />
      <SkinCountryTabs country={"country_france"} index={7} />
      <SkinCountryTabs country={"country_sweden"} index={8} />
      <SkinCountryTabs country={"country_israel"} index={9} />
      <OtherTab />
    </div>
  );
}
