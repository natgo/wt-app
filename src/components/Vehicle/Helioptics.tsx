import { HelicopterOptics, HelicopterProps } from "@/types";

export function HeliOptics(props: { vehicle: HelicopterProps }) {
  const { optics } = props.vehicle;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  if (optics && optics.sight) {
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
                <span>
                  {optics.sight.zoomOutFov === -1
                    ? Math.round((73.66 / optics.sight.zoomInFov) * 10) / 10
                    : Math.round((73.66 / optics.sight.zoomOutFov) * 10) / 10}
                </span>
              </div>
              <div className="value">
                <span>{Math.round((73.66 / optics.sight.zoomInFov) * 10) / 10}</span>
              </div>
            </div>
          </div>
          <Thermal optics={optics} />
        </div>
      </div>
    );
  }

  return null;
}

function Thermal(props: { optics: HelicopterOptics }) {
  const { optics } = props;
  console.log(optics);
  if (optics.sight && optics.sight.thermal) {
    return (
      <div className="thermal">
        <div className="names">
          <div className="upper">
            <span>Thermal Imager</span>
          </div>
          <div className="lower">
            <div>
              <span>Resolution</span>
            </div>
          </div>
        </div>
        <div className="values">
          <div className="value">
            <span>{`${optics.sight.thermal.resolution[0]}x${optics.sight.thermal.resolution[1]}`}</span>
          </div>
        </div>
      </div>
    );
  } else if (optics.pilot && optics.pilot.ir) {
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
