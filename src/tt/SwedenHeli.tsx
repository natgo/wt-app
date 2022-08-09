import { openfolder } from ".";
import { Item_own, TechTreeImg, Item_prem } from "../TechTree";

export function SwedenHeli() {
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
                          <div className="tree-item-background" id="HKP3C">
                            <a href="/HKP3C" title="HKP3C">
                              <Item_own />
                            </a>
                          </div>
                          <div className="tree-item-text">
                            <span className="tree-item-text-scroll">HKP3C</span>
                          </div>
                          <TechTreeImg vehicle="hkp3c" type="helicopter" />
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
                          <div className="tree-item-background" id="HKP2">
                            <a href="/HKP2" title="HKP2">
                              <Item_own />
                            </a>
                          </div>
                          <div className="tree-item-text">
                            <span className="tree-item-text-scroll">HKP2</span>
                          </div>
                          <TechTreeImg vehicle="hkp2" type="helicopter" />
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
                          <div className="tree-item-background" id="HKP9A">
                            <a href="/HKP9A" title="HKP9A">
                              <Item_own />
                            </a>
                          </div>
                          <div className="tree-item-text">
                            <span className="tree-item-text-scroll">HKP9A</span>
                          </div>
                          <TechTreeImg vehicle="hkp9a_cb2" type="helicopter" />
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
                          <div className="tree-item-background" id="HKP9A (FC)">
                            <a href="/HKP9A_(FC)" title="HKP9A (FC)">
                              <Item_own />
                            </a>
                          </div>
                          <div className="tree-item-text">
                            <span className="tree-item-text-scroll">HKP9A (FC)</span>
                          </div>
                          <TechTreeImg vehicle="hkp9a_cb3_fc" type="helicopter" />
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
                          <div className="tree-item-background" id="AHS">
                            <a href="/AHS" title="AHS">
                              <Item_own />
                            </a>
                          </div>
                          <div className="tree-item-text">
                            <span className="tree-item-text-scroll">AHS</span>
                          </div>
                          <TechTreeImg vehicle="ahs" type="helicopter" />
                        </div>
                        <div
                          style={{
                            position: "relative",
                            width: 120,
                            height: 30,
                            margin: "auto",
                          }}
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
              <td style={{ borderLeft: "solid 1px #cccccc" }}>
                <div className="tree-item">
                  <div className="tree-item-background" id="Mi-28A">
                    <a href="/Mi-28A" title="Mi-28A">
                      <Item_prem />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">Mi-28A</span>
                  </div>
                  <TechTreeImg vehicle="mi_28a_sweden" type="helicopter" />
                </div>
              </td>
              <td />
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
