import { HelicopterProps } from "@data/final.schema";

import { Lws } from "./VehicleItem";

export function HeliSurvivability(props: { vehicle: HelicopterProps }): JSX.Element {
  const { vehicle } = props;
  return (
    <div className="specs_info">
      <div className="specs_feature">
        <Maw vehicle={vehicle} />
        <Lws vehicle={vehicle} />
        <Hirss vehicle={vehicle} />
        <Ircm vehicle={vehicle} />
        <Rwr vehicle={vehicle} />
      </div>
      <div className="specs_char">
        <div className="specs_char_block crew">
          <div className="specs_char_line head">
            <span className="name">Crew</span>
            <span className="value">{vehicle.crew} people</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function Maw(props: { vehicle: HelicopterProps }): JSX.Element | null {
  const { vehicle } = props;
  if (vehicle.has_maw) {
    return (
      <div className="feature maw">
        <div className="feature_img"></div>
        <div className="feature_name">
          <span title="Missile approach warning system" className="help">
            MAW
          </span>
        </div>
        <div className="feature_desc">
          Alerts when an incoming missile is detected, and automatically deploys{" "}
          <span
            title="Aircraft countermeasures to automatically distract IR and radar-guided missiles and also AA radar"
            className="help"
          >
            flares/chaff
          </span>
        </div>
      </div>
    );
  }
  return null;
}

function Hirss(props: { vehicle: HelicopterProps }): JSX.Element | null {
  const { vehicle } = props;
  if (vehicle.has_hirss) {
    return (
      <div className="feature hirss">
        <div className="feature_img"></div>
        <div className="feature_name">
          <span title="Hover IR Suppressor System" className="help">
            HIRSS
          </span>
        </div>
        <div className="feature_desc">
          Dissipates the flow of hot exhaust gases, reducing the likelihood of capture by
          IR-guidance missiles
        </div>
      </div>
    );
  }
  return null;
}

function Ircm(props: { vehicle: HelicopterProps }): JSX.Element | null {
  const { vehicle } = props;
  if (vehicle.has_ircm) {
    return (
      <div className="feature ircm">
        <div className="feature_img"></div>
        <div className="feature_name">
          <span title="Infrared countermeasure" className="help">
            IRCM
          </span>
        </div>
        <div className="feature_desc">Protects against IR-guided missiles</div>
      </div>
    );
  }
  return null;
}

function Rwr(props: { vehicle: HelicopterProps }): JSX.Element | null {
  const { vehicle } = props;
  if (vehicle.has_rwr) {
    return (
      <div className="feature lwr">
        <div className="feature_img"></div>
        <div className="feature_name">
          <span title="Radar warning receiver" className="help">
            RWR
          </span>
        </div>
        <div className="feature_desc">
          Notifies about the aircraft&apos;s exposure to radio waves
        </div>
      </div>
    );
  }
  return null;
}
