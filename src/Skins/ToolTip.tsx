import { BlackTooltip } from "./Skins";
import { ToolTipText } from "./ToolTipText";
import { ToolTipProp } from "./types";

export function ToolTip(props: ToolTipProp): JSX.Element {
  const { value } = props;

  return (
    <BlackTooltip title={ToolTipText(value)}>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href={
          value.repack
            ? "https://natgo.xyz/files/wt/" + value.post
            : "https://live.warthunder.com/post/" + value.post
        }
        className="vehicle"
      >
        <span style={{ backgroundColor: value.type ? "pink" : "auto" }}>{value.dislayname}</span>
      </a>
    </BlackTooltip>
  );
}
