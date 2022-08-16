import { useRecoilValue } from "recoil";

import { VehiclePrice } from "./VehiclePrice";
import { Final } from "./atom";

export function SpecsCard(props: {
  intname: string;
  link?: string;
  type: string;
  item_type: "own" | "prem" | "squad";
}) {
  const { intname, link, type, item_type } = props;
  const FinalValue = useRecoilValue(Final);
  let extype: string | undefined = "kolmio";
  let ab_br: string | undefined = "-1.0";
  let rb_br: string | undefined = "-1.0";
  let sb_br: string | undefined = "-1.0";
  let country_code: string | undefined = "country_viro";
  let text: string | undefined = "Virolainen P-69";
  let rank_numeric: number | undefined = -1;
  let prem: string | undefined = "false";
  let reqRP: number | undefined = -1;
  let reqSL: number | undefined = -1;
  let costGold: number | undefined = -1;

  if (type === "aircraft") {
    const match = FinalValue.aircraft.find((curval) => {
      return curval.intname.toLowerCase() === intname;
    });
    ab_br = match?.ab_br;
    rb_br = match?.rb_br;
    sb_br = match?.sb_br;
    extype = match?.normal_type;
    country_code = match?.country;
    rank_numeric = match?.rank;
    prem = match?.prem_type;
    reqRP = match?.reqRP;
    reqSL = match?.sl_price;
    costGold = match?.cost_gold;
    text = match?.wikiname;
  }
  if (type === "ground") {
    const match = FinalValue.ground.find((curval) => {
      return curval.intname.toLowerCase() === intname;
    });
    ab_br = match?.ab_br;
    rb_br = match?.rb_br;
    sb_br = match?.sb_br;
    extype = match?.normal_type;
    country_code = match?.country;
    rank_numeric = match?.rank;
    prem = match?.prem_type;
    reqRP = match?.reqRP;
    reqSL = match?.sl_price;
    costGold = match?.cost_gold;
    text = match?.wikiname;
  }
  if (type === "helicopter") {
    const match = FinalValue.helicopter.find((curval) => {
      return curval.intname.toLowerCase() === intname;
    });
    ab_br = match?.ab_br;
    rb_br = match?.rb_br;
    sb_br = match?.sb_br;
    extype = match?.normal_type;
    country_code = match?.country;
    rank_numeric = match?.rank;
    prem = match?.prem_type;
    reqRP = match?.reqRP;
    reqSL = match?.sl_price;
    costGold = match?.cost_gold;
    text = match?.wikiname;
  }
  let vehicle_type = "Viron Paras";
  switch (extype) {
    case "type_tank_destroyer":
      vehicle_type = "Tank destroyer";
      break;
    case "type_light_tank":
      vehicle_type = "Light Tank";
      break;
    case "type_medium_tank":
      vehicle_type = "Medium tank";
      break;
    case "type_heavy_tank":
      vehicle_type = "Heavy tank";
      break;
    case "type_fighter":
      vehicle_type = "Fighter";
      break;
    case "type_bomber":
      vehicle_type = "Bomber";
      break;
    case "type_assault":
      vehicle_type = "Strike aircraft";
      break;
    case "type_attack_helicopter":
      vehicle_type = "Attack helicopter";
      break;
    case "type_utility_helicopter":
      vehicle_type = "Utility helicopter";
      break;
  }

  let rank = "IX";
  switch (rank_numeric) {
    case 1:
      rank = "I";
      break;
    case 2:
      rank = "II";
      break;
    case 3:
      rank = "II";
      break;
    case 4:
      rank = "IV";
      break;
    case 5:
      rank = "V";
      break;
    case 6:
      rank = "VI";
      break;
    case 7:
      rank = "VII";
      break;
  }
  console.log(prem);
  let country: string | undefined = "Viro";
  const flag: string[] = [];
  const thumb_base = "https://wiki.warthunder.com/images/thumb/";
  switch (country_code) {
    case "country_usa":
      country = "USA";
      flag.push(
        thumb_base + "9/9f/USA_flag.png/45px-USA_flag.png",
        thumb_base + "9/9f/USA_flag.png/68px-USA_flag.png",
        thumb_base + "9/9f/USA_flag.png/90px-USA_flag.png",
      );
      break;
    case "country_italy":
      country = "Italy";
      flag.push(
        thumb_base + "e/e9/Italy_flag.png/45px-Italy_flag.png",
        thumb_base + "e/e9/Italy_flag.png/68px-Italy_flag.png",
        thumb_base + "e/e9/Italy_flag.png/90px-Italy_flag.png",
      );
      break;
    case "country_germany":
      country = "Germany";
      flag.push(
        thumb_base + "4/49/Germany_flag.png/45px-Germany_flag.png",
        thumb_base + "4/49/Germany_flag.png/68px-Germany_flag.png",
        thumb_base + "4/49/Germany_flag.png/90px-Germany_flag.png",
      );
      break;
    case "country_ussr":
      country = "USSR";
      flag.push(
        thumb_base + "f/f9/USSR_flag.png/45px-USSR_flag.png",
        thumb_base + "f/f9/USSR_flag.png/68px-USSR_flag.png",
        thumb_base + "f/f9/USSR_flag.png/90px-USSR_flag.png",
      );
      break;
    case "country_britain":
      country = "Britain";
      flag.push(
        thumb_base + "d/d0/Britain_flag.png/45px-Britain_flag.png",
        thumb_base + "d/d0/Britain_flag.png/68px-Britain_flag.png",
        thumb_base + "d/d0/Britain_flag.png/90px-Britain_flag.png",
      );
      break;
    case "country_france":
      flag.push(
        thumb_base + "7/73/France_flag.png/45px-France_flag.png",
        thumb_base + "7/73/France_flag.png/68px-France_flag.png",
        thumb_base + "7/73/France_flag.png/90px-France_flag.png",
      );
      break;
    case "country_china":
      country = "China";
      flag.push(
        thumb_base + "a/ac/China_flag.png/45px-China_flag.png",
        thumb_base + "a/ac/China_flag.png/68px-China_flag.png",
        thumb_base + "a/ac/China_flag.png/90px-China_flag.png",
      );
      break;
    case "country_sweden":
      country = "Sweden";
      flag.push(
        thumb_base + "c/ca/Sweden_flag.png/45px-Sweden_flag.png",
        thumb_base + "c/ca/Sweden_flag.png/68px-Sweden_flag.png",
        thumb_base + "c/ca/Sweden_flag.png/90px-Sweden_flag.png",
      );
      break;
    case "country_israel":
      country = "Israel";
      flag.push(
        thumb_base + "f/f9/Israel_flag.png/45px-Israel_flag.png",
        thumb_base + "f/f9/Israel_flag.png/68px-Israel_flag.png",
        thumb_base + "f/f9/Israel_flag.png/90px-Israel_flag.png",
      );
      break;
    case "country_japan":
      country = "Japan";
      flag.push(
        thumb_base + "2/2e/Japan_flag.png/45px-Japan_flag.png",
        thumb_base + "2/2e/Sweden_flag.png/68px-Japan_flag.png",
        thumb_base + "2/2e/Sweden_flag.png/90px-Japan_flag.png",
      );
      break;
  }
  console.log(costGold);
  return (
    <div className="specs_card_main" data-code={intname}>
      <div className="specs_card_mobile_info">
        <div className="general_info_name">{text}</div>
        <div className="general_info_neighbors"></div>
      </div>
      <div className="specs_card_main_slider">
        <div className="specs_card_main_slider_container"></div>
        <div className="specs_card_main_slider_system">
          <div>
            <img
              src={`https://encyclopedia.warthunder.com/images/${intname}.png`}
              alt={`${intname}.png`}
            />
          </div>
          <div>
            <a href={`/File:GarageImage_${link}.jpg`} className="image">
              <img
                alt={`GarageImage_${link}.jpg`}
                src={`${thumb_base}f/f8/GarageImage_${link}.jpg/800px-GarageImage_${link}.jpg`}
                width="800"
                height="450"
                srcSet={`
                ${thumb_base}f/f8/GarageImage_${link}.jpg/1200px-GarageImage_${link}.jpg 1.5x,
                ${thumb_base}f/f8/GarageImage_${link}.jpg/1600px-GarageImage_${link}.jpg 2x
                `}
                data-file-width="1920"
                data-file-height="1080"
              />
            </a>
          </div>
        </div>
      </div>
      <div className="specs_card_main_info">
        <div className="general_info_name">{text}</div>
        <div className="general_info_neighbors"></div>
        <div className="general_info">
          <div className="general_info_nation">
            <a
              href={`https://wiki.warthunder.com/Category:${country}_ground_vehicles`}
              title={`Category:${country} ground vehicles`}
            >
              <img
                alt={`${country} flag.png`}
                src={flag[0]}
                width="45"
                height="23"
                srcSet="
                https://wiki.warthunder.com/images/thumb/9/9f/USA_flag.png/68px-USA_flag.png 1.5x,
                https://wiki.warthunder.com/images/thumb/9/9f/USA_flag.png/90px-USA_flag.png 2x
              "
                data-file-width="200"
                data-file-height="104"
              />
            </a>
            <a
              href={`https://wiki.warthunder.com/Category:${country}_ground_vehicles`}
              title={`Category:${country} ground vehicles`}
            >
              {country}
            </a>
          </div>
          <div className="general_info_rank">
            <a
              href="/Category:Third_rank_ground_vehicles"
              title="Category:Third rank ground vehicles"
            >
              {rank} Rank
            </a>
          </div>
        </div>
        <div className="general_info_2">
          <div className="general_info_br">
            <div className="desc">
              <a href="/Battle_ratings" title="Battle ratings">
                Battle rating
              </a>
              :
            </div>
            <table rules="all">
              <tr>
                <td>
                  <a href="/Arcade_Battles" className="mw-redirect" title="Arcade Battles">
                    AB
                  </a>
                </td>
                <td>
                  <a href="/Realistic_Battles" className="mw-redirect" title="Realistic Battles">
                    RB
                  </a>
                </td>
                <td>
                  <a href="/Simulator_Battles" className="mw-redirect" title="Simulator Battles">
                    SB
                  </a>
                </td>
              </tr>
              <tr>
                <td>{ab_br}</td>
                <td>{rb_br}</td>
                <td>{sb_br}</td>
              </tr>
            </table>
          </div>
          <div className="general_info_class">
            <span className="desc">Class:</span>
            <div>
              <a href="/Category:Tank_destroyers" title="Category:Tank destroyers">
                {vehicle_type}
              </a>
            </div>
          </div>
        </div>
        <VehiclePrice
          intname={intname}
          prem={prem}
          reqRP={reqRP}
          reqSL={reqSL}
          costGold={costGold}
        />
        <div className="general_info_buttons">
          <div className="general_info_buttons_container">
            <div className="general_info_game_button" title="Show in game">
              <span>Show in game</span>
            </div>
          </div>
        </div>
        <div className="general_info_message"></div>
      </div>
    </div>
  );
}
