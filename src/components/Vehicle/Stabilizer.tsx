import { TankCannon } from "@data/final.schema";

import { BlackTooltip } from "@/pages/Skins/Skins";

export function Stabilizer(props: { weapon: TankCannon }) {
  const { weapon } = props;
  if (weapon.stabilizer?.horizontal && weapon.stabilizer?.vertical) {
    return (
      <BlackTooltip placement="bottom" title={`Max Speed: ${weapon.stabilizer.verticalSpeed} km/h`}>
        <span style={{ borderBottom: "1px dotted", whiteSpace: "nowrap" }}>Dual-plane</span>
      </BlackTooltip>
    );
  }
  if (weapon.stabilizer?.vertical) {
    return (
      <BlackTooltip placement="bottom" title={`Max Speed: ${weapon.stabilizer.verticalSpeed} km/h`}>
        <span style={{ borderBottom: "1px dotted", whiteSpace: "nowrap" }}>Vertical</span>
      </BlackTooltip>
    );
  }
  if (weapon.stabilizer?.shoulderStop) {
    return (
      <BlackTooltip placement="bottom" title={`Max Speed: ${weapon.stabilizer.verticalSpeed} km/h`}>
        <span style={{ borderBottom: "1px dotted", whiteSpace: "nowrap" }}>Shoulder</span>
      </BlackTooltip>
    );
  }
  return <span>Negative</span>;
}
