import { openfolder } from ".";
import { Item_own, TechTreeImg, Item_prem, Item_squad } from "../TechTree";

export function USAGround() {
  return (
    <div className="mw-parser-output">
      <div className="tree">
        <table rules="rows" width="100%">
          <tbody>
            <tr>
              <th style={{ borderRight: "solid 1px #eeeeee" }} />
              <th colSpan={5} style={{ borderRight: "solid 1px #eeeeee" }}>
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
                  <div className="tree-item-background" id="M2A4">
                    <a href="/M2A4" title="M2A4">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">M2A4</span>
                  </div>
                  <TechTreeImg vehicle="us_m2a4" type="ground" />
                </div>
                <div className="tree-arrow">
                  <img src="/images/Arrow-small.png" alt="Arrow.png" />
                </div>
                <div style={{ position: "relative" }}>
                  <div
                    className="tree-group-collapse"
                    style={{ display: "none", position: "absolute" }}
                  >
                    <div className="tree-item">
                      <div className="tree-item-background" id="M3 Stuart">
                        <a href="/M3_Stuart" title="M3 Stuart">
                          <Item_own />
                        </a>
                      </div>
                      <div className="tree-item-text">
                        <span className="tree-item-text-scroll">M3 Stuart</span>
                      </div>
                      <TechTreeImg vehicle="us_m3_stuart" type="ground" />
                    </div>
                    <div className="tree-arrow">
                      <img src="/images/Arrow-small.png" alt="Arrow.png" />
                    </div>
                    <div className="tree-item">
                      <div className="tree-item-background" id="M3A1 Stuart">
                        <a href="/M3A1_Stuart" title="M3A1 Stuart">
                          <Item_own />
                        </a>
                      </div>
                      <div className="tree-item-text">
                        <span className="tree-item-text-scroll">M3A1 Stuart</span>
                      </div>
                      <TechTreeImg vehicle="us_m3a1_stuart" type="ground" />
                    </div>
                  </div>
                  <div
                    className="tree-group"
                    onClick={(event) => {
                      openfolder(event);
                    }}
                  >
                    <div className="tree-group-text">
                      <span className="tree-item-text-scroll">M3/M3A1 Stuart</span>
                    </div>
                    <div className="tree-group-img">
                      <img
                        src="https://encyclopedia.warthunder.com/slots/m3_light_group.png"
                        alt="m3_light_group.png"
                      />
                    </div>
                  </div>
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
                  <div className="tree-item-background" id="M2">
                    <a href="/M2" title="M2">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">M2</span>
                  </div>
                  <TechTreeImg vehicle="us_m2_medium" type="ground" />
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
              <td>
                <div className="tree-item">
                  <div className="tree-item-background" id="LVT(A)(1)">
                    <a href="/LVT(A)(1)" title="LVT(A)(1)">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">LVT(A)(1)</span>
                  </div>
                  <TechTreeImg vehicle="us_lvt_a_1" type="ground" />
                </div>
                <div className="tree-arrow">
                  <img src="/images/Arrow-small.png" alt="Arrow.png" />
                </div>
                <div className="tree-item">
                  <div className="tree-item-background" id="M22">
                    <a href="/M22" title="M22">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">M22</span>
                  </div>
                  <TechTreeImg vehicle="us_m22_locust" type="ground" />
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
                  <div className="tree-item-background" id="M13 MGMC">
                    <a href="/M13_MGMC" title="M13 MGMC">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">M13 MGMC</span>
                  </div>
                  <TechTreeImg vehicle="us_halftrack_m13" type="ground" />
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
              <td>
                <div className="tree-item">
                  <div className="tree-item-background" id="M2A2">
                    <a href="/M2A2" title="M2A2">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">M2A2</span>
                  </div>
                  <TechTreeImg vehicle="us_m2a2" type="ground" />
                </div>
                <div className="tree-arrow">
                  <img src="/images/Arrow-small.png" alt="Arrow.png" />
                </div>
                <div className="tree-item">
                  <div className="tree-item-background" id="M8 Scott">
                    <a href="/M8_Scott" title="M8 Scott">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">M8 HMC</span>
                  </div>
                  <TechTreeImg vehicle="us_m8_scott" type="ground" />
                </div>
                <div className="tree-arrow">
                  <img src="/images/Arrow-small.png" alt="Arrow.png" />
                </div>
                <div className="tree-item">
                  <div className="tree-item-background" id="M3 GMC">
                    <a href="/M3_GMC" title="M3 GMC">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">M3 GMC</span>
                  </div>
                  <TechTreeImg vehicle="us_halftrack_m3_75mm_gmc" type="ground" />
                </div>
                <div className="tree-arrow">
                  <img src="/images/Arrow-small.png" alt="Arrow.png" />
                </div>
              </td>
              <td style={{ borderLeft: "solid 1px #cccccc" }}>
                <div className="tree-item">
                  <div className="tree-item-background" id="M2A4 (1st Arm.Div.)">
                    <a href="/M2A4_(1st_Arm.Div.)" title="M2A4 (1st Arm.Div.)">
                      <Item_prem />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">M2A4 (1st Arm.Div.)</span>
                  </div>
                  <TechTreeImg vehicle="us_m2a4_1st_armor_div" type="ground" />
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
                  <div className="tree-item-background" id="LVT(A)(4)">
                    <a href="/LVT(A)(4)" title="LVT(A)(4)">
                      <Item_prem />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">LVT(A)(4)</span>
                  </div>
                  <TechTreeImg vehicle="us_lvt_a_4" type="ground" />
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
                  <div className="tree-item-background" id="M3A1 (USMC)">
                    <a href="/M3A1_(USMC)" title="M3A1 (USMC)">
                      <Item_prem />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">M3A1 (USMC)</span>
                  </div>
                  <TechTreeImg vehicle="us_m3a1_stuart_usmc" type="ground" />
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
                  <div className="tree-item-background" id="M8 LAC">
                    <a href="/M8_LAC" title="M8 LAC">
                      <Item_prem />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">M8 LAC</span>
                  </div>
                  <TechTreeImg vehicle="us_m8_greyhound" type="ground" />
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
                  <div className="tree-item-background" id="M8A1 GMC">
                    <a href="/M8A1_GMC" title="M8A1 GMC">
                      <Item_prem />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">M8A1 GMC</span>
                  </div>
                  <TechTreeImg vehicle="us_m8a1" type="ground" />
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
                  II Rank
                </div>
              </th>
              <td>
                <div className="tree-item">
                  <div className="tree-item-background" id="M5A1">
                    <a href="/M5A1" title="M5A1">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">M5A1</span>
                  </div>
                  <TechTreeImg vehicle="us_m5a1_stuart" type="ground" />
                </div>
                <div className="tree-arrow">
                  <img src="/images/Arrow-small.png" alt="Arrow.png" />
                </div>
                <div className="tree-item">
                  <div className="tree-item-background" id="M24">
                    <a href="/M24" title="M24">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">M24</span>
                  </div>
                  <TechTreeImg vehicle="us_m24_chaffee" type="ground" />
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
              <td>
                <div className="tree-item">
                  <div className="tree-item-background" id="M3 Lee">
                    <a href="/M3_Lee" title="M3 Lee">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">M3 Lee</span>
                  </div>
                  <TechTreeImg vehicle="us_m3_lee" type="ground" />
                </div>
                <div className="tree-arrow">
                  <img src="/images/Arrow-small.png" alt="Arrow.png" />
                </div>
                <div className="tree-item">
                  <div className="tree-item-background" id="M4A1">
                    <a href="/M4A1" title="M4A1">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">M4A1</span>
                  </div>
                  <TechTreeImg vehicle="us_m4a1_1942_sherman" type="ground" />
                </div>
                <div className="tree-arrow">
                  <img src="/images/Arrow-small.png" alt="Arrow.png" />
                </div>
                <div className="tree-item">
                  <div className="tree-item-background" id="M4">
                    <a href="/M4" title="M4">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">M4</span>
                  </div>
                  <TechTreeImg vehicle="us_m4_sherman" type="ground" />
                </div>
              </td>
              <td>
                <div className="tree-item">
                  <div className="tree-item-background" id="M4A3 (105)">
                    <a href="/M4A3_(105)" title="M4A3 (105)">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">M4A3 (105)</span>
                  </div>
                  <TechTreeImg vehicle="us_m4a3_105_sherman" type="ground" />
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
                  <div className="tree-item-background" id="M15 CGMC">
                    <a href="/M15_CGMC" title="M15 CGMC">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">M15 CGMC</span>
                  </div>
                  <TechTreeImg vehicle="us_halftrack_m15" type="ground" />
                </div>
                <div className="tree-arrow">
                  <img src="/images/Arrow-small.png" alt="Arrow.png" />
                </div>
                <div className="tree-item">
                  <div className="tree-item-background" id="M16 MGMC">
                    <a href="/M16_MGMC" title="M16 MGMC">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">M16 MGMC</span>
                  </div>
                  <TechTreeImg vehicle="us_halftrack_m16" type="ground" />
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
              <td>
                <div className="tree-item">
                  <div className="tree-item-background" id="M10 GMC">
                    <a href="/M10_GMC" title="M10 GMC">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">M10 GMC</span>
                  </div>
                  <TechTreeImg vehicle="us_m10" type="ground" />
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
                  <img src="/images/Arrow_center_small.png" alt="Arrow_center_small.png" />
                  <br />
                  <img src="/images/Arrow_center.png" alt="Arrow_center.png" />
                  <br />
                  <img src="/images/Arrow_head.png" alt="Arrow_head.png" />
                </div>
              </td>
              <td style={{ borderLeft: "solid 1px #cccccc" }}>
                <div className="tree-item">
                  <div className="tree-item-background" id="Stuart VI (5th CAD) (USA)">
                    <a href="/Stuart_VI_(5th_CAD)_(USA)" title="Stuart VI (5th CAD) (USA)">
                      <Item_prem />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">▃Stuart VI (5th CAD)</span>
                  </div>
                  <TechTreeImg vehicle="us_m5a1_stuart_canadian_5st_arm" type="ground" />
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
                  <div className="tree-item-background" id="Grant I (USA)">
                    <a href="/Grant_I_(USA)" title="Grant I (USA)">
                      <Item_prem />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">▃Grant I</span>
                  </div>
                  <TechTreeImg vehicle="us_mk1_grant" type="ground" />
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
                  <div className="tree-item-background" id="M4A5">
                    <a href="/M4A5" title="M4A5">
                      <Item_prem />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">M4A5</span>
                  </div>
                  <TechTreeImg vehicle="us_m4a5_ram_2" type="ground" />
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
                  <div className="tree-item-background" id="M24 (TL)">
                    <a href="/M24_(TL)" title="M24 (TL)">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">M24 (TL)</span>
                  </div>
                  <TechTreeImg vehicle="us_m24_chaffee_tl" type="ground" />
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
                  <div className="tree-item-background" id="M5A1 TD">
                    <a href="/M5A1_TD" title="M5A1 TD">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">M5A1 TD</span>
                  </div>
                  <TechTreeImg vehicle="us_m5a1_stuart_td" type="ground" />
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
                  <div className="tree-item-background" id="LVT(A)(4) (ZIS-2) (USA)">
                    <a href="/LVT(A)(4)_(ZIS-2)_(USA)" title="LVT(A)(4) (ZIS-2) (USA)">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">▃LVT(A)(4) (ZIS-2)</span>
                  </div>
                  <TechTreeImg vehicle="us_lvt_4_zis_2" type="ground" />
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
                  <div className="tree-item-background" id="T18E2">
                    <a href="/T18E2" title="T18E2">
                      <Item_prem />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">T18E2</span>
                  </div>
                  <TechTreeImg vehicle="us_t18_e2" type="ground" />
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
                  III Rank
                </div>
              </th>
              <td>
                <div className="tree-arrow">
                  <img src="/images/Arrow_tail.png" alt="Arrow_tail.png" />
                  <br />
                  <img src="/images/Arrow_center.png" alt="Arrow_center.png" />
                  <br />
                  <img src="/images/Arrow_center_small.png" alt="Arrow_center_small.png" />
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
                  <div className="tree-item-background" id="M4A2">
                    <a href="/M4A2" title="M4A2">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">M4A2</span>
                  </div>
                  <TechTreeImg vehicle="us_m4a2_sherman" type="ground" />
                </div>
                <div className="tree-arrow">
                  <img src="/images/Arrow-small.png" alt="Arrow.png" />
                </div>
                <div className="tree-item">
                  <div className="tree-item-background" id="M4A1 (76) W">
                    <a href="/M4A1_(76)_W" title="M4A1 (76) W">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">M4A1 (76) W</span>
                  </div>
                  <TechTreeImg vehicle="us_m4a1_76w_sherman" type="ground" />
                </div>
                <div className="tree-arrow">
                  <img src="/images/Arrow-small.png" alt="Arrow.png" />
                </div>
                <div className="tree-item">
                  <div className="tree-item-background" id="M4A2 (76) W">
                    <a href="/M4A2_(76)_W" title="M4A2 (76) W">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">M4A2 (76) W</span>
                  </div>
                  <TechTreeImg vehicle="us_m4a2_76w_sherman" type="ground" />
                </div>
                <div className="tree-arrow">
                  <img src="/images/Arrow-small.png" alt="Arrow.png" />
                </div>
              </td>
              <td>
                <div className="tree-item">
                  <div className="tree-item-background" id="M6A1">
                    <a href="/M6A1" title="M6A1">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">M6A1</span>
                  </div>
                  <TechTreeImg vehicle="us_m6a1" type="ground" />
                </div>
                <div className="tree-arrow">
                  <img src="/images/Arrow-small.png" alt="Arrow.png" />
                </div>
                <div className="tree-item">
                  <div className="tree-item-background" id="M4A3E2">
                    <a href="/M4A3E2" title="M4A3E2">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">M4A3E2</span>
                  </div>
                  <TechTreeImg vehicle="us_m4a3e2_sherman_jumbo" type="ground" />
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
                  <div className="tree-item-background" id="M19A1">
                    <a href="/M19A1" title="M19A1">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">M19A1</span>
                  </div>
                  <TechTreeImg vehicle="us_m19" type="ground" />
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
              <td>
                <div className="tree-item">
                  <div className="tree-item-background" id="M18 GMC">
                    <a href="/M18_GMC" title="M18 GMC">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">M18 GMC</span>
                  </div>
                  <TechTreeImg vehicle="us_m18_hellcat" type="ground" />
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
                  <div className="tree-item-background" id="T14">
                    <a href="/T14" title="T14">
                      <Item_prem />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">T14</span>
                  </div>
                  <TechTreeImg vehicle="us_t14" type="ground" />
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
                  <div className="tree-item-background">
                    <a href="/M18_%22Black_Cat%22" title='M18 "Black Cat"'>
                      <Item_prem />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">M18 &quot;Black Cat&quot;</span>
                  </div>
                  <TechTreeImg vehicle="us_m18_hellcat_black_cat" type="ground" />
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
                  <div className="tree-item-background" id="Calliope">
                    <a href="/Calliope" title="Calliope">
                      <Item_prem />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">Calliope</span>
                  </div>
                  <TechTreeImg vehicle="us_m4_sherman_calliope" type="ground" />
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
                  <div className="tree-item-background" id="T55E1">
                    <a href="/T55E1" title="T55E1">
                      <Item_prem />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">T55E1</span>
                  </div>
                  <TechTreeImg vehicle="us_t55e1" type="ground" />
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
                  <div className="tree-item-background" id="Cobra King">
                    <a href="/Cobra_King" title="Cobra King">
                      <Item_prem />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">Cobra King</span>
                  </div>
                  <TechTreeImg vehicle="us_m4a3e2_sherman_jumbo_cobra_king" type="ground" />
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
                  <div className="tree-item-background" id="T20">
                    <a href="/T20" title="T20">
                      <Item_prem />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">T20</span>
                  </div>
                  <TechTreeImg vehicle="us_t20" type="ground" />
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
                  IV Rank
                </div>
              </th>
              <td>
                <div className="tree-item">
                  <div className="tree-item-background" id="M41A1">
                    <a href="/M41A1" title="M41A1">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">M41A1</span>
                  </div>
                  <TechTreeImg vehicle="us_m41_walker_bulldog" type="ground" />
                </div>
                <div className="tree-arrow">
                  <img src="/images/Arrow-small.png" alt="Arrow.png" />
                </div>
                <div className="tree-item">
                  <div className="tree-item-background" id="M56">
                    <a href="/M56" title="M56">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">M56</span>
                  </div>
                  <TechTreeImg vehicle="us_m56_scorpion" type="ground" />
                </div>
                <div className="tree-arrow">
                  <img src="/images/Arrow-small.png" alt="Arrow.png" />
                </div>
                <div className="tree-item">
                  <div className="tree-item-background" id="T92">
                    <a href="/T92" title="T92">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">T92</span>
                  </div>
                  <TechTreeImg vehicle="us_t92" type="ground" />
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
                  <div className="tree-item-background" id="M4A3 (76) W">
                    <a href="/M4A3_(76)_W" title="M4A3 (76) W">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">M4A3 (76) W</span>
                  </div>
                  <TechTreeImg vehicle="us_m4a3e8_76w_sherman" type="ground" />
                </div>
                <div className="tree-arrow">
                  <img src="/images/Arrow-small.png" alt="Arrow.png" />
                </div>
                <div className="tree-item">
                  <div className="tree-item-background" id="T25">
                    <a href="/T25" title="T25">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">T25</span>
                  </div>
                  <TechTreeImg vehicle="us_t25" type="ground" />
                </div>
                <div className="tree-arrow">
                  <img src="/images/Arrow-small.png" alt="Arrow.png" />
                </div>
                <div className="tree-item">
                  <div className="tree-item-background" id="M26">
                    <a href="/M26" title="M26">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">M26</span>
                  </div>
                  <TechTreeImg vehicle="us_m26_pershing" type="ground" />
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
                  <div className="tree-item-background" id="M4A3E2 (76) W">
                    <a href="/M4A3E2_(76)_W" title="M4A3E2 (76) W">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">M4A3E2 (76) W</span>
                  </div>
                  <TechTreeImg vehicle="us_m4a3e2_76w_sherman_jumbo" type="ground" />
                </div>
                <div className="tree-arrow">
                  <img src="/images/Arrow-small.png" alt="Arrow.png" />
                </div>
                <div className="tree-item">
                  <div className="tree-item-background" id="T26E5">
                    <a href="/T26E5" title="T26E5">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">T26E5</span>
                  </div>
                  <TechTreeImg vehicle="us_t26e5" type="ground" />
                </div>
                <div className="tree-arrow">
                  <img src="/images/Arrow-small.png" alt="Arrow.png" />
                </div>
                <div className="tree-item">
                  <div className="tree-item-background" id="T26E1-1">
                    <a href="/T26E1-1" title="T26E1-1">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">T26E1-1</span>
                  </div>
                  <TechTreeImg vehicle="us_t26e4_superpershing" type="ground" />
                </div>
                <div className="tree-arrow">
                  <img src="/images/Arrow-small.png" alt="Arrow.png" />
                </div>
                <div className="tree-item">
                  <div className="tree-item-background" id="T34">
                    <a href="/T34" title="T34">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">T34</span>
                  </div>
                  <TechTreeImg vehicle="us_t34" type="ground" />
                </div>
                <div className="tree-arrow">
                  <img src="/images/Arrow-small.png" alt="Arrow.png" />
                </div>
              </td>
              <td>
                <div className="tree-item">
                  <div className="tree-item-background" id="M42">
                    <a href="/M42" title="M42">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">M42</span>
                  </div>
                  <TechTreeImg vehicle="us_m42_duster" type="ground" />
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
                  <img src="/images/Arrow_center_small.png" alt="Arrow_center_small.png" />
                  <br />
                  <img src="/images/Arrow_center.png" alt="Arrow_center.png" />
                  <br />
                  <img src="/images/Arrow_head.png" alt="Arrow_head.png" />
                </div>
              </td>
              <td>
                <div className="tree-item">
                  <div className="tree-item-background" id="M36 GMC">
                    <a href="/M36_GMC" title="M36 GMC">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">M36 GMC</span>
                  </div>
                  <TechTreeImg vehicle="us_m36" type="ground" />
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
                  <img src="/images/Arrow_center_small.png" alt="Arrow_center_small.png" />
                  <br />
                  <img src="/images/Arrow_center.png" alt="Arrow_center.png" />
                  <br />
                  <img src="/images/Arrow_head.png" alt="Arrow_head.png" />
                </div>
              </td>
              <td style={{ borderLeft: "solid 1px #cccccc" }}>
                <div className="tree-item">
                  <div className="tree-item-background" id="Super Hellcat">
                    <a href="/Super_Hellcat" title="Super Hellcat">
                      <Item_prem />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">Super Hellcat</span>
                  </div>
                  <TechTreeImg vehicle="us_m18_super_hellcat" type="ground" />
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
                  <div className="tree-item-background" id="M26 T99">
                    <a href="/M26_T99" title="M26 T99">
                      <Item_prem />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">M26 T99</span>
                  </div>
                  <TechTreeImg vehicle="us_m26_t99" type="ground" />
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
                  <div className="tree-item-background" id="M26E1">
                    <a href="/M26E1" title="M26E1">
                      <Item_prem />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">M26E1</span>
                  </div>
                  <TechTreeImg vehicle="us_m26e1_pershing" type="ground" />
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
                  <div className="tree-item-background">
                    <a href="/M46_%22Tiger%22" title='M46 "Tiger"'>
                      <Item_prem />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">M46 &quot;Tiger&quot;</span>
                  </div>
                  <TechTreeImg vehicle="us_m46_patton_73_armor_bat" type="ground" />
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
                  <div className="tree-item-background" id="T28">
                    <a href="/T28" title="T28">
                      <Item_prem />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">T28</span>
                  </div>
                  <TechTreeImg vehicle="us_t28" type="ground" />
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
                  <div className="tree-item-background" id="T29">
                    <a href="/T29" title="T29">
                      <Item_prem />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">T29</span>
                  </div>
                  <TechTreeImg vehicle="us_t29" type="ground" />
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
                  <div className="tree-item-background" id="T30">
                    <a href="/T30" title="T30">
                      <Item_prem />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">T30</span>
                  </div>
                  <TechTreeImg vehicle="us_t30" type="ground" />
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
                  <div className="tree-item-background" id="M6A2E1">
                    <a href="/M6A2E1" title="M6A2E1">
                      <Item_prem />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">M6A2E1</span>
                  </div>
                  <TechTreeImg vehicle="us_m6a2e1" type="ground" />
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
                  V Rank
                </div>
              </th>
              <td>
                <div className="tree-item">
                  <div className="tree-item-background" id="M50">
                    <a href="/M50" title="M50">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">M50</span>
                  </div>
                  <TechTreeImg vehicle="us_m50_ontos" type="ground" />
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
                <div style={{ position: "relative" }}>
                  <div
                    className="tree-group-collapse"
                    style={{ display: "none", position: "absolute" }}
                  >
                    <div className="tree-item">
                      <div className="tree-item-background" id="M46">
                        <a href="/M46" title="M46">
                          <Item_own />
                        </a>
                      </div>
                      <div className="tree-item-text">
                        <span className="tree-item-text-scroll">M46</span>
                      </div>
                      <TechTreeImg vehicle="us_m46_patton" type="ground" />
                    </div>
                    <div className="tree-arrow">
                      <img src="/images/Arrow-small.png" alt="Arrow.png" />
                    </div>
                    <div className="tree-item">
                      <div className="tree-item-background" id="M47">
                        <a href="/M47" title="M47">
                          <Item_own />
                        </a>
                      </div>
                      <div className="tree-item-text">
                        <span className="tree-item-text-scroll">M47</span>
                      </div>
                      <TechTreeImg vehicle="us_m47_patton_ii" type="ground" />
                    </div>
                  </div>
                  <div
                    className="tree-group"
                    onClick={(event) => {
                      openfolder(event);
                    }}
                  >
                    <div className="tree-group-text">
                      <span className="tree-item-text-scroll">M46/M47</span>
                    </div>
                    <div className="tree-group-img">
                      <img
                        src="https://encyclopedia.warthunder.com/slots/us_m46_m47_group.png"
                        alt="us_m46_m47_group.png"
                      />
                    </div>
                  </div>
                </div>
                <div className="tree-arrow">
                  <img src="/images/Arrow-small.png" alt="Arrow.png" />
                </div>
                <div style={{ position: "relative" }}>
                  <div
                    className="tree-group-collapse"
                    style={{ display: "none", position: "absolute" }}
                  >
                    <div className="tree-item">
                      <div className="tree-item-background" id="M48A1">
                        <a href="/M48A1" title="M48A1">
                          <Item_own />
                        </a>
                      </div>
                      <div className="tree-item-text">
                        <span className="tree-item-text-scroll">M48A1</span>
                      </div>
                      <TechTreeImg vehicle="us_m48a1_patton_iii" type="ground" />
                    </div>
                    <div className="tree-arrow">
                      <img src="/images/Arrow-small.png" alt="Arrow.png" />
                    </div>
                    <div className="tree-item">
                      <div className="tree-item-background" id="M60">
                        <a href="/M60" title="M60">
                          <Item_own />
                        </a>
                      </div>
                      <div className="tree-item-text">
                        <span className="tree-item-text-scroll">M60</span>
                      </div>
                      <TechTreeImg vehicle="us_m60" type="ground" />
                    </div>
                  </div>
                  <div
                    className="tree-group"
                    onClick={(event) => {
                      openfolder(event);
                    }}
                  >
                    <div className="tree-group-text">
                      <span className="tree-item-text-scroll">M48/M60</span>
                    </div>
                    <div className="tree-group-img">
                      <img
                        src="https://encyclopedia.warthunder.com/slots/us_m48_m60_group.png"
                        alt="us_m48_m60_group.png"
                      />
                    </div>
                  </div>
                </div>
                <div className="tree-arrow">
                  <img src="/images/Arrow-small.png" alt="Arrow.png" />
                </div>
              </td>
              <td>
                <div style={{ position: "relative" }}>
                  <div
                    className="tree-group-collapse"
                    style={{ display: "none", position: "absolute" }}
                  >
                    <div className="tree-item">
                      <div className="tree-item-background" id="T32">
                        <a href="/T32" title="T32">
                          <Item_own />
                        </a>
                      </div>
                      <div className="tree-item-text">
                        <span className="tree-item-text-scroll">T32</span>
                      </div>
                      <TechTreeImg vehicle="us_t32" type="ground" />
                    </div>
                    <div className="tree-arrow">
                      <img src="/images/Arrow-small.png" alt="Arrow.png" />
                    </div>
                    <div className="tree-item">
                      <div className="tree-item-background" id="T32E1">
                        <a href="/T32E1" title="T32E1">
                          <Item_own />
                        </a>
                      </div>
                      <div className="tree-item-text">
                        <span className="tree-item-text-scroll">T32E1</span>
                      </div>
                      <TechTreeImg vehicle="us_t32e1" type="ground" />
                    </div>
                  </div>
                  <div
                    className="tree-group"
                    onClick={(event) => {
                      openfolder(event);
                    }}
                  >
                    <div className="tree-group-text">
                      <span className="tree-item-text-scroll">T32/T32E1</span>
                    </div>
                    <div className="tree-group-img">
                      <img
                        src="https://encyclopedia.warthunder.com/slots/us_t32_group.png"
                        alt="us_t32_group.png"
                      />
                    </div>
                  </div>
                </div>
                <div className="tree-arrow">
                  <img src="/images/Arrow-small.png" alt="Arrow.png" />
                </div>
                <div className="tree-item">
                  <div className="tree-item-background" id="M103">
                    <a href="/M103" title="M103">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">M103</span>
                  </div>
                  <TechTreeImg vehicle="us_m103" type="ground" />
                </div>
                <div className="tree-arrow">
                  <img src="/images/Arrow-small.png" alt="Arrow.png" />
                </div>
              </td>
              <td>
                <div className="tree-item">
                  <div className="tree-item-background" id="M163">
                    <a href="/M163" title="M163">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">M163</span>
                  </div>
                  <TechTreeImg vehicle="us_m163_vulcan" type="ground" />
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
                  <div className="tree-item-background" id="T95">
                    <a href="/T95" title="T95">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">T95</span>
                  </div>
                  <TechTreeImg vehicle="us_t95" type="ground" />
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
                  <div className="tree-item-background" id="T114">
                    <a href="/T114" title="T114">
                      <Item_prem />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">T114</span>
                  </div>
                  <TechTreeImg vehicle="us_t114" type="ground" />
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
                  <div className="tree-item-background" id="T54E1">
                    <a href="/T54E1" title="T54E1">
                      <Item_prem />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">T54E1</span>
                  </div>
                  <TechTreeImg vehicle="us_t54e1" type="ground" />
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
                  <div className="tree-item-background" id="Magach 3 (USA)">
                    <a href="/Magach_3_(USA)" title="Magach 3 (USA)">
                      <Item_prem />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">▃Magach 3</span>
                  </div>
                  <TechTreeImg vehicle="us_magach_3" type="ground" />
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
                  VI Rank
                </div>
              </th>
              <td>
                <div className="tree-item">
                  <div className="tree-item-background" id="M551">
                    <a href="/M551" title="M551">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">M551</span>
                  </div>
                  <TechTreeImg vehicle="us_m551" type="ground" />
                </div>
                <div className="tree-arrow">
                  <img src="/images/Arrow-small.png" alt="Arrow.png" />
                </div>
                <div className="tree-item">
                  <div className="tree-item-background" id="M3 Bradley">
                    <a href="/M3_Bradley" title="M3 Bradley">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">M3 Bradley</span>
                  </div>
                  <TechTreeImg vehicle="us_m3_bradley" type="ground" />
                </div>
                <div className="tree-arrow">
                  <img src="/images/Arrow-small.png" alt="Arrow.png" />
                </div>
                <div className="tree-item">
                  <div className="tree-item-background" id="M3A3 Bradley">
                    <a href="/M3A3_Bradley" title="M3A3 Bradley">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">M3A3 Bradley</span>
                  </div>
                  <TechTreeImg vehicle="us_m3a3_bradley" type="ground" />
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
                  <div className="tree-item-background" id="M60A1 (AOS)">
                    <a href="/M60A1_(AOS)" title="M60A1 (AOS)">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">M60A1 (AOS)</span>
                  </div>
                  <TechTreeImg vehicle="us_m60a1" type="ground" />
                </div>
                <div className="tree-arrow">
                  <img src="/images/Arrow-small.png" alt="Arrow.png" />
                </div>
                <div className="tree-item">
                  <div className="tree-item-background" id="M60A1 RISE (P)">
                    <a href="/M60A1_RISE_(P)" title="M60A1 RISE (P)">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">M60A1 RISE (P)</span>
                  </div>
                  <TechTreeImg vehicle="us_m60a1_rise_passive_era" type="ground" />
                </div>
                <div className="tree-arrow">
                  <img src="/images/Arrow-small.png" alt="Arrow.png" />
                </div>
                <div className="tree-item">
                  <div className="tree-item-background" id="M60A3 TTS">
                    <a href="/M60A3_TTS" title="M60A3 TTS">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">M60A3 TTS</span>
                  </div>
                  <TechTreeImg vehicle="us_m60a3_tts" type="ground" />
                </div>
              </td>
              <td>
                <div className="tree-item">
                  <div className="tree-item-background" id="T95E1">
                    <a href="/T95E1" title="T95E1">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">T95E1</span>
                  </div>
                  <TechTreeImg vehicle="us_t95e1" type="ground" />
                </div>
                <div className="tree-arrow">
                  <img src="/images/Arrow-small.png" alt="Arrow.png" />
                </div>
                <div style={{ position: "relative" }}>
                  <div
                    className="tree-group-collapse"
                    style={{ display: "none", position: "absolute" }}
                  >
                    <div className="tree-item">
                      <div className="tree-item-background" id="XM-803">
                        <a href="/XM-803" title="XM-803">
                          <Item_own />
                        </a>
                      </div>
                      <div className="tree-item-text">
                        <span className="tree-item-text-scroll">XM-803</span>
                      </div>
                      <TechTreeImg vehicle="us_xm_803" type="ground" />
                    </div>
                    <div className="tree-arrow">
                      <img src="/images/Arrow-small.png" alt="Arrow.png" />
                    </div>
                    <div className="tree-item">
                      <div className="tree-item-background" id="MBT-70">
                        <a href="/MBT-70" title="MBT-70">
                          <Item_own />
                        </a>
                      </div>
                      <div className="tree-item-text">
                        <span className="tree-item-text-scroll">MBT-70</span>
                      </div>
                      <TechTreeImg vehicle="us_mbt_70" type="ground" />
                    </div>
                  </div>
                  <div
                    className="tree-group"
                    onClick={(event) => {
                      openfolder(event);
                    }}
                  >
                    <div className="tree-group-text">
                      <span className="tree-item-text-scroll">MBT/XM</span>
                    </div>
                    <div className="tree-group-img">
                      <img
                        src="https://encyclopedia.warthunder.com/slots/us_mbt_xm_group.png"
                        alt="us_mbt_xm_group.png"
                      />
                    </div>
                  </div>
                </div>
                <div className="tree-arrow">
                  <img src="/images/Arrow-small.png" alt="Arrow.png" />
                </div>
                <div className="tree-item">
                  <div className="tree-item-background" id="M1 Abrams">
                    <a href="/M1_Abrams" title="M1 Abrams">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">M1 Abrams</span>
                  </div>
                  <TechTreeImg vehicle="us_m1_abrams" type="ground" />
                </div>
                <div className="tree-arrow">
                  <img src="/images/Arrow-small.png" alt="Arrow.png" />
                </div>
                <div className="tree-item">
                  <div className="tree-item-background" id="M1A1">
                    <a href="/M1A1" title="M1A1">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">M1A1</span>
                  </div>
                  <TechTreeImg vehicle="us_m1a1_abrams" type="ground" />
                </div>
                <div className="tree-arrow">
                  <img src="/images/Arrow-small.png" alt="Arrow.png" />
                </div>
              </td>
              <td>
                <div className="tree-item">
                  <div className="tree-item-background" id="M247">
                    <a href="/M247" title="M247">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">M247</span>
                  </div>
                  <TechTreeImg vehicle="us_m247" type="ground" />
                </div>
                <div className="tree-arrow">
                  <img src="/images/Arrow-small.png" alt="Arrow.png" />
                </div>
                <div className="tree-item">
                  <div className="tree-item-background" id="LAV-AD">
                    <a href="/LAV-AD" title="LAV-AD">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">LAV-AD</span>
                  </div>
                  <TechTreeImg vehicle="us_lav_ad" type="ground" />
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
              <td>
                <div className="tree-item">
                  <div className="tree-item-background" id="M60A2">
                    <a href="/M60A2" title="M60A2">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">M60A2</span>
                  </div>
                  <TechTreeImg vehicle="us_m60a2" type="ground" />
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
                  <img src="/images/Arrow_center_small.png" alt="Arrow_center_small.png" />
                  <br />
                  <img src="/images/Arrow_center.png" alt="Arrow_center.png" />
                  <br />
                  <img src="/images/Arrow_head.png" alt="Arrow_head.png" />
                </div>
              </td>
              <td style={{ borderLeft: "solid 1px #cccccc" }}>
                <div className="tree-item">
                  <div className="tree-item-background" id="XM-1 (GM)">
                    <a href="/XM-1_(GM)" title="XM-1 (GM)">
                      <Item_prem />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">XM-1 (GM)</span>
                  </div>
                  <TechTreeImg vehicle="us_xm1_gm" type="ground" />
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
                  <div className="tree-item-background" id="XM-1 (Chrysler)">
                    <a href="/XM-1_(Chrysler)" title="XM-1 (Chrysler)">
                      <Item_prem />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">XM-1 (Chrysler)</span>
                  </div>
                  <TechTreeImg vehicle="us_xm1_chrysler" type="ground" />
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
                  <div className="tree-item-background" id="M901">
                    <a href="/M901" title="M901">
                      <Item_squad />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">M901</span>
                  </div>
                  <TechTreeImg vehicle="us_m901_itv" type="ground" />
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
                  <div className="tree-item-background" id="Merkava Mk.1 (USA)">
                    <a href="/Merkava_Mk.1_(USA)" title="Merkava Mk.1 (USA)">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">▃Merkava Mk.1</span>
                  </div>
                  <TechTreeImg vehicle="us_merkava_mk_1" type="ground" />
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
                  <div className="tree-item-background" id="Merkava Mk.2B (USA)">
                    <a href="/Merkava_Mk.2B_(USA)" title="Merkava Mk.2B (USA)">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">▃Merkava Mk.2B</span>
                  </div>
                  <TechTreeImg vehicle="us_merkava_mk_2b_late" type="ground" />
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
                  <div className="tree-item-background" id="XM8">
                    <a href="/XM8" title="XM8">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">XM8</span>
                  </div>
                  <TechTreeImg vehicle="us_xm_8" type="ground" />
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
                  <div className="tree-item-background" id="AGS">
                    <a href="/AGS" title="AGS">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">AGS</span>
                  </div>
                  <TechTreeImg vehicle="us_ags_teledyne" type="ground" />
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
              <td>
                <div className="tree-item">
                  <div className="tree-item-background" id="HSTV-L">
                    <a href="/HSTV-L" title="HSTV-L">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">HSTV-L</span>
                  </div>
                  <TechTreeImg vehicle="us_hstv_l" type="ground" />
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
              <td>
                <div className="tree-item">
                  <div className="tree-item-background" id="IPM1">
                    <a href="/IPM1" title="IPM1">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">IPM1</span>
                  </div>
                  <TechTreeImg vehicle="us_m1_ip_abrams" type="ground" />
                </div>
                <div className="tree-arrow">
                  <img src="/images/Arrow-small.png" alt="Arrow.png" />
                </div>
                <div className="tree-item">
                  <div className="tree-item-background" id="M1A1 HC">
                    <a href="/M1A1_HC" title="M1A1 HC">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">M1A1 HC</span>
                  </div>
                  <TechTreeImg vehicle="us_m1a1_hc_abrams" type="ground" />
                </div>
                <div className="tree-arrow">
                  <img src="/images/Arrow-small.png" alt="Arrow.png" />
                </div>
                <div className="tree-item">
                  <div className="tree-item-background" id="M1A2 Abrams">
                    <a href="/M1A2_Abrams" title="M1A2 Abrams">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">M1A2 Abrams</span>
                  </div>
                  <TechTreeImg vehicle="us_m1a2_abrams" type="ground" />
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
                  <div className="tree-item-background" id="XM975">
                    <a href="/XM975" title="XM975">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">XM975</span>
                  </div>
                  <TechTreeImg vehicle="us_xm_975_roland" type="ground" />
                </div>
                <div className="tree-arrow">
                  <img src="/images/Arrow-small.png" alt="Arrow.png" />
                </div>
                <div className="tree-item">
                  <div className="tree-item-background" id="ADATS">
                    <a href="/ADATS" title="ADATS">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">ADATS</span>
                  </div>
                  <TechTreeImg vehicle="us_adats_bradley" type="ground" />
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
                  <div className="tree-item-background" id="M1128">
                    <a href="/M1128" title="M1128">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">M1128</span>
                  </div>
                  <TechTreeImg vehicle="us_m1128_mgs" type="ground" />
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
              <td style={{ borderLeft: "solid 1px #cccccc" }}>
                <div className="tree-item">
                  <div className="tree-item-background" id="M1A1 AIM">
                    <a href="/M1A1_AIM" title="M1A1 AIM">
                      <Item_squad />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">M1A1 AIM</span>
                  </div>
                  <TechTreeImg vehicle="us_m1a1_aim_abrams" type="ground" />
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
                  <div className="tree-item-background" id="M60 AMBT">
                    <a href="/M60_AMBT" title="M60 AMBT">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">M60 AMBT</span>
                  </div>
                  <TechTreeImg vehicle="us_m60a3_slep" type="ground" />
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
                  <div className="tree-item-background" id="Merkava Mk.3D (USA)">
                    <a href="/Merkava_Mk.3D_(USA)" title="Merkava Mk.3D (USA)">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">▃Merkava Mk.3D</span>
                  </div>
                  <TechTreeImg vehicle="us_merkava_mk_3d" type="ground" />
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
                  src="//yewtu.be/embed/eiMde1jVPkM?"
                  allowFullScreen={true}
                  width={640}
                  height={360}
                  frameBorder={0}
                />
              </div>
            </div>
          </div>
          <div className="video_desc">
            <b>American ground forces Rank V</b> - <i>Oxy</i>
          </div>
        </div>
        <div className="video">
          <div className="video_embed">
            <div className="embedvideo autoResize" style={{}}>
              <div className="embedvideowrap" style={{ width: 640 }}>
                <iframe
                  src="//yewtu.be/embed/rXZ0G3sAKQc?"
                  allowFullScreen={true}
                  width={640}
                  height={360}
                  frameBorder={0}
                />
              </div>
            </div>
          </div>
          <div className="video_desc">
            <b>American ground forces Rank IV</b> - <i>Oxy</i>
          </div>
        </div>
        <div className="video">
          <div className="video_embed">
            <div className="embedvideo autoResize" style={{}}>
              <div className="embedvideowrap" style={{ width: 640 }}>
                <iframe
                  src="//yewtu.be/embed/_QaAt6D52Kg?"
                  allowFullScreen={true}
                  width={640}
                  height={360}
                  frameBorder={0}
                />
              </div>
            </div>
          </div>
          <div className="video_desc">
            <b>American ground forces Rank III - Review and Analysis</b> - <i>Oxy</i>
          </div>
        </div>
        <div className="video">
          <div className="video_embed">
            <div className="embedvideo autoResize" style={{}}>
              <div className="embedvideowrap" style={{ width: 640 }}>
                <iframe
                  src="//yewtu.be/embed/QzkUxYDTt1U?"
                  allowFullScreen={true}
                  width={640}
                  height={360}
                  frameBorder={0}
                />
              </div>
            </div>
          </div>
          <div className="video_desc">
            <b>American ground forces Rank II - Review and Analysis</b> - <i>Oxy</i>
          </div>
        </div>
        <div className="video">
          <div className="video_embed">
            <div className="embedvideo autoResize" style={{}}>
              <div className="embedvideowrap" style={{ width: 640 }}>
                <iframe
                  src="//yewtu.be/embed/3G6fGMDbdgE?"
                  allowFullScreen={true}
                  width={640}
                  height={360}
                  frameBorder={0}
                />
              </div>
            </div>
          </div>
          <div className="video_desc">
            <b>American ground forces Rank I - Review and Analysis</b> - <i>Oxy</i>
          </div>
        </div>
        <div className="video">
          <div className="video_embed">
            <div className="embedvideo autoResize" style={{}}>
              <div className="embedvideowrap" style={{ width: 640 }}>
                <iframe
                  src="//yewtu.be/embed/aSP1Bps2w0w?"
                  allowFullScreen={true}
                  width={640}
                  height={360}
                  frameBorder={0}
                />
              </div>
            </div>
          </div>
          <div className="video_desc">
            <b>Climbing the ranks with American vehicles</b> - <i>War Thunder Official Channel</i>
          </div>
        </div>
      </div>
    </div>
  );
}
