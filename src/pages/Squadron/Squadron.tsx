import { useRecoilValue } from "recoil";

import { EmptyDiv } from "@/components/Techtree/EmptyDiv";
import { TechTreeItem } from "@/components/Techtree/TechTreeItem";
import { finalQuery } from "@/store/final";
import { shopQuery } from "@/store/shop";
import { CountryName, FinalProp, FinalShopGroup, FinalShopItem, VehicleProps } from "@/types";
import { queryVehicleIntname } from "@/utils/custom/QueryVehicle";
import { vehicleCountry } from "@/utils/custom/VehicleCountry";

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
    countries[key].push(...shopRange(value.army.range, final));
    countries[key].push(...shopRange(value.aviation.range, final));
    countries[key].push(...shopRange(value.helicopters.range, final));
  });

  return (
    <div>
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
              <CountryFlag country={key} />
              {value.map((element, index) => {
                return (
                  <div key={index}>
                    <TechTreeItem intname={element.intname} key={index} />
                    <EmptyDiv />
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
      Timer
    </div>
  );
}
