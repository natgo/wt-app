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

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  return (
    <>
      <FilterAlt onClick={handleClickOpen} />
      <Dialog
        open={open}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"Filters?"}</DialogTitle>
        <DialogContent>
          <FormGroup>
            <FormControlLabel
              control={<Switch checked={checked} onChange={handleChange} />}
              label="Hide vehicles not in wiki"
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
