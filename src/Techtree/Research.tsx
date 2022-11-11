export function Research(props: { research: number; max: number }): JSX.Element {
  const { research, max } = props;
  return (
    <tr>
      <th style={{ borderRight: "solid 1px #eeeeee" }} />
      <th colSpan={research} style={{ borderRight: "solid 1px #eeeeee" }}>
        <span>Researchable vehicles</span>
      </th>
      <th colSpan={max - research}>
        <span>Premium vehicles</span>
      </th>
    </tr>
  );
}
