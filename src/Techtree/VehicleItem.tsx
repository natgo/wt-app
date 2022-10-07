import { Tooltip } from "@mui/material";

import { FinalProps, GroundProps } from "../types";

import { VehicleImage } from "./VehicleImage";
import { VehiclePrice } from "./VehiclePrice";

export function SpecsCard(props: {
  vehicle: FinalProps;
  link?: string;
  item_type: "own" | "prem" | "squad";
}): JSX.Element {
  const { vehicle, link } = props;

  let vehicle_type = "Viron Paras";
  switch (vehicle.normal_type) {
    case "type_tank_destroyer":
      vehicle_type = "Tank destroyer";
      break;
    case "type_light_tank":
      vehicle_type = "Light Tank";
      break;
    case "type_medium_tank":
      vehicle_type = "Medium tank";
      break;
    case "type_heavy_tank":
      vehicle_type = "Heavy tank";
      break;
    case "type_spaa":
      vehicle_type = "SPAA";
      break;
    case "type_fighter":
      vehicle_type = "Fighter";
      break;
    case "type_bomber":
      vehicle_type = "Bomber";
      break;
    case "type_assault":
      vehicle_type = "Strike aircraft";
      break;
    case "type_attack_helicopter":
      vehicle_type = "Attack helicopter";
      break;
    case "type_utility_helicopter":
      vehicle_type = "Utility helicopter";
      break;
  }

  let rank = "IX";
  switch (vehicle.rank) {
    case 1:
      rank = "I";
      break;
    case 2:
      rank = "II";
      break;
    case 3:
      rank = "II";
      break;
    case 4:
      rank = "IV";
      break;
    case 5:
      rank = "V";
      break;
    case 6:
      rank = "VI";
      break;
    case 7:
      rank = "VII";
      break;
  }

  let country: string | undefined = "Viro";
  const flag: string[] = [];
  const flag_base = "../images/flag/";
  switch (vehicle.country) {
    case "country_usa":
      country = "USA";
      flag.push(
        flag_base + "45px-USA_flag.png",
        flag_base + "68px-USA_flag.png",
        flag_base + "90px-USA_flag.png",
      );
      break;
    case "country_italy":
      country = "Italy";
      flag.push(
        flag_base + "45px-Italy_flag.png",
        flag_base + "68px-Italy_flag.png",
        flag_base + "90px-Italy_flag.png",
      );
      break;
    case "country_germany":
      country = "Germany";
      flag.push(
        flag_base + "45px-Germany_flag.png",
        flag_base + "68px-Germany_flag.png",
        flag_base + "90px-Germany_flag.png",
      );
      break;
    case "country_ussr":
      country = "USSR";
      flag.push(
        flag_base + "45px-USSR_flag.png",
        flag_base + "68px-USSR_flag.png",
        flag_base + "90px-USSR_flag.png",
      );
      break;
    case "country_britain":
      country = "Britain";
      flag.push(
        flag_base + "45px-Britain_flag.png",
        flag_base + "68px-Britain_flag.png",
        flag_base + "90px-Britain_flag.png",
      );
      break;
    case "country_france":
      country = "France";
      flag.push(
        flag_base + "45px-France_flag.png",
        flag_base + "68px-France_flag.png",
        flag_base + "90px-France_flag.png",
      );
      break;
    case "country_china":
      country = "China";
      flag.push(
        flag_base + "45px-China_flag.png",
        flag_base + "68px-China_flag.png",
        flag_base + "90px-China_flag.png",
      );
      break;
    case "country_sweden":
      country = "Sweden";
      flag.push(
        flag_base + "45px-Sweden_flag.png",
        flag_base + "68px-Sweden_flag.png",
        flag_base + "90px-Sweden_flag.png",
      );
      break;
    case "country_israel":
      country = "Israel";
      flag.push(
        flag_base + "45px-Israel_flag.png",
        flag_base + "68px-Israel_flag.png",
        flag_base + "90px-Israel_flag.png",
      );
      break;
    case "country_japan":
      country = "Japan";
      flag.push(
        flag_base + "45px-Japan_flag.png",
        flag_base + "68px-Japan_flag.png",
        flag_base + "90px-Japan_flag.png",
      );
      break;
  }

  return (
    <div className="specs_card_main" data-code={vehicle.intname}>
      <VehicleImage vehicle={vehicle} link={link} />
      <div className="specs_card_main_info">
        <div className="general_info_image">
          <img
            width="100%"
            src={`../images/statcard/${vehicle.intname.toLowerCase()}.png`}
          />
        </div>

        <div className="general_info_name">
          <Tooltip title="Double click to copy internal name" placement="left">
            <span
              onDoubleClick={() => {
                navigator.clipboard.writeText(vehicle.intname);
              }}
            >
              {vehicle.wikiname}
            </span>
          </Tooltip>
        </div>
        <div className="general_info_neighbors"></div>
        <div className="general_info">
          <div className="general_info_nation">
            <a
              href={`https://wiki.warthunder.com/Category:${country}_ground_vehicles`}
              title={`Category:${country} ground vehicles`}
            >
              <img
                alt={`${country} flag.png`}
                src={flag[0]}
                width="45"
                height="23"
                srcSet="
                https://wiki.warthunder.com/images/thumb/9/9f/USA_flag.png/68px-USA_flag.png 1.5x,
                https://wiki.warthunder.com/images/thumb/9/9f/USA_flag.png/90px-USA_flag.png 2x
              "
                data-file-width="200"
                data-file-height="104"
              />
            </a>
            <a
              href={`https://wiki.warthunder.com/Category:${country}_ground_vehicles`}
              title={`Category:${country} ground vehicles`}
            >
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
            <div className="desc">
              <a href="/Battle_ratings" title="Battle ratings">
                Battle rating
              </a>
              :
            </div>
            <table rules="all">
              <tbody>
                <tr>
                  <td>
                    <a href="/Arcade_Battles" className="mw-redirect" title="Arcade Battles">
                      AB
                    </a>
                  </td>
                  <td>
                    <a href="/Realistic_Battles" className="mw-redirect" title="Realistic Battles">
                      RB
                    </a>
                  </td>
                  <td>
                    <a href="/Simulator_Battles" className="mw-redirect" title="Simulator Battles">
                      SB
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>{vehicle.ab_br}</td>
                  <td>{vehicle.rb_br}</td>
                  <td>{vehicle.sb_br}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="general_info_class">
            <span className="desc">Class:</span>
            <div>
              <a href="/Category:Tank_destroyers" title="Category:Tank destroyers">
                {vehicle_type}
              </a>
            </div>
          </div>
        </div>
        <VehiclePrice vehicle={vehicle} />
        <div className="general_info_buttons">
          <div className="general_info_buttons_container">
            <div className="general_info_game_button" title="Show in game">
              <span>Show in game</span>
            </div>
          </div>
        </div>
        <div className="general_info_message"></div>
      </div>
    </div>
  );
}

