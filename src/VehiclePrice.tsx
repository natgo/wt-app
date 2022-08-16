export function VehiclePrice(props: {
  intname: string;
  prem: string | undefined;
  reqRP: number | undefined;
  reqSL: number | undefined;
  costGold: number | undefined;
  hidden: boolean | undefined;
}): JSX.Element {
  const { prem, reqRP, reqSL, costGold, hidden } = props;
  let rp = "Not Free";
  if (reqRP === undefined) {
    rp = "Free";
  } else {
    rp = reqRP.toLocaleString();
  }
  let sl = "Not Free";
  if (reqSL === undefined) {
    sl = "Free";
  } else {
    if (reqSL === 0) {
      sl = "Free";
    } else {
      sl = reqSL.toLocaleString();
    }
  }
  if (prem === "false" && hidden === false) {
    if (sl === "Free") {
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
      return (
        <div className="general_info_price">
          <div className="general_info_price_research">
            <span className="desc">Research:</span>
            <span className="value">
              {rp}
              <a href="/Research_Points" title="Research Points">
                <img
                  alt="Specs-Card-Exp.png"
                  src="https://wiki.warthunder.com/images/thumb/4/4f/Specs-Card-Exp.png/14px-Specs-Card-Exp.png"
                  width="14"
                  height="22"
                  srcSet="/images/4/4f/Specs-Card-Exp.png 1.5x"
                  data-file-width="16"
                  data-file-height="25"
                />
              </a>
            </span>
          </div>
          <div className="general_info_price_buy">
            <span className="desc">Purchase:</span>
            <span className="value">
              {sl}
              <a href="/Silver_Lions" title="Silver Lions">
                <img
                  alt="Specs-Card-Lion.png"
                  src="https://wiki.warthunder.com/images/c/c1/Specs-Card-Lion.png"
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
    }
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
      if (prem === "event" || (prem === "false" && hidden === true) || prem === "store") {
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
      } else {
        return (
          <div className="general_info_price">
            <div className="general_info_price_research">
              <span className="desc">Research:</span>
              <span className="value">
                {rp}
                <a href="/Research_Points" title="Research Points">
                  <img
                    alt="Specs-Card-Activity.png"
                    src="https://wiki.warthunder.com/images/thumb/5/56/Specs-Card-Activity.png/23px-Specs-Card-Activity.png"
                    width="23"
                    height="23"
                    srcSet="/images/5/56/Specs-Card-Activity.png 1.5x"
                    data-file-width="25"
                    data-file-height="25"
                  />
                </a>
              </span>
            </div>
            <div className="general_info_price_buy">
              <span className="desc">Purchase:</span>
              <span className="value">
                {sl}
                <a href="/Silver_Lions" title="Silver Lions">
                  <img
                    alt="Specs-Card-Lion.png"
                    src="https://wiki.warthunder.com/images/c/c1/Specs-Card-Lion.png"
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
      }
    }
  }
}
