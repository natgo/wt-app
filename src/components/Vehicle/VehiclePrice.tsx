import { VehicleProps } from "@data/final.schema";

import rpImg from "@/assets/img/14px-Specs-Card-Exp.png";
import squadImg from "@/assets/img/23px-Specs-Card-Activity.png";
import geImg from "@/assets/img/Specs-Card-Eagle.png";
import slImg from "@/assets/img/Specs-Card-Lion.png";

export function VehiclePrice(props: { vehicle: VehicleProps }): JSX.Element {
  const { obtainFrom, reqRP, sl_price, cost_gold, squad, hidden, marketplace, store } =
    props.vehicle;

  let research = "Not Free";
  if (reqRP === undefined) {
    research = "Free";
  } else {
    research = reqRP.toLocaleString();
  }

  let purchase: string | number | undefined = "Not Free";
  if (sl_price === undefined || sl_price === 0) {
    purchase = "Free";
  } else {
    purchase = sl_price.toLocaleString();
  }

  let canResearch = false;
  let researchImgSrc: undefined | string = undefined;
  let purchaseImgSrc: undefined | string = undefined;
  switch (true) {
    case squad:
      researchImgSrc = squadImg;
      purchaseImgSrc = slImg;
      canResearch = true;
      break;
    case obtainFrom === "marketplace":
      purchase = "Marketplace";
      break;
    case obtainFrom === "store":
      purchase = "Store";
      break;
    case obtainFrom === "gift":
      purchase = "Gift";
      break;
    case obtainFrom === "gold":
      purchaseImgSrc = geImg;
      purchase = cost_gold?.toLocaleString();
      break;
    case sl_price === undefined || sl_price === 0:
      researchImgSrc = undefined;
      purchaseImgSrc = undefined;
      canResearch = false; // This is TRUE in wiki but you can't technically research it ingame
      break;
    case hidden:
      purchase = "Unobtainium";
      break;
    default:
      researchImgSrc = rpImg;
      purchaseImgSrc = slImg;
      canResearch = true;
      break;
  }

  return (
    <div className="grid grid-cols-2">
      {canResearch ? (
        <div className="general_info_price_research">
          <div className="desc">Research:</div>
          <div className="value grid grid-flow-col items-center justify-start gap-1">
            <span>{research}</span>
            {researchImgSrc ? <img src={researchImgSrc} /> : null}
          </div>
        </div>
      ) : null}

      <div className="general_info_price_buy">
        <div className="desc">Purchase:</div>
        <div className="value grid grid-flow-col items-center justify-start gap-1">
          <span>{purchase}</span>
          {purchaseImgSrc ? <img src={purchaseImgSrc} /> : null}
        </div>
      </div>
    </div>
  );
}
