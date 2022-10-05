export function Arrow(props: { length: number }): JSX.Element {
  const { length } = props;
  if (length === 0) {
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
  } else if (length === 0.5) {
    return (
      <div className="tree-arrow">
        <img src="./images/Arrow_center.png" alt="Arrow_center.png" />
        <img src="./images/Arrow_head.png" alt="Arrow_head.png" />
      </div>
    );
  } else if (length === 1) {
    return (
      <div className="tree-arrow">
        <img src="./images/Arrow_tail.png" alt="Arrow_tail.png" />
        <img src="./images/Arrow_center.png" alt="Arrow_center.png" />
        <img src="./images/Arrow_head.png" alt="Arrow_head.png" />
      </div>
    );
  } else if (length === 1.5) {
    return (
      <div className="tree-arrow">
        <img src="./images/Arrow_tail.png" alt="Arrow_tail.png" />
        <img src="./images/Arrow_center.png" alt="Arrow_center.png" />
        <img src="./images/Arrow_center.png" alt="Arrow_center.png" />
        <img src="./images/Arrow_head.png" alt="Arrow_head.png" />
      </div>
    );
  } else if (length === 2) {
    return (
      <div className="tree-arrow">
        <img src="./images/Arrow_tail.png" alt="Arrow_tail.png" />
        <img src="./images/Arrow_center.png" alt="Arrow_center.png" />
        <img src="./images/Arrow_center_small.png" alt="Arrow_center_small.png" />
        <img src="./images/Arrow_center.png" alt="Arrow_center.png" />
        <img src="./images/Arrow_head.png" alt="Arrow_head.png" />
      </div>
    );
  } else if (length === 2.5) {
    return (
      <div className="tree-arrow">
        <img src="./images/Arrow_tail.png" alt="Arrow_tail.png" />
        <img src="./images/Arrow_center.png" alt="Arrow_center.png" />
        <img src="./images/Arrow_center_small.png" alt="Arrow_center_small.png" />
        <img src="./images/Arrow_center.png" alt="Arrow_center.png" />
        <img src="./images/Arrow_center.png" alt="Arrow_center.png" />
        <img src="./images/Arrow_head.png" alt="Arrow_head.png" />
      </div>
    );
  } else if (length === 3) {
    return (
      <div className="tree-arrow">
        <img src="./images/Arrow_tail.png" alt="Arrow_tail.png" />
        <img src="./images/Arrow_center.png" alt="Arrow_center.png" />
        <img src="./images/Arrow_center_small.png" alt="Arrow_center_small.png" />
        <img src="./images/Arrow_center.png" alt="Arrow_center.png" />
        <img src="./images/Arrow_center_small.png" alt="Arrow_center_small.png" />
        <img src="./images/Arrow_center.png" alt="Arrow_center.png" />
        <img src="./images/Arrow_head.png" alt="Arrow_head.png" />
      </div>
    );
  } else if (length === 4) {
    return (
      <div className="tree-arrow">
        <img src="./images/Arrow_tail.png" alt="Arrow_tail.png" />
        <img src="./images/Arrow_center.png" alt="Arrow_center.png" />
        <img src="./images/Arrow_center_small.png" alt="Arrow_center_small.png" />
        <img src="./images/Arrow_center.png" alt="Arrow_center.png" />
        <img src="./images/Arrow_center_small.png" alt="Arrow_center_small.png" />
        <img src="./images/Arrow_center.png" alt="Arrow_center.png" />
        <img src="./images/Arrow_center_small.png" alt="Arrow_center_small.png" />
        <img src="./images/Arrow_center.png" alt="Arrow_center.png" />
        <img src="./images/Arrow_head.png" alt="Arrow_head.png" />
      </div>
    );
  } else if (length === 5) {
    return (
      <div className="tree-arrow">
        <img src="./images/Arrow_tail.png" alt="Arrow_tail.png" />
        <img src="./images/Arrow_center.png" alt="Arrow_center.png" />
        <img src="./images/Arrow_center_small.png" alt="Arrow_center_small.png" />
        <img src="./images/Arrow_center.png" alt="Arrow_center.png" />
        <img src="./images/Arrow_center_small.png" alt="Arrow_center_small.png" />
        <img src="./images/Arrow_center.png" alt="Arrow_center.png" />
        <img src="./images/Arrow_center_small.png" alt="Arrow_center_small.png" />
        <img src="./images/Arrow_center.png" alt="Arrow_center.png" />
        <img src="./images/Arrow_center_small.png" alt="Arrow_center_small.png" />
        <img src="./images/Arrow_center.png" alt="Arrow_center.png" />
        <img src="./images/Arrow_head.png" alt="Arrow_head.png" />
      </div>
    );
  } else if (length === 6) {
    return (
      <div className="tree-arrow">
        <img src="./images/Arrow_tail.png" alt="Arrow_tail.png" />
        <img src="./images/Arrow_center.png" alt="Arrow_center.png" />
        <img src="./images/Arrow_center_small.png" alt="Arrow_center_small.png" />
        <img src="./images/Arrow_center.png" alt="Arrow_center.png" />
        <img src="./images/Arrow_center_small.png" alt="Arrow_center_small.png" />
        <img src="./images/Arrow_center.png" alt="Arrow_center.png" />
        <img src="./images/Arrow_center_small.png" alt="Arrow_center_small.png" />
        <img src="./images/Arrow_center.png" alt="Arrow_center.png" />
        <img src="./images/Arrow_center_small.png" alt="Arrow_center_small.png" />
        <img src="./images/Arrow_center.png" alt="Arrow_center.png" />
        <img src="./images/Arrow_center_small.png" alt="Arrow_center_small.png" />
        <img src="./images/Arrow_center.png" alt="Arrow_center.png" />
        <img src="./images/Arrow_head.png" alt="Arrow_head.png" />
      </div>
    );
  } else {
    return <></>;
  }
}
