import Countdown from "react-countdown";
import { useRecoilValue } from "recoil";

import { CircularProgress } from "@mui/material";

import { DateTime } from "luxon";

import { EmptyDiv } from "@/components/Techtree/EmptyDiv";
import { TechTreeItem } from "@/components/Techtree/TechTreeItem";
import { finalQuery } from "@/store/final";
import { shopQuery } from "@/store/shop";
import {
  CountryName,
  FinalProp,
  FinalShopGroup,
  FinalShopItem,
  VehicleProps,
  countryname,
} from "@/types";
import { vehicleCountry } from "@/utils/custom/VehicleCountry";
import { queryVehicleIntname } from "@/utils/custom/queryVehicle";

function shopRange(shop: (FinalShopItem | FinalShopGroup)[][], final: FinalProp) {
  const arr: VehicleProps[] = [];

  shop.forEach((element) => {
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

  return arr;
}

function CountryFlag(props: { country: CountryName }): JSX.Element {
  const country = vehicleCountry(props.country);
  const flag = `./images/flag/68px-${country}_flag.png`;
  return (
    <div style={{ justifySelf: "center" }}>
      <img src={flag} />
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

  let next = "2023-01-18T00:00:00Z";

  while (DateTime.fromISO(next) < DateTime.now()) {
    next = DateTime.fromISO(next).plus({ days: 3 }).toISO();
  }

  return (
    <div style={{ padding: "30px" }}>
      <div style={{ display: "grid", gridAutoFlow: "column" }}>
        {Object.entries(countries).map(([key, value]) => {
          if (value.length === 0) {
            return null;
          }

          return (
            <div
              key={key}
              style={{
                display: "grid",
                gridAutoFlow: "row",
                gridTemplateRows: "40px repeat(4,78px)",
              }}
            >
              <CountryFlag country={countryname.parse(key)} />
              {value.map((element, index) => {
                return (
                  <div key={index} style={{ display: "grid", justifyContent: "center" }}>
                    <TechTreeItem intname={element.intname} key={index} />
                    {((element.reqRP / 20000) * 3) % 3 > 0
                      ? (element.reqRP / 20000) * 3 - (((element.reqRP / 20000) * 3) % 3) + 3
                      : (element.reqRP / 20000) * 3}{" "}
                    Days to research
                    <EmptyDiv />
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
      <Countdown
        date={next}
        renderer={({ total }) => {
          return (
            <div>
              <div>
                Squadron points in{" "}
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
