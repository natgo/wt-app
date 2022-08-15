export function VehiclePrice(props: {
  intname: string;
  prem: string | undefined;
  reqRP: number | undefined;
  reqSL: number | undefined;
  costGold: number | undefined;
}) {
  const { prem, reqRP, reqSL, costGold } = props;

  if (prem === "false") {
    let rp = "Not Free";
    if (reqRP === undefined) {
      rp = "Free";
    } else {
      rp = reqRP.toString();
    }
    let sl = "Not Free";
    if (reqSL === undefined) {
      sl = "Free";
    } else {
      if (reqSL === 0) {
        sl = "Free";
      } else {
        sl = reqSL.toString();
      }
    }
    return (
      <div className="general_info_price">
        <div className="general_info_price_research">
          <span className="desc">Research:</span>
          <span className="value">{rp}</span>
        </div>
        <div className="general_info_price_buy">
          <span className="desc">Purchase:</span>
          <span className="value">{sl}</span>
        </div>
      </div>
    );
  } else {
    if (prem === "gold") {
      return (
        <div className="general_info_price">
          <div className="general_info_price_buy">
            <span className="desc">Purchase:</span>
            <span className="value">
              {costGold}
              <a href="/Golden_Eagles" title="Golden Eagles">
                <img
                  alt="Specs-Card-Eagle.png"
                  src="https://wiki.warthunder.com/images/f/f6/Specs-Card-Eagle.png"
                  width="24"
                  height="24"
                  data-file-width="24"
                  data-file-height="24"
                />
              </a>
            </span>
          </div>
        </div>
      );
    } else {
      return (
        <div className="general_info_price">
          <div className="general_info_price_buy" style={{ width: "100%" }}>
            <span className="desc">Purchase:</span>
            <span className="value small">
              <a href="/Category:Gift_ground_vehicles" title="Category:Gift ground vehicles">
                Bundle or Gift
              </a>
            </span>
          </div>
        </div>
      );
    }
  }
}
