import React from "react";

import { Box, Pagination } from "@mui/material";

import { FinalProps } from "../types";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { PaginationNum } from "../atom";

interface PaginationPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function PaginationPanel(props: PaginationPanelProps): JSX.Element {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 1 }}>{children}</Box>}
    </div>
  );
}

export function VehicleImage(props: {
  vehicle: FinalProps;
  link: string | undefined;
  thumb_base: string;
}): JSX.Element {
  const { vehicle, link, thumb_base } = props;
  const state = useRecoilValue(PaginationNum);
  const setState = useSetRecoilState(PaginationNum);

  const handlePagnationChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setState(value - 1);
  };

  return (
    <div className="specs_card_main_slider_container">
      <PaginationPanel value={state} index={0}>
        <div>
          <img
            src={`https://encyclopedia.warthunder.com/images/${vehicle.intname}.png`}
            alt={`${vehicle.intname}.png`}
          />
        </div>
      </PaginationPanel>
      <PaginationPanel value={state} index={1}>
        <div>
          <a href={`/File:GarageImage_${link}.jpg`} className="image">
            <img
              alt={`GarageImage_${link}.jpg`}
              src={`${thumb_base}f/f8/GarageImage_${link}.jpg/800px-GarageImage_${link}.jpg`}
              width="800"
              height="450"
              srcSet={`
                ${thumb_base}f/f8/GarageImage_${link}.jpg/1200px-GarageImage_${link}.jpg 1.5x,
                ${thumb_base}f/f8/GarageImage_${link}.jpg/1600px-GarageImage_${link}.jpg 2x
                `}
              data-file-width="1920"
              data-file-height="1080"
            />
          </a>
        </div>
      </PaginationPanel>
      
      <Pagination page={state + 1} onChange={handlePagnationChange} count={2} />
    </div>
  );
}
