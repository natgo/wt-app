import { GroundProps } from "../types";

export function Weapon(props: { vehicle: GroundProps }): JSX.Element {
  const { weapons } = props.vehicle;

  return (
    <div className="weapons">
      {weapons?.cannon?.map((element, index) => {
        let horizontalLimit = "";

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
          horizontalLimit = `${element.horizonalLimit[0]}°/+${element.horizonalLimit[1]}°`;
        }
        return (
          <div key={index} className="weaponcontainer">
            <div className="name">
              <span>{element.name}</span>
            </div>
            <div className="ammo">Ammo: {element.ammo}</div>
            <div className="targetingSpeed">
              <div>Targeting Speed (°/s)</div>
              <div>Horizonal: {element.horizonalSpeed}</div>
              <div>Vertical: {element.verticalSpeed}</div>
            </div>
            <div className="targetingLimits">
              <div>Targeting Limits</div>
              <div>Horizonal: {horizontalLimit}</div>
              <div>Vertical: {`${element.verticalLimit[0]}°/+${element.verticalLimit[1]}°`}</div>
            </div>
            <div className="stabilizer">
              <div>Stabilizer</div>
              <div>{JSON.stringify(element.stabilizer)}</div>
            </div>
            <div className="reload">
              <div>Reload</div>
              <div>{(1 / element.shotFreq).toPrecision(2)}s</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
