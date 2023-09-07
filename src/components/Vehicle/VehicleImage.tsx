import { VehicleProps } from "@data/final.schema";

export function VehicleImage(props: { vehicle: VehicleProps }): JSX.Element {
  const { vehicle } = props;

  return (
    <div style={{
      position: "relative",
      height: "100%",
      padding: "10px",
      boxSizing: "border-box",
      border: "1px solid #d5dbdd",
      borderRadius: "5px",
      display: "inline-block",
    }}>
      <div className="image">
        <img
          alt={`GarageImage_${vehicle.intname}.jpg`}
          src={`https://natgo.xyz/files/wt/images/garageimages/${vehicle.intname}.jpg`}
          width="800"
          height="450"
          data-file-width="1920"
          data-file-height="1080"
        />
      </div>
    </div>
  );
}
