import { Link } from "react-router-dom";

import { VehicleProps } from "@data/final.schema";
import { FinalShopGroup, FinalShopItem } from "@data/shop.schema";

export function VehicleNeighbors(props: {
  children: JSX.Element;
  next: VehicleProps | undefined;
  nextPos: FinalShopItem | FinalShopGroup | undefined;
  prev: VehicleProps | undefined;
  currentpos: FinalShopItem | FinalShopGroup | undefined;
}) {
  const { children, next, nextPos, prev, currentpos } = props;

  if (next && nextPos && nextPos.reqAir !== "" && prev && currentpos && currentpos.reqAir !== "") {
    return (
      <>
        <div className="prev">
          <Link to={`../techtree/${prev.intname}`} title={prev.wikiname}>
            {prev.displayname}
          </Link>
        </div>
        <div className="next">
          <Link to={`../techtree/${next.intname}`} title={next.wikiname}>
            {next.displayname}
          </Link>
        </div>
        {children}
      </>
    );
  }

  if (next && nextPos && nextPos.reqAir !== "") {
    return (
      <>
        <div className="next">
          <Link to={`../techtree/${next.intname}`} title={next.wikiname}>
            {next.displayname}
          </Link>
        </div>
        {children}
      </>
    );
  }

  if (prev && currentpos && currentpos.reqAir !== "") {
    return (
      <>
        <div className="prev">
          <Link to={`../techtree/${prev.intname}`} title={prev.wikiname}>
            {prev.displayname}
          </Link>
        </div>
        {children}
      </>
    );
  }

  return null;
}
