import { useState } from "react";
import { useRecoilState } from "recoil";

import { FilterAlt } from "@mui/icons-material";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import {
  Autocomplete,
  Button,
  Checkbox,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  Switch,
  TextField,
} from "@mui/material";

import { FilterAtom } from "../atom";
import { vehicleType } from "../utils/VehicleType";
import { featureToDisplay } from "../utils/feature";

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

export function Filters(): JSX.Element {
  const [open, setOpen] = useState(false);
  const [checked, setChecked] = useRecoilState(FilterAtom);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleWikiChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked({ ...checked, hide_wiki: event.target.checked });
  };
  const handleIngameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked({ ...checked, hide_ingame: event.target.checked });
  };
  const handleSkinsChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked({ ...checked, show_skins: event.target.checked });
  };

  const classes = [
    "type_light_tank",
    "type_medium_tank",
    "type_heavy_tank",
    "type_tank_destroyer",
    "type_spaa",
  ];
  const features = [
    "can_float",
    "hydro_suspension",
    "has_synchro",
    "has_neutral",
    "has_dozer",
    "has_ess",
    "has_smoke",
    "has_lws",
    "has_era",
    "has_composite",
    "has_laser_range",
    "has_range",
  ];

  return (
    <>
      <FilterAlt onClick={handleClickOpen} />
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{"Filters?"}</DialogTitle>
        <DialogContent>
          <FormControl component="fieldset" variant="standard">
            <FormLabel component="legend">General</FormLabel>
            <FormGroup>
              <FormControlLabel
                control={<Switch checked={checked.hide_wiki} onChange={handleWikiChange} />}
                label="Hide vehicles not in wiki"
                labelPlacement="start"
              />
              <FormControlLabel
                control={<Switch checked={checked.hide_ingame} onChange={handleIngameChange} />}
                label="Hide vehicles not visible ingame"
                labelPlacement="start"
              />
              <FormControlLabel
                control={<Switch checked={checked.show_skins} onChange={handleSkinsChange} />}
                label="Show only vehicles with skins"
                labelPlacement="start"
              />
            </FormGroup>
          </FormControl>
          <FormControl component="fieldset" variant="standard">
            <FormLabel component="legend">Ground vehicles</FormLabel>
            <FormGroup>
              <FormControlLabel
                control={
                  <Autocomplete
                    multiple
                    value={checked.show_class}
                    onChange={(event, newValue): void => {
                      setChecked({ ...checked, show_class: newValue });
                    }}
                    options={classes}
                    disableCloseOnSelect
                    getOptionLabel={(option) => vehicleType(option).vehicle_type}
                    renderOption={(props, option, { selected }) => (
                      <li {...props}>
                        <Checkbox
                          icon={icon}
                          checkedIcon={checkedIcon}
                          style={{ marginRight: 8 }}
                          checked={selected}
                        />
                        {vehicleType(option).vehicle_type}
                      </li>
                    )}
                    style={{ width: 400, paddingLeft: "10px", paddingBottom: "10px" }}
                    renderInput={(params) => <TextField {...params} label="Classes" />}
                  />
                }
                label="Show only type:"
                labelPlacement="start"
              />
              <FormControlLabel
                control={
                  <Autocomplete
                    value={checked.show_features}
                    onChange={(event, newValue): void => {
                      setChecked({ ...checked, show_features: newValue });
                    }}
                    options={features}
                    sx={{ width: 300, paddingLeft: "10px" }}
                    getOptionLabel={(option) => featureToDisplay(option)}
                    renderInput={(params) => <TextField {...params} label="Features" />}
                  />
                }
                label="Show only vehicles with:"
                labelPlacement="start"
              />
            </FormGroup>
          </FormControl>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
