import Countdown from "react-countdown";
import { useRecoilValue } from "recoil";

import { CircularProgress } from "@mui/material";

import { CountryName, Final, VehicleProps, countryname } from "@data/final.schema";
import { FinalObjectRange } from "@data/shop.schema";
import { DateTime } from "luxon";

import { EmptyDiv } from "@/components/Techtree/EmptyDiv";
import { TechTreeItem } from "@/components/Techtree/TechTreeItem";
import { finalQuery } from "@/store/final";
import { shopQuery } from "@/store/shop";
import { queryVehicleIntname } from "@/utils/custom/queryVehicle";

function shopRange(range: FinalObjectRange[], final: Final) {
  const arr: VehicleProps[] = [];

  range.forEach((element) => {
    element.forEach((element) => {
      if (element === "drawArrow") {
        return;
      }
      element.forEach((element) => {
        if ("vehicles" in element) {
          element.vehicles.forEach((element) => {
            if (element.clanVehicle) {
              const vehicle = queryVehicleIntname(element.name, final);
              if (vehicle) {
                arr.push(vehicle);
              }
            }
          });
        } else {
          if (element.clanVehicle) {
            const vehicle = queryVehicleIntname(element.name, final);
            if (vehicle) {
              arr.push(vehicle);
            }
          }
        }
      });
    });
  });

  return arr;
}

function CountryFlag(props: { country: CountryName }): JSX.Element {
  return (
    <div className="mb-3 justify-self-center">
      <img src={`/wt/images/gameuiskin/${props.country}.svg`} className="h-14" />
    </div>
  );
}

export default function SquadronVehicles(): JSX.Element {
  const final = useRecoilValue(finalQuery);
  const shop = useRecoilValue(shopQuery);
  const countries: Record<CountryName, VehicleProps[]> = {
    country_usa: [],
    country_germany: [],
    country_ussr: [],
    country_britain: [],
    country_japan: [],
    country_china: [],
    country_italy: [],
    country_france: [],
    country_sweden: [],
    country_israel: [],
  };

  Object.entries(shop).forEach(([key, value]) => {
    countries[countryname.parse(key)].push(...shopRange(value.army.range, final));
    countries[countryname.parse(key)].push(...shopRange(value.aviation.range, final));
    countries[countryname.parse(key)].push(...shopRange(value.helicopters.range, final));
  });

  let next = DateTime.fromISO("2023-01-18T00:00:00Z");

  while (next < DateTime.now()) {
    next = next.plus({ days: 3 });
  }

  return (
    <div className="p-8">
      <div className="grid grid-flow-col">
        {Object.entries(countries).map(([key, value]) => {
          if (value.length === 0) {
            return null;
          }

          return (
            <div key={key} className="grid auto-rows-min">
              <CountryFlag country={countryname.parse(key)} />
              {value.map((element, index) => {
                return (
                  <div key={index} className="grid justify-center">
                    <TechTreeItem
                      intname={element.intname}
                      final={final}
                      type="normal"
                      key={index}
                    />
                    {((element.reqRP / 20000) * 3) % 3 > 0
                      ? (element.reqRP / 20000) * 3 - (((element.reqRP / 20000) * 3) % 3) + 3
                      : (element.reqRP / 20000) * 3}{" "}
                    Days to research
                    <EmptyDiv size={30} />
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
      <Countdown
        date={next.toJSDate()}
        renderer={({ total }) => {
          return (
            <div>
              <div>
                Squadron points{" "}
                {DateTime.now().plus({ milliseconds: total }).toRelative({ round: false })}
              </div>
              <CircularProgress
                size="10rem"
                variant="determinate"
                value={(total / 259200000) * 100}
              />
            </div>
          );
        }}
      />
    </div>
  );
}
