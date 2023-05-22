import { Tooltip } from "@mui/material";

import { GroundProps, HelicopterProps, VehicleProps } from "@data/final.schema";

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

  const flag = `/wt/images/flag/45px-${country}_flag.png`;

  return (
    <div className="specs_card_main" data-code={vehicle.intname}>
      {garageimage ? <VehicleImage vehicle={vehicle} /> : null}
      <div className="specs_card_main_info">
        <div className="general_info_image">
          <img width="100%" src={`/wt/images/statcard/${vehicle.intname.toLowerCase()}.png`} />
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
        <div className="general_info">
          <div className="general_info_nation">
            <a
              className="flex"
              href={`https://wiki.warthunder.com/Category:${country}_ground_vehicles`}
              title={`Category:${country} ground vehicles`}
            >
              <img
                alt={`${country} flag.png`}
                src={flag}
                width="45"
                height="23"
                data-file-width="200"
                data-file-height="104"
              />
              {country}
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
          <div className="general_info_br">
            <div className="desc">Battle rating:</div>
            <table className="border-collapse">
              <colgroup>
                <col span={2} className="border-r border-black" />
              </colgroup>
              <tbody>
                <tr className="border-b border-black">
                  <td>
                    <div>AB</div>
                  </td>
                  <td>
                    <div>RB</div>
                  </td>
                  <td>
                    <div>SB</div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div>{vehicle.br[0]}</div>
                  </td>
                  <td>
                    <div>{vehicle.br[1]}</div>
                  </td>
                  <td>
                    <div>{vehicle.br[2]}</div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="general_info_class">
            <span className="desc">Class:</span>
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
        <Dozer vehicle={vehicle} />
        <Smoke vehicle={vehicle} />
        <Ess vehicle={vehicle} />
        <Lws vehicle={vehicle} />
        <Era vehicle={vehicle} />
        <Composite vehicle={vehicle} />
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
        <Amphibious vehicle={vehicle} />
        <HydroSuspension vehicle={vehicle} />
        <ReverseGear vehicle={vehicle} />
        <NeutralSteer vehicle={vehicle} />
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
                ? `${vehicle.maxSpeedAB[0].toFixed(1)} / ${vehicle.maxSpeedAB[1].toFixed(1)} km/h`
                : "N/A"}
            </span>
          </div>
          <div className="specs_char_line indent">
            <span className="name">RB and SB</span>
            <span className="value">
              {vehicle.maxSpeedRB
                ? `${vehicle.maxSpeedRB[0].toFixed(1)} / ${vehicle.maxSpeedRB[1].toFixed(1)} km/h`
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

function Dozer(props: { vehicle: GroundProps }): JSX.Element | null {
  const { vehicle } = props;
  if (vehicle.has_dozer) {
    return (
      <div className="feature dozer">
        <div className="feature_img"></div>
        <div className="feature_name">Self-entrenching equipment</div>
        <div className="feature_desc">Creation of ramparts and trenches in soft ground</div>
      </div>
    );
  }
  return null;
}

function Smoke(props: { vehicle: GroundProps }): JSX.Element | null {
  const { vehicle } = props;
  if (vehicle.has_smoke) {
    return (
      <div className="feature smoke_grenade">
        <div className="feature_img"></div>
        <div className="feature_name">Smoke grenades</div>
        <div className="feature_desc">Creation of a smoke screen in front of the vehicle</div>
      </div>
    );
  }
  return null;
}

function Ess(props: { vehicle: GroundProps }): JSX.Element | null {
  const { vehicle } = props;
  if (vehicle.has_ess) {
    return (
      <div className="feature ess">
        <div className="feature_img"></div>
        <div className="feature_name">
          <span title="Engine Smoke generating System" className="help">
            ESS
          </span>
        </div>
        <div className="feature_desc">
          Creation of a smoke screen in the direction of movement of the vehicle
        </div>
      </div>
    );
  }
  return null;
}

export function Lws(props: { vehicle: GroundProps | HelicopterProps }): JSX.Element | null {
  const { vehicle } = props;
  if (vehicle.has_lws) {
    return (
      <div className="feature lwr">
        <div className="feature_img"></div>
        <div className="feature_name">
          <span title="Laser warning system" className="help">
            LWS
          </span>
        </div>
        <div className="feature_desc">
          Notifies about the vehicle&apos;s exposure to laser emissions
        </div>
      </div>
    );
  }
  return null;
}

function Era(props: { vehicle: GroundProps }): JSX.Element | null {
  const { vehicle } = props;
  if (vehicle.has_era) {
    return (
      <div className="feature era_armor">
        <div className="feature_img"></div>
        <div className="feature_name">
          <span title="Explosive Reactive Armour" className="help">
            ERA
          </span>
        </div>
        <div className="feature_desc">Effective action against the cumulative ammunition</div>
      </div>
    );
  }
  return null;
}

function Composite(props: { vehicle: GroundProps }): JSX.Element | null {
  const { vehicle } = props;
  if (vehicle.has_composite) {
    return (
      <div className="feature composite_armor">
        <div className="feature_img"></div>
        <div className="feature_name">
          <span title="Mitähän tämäkin meinaa" className="help">
            Composite armour
          </span>
        </div>
        <div className="feature_desc">Balanced protection against all types of ammunition</div>
      </div>
    );
  }
  return null;
}

function Amphibious(props: { vehicle: GroundProps }): JSX.Element | null {
  const { vehicle } = props;
  if (vehicle.can_float) {
    return (
      <div className="feature can_float">
        <div className="feature_img"></div>
        <div className="feature_name">Amphibious</div>
        <div className="feature_desc">
          The design allows you to swim and control movement in the water
        </div>
      </div>
    );
  }
  return null;
}

function HydroSuspension(props: { vehicle: GroundProps }) {
  const { vehicle } = props;
  if (vehicle.hydro_suspension) {
    return (
      <div className="feature hydro_suspension">
        <div className="feature_img"></div>
        <div className="feature_name">Controlled suspension</div>
        <div className="feature_desc">
          It is possible to adjust the ground clearance or more complex suspension positions
        </div>
      </div>
    );
  }
  return null;
}

function ReverseGear(props: { vehicle: GroundProps }) {
  const { vehicle } = props;
  if (vehicle.gears_backward === vehicle.gears_forward) {
    if (vehicle.has_synchro) {
      return (
        <div className="feature revers_gear">
          <div className="feature_img"></div>
          <div className="feature_name">Full synchro gearbox</div>
          <div className="feature_desc">
            Forward and backward movement is possible at the same maximum speed, and the
            acceleration is the same in both directions
          </div>
        </div>
      );
    } else {
      return (
        <div className="feature revers_gear">
          <div className="feature_img"></div>
          <div className="feature_name">Reverse gearbox</div>
          <div className="feature_desc">
            Forward and backward movement is possible at the same maximum speed
          </div>
        </div>
      );
    }
  }
  return null;
}

function NeutralSteer(props: { vehicle: GroundProps }) {
  const { vehicle } = props;
  if (vehicle.has_neutral) {
    return (
      <div className="feature stabilizer">
        <div className="feature_img"></div>
        <div className="feature_name">Neutral Steer</div>
        <div className="feature_desc">
          It is possible to turn without moving allowing for faster turning on the spot
        </div>
      </div>
    );
  }
  return null;
}
