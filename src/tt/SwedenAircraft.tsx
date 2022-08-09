import { openfolder } from ".";
import { Item_own, TechTreeImg, Item_prem } from "../TechTree";

export function SwedenAircraft() {
  return (
    <div className="mw-parser-output">
      <div className="tree">
        <table rules="rows" width="100%">
          <tbody>
            <tr>
              <th style={{ borderRight: "solid 1px #eeeeee" }} />
              <th colSpan={3} style={{ borderRight: "solid 1px #eeeeee" }}>
                <span>Researchable vehicles</span>
              </th>
              <th colSpan={2}>
                <span>Premium vehicles</span>
              </th>
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
                  I Rank
                </div>
              </th>
              <td>
                <div className="tree-item">
                  <div className="tree-item-background" id="J8A">
                    <a href="/J8A" title="J8A">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">J8A</span>
                  </div>
                  <TechTreeImg vehicle="gladiator_j8a" type="aircraft" />
                </div>
                <div
                  style={{
                    position: "relative",
                    width: 120,
                    height: 30,
                    margin: "auto",
                  }}
                />
                <div className="tree-item">
                  <div className="tree-item-background" id="J6B">
                    <a href="/J6B" title="J6B">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">J6B</span>
                  </div>
                  <div className="tree-item-img">
                    <img src="https://encyclopedia.warthunder.com/slots/j6b.png" alt="j6b.png" />
                  </div>
                </div>
                <div className="tree-arrow">
                  <img src="/images/Arrow-small.png" alt="Arrow.png" />
                </div>
                <div className="tree-item">
                  <div className="tree-item-background" id="J11">
                    <a href="/J11" title="J11">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">J11</span>
                  </div>
                  <TechTreeImg vehicle="fiat_cr42_j11" type="aircraft" />
                </div>
                <div className="tree-arrow">
                  <img src="/images/Arrow-small.png" alt="Arrow.png" />
                </div>
              </td>
              <td>
                <div className="tree-item">
                  <div className="tree-item-background" id="B17BS">
                    <a href="/B17BS" title="B17BS">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">B17BS</span>
                  </div>
                  <TechTreeImg vehicle="saab_b17bs" type="aircraft" />
                </div>
                <div className="tree-arrow">
                  <img src="/images/Arrow-small.png" alt="Arrow.png" />
                </div>
                <div className="tree-item">
                  <div className="tree-item-background" id="B17B">
                    <a href="/B17B" title="B17B">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">B17B</span>
                  </div>
                  <TechTreeImg vehicle="saab_b17b" type="aircraft" />
                </div>
                <div className="tree-arrow">
                  <img src="/images/Arrow_tail.png" alt="Arrow_tail.png" />
                  <br />
                  <img src="/images/Arrow_center.png" alt="Arrow_center.png" />
                  <br />
                  <img src="/images/Arrow_head.png" alt="Arrow_head.png" />
                </div>
              </td>
              <td>
                <div className="tree-item">
                  <div className="tree-item-background" id="B3C">
                    <a href="/B3C" title="B3C">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">B3C</span>
                  </div>
                  <TechTreeImg vehicle="saab_b3c" type="aircraft" />
                </div>
                <div className="tree-arrow">
                  <img src="/images/Arrow_tail.png" alt="Arrow_tail.png" />
                  <br />
                  <img src="/images/Arrow_center.png" alt="Arrow_center.png" />
                  <br />
                  <img src="/images/Arrow_center_small.png" alt="Arrow_center_small.png" />
                  <br />
                  <img src="/images/Arrow_center.png" alt="Arrow_center.png" />
                  <br />
                  <img src="/images/Arrow_head.png" alt="Arrow_head.png" />
                </div>
              </td>
              <td style={{ borderLeft: "solid 1px #cccccc" }}>
                <div className="tree-item">
                  <div className="tree-item-background" id="Iacobi's J8A">
                    <a href="/Iacobi%27s_J8A" title="Iacobi's J8A">
                      <Item_prem />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">Iacobi&apos;s J8A</span>
                  </div>
                  <TechTreeImg vehicle="gladiator_j8a_iacobi" type="aircraft" />
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
                  II Rank
                </div>
              </th>
              <td>
                <div className="tree-item">
                  <div className="tree-item-background" id="J20">
                    <a href="/J20" title="J20">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">J20</span>
                  </div>
                  <TechTreeImg vehicle="re_2000_j20" type="aircraft" />
                </div>
                <div className="tree-arrow">
                  <img src="/images/Arrow-small.png" alt="Arrow.png" />
                </div>
                <div className="tree-item">
                  <div className="tree-item-background" id="J22-A">
                    <a href="/J22-A" title="J22-A">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">J22-A</span>
                  </div>
                  <TechTreeImg vehicle="ffvs_j22_a" type="aircraft" />
                </div>
                <div className="tree-arrow">
                  <img src="/images/Arrow-small.png" alt="Arrow.png" />
                </div>
              </td>
              <td>
                <div className="tree-item">
                  <div className="tree-item-background" id="B17A">
                    <a href="/B17A" title="B17A">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">B17A</span>
                  </div>
                  <TechTreeImg vehicle="saab_b17a" type="aircraft" />
                </div>
                <div className="tree-arrow">
                  <img src="/images/Arrow_tail.png" alt="Arrow_tail.png" />
                  <br />
                  <img src="/images/Arrow_center.png" alt="Arrow_center.png" />
                  <br />
                  <img src="/images/Arrow_head.png" alt="Arrow_head.png" />
                </div>
              </td>
              <td>
                <div className="tree-item">
                  <div className="tree-item-background" id="B18A">
                    <a href="/B18A" title="B18A">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">B18A</span>
                  </div>
                  <TechTreeImg vehicle="saab_b18a" type="aircraft" />
                </div>
                <div className="tree-arrow">
                  <img src="/images/Arrow_tail.png" alt="Arrow_tail.png" />
                  <br />
                  <img src="/images/Arrow_center.png" alt="Arrow_center.png" />
                  <br />
                  <img src="/images/Arrow_head.png" alt="Arrow_head.png" />
                </div>
              </td>
              <td style={{ borderLeft: "solid 1px #cccccc" }}>
                <div className="tree-item">
                  <div className="tree-item-background" id="Mörkö-Morane">
                    <a href="/M%C3%B6rk%C3%B6-Morane" title="Mörkö-Morane">
                      <Item_prem />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">Mörkö-Morane</span>
                  </div>
                  <TechTreeImg vehicle="morko_morane" type="aircraft" />
                </div>
                <div
                  style={{
                    position: "relative",
                    width: 120,
                    height: 30,
                    margin: "auto",
                  }}
                />
                <div className="tree-item">
                  <div className="tree-item-background" id="Fokker D.XXI">
                    <a href="/Fokker_D.XXI" title="Fokker D.XXI">
                      <Item_prem />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">Fokker D.XXI</span>
                  </div>
                  <TechTreeImg vehicle="fokker_d21_mod20" type="aircraft" />
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
                  <div className="tree-item-background" id="VL Myrsky II">
                    <a href="/VL_Myrsky_II" title="VL Myrsky II">
                      <Item_prem />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">VL Myrsky II</span>
                  </div>
                  <TechTreeImg vehicle="vl_myrsky_2_late" type="aircraft" />
                </div>
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
                  III Rank
                </div>
              </th>
              <td>
                <div className="tree-item">
                  <div className="tree-item-background" id="J22-B">
                    <a href="/J22-B" title="J22-B">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">J22-B</span>
                  </div>
                  <TechTreeImg vehicle="ffvs_j22_b" type="aircraft" />
                </div>
                <div className="tree-arrow">
                  <img src="/images/Arrow-small.png" alt="Arrow.png" />
                </div>
                <div className="tree-item">
                  <div className="tree-item-background" id="J21A-1">
                    <a href="/J21A-1" title="J21A-1">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">J21A-1</span>
                  </div>
                  <TechTreeImg vehicle="saab_j21a_1" type="aircraft" />
                </div>
                <div className="tree-arrow">
                  <img src="/images/Arrow-small.png" alt="Arrow.png" />
                </div>
              </td>
              <td>
                <div className="tree-arrow">
                  <img src="/images/Arrow_tail.png" alt="Arrow_tail.png" />
                  <br />
                  <img src="/images/Arrow_center.png" alt="Arrow_center.png" />
                  <br />
                  <img src="/images/Arrow_center.png" alt="Arrow_center.png" />
                  <br />
                  <img src="/images/Arrow_head.png" alt="Arrow_head.png" />
                </div>
              </td>
              <td>
                <div className="tree-item">
                  <div className="tree-item-background" id="B18B">
                    <a href="/B18B" title="B18B">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">B18B</span>
                  </div>
                  <TechTreeImg vehicle="saab_b18b" type="aircraft" />
                </div>
                <div className="tree-arrow">
                  <img src="/images/Arrow_tail.png" alt="Arrow_tail.png" />
                  <br />
                  <img src="/images/Arrow_center.png" alt="Arrow_center.png" />
                  <br />
                  <img src="/images/Arrow_head.png" alt="Arrow_head.png" />
                </div>
              </td>
              <td style={{ borderLeft: "solid 1px #cccccc" }}>
                <div className="tree-item">
                  <div className="tree-item-background" id="Pyörremyrsky">
                    <a href="/Py%C3%B6rremyrsky" title="Pyörremyrsky">
                      <Item_prem />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">Pyörremyrsky</span>
                  </div>
                  <TechTreeImg vehicle="pyorremyrsky" type="aircraft" />
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
                  IV Rank
                </div>
              </th>
              <td>
                <div className="tree-item">
                  <div className="tree-item-background" id="J21A-2">
                    <a href="/J21A-2" title="J21A-2">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">J21A-2</span>
                  </div>
                  <TechTreeImg vehicle="saab_j21a_2" type="aircraft" />
                </div>
                <div className="tree-arrow">
                  <img src="/images/Arrow-small.png" alt="Arrow.png" />
                </div>
                <div className="tree-item">
                  <div className="tree-item-background" id="J26">
                    <a href="/J26" title="J26">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">J26</span>
                  </div>
                  <TechTreeImg vehicle="p-51d-20-na_j26" type="aircraft" />
                </div>
                <div className="tree-arrow">
                  <img src="/images/Arrow-small.png" alt="Arrow.png" />
                </div>
              </td>
              <td>
                <div className="tree-item">
                  <div className="tree-item-background" id="A21A-3">
                    <a href="/A21A-3" title="A21A-3">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">A21A-3</span>
                  </div>
                  <TechTreeImg vehicle="saab_a21a_3" type="aircraft" />
                </div>
                <div className="tree-arrow">
                  <img src="/images/Arrow_tail.png" alt="Arrow_tail.png" />
                  <br />
                  <img src="/images/Arrow_center.png" alt="Arrow_center.png" />
                  <br />
                  <img src="/images/Arrow_head.png" alt="Arrow_head.png" />
                </div>
              </td>
              <td>
                <div className="tree-item">
                  <div className="tree-item-background" id="T18B">
                    <a href="/T18B" title="T18B">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">T18B</span>
                  </div>
                  <TechTreeImg vehicle="saab_t18b_1" type="aircraft" />
                </div>
                <div className="tree-arrow">
                  <img src="/images/Arrow-small.png" alt="Arrow.png" />
                </div>
                <div className="tree-item">
                  <div className="tree-item-background" id="T18B (57)">
                    <a href="/T18B_(57)" title="T18B (57)">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">T18B (57)</span>
                  </div>
                  <TechTreeImg vehicle="saab_t18b_2" type="aircraft" />
                </div>
                <div className="tree-arrow">
                  <img src="/images/Arrow-small.png" alt="Arrow.png" />
                </div>
              </td>
              <td style={{ borderLeft: "solid 1px #cccccc" }}>
                <div className="tree-item">
                  <div className="tree-item-background" id="Bf 109 G-6 (Sweden)">
                    <a href="/Bf_109_G-6_(Sweden)" title="Bf 109 G-6 (Sweden)">
                      <Item_prem />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">▄Bf&nbsp;109&nbsp;G-6</span>
                  </div>
                  <TechTreeImg vehicle="bf-109g-6_finland" type="aircraft" />
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
                  V Rank
                </div>
              </th>
              <td>
                <div className="tree-item">
                  <div className="tree-item-background" id="J21RA">
                    <a href="/J21RA" title="J21RA">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">J21RA</span>
                  </div>
                  <TechTreeImg vehicle="saab_j21ra" type="aircraft" />
                </div>
                <div className="tree-arrow">
                  <img src="/images/Arrow-small.png" alt="Arrow.png" />
                </div>
                <div className="tree-item">
                  <div className="tree-item-background" id="J29A">
                    <a href="/J29A" title="J29A">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">J29A</span>
                  </div>
                  <TechTreeImg vehicle="saab_j29a" type="aircraft" />
                </div>
                <div className="tree-arrow">
                  <img src="/images/Arrow_tail.png" alt="Arrow_tail.png" />
                  <br />
                  <img src="/images/Arrow_center.png" alt="Arrow_center.png" />
                  <br />
                  <img src="/images/Arrow_head.png" alt="Arrow_head.png" />
                </div>
              </td>
              <td>
                <div className="tree-item">
                  <div className="tree-item-background" id="A21RB">
                    <a href="/A21RB" title="A21RB">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">A21RB</span>
                  </div>
                  <TechTreeImg vehicle="saab_a21rb" type="aircraft" />
                </div>
                <div className="tree-arrow">
                  <img src="/images/Arrow-small.png" alt="Arrow.png" />
                </div>
                <div className="tree-item">
                  <div className="tree-item-background" id="A28B">
                    <a href="/A28B" title="A28B">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">A28B</span>
                  </div>
                  <TechTreeImg vehicle="vampire_fb5_j28b" type="aircraft" />
                </div>
                <div className="tree-arrow">
                  <img src="/images/Arrow-small.png" alt="Arrow.png" />
                </div>
                <div className="tree-item">
                  <div className="tree-item-background" id="A29B">
                    <a href="/A29B" title="A29B">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">A29B</span>
                  </div>
                  <TechTreeImg vehicle="saab_j29b" type="aircraft" />
                </div>
                <div className="tree-arrow">
                  <img src="/images/Arrow-small.png" alt="Arrow.png" />
                </div>
              </td>
              <td>
                <div className="tree-item">
                  <div className="tree-item-background" id="SK60B">
                    <a href="/SK60B" title="SK60B">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">SK60B</span>
                  </div>
                  <TechTreeImg vehicle="saab_sk60b" type="aircraft" />
                </div>
                <div className="tree-arrow">
                  <img src="/images/Arrow-small.png" alt="Arrow.png" />
                </div>
                <div className="tree-item">
                  <div className="tree-item-background" id="SAAB-105G">
                    <a href="/SAAB-105G" title="SAAB-105G">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">SAAB-105G</span>
                  </div>
                  <TechTreeImg vehicle="saab_105g" type="aircraft" />
                </div>
              </td>
              <td style={{ borderLeft: "solid 1px #cccccc" }}>
                <div className="tree-item">
                  <div className="tree-item-background" id="SAAB-105OE">
                    <a href="/SAAB-105OE" title="SAAB-105OE">
                      <Item_prem />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">SAAB-105OE</span>
                  </div>
                  <TechTreeImg vehicle="saab_105oe" type="aircraft" />
                </div>
                <div
                  style={{
                    position: "relative",
                    width: 120,
                    height: 30,
                    margin: "auto",
                  }}
                />
                <div className="tree-item">
                  <div className="tree-item-background" id="J29D">
                    <a href="/J29D" title="J29D">
                      <Item_prem />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">J29D</span>
                  </div>
                  <TechTreeImg vehicle="saab_j29d" type="aircraft" />
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
              <td>
                <div className="tree-item">
                  <div className="tree-item-background" id="J29F">
                    <a href="/J29F" title="J29F">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">J29F</span>
                  </div>
                  <TechTreeImg vehicle="saab_j29f" type="aircraft" />
                </div>
                <div className="tree-arrow">
                  <img src="/images/Arrow-small.png" alt="Arrow.png" />
                </div>
                <div className="tree-item">
                  <div className="tree-item-background" id="J32B">
                    <a href="/J32B" title="J32B">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">J32B</span>
                  </div>
                  <TechTreeImg vehicle="saab_j32b" type="aircraft" />
                </div>
                <div className="tree-arrow">
                  <img src="/images/Arrow-small.png" alt="Arrow.png" />
                </div>
              </td>
              <td>
                <div className="tree-item">
                  <div className="tree-item-background" id="A32A">
                    <a href="/A32A" title="A32A">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">A32A</span>
                  </div>
                  <TechTreeImg vehicle="saab_a32a" type="aircraft" />
                </div>
                <div className="tree-arrow">
                  <img src="/images/Arrow_tail.png" alt="Arrow_tail.png" />
                  <br />
                  <img src="/images/Arrow_center.png" alt="Arrow_center.png" />
                  <br />
                  <img src="/images/Arrow_head.png" alt="Arrow_head.png" />
                </div>
              </td>
              <td />
              <td style={{ borderLeft: "solid 1px #cccccc" }}>
                <div className="tree-item">
                  <div className="tree-item-background" id="J35A">
                    <a href="/J35A" title="J35A">
                      <Item_prem />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">J35A</span>
                  </div>
                  <TechTreeImg vehicle="saab_j35a" type="aircraft" />
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
              <td>
                <div className="tree-item">
                  <div className="tree-item-background" id="J35D">
                    <a href="/J35D" title="J35D">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">J35D</span>
                  </div>
                  <TechTreeImg vehicle="saab_j35d" type="aircraft" />
                </div>
                <div className="tree-arrow">
                  <img src="/images/Arrow-small.png" alt="Arrow.png" />
                </div>
                <div className="tree-item">
                  <div className="tree-item-background" id="JA37C">
                    <a href="/JA37C" title="JA37C">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">JA37C</span>
                  </div>
                  <TechTreeImg vehicle="saab_ja37" type="aircraft" />
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
                  <div className="tree-item-background" id="AJ37">
                    <a href="/AJ37" title="AJ37">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">AJ37</span>
                  </div>
                  <TechTreeImg vehicle="saab_aj37" type="aircraft" />
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
                <div
                  style={{
                    position: "relative",
                    width: 120,
                    height: 30,
                    margin: "auto",
                  }}
                />
              </td>
              <td style={{ borderLeft: "solid 1px #cccccc" }}>
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
      </div>
      <h2>
        <span className="mw-headline" id="Media">
          Media
        </span>
      </h2>
      <div className="video_gallery">
        <div className="video">
          <div className="video_embed">
            <div className="embedvideo autoResize" style={{}}>
              <div className="embedvideowrap" style={{ width: 640 }}>
                <iframe
                  src="//yewtu.be/embed/5TYuG36QnPU?"
                  allowFullScreen={true}
                  width={640}
                  height={360}
                  frameBorder={0}
                />
              </div>
            </div>
          </div>
          <div className="video_desc">
            <b>SAAB</b> - <i>War Thunder Official Channel</i>
          </div>
        </div>
        <div className="video">
          <div className="video_embed">
            <div className="embedvideo autoResize" style={{}}>
              <div className="embedvideowrap" style={{ width: 640 }}>
                <iframe
                  src="//yewtu.be/embed/diNkuJ7lies?"
                  allowFullScreen={true}
                  width={640}
                  height={360}
                  frameBorder={0}
                />
              </div>
            </div>
          </div>
          <div className="video_desc">
            <b>Swedish Air Forces Rank V - Tutorial and Guide</b> - <i>Jengar</i>
          </div>
        </div>
        <div className="video">
          <div className="video_embed">
            <div className="embedvideo autoResize" style={{}}>
              <div className="embedvideowrap" style={{ width: 640 }}>
                <iframe
                  src="//yewtu.be/embed/lQoLGbMZUkg?"
                  allowFullScreen={true}
                  width={640}
                  height={360}
                  frameBorder={0}
                />
              </div>
            </div>
          </div>
          <div className="video_desc">
            <b>Swedish Air Forces Rank IV - Tutorial and Guide</b> - <i>Jengar</i>
          </div>
        </div>
        <div className="video">
          <div className="video_embed">
            <div className="embedvideo autoResize" style={{}}>
              <div className="embedvideowrap" style={{ width: 640 }}>
                <iframe
                  src="//yewtu.be/embed/csnduubxnyk?"
                  allowFullScreen={true}
                  width={640}
                  height={360}
                  frameBorder={0}
                />
              </div>
            </div>
          </div>
          <div className="video_desc">
            <b>Swedish Air Forces Rank III - Tutorial and Guide</b> - <i>Jengar</i>
          </div>
        </div>
        <div className="video">
          <div className="video_embed">
            <div className="embedvideo autoResize" style={{}}>
              <div className="embedvideowrap" style={{ width: 640 }}>
                <iframe
                  src="//yewtu.be/embed/VcyQiD2NLCU?"
                  allowFullScreen={true}
                  width={640}
                  height={360}
                  frameBorder={0}
                />
              </div>
            </div>
          </div>
          <div className="video_desc">
            <b>Swedish Air Forces Rank II - Tutorial and Guide</b> - <i>Jengar</i>
          </div>
        </div>
        <div className="video">
          <div className="video_embed">
            <div className="embedvideo autoResize" style={{}}>
              <div className="embedvideowrap" style={{ width: 640 }}>
                <iframe
                  src="//yewtu.be/embed/W4o7KCDAa8U?"
                  allowFullScreen={true}
                  width={640}
                  height={360}
                  frameBorder={0}
                />
              </div>
            </div>
          </div>
          <div className="video_desc">
            <b>Swedish Air Forces Rank I - Tutorial and Guide</b> - <i>Jengar</i>
          </div>
        </div>
        <div className="video">
          <div className="video_embed">
            <div className="embedvideo autoResize" style={{}}>
              <div className="embedvideowrap" style={{ width: 640 }}>
                <iframe
                  src="//yewtu.be/embed/30a5sfsoX_4?"
                  allowFullScreen={true}
                  width={640}
                  height={360}
                  frameBorder={0}
                />
              </div>
            </div>
          </div>
          <div className="video_desc">
            <b>Climbing the ranks with Swedish aircraft</b> - <i>War Thunder Official Channel</i>
          </div>
        </div>
      </div>
    </div>
  );
}
