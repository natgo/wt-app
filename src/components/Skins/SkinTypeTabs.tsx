import { SetterOrUpdater } from "recoil";

import { Tabs } from "@mui/material";

interface TypeTabProps {
  children: React.ReactNode;
  value: number;
  setValue: SetterOrUpdater<number>;
}

export function TypeTabs(props: TypeTabProps) {
  const { children, value, setValue } = props;

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Tabs value={value} onChange={handleChange}>
      {children}
    </Tabs>
  );
}
