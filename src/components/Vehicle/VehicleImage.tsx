import { FinalProps } from "@/types";

export function VehicleImage(props: { vehicle: FinalProps }): JSX.Element {
  const { vehicle } = props;

  return (
    <div className="specs_card_main_slider">
      <div className="image">
        <img
          alt={`GarageImage_${vehicle.wikiname}.jpg`}
          src={`https://natgo.xyz/files/wt/images/garageimages/File:GarageImage ${vehicle.wikiname}.jpg`}
          width="800"
          height="450"
          data-file-width="1920"
          data-file-height="1080"
        />
      </div>
    </div>
  );
}
