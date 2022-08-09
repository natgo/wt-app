import { openfolder } from ".";
import { Item_own, TechTreeImg, Item_prem } from "../TechTree";

export function IsraelHeli() {
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
                          <div className="tree-item-background" id="AH-1G (Israel)">
                            <a href="/AH-1G_(Israel)" title="AH-1G (Israel)">
                              <Item_own />
                            </a>
                          </div>
                          <div className="tree-item-text">
                            <span className="tree-item-text-scroll">AH-1G</span>
                          </div>
                          <TechTreeImg vehicle="ah_1g_iaf" type="helicopter" />
                        </div>
                      </td>
                      <td />
                      <td />
                    </tr>
                    <tr>
                      <td colSpan={3} style={{ textAlign: "center" }}>
                        <div className="tree-arrow-right">
                          <img
                            src="/images/Arrow-down-and-right-down.png"
                            alt="Arrow-down-and-right-down.png"
                          />
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div style={{ marginTop: "-27px", marginLeft: "-3px" }}>
                          <div className="tree-arrow">
                            <img src="/images/Arrow_tail.png" alt="Arrow_tail.png" />
                            <br />
                            <img src="/images/Arrow_center.png" alt="Arrow_center.png" />
                            <br />
                            <img src="/images/Arrow_head.png" alt="Arrow_head.png" />
                          </div>
                        </div>
                      </td>
                      <td />
                      <td>
                        <div className="tree-item">
                          <div className="tree-item-background" id="MD500-TOW">
                            <a href="/MD500-TOW" title="MD500-TOW">
                              <Item_own />
                            </a>
                          </div>
                          <div className="tree-item-text">
                            <span className="tree-item-text-scroll">MD500-TOW</span>
                          </div>
                          <TechTreeImg vehicle="md_500_tow_late" type="helicopter" />
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
              <td style={{ width: 500, paddingLeft: "18%" }}>
                <table style={{ margin: 0, marginTop: "-7px" }} cellSpacing={0}>
                  <tbody>
                    <tr>
                      <td>
                        <div className="tree-item">
                          <div className="tree-item-background" id="AH-1Q (Israel)">
                            <a href="/AH-1Q_(Israel)" title="AH-1Q (Israel)">
                              <Item_own />
                            </a>
                          </div>
                          <div className="tree-item-text">
                            <span className="tree-item-text-scroll">AH-1Q</span>
                          </div>
                          <TechTreeImg vehicle="ah_1q_iaf" type="helicopter" />
                        </div>
                      </td>
                      <td />
                      <td />
                    </tr>
                    <tr>
                      <td>
                        <div className="tree-arrow">
                          <img src="/images/Arrow-small.png" alt="Arrow.png" />
                        </div>
                      </td>
                      <td />
                      <td />
                    </tr>
                    <tr>
                      <td>
                        <div className="tree-item">
                          <div className="tree-item-background" id="AH-1F (Israel)">
                            <a href="/AH-1F_(Israel)" title="AH-1F (Israel)">
                              <Item_own />
                            </a>
                          </div>
                          <div className="tree-item-text">
                            <span className="tree-item-text-scroll">AH-1F</span>
                          </div>
                          <TechTreeImg vehicle="ah_1f_iaf" type="helicopter" />
                        </div>
                      </td>
                      <td />
                      <td />
                    </tr>
                    <tr>
                      <td>
                        <div className="tree-arrow">
                          <img src="/images/Arrow-small.png" alt="Arrow.png" />
                        </div>
                      </td>
                      <td />
                      <td />
                    </tr>
                    <tr>
                      <td>
                        <div className="tree-item">
                          <div className="tree-item-background" id="AH-64A (Israel)">
                            <a href="/AH-64A_(Israel)" title="AH-64A (Israel)">
                              <Item_own />
                            </a>
                          </div>
                          <div className="tree-item-text">
                            <span className="tree-item-text-scroll">AH-64A Peten</span>
                          </div>
                          <TechTreeImg vehicle="ah_64a_iaf" type="helicopter" />
                        </div>
                      </td>
                      <td />
                      <td />
                    </tr>
                    <tr>
                      <td>
                        <div className="tree-arrow">
                          <img src="/images/Arrow-small.png" alt="Arrow.png" />
                        </div>
                      </td>
                      <td />
                      <td />
                    </tr>
                  </tbody>
                </table>
              </td>
              <td style={{ borderLeft: "solid 1px #cccccc" }}>
                <div className="tree-item">
                  <div className="tree-item-background" id="AH-64A Peten (Israel)">
                    <a href="/AH-64A_Peten_(Israel)" title="AH-64A Peten (Israel)">
                      <Item_prem />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">AH-64A Peten</span>
                  </div>
                  <TechTreeImg vehicle="ah_64a_peten_iaf" type="helicopter" />
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
              <td style={{ width: 500, paddingLeft: "18%" }}>
                <table style={{ margin: 0, marginTop: "-7px" }} cellSpacing={0}>
                  <tbody>
                    <tr>
                      <td>
                        <div className="tree-item">
                          <div className="tree-item-background" id="AH-64D-I (Israel)">
                            <a href="/AH-64D-I_(Israel)" title="AH-64D-I (Israel)">
                              <Item_own />
                            </a>
                          </div>
                          <div className="tree-item-text">
                            <span className="tree-item-text-scroll">AH-64D-I</span>
                          </div>
                          <TechTreeImg vehicle="ah_64d_i_saraph" type="helicopter" />
                        </div>
                      </td>
                      <td />
                      <td />
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
