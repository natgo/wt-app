import { openfolder } from ".";
import { Item_own, TechTreeImg, Item_prem, Item_squad } from "../TechTree";

export function USSRGround() {
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
                  <div className="tree-item-background" id="BT-5">
                    <a href="/BT-5" title="BT-5">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">BT-5</span>
                  </div>
                  <TechTreeImg vehicle="ussr_bt_5" type="ground" />
                </div>
                <div className="tree-arrow">
                  <img src="/images/Arrow-small.png" alt="Arrow.png" />
                </div>
                <div className="tree-item">
                  <div className="tree-item-background" id="BT-7">
                    <a href="/BT-7" title="BT-7">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">BT-7</span>
                  </div>
                  <TechTreeImg vehicle="ussr_bt_7_1937" type="ground" />
                </div>
                <div className="tree-arrow">
                  <img src="/images/Arrow-small.png" alt="Arrow.png" />
                </div>
                <div className="tree-item">
                  <div className="tree-item-background" id="BT-7M">
                    <a href="/BT-7M" title="BT-7M">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">BT-7M</span>
                  </div>
                  <TechTreeImg vehicle="ussr_bt_7_m" type="ground" />
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
                  <div className="tree-item-background" id="T-26">
                    <a href="/T-26" title="T-26">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">T-26</span>
                  </div>
                  <TechTreeImg vehicle="ussr_t_26_1940" type="ground" />
                </div>
                <div className="tree-arrow">
                  <img src="/images/Arrow-small.png" alt="Arrow.png" />
                </div>
                <div className="tree-item">
                  <div className="tree-item-background" id="T-26-4">
                    <a href="/T-26-4" title="T-26-4">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">T-26-4</span>
                  </div>
                  <TechTreeImg vehicle="ussr_t_26_4" type="ground" />
                </div>
                <div className="tree-arrow">
                  <img src="/images/Arrow-small.png" alt="Arrow.png" />
                </div>
                <div className="tree-item">
                  <div className="tree-item-background" id="T-28 (1938)">
                    <a href="/T-28_(1938)" title="T-28 (1938)">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">T-28 (1938)</span>
                  </div>
                  <TechTreeImg vehicle="ussr_t_28_1938" type="ground" />
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
                  <div className="tree-item-background" id="T-60">
                    <a href="/T-60" title="T-60">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">T-60</span>
                  </div>
                  <TechTreeImg vehicle="ussr_t_60_1941" type="ground" />
                </div>
                <div className="tree-arrow">
                  <img src="/images/Arrow-small.png" alt="Arrow.png" />
                </div>
                <div className="tree-item">
                  <div className="tree-item-background" id="T-70">
                    <a href="/T-70" title="T-70">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">T-70</span>
                  </div>
                  <TechTreeImg vehicle="ussr_t_70_1942" type="ground" />
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
                  <div className="tree-item-background" id="SU-5-1">
                    <a href="/SU-5-1" title="SU-5-1">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">SU-5-1</span>
                  </div>
                  <TechTreeImg vehicle="ussr_su_5_1" type="ground" />
                </div>
                <div className="tree-arrow">
                  <img src="/images/Arrow-small.png" alt="Arrow.png" />
                </div>
                <div className="tree-item">
                  <div className="tree-item-background" id="SU-76M">
                    <a href="/SU-76M" title="SU-76M">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">SU-76M</span>
                  </div>
                  <TechTreeImg vehicle="ussr_su_76m_1943" type="ground" />
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
                  <div className="tree-item-background" id="GAZ-AAA (4M)">
                    <a href="/GAZ-AAA_(4M)" title="GAZ-AAA (4M)">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">GAZ-AAA (4M)</span>
                  </div>
                  <TechTreeImg vehicle="ussr_gaz_4m" type="ground" />
                </div>
                <div className="tree-arrow">
                  <img src="/images/Arrow-small.png" alt="Arrow.png" />
                </div>
                <div className="tree-item">
                  <div className="tree-item-background" id="GAZ-AAA (DShK)">
                    <a href="/GAZ-AAA_(DShK)" title="GAZ-AAA (DShK)">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">GAZ-AAA (DShK)</span>
                  </div>
                  <TechTreeImg vehicle="ussr_gaz_dshk" type="ground" />
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
                  <div className="tree-item-background" id="T-26 (1st Gv.T.Br.)">
                    <a href="/T-26_(1st_Gv.T.Br.)" title="T-26 (1st Gv.T.Br.)">
                      <Item_prem />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">T-26 (1st Gv.T.Br.)</span>
                  </div>
                  <TechTreeImg vehicle="ussr_t_26_1940_1st_gvtbr" type="ground" />
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
                  <div className="tree-item-background" id="T-35">
                    <a href="/T-35" title="T-35">
                      <Item_prem />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">T-35</span>
                  </div>
                  <TechTreeImg vehicle="ussr_t_35" type="ground" />
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
                  <div className="tree-item-background" id="SU-57">
                    <a href="/SU-57" title="SU-57">
                      <Item_prem />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">SU-57</span>
                  </div>
                  <TechTreeImg vehicle="ussr_su_57" type="ground" />
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
                  <div className="tree-item-background" id="T-III (USSR)">
                    <a href="/T-III_(USSR)" title="T-III (USSR)">
                      <Item_prem />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">▂T-III</span>
                  </div>
                  <TechTreeImg vehicle="ussr_pzkpfw_iii_ausf_j_l42" type="ground" />
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
                  <div className="tree-item-background" id="BM-8-24">
                    <a href="/BM-8-24" title="BM-8-24">
                      <Item_prem />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">BM-8-24</span>
                  </div>
                  <TechTreeImg vehicle="ussr_bm_8_24" type="ground" />
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
                  <div className="tree-item-background" id="T-26E">
                    <a href="/T-26E" title="T-26E">
                      <Item_prem />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">T-26E</span>
                  </div>
                  <TechTreeImg vehicle="ussr_t_26e" type="ground" />
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
                  <div className="tree-item-background" id="BT-7 TD">
                    <a href="/BT-7_TD" title="BT-7 TD">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">BT-7 TD</span>
                  </div>
                  <TechTreeImg vehicle="ussr_bt_7_1937_td" type="ground" />
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
                  <div className="tree-item-background" id="RBT-5">
                    <a href="/RBT-5" title="RBT-5">
                      <Item_prem />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">RBT-5</span>
                  </div>
                  <TechTreeImg vehicle="ussr_rbt_5" type="ground" />
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
                  <div className="tree-item-background" id="BA-11">
                    <a href="/BA-11" title="BA-11">
                      <Item_prem />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">BA-11</span>
                  </div>
                  <TechTreeImg vehicle="ussr_ba_11" type="ground" />
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
                  <div className="tree-item-background" id="M3 Medium (USSR)">
                    <a href="/M3_Medium_(USSR)" title="M3 Medium (USSR)">
                      <Item_prem />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">▂M3 Medium</span>
                  </div>
                  <TechTreeImg vehicle="ussr_m3c" type="ground" />
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
                  <div className="tree-item-background" id="T-50">
                    <a href="/T-50" title="T-50">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">T-50</span>
                  </div>
                  <TechTreeImg vehicle="ussr_t_50" type="ground" />
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
                      <div className="tree-item-background" id="T-34 (1940)">
                        <a href="/T-34_(1940)" title="T-34 (1940)">
                          <Item_own />
                        </a>
                      </div>
                      <div className="tree-item-text">
                        <span className="tree-item-text-scroll">T-34 (1940)</span>
                      </div>
                      <TechTreeImg vehicle="ussr_t_34_1941_l_11" type="ground" />
                    </div>
                    <div className="tree-arrow">
                      <img src="/images/Arrow-small.png" alt="Arrow.png" />
                    </div>
                    <div className="tree-item">
                      <div className="tree-item-background" id="T-34 (1941)">
                        <a href="/T-34_(1941)" title="T-34 (1941)">
                          <Item_own />
                        </a>
                      </div>
                      <div className="tree-item-text">
                        <span className="tree-item-text-scroll">T-34 (1941)</span>
                      </div>
                      <TechTreeImg vehicle="ussr_t_34_1941" type="ground" />
                    </div>
                  </div>
                  <div
                    className="tree-group"
                    onClick={(event) => {
                      openfolder(event);
                    }}
                  >
                    <div className="tree-group-text">
                      <span className="tree-item-text-scroll">T-34</span>
                    </div>
                    <div className="tree-group-img">
                      <img
                        src="https://encyclopedia.warthunder.com/slots/ussr_t_34_40_41_group.png"
                        alt="ussr_t_34_40_41_group.png"
                      />
                    </div>
                  </div>
                </div>
                <div className="tree-arrow">
                  <img src="/images/Arrow-small.png" alt="Arrow.png" />
                </div>
                <div className="tree-item">
                  <div className="tree-item-background" id="T-34 (1942)">
                    <a href="/T-34_(1942)" title="T-34 (1942)">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">T-34 (1942)</span>
                  </div>
                  <TechTreeImg vehicle="ussr_t_34_1942" type="ground" />
                </div>
                <div className="tree-arrow">
                  <img src="/images/Arrow-small.png" alt="Arrow.png" />
                </div>
                <div className="tree-item">
                  <div className="tree-item-background" id="T-34E STZ">
                    <a href="/T-34E_STZ" title="T-34E STZ">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">T-34E STZ</span>
                  </div>
                  <TechTreeImg vehicle="ussr_t_34e_stz" type="ground" />
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
                <div style={{ position: "relative" }}>
                  <div
                    className="tree-group-collapse"
                    style={{ display: "none", position: "absolute" }}
                  >
                    <div className="tree-item">
                      <div className="tree-item-background" id="T-28">
                        <a href="/T-28" title="T-28">
                          <Item_own />
                        </a>
                      </div>
                      <div className="tree-item-text">
                        <span className="tree-item-text-scroll">T-28</span>
                      </div>
                      <TechTreeImg vehicle="ussr_t_28" type="ground" />
                    </div>
                    <div className="tree-arrow">
                      <img src="/images/Arrow-small.png" alt="Arrow.png" />
                    </div>
                    <div className="tree-item">
                      <div className="tree-item-background" id="T-28E">
                        <a href="/T-28E" title="T-28E">
                          <Item_own />
                        </a>
                      </div>
                      <div className="tree-item-text">
                        <span className="tree-item-text-scroll">T-28E</span>
                      </div>
                      <TechTreeImg vehicle="ussr_t_28e" type="ground" />
                    </div>
                  </div>
                  <div
                    className="tree-group"
                    onClick={(event) => {
                      openfolder(event);
                    }}
                  >
                    <div className="tree-group-text">
                      <span className="tree-item-text-scroll">T-28/T-28E</span>
                    </div>
                    <div className="tree-group-img">
                      <img
                        src="https://encyclopedia.warthunder.com/slots/ussr_t_28_t_28e_group.png"
                        alt="ussr_t_28_t_28e_group.png"
                      />
                    </div>
                  </div>
                </div>
                <div className="tree-arrow">
                  <img src="/images/Arrow-small.png" alt="Arrow.png" />
                </div>
                <div className="tree-item">
                  <div className="tree-item-background" id="KV-1 (L-11)">
                    <a href="/KV-1_(L-11)" title="KV-1 (L-11)">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">KV-1 (L-11)</span>
                  </div>
                  <TechTreeImg vehicle="ussr_kv_1_l_11" type="ground" />
                </div>
                <div className="tree-arrow">
                  <img src="/images/Arrow-small.png" alt="Arrow.png" />
                </div>
                <div className="tree-item">
                  <div className="tree-item-background" id="KV-2 (1939)">
                    <a href="/KV-2_(1939)" title="KV-2 (1939)">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">KV-2 (1939)</span>
                  </div>
                  <TechTreeImg vehicle="ussr_kv_2_1939" type="ground" />
                </div>
                <div className="tree-arrow">
                  <img src="/images/Arrow-small.png" alt="Arrow.png" />
                </div>
                <div className="tree-item">
                  <div className="tree-item-background" id="KV-1S">
                    <a href="/KV-1S" title="KV-1S">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">KV-1S</span>
                  </div>
                  <TechTreeImg vehicle="ussr_kv_1s" type="ground" />
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
                  <div className="tree-item-background" id="T-80">
                    <a href="/T-80" title="T-80">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">T-80</span>
                  </div>
                  <TechTreeImg vehicle="ussr_t_80" type="ground" />
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
                  <img src="/images/Arrow_center_small.png" alt="Arrow_center_small.png" />
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
                  <div className="tree-item-background" id="SU-122">
                    <a href="/SU-122" title="SU-122">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">SU-122</span>
                  </div>
                  <TechTreeImg vehicle="ussr_su_122" type="ground" />
                </div>
                <div className="tree-arrow">
                  <img src="/images/Arrow-small.png" alt="Arrow.png" />
                </div>
                <div className="tree-item">
                  <div className="tree-item-background" id="ZiS-30">
                    <a href="/ZiS-30" title="ZiS-30">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">ZiS-30</span>
                  </div>
                  <TechTreeImg vehicle="ussr_zis_30" type="ground" />
                </div>
                <div className="tree-arrow">
                  <img src="/images/Arrow-small.png" alt="Arrow.png" />
                </div>
                <div className="tree-item">
                  <div className="tree-item-background" id="SU-57B">
                    <a href="/SU-57B" title="SU-57B">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">SU-57B</span>
                  </div>
                  <TechTreeImg vehicle="ussr_su_57b" type="ground" />
                </div>
                <div className="tree-arrow">
                  <img src="/images/Arrow-small.png" alt="Arrow.png" />
                </div>
                <div className="tree-item">
                  <div className="tree-item-background" id="YaG-10 (29-K)">
                    <a href="/YaG-10_(29-K)" title="YaG-10 (29-K)">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">YaG-10 (29-K)</span>
                  </div>
                  <TechTreeImg vehicle="ussr_zsu_29k" type="ground" />
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
                  <div className="tree-item-background" id="GAZ-MM (72-K)">
                    <a href="/GAZ-MM_(72-K)" title="GAZ-MM (72-K)">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">GAZ-MM (72-K)</span>
                  </div>
                  <TechTreeImg vehicle="ussr_gaz_mm_72k" type="ground" />
                </div>
                <div className="tree-arrow">
                  <img src="/images/Arrow-small.png" alt="Arrow.png" />
                </div>
                <div className="tree-item">
                  <div className="tree-item-background" id="BTR-152A">
                    <a href="/BTR-152A" title="BTR-152A">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">BTR-152A</span>
                  </div>
                  <TechTreeImg vehicle="ussr_btr_152a" type="ground" />
                </div>
                <div className="tree-arrow">
                  <img src="/images/Arrow-small.png" alt="Arrow.png" />
                </div>
                <div className="tree-item">
                  <div className="tree-item-background" id="ZiS-12 (94-KM)">
                    <a href="/ZiS-12_(94-KM)" title="ZiS-12 (94-KM)">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">ZiS-12 (94-KM)</span>
                  </div>
                  <TechTreeImg vehicle="ussr_zis_12_94km_1945" type="ground" />
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
                  <img src="/images/Arrow_center_small.png" alt="Arrow_center_small.png" />
                  <br />
                  <img src="/images/Arrow_center.png" alt="Arrow_center.png" />
                  <br />
                  <img src="/images/Arrow_head.png" alt="Arrow_head.png" />
                </div>
              </td>
              <td style={{ borderLeft: "solid 1px #cccccc" }}>
                <div className="tree-item">
                  <div className="tree-item-background" id="T-126">
                    <a href="/T-126" title="T-126">
                      <Item_prem />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">T-126</span>
                  </div>
                  <TechTreeImg vehicle="ussr_t_126sp" type="ground" />
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
                  <div className="tree-item-background" id="ZUT-37">
                    <a href="/ZUT-37" title="ZUT-37">
                      <Item_prem />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">ZUT-37</span>
                  </div>
                  <TechTreeImg vehicle="ussr_zut_37" type="ground" />
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
                  <div className="tree-item-background" id="SMK">
                    <a href="/SMK" title="SMK">
                      <Item_prem />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">SMK</span>
                  </div>
                  <TechTreeImg vehicle="ussr_smk" type="ground" />
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
                  <div className="tree-item-background" id="BM-13N">
                    <a href="/BM-13N" title="BM-13N">
                      <Item_prem />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">BM-13N</span>
                  </div>
                  <TechTreeImg vehicle="ussr_bm_13n" type="ground" />
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
                    <a href="/MK-IX_%22Valentine%22_(USSR)" title='MK-IX "Valentine" (USSR)'>
                      <Item_prem />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">▂МК-IX &quot;Valentine&quot;</span>
                  </div>
                  <TechTreeImg vehicle="ussr_valentine_mk_9" type="ground" />
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
                  <div className="tree-item-background" id="T-34 (1st Gv.T.Br.)">
                    <a href="/T-34_(1st_Gv.T.Br.)" title="T-34 (1st Gv.T.Br.)">
                      <Item_prem />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">T-34 (1st Gv.T.Br.)</span>
                  </div>
                  <TechTreeImg vehicle="ussr_t_34_1941_cast_turret" type="ground" />
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
                  <div className="tree-item-background" id="SU-76M (5th Gv.Kav.Corps)">
                    <a href="/SU-76M_(5th_Gv.Kav.Corps)" title="SU-76M (5th Gv.Kav.Corps)">
                      <Item_prem />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">SU-76M (5th Gv.Kav.Corps)</span>
                  </div>
                  <TechTreeImg vehicle="ussr_su_76m_5st_kav_corps" type="ground" />
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
                  <div className="tree-item-background" id="SU-76D">
                    <a href="/SU-76D" title="SU-76D">
                      <Item_prem />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">SU-76D</span>
                  </div>
                  <TechTreeImg vehicle="ussr_su_76d" type="ground" />
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
                  <div className="tree-item-background" id="BT-7A (F-32)">
                    <a href="/BT-7A_(F-32)" title="BT-7A (F-32)">
                      <Item_prem />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">BT-7A (F-32)</span>
                  </div>
                  <TechTreeImg vehicle="ussr_bt_7a_f32" type="ground" />
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
                    <a href="/MK-II_%22Matilda%22_(USSR)" title='MK-II "Matilda" (USSR)'>
                      <Item_prem />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">▂MK-II &quot;Matilda&quot;</span>
                  </div>
                  <TechTreeImg vehicle="ussr_a_12_mk_2_matilda_2a_f96" type="ground" />
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
                  <div className="tree-item-background" id="SU-85A">
                    <a href="/SU-85A" title="SU-85A">
                      <Item_prem />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">SU-85A</span>
                  </div>
                  <TechTreeImg vehicle="ussr_su_85a" type="ground" />
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
                  <div className="tree-item-background" id="T-34E">
                    <a href="/T-34E" title="T-34E">
                      <Item_prem />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">T-34E</span>
                  </div>
                  <TechTreeImg vehicle="ussr_t_34e" type="ground" />
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
                  <div className="tree-item-background" id="T-34 (Prototype)">
                    <a href="/T-34_(Prototype)" title="T-34 (Prototype)">
                      <Item_prem />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">T-34 (Prototype)</span>
                  </div>
                  <TechTreeImg vehicle="ussr_t_34_1940_l_11" type="ground" />
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
                <div className="tree-item">
                  <div className="tree-item-background" id="T-34-57">
                    <a href="/T-34-57" title="T-34-57">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">T-34-57</span>
                  </div>
                  <TechTreeImg vehicle="ussr_t_34_1941_57" type="ground" />
                </div>
                <div className="tree-arrow">
                  <img src="/images/Arrow-small.png" alt="Arrow.png" />
                </div>
                <div className="tree-item">
                  <div className="tree-item-background" id="T-34-85 (D-5T)">
                    <a href="/T-34-85_(D-5T)" title="T-34-85 (D-5T)">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">T-34-85 (D-5T)</span>
                  </div>
                  <TechTreeImg vehicle="ussr_t_34_85_d_5t" type="ground" />
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
                  <div className="tree-item-background" id="KV-1 (ZiS-5)">
                    <a href="/KV-1_(ZiS-5)" title="KV-1 (ZiS-5)">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">KV-1 (ZiS-5)</span>
                  </div>
                  <TechTreeImg vehicle="ussr_kv_1_zis_5" type="ground" />
                </div>
                <div className="tree-arrow">
                  <img src="/images/Arrow-small.png" alt="Arrow.png" />
                </div>
                <div className="tree-item">
                  <div className="tree-item-background" id="KV-85">
                    <a href="/KV-85" title="KV-85">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">KV-85</span>
                  </div>
                  <TechTreeImg vehicle="ussr_kv_85" type="ground" />
                </div>
                <div className="tree-arrow">
                  <img src="/images/Arrow-small.png" alt="Arrow.png" />
                </div>
                <div className="tree-item">
                  <div className="tree-item-background" id="IS-1">
                    <a href="/IS-1" title="IS-1">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">IS-1</span>
                  </div>
                  <TechTreeImg vehicle="ussr_is_1" type="ground" />
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
                  <div className="tree-item-background" id="ASU-57">
                    <a href="/ASU-57" title="ASU-57">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">ASU-57</span>
                  </div>
                  <TechTreeImg vehicle="ussr_asu_57" type="ground" />
                </div>
                <div className="tree-arrow">
                  <img src="/images/Arrow-small.png" alt="Arrow.png" />
                </div>
                <div className="tree-item">
                  <div className="tree-item-background" id="PT-76B">
                    <a href="/PT-76B" title="PT-76B">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">PT-76B</span>
                  </div>
                  <TechTreeImg vehicle="ussr_pt_76b" type="ground" />
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
                <div style={{ position: "relative" }}>
                  <div
                    className="tree-group-collapse"
                    style={{ display: "none", position: "absolute" }}
                  >
                    <div className="tree-item">
                      <div className="tree-item-background" id="SU-152">
                        <a href="/SU-152" title="SU-152">
                          <Item_own />
                        </a>
                      </div>
                      <div className="tree-item-text">
                        <span className="tree-item-text-scroll">SU-152</span>
                      </div>
                      <TechTreeImg vehicle="ussr_su_152" type="ground" />
                    </div>
                    <div className="tree-arrow">
                      <img src="/images/Arrow-small.png" alt="Arrow.png" />
                    </div>
                    <div className="tree-item">
                      <div className="tree-item-background" id="ISU-152">
                        <a href="/ISU-152" title="ISU-152">
                          <Item_own />
                        </a>
                      </div>
                      <div className="tree-item-text">
                        <span className="tree-item-text-scroll">ISU-152</span>
                      </div>
                      <TechTreeImg vehicle="ussr_isu_152" type="ground" />
                    </div>
                  </div>
                  <div
                    className="tree-group"
                    onClick={(event) => {
                      openfolder(event);
                    }}
                  >
                    <div className="tree-group-text">
                      <span className="tree-item-text-scroll">SU-152/ISU-152</span>
                    </div>
                    <div className="tree-group-img">
                      <img
                        src="https://encyclopedia.warthunder.com/slots/ussr_su_isu_group.png"
                        alt="ussr_su_isu_group.png"
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
                      <div className="tree-item-background" id="SU-85">
                        <a href="/SU-85" title="SU-85">
                          <Item_own />
                        </a>
                      </div>
                      <div className="tree-item-text">
                        <span className="tree-item-text-scroll">SU-85</span>
                      </div>
                      <TechTreeImg vehicle="ussr_su_85_1943" type="ground" />
                    </div>
                    <div className="tree-arrow">
                      <img src="/images/Arrow-small.png" alt="Arrow.png" />
                    </div>
                    <div className="tree-item">
                      <div className="tree-item-background" id="SU-85M">
                        <a href="/SU-85M" title="SU-85M">
                          <Item_own />
                        </a>
                      </div>
                      <div className="tree-item-text">
                        <span className="tree-item-text-scroll">SU-85M</span>
                      </div>
                      <TechTreeImg vehicle="ussr_su_85m" type="ground" />
                    </div>
                  </div>
                  <div
                    className="tree-group"
                    onClick={(event) => {
                      openfolder(event);
                    }}
                  >
                    <div className="tree-group-text">
                      <span className="tree-item-text-scroll">SU-85</span>
                    </div>
                    <div className="tree-group-img">
                      <img
                        src="https://encyclopedia.warthunder.com/slots/ussr_su_85_group.png"
                        alt="ussr_su_85_group.png"
                      />
                    </div>
                  </div>
                </div>
                <div className="tree-arrow">
                  <img src="/images/Arrow-small.png" alt="Arrow.png" />
                </div>
                <div className="tree-item">
                  <div className="tree-item-background" id="ISU-122">
                    <a href="/ISU-122" title="ISU-122">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">ISU-122</span>
                  </div>
                  <TechTreeImg vehicle="ussr_isu_122" type="ground" />
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
                  <div className="tree-item-background" id="ZiS-43">
                    <a href="/ZiS-43" title="ZiS-43">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">ZiS-43</span>
                  </div>
                  <TechTreeImg vehicle="ussr_zis_43" type="ground" />
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
                  <img src="/images/Arrow_center_small.png" alt="Arrow_center_small.png" />
                  <br />
                  <img src="/images/Arrow_center.png" alt="Arrow_center.png" />
                  <br />
                  <img src="/images/Arrow_head.png" alt="Arrow_head.png" />
                </div>
              </td>
              <td style={{ borderLeft: "solid 1px #cccccc" }}>
                <div className="tree-item">
                  <div className="tree-item-background" id="T-34-57 (1943)">
                    <a href="/T-34-57_(1943)" title="T-34-57 (1943)">
                      <Item_prem />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">T-34-57 (1943)</span>
                  </div>
                  <TechTreeImg vehicle="ussr_t_34_57_1943" type="ground" />
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
                  <div className="tree-item-background" id="SU-100Y">
                    <a href="/SU-100Y" title="SU-100Y">
                      <Item_prem />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">SU-100Y</span>
                  </div>
                  <TechTreeImg vehicle="ussr_su_100y" type="ground" />
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
                  <div className="tree-item-background" id="M4A2 (USSR)">
                    <a href="/M4A2_(USSR)" title="M4A2 (USSR)">
                      <Item_prem />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">▂M4A2</span>
                  </div>
                  <TechTreeImg vehicle="ussr_m4a2_76w_sherman" type="ground" />
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
                  <div className="tree-item-background" id="Phòng không T-34 (USSR)">
                    <a href="/Ph%C3%B2ng_kh%C3%B4ng_T-34_(USSR)" title="Phòng không T-34 (USSR)">
                      <Item_prem />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">▂Phòng không T-34</span>
                  </div>
                  <TechTreeImg vehicle="ussr_type_65_aa" type="ground" />
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
                  <div className="tree-item-background" id="KV-2 (1940)">
                    <a href="/KV-2_(1940)" title="KV-2 (1940)">
                      <Item_prem />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">KV-2 (1940)</span>
                  </div>
                  <TechTreeImg vehicle="ussr_kv_2_1940" type="ground" />
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
                  <div className="tree-item-background" id="KV-1E">
                    <a href="/KV-1E" title="KV-1E">
                      <Item_prem />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">KV-1E</span>
                  </div>
                  <TechTreeImg vehicle="ussr_kv_1e" type="ground" />
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
                  <div className="tree-item-background" id="KV-220">
                    <a href="/KV-220" title="KV-220">
                      <Item_prem />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">KV-220</span>
                  </div>
                  <TechTreeImg vehicle="ussr_kv_220" type="ground" />
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
                  <div className="tree-item-background" id="KV-2 (ZiS-6)">
                    <a href="/KV-2_(ZiS-6)" title="KV-2 (ZiS-6)">
                      <Item_prem />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">KV-2 (ZiS-6)</span>
                  </div>
                  <TechTreeImg vehicle="ussr_kv_2_zis_6" type="ground" />
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
                  <div className="tree-item-background" id="T-V (USSR)">
                    <a href="/T-V_(USSR)" title="T-V (USSR)">
                      <Item_prem />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">▂T-V</span>
                  </div>
                  <TechTreeImg vehicle="ussr_pzkpfw_v" type="ground" />
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
                  <div className="tree-item-background" id="T-34-85">
                    <a href="/T-34-85" title="T-34-85">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">T-34-85</span>
                  </div>
                  <TechTreeImg vehicle="ussr_t_34_85_zis_53" type="ground" />
                </div>
                <div className="tree-arrow">
                  <img src="/images/Arrow-small.png" alt="Arrow.png" />
                </div>
                <div className="tree-item">
                  <div className="tree-item-background" id="T-44">
                    <a href="/T-44" title="T-44">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">T-44</span>
                  </div>
                  <TechTreeImg vehicle="ussr_t_44" type="ground" />
                </div>
                <div className="tree-arrow">
                  <img src="/images/Arrow-small.png" alt="Arrow.png" />
                </div>
                <div className="tree-item">
                  <div className="tree-item-background" id="T-44-100">
                    <a href="/T-44-100" title="T-44-100">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">T-44-100</span>
                  </div>
                  <TechTreeImg vehicle="ussr_t_44_100" type="ground" />
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
                  <div className="tree-item-background" id="IS-2">
                    <a href="/IS-2" title="IS-2">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">IS-2</span>
                  </div>
                  <TechTreeImg vehicle="ussr_is_2_1943" type="ground" />
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
                      <div className="tree-item-background" id="IS-2 (1944)">
                        <a href="/IS-2_(1944)" title="IS-2 (1944)">
                          <Item_own />
                        </a>
                      </div>
                      <div className="tree-item-text">
                        <span className="tree-item-text-scroll">IS-2 (1944)</span>
                      </div>
                      <TechTreeImg vehicle="ussr_is_2_1944" type="ground" />
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
                      <div className="tree-item-background" id="IS-2 No.321">
                        <a href="/IS-2_No.321" title="IS-2 No.321">
                          <Item_own />
                        </a>
                      </div>
                      <div className="tree-item-text">
                        <span className="tree-item-text-scroll">IS-2 No.321</span>
                      </div>
                      <TechTreeImg vehicle="ussr_is_2_1944_321" type="ground" />
                    </div>
                  </div>
                  <div
                    className="tree-group"
                    onClick={(event) => {
                      openfolder(event);
                    }}
                  >
                    <div className="tree-group-text">
                      <span className="tree-item-text-scroll">IS-2 (1944)</span>
                    </div>
                    <div className="tree-group-img">
                      <img
                        src="https://encyclopedia.warthunder.com/slots/ussr_is_2_1944_group.png"
                        alt="ussr_is_2_1944_group.png"
                      />
                    </div>
                  </div>
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
                  <div className="tree-item-background" id="ASU-85">
                    <a href="/ASU-85" title="ASU-85">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">ASU-85</span>
                  </div>
                  <TechTreeImg vehicle="ussr_asu_85" type="ground" />
                </div>
                <div className="tree-arrow">
                  <img src="/images/Arrow-small.png" alt="Arrow.png" />
                </div>
                <div className="tree-item">
                  <div className="tree-item-background" id="SU-100P">
                    <a href="/SU-100P" title="SU-100P">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">SU-100P</span>
                  </div>
                  <TechTreeImg vehicle="ussr_su_100p" type="ground" />
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
                  <div className="tree-item-background" id="ISU-122S">
                    <a href="/ISU-122S" title="ISU-122S">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">ISU-122S</span>
                  </div>
                  <TechTreeImg vehicle="ussr_isu_122s" type="ground" />
                </div>
                <div className="tree-arrow">
                  <img src="/images/Arrow-small.png" alt="Arrow.png" />
                </div>
                <div className="tree-item">
                  <div className="tree-item-background" id="SU-100">
                    <a href="/SU-100" title="SU-100">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">SU-100</span>
                  </div>
                  <TechTreeImg vehicle="ussr_su_100_1945" type="ground" />
                </div>
                <div className="tree-arrow">
                  <img src="/images/Arrow-small.png" alt="Arrow.png" />
                </div>
                <div className="tree-item">
                  <div className="tree-item-background" id="2S3M">
                    <a href="/2S3M" title="2S3M">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">2S3M</span>
                  </div>
                  <TechTreeImg vehicle="ussr_2s3m" type="ground" />
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
                  <div className="tree-item-background" id="ZSU-37">
                    <a href="/ZSU-37" title="ZSU-37">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">ZSU-37</span>
                  </div>
                  <TechTreeImg vehicle="ussr_zsu_37" type="ground" />
                </div>
                <div className="tree-arrow">
                  <img src="/images/Arrow-small.png" alt="Arrow.png" />
                </div>
                <div className="tree-item">
                  <div className="tree-item-background" id="BTR-ZD">
                    <a href="/BTR-ZD" title="BTR-ZD">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">BTR-ZD</span>
                  </div>
                  <TechTreeImg vehicle="ussr_btr_zd" type="ground" />
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
                  <div className="tree-item-background" id="T-34-85E">
                    <a href="/T-34-85E" title="T-34-85E">
                      <Item_prem />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">T-34-85E</span>
                  </div>
                  <TechTreeImg vehicle="ussr_t_34_85e" type="ground" />
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
                  <div className="tree-item-background" id="SU-122P">
                    <a href="/SU-122P" title="SU-122P">
                      <Item_prem />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">SU-122P</span>
                  </div>
                  <TechTreeImg vehicle="ussr_su_122p" type="ground" />
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
                  <div className="tree-item-background" id="T-44-122">
                    <a href="/T-44-122" title="T-44-122">
                      <Item_prem />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">T-44-122</span>
                  </div>
                  <TechTreeImg vehicle="ussr_t_44_122" type="ground" />
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
                  <div className="tree-item-background" id="T-34-100">
                    <a href="/T-34-100" title="T-34-100">
                      <Item_prem />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">T-34-100</span>
                  </div>
                  <TechTreeImg vehicle="ussr_t_34_100" type="ground" />
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
                  <div className="tree-item-background" id="KV-122">
                    <a href="/KV-122" title="KV-122">
                      <Item_prem />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">KV-122</span>
                  </div>
                  <TechTreeImg vehicle="ussr_kv_122" type="ground" />
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
                    <a href="/IS-2_%22Revenge%22" title='IS-2 "Revenge"'>
                      <Item_prem />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">IS-2 &quot;Revenge&quot;</span>
                  </div>
                  <TechTreeImg vehicle="ussr_is_2_1944_revenge" type="ground" />
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
                  <div className="tree-item-background" id="IS-6">
                    <a href="/IS-6" title="IS-6">
                      <Item_prem />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">IS-6</span>
                  </div>
                  <TechTreeImg vehicle="ussr_is_6" type="ground" />
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
                  <div className="tree-item-background" id="Type 62 (USSR)">
                    <a href="/Type_62_(USSR)" title="Type 62 (USSR)">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">▂Type 62</span>
                  </div>
                  <TechTreeImg vehicle="ussr_type_62" type="ground" />
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
                  <div className="tree-item-background" id="PT-76-57">
                    <a href="/PT-76-57" title="PT-76-57">
                      <Item_prem />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">PT-76-57</span>
                  </div>
                  <TechTreeImg vehicle="ussr_pt_76_57" type="ground" />
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
                  <div className="tree-item-background" id="T-54 (1949)">
                    <a href="/T-54_(1949)" title="T-54 (1949)">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">T-54 (1949)</span>
                  </div>
                  <TechTreeImg vehicle="ussr_t_54_1949" type="ground" />
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
                      <div className="tree-item-background" id="T-54 (1947)">
                        <a href="/T-54_(1947)" title="T-54 (1947)">
                          <Item_own />
                        </a>
                      </div>
                      <div className="tree-item-text">
                        <span className="tree-item-text-scroll">T-54 (1947)</span>
                      </div>
                      <TechTreeImg vehicle="ussr_t_54_1947" type="ground" />
                    </div>
                    <div className="tree-arrow">
                      <img src="/images/Arrow-small.png" alt="Arrow.png" />
                    </div>
                    <div className="tree-item">
                      <div className="tree-item-background" id="T-54 (1951)">
                        <a href="/T-54_(1951)" title="T-54 (1951)">
                          <Item_own />
                        </a>
                      </div>
                      <div className="tree-item-text">
                        <span className="tree-item-text-scroll">T-54 (1951)</span>
                      </div>
                      <TechTreeImg vehicle="ussr_t_54_1951" type="ground" />
                    </div>
                  </div>
                  <div
                    className="tree-group"
                    onClick={(event) => {
                      openfolder(event);
                    }}
                  >
                    <div className="tree-group-text">
                      <span className="tree-item-text-scroll">T-54</span>
                    </div>
                    <div className="tree-group-img">
                      <img
                        src="https://encyclopedia.warthunder.com/slots/ussr_t_54_group.png"
                        alt="ussr_t_54_group.png"
                      />
                    </div>
                  </div>
                </div>
                <div className="tree-arrow">
                  <img src="/images/Arrow-small.png" alt="Arrow.png" />
                </div>
              </td>
              <td>
                <div className="tree-item">
                  <div className="tree-item-background" id="IS-3">
                    <a href="/IS-3" title="IS-3">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">IS-3</span>
                  </div>
                  <TechTreeImg vehicle="ussr_is_3" type="ground" />
                </div>
                <div className="tree-arrow">
                  <img src="/images/Arrow-small.png" alt="Arrow.png" />
                </div>
                <div className="tree-item">
                  <div className="tree-item-background" id="IS-4M">
                    <a href="/IS-4M" title="IS-4M">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">IS-4M</span>
                  </div>
                  <TechTreeImg vehicle="ussr_is_4m" type="ground" />
                </div>
                <div className="tree-arrow">
                  <img src="/images/Arrow-small.png" alt="Arrow.png" />
                </div>
              </td>
              <td>
                <div className="tree-item">
                  <div className="tree-item-background" id="BMP-1">
                    <a href="/BMP-1" title="BMP-1">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">BMP-1</span>
                  </div>
                  <TechTreeImg vehicle="ussr_bmp_1" type="ground" />
                </div>
                <div className="tree-arrow">
                  <img src="/images/Arrow-small.png" alt="Arrow.png" />
                </div>
                <div className="tree-item">
                  <div className="tree-item-background" id="Object 906">
                    <a href="/Object_906" title="Object 906">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">Object 906</span>
                  </div>
                  <TechTreeImg vehicle="ussr_object_906" type="ground" />
                </div>
                <div className="tree-arrow">
                  <img src="/images/Arrow-small.png" alt="Arrow.png" />
                </div>
              </td>
              <td>
                <div className="tree-item">
                  <div className="tree-item-background" id="SU-122-54">
                    <a href="/SU-122-54" title="SU-122-54">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">SU-122-54</span>
                  </div>
                  <TechTreeImg vehicle="ussr_su_122_54" type="ground" />
                </div>
                <div className="tree-arrow">
                  <img src="/images/Arrow-small.png" alt="Arrow.png" />
                </div>
                <div className="tree-item">
                  <div className="tree-item-background" id="Object 268">
                    <a href="/Object_268" title="Object 268">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">Object 268</span>
                  </div>
                  <TechTreeImg vehicle="ussr_object_268" type="ground" />
                </div>
                <div className="tree-arrow">
                  <img src="/images/Arrow-small.png" alt="Arrow.png" />
                </div>
              </td>
              <td>
                <div className="tree-item">
                  <div className="tree-item-background" id="ZSU-57-2">
                    <a href="/ZSU-57-2" title="ZSU-57-2">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">ZSU-57-2</span>
                  </div>
                  <TechTreeImg vehicle="ussr_zsu_57_2" type="ground" />
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
                  <div className="tree-item-background" id="Object 120">
                    <a href="/Object_120" title="Object 120">
                      <Item_prem />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">Object 120</span>
                  </div>
                  <TechTreeImg vehicle="ussr_object_120" type="ground" />
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
                  <div className="tree-item-background" id="T-10A">
                    <a href="/T-10A" title="T-10A">
                      <Item_prem />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">T-10A</span>
                  </div>
                  <TechTreeImg vehicle="ussr_t_10a" type="ground" />
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
                  <div className="tree-item-background" id="IS-7">
                    <a href="/IS-7" title="IS-7">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">IS-7</span>
                  </div>
                  <TechTreeImg vehicle="ussr_is_7" type="ground" />
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
                  <div className="tree-item-background" id="T-55A">
                    <a href="/T-55A" title="T-55A">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">T-55A</span>
                  </div>
                  <TechTreeImg vehicle="ussr_t_55a" type="ground" />
                </div>
                <div className="tree-arrow">
                  <img src="/images/Arrow-small.png" alt="Arrow.png" />
                </div>
                <div className="tree-item">
                  <div className="tree-item-background" id="T-55AMD-1">
                    <a href="/T-55AMD-1" title="T-55AMD-1">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">T-55AMD-1</span>
                  </div>
                  <TechTreeImg vehicle="ussr_t_55_amd_1" type="ground" />
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
                      <div className="tree-item-background" id="T-62">
                        <a href="/T-62" title="T-62">
                          <Item_own />
                        </a>
                      </div>
                      <div className="tree-item-text">
                        <span className="tree-item-text-scroll">T-62</span>
                      </div>
                      <TechTreeImg vehicle="ussr_t_62" type="ground" />
                    </div>
                    <div className="tree-arrow">
                      <img src="/images/Arrow-small.png" alt="Arrow.png" />
                    </div>
                    <div className="tree-item">
                      <div className="tree-item-background" id="T-62M-1">
                        <a href="/T-62M-1" title="T-62M-1">
                          <Item_own />
                        </a>
                      </div>
                      <div className="tree-item-text">
                        <span className="tree-item-text-scroll">T-62M-1</span>
                      </div>
                      <TechTreeImg vehicle="ussr_t_62m1" type="ground" />
                    </div>
                  </div>
                  <div
                    className="tree-group"
                    onClick={(event) => {
                      openfolder(event);
                    }}
                  >
                    <div className="tree-group-text">
                      <span className="tree-item-text-scroll">T-62</span>
                    </div>
                    <div className="tree-group-img">
                      <img
                        src="https://encyclopedia.warthunder.com/slots/t_62_group.png"
                        alt="t_62_group.png"
                      />
                    </div>
                  </div>
                </div>
                <div className="tree-arrow">
                  <img src="/images/Arrow-small.png" alt="Arrow.png" />
                </div>
                <div className="tree-item">
                  <div className="tree-item-background" id="T-72A">
                    <a href="/T-72A" title="T-72A">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">T-72A</span>
                  </div>
                  <TechTreeImg vehicle="ussr_t_72a" type="ground" />
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
                      <div className="tree-item-background" id="T-72B">
                        <a href="/T-72B" title="T-72B">
                          <Item_own />
                        </a>
                      </div>
                      <div className="tree-item-text">
                        <span className="tree-item-text-scroll">T-72B</span>
                      </div>
                      <TechTreeImg vehicle="ussr_t_72b" type="ground" />
                    </div>
                    <div className="tree-arrow">
                      <img src="/images/Arrow-small.png" alt="Arrow.png" />
                    </div>
                    <div className="tree-item">
                      <div className="tree-item-background" id="T-72B (1989)">
                        <a href="/T-72B_(1989)" title="T-72B (1989)">
                          <Item_own />
                        </a>
                      </div>
                      <div className="tree-item-text">
                        <span className="tree-item-text-scroll">T-72B (1989)</span>
                      </div>
                      <TechTreeImg vehicle="ussr_t_72b_1989" type="ground" />
                    </div>
                  </div>
                  <div
                    className="tree-group"
                    onClick={(event) => {
                      openfolder(event);
                    }}
                  >
                    <div className="tree-group-text">
                      <span className="tree-item-text-scroll">T-72B</span>
                    </div>
                    <div className="tree-group-img">
                      <img
                        src="https://encyclopedia.warthunder.com/slots/t_72b_group.png"
                        alt="t_72b_group.png"
                      />
                    </div>
                  </div>
                </div>
                <div className="tree-arrow">
                  <img src="/images/Arrow-small.png" alt="Arrow.png" />
                </div>
              </td>
              <td>
                <div className="tree-item">
                  <div className="tree-item-background" id="T-10M">
                    <a href="/T-10M" title="T-10M">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">T-10M</span>
                  </div>
                  <TechTreeImg vehicle="ussr_t_10m" type="ground" />
                </div>
                <div className="tree-arrow">
                  <img src="/images/Arrow-small.png" alt="Arrow.png" />
                </div>
                <div className="tree-item">
                  <div className="tree-item-background" id="T-64A (1971)">
                    <a href="/T-64A_(1971)" title="T-64A (1971)">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">T-64A (1971)</span>
                  </div>
                  <TechTreeImg vehicle="ussr_t_64a_1971" type="ground" />
                </div>
                <div className="tree-arrow">
                  <img src="/images/Arrow-small.png" alt="Arrow.png" />
                </div>
                <div className="tree-item">
                  <div className="tree-item-background" id="T-64B">
                    <a href="/T-64B" title="T-64B">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">T-64B</span>
                  </div>
                  <TechTreeImg vehicle="ussr_t_64_b_1984" type="ground" />
                </div>
                <div className="tree-arrow">
                  <img src="/images/Arrow-small.png" alt="Arrow.png" />
                </div>
                <div className="tree-item">
                  <div className="tree-item-background" id="T-80B">
                    <a href="/T-80B" title="T-80B">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">T-80B</span>
                  </div>
                  <TechTreeImg vehicle="ussr_t_80b" type="ground" />
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
                  <div className="tree-item-background" id="BMP-2">
                    <a href="/BMP-2" title="BMP-2">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">BMP-2</span>
                  </div>
                  <TechTreeImg vehicle="ussr_bmp_2" type="ground" />
                </div>
                <div className="tree-arrow">
                  <img src="/images/Arrow-small.png" alt="Arrow.png" />
                </div>
                <div className="tree-item">
                  <div className="tree-item-background" id="BMP-3">
                    <a href="/BMP-3" title="BMP-3">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">BMP-3</span>
                  </div>
                  <TechTreeImg vehicle="ussr_bmp_3" type="ground" />
                </div>
                <div className="tree-arrow">
                  <img src="/images/Arrow-small.png" alt="Arrow.png" />
                </div>
                <div className="tree-item">
                  <div className="tree-item-background" id="Object 685">
                    <a href="/Object_685" title="Object 685">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">Object 685</span>
                  </div>
                  <TechTreeImg vehicle="ussr_object_685" type="ground" />
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
                  <div className="tree-item-background" id="IT-1">
                    <a href="/IT-1" title="IT-1">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">IT-1</span>
                  </div>
                  <TechTreeImg vehicle="ussr_it_1" type="ground" />
                </div>
                <div className="tree-arrow">
                  <img src="/images/Arrow-small.png" alt="Arrow.png" />
                </div>
                <div className="tree-item">
                  <div className="tree-item-background" id="Shturm-S">
                    <a href="/Shturm-S" title="Shturm-S">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">Shturm-S</span>
                  </div>
                  <TechTreeImg vehicle="ussr_9p149" type="ground" />
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
                  <div className="tree-item-background" id="ZSU-37-2">
                    <a href="/ZSU-37-2" title="ZSU-37-2">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">ZSU-37-2</span>
                  </div>
                  <TechTreeImg vehicle="ussr_zsu_37_2" type="ground" />
                </div>
                <div className="tree-arrow">
                  <img src="/images/Arrow-small.png" alt="Arrow.png" />
                </div>
                <div className="tree-item">
                  <div className="tree-item-background" id="ZSU-23-4">
                    <a href="/ZSU-23-4" title="ZSU-23-4">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">ZSU-23-4</span>
                  </div>
                  <TechTreeImg vehicle="ussr_zsu_23_4" type="ground" />
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
                  <div className="tree-item-background" id="T-55AM-1">
                    <a href="/T-55AM-1" title="T-55AM-1">
                      <Item_prem />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">T-55AM-1</span>
                  </div>
                  <TechTreeImg vehicle="ussr_t_55_am" type="ground" />
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
                  <div className="tree-item-background" id="T-72AV (TURMS-T)">
                    <a href="/T-72AV_(TURMS-T)" title="T-72AV (TURMS-T)">
                      <Item_prem />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">T-72AV (TURMS-T)</span>
                  </div>
                  <TechTreeImg vehicle="ussr_t_72av_turms" type="ground" />
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
                  <div className="tree-item-background" id="BMP-2M">
                    <a href="/BMP-2M" title="BMP-2M">
                      <Item_squad />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">BMP-2M</span>
                  </div>
                  <TechTreeImg vehicle="ussr_bmp_2m" type="ground" />
                </div>
              </td>
              <td>
                <div className="tree-item">
                  <div className="tree-item-background" id="Object 279">
                    <a href="/Object_279" title="Object 279">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">Object 279</span>
                  </div>
                  <TechTreeImg vehicle="ussr_object_279" type="ground" />
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
                  <div className="tree-item-background" id="BMD-4">
                    <a href="/BMD-4" title="BMD-4">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">BMD-4</span>
                  </div>
                  <TechTreeImg vehicle="ussr_bmd_4" type="ground" />
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
                  <div className="tree-item-background" id="T-72M2 Moderna">
                    <a href="/T-72M2_Moderna" title="T-72M2 Moderna">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">T-72M2 Moderna</span>
                  </div>
                  <TechTreeImg vehicle="ussr_t_72m2_moderna" type="ground" />
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
                  VII Rank
                </div>
              </th>
              <td>
                <div className="tree-item">
                  <div className="tree-item-background" id="T-90A">
                    <a href="/T-90A" title="T-90A">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">Т-90А</span>
                  </div>
                  <TechTreeImg vehicle="ussr_t_90a" type="ground" />
                </div>
                <div className="tree-arrow">
                  <img src="/images/Arrow-small.png" alt="Arrow.png" />
                </div>
                <div className="tree-item">
                  <div className="tree-item-background" id="T-72B3">
                    <a href="/T-72B3" title="T-72B3">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">T-72B3</span>
                  </div>
                  <TechTreeImg vehicle="ussr_t_72b3_2011" type="ground" />
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
                  <div className="tree-item-background" id="T-80U">
                    <a href="/T-80U" title="T-80U">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">T-80U</span>
                  </div>
                  <TechTreeImg vehicle="ussr_t_80u" type="ground" />
                </div>
                <div className="tree-arrow">
                  <img src="/images/Arrow-small.png" alt="Arrow.png" />
                </div>
                <div className="tree-item">
                  <div className="tree-item-background" id="T-80BVM">
                    <a href="/T-80BVM" title="T-80BVM">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">T-80BVM</span>
                  </div>
                  <TechTreeImg vehicle="ussr_t_80bvm" type="ground" />
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
                  <div className="tree-item-background" id="2S25">
                    <a href="/2S25" title="2S25">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">2S25</span>
                  </div>
                  <TechTreeImg vehicle="ussr_2s25" type="ground" />
                </div>
                <div className="tree-arrow">
                  <img src="/images/Arrow-small.png" alt="Arrow.png" />
                </div>
                <div className="tree-item">
                  <div className="tree-item-background" id="2S25M">
                    <a href="/2S25M" title="2S25M">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">2S25M</span>
                  </div>
                  <TechTreeImg vehicle="ussr_2s25m" type="ground" />
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
                  <div className="tree-item-background" id="Khrizantema-S">
                    <a href="/Khrizantema-S" title="Khrizantema-S">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">Khrizantema-S</span>
                  </div>
                  <TechTreeImg vehicle="ussr_9p157" type="ground" />
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
                  <div className="tree-item-background" id="2S6">
                    <a href="/2S6" title="2S6">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">2S6</span>
                  </div>
                  <TechTreeImg vehicle="ussr_zprk_2s6" type="ground" />
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
                  src="//yewtu.be/embed/4tLiivpJ7nk?"
                  allowFullScreen={true}
                  width={640}
                  height={360}
                  frameBorder={0}
                />
              </div>
            </div>
          </div>
          <div className="video_desc">
            <b>Book of Records USSR</b> - <i>War Thunder Official Channel</i>
          </div>
        </div>
        <div className="video">
          <div className="video_embed">
            <div className="embedvideo autoResize" style={{}}>
              <div className="embedvideowrap" style={{ width: 640 }}>
                <iframe
                  src="//yewtu.be/embed/klfkO6hJQGk?"
                  allowFullScreen={true}
                  width={640}
                  height={360}
                  frameBorder={0}
                />
              </div>
            </div>
          </div>
          <div className="video_desc">
            <b>Climbing the ranks with Soviet tanks</b> - <i>War Thunder Official Channel</i>
          </div>
        </div>
        <div className="video">
          <div className="video_embed">
            <div className="embedvideo autoResize" style={{}}>
              <div className="embedvideowrap" style={{ width: 640 }}>
                <iframe
                  src="//yewtu.be/embed/z5ZZzHNPYi4?"
                  allowFullScreen={true}
                  width={640}
                  height={360}
                  frameBorder={0}
                />
              </div>
            </div>
          </div>
          <div className="video_desc">
            <b>Russian ground forces Tier I - Review and Analysis</b> - <i>Oxy</i>
          </div>
        </div>
        <div className="video">
          <div className="video_embed">
            <div className="embedvideo autoResize" style={{}}>
              <div className="embedvideowrap" style={{ width: 640 }}>
                <iframe
                  src="//yewtu.be/embed/TXWa-Nnc6IE?"
                  allowFullScreen={true}
                  width={640}
                  height={360}
                  frameBorder={0}
                />
              </div>
            </div>
          </div>
          <div className="video_desc">
            <b>Russian ground forces Tier II - Review and Analysis</b> - <i>Oxy</i>
          </div>
        </div>
        <div className="video">
          <div className="video_embed">
            <div className="embedvideo autoResize" style={{}}>
              <div className="embedvideowrap" style={{ width: 640 }}>
                <iframe
                  src="//yewtu.be/embed/MRlEuQRfHdk?"
                  allowFullScreen={true}
                  width={640}
                  height={360}
                  frameBorder={0}
                />
              </div>
            </div>
          </div>
          <div className="video_desc">
            <b>Russian ground forces Tier III - Review and Analysis</b> - <i>Oxy</i>
          </div>
        </div>
        <div className="video">
          <div className="video_embed">
            <div className="embedvideo autoResize" style={{}}>
              <div className="embedvideowrap" style={{ width: 640 }}>
                <iframe
                  src="//yewtu.be/embed/nw2LFVdhm5s?"
                  allowFullScreen={true}
                  width={640}
                  height={360}
                  frameBorder={0}
                />
              </div>
            </div>
          </div>
          <div className="video_desc">
            <b>Russian ground forces Tier IV - Review and Analysis</b> - <i>Oxy</i>
          </div>
        </div>
        <div className="video">
          <div className="video_embed">
            <div className="embedvideo autoResize" style={{}}>
              <div className="embedvideowrap" style={{ width: 640 }}>
                <iframe
                  src="//yewtu.be/embed/XtuTkDhE3OQ?"
                  allowFullScreen={true}
                  width={640}
                  height={360}
                  frameBorder={0}
                />
              </div>
            </div>
          </div>
          <div className="video_desc">
            <b>Russian ground forces Tier V - Review and Analysis</b> - <i>Oxy</i>
          </div>
        </div>
        <div className="video">
          <div className="video_embed">
            <div className="embedvideo autoResize" style={{}}>
              <div className="embedvideowrap" style={{ width: 640 }}>
                <iframe
                  src="//yewtu.be/embed/idwfz6_Nl6I?"
                  allowFullScreen={true}
                  width={640}
                  height={360}
                  frameBorder={0}
                />
              </div>
            </div>
          </div>
          <div className="video_desc">
            <b>Russian ground forces Tier VI/VII - Review and Analysis</b> - <i>Oxy</i>
          </div>
        </div>
      </div>
    </div>
  );
}
