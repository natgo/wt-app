import { Check, Close } from "@mui/icons-material";

import { AircraftProps } from "@/types";

export function BallisticComputer(props: { vehicle: AircraftProps }): JSX.Element | null {
  const { vehicle } = props;

  if (vehicle.ballistic_computer) {
    return (
      <div className="tablecontainer" style={{ gridTemplateColumns: "500px" }}>
        <div>
          <div className="names">
            <div className="upper">
              <span>Ballistic Computer</span>
            </div>
            <div className="lower">
              <div>
                <span>CCIP (Guns)</span>
              </div>
              <div>
                <span>CCIP (Rockets)</span>
              </div>
              <div>
                <span>CCIP (Bombs)</span>
              </div>
              <div>
                <span>CCRP (Bombs)</span>
              </div>
            </div>
          </div>
          <div className="values">
            <div className="value">
              <span>
                {vehicle.ballistic_computer.ccip_guns ? (
                  <Check color="primary" />
                ) : (
                  <Close color="primary" />
                )}
              </span>
            </div>
            <div className="value">
              <span>
                {vehicle.ballistic_computer.ccip_rockets ? (
                  <Check color="primary" />
                ) : (
                  <Close color="primary" />
                )}
              </span>
            </div>
            <div className="value">
              <span>
                {vehicle.ballistic_computer.ccip_bombs ? (
                  <Check color="primary" />
                ) : (
                  <Close color="primary" />
                )}
              </span>
            </div>
            <div className="value">
              <span>
                {vehicle.ballistic_computer.ccrp_bombs ? (
                  <Check color="primary" />
                ) : (
                  <Close color="primary" />
                )}
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return null;
}
