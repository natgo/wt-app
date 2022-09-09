export function Arrow(props: { type: string }): JSX.Element {
  const { type } = props;
  if (type === "small") {
    return (
      <div
        className="tree-arrow"
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <img src="./images/Arrow-small.png" alt="Arrow.png" />
      </div>
    );
  } else {
    return (
      <div
        className="tree-arrow"
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <img src="./images/Arrow-small.png" alt="Arrow.png" />
      </div>
    );
  }
}
