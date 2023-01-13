import { GroundProps, Sight } from "@/types";

export function Optics(props: { vehicle: GroundProps }): JSX.Element {
  const { optics } = props.vehicle;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { gunner, commander, driver } = optics;

  return (
    <div className="optics">
      <div
        className="tablecontainer gunner"
        style={{ gridTemplateColumns: "200px repeat(auto-fit, 180px)" }}
      >
        <div className="zoom">
          <div className="names">
            <div className="upper">
              <span>Zoom</span>
            </div>
            <div className="lower">
              <div className="left">
                <span>Min</span>
              </div>
              <div className="right">
                <span>Max</span>
              </div>
            </div>
          </div>
          <div className="values">
            <div className="value">
              <span>{(74 / gunner.zoomOutFov).toPrecision(2)}</span>
            </div>
            <div className="value">
              <span>{(74 / gunner.zoomInFov).toPrecision(2)}</span>
            </div>
          </div>
        </div>
        <Thermal optics={gunner} />
        <Laser laser={props.vehicle.has_laser_range} />
      </div>
    </div>
  );
}

function Thermal(props: { optics: Sight }) {
  const { optics } = props;
  console.log(optics);
  if (optics.thermal) {
    let gen,
      gencolor = "";
    switch (optics.thermal.resolution[0]) {
      case 1200:
        gen = "3rd";
        gencolor = "limegreen";
        break;
      case 800:
        gen = "2nd";
        gencolor = "yellow";
        break;
      case 500:
        gen = "1st";
        gencolor = "orange";
        break;
    }
    return (
      <div className="thermal">
        <div className="names">
          <div className="upper">
            <span>Thermal Imager</span>
          </div>
          <div className="lower">
            <div className="left">
              <span>Resolution</span>
            </div>
            <div className="right">
              <span>Gen</span>
            </div>
          </div>
        </div>
        <div className="values">
          <div className="value">
            <span>{`${optics.thermal.resolution[0]}x${optics.thermal.resolution[1]}`}</span>
          </div>
          <div className="value" style={{ backgroundColor: gencolor }}>
            <span>{gen}</span>
          </div>
        </div>
      </div>
    );
  } else if (optics.ir) {
    return (
      <div className="ir">
        <div className="name">
          <span>Night Vision</span>
        </div>
        <div className="value">
          <span>Yes</span>
        </div>
      </div>
    );
  }
  return null;
}

function Laser(props: { laser: boolean | undefined }) {
  const { laser } = props;
  if (laser) {
    return (
      <div className="laser_range">
        <div className="name">
          <span>Laser Rangefinder</span>
        </div>
        <div className="value">
          <span>Yes</span>
        </div>
      </div>
    );
  }
  return null;
}
