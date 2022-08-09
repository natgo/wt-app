import { openfolder } from ".";
import { Item_own, TechTreeImg, Item_prem, Item_squad } from "../TechTree";

export function USAHeli() {
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
              <td style={{ width: 500, paddingLeft: "18%" }}>
                <table style={{ margin: 0, marginTop: "-7px" }} cellSpacing={0}>
                  <tbody>
                    <tr>
                      <td>
                        <div className="tree-item">
                          <div className="tree-item-background" id="AH-1G">
                            <a href="/AH-1G" title="AH-1G">
                              <Item_own />
                            </a>
                          </div>
                          <div className="tree-item-text">
                            <span className="tree-item-text-scroll">AH-1G</span>
                          </div>
                          <TechTreeImg vehicle="ah_1g" type="helicopter" />
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
                          <div className="tree-item-background" id="UH-1B">
                            <a href="/UH-1B" title="UH-1B">
                              <Item_own />
                            </a>
                          </div>
                          <div className="tree-item-text">
                            <span className="tree-item-text-scroll">UH-1B</span>
                          </div>
                          <TechTreeImg vehicle="uh_1b" type="helicopter" />
                        </div>
                      </td>
                      <td>
                        <div className="tree-arrow-right">
                          <img src="/images/Arrow-left.png" alt="Arrow-left.png" />
                        </div>
                      </td>
                      <td>
                        <div className="tree-item">
                          <div className="tree-item-background" id="UH-1C">
                            <a href="/UH-1C" title="UH-1C">
                              <Item_own />
                            </a>
                          </div>
                          <div className="tree-item-text">
                            <span className="tree-item-text-scroll">UH-1C</span>
                          </div>
                          <TechTreeImg vehicle="uh_1c" type="helicopter" />
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td />
                      <td />
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
                  <div className="tree-item-background" id="H-34">
                    <a href="/H-34" title="H-34">
                      <Item_prem />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">H-34</span>
                  </div>
                  <div className="tree-item-img">
                    <img src="https://encyclopedia.warthunder.com/slots/h_34.png" alt="h_34.png" />
                  </div>
                </div>
                <div
                  style={{
                    position: "relative",
                    width: 120,
                    height: 44,
                    margin: "auto",
                  }}
                />
                <div className="tree-item">
                  <div className="tree-item-background" id="UH-1C XM-30">
                    <a href="/UH-1C_XM-30" title="UH-1C XM-30">
                      <Item_prem />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">UH-1C XM-30</span>
                  </div>
                  <TechTreeImg vehicle="uh_1c_xm_30" type="helicopter" />
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
              <td style={{ width: 500, paddingLeft: "18%" }}>
                <table style={{ margin: 0, marginTop: "-7px" }} cellSpacing={0}>
                  <tbody>
                    <tr>
                      <td />
                      <td />
                      <td>
                        <div className="tree-item">
                          <div className="tree-item-background" id="AH-1F">
                            <a href="/AH-1F" title="AH-1F">
                              <Item_own />
                            </a>
                          </div>
                          <div className="tree-item-text">
                            <span className="tree-item-text-scroll">AH-1F</span>
                          </div>
                          <TechTreeImg vehicle="ah_1f" type="helicopter" />
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td colSpan={3} style={{ textAlign: "center" }}>
                        <div className="tree-arrow-right">
                          <img src="/images/Arrow-left-down.png" alt="Arrow-left-down.png" />
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="tree-item">
                          <div className="tree-item-background" id="AH-64A">
                            <a href="/AH-64A" title="AH-64A">
                              <Item_own />
                            </a>
                          </div>
                          <div className="tree-item-text">
                            <span className="tree-item-text-scroll">AH-64A</span>
                          </div>
                          <TechTreeImg vehicle="ah_64a" type="helicopter" />
                        </div>
                      </td>
                      <td />
                      <td rowSpan={2}>
                        <div style={{ marginTop: "-25px", marginLeft: 8 }}>
                          <div className="tree-arrow">
                            <img src="/images/Arrow_tail.png" alt="Arrow_tail.png" />
                            <br />
                            <img src="/images/Arrow_center.png" alt="Arrow_center.png" />
                            <br />
                            <img src="/images/Arrow_head.png" alt="Arrow_head.png" />
                          </div>
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
                  <div className="tree-item-background" id="YAH-64">
                    <a href="/YAH-64" title="YAH-64">
                      <Item_squad />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">YAH-64</span>
                  </div>
                  <TechTreeImg vehicle="yah_64" type="helicopter" />
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
              <td>
                <div className="tree-item">
                  <div className="tree-item-background" id="AH-64A Peten">
                    <a href="/AH-64A_Peten" title="AH-64A Peten">
                      <Item_prem />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">AH-64A Peten</span>
                  </div>
                  <TechTreeImg vehicle="ah_64a_peten" type="helicopter" />
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
              <td style={{ width: 500, paddingLeft: "18%" }}>
                <table style={{ margin: 0, marginTop: "-7px" }} cellSpacing={0}>
                  <tbody>
                    <tr>
                      <td>
                        <div className="tree-item">
                          <div className="tree-item-background" id="AH-64D">
                            <a href="/AH-64D" title="AH-64D">
                              <Item_own />
                            </a>
                          </div>
                          <div className="tree-item-text">
                            <span className="tree-item-text-scroll">AH-64D</span>
                          </div>
                          <TechTreeImg vehicle="ah_64d" type="helicopter" />
                        </div>
                      </td>
                      <td />
                      <td>
                        <div className="tree-item">
                          <div className="tree-item-background" id="AH-1Z">
                            <a href="/AH-1Z" title="AH-1Z">
                              <Item_own />
                            </a>
                          </div>
                          <div className="tree-item-text">
                            <span className="tree-item-text-scroll">AH-1Z</span>
                          </div>
                          <TechTreeImg vehicle="ah_1z" type="helicopter" />
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
              <td style={{ borderLeft: "solid 1px #cccccc" }} />
              <td />
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
