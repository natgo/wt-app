import { GroundProps } from "../types";

export function Weapon(props: { vehicle: GroundProps }): JSX.Element {
  const { weapons } = props.vehicle;

  return (
    <div className="weapons">
      {weapons?.cannon?.map((element, index) => {
        let horizontalLimit = "";
        let verticalLimit = "";

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
          <div key={index} className="tablecontainer">
            <div className="name">
              <div className="name">
                <span>{element.name}</span>
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
                <span>{element.stabilizer ? JSON.stringify(element.stabilizer) : "Negative"}</span>
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
