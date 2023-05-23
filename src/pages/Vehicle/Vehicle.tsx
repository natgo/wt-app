import { Suspense } from "react";
import { useParams } from "react-router-dom";
import { useRecoilValue } from "recoil";

import Loading from "@/components/Loading";
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
    const match = queryVehicleIntname(params.vehicleId, final);

    if (match) {
      if (match.type === "army") {
        const wikiMatch = wiki.ground.find((value) => {
          return match.intname === value.intname;
        });
        return (
          <div>
            <Suspense fallback={<Loading />}>
              <SpecsCard vehicle={match} garageimage />
            </Suspense>
            <VehicleSkinsCard vehicle={match} />
            <Survivability vehicle={match} wiki={wikiMatch} />
            <Mobility vehicle={match} />
            <GroundWeapon vehicle={match} />
            <Optics vehicle={match} />
            <Modifications vehicle={match} />
          </div>
        );
      } else if (match.type === "aviation") {
        return (
          <div>
            <Suspense fallback={<Loading />}>
              <SpecsCard vehicle={match} garageimage />
            </Suspense>
            <VehicleSkinsCard vehicle={match} />
            <BallisticComputer vehicle={match} />
            <SecondaryPreset vehicle={match} />
            <Modifications vehicle={match} />
          </div>
        );
      } else if (match.type === "helicopters") {
        return (
          <div>
            <Suspense fallback={<Loading />}>
              <SpecsCard vehicle={match} garageimage />
            </Suspense>
            <VehicleSkinsCard vehicle={match} />
            <HeliSurvivability vehicle={match} />
            <BallisticComputer vehicle={match} />
            <SecondaryPreset vehicle={match} />
            <HeliOptics vehicle={match} />
            <Modifications vehicle={match} />
          </div>
        );
      } else if (match.type === "ship") {
        return (
          <div>
            <Suspense fallback={<Loading />}>
              <SpecsCard vehicle={match} garageimage />
            </Suspense>
            <VehicleSkinsCard vehicle={match} />
            <Modifications vehicle={match} />
          </div>
        );
      } else if (match.type === "boat") {
        return (
          <div>
            <Suspense fallback={<Loading />}>
              <SpecsCard vehicle={match} garageimage />
            </Suspense>
            <VehicleSkinsCard vehicle={match} />
            <Modifications vehicle={match} />
          </div>
        );
      }
    }
    return <b>No Match</b>;
  }
  return <b>Not a vehicle.</b>;
}
