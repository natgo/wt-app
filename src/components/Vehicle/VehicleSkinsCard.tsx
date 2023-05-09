import { VehicleProps } from "@data/final.schema";

import { ToolTip } from "@/components/Skins/ToolTip";
import { querySkins } from "@/utils/custom/querySkins";

export function VehicleSkinsCard(props: { vehicle: VehicleProps }): JSX.Element | null {
  const { vehicle } = props;
  const vehicleSkins = querySkins(vehicle);

  if (vehicleSkins.historical.length > 0 || vehicleSkins.fictional.length > 0) {
    return (
      <div className="skins" data-code={vehicle.intname}>
        <div className="specs_card">
          <div className="general_info_title">
            Skins for {vehicle.displayname ? vehicle.displayname : vehicle.intname}
          </div>
          {vehicleSkins.historical.length > 0 ? (
            <>
              <div className="general_info_title">Historical</div>
              <div className="general_info_skins">
                {vehicleSkins.historical.map((element) => {
                  return <ToolTip value={element} key={element.post} />;
                })}
              </div>
            </>
          ) : null}
          {vehicleSkins.fictional.length > 0 ? (
            <>
              <div className="general_info_title">Fictional</div>
              <div className="general_info_skins">
                {vehicleSkins.fictional.map((element) => {
                  return <ToolTip value={element} key={element.post} />;
                })}
              </div>
            </>
          ) : null}
        </div>
      </div>
    );
  } else {
    return null;
  }
}
