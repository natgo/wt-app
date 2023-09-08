import { Link } from "react-router-dom";
import { useRecoilValue } from "recoil";

import { VehicleProps } from "@data/final.schema";
import { FinalShopGroup, FinalShopItem } from "@data/shop.schema";

import { finalQuery } from "@/store/final";
import { queryVehicleIntname } from "@/utils/custom/queryVehicle";

export function VehicleNeighbors(props: {
  vehicle: VehicleProps;
  next: VehicleProps | undefined;
  nextPos: FinalShopItem | FinalShopGroup | undefined;
  prev: VehicleProps | undefined;
  currentpos: FinalShopItem | FinalShopGroup | undefined;
  isFolder: boolean;
}) {
  const { vehicle, next, nextPos, prev, currentpos, isFolder } = props;
  const final = useRecoilValue(finalQuery);

  let folder = null;

  if (currentpos && "vehicles" in currentpos && isFolder) {
    const folderpos = currentpos.vehicles.findIndex((element) => element.name === vehicle.intname);

    const nextVehicle = currentpos.vehicles[folderpos + 1];
    const next = nextVehicle && queryVehicleIntname(nextVehicle.name, final);

    const prevVehicle = currentpos.vehicles[folderpos - 1];
    const prev = prevVehicle && queryVehicleIntname(prevVehicle.name, final);

    folder = (
      <>
        {prev && (
          <div className="prev folder">
            <Link to={`../techtree/${prev.intname}`} title={prev.wikiname}>
              {prev.displayname}
            </Link>
          </div>
        )}
        {next && (
          <div className="next folder">
            <Link to={`../techtree/${next.intname}`} title={next.wikiname}>
              {next.displayname}
            </Link>
          </div>
        )}
      </>
    );
  }
  return (
    <>
      {prev && currentpos && currentpos.reqAir !== "" ? (
        <div className="prev">
          <Link to={`../techtree/${prev.intname}`} title={prev.wikiname}>
            {prev.displayname}
          </Link>
        </div>
      ) : null}
      {next && nextPos && nextPos.reqAir !== "" ? (
        <div className="next">
          <Link to={`../techtree/${next.intname}`} title={next.wikiname}>
            {next.displayname}
          </Link>
        </div>
      ) : null}
      {folder}
    </>
  );
}
