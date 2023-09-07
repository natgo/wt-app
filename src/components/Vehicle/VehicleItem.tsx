import { Tooltip } from "@mui/material";

import { GroundProps, VehicleProps } from "@data/final.schema";

import { WikiSigle } from "@/data/types/wiki.schema";
import { vehicleCountry } from "@/utils/custom/VehicleCountry";
import { vehicleType } from "@/utils/custom/VehicleType";
import { numRankToStr } from "@/utils/custom/numericRankToString";

import { VehicleNeighbor } from "./Neighbors/VehicleNeighbor";
import ArmorTable from "./Table";
import { VehicleButtons } from "./VehicleButtons";
import { VehicleImage } from "./VehicleImage";
import { VehiclePrice } from "./VehiclePrice";

export function SpecsCard(props: { vehicle: VehicleProps; garageimage?: boolean }): JSX.Element {
  const { vehicle, garageimage } = props;

  const country = vehicleCountry(vehicle.country);
  const vehicle_type = vehicleType(vehicle.normal_type, vehicle.extended_type);

  const rank = numRankToStr(vehicle.rank);

  return (
    <div className="specs_card_main" data-code={vehicle.intname}>
      {garageimage ? <VehicleImage vehicle={vehicle} /> : null}
      <div className="specs_card_main_info bg-gray-300">
        <div className="general_info_image">
          <img
            className="w-full aspect-[39/25]"
            src={`/wt/images/statcard/${vehicle.intname.toLowerCase()}.png`}
          />
        </div>

        <div className="general_info_name">
          <Tooltip title="Double click to copy internal name" placement="left">
            <span
              onDoubleClick={() => {
                navigator.clipboard.writeText(vehicle.intname);
              }}
            >
              {vehicle.displayname ? vehicle.displayname : vehicle.intname}
            </span>
          </Tooltip>
        </div>
        <div className="general_info_neighbors">
          <VehicleNeighbor vehicle={vehicle} />
        </div>
        <div className="general_info flex items-center justify-between">
          <div className="general_info_nation">
            <a
              className="flex items-center gap-2"
              href={`https://wiki.warthunder.com/Category:${country}_ground_vehicles`}
              title={`Category:${country} ground vehicles`}
            >
              <img
                alt={`${
                  vehicle.operator_country ? vehicle.operator_country : vehicle.country
                } flag.svg`}
                src={`/wt/images/gameuiskin/${
                  vehicle.operator_country ? vehicle.operator_country : vehicle.country
                }.svg`}
                className="h-[40px]"
              />
              TT: {country}{" "}
              {vehicle.operator_country ? `OP: ${vehicleCountry(vehicle.operator_country)}` : null}
            </a>
          </div>
          <div className="general_info_rank">
            <a
              href="/Category:Third_rank_ground_vehicles"
              title="Category:Third rank ground vehicles"
            >
              {rank} Rank
            </a>
          </div>
        </div>
        <div className="general_info_2">
          <div className="px-5 pb-2 pt-3 text-lg">
            <div className="mb-1 text-sm">Battle rating:</div>
            <div className="grid grid-cols-3 grid-rows-2 gap-px bg-black text-center [&>div]:bg-white">
              <div>AB</div>
              <div>RB</div>
              <div>SB</div>
              <div>{vehicle.br[0]}</div>
              <div>{vehicle.br[0]}</div>
              <div>{vehicle.br[0]}</div>
            </div>
          </div>
          <div className="general_info_class">
            <Premium vehicle={vehicle} />
            <Squadron vehicle={vehicle} />
            <div>
              <a href={`../Category:${vehicle_type}`} title={`Category:${vehicle_type}`}>
                {vehicle_type.vehicle_type}
              </a>
            </div>
            {vehicle_type.extended_type?.map((element) => {
              return (
                <div key={element}>
                  <a href={`../Category:${element}`} title={`Category:${element}`}>
                    {element}
                  </a>
                </div>
              );
            })}
          </div>
        </div>
        <div className="general_info_price">
          <VehiclePrice vehicle={vehicle} />
        </div>
        <div className="general_info_buttons">
          <VehicleButtons vehicle={vehicle} />
        </div>
      </div>
    </div>
  );
}

