import { useState } from "react";
import { useRecoilState } from "recoil";

import { FilterAlt } from "@mui/icons-material";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControlLabel,
  FormGroup,
  Switch,
} from "@mui/material";

import { FilterAtom } from "../atom";

export function Filters(): JSX.Element {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [checked, setChecked] = useRecoilState(FilterAtom);

  const handleWikiChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked({ ...checked, hide_wiki: event.target.checked });
  };
  const handleIngameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked({ ...checked, hide_ingame: event.target.checked });
  };

  return (
    <>
      <FilterAlt onClick={handleClickOpen} />
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{"Filters?"}</DialogTitle>
        <DialogContent>
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
          </FormGroup>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
