import { useRecoilValue } from "recoil";

import { VehiclePrice } from "./VehiclePrice";
import { Final } from "./atom";

export function SpecsCard(props: {
  intname: string;
  link?: string;
  type: string;
  text: string;
  item_type: "own" | "prem" | "squad";
}) {
  const { intname, link, type, text, item_type } = props;
  const FinalValue = useRecoilValue(Final);
  let extype: string | undefined = "kolmio";
  let ab_br: string | undefined = "-1.0";
  let rb_br: string | undefined = "-1.0";
  let sb_br: string | undefined = "-1.0";
  let country: string | undefined = "Viro";
  let rank: number | undefined = -1;
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
    country = match?.country;
    rank = match?.rank;
    prem = match?.prem_type;
    reqRP = match?.reqRP;
    reqSL = match?.sl_price;
    costGold = match?.cost_gold;
  }
  if (type === "ground") {
    const match = FinalValue.ground.find((curval) => {
      return curval.intname.toLowerCase() === intname;
    });
    ab_br = match?.ab_br;
    rb_br = match?.rb_br;
    sb_br = match?.sb_br;
    extype = match?.normal_type;
    country = match?.country;
    rank = match?.rank;
    prem = match?.prem_type;
    reqRP = match?.reqRP;
    reqSL = match?.sl_price;
    costGold = match?.cost_gold;
  }
  if (type === "helicopter") {
    const match = FinalValue.helicopter.find((curval) => {
      return curval.intname.toLowerCase() === intname;
    });
    ab_br = match?.ab_br;
    rb_br = match?.rb_br;
    sb_br = match?.sb_br;
    extype = match?.normal_type;
    country = match?.country;
    rank = match?.rank;
    prem = match?.prem_type;
    reqRP = match?.reqRP;
    reqSL = match?.sl_price;
    costGold = match?.cost_gold;
  }
  console.log(prem);
  const flag: string[] = [];
  const thumb_base = "https://wiki.warthunder.com/images/thumb/";
  switch (country) {
    case "country_usa":
      flag.push(
        thumb_base + "9/9f/USA_flag.png/45px-USA_flag.png",
        thumb_base + "9/9f/USA_flag.png/68px-USA_flag.png",
        thumb_base + "9/9f/USA_flag.png/90px-USA_flag.png",
      );
      break;
    case "country_italy":
      break;
    case "country_germany":
      break;
    case "country_ussr":
      break;
    case "country_britain":
      flag.push(
        thumb_base + "d/d0/Britain_flag.png/45px-Britain_flag.png",
        thumb_base + "d/d0/Britain_flag.png/68px-Britain_flag.png",
        thumb_base + "d/d0/Britain_flag.png/90px-Britain_flag.png",
      );
      break;
    case "country_france":
      break;
    case "country_china":
      break;
    case "country_sweden":
      break;
    case "country_israel":
      break;
    case "country_japan":
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
              href={`https://wiki.warthunder.com/Category:${
                country?.split("_")[1]
              }_ground_vehicles`}
              title={`Category:${country?.split("_")[1]} ground vehicles`}
            >
              <img
                alt={`${country?.split("_")[1]} flag.png`}
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
              href={`https://wiki.warthunder.com/Category:${
                country?.split("_")[1]
              }_ground_vehicles`}
              title={`Category:${country?.split("_")[1]} ground vehicles`}
            >
              {country?.split("_")[1]}
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
                {extype}
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