export function Survivability(props: {
  vehicle: GroundProps;
  wiki: WikiSigle | undefined;
}): JSX.Element {
  const { vehicle, wiki } = props;
  return (
    <div className="specs_info">
      <div className="specs_feature">
        {vehicle.has_dozer ? (
          <SpecsFeature
            feature={{
              className: "dozer",
              name: "Self-entrenching equipment",
              desc: "Creation of ramparts and trenches in soft ground",
            }}
          />
        ) : null}
        {vehicle.has_smoke ? (
          <SpecsFeature
            feature={{
              className: "smoke_grenade",
              name: "Smoke grenades",
              desc: "Creation of a smoke screen in front of the vehicle",
            }}
          />
        ) : null}
        {vehicle.has_ess ? (
          <SpecsFeature
            feature={{
              className: "ess",
              name: "ESS",
              desc: "Creation of a smoke screen in the direction of movement of the vehicle",
              help: "Engine Smoke generating System",
            }}
          />
        ) : null}
        {vehicle.has_lws ? (
          <SpecsFeature
            feature={{
              className: "lwr",
              name: "LWS",
              desc: "Notifies about the vehicle&apos;s exposure to laser emissions",
              help: "Laser warning system",
            }}
          />
        ) : null}
        {vehicle.has_era ? (
          <SpecsFeature
            feature={{
              className: "era_armor",
              name: "ERA",
              desc: "Effective action against the cumulative ammunition",
              help: "Explosive Reactive Armour",
            }}
          />
        ) : null}
        {vehicle.has_composite ? (
          <SpecsFeature
            feature={{
              className: "composite_armor",
              name: "Composite armour",
              desc: "Balanced protection against all types of ammunition",
            }}
          />
        ) : null}
      </div>
      <div className="specs_char">
        <ArmorTable vehicle={vehicle} />
        <div className="specs_char_block crew">
          <div className="specs_char_line head">
            <span className="name">Crew</span>
            <span className="value">{vehicle.crew} people</span>
          </div>
        </div>
        <div className="specs_char_block visibility">
          <div className="specs_char_line head">
            <span className="name">Visibility (Wiki)</span>
            <span className="value">{wiki ? wiki.visibility : 0} %</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function Premium(props: { vehicle: VehicleProps }): JSX.Element | null {
  const { vehicle } = props;
  if (vehicle.cost_gold) {
    return (
      <div className="premium">
        <a href="/Category:Premium_ground_vehicles" title="Category:Premium ground vehicles">
          PREMIUM
        </a>
      </div>
    );
  } else {
    return null;
  }
}

function Squadron(props: { vehicle: VehicleProps }): JSX.Element | null {
  const { vehicle } = props;
  if (vehicle.prem_type === "squad") {
    return (
      <div className="squadron">
        <a href="/Category:Squadron_ground_vehicles" title="Category:Squadron ground vehicles">
          SQUADRON
        </a>
      </div>
    );
  } else {
    return null;
  }
}

export function Mobility(props: { vehicle: GroundProps }): JSX.Element {
  const { vehicle } = props;
  return (
    <div className="specs_info">
      <div className="specs_feature">
        {vehicle.can_float ? (
          <SpecsFeature
            feature={{
              className: "can_float",
              name: "Amphibious",
              desc: "The design allows you to swim and control movement in the water",
            }}
          />
        ) : null}
        {vehicle.hydro_suspension ? (
          <SpecsFeature
            feature={{
              className: "hydro_suspension",
              name: "Controlled suspension",
              desc: "It is possible to adjust the ground clearance or more complex suspension positions",
            }}
          />
        ) : null}
        {vehicle.gears_backward === vehicle.gears_forward ? (
          <SpecsFeature
            feature={{
              className: "revers_gear",
              name: vehicle.has_synchro ? "Full synchro gearbox" : "Reverse gearbox",
              desc: vehicle.has_synchro
                ? "Forward and backward movement is possible at the same maximum speed, and the acceleration is the same in both directions"
                : "Forward and backward movement is possible at the same maximum speed",
            }}
          />
        ) : null}
        {vehicle.has_neutral ? (
          <SpecsFeature
            feature={{
              className: "stabilizer",
              name: "Neutral Steer",
              desc: "It is possible to turn without moving allowing for faster turning on the spot",
            }}
          />
        ) : null}
      </div>
      <div className="specs_char">
        <div className="specs_char_block">
          <div className="specs_char_line head">
            <span className="name">Speed</span>
            <span className="value">forward / back</span>
          </div>
          <div className="specs_char_line indent">
            <span className="name">AB</span>
            <span className="value">
              {vehicle.maxSpeedAB
                ? `${vehicle.maxSpeedAB[0]?.toFixed(1)} / ${vehicle.maxSpeedAB[1]?.toFixed(1)} km/h`
                : "N/A"}
            </span>
          </div>
          <div className="specs_char_line indent">
            <span className="name">RB and SB</span>
            <span className="value">
              {vehicle.maxSpeedRB
                ? `${vehicle.maxSpeedRB[0]?.toFixed(1)} / ${vehicle.maxSpeedRB[1]?.toFixed(1)} km/h`
                : "N/A"}
            </span>
          </div>
        </div>
        <div className="specs_char_block">
          <div className="specs_char_line head">
            <span className="name">Number of gears</span>
            <span className="value">{vehicle.gears_forward} forward</span>
          </div>
          <div className="specs_char_line indent">
            <span className="name"></span>
            <span className="value">{vehicle.gears_backward} back</span>
          </div>
        </div>
        <div className="specs_char_block">
          <div className="specs_char_line head">
            <span className="name">Weight</span>
            <span className="value">{(vehicle.mass / 1000).toFixed(1)} t</span>
          </div>
        </div>
        <div className="specs_char_block">
          <div className="specs_char_line head">
            <span className="name">Engine power</span>
            <span className="value"></span>
          </div>
          <div className="specs_char_line indent">
            <span className="name">AB</span>
            <span className="value">{(vehicle.horsepower * 1.908).toFixed(0)} hp</span>
          </div>
          <div className="specs_char_line indent">
            <span className="name">RB and SB</span>
            <span className="value">{vehicle.horsepower} hp</span>
          </div>
        </div>
        <div className="specs_char_block">
          <div className="specs_char_line head">
            <span className="name">Power-to-weight ratio</span>
            <span className="value"></span>
          </div>
          <div className="specs_char_line indent">
            <span className="name">AB</span>
            <span className="value">
              {((vehicle.horsepower * 1.908) / (vehicle.mass / 1000)).toFixed(1)} hp/t
            </span>
          </div>
          <div className="specs_char_line indent">
            <span className="name">RB and SB</span>
            <span className="value">
              {(vehicle.horsepower / (vehicle.mass / 1000)).toFixed(1)} hp/t
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export function SpecsFeature(props: {
  feature: { className: string; name: string; desc: string; help?: string };
}) {
  const { feature } = props;
  return (
    <div className={`feature ${feature.className}`}>
      <div className="feature_img"></div>
      <div className="feature_name">
        {feature.help ? (
          <span title={feature.help} className="help">
            {feature.name}
          </span>
        ) : (
          feature.name
        )}
      </div>
      <div className="feature_desc">{feature.desc}</div>
    </div>
  );
}
