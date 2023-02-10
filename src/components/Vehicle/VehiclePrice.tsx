import rpImg from "@/assets/img/14px-Specs-Card-Exp.png";
import squadImg from "@/assets/img/23px-Specs-Card-Activity.png";
import geImg from "@/assets/img/Specs-Card-Eagle.png";
import slImg from "@/assets/img/Specs-Card-Lion.png";
import { VehicleProps } from "@/types";

export function VehiclePrice(props: { vehicle: VehicleProps }): JSX.Element {
  const { prem_type, reqRP, sl_price, cost_gold, hidden, marketplace } = props.vehicle;
  console.log(props);
  let rp = "Not Free";
  if (reqRP === undefined) {
    rp = "Free";
  } else {
    rp = reqRP.toLocaleString();
  }
  let sl = "Not Free";
  if (sl_price === undefined) {
    sl = "Free";
  } else if (sl_price === 0) {
    sl = "Free";
  } else {
    sl = sl_price.toLocaleString();
  }

  if (prem_type === "false" && hidden === undefined) {
    if (sl === "Free") {
      return (
        <div className="grid grid-cols-2">
          <div className="general_info_price_research">
            <div className="desc">Research:</div>
            <div className="value">{rp}</div>
          </div>
          <div className="general_info_price_buy">
            <div className="desc">Purchase:</div>
            <div className="value">{sl}</div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="grid grid-cols-2">
          <div className="general_info_price_research">
            <div className="desc">Research:</div>
            <div className="value grid grid-flow-col items-center justify-start">
              <span>{rp}</span>
              <img alt="Specs-Card-Exp.png" src={rpImg} />
            </div>
          </div>
          <div className="general_info_price_buy">
            <div className="desc">Purchase:</div>
            <div className="value grid grid-flow-col items-center justify-start">
              <span>{sl}</span>
              <img alt="Specs-Card-Lion.png" src={slImg} />
            </div>
          </div>
        </div>
      );
    }
  } else {
    if (prem_type === "gold") {
      return (
        <div className="grid grid-cols-2">
          <div className="general_info_price_buy">
            <div className="desc">Purchase:</div>
            <div className="value grid grid-flow-col items-center justify-start">
              <span>{cost_gold}</span>
              <img alt="Specs-Card-Eagle.png" src={geImg} />
            </div>
          </div>
        </div>
      );
    } else {
      if (
        prem_type === "event" ||
        prem_type === "marketplace" ||
        (prem_type === "false" && hidden === true) ||
        prem_type === "store"
      ) {
        let text = "Bundle or Gift";
        if (prem_type === "store") {
          text = "Store";
        }
        if (marketplace) {
          text = "Marketplace";
        }
        return (
          <div className="grid grid-cols-2">
            <div className="general_info_price_buy">
              <div className="desc">Purchase:</div>
              <div className="value small">{text}</div>
            </div>
          </div>
        );
      } else {
        return (
          <div className="grid grid-cols-2">
            <div className="general_info_price_research">
              <div className="desc">Research:</div>
              <div className="value grid grid-flow-col items-center justify-start">
                <span>{rp}</span>
                <img alt="Specs-Card-Activity.png" src={squadImg} />
              </div>
            </div>
            <div className="general_info_price_buy">
              <div className="desc">Purchase:</div>
              <div className="value grid grid-flow-col items-center justify-start">
                <span>{sl}</span>
                <img alt="Specs-Card-Lion.png" src={slImg} />
              </div>
            </div>
          </div>
        );
      }
    }
  }
}
