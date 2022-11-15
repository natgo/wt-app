import { useState } from "react";
import { Link } from "react-router-dom";
import { useRecoilValue } from "recoil";

import { Search } from "@mui/icons-material";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";

import { Final } from "../atom";
import { FinalProps } from "../types";

export function SearchDialog(): JSX.Element {
  const final = useRecoilValue(Final);
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [query, updateQuery] = useState("");

  const filterPosts = (posts: FinalProps[], query: string) => {
    if (query === "") {
      return undefined;
    }

    return posts.filter((post) => {
      const postName = post.wikiname?.toLowerCase();
      return postName?.includes(query);
    });
  };
  const filteredPosts = filterPosts(
    [...final.ground, ...final.aircraft, ...final.helicopter],
    query.toLowerCase(),
  );

  return (
    <>
      <Search onClick={handleClickOpen} />
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
                    to={"/wt/techtree/" + vehicle.intname}
                    title={vehicle.wikiname}
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
