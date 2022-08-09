import { Item_own, Item_prem, TechTreeImg } from "../TechTree";

export function BritainHeli() {
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
                          <div className="tree-item-background" id="Scout AH.Mk.1">
                            <a href="/Scout_AH.Mk.1" title="Scout AH.Mk.1">
                              <Item_own />
                            </a>
                          </div>
                          <div className="tree-item-text">
                            <span className="tree-item-text-scroll">Scout AH.Mk.1</span>
                          </div>
                          <TechTreeImg vehicle="scout_ah_mk1" type="helicopter" />
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
                          <div className="tree-item-background" id="Wasp HAS.Mk.1">
                            <a href="/Wasp_HAS.Mk.1" title="Wasp HAS.Mk.1">
                              <Item_own />
                            </a>
                          </div>
                          <div className="tree-item-text">
                            <span className="tree-item-text-scroll">Wasp HAS.Mk.1</span>
                          </div>
                          <TechTreeImg vehicle="wasp_has_mk1" type="helicopter" />
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
              <td style={{ width: 500, paddingLeft: "18%" }}>
                <table style={{ margin: 0, marginTop: "-7px" }} cellSpacing={0}>
                  <tbody>
                    <tr>
                      <td>
                        <div className="tree-item">
                          <div className="tree-item-background" id="Lynx AH.Mk.1">
                            <a href="/Lynx_AH.Mk.1" title="Lynx AH.Mk.1">
                              <Item_own />
                            </a>
                          </div>
                          <div className="tree-item-text">
                            <span className="tree-item-text-scroll">Lynx AH.Mk.1</span>
                          </div>
                          <TechTreeImg vehicle="lynx_ah_mk1" type="helicopter" />
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
                  <div className="tree-item-background" id="G-LYNX">
                    <a href="/G-LYNX" title="G-LYNX">
                      <Item_prem />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">G-LYNX</span>
                  </div>
                  <TechTreeImg vehicle="g_lynx" type="helicopter" />
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
                          <div className="tree-item-background" id="AH Mk.1 Apache">
                            <a href="/AH_Mk.1_Apache" title="AH Mk.1 Apache">
                              <Item_own />
                            </a>
                          </div>
                          <div className="tree-item-text">
                            <span className="tree-item-text-scroll">AH Mk.1 Apache</span>
                          </div>
                          <TechTreeImg vehicle="ah_mk1" type="helicopter" />
                        </div>
                      </td>
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
