
export function Research(props: { research: number; premium: number; }): JSX.Element {
  const { research, premium } = props;
  return (
    <tr>
      <th style={{ borderRight: "solid 1px #eeeeee" }} />
      <th colSpan={research} style={{ borderRight: "solid 1px #eeeeee" }}>
        <span>Researchable vehicles</span>
      </th>
      <th colSpan={premium}>
        <span>Premium vehicles</span>
      </th>
    </tr>
  );
}
