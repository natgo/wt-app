export function EmptyDiv(props: { size: number }): JSX.Element {
  const { size } = props;
  return (
    <div
      style={{
        position: "relative",
        width: 160,
        height: size,
        margin: "auto",
      }}
    />
  );
}
