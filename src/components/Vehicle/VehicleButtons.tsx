import { VehicleProps } from "@/types";

export function VehicleButtons(props: { vehicle: VehicleProps }) {
  const { marketplace, store } = props.vehicle;

  if (marketplace) {
    return (
      <div className="general_info_buttons_container">
        <div className="general_info_game_button" title="Show in game">
          <span>Show in game</span>
        </div>
        <div
          title="Buy"
          className="general_info_market_button"
          onClick={() => {
            window.open(`https://trade.gaijin.net/?n=${marketplace}&viewitem=&a=1067`);
          }}
        >
          <span>MARKET</span>
        </div>
      </div>
    );
  }
  if (store) {
    return (
      <div className="general_info_buttons_container">
        <div className="general_info_game_button" title="Show in game">
          <span>Show in game</span>
        </div>
        <div
          title="Buy"
          className="general_info_buy_button"
          onClick={() => {
            window.open(`https://store.gaijin.net/story.php?id=${store}`);
          }}
        >
          <span>STORE</span>
        </div>
      </div>
    );
  }

  return (
    <div className="general_info_buttons_container">
      <div className="general_info_game_button" title="Show in game">
        <span>Show in game</span>
      </div>
    </div>
  );
}
