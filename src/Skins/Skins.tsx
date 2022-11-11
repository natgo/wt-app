import { useRecoilValue, useSetRecoilState } from "recoil";

import { Tab, Tabs, Tooltip, TooltipProps, styled, tooltipClasses } from "@mui/material";

import { SkinAtom, SkinCountryTab, SkinTypeTab } from "../atom";
import { CountryProp } from "../types";

import { OtherTab } from "./OtherTab";
import { SkinCountryTabs } from "./SkinCountryTabs";

export const BlackTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} arrow classes={{ popper: className }} placement="left-start" />
))(({ theme }) => ({
  [`& .${tooltipClasses.arrow}`]: {
    color: theme.palette.common.black,
  },
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.common.black,
  },
}));

export function SkinTypeTabs(props: CountryProp) {
  const { type } = props;
  const value = useRecoilValue(SkinTypeTab);
  const setValue = useSetRecoilState(SkinTypeTab);
  const skins = useRecoilValue(SkinAtom);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  if (skins.historical[type] === undefined) {
    setValue(1);
  } else if (skins.fictional[type] === undefined) {
    setValue(0);
  }

  return (
    <Tabs value={value} onChange={handleChange}>
      <Tab label="Historical" disabled={skins.historical[type] ? false : true} />
      <Tab label="Fictional" disabled={skins.fictional[type] ? false : true} />
    </Tabs>
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
        <Tab label="China" disabled />
        <Tab label="Italy" />
        <Tab label="France" />
        <Tab label="Sweden" />
        <Tab label="Israel" disabled />
        <Tab label="Other" />
      </Tabs>

      <SkinCountryTabs type={"USA"} index={0} />
      <SkinCountryTabs type={"Germany"} index={1} />
      <SkinCountryTabs type={"USSR"} index={2} />
      <SkinCountryTabs type={"Great Britain"} index={3} />
      <SkinCountryTabs type={"Japan"} index={4} />
      <SkinCountryTabs type={"China"} index={5} />
      <SkinCountryTabs type={"Italy"} index={6} />
      <SkinCountryTabs type={"France"} index={7} />
      <SkinCountryTabs type={"Sweden"} index={8} />
      <SkinCountryTabs type={"Israel"} index={9} />
      <OtherTab />
    </div>
  );
}
