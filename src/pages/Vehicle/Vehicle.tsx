import { useParams } from "react-router-dom";
import { useRecoilValue } from "recoil";

import { BallisticComputer } from "@/components/Vehicle/BallisticComputer";
import { HeliSurvivability } from "@/components/Vehicle/HelicopterItem";
import { HeliOptics } from "@/components/Vehicle/Helioptics";
import { Modifications } from "@/components/Vehicle/Modifications";
import { SecondaryPreset } from "@/components/Vehicle/SecondaryPreset";
import { Mobility, SpecsCard, Survivability } from "@/components/Vehicle/VehicleItem";
import { Optics } from "@/components/Vehicle/VehicleOptics";
import { VehicleSkinsCard } from "@/components/Vehicle/VehicleSkinsCard";
import { GroundWeapon } from "@/components/Vehicle/VehicleWeapon";
import { finalQuery } from "@/store/final";
import { WikiState } from "@/store/wiki";
import { queryVehicleIntname } from "@/utils/custom/queryVehicle";

import "../Techtree/App.css";

export default function Vehicle(): JSX.Element {
  const params = useParams();
  const final = useRecoilValue(finalQuery);
  const wiki = useRecoilValue(WikiState);

  if (params.vehicleId) {
    console.log(params.vehicleId);
    const match = queryVehicleIntname(params.vehicleId, final);
    console.log(match);
    if (match) {
      if (match.type === "ground") {
        const wikiMatch = wiki.ground.find((value) => {
          return match.intname === value.intname;
        });
        return (
          <div>
            <SpecsCard vehicle={match} garageimage />
            <VehicleSkinsCard vehicle={match} />
            <Survivability vehicle={match} wiki={wikiMatch} />
            <Mobility vehicle={match} wiki={wikiMatch} />
            <GroundWeapon vehicle={match} />
            <Optics vehicle={match} />
            <Modifications vehicle={match} />
          </div>
        );
      } else if (match.type === "aircraft") {
        return (
          <div>
            <SpecsCard vehicle={match} garageimage />
            <VehicleSkinsCard vehicle={match} />
            <BallisticComputer vehicle={match} />
            <SecondaryPreset vehicle={match} />
            <Modifications vehicle={match} />
          </div>
        );
      } else {
        return (
          <div>
            <SpecsCard vehicle={match} garageimage />
            <VehicleSkinsCard vehicle={match} />
            <HeliSurvivability vehicle={match} />
            <BallisticComputer vehicle={match} />
            <SecondaryPreset vehicle={match} />
            <HeliOptics vehicle={match} />
            <Modifications vehicle={match} />
          </div>
        );
      }
    } else {
      return <b>No Match</b>;
    }
  } else {
    return <b>Not a vehicle.</b>;
  }
}
