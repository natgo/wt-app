import { ChangeEvent, useState } from "react";
import { Link } from "react-router-dom";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";

import {
  Button,
  Checkbox,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";

import { VehicleProps } from "@data/final.schema";

import { CountryTab, SearchName, TypeTab } from "@/store/atom/atom";
import { compareVehicleState } from "@/store/compare";
import { finalQuery } from "@/store/final";
import { searchDialogState } from "@/store/search";
import { countryToNumeric } from "@/utils/custom/countryToNumeric";
import { typeToNumeric } from "@/utils/custom/typeToNumeric";

export function SearchDialog(props: { type: "techtree" | "compare" }): JSX.Element {
  const { type } = props;

  const final = useRecoilValue(finalQuery);
  const [searchOpen, setSearchOpen] = useRecoilState(searchDialogState);

  const handleClose = () => {
    setSearchOpen(false);
  };

  const [query, updateQuery] = useState("");

  function filterVehicles(search: VehicleProps[], query: string): VehicleProps[] | undefined {
    if (query === "") {
      return undefined;
    }

    return search.filter((vehicle) => {
      const vehicleWikiName = vehicle.wikiname?.toLowerCase();
      const vehicleIntName = vehicle.intname.toLowerCase();
      if (vehicleWikiName?.includes(query) || vehicleIntName.includes(query)) {
        return true;
      }
      return false;
    });
  }

  const filteredVehicles = filterVehicles(
    [...final.ground, ...final.aircraft, ...final.helicopter, ...final.ship, ...final.boat],
    query.toLowerCase(),
  );

  return (
    <Dialog open={searchOpen} onClose={handleClose}>
      <DialogTitle>Search?</DialogTitle>
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
          <SearchRender
            filtered={filteredVehicles ? filteredVehicles.slice(0, 50) : undefined}
            type={type}
            setOpen={setSearchOpen}
          />
        </ul>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Close</Button>
      </DialogActions>
    </Dialog>
  );
}

function SearchRender(props: {
  filtered: VehicleProps[] | undefined;
  type: "techtree" | "compare";
  setOpen: (mode: boolean) => void;
}) {
  const { filtered, type, setOpen } = props;
  const countrySetValue = useSetRecoilState(CountryTab);
  const setValue = useSetRecoilState(TypeTab);
  const setSearch = useSetRecoilState(SearchName);

  const handleClickVehicle = (vehicle: VehicleProps) => {
    countrySetValue(countryToNumeric(vehicle.country));
    setOpen(false);
    setValue(typeToNumeric(vehicle.type));
    setSearch(vehicle.intname);
  };

  if (filtered) {
    if (type === "techtree") {
      return (
        <>
          {filtered.map((vehicle) => (
            <Link
              key={vehicle.intname}
              to={"/wt/techtree#" + vehicle.intname}
              title={vehicle.wikiname}
              onClick={() => handleClickVehicle(vehicle)}
            >
              <li>{vehicle.wikiname ? vehicle.wikiname : vehicle.intname}</li>
            </Link>
          ))}
        </>
      );
    } else {
      return (
        <>
          {filtered.map((vehicle) => (
            <CompareRender key={vehicle.intname} vehicle={vehicle} />
          ))}
        </>
      );
    }
  }

  return null;
}

function CompareRender(props: { vehicle: VehicleProps }) {
  const { vehicle } = props;
  const [compare, setCompare] = useRecoilState(compareVehicleState);
  const find = compare.findIndex((element) => {
    return element.intname === vehicle.intname;
  });
  const [checked, setChecked] = useState(find !== -1);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    console.log(find);
    setChecked(event.target.checked);

    if (event.target.checked && find === -1) {
      setCompare([...compare, vehicle]);
    } else if (event.target.checked === false && find !== -1) {
      const newArr = Array.from(compare);
      newArr.splice(find, 1);
      setCompare(newArr);
    }
  };
  return (
    <div key={vehicle.intname}>
      <Checkbox
        checked={checked}
        onChange={handleChange}
        disabled={compare.length > 0 && vehicle.type !== compare[0].type}
      />
      {vehicle.wikiname ? vehicle.wikiname : vehicle.intname}
    </div>
  );
}
