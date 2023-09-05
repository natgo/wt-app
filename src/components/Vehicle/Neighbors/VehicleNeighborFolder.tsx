import { Link } from "react-router-dom";
import { useRecoilValue } from "recoil";

import { VehicleProps } from "@data/final.schema";
import { FinalShopGroup, FinalShopItem } from "@data/shop.schema";

import { finalQuery } from "@/store/final";
import { queryVehicleIntname } from "@/utils/custom/queryVehicle";

export function VehicleNeighborFolder(props: {
  vehicle: VehicleProps;
  currentPos: FinalShopItem | FinalShopGroup;
  isFolder: boolean;
}) {
  const { vehicle, currentPos: folder, isFolder } = props;
  const final = useRecoilValue(finalQuery);

  if ("vehicles" in folder && isFolder) {
    const folderpos = folder.vehicles.findIndex((element) => element.name === vehicle.intname);

    const next =
      folder.vehicles[folderpos + 1] &&
      queryVehicleIntname(folder.vehicles[folderpos + 1].name, final);
    const prev =
      folder.vehicles[folderpos - 1] &&
      queryVehicleIntname(folder.vehicles[folderpos - 1].name, final);

    return (
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

  return null;
}
