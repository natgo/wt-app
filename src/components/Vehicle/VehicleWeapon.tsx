import { GroundProps, TankCannon } from "@/types";

import { Stabilizer } from "./Stabilizer";

export function GroundWeapon(props: { vehicle: GroundProps }): JSX.Element {
  const { weapons } = props.vehicle;

  return (
    <div className="weapons">
      {weapons?.cannon?.map((element, index) => {
        let horizontalLimit = "";
        let verticalLimit = "";

        if (element.intname === "dummy_weapon") {
          return <Dummy key={index} cannon={element} />;
        }

        if (
          Array.isArray(element.horizonalLimit) &&
          element.horizonalLimit[0] + element.horizonalLimit[1] === 0 &&
          element.horizonalLimit[1] === 180
        ) {
          horizontalLimit = "360°";
        } else if (
          Array.isArray(element.horizonalLimit) &&
          element.horizonalLimit[0] + element.horizonalLimit[1] === 0
        ) {
          horizontalLimit = `±${element.horizonalLimit[1]}°`;
        } else {
          if (element.horizonalLimit === "primary") {
            horizontalLimit = element.horizonalLimit;
          }
          horizontalLimit = `${element.horizonalLimit[0]}°/+${element.horizonalLimit[1]}°`;
        }

        if (element.verticalLimit === "primary") {
          verticalLimit = element.verticalLimit;
        } else {
          verticalLimit = `${element.verticalLimit[0]}°/+${element.verticalLimit[1]}°`;
        }
        return (
          <div
            key={index}
            className="tablecontainer"
            style={{ gridTemplateColumns: "200px repeat(auto-fit, 180px)" }}
          >
            <div className="name">
              <div className="name">
                <span>{element.displayname}</span>
              </div>
            </div>
            <div className="ammo">
              <div className="name">
                <span>Ammo</span>
              </div>
              <div className="value">
                <span>{element.ammo}</span>
              </div>
            </div>
            <div className="targetingSpeed">
              <div className="names">
                <div className="upper">
                  <span>Targeting Speed (°/s)</span>
                </div>
                <div className="lower">
                  <div className="left">
                    <span>Horizontal</span>
                  </div>
                  <div className="right">
                    <span>Vertical</span>
                  </div>
                </div>
              </div>
              <div className="values">
                <div className="value">
                  <span>{element.horizonalSpeed}</span>
                </div>
                <div className="value">
                  <span>{element.verticalSpeed}</span>
                </div>
              </div>
            </div>
            <div className="targetingLimits">
              <div className="names">
                <div className="upper">
                  <span>Targeting Limits</span>
                </div>
                <div className="lower">
                  <div className="left">
                    <span>Horizontal</span>
                  </div>
                  <div className="right">
                    <span>Vertical</span>
                  </div>
                </div>
              </div>
              <div className="values">
                <div className="value">
                  <span>{horizontalLimit}</span>
                </div>
                <div className="value">
                  <span>{verticalLimit}</span>
                </div>
              </div>
            </div>
            <div className="stabilizer">
              <div className="name">
                <span>Stabilizer</span>
              </div>
              <div className="value">
                <Stabilizer weapon={element} />
              </div>
            </div>
            <Autoloader autoloader={element.autoloader} />
            <div className="reload">
              <div className="name">
                <span>Fire rate</span>
              </div>
              <div className="value">
                <span>{element.shotFreq.toPrecision(4)}/s</span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

function Autoloader(props: { autoloader: boolean | undefined }): JSX.Element | null {
  if (props.autoloader) {
    return (
      <div className="autoloader">
        <div className="name">
          <span>Autoloader</span>
        </div>
        <div className="value">
          <span>Yes</span>
        </div>
      </div>
    );
  } else {
    return null;
  }
}

function Dummy(props: { cannon: TankCannon }) {
  const { cannon } = props;

  let horizontalLimit = "";
  let verticalLimit = "";

  if (
    Array.isArray(cannon.horizonalLimit) &&
    cannon.horizonalLimit[0] + cannon.horizonalLimit[1] === 0 &&
    cannon.horizonalLimit[1] === 180
  ) {
    horizontalLimit = "360°";
  } else if (
    Array.isArray(cannon.horizonalLimit) &&
    cannon.horizonalLimit[0] + cannon.horizonalLimit[1] === 0
  ) {
    horizontalLimit = `±${cannon.horizonalLimit[1]}°`;
  } else {
    if (cannon.horizonalLimit === "primary") {
      horizontalLimit = cannon.horizonalLimit;
    }
    horizontalLimit = `${cannon.horizonalLimit[0]}°/+${cannon.horizonalLimit[1]}°`;
  }

  if (cannon.verticalLimit === "primary") {
    verticalLimit = cannon.verticalLimit;
  } else {
    verticalLimit = `${cannon.verticalLimit[0]}°/+${cannon.verticalLimit[1]}°`;
  }
  return (
    <div
      className="tablecontainer"
      style={{ gridTemplateColumns: "200px repeat(auto-fit, 180px)" }}
    >
      <div className="name">
        <div className="name">
          <span>Dummy weapon</span>
        </div>
      </div>
      <div className="targetingSpeed">
        <div className="names">
          <div className="upper">
            <span>Targeting Speed (°/s)</span>
          </div>
          <div className="lower">
            <div className="left">
              <span>Horizontal</span>
            </div>
            <div className="right">
              <span>Vertical</span>
            </div>
          </div>
        </div>
        <div className="values">
          <div className="value">
            <span>{cannon.horizonalSpeed}</span>
          </div>
          <div className="value">
            <span>{cannon.verticalSpeed}</span>
          </div>
        </div>
      </div>
      <div className="targetingLimits">
        <div className="names">
          <div className="upper">
            <span>Targeting Limits</span>
          </div>
          <div className="lower">
            <div className="left">
              <span>Horizontal</span>
            </div>
            <div className="right">
              <span>Vertical</span>
            </div>
          </div>
        </div>
        <div className="values">
          <div className="value">
            <span>{horizontalLimit}</span>
          </div>
          <div className="value">
            <span>{verticalLimit}</span>
          </div>
        </div>
      </div>
      <div className="stabilizer">
        <div className="name">
          <span>Stabilizer</span>
        </div>
        <div className="value">
          <Stabilizer weapon={cannon} />
        </div>
      </div>
    </div>
  );
}
