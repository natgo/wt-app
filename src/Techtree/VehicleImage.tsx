import { FinalProps } from "../types";

export function VehicleImage(props: {
  vehicle: FinalProps;
  link: string | undefined;
}): JSX.Element {
  const { vehicle, link } = props;

  const thumb_base = "https://wiki.warthunder.com/images/thumb/";
  return (
    <div className="specs_card_main_slider">
      <div className="image">
        <img
          alt={`GarageImage_${link?.replace("+","_")}.jpg`}
          src={`${thumb_base}f/f8/GarageImage_${link?.replace("+","_")}.jpg/800px-GarageImage_${link?.replace("+","_")}.jpg`}
          width="800"
          height="450"
          srcSet={`
            ${thumb_base}f/f8/GarageImage_${link?.replace("+","_")}.jpg/1200px-GarageImage_${link?.replace("+","_")}.jpg 1.5x,
            ${thumb_base}f/f8/GarageImage_${link?.replace("+","_")}.jpg/1600px-GarageImage_${link?.replace("+","_")}.jpg 2x
          `}
          data-file-width="1920"
          data-file-height="1080"
        />
      </div>
    </div>
  );
}
