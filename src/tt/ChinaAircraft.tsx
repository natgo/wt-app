import { openfolder } from ".";
import { Item_own, Item_prem, TechTreeImg } from "../TechTree";

export function ChinaAircraft() {
  return (
    <div className="mw-parser-output">
      <div className="tree">
        <table rules="rows" width="100%">
          <tbody>
            <tr>
              <th style={{ borderRight: "solid 1px #eeeeee" }} />
              <th colSpan={4} style={{ borderRight: "solid 1px #eeeeee" }}>
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
                  <div className="tree-item-background" id="Gladiator Mk I (China)">
                    <a href="/Gladiator_Mk_I_(China)" title="Gladiator Mk I (China)">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">␗Gladiator&nbsp;Mk&nbsp;I</span>
                  </div>
                  <TechTreeImg vehicle="gladiator_mk1_china" type="aircraft" />
                </div>
                <div className="tree-arrow">
                  <img src="/images/Arrow-small.png" alt="Arrow.png" />
                </div>
                <div className="tree-item">
                  <div className="tree-item-background" id="CW-21">
                    <a href="/CW-21" title="CW-21">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">CW-21</span>
                  </div>
                  <TechTreeImg vehicle="cw_21" type="aircraft" />
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
                      <div className="tree-item-background" id="I-15bis (China)">
                        <a href="/I-15bis_(China)" title="I-15bis (China)">
                          <Item_own />
                        </a>
                      </div>
                      <div className="tree-item-text">
                        <span className="tree-item-text-scroll">␗I-15bis</span>
                      </div>
                      <TechTreeImg vehicle="i-15bis_china" type="aircraft" />
                    </div>
                    <div className="tree-arrow">
                      <img src="/images/Arrow-small.png" alt="Arrow.png" />
                    </div>
                    <div className="tree-item">
                      <div className="tree-item-background" id="I-153 M-62 (China)">
                        <a href="/I-153_M-62_(China)" title="I-153 M-62 (China)">
                          <Item_own />
                        </a>
                      </div>
                      <div className="tree-item-text">
                        <span className="tree-item-text-scroll">␗I-153&nbsp;M-62</span>
                      </div>
                      <TechTreeImg vehicle="i-153_m62_china" type="aircraft" />
                    </div>
                  </div>
                  <div
                    className="tree-group"
                    onClick={(event) => {
                      openfolder(event);
                    }}
                  >
                    <div className="tree-group-text">
                      <span className="tree-item-text-scroll">I-15</span>
                    </div>
                    <div className="tree-group-img">
                      <img
                        src="https://encyclopedia.warthunder.com/slots/i-15_china_group.png"
                        alt="i-15_china_group.png"
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
                      <div className="tree-item-background" id="I-16 Chung 28 (China)">
                        <a href="/I-16_Chung_28_(China)" title="I-16 Chung 28 (China)">
                          <Item_own />
                        </a>
                      </div>
                      <div className="tree-item-text">
                        <span className="tree-item-text-scroll">␗I-16&nbsp;Chung 28</span>
                      </div>
                      <TechTreeImg vehicle="i-16_chung_28" type="aircraft" />
                    </div>
                    <div className="tree-arrow">
                      <img src="/images/Arrow-small.png" alt="Arrow.png" />
                    </div>
                    <div className="tree-item">
                      <div className="tree-item-background" id="I-16 type 5 (China)">
                        <a href="/I-16_type_5_(China)" title="I-16 type 5 (China)">
                          <Item_own />
                        </a>
                      </div>
                      <div className="tree-item-text">
                        <span className="tree-item-text-scroll">␗I-16&nbsp;type&nbsp;5</span>
                      </div>
                      <TechTreeImg vehicle="i-16_type5_1935_china" type="aircraft" />
                    </div>
                    <div className="tree-arrow">
                      <img src="/images/Arrow-small.png" alt="Arrow.png" />
                    </div>
                    <div className="tree-item">
                      <div className="tree-item-background" id="I-16 type 10 (China)">
                        <a href="/I-16_type_10_(China)" title="I-16 type 10 (China)">
                          <Item_own />
                        </a>
                      </div>
                      <div className="tree-item-text">
                        <span className="tree-item-text-scroll">␗I-16&nbsp;type&nbsp;10</span>
                      </div>
                      <TechTreeImg vehicle="i-16_type10_china" type="aircraft" />
                    </div>
                  </div>
                  <div
                    className="tree-group"
                    onClick={(event) => {
                      openfolder(event);
                    }}
                  >
                    <div className="tree-group-text">
                      <span className="tree-item-text-scroll">I-16</span>
                    </div>
                    <div className="tree-group-img">
                      <img
                        src="https://encyclopedia.warthunder.com/slots/i-16_china_group.png"
                        alt="i-16_china_group.png"
                      />
                    </div>
                  </div>
                </div>
                <div className="tree-arrow">
                  <img src="/images/Arrow-small.png" alt="Arrow.png" />
                </div>
                <div className="tree-item">
                  <div className="tree-item-background" id="Ki-27 otsu (China)">
                    <a href="/Ki-27_otsu_(China)" title="Ki-27 otsu (China)">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">␗Ki-27 otsu</span>
                  </div>
                  <TechTreeImg vehicle="ki-27_otsu_china" type="aircraft" />
                </div>
                <div className="tree-arrow">
                  <img src="/images/Arrow-small.png" alt="Arrow.png" />
                </div>
              </td>
              <td>
                <div className="tree-item">
                  <div className="tree-item-background" id="Hs 123 A-1 (China)">
                    <a href="/Hs_123_A-1_(China)" title="Hs 123 A-1 (China)">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">␗Hs 123 A-1</span>
                  </div>
                  <TechTreeImg vehicle="hs-123a-1_china" type="aircraft" />
                </div>
                <div className="tree-arrow">
                  <img src="/images/Arrow-small.png" alt="Arrow.png" />
                </div>
                <div className="tree-item">
                  <div className="tree-item-background" id="V-11">
                    <a href="/V-11" title="V-11">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">V-11</span>
                  </div>
                  <TechTreeImg vehicle="v_11g" type="aircraft" />
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
                  <div className="tree-item-background" id="Martin 139WC">
                    <a href="/Martin_139WC" title="Martin 139WC">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">Martin 139WC</span>
                  </div>
                  <TechTreeImg vehicle="martin_139wc" type="aircraft" />
                </div>
                <div className="tree-arrow">
                  <img src="/images/Arrow-small.png" alt="Arrow.png" />
                </div>
                <div className="tree-item">
                  <div className="tree-item-background" id="A-29">
                    <a href="/A-29" title="A-29">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">A-29</span>
                  </div>
                  <TechTreeImg vehicle="a_29_hudson" type="aircraft" />
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
                  <div className="tree-item-background" id="Hawk III">
                    <a href="/Hawk_III" title="Hawk III">
                      <Item_prem />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">Hawk III</span>
                  </div>
                  <TechTreeImg vehicle="hawk_iii" type="aircraft" />
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
                  <div className="tree-item-background" id="D.510C">
                    <a href="/D.510C" title="D.510C">
                      <Item_prem />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">D.510C</span>
                  </div>
                  <TechTreeImg vehicle="d_510c" type="aircraft" />
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
                  II Rank
                </div>
              </th>
              <td>
                <div className="tree-item">
                  <div className="tree-item-background" id="P-66">
                    <a href="/P-66" title="P-66">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">P-66</span>
                  </div>
                  <div className="tree-item-img">
                    <img src="https://encyclopedia.warthunder.com/slots/p-66.png" alt="p-66.png" />
                  </div>
                </div>
                <div className="tree-arrow">
                  <img src="/images/Arrow-small.png" alt="Arrow.png" />
                </div>
                <div className="tree-item">
                  <div className="tree-item-background" id="P-40E-1 (China)">
                    <a href="/P-40E-1_(China)" title="P-40E-1 (China)">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">␗P-40E-1</span>
                  </div>
                  <TechTreeImg vehicle="p-40e_china" type="aircraft" />
                </div>
                <div className="tree-arrow">
                  <img src="/images/Arrow-small.png" alt="Arrow.png" />
                </div>
                <div className="tree-item">
                  <div className="tree-item-background" id="P-43A-1 (China)">
                    <a href="/P-43A-1_(China)" title="P-43A-1 (China)">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">␗P-43A-1</span>
                  </div>
                  <TechTreeImg vehicle="p-43a-1_china" type="aircraft" />
                </div>
                <div className="tree-arrow">
                  <img src="/images/Arrow-small.png" alt="Arrow.png" />
                </div>
              </td>
              <td>
                <div className="tree-item">
                  <div className="tree-item-background" id="Ki-43-III ko (China)">
                    <a href="/Ki-43-III_ko_(China)" title="Ki-43-III ko (China)">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">␗Ki-43-III ko</span>
                  </div>
                  <TechTreeImg vehicle="ki_43_3_ko" type="aircraft" />
                </div>
                <div className="tree-arrow">
                  <img src="/images/Arrow-small.png" alt="Arrow.png" />
                </div>
                <div className="tree-item">
                  <div className="tree-item-background" id="Ki-44-II hei (China)">
                    <a href="/Ki-44-II_hei_(China)" title="Ki-44-II hei (China)">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">␗Ki-44-II hei</span>
                  </div>
                  <TechTreeImg vehicle="ki_44_2_hei_china" type="aircraft" />
                </div>
                <div className="tree-arrow">
                  <img src="/images/Arrow-small.png" alt="Arrow.png" />
                </div>
                <div className="tree-item">
                  <div className="tree-item-background" id="Ki-61-I otsu (China)">
                    <a href="/Ki-61-I_otsu_(China)" title="Ki-61-I otsu (China)">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">␗Ki-61-I otsu</span>
                  </div>
                  <TechTreeImg vehicle="ki_61_1a_otsu_china" type="aircraft" />
                </div>
                <div className="tree-arrow">
                  <img src="/images/Arrow-small.png" alt="Arrow.png" />
                </div>
              </td>
              <td>
                <div className="tree-item">
                  <div className="tree-item-background" id="V-12D">
                    <a href="/V-12D" title="V-12D">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">V-12D</span>
                  </div>
                  <TechTreeImg vehicle="v_12d" type="aircraft" />
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
                  <div className="tree-item-background" id="SB 2M-103U (China)">
                    <a href="/SB_2M-103U_(China)" title="SB 2M-103U (China)">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">␗SB&nbsp;2M-103U</span>
                  </div>
                  <TechTreeImg vehicle="sb_2m_103u_china" type="aircraft" />
                </div>
                <div className="tree-arrow">
                  <img src="/images/Arrow-small.png" alt="Arrow.png" />
                </div>
                <div className="tree-item">
                  <div className="tree-item-background" id="DB-3A (China)">
                    <a href="/DB-3A_(China)" title="DB-3A (China)">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">␗DB-3A</span>
                  </div>
                  <TechTreeImg vehicle="db_3a_china" type="aircraft" />
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
                  <div className="tree-item-background" id="H-81A-2">
                    <a href="/H-81A-2" title="H-81A-2">
                      <Item_prem />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">H-81A-2</span>
                  </div>
                  <TechTreeImg vehicle="p-40c_china" type="aircraft" />
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
                  <div className="tree-item-background" id="Ki-45 hei/tei (China)">
                    <a href="/Ki-45_hei/tei_(China)" title="Ki-45 hei/tei (China)">
                      <Item_prem />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">␗Ki-45&nbsp;hei/tei</span>
                  </div>
                  <TechTreeImg vehicle="ki-45_hei_tei_china" type="aircraft" />
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
                  III Rank
                </div>
              </th>
              <td>
                <div className="tree-item">
                  <div className="tree-item-background" id="P-47D-23-RA (China)">
                    <a href="/P-47D-23-RA_(China)" title="P-47D-23-RA (China)">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">␗P-47D-23-RA</span>
                  </div>
                  <TechTreeImg vehicle="p-47d_23_ra_china_rocaf" type="aircraft" />
                </div>
                <div className="tree-arrow">
                  <img src="/images/Arrow-small.png" alt="Arrow.png" />
                </div>
                <div className="tree-item">
                  <div className="tree-item-background" id="P-47D-30 (China)">
                    <a href="/P-47D-30_(China)" title="P-47D-30 (China)">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">␗P-47D-30</span>
                  </div>
                  <TechTreeImg vehicle="p-47d_30_china" type="aircraft" />
                </div>
                <div className="tree-arrow">
                  <img src="/images/Arrow-small.png" alt="Arrow.png" />
                </div>
              </td>
              <td>
                <div className="tree-item">
                  <div className="tree-item-background" id="I-16 type 17 (China)">
                    <a href="/I-16_type_17_(China)" title="I-16 type 17 (China)">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">␗I-16&nbsp;type&nbsp;17</span>
                  </div>
                  <TechTreeImg vehicle="i-16_type17_china" type="aircraft" />
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
                  <div className="tree-item-background" id="B-25J-30 (China)">
                    <a href="/B-25J-30_(China)" title="B-25J-30 (China)">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">␗B-25J-30</span>
                  </div>
                  <TechTreeImg vehicle="b_25j_30_china" type="aircraft" />
                </div>
                <div className="tree-arrow">
                  <img src="/images/Arrow-small.png" alt="Arrow.png" />
                </div>
                <div className="tree-item">
                  <div className="tree-item-background" id="Mosquito FB.Mk.26">
                    <a href="/Mosquito_FB.Mk.26" title="Mosquito FB.Mk.26">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">Mosquito&nbsp;FB.Mk.26</span>
                  </div>
                  <TechTreeImg vehicle="mosquito_fb_mk26_china" type="aircraft" />
                </div>
                <div className="tree-arrow">
                  <img src="/images/Arrow-small.png" alt="Arrow.png" />
                </div>
              </td>
              <td>
                <div className="tree-item">
                  <div className="tree-item-background" id="P1Y1 mod. 11 (China)">
                    <a href="/P1Y1_mod._11_(China)" title="P1Y1 mod. 11 (China)">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">␗P1Y1 mod. 11</span>
                  </div>
                  <TechTreeImg vehicle="p1y1_mod11_china" type="aircraft" />
                </div>
                <div className="tree-arrow">
                  <img src="/images/Arrow-small.png" alt="Arrow.png" />
                </div>
                <div className="tree-item">
                  <div className="tree-item-background" id="PB4Y-2 (China)">
                    <a href="/PB4Y-2_(China)" title="PB4Y-2 (China)">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">␗PB4Y-2</span>
                  </div>
                  <TechTreeImg vehicle="pb4y-2_china" type="aircraft" />
                </div>
                <div className="tree-arrow">
                  <img src="/images/Arrow-small.png" alt="Arrow.png" />
                </div>
              </td>
              <td style={{ borderLeft: "solid 1px #cccccc" }}>
                <div className="tree-item">
                  <div className="tree-item-background" id="A6M2 (China)">
                    <a href="/A6M2_(China)" title="A6M2 (China)">
                      <Item_prem />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">␗A6M2</span>
                  </div>
                  <TechTreeImg vehicle="a6m2_zero_china" type="aircraft" />
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
                  <div className="tree-item-background" id="P-51D-20 (China)">
                    <a href="/P-51D-20_(China)" title="P-51D-20 (China)">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">␗P-51D-20</span>
                  </div>
                  <TechTreeImg vehicle="p-51d-20_china" type="aircraft" />
                </div>
                <div className="tree-arrow">
                  <img src="/images/Arrow-small.png" alt="Arrow.png" />
                </div>
                <div className="tree-item">
                  <div className="tree-item-background" id="P-38L-1 (China)">
                    <a href="/P-38L-1_(China)" title="P-38L-1 (China)">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">␗P-38L-1</span>
                  </div>
                  <TechTreeImg vehicle="p-38l_1_china_rocaf" type="aircraft" />
                </div>
                <div className="tree-arrow">
                  <img src="/images/Arrow-small.png" alt="Arrow.png" />
                </div>
                <div className="tree-item">
                  <div className="tree-item-background" id="P-51K (China)">
                    <a href="/P-51K_(China)" title="P-51K (China)">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">␗P-51K</span>
                  </div>
                  <TechTreeImg vehicle="p-51k" type="aircraft" />
                </div>
                <div className="tree-arrow">
                  <img src="/images/Arrow-small.png" alt="Arrow.png" />
                </div>
              </td>
              <td>
                <div className="tree-item">
                  <div className="tree-item-background" id="La-11 (China)">
                    <a href="/La-11_(China)" title="La-11 (China)">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">␗La-11</span>
                  </div>
                  <TechTreeImg vehicle="la-11_china" type="aircraft" />
                </div>
                <div className="tree-arrow">
                  <img src="/images/Arrow-small.png" alt="Arrow.png" />
                </div>
                <div className="tree-item">
                  <div className="tree-item-background" id="La-9 (China)">
                    <a href="/La-9_(China)" title="La-9 (China)">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">␗La-9</span>
                  </div>
                  <TechTreeImg vehicle="la-9_china" type="aircraft" />
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
                  <div className="tree-item-background" id="IL-10 (1946) (China)">
                    <a href="/IL-10_(1946)_(China)" title="IL-10 (1946) (China)">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">␗IL-10 (1946)</span>
                  </div>
                  <TechTreeImg vehicle="il-10_1946_china" type="aircraft" />
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
                  <div className="tree-item-background" id="Tu-2S-44 (China)">
                    <a href="/Tu-2S-44_(China)" title="Tu-2S-44 (China)">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">␗Tu-2S-44</span>
                  </div>
                  <TechTreeImg vehicle="tu-2_postwar_china" type="aircraft" />
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
                  <div className="tree-item-background" id="Ki-84 ko (China)">
                    <a href="/Ki-84_ko_(China)" title="Ki-84 ko (China)">
                      <Item_prem />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">␗Ki-84 ko</span>
                  </div>
                  <TechTreeImg vehicle="ki_84_ko_china" type="aircraft" />
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
                  <div className="tree-item-background" id="F-86F-30 (China)">
                    <a href="/F-86F-30_(China)" title="F-86F-30 (China)">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">␗F-86F-30</span>
                  </div>
                  <TechTreeImg vehicle="f-86f-30_china" type="aircraft" />
                </div>
                <div className="tree-arrow">
                  <img src="/images/Arrow-small.png" alt="Arrow.png" />
                </div>
                <div className="tree-item">
                  <div className="tree-item-background" id="F-86F-40 (China)">
                    <a href="/F-86F-40_(China)" title="F-86F-40 (China)">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">␗F-86F-40</span>
                  </div>
                  <TechTreeImg vehicle="f-86f-40_china" type="aircraft" />
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
                      <div className="tree-item-background" id="MiG-9 (China)">
                        <a href="/MiG-9_(China)" title="MiG-9 (China)">
                          <Item_own />
                        </a>
                      </div>
                      <div className="tree-item-text">
                        <span className="tree-item-text-scroll">␗MiG-9</span>
                      </div>
                      <TechTreeImg vehicle="mig-9_china" type="aircraft" />
                    </div>
                    <div className="tree-arrow">
                      <img src="/images/Arrow-small.png" alt="Arrow.png" />
                    </div>
                    <div className="tree-item">
                      <div className="tree-item-background" id="MiG-9 (l) (China)">
                        <a href="/MiG-9_(l)_(China)" title="MiG-9 (l) (China)">
                          <Item_own />
                        </a>
                      </div>
                      <div className="tree-item-text">
                        <span className="tree-item-text-scroll">␗MiG-9 (l)</span>
                      </div>
                      <TechTreeImg vehicle="mig-9_late_china" type="aircraft" />
                    </div>
                  </div>
                  <div
                    className="tree-group"
                    onClick={(event) => {
                      openfolder(event);
                    }}
                  >
                    <div className="tree-group-text">
                      <span className="tree-item-text-scroll">MiG-9</span>
                    </div>
                    <div className="tree-group-img">
                      <img
                        src="https://encyclopedia.warthunder.com/slots/mig-9_china_group.png"
                        alt="mig-9_china_group.png"
                      />
                    </div>
                  </div>
                </div>
                <div className="tree-arrow">
                  <img src="/images/Arrow-small.png" alt="Arrow.png" />
                </div>
                <div className="tree-item">
                  <div className="tree-item-background" id="J-2">
                    <a href="/J-2" title="J-2">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">J-2</span>
                  </div>
                  <TechTreeImg vehicle="mig-15bis_nr23_china" type="aircraft" />
                </div>
                <div className="tree-arrow">
                  <img src="/images/Arrow-small.png" alt="Arrow.png" />
                </div>
                <div className="tree-item">
                  <div className="tree-item-background" id="J-4">
                    <a href="/J-4" title="J-4">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">J-4</span>
                  </div>
                  <TechTreeImg vehicle="mig-17_china" type="aircraft" />
                </div>
                <div className="tree-arrow">
                  <img src="/images/Arrow-small.png" alt="Arrow.png" />
                </div>
              </td>
              <td>
                <div className="tree-item">
                  <div className="tree-item-background" id="F-84G-21-RE (China)">
                    <a href="/F-84G-21-RE_(China)" title="F-84G-21-RE (China)">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">␗F-84G-21-RE</span>
                  </div>
                  <TechTreeImg vehicle="f-84g_china" type="aircraft" />
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
                  <div className="tree-item-background" id="Tu-4 (China)">
                    <a href="/Tu-4_(China)" title="Tu-4 (China)">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">␗Tu-4</span>
                  </div>
                  <TechTreeImg vehicle="tu_4_china" type="aircraft" />
                </div>
                <div className="tree-arrow">
                  <img src="/images/Arrow-small.png" alt="Arrow.png" />
                </div>
                <div className="tree-item">
                  <div className="tree-item-background" id="H-5">
                    <a href="/H-5" title="H-5">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">H-5</span>
                  </div>
                  <TechTreeImg vehicle="il_28_china" type="aircraft" />
                </div>
              </td>
              <td style={{ borderLeft: "solid 1px #cccccc" }}>
                <div className="tree-item">
                  <div className="tree-item-background" id="Shenyang F-5">
                    <a href="/Shenyang_F-5" title="Shenyang F-5">
                      <Item_prem />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">Shenyang F-5</span>
                  </div>
                  <TechTreeImg vehicle="mig-17_f5" type="aircraft" />
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
                  <div className="tree-item-background" id="F-100A (China)">
                    <a href="/F-100A_(China)" title="F-100A (China)">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">␗F-100A</span>
                  </div>
                  <TechTreeImg vehicle="f-100a_china" type="aircraft" />
                </div>
                <div className="tree-arrow">
                  <img src="/images/Arrow-small.png" alt="Arrow.png" />
                </div>
                <div className="tree-item">
                  <div className="tree-item-background" id="F-104A (China)">
                    <a href="/F-104A_(China)" title="F-104A (China)">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">␗F-104A</span>
                  </div>
                  <TechTreeImg vehicle="f-104a_china" type="aircraft" />
                </div>
                <div className="tree-arrow">
                  <img src="/images/Arrow-small.png" alt="Arrow.png" />
                </div>
              </td>
              <td>
                <div className="tree-item">
                  <div className="tree-item-background" id="J-6A">
                    <a href="/J-6A" title="J-6A">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">J-6A</span>
                  </div>
                  <TechTreeImg vehicle="mig-19j_6a" type="aircraft" />
                </div>
                <div className="tree-arrow">
                  <img src="/images/Arrow-small.png" alt="Arrow.png" />
                </div>
                <div className="tree-item">
                  <div className="tree-item-background" id="J-7II">
                    <a href="/J-7II" title="J-7II">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">J-7II</span>
                  </div>
                  <TechTreeImg vehicle="j_7_mk2" type="aircraft" />
                </div>
                <div className="tree-arrow">
                  <img src="/images/Arrow-small.png" alt="Arrow.png" />
                </div>
              </td>
              <td>
                <div className="tree-item">
                  <div className="tree-item-background" id="Q-5 early">
                    <a href="/Q-5_early" title="Q-5 early">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">Q-5 early</span>
                  </div>
                  <TechTreeImg vehicle="q_5_early" type="aircraft" />
                </div>
                <div className="tree-arrow">
                  <img src="/images/Arrow-small.png" alt="Arrow.png" />
                </div>
                <div className="tree-item">
                  <div className="tree-item-background" id="Q-5A">
                    <a href="/Q-5A" title="Q-5A">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">Q-5A</span>
                  </div>
                  <div className="tree-item-img">
                    <img src="https://encyclopedia.warthunder.com/slots/q_5a.png" alt="q_5a.png" />
                  </div>
                </div>
              </td>
              <td />
              <td style={{ borderLeft: "solid 1px #cccccc" }}>
                <div className="tree-item">
                  <div className="tree-item-background" id="A-5C">
                    <a href="/A-5C" title="A-5C">
                      <Item_prem />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">A-5C</span>
                  </div>
                  <div className="tree-item-img">
                    <img src="https://encyclopedia.warthunder.com/slots/a_5c.png" alt="a_5c.png" />
                  </div>
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
                  <div className="tree-item-background" id="F-104G (China)">
                    <a href="/F-104G_(China)" title="F-104G (China)">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">␗F-104G</span>
                  </div>
                  <TechTreeImg vehicle="f-104g_china" type="aircraft" />
                </div>
                <div className="tree-arrow">
                  <img src="/images/Arrow-small.png" alt="Arrow.png" />
                </div>
                <div className="tree-item">
                  <div className="tree-item-background" id="F-5A (China)">
                    <a href="/F-5A_(China)" title="F-5A (China)">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">␗F-5A</span>
                  </div>
                  <TechTreeImg vehicle="f-5a_china" type="aircraft" />
                </div>
                <div className="tree-arrow">
                  <img src="/images/Arrow-small.png" alt="Arrow.png" />
                </div>
                <div className="tree-item">
                  <div className="tree-item-background" id="F-5E (China)">
                    <a href="/F-5E_(China)" title="F-5E (China)">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">␗F-5E</span>
                  </div>
                  <TechTreeImg vehicle="f-5e_aidc" type="aircraft" />
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
                  <div className="tree-item-background" id="J-7E">
                    <a href="/J-7E" title="J-7E">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">J-7E</span>
                  </div>
                  <div className="tree-item-img">
                    <img src="https://encyclopedia.warthunder.com/slots/j_7e.png" alt="j_7e.png" />
                  </div>
                </div>
                <div className="tree-arrow">
                  <img src="/images/Arrow-small.png" alt="Arrow.png" />
                </div>
                <div className="tree-item">
                  <div className="tree-item-background" id="J-8B">
                    <a href="/J-8B" title="J-8B">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">J-8B</span>
                  </div>
                  <div className="tree-item-img">
                    <img src="https://encyclopedia.warthunder.com/slots/j_8b.png" alt="j_8b.png" />
                  </div>
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
    </div>
  );
}