export function Survivability(props: { vehicle: GroundProps }): JSX.Element {
  const { vehicle } = props;
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
        <div className="specs_char_block">
          <div className="specs_char_line head">
            <span className="name">Armour (Wiki)</span>
            <span className="value">front / side / back</span>
          </div>
          <div className="specs_char_line indent">
            <span className="name">Hull</span>
            <span className="value">
              {0} / {0} / {0}
            </span>
          </div>
          <div className="specs_char_line indent">
            <span className="name">Turret</span>
            <span className="value">
              {0} / {0} / {0}
            </span>
          </div>
        </div>
        <div className="specs_char_block">
          <div className="specs_char_line head">
            <span className="name">Crew</span>
            <span className="value">{vehicle.crew} people</span>
          </div>
        </div>
        <div className="specs_char_block">
          <div className="specs_char_line head">
            <span className="name">Visibility (Wiki)</span>
            <span className="value">100 %</span>
          </div>
        </div>
      </div>
    </div>
  );
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
            <span className="name">Speed (Wiki)</span>
            <span className="value">forward / back</span>
          </div>
          <div className="specs_char_line indent">
            <span className="name">AB</span>
            <span className="value">
              {" "}
              {0} / {0} km/h
            </span>
          </div>
          <div className="specs_char_line indent">
            <span className="name">RB and SB</span>
            <span className="value">
              {" "}
              {0} / {0} km/h
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
          <span
            title="Engine Smoke generating System"
            style={{ borderBottom: "1px dotted", cursor: "help", whiteSpace: "nowrap" }}
          >
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

function Lws(props: { vehicle: GroundProps }): JSX.Element | null {
  const { vehicle } = props;
  if (vehicle.has_lws) {
    return (
      <div className="feature lwr">
        <div className="feature_img"></div>
        <div className="feature_name">
          <span
            title="Laser warning system"
            style={{ borderBottom: "1px dotted", cursor: "help", whiteSpace: "nowrap" }}
          >
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
          <span
            title="Explosive Reactive Armour"
            style={{ borderBottom: "1px dotted", cursor: "help", whiteSpace: "nowrap" }}
          >
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
          <span
            title="Mitähän tämäkin meinaa"
            style={{ borderBottom: "1px dotted", cursor: "help", whiteSpace: "nowrap" }}
          >
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
