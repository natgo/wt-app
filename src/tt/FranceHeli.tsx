import { openfolder } from ".";
import { Item_own, Item_prem, TechTreeImg } from "../TechTree";

export function FranceHeli() {
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
              <td style={{ width: 500, paddingLeft: "18.5%" }}>
                <table style={{ margin: 0, marginTop: "-7px" }} cellSpacing={0}>
                  <tbody>
                    <tr>
                      <td />
                      <td />
                      <td />
                      <td />
                      <td>
                        <div className="tree-item">
                          <div className="tree-item-background" id="H-34 (France)">
                            <a href="/H-34_(France)" title="H-34 (France)">
                              <Item_own />
                            </a>
                          </div>
                          <div className="tree-item-text">
                            <span className="tree-item-text-scroll">▄H-34</span>
                          </div>
                          <TechTreeImg vehicle="h_34_france" type="helicopter" />
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
                      <td />
                      <td />
                      <td colSpan={3} style={{ textAlign: "center" }}>
                        <div className="tree-arrow-right">
                          <img
                            src="/images/Arrow-down-and-right-down.png"
                            alt="Arrow-down-and-right-down.png"
                          />
                        </div>
                      </td>
                      <td />
                      <td />
                    </tr>
                    <tr>
                      <td />
                      <td />
                      <td />
                      <td />
                      <td>
                        <div className="tree-item">
                          <div className="tree-item-background" id="SA 313B Alouette II">
                            <a href="/SA_313B_Alouette_II" title="SA 313B Alouette II">
                              <Item_own />
                            </a>
                          </div>
                          <div className="tree-item-text">
                            <span className="tree-item-text-scroll">SA 313B Alouette II</span>
                          </div>
                          <TechTreeImg vehicle="sa_313b_france" type="helicopter" />
                        </div>
                      </td>
                      <td />
                      <td>
                        <div className="tree-item">
                          <div className="tree-item-background" id="SA 316B Alouette III">
                            <a href="/SA_316B_Alouette_III" title="SA 316B Alouette III">
                              <Item_own />
                            </a>
                          </div>
                          <div className="tree-item-text">
                            <span className="tree-item-text-scroll">SA 316B Alouette III</span>
                          </div>
                          <TechTreeImg vehicle="sa_316b" type="helicopter" />
                        </div>
                      </td>
                      <td />
                      <td />
                    </tr>
                    <tr>
                      <td />
                      <td />
                      <td />
                      <td />
                      <td />
                      <td />
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
                <div
                  style={{
                    position: "relative",
                    width: 120,
                    height: 94,
                    margin: "auto",
                  }}
                />
                <div className="tree-item">
                  <div className="tree-item-background" id="IAR 316B">
                    <a href="/IAR_316B" title="IAR 316B">
                      <Item_prem />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">IAR 316B</span>
                  </div>
                  <TechTreeImg vehicle="iar_316b" type="helicopter" />
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
              <td style={{ width: 500, paddingLeft: "29%" }}>
                <table style={{ margin: 0, marginTop: "-7px" }} cellSpacing={0}>
                  <tbody>
                    <tr>
                      <td />
                      <td />
                      <td />
                      <td />
                      <td />
                      <td />
                      <td>
                        <div className="tree-item">
                          <div className="tree-item-background" id="SA 341F Gazelle">
                            <a href="/SA_341F_Gazelle" title="SA 341F Gazelle">
                              <Item_own />
                            </a>
                          </div>
                          <div className="tree-item-text">
                            <span className="tree-item-text-scroll">SA 341F Gazelle</span>
                          </div>
                          <TechTreeImg vehicle="sa_341f" type="helicopter" />
                        </div>
                      </td>
                      <td />
                      <td />
                    </tr>
                    <tr>
                      <td />
                      <td />
                      <td />
                      <td />
                      <td />
                      <td />
                      <td>
                        <div className="tree-arrow">
                          <img src="/images/Arrow-small.png" alt="Arrow.png" />
                        </div>
                      </td>
                      <td />
                      <td />
                    </tr>
                    <tr>
                      <td />
                      <td />
                      <td />
                      <td />
                      <td />
                      <td />
                      <td>
                        <div className="tree-item">
                          <div className="tree-item-background" id="SA 342M Gazelle">
                            <a href="/SA_342M_Gazelle" title="SA 342M Gazelle">
                              <Item_own />
                            </a>
                          </div>
                          <div className="tree-item-text">
                            <span className="tree-item-text-scroll">SA 342M Gazelle</span>
                          </div>
                          <TechTreeImg vehicle="sa_342m" type="helicopter" />
                        </div>
                      </td>
                      <td />
                      <td />
                    </tr>
                    <tr>
                      <td />
                      <td />
                      <td />
                      <td />
                      <td />
                      <td />
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
                <div
                  style={{
                    position: "relative",
                    width: 120,
                    height: 94,
                    margin: "auto",
                  }}
                />
                <div className="tree-item">
                  <div className="tree-item-background" id="EC-665 Tiger HAP">
                    <a href="/EC-665_Tiger_HAP" title="EC-665 Tiger HAP">
                      <Item_prem />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">EC-665 Tiger HAP</span>
                  </div>
                  <TechTreeImg vehicle="tiger_hap_france" type="helicopter" />
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
              <td style={{ width: 500, paddingLeft: "29%" }}>
                <table style={{ margin: 0, marginTop: "-7px" }} cellSpacing={0}>
                  <tbody>
                    <tr>
                      <td />
                      <td />
                      <td />
                      <td />
                      <td />
                      <td />
                      <td>
                        <div className="tree-item">
                          <div className="tree-item-background" id="EC-665 Tiger HAD">
                            <a href="/EC-665_Tiger_HAD" title="EC-665 Tiger HAD">
                              <Item_own />
                            </a>
                          </div>
                          <div className="tree-item-text">
                            <span className="tree-item-text-scroll">EC-665 Tiger HAD</span>
                          </div>
                          <TechTreeImg vehicle="tiger_had_france" type="helicopter" />
                        </div>
                      </td>
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
