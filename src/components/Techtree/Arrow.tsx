import { Fragment } from "react";

export function Arrow(props: { length: number; type: "short" | "long" }): JSX.Element {
  const { length, type } = props;

  if (type === "short") {
    if (length === 0) {
      return (
        <div className="tree-arrow">
          <img src="./images/Arrow-small.png" alt="Arrow.png" />
        </div>
      );
    }

    return (
      <div className="tree-arrow">
        <img src="./images/Arrow_tail.png" alt="Arrow_tail.png" />
        <img src="./images/Arrow_center.png" alt="Arrow_center.png" />
        <ShortArrow length={length} />
        <img src="./images/Arrow_head.png" alt="Arrow_head.png" />
      </div>
    );
  }

  if (type === "long") {
    if (length === 1) {
      return (
        <div className="tree-arrow">
          <img src="./images/Arrow_center.png" alt="Arrow_center.png" />
          <img src="./images/Arrow_head.png" alt="Arrow_head.png" />
        </div>
      );
    }

    return (
      <div className="tree-arrow">
        <img src="./images/Arrow_tail.png" alt="Arrow_tail.png" />
        <img src="./images/Arrow_center.png" alt="Arrow_center.png" />
        <ShortArrow length={length - 1} />
        <img src="./images/Arrow_center.png" alt="Arrow_center.png" />
        <img src="./images/Arrow_head.png" alt="Arrow_head.png" />
      </div>
    );
  }

  return <></>;
}

function ShortArrow(params: { length: number }) {
  const { length } = params;
  const array = [];
  for (let index = 1; index < length; index++) {
    array.push(
      <Fragment key={index}>
        <img src="./images/Arrow_center_small.png" alt="Arrow_center_small.png" />
        <img src="./images/Arrow_center.png" alt="Arrow_center.png" />
      </Fragment>,
    );
  }
  return <>{array}</>;
}
