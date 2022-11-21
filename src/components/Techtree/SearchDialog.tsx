import { useState } from "react";
import { Link } from "react-router-dom";
import { useRecoilValue, useSetRecoilState } from "recoil";

import { Search } from "@mui/icons-material";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  TextField,
} from "@mui/material";

import { CountryTab, Final, SearchName, TypeTab } from "@/store/atom/atom";
import { FinalProps } from "@/types";
import { countryToNumeric } from "@/utils/custom/countryToNumeric";
import { typeToNumeric } from "@/utils/custom/typeToNumeric";

export function SearchDialog(): JSX.Element {
  const final = useRecoilValue(Final);
  const countrySetValue = useSetRecoilState(CountryTab);
  const setValue = useSetRecoilState(TypeTab);
  const setSearch = useSetRecoilState(SearchName);

  const handleClickVehicle = (vehicle: FinalProps) => {
    countrySetValue(countryToNumeric(vehicle.country));
    setOpen(false);
    setValue(typeToNumeric(vehicle.type));
    updateQuery("");
    setSearch(vehicle.intname);
  };

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [query, updateQuery] = useState("");

  function filterPosts(search: FinalProps[], query: string): FinalProps[] | undefined {
    if (query === "") {
      return undefined;
    }

    return search.filter((post) => {
      const postName = post.wikiname?.toLowerCase();
      return postName?.includes(query);
    });
  }

  const filteredPosts = filterPosts(
    [...final.ground, ...final.aircraft, ...final.helicopter],
    query.toLowerCase(),
  );

  return (
    <>
      <IconButton color="primary" size="large" onClick={handleClickOpen}>
        <Search />
      </IconButton>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{"Search?"}</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="vehicle-search"
            type="text"
            fullWidth
            variant="standard"
            value={query}
            placeholder="Search vehicles"
            onChange={(e) => updateQuery(e.target.value)}
          />
          <ul>
            {filteredPosts
              ? filteredPosts.map((vehicle) => (
                  <Link
                    key={vehicle.intname}
                    to={"/wt/techtree#" + vehicle.intname}
                    title={vehicle.wikiname}
                    onClick={() => handleClickVehicle(vehicle)}
                  >
                    <li>{vehicle.wikiname}</li>
                  </Link>
                ))
              : null}
          </ul>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
