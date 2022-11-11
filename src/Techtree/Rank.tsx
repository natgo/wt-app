import { numRankToStr } from "../utils/numericRankToString";

export function Rank(props: { rank: number }): JSX.Element {
  const { rank } = props;
  return (
    <th
      style={{
        textAlign: "center",
        whiteSpace: "nowrap",
        verticalAlign: "middle",
        borderRight: "solid 1px #eeeeee",
        width: 32,
      }}
    >
      <div
        style={{
          transform: "rotate(-90deg)",
          marginLeft: "-1em",
          marginRight: "-1em",
        }}
      >
        {numRankToStr(rank)} Rank
      </div>
    </th>
  );
}
