import { useState } from "react";
import { Link } from "react-router-dom";
import { useRecoilValue } from "recoil";

import { Search } from "@mui/icons-material";
import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material";

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
      <Dialog
        open={open}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"Search?"}</DialogTitle>
        <DialogContent>
          <input
            value={query}
            onChange={(e) => updateQuery(e.target.value)}
            type="text"
            id="header-search"
            placeholder="Search vehicles"
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
