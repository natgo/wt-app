import { useRecoilValue } from "recoil";

import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from "@mui/material";

import useDataMode from "@/store/datasource";
import { finalDevState, finalLiveState } from "@/store/final";

export function DataMode(): JSX.Element {
  const [dataMode, dataModeActions] = useDataMode();
  const finalLive = useRecoilValue(finalLiveState);
  const finalDev = useRecoilValue(finalDevState);

  const handleChange = (event: SelectChangeEvent) => {
    if (event.target.value === "live" || event.target.value === "dev") {
      dataModeActions.setMode(event.target.value);
    }
  };

  return (
    <FormControl size="small">
      <InputLabel id="demo-simple-select-label">Server</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={dataMode}
        label="Age"
        onChange={handleChange}
      >
        <MenuItem value="live">Live v{finalLive.version}</MenuItem>
        <MenuItem value="dev">Dev v{finalDev.version}</MenuItem>
      </Select>
    </FormControl>
  );
}
