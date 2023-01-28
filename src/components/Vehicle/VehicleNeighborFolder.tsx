import { Link } from "react-router-dom";
import { useRecoilValue } from "recoil";

import { finalQuery } from "@/store/final";
import { FinalShopGroup, FinalShopItem, VehicleProps } from "@/types";
import { queryVehicleIntname } from "@/utils/custom/queryVehicle";

export function VehicleNeighborFolder(props: {
  vehicle: VehicleProps;
  folder: FinalShopItem | FinalShopGroup;
  isFolder: boolean;
}) {
  const { vehicle, folder, isFolder } = props;
  const final = useRecoilValue(finalQuery);

  if ("vehicles" in folder && isFolder) {
    const folderpos = folder.vehicles.findIndex((element) => {
      return element.name === vehicle.intname;
    });
    if (folderpos === 0) {
      const next = queryVehicleIntname(folder.vehicles[1].name, final);
      if (next) {
        return (
          <>
            <div className="next folder">
              <Link to={`../techtree/${next.intname}`} title={next.wikiname}>
                {next.displayname}
              </Link>
            </div>
          </>
        );
      }
    }
    if (folderpos < folder.vehicles.length - 1) {
      const next = queryVehicleIntname(folder.vehicles[folderpos + 1].name, final);
      const prev = queryVehicleIntname(folder.vehicles[folderpos - 1].name, final);
      if (next && prev) {
        return (
          <>
            <div className="prev folder">
              <Link to={`../techtree/${prev.intname}`} title={prev.wikiname}>
                {prev.displayname}
              </Link>
            </div>
            <div className="next folder">
              <Link to={`../techtree/${next.intname}`} title={next.wikiname}>
                {next.displayname}
              </Link>
            </div>
          </>
        );
      }
    }
    if (folderpos === folder.vehicles.length - 1) {
      const prev = queryVehicleIntname(folder.vehicles[folderpos - 1].name, final);
      if (prev) {
        return (
          <>
            <div className="prev folder">
              <Link to={`../techtree/${prev.intname}`} title={prev.wikiname}>
                {prev.displayname}
              </Link>
            </div>
          </>
        );
      }
    }
  }
  return null;
}
