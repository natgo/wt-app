import { openfolder } from ".";
import { Item_own, Item_prem, TechTreeImg } from "../TechTree";

export function GermanyHeli() {
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
                      <td />
                      <td />
                      <td />
                      <td />
                      <td>
                        <div className="tree-item">
                          <div className="tree-item-background">
                            <a
                              href="/SA_313B_Alouette_II_(Germany)"
                              title="SA 313B Alouette II (Germany)"
                            >
                              <Item_own />
                            </a>
                          </div>
                          <div className="tree-item-text">
                            <span className="tree-item-text-scroll">▀SA 313B Alouette II</span>
                          </div>
                          <TechTreeImg vehicle="sa_313b" type="helicopter" />
                        </div>
                      </td>
                      <td />
                      <td />
                      <td />
                      <td />
                    </tr>
                    <tr>
                      <td />
                      <td />
                      <td colSpan={3} style={{ textAlign: "center" }}>
                        <div className="tree-arrow-right">
                          <img src="/images/Arrow-left-down.png" alt="Arrow-left-down.png" />
                        </div>
                      </td>
                      <td />
                      <td />
                      <td />
                      <td />
                    </tr>
                    <tr>
                      <td />
                      <td />
                      <td>
                        <div className="tree-item">
                          <div className="tree-item-background" id="UH-1D (Germany)">
                            <a href="/UH-1D_(Germany)" title="UH-1D (Germany)">
                              <Item_own />
                            </a>
                          </div>
                          <div className="tree-item-text">
                            <span className="tree-item-text-scroll">▀UH-1D</span>
                          </div>
                          <TechTreeImg vehicle="uh_1d" type="helicopter" />
                        </div>
                      </td>
                      <td />
                      <td />
                      <td />
                      <td />
                      <td />
                      <td />
                    </tr>
                    <tr>
                      <td />
                      <td />
                      <td>
                        <div className="tree-arrow">
                          <img src="/images/Arrow-small.png" alt="Arrow.png" />
                        </div>
                      </td>
                      <td />
                      <td />
                      <td />
                      <td />
                      <td />
                      <td />
                    </tr>
                  </tbody>
                </table>
              </td>
              <td style={{ borderLeft: "solid 1px #cccccc" }}>
                <div
                  style={{
                    position: "relative",
                    width: 120,
                    height: 94,
                    margin: "auto",
                  }}
                />
                <div className="tree-item">
                  <div className="tree-item-background" id="BO 105 CB-2">
                    <a href="/BO_105_CB-2" title="BO 105 CB-2">
                      <Item_prem />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">BO 105 CB-2</span>
                  </div>
                  <TechTreeImg vehicle="bo_105cb2" type="helicopter" />
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
                          <div className="tree-item-background" id="BO 105 PAH-1">
                            <a href="/BO_105_PAH-1" title="BO 105 PAH-1">
                              <Item_own />
                            </a>
                          </div>
                          <div className="tree-item-text">
                            <span className="tree-item-text-scroll">BO 105 PAH-1</span>
                          </div>
                          <TechTreeImg vehicle="bo_105pah1" type="helicopter" />
                        </div>
                      </td>
                      <td>
                        <div className="tree-arrow-right">
                          <img src="/images/Arrow-left.png" alt="Arrow-left.png" />
                        </div>
                      </td>
                      <td>
                        <div className="tree-item">
                          <div className="tree-item-background" id="Mi-24P (Germany)">
                            <a href="/Mi-24P_(Germany)" title="Mi-24P (Germany)">
                              <Item_own />
                            </a>
                          </div>
                          <div className="tree-item-text">
                            <span className="tree-item-text-scroll">▀Mi-24P</span>
                          </div>
                          <TechTreeImg vehicle="mi_24p_german" type="helicopter" />
                        </div>
                      </td>
                      <td />
                      <td />
                      <td />
                      <td />
                    </tr>
                    <tr>
                      <td />
                      <td />
                      <td>
                        <div className="tree-arrow">
                          <img src="/images/Arrow-small.png" alt="Arrow.png" />
                        </div>
                      </td>
                      <td />
                      <td />
                      <td />
                      <td />
                      <td />
                      <td />
                    </tr>
                    <tr>
                      <td />
                      <td />
                      <td>
                        <div className="tree-item">
                          <div className="tree-item-background" id="BO 105 PAH-1A1">
                            <a href="/BO_105_PAH-1A1" title="BO 105 PAH-1A1">
                              <Item_own />
                            </a>
                          </div>
                          <div className="tree-item-text">
                            <span className="tree-item-text-scroll">BO 105 PAH-1A1</span>
                          </div>
                          <TechTreeImg vehicle="bo_105pah1_a1" type="helicopter" />
                        </div>
                      </td>
                      <td />
                      <td />
                      <td />
                      <td />
                      <td />
                      <td />
                    </tr>
                    <tr>
                      <td />
                      <td />
                      <td>
                        <div className="tree-arrow">
                          <img src="/images/Arrow-small.png" alt="Arrow.png" />
                        </div>
                      </td>
                      <td />
                      <td />
                      <td />
                      <td />
                      <td />
                      <td />
                    </tr>
                  </tbody>
                </table>
              </td>
              <td style={{ borderLeft: "solid 1px #cccccc" }}>
                <div
                  style={{
                    position: "relative",
                    width: 120,
                    height: 94,
                    margin: "auto",
                  }}
                />
                <div className="tree-item">
                  <div className="tree-item-background" id="Mi-24P HFS 80 (Germany)">
                    <a href="/Mi-24P_HFS_80_(Germany)" title="Mi-24P HFS 80 (Germany)">
                      <Item_prem />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">▀Mi-24P HFS 80</span>
                  </div>
                  <TechTreeImg vehicle="mi_24p_german_hfs80" type="helicopter" />
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
                      <td />
                      <td />
                      <td>
                        <div className="tree-item">
                          <div className="tree-item-background" id="EC-665 Tiger UHT">
                            <a href="/EC-665_Tiger_UHT" title="EC-665 Tiger UHT">
                              <Item_own />
                            </a>
                          </div>
                          <div className="tree-item-text">
                            <span className="tree-item-text-scroll">EC-665 Tiger UHT</span>
                          </div>
                          <TechTreeImg vehicle="tiger_uht" type="helicopter" />
                        </div>
                      </td>
                      <td />
                      <td />
                      <td />
                      <td />
                      <td />
                      <td />
                    </tr>
                  </tbody>
                </table>
                <p>
                  <br />
                </p>
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
