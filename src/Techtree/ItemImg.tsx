import own_img from "./assets/img/Item_own.png";
import prem_img from "./assets/img/Item_prem.png";
import squad_img from "./assets/img/Item_squad.png";


export function ItemImg(props: { type: "own" | "prem" | "squad"; }): JSX.Element {
  const { type } = props;
  let src = squad_img;
  switch (type) {
    case "own":
      src = own_img;
      break;
    case "prem":
      src = prem_img;
      break;
    case "squad":
      src = squad_img;
      break;
  }
  return (
    <img
      alt={`Item ${type}.png`}
      src={src}
      className="tree-item-js"
      data-file-width={160}
      data-file-height={48}
      width={160}
      height={48} />
  );
}
