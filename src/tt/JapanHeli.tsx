import { openfolder } from ".";
import { Item_own, TechTreeImg, Item_prem } from "../TechTree";

export function JapanHeli() {
  return (
    <div className="mw-parser-output">
      <div className="tree">
        <table rules="rows" width="100%">
          <tbody>
            <tr>
              <th style={{ borderRight: "solid 1px #eeeeee" }} />
              <th colSpan={1} style={{ borderRight: "solid 1px #eeeeee" }}>
                <span>Researchable vehicles</span>
              </th>
              <th colSpan={2}>
                <span>Premium vehicles</span>
              </th>
            </tr>
            <tr>
              <td colSpan={4} style={{ padding: 1, textAlign: "center" }}>
                <p>
                  <span style={{ color: "#cccccc" }}>
                    Helicopters become available for research and purchase only with the ownership
                    of at least one Rank 5 vehicle of the corresponding nation
                  </span>
                </p>
              </td>
            </tr>
            <tr>
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
                  V Rank
                </div>
              </th>
              <td style={{ width: 400, paddingLeft: "20%" }}>
                <table style={{ margin: 0, marginTop: "-7px" }} cellSpacing={0}>
                  <tbody>
                    <tr>
                      <td>
                        <div className="tree-item">
                          <div className="tree-item-background" id="UH-1B (Japan)">
                            <a href="/UH-1B_(Japan)" title="UH-1B (Japan)">
                              <Item_own />
                            </a>
                          </div>
                          <div className="tree-item-text">
                            <span className="tree-item-text-scroll">▅UH-1B</span>
                          </div>
                          <TechTreeImg vehicle="uh_1b_japan" type="helicopter" />
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="tree-arrow">
                          <img src="/images/Arrow-small.png" alt="Arrow.png" />
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
              <td style={{ borderLeft: "solid 1px #cccccc" }} />
              <td />
            </tr>
            <tr>
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
                  VI Rank
                </div>
              </th>
              <td style={{ width: 400, paddingLeft: "20%" }}>
                <table style={{ margin: 0, marginTop: "-7px" }} cellSpacing={0}>
                  <tbody>
                    <tr>
                      <td>
                        <div className="tree-item">
                          <div className="tree-item-background" id="AH-1S early">
                            <a href="/AH-1S_early" title="AH-1S early">
                              <Item_own />
                            </a>
                          </div>
                          <div className="tree-item-text">
                            <span className="tree-item-text-scroll">AH-1S early</span>
                          </div>
                          <TechTreeImg vehicle="ah_1s_early" type="helicopter" />
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="tree-arrow">
                          <img src="/images/Arrow-small.png" alt="Arrow.png" />
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="tree-item">
                          <div className="tree-item-background" id="AH-1S">
                            <a href="/AH-1S" title="AH-1S">
                              <Item_own />
                            </a>
                          </div>
                          <div className="tree-item-text">
                            <span className="tree-item-text-scroll">AH-1S</span>
                          </div>
                          <TechTreeImg vehicle="ah_1s_late" type="helicopter" />
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="tree-arrow">
                          <img src="/images/Arrow-small.png" alt="Arrow.png" />
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
              <td style={{ borderLeft: "solid 1px #cccccc" }}>
                <div className="tree-item">
                  <div className="tree-item-background" id="AH-1S Kisarazu">
                    <a href="/AH-1S_Kisarazu" title="AH-1S Kisarazu">
                      <Item_prem />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">AH-1S Kisarazu</span>
                  </div>
                  <TechTreeImg vehicle="ah_1s" type="helicopter" />
                </div>
              </td>
              <td />
            </tr>
            <tr>
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
                  VII Rank
                </div>
              </th>
              <td style={{ width: 400, paddingLeft: "20%" }}>
                <table style={{ margin: 0, marginTop: "-7px" }} cellSpacing={0}>
                  <tbody>
                    <tr>
                      <td>
                        <div className="tree-item">
                          <div className="tree-item-background" id="AH-64DJP">
                            <a href="/AH-64DJP" title="AH-64DJP">
                              <Item_own />
                            </a>
                          </div>
                          <div className="tree-item-text">
                            <span className="tree-item-text-scroll">AH-64DJP</span>
                          </div>
                          <TechTreeImg vehicle="ah_64d_japan" type="helicopter" />
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <div
                  style={{
                    position: "relative",
                    width: 120,
                    height: 30,
                    margin: "auto",
                  }}
                />
              </td>
              <td style={{ borderLeft: "solid 1px #cccccc" }} />
              <td />
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
