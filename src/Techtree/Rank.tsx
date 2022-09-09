export function Rank(props: { rank: "I" | "II" | "III" | "IV" | "V" | "VI" | "VII" }): JSX.Element {
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
          marginLeft: "-10em",
          marginRight: "-10em",
        }}
      >
        {rank} Rank
      </div>
    </th>
  );
}
