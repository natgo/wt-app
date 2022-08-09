import { openfolder } from ".";
import { Item_own, TechTreeImg, Item_prem, Item_squad } from "../TechTree";

export function USSRAircraft() {
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
                      <div className="tree-item-background" id="I-15 WR">
                        <a href="/I-15_WR" title="I-15 WR">
                          <Item_own />
                        </a>
                      </div>
                      <div className="tree-item-text">
                        <span className="tree-item-text-scroll">I-15&nbsp;WR</span>
                      </div>
                      <TechTreeImg vehicle="i-15_1934" type="aircraft" />
                    </div>
                    <div className="tree-arrow">
                      <img src="/images/Arrow-small.png" alt="Arrow.png" />
                    </div>
                    <div className="tree-item">
                      <div className="tree-item-background" id="I-15 M-22">
                        <a href="/I-15_M-22" title="I-15 M-22">
                          <Item_own />
                        </a>
                      </div>
                      <div className="tree-item-text">
                        <span className="tree-item-text-scroll">I-15&nbsp;M-22</span>
                      </div>
                      <TechTreeImg vehicle="i-15_1935" type="aircraft" />
                    </div>
                    <div className="tree-arrow">
                      <img src="/images/Arrow-small.png" alt="Arrow.png" />
                    </div>
                    <div className="tree-item">
                      <div className="tree-item-background" id="I-15R">
                        <a href="/I-15R" title="I-15R">
                          <Item_own />
                        </a>
                      </div>
                      <div className="tree-item-text">
                        <span className="tree-item-text-scroll">I-15R</span>
                      </div>
                      <TechTreeImg vehicle="i-15_1935_moscow" type="aircraft" />
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
                        src="https://encyclopedia.warthunder.com/slots/i-15_group.png"
                        alt="i-15_group.png"
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
                      <div className="tree-item-background" id="I-16 type 5">
                        <a href="/I-16_type_5" title="I-16 type 5">
                          <Item_own />
                        </a>
                      </div>
                      <div className="tree-item-text">
                        <span className="tree-item-text-scroll">I-16&nbsp;type&nbsp;5</span>
                      </div>
                      <TechTreeImg vehicle="i-16_type5" type="aircraft" />
                    </div>
                    <div className="tree-arrow">
                      <img src="/images/Arrow-small.png" alt="Arrow.png" />
                    </div>
                    <div className="tree-item">
                      <div className="tree-item-background" id="I-16 type 10">
                        <a href="/I-16_type_10" title="I-16 type 10">
                          <Item_own />
                        </a>
                      </div>
                      <div className="tree-item-text">
                        <span className="tree-item-text-scroll">I-16&nbsp;type&nbsp;10</span>
                      </div>
                      <TechTreeImg vehicle="i-16_type10" type="aircraft" />
                    </div>
                    <div className="tree-arrow">
                      <img src="/images/Arrow-small.png" alt="Arrow.png" />
                    </div>
                    <div className="tree-item">
                      <div className="tree-item-background" id="I-16 type 18">
                        <a href="/I-16_type_18" title="I-16 type 18">
                          <Item_own />
                        </a>
                      </div>
                      <div className="tree-item-text">
                        <span className="tree-item-text-scroll">I-16&nbsp;type&nbsp;18</span>
                      </div>
                      <TechTreeImg vehicle="i-16_type18" type="aircraft" />
                    </div>
                    <div className="tree-arrow">
                      <img src="/images/Arrow-small.png" alt="Arrow.png" />
                    </div>
                    <div className="tree-item">
                      <div className="tree-item-background" id="I-16 type 24">
                        <a href="/I-16_type_24" title="I-16 type 24">
                          <Item_own />
                        </a>
                      </div>
                      <div className="tree-item-text">
                        <span className="tree-item-text-scroll">I-16&nbsp;type&nbsp;24</span>
                      </div>
                      <TechTreeImg vehicle="i-16_type24" type="aircraft" />
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
                        src="https://encyclopedia.warthunder.com/slots/i-16_group.png"
                        alt="i-16_group.png"
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
                  <div className="tree-item-background" id="I-15bis">
                    <a href="/I-15bis" title="I-15bis">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">I-15bis</span>
                  </div>
                  <TechTreeImg vehicle="i-15bis" type="aircraft" />
                </div>
                <div className="tree-arrow">
                  <img src="/images/Arrow-small.png" alt="Arrow.png" />
                </div>
                <div className="tree-item">
                  <div className="tree-item-background" id="I-153 M-62">
                    <a href="/I-153_M-62" title="I-153 M-62">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">I-153&nbsp;M-62</span>
                  </div>
                  <TechTreeImg vehicle="i-153_m62" type="aircraft" />
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
                  <div className="tree-item-background" id="Po-2">
                    <a href="/Po-2" title="Po-2">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">Po-2</span>
                  </div>
                  <div className="tree-item-img">
                    <img src="https://encyclopedia.warthunder.com/slots/po-2.png" alt="po-2.png" />
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
                <div style={{ position: "relative" }}>
                  <div
                    className="tree-group-collapse"
                    style={{ display: "none", position: "absolute" }}
                  >
                    <div className="tree-item">
                      <div className="tree-item-background" id="BB-1">
                        <a href="/BB-1" title="BB-1">
                          <Item_own />
                        </a>
                      </div>
                      <div className="tree-item-text">
                        <span className="tree-item-text-scroll">BB-1</span>
                      </div>
                      <TechTreeImg vehicle="bb-1" type="aircraft" />
                    </div>
                    <div className="tree-arrow">
                      <img src="/images/Arrow-small.png" alt="Arrow.png" />
                    </div>
                    <div className="tree-item">
                      <div className="tree-item-background" id="Su-2 MV-5">
                        <a href="/Su-2_MV-5" title="Su-2 MV-5">
                          <Item_own />
                        </a>
                      </div>
                      <div className="tree-item-text">
                        <span className="tree-item-text-scroll">Su-2&nbsp;MV-5</span>
                      </div>
                      <TechTreeImg vehicle="su-2_mv5" type="aircraft" />
                    </div>
                    <div className="tree-arrow">
                      <img src="/images/Arrow-small.png" alt="Arrow.png" />
                    </div>
                    <div className="tree-item">
                      <div className="tree-item-background" id="Su-2 TSS-1">
                        <a href="/Su-2_TSS-1" title="Su-2 TSS-1">
                          <Item_own />
                        </a>
                      </div>
                      <div className="tree-item-text">
                        <span className="tree-item-text-scroll">Su-2&nbsp;TSS-1</span>
                      </div>
                      <TechTreeImg vehicle="su-2_tss1" type="aircraft" />
                    </div>
                    <div className="tree-arrow">
                      <img src="/images/Arrow-small.png" alt="Arrow.png" />
                    </div>
                    <div className="tree-item">
                      <div className="tree-item-background" id="Su-2 (M-82)">
                        <a href="/Su-2_(M-82)" title="Su-2 (M-82)">
                          <Item_own />
                        </a>
                      </div>
                      <div className="tree-item-text">
                        <span className="tree-item-text-scroll">Su-2&nbsp;(M-82)</span>
                      </div>
                      <TechTreeImg vehicle="su-2_m82" type="aircraft" />
                    </div>
                  </div>
                  <div
                    className="tree-group"
                    onClick={(event) => {
                      openfolder(event);
                    }}
                  >
                    <div className="tree-group-text">
                      <span className="tree-item-text-scroll">Su-2</span>
                    </div>
                    <div className="tree-group-img">
                      <img
                        src="https://encyclopedia.warthunder.com/slots/su-2_group.png"
                        alt="su-2_group.png"
                      />
                    </div>
                  </div>
                </div>
                <div className="tree-arrow">
                  <img src="/images/Arrow-small.png" alt="Arrow.png" />
                </div>
                <div className="tree-item">
                  <div className="tree-item-background" id="Yak-2 KABB">
                    <a href="/Yak-2_KABB" title="Yak-2 KABB">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">Yak-2 KABB</span>
                  </div>
                  <TechTreeImg vehicle="yak_2_kabb" type="aircraft" />
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
                <div style={{ position: "relative" }}>
                  <div
                    className="tree-group-collapse"
                    style={{ display: "none", position: "absolute" }}
                  >
                    <div className="tree-item">
                      <div className="tree-item-background" id="SB 2M-100">
                        <a href="/SB_2M-100" title="SB 2M-100">
                          <Item_own />
                        </a>
                      </div>
                      <div className="tree-item-text">
                        <span className="tree-item-text-scroll">SB&nbsp;2M-100</span>
                      </div>
                      <TechTreeImg vehicle="sb_2m_100" type="aircraft" />
                    </div>
                    <div className="tree-arrow">
                      <img src="/images/Arrow-small.png" alt="Arrow.png" />
                    </div>
                    <div className="tree-item">
                      <div className="tree-item-background" id="SB 2M-103">
                        <a href="/SB_2M-103" title="SB 2M-103">
                          <Item_own />
                        </a>
                      </div>
                      <div className="tree-item-text">
                        <span className="tree-item-text-scroll">SB&nbsp;2M-103</span>
                      </div>
                      <TechTreeImg vehicle="sb_2m_103c" type="aircraft" />
                    </div>
                    <div className="tree-arrow">
                      <img src="/images/Arrow-small.png" alt="Arrow.png" />
                    </div>
                    <div className="tree-item">
                      <div className="tree-item-background" id="SB 2M-103U MV-3">
                        <a href="/SB_2M-103U_MV-3" title="SB 2M-103U MV-3">
                          <Item_own />
                        </a>
                      </div>
                      <div className="tree-item-text">
                        <span className="tree-item-text-scroll">SB&nbsp;2M-103U&nbsp;MV-3</span>
                      </div>
                      <TechTreeImg vehicle="sb_2m_103u_mv3" type="aircraft" />
                    </div>
                    <div className="tree-arrow">
                      <img src="/images/Arrow-small.png" alt="Arrow.png" />
                    </div>
                    <div className="tree-item">
                      <div className="tree-item-background" id="SB 2M-105">
                        <a href="/SB_2M-105" title="SB 2M-105">
                          <Item_own />
                        </a>
                      </div>
                      <div className="tree-item-text">
                        <span className="tree-item-text-scroll">SB&nbsp;2M-105</span>
                      </div>
                      <TechTreeImg vehicle="sb_2m_105" type="aircraft" />
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
                      <div className="tree-item-background" id="SB 2M-103U">
                        <a href="/SB_2M-103U" title="SB 2M-103U">
                          <Item_own />
                        </a>
                      </div>
                      <div className="tree-item-text">
                        <span className="tree-item-text-scroll">SB&nbsp;2M-103U</span>
                      </div>
                      <TechTreeImg vehicle="sb_2m_103u" type="aircraft" />
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
                      <div className="tree-item-background" id="SB 2M-103 MV-3">
                        <a href="/SB_2M-103_MV-3" title="SB 2M-103 MV-3">
                          <Item_own />
                        </a>
                      </div>
                      <div className="tree-item-text">
                        <span className="tree-item-text-scroll">SB&nbsp;2M-103&nbsp;MV-3</span>
                      </div>
                      <TechTreeImg vehicle="sb_2m_103_mv3" type="aircraft" />
                    </div>
                  </div>
                  <div
                    className="tree-group"
                    onClick={(event) => {
                      openfolder(event);
                    }}
                  >
                    <div className="tree-group-text">
                      <span className="tree-item-text-scroll">SB</span>
                    </div>
                    <div className="tree-group-img">
                      <img
                        src="https://encyclopedia.warthunder.com/slots/sb_group.png"
                        alt="sb_group.png"
                      />
                    </div>
                  </div>
                </div>
                <div className="tree-arrow">
                  <img src="/images/Arrow-small.png" alt="Arrow.png" />
                </div>
                <div className="tree-item">
                  <div className="tree-item-background" id="Yak-4">
                    <a href="/Yak-4" title="Yak-4">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">Yak-4</span>
                  </div>
                  <TechTreeImg vehicle="yak-4" type="aircraft" />
                </div>
                <div className="tree-arrow">
                  <img src="/images/Arrow-small.png" alt="Arrow.png" />
                </div>
                <div className="tree-item">
                  <div className="tree-item-background" id="Ar-2">
                    <a href="/Ar-2" title="Ar-2">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">Ar-2</span>
                  </div>
                  <div className="tree-item-img">
                    <img src="https://encyclopedia.warthunder.com/slots/ar_2.png" alt="ar_2.png" />
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
                  <img src="/images/Arrow_head.png" alt="Arrow_head.png" />
                </div>
              </td>
              <td style={{ borderLeft: "solid 1px #cccccc" }}>
                <div className="tree-item">
                  <div className="tree-item-background" id="Zhukovsky's I-153-M62">
                    <a href="/Zhukovsky%27s_I-153-M62" title="Zhukovsky's I-153-M62">
                      <Item_prem />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">Zhukovsky&apos;s I-153-M62</span>
                  </div>
                  <TechTreeImg vehicle="i-153_m62_zhukovskiy" type="aircraft" />
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
                  <div className="tree-item-background" id="PBY-5A Catalina (USSR)">
                    <a href="/PBY-5A_Catalina_(USSR)" title="PBY-5A Catalina (USSR)">
                      <Item_prem />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">▂PBY-5A&nbsp;Catalina</span>
                  </div>
                  <TechTreeImg vehicle="pby-5a_ussr" type="aircraft" />
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
                  <div className="tree-item-background" id="Hampden TB Mk I (USSR)">
                    <a href="/Hampden_TB_Mk_I_(USSR)" title="Hampden TB Mk I (USSR)">
                      <Item_prem />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">▂Hampden TB Mk I</span>
                  </div>
                  <TechTreeImg vehicle="hp52_hampden_tbmk1_ussr_utk1" type="aircraft" />
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
                  <div className="tree-item-background" id="LaGG-3-4">
                    <a href="/LaGG-3-4" title="LaGG-3-4">
                      <Item_prem />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">LaGG-3-4</span>
                  </div>
                  <TechTreeImg vehicle="lagg-3-4" type="aircraft" />
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
                  <div className="tree-item-background" id="MBR-2-M-34">
                    <a href="/MBR-2-M-34" title="MBR-2-M-34">
                      <Item_prem />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">MBR-2-M-34</span>
                  </div>
                  <TechTreeImg vehicle="mbr-2" type="aircraft" />
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
                  <div className="tree-item-background" id="TB-3M-17-32">
                    <a href="/TB-3M-17-32" title="TB-3M-17-32">
                      <Item_prem />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">TB-3M-17-32</span>
                  </div>
                  <TechTreeImg vehicle="tb_3_m17_32" type="aircraft" />
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
                  <div className="tree-item-background" id="Tandem MAI">
                    <a href="/Tandem_MAI" title="Tandem MAI">
                      <Item_prem />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">Tandem MAI</span>
                  </div>
                  <TechTreeImg vehicle="tandem_mai" type="aircraft" />
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
                  <div className="tree-item-background" id="LaGG-3-23">
                    <a href="/LaGG-3-23" title="LaGG-3-23">
                      <Item_prem />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">LaGG-3-23</span>
                  </div>
                  <TechTreeImg vehicle="lagg-3-23" type="aircraft" />
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
                  <div className="tree-item-background" id="I-29">
                    <a href="/I-29" title="I-29">
                      <Item_prem />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">I-29</span>
                  </div>
                  <div className="tree-item-img">
                    <img src="https://encyclopedia.warthunder.com/slots/i_29.png" alt="i_29.png" />
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
                <div style={{ position: "relative" }}>
                  <div
                    className="tree-group-collapse"
                    style={{ display: "none", position: "absolute" }}
                  >
                    <div className="tree-item">
                      <div className="tree-item-background" id="Yak-1">
                        <a href="/Yak-1" title="Yak-1">
                          <Item_own />
                        </a>
                      </div>
                      <div className="tree-item-text">
                        <span className="tree-item-text-scroll">Yak-1</span>
                      </div>
                      <TechTreeImg vehicle="yak-1_early" type="aircraft" />
                    </div>
                    <div className="tree-arrow">
                      <img src="/images/Arrow-small.png" alt="Arrow.png" />
                    </div>
                    <div className="tree-item">
                      <div className="tree-item-background" id="Yak-1B">
                        <a href="/Yak-1B" title="Yak-1B">
                          <Item_own />
                        </a>
                      </div>
                      <div className="tree-item-text">
                        <span className="tree-item-text-scroll">Yak-1B</span>
                      </div>
                      <TechTreeImg vehicle="yak-1b" type="aircraft" />
                    </div>
                  </div>
                  <div
                    className="tree-group"
                    onClick={(event) => {
                      openfolder(event);
                    }}
                  >
                    <div className="tree-group-text">
                      <span className="tree-item-text-scroll">Yak-1</span>
                    </div>
                    <div className="tree-group-img">
                      <img
                        src="https://encyclopedia.warthunder.com/slots/yak-9_group.png"
                        alt="yak-9_group.png"
                      />
                    </div>
                  </div>
                </div>
                <div className="tree-arrow">
                  <img src="/images/Arrow-small.png" alt="Arrow.png" />
                </div>
                <div className="tree-item">
                  <div className="tree-item-background" id="Yak-7B">
                    <a href="/Yak-7B" title="Yak-7B">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">Yak-7B</span>
                  </div>
                  <TechTreeImg vehicle="yak-7b" type="aircraft" />
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
                      <div className="tree-item-background" id="Yak-9">
                        <a href="/Yak-9" title="Yak-9">
                          <Item_own />
                        </a>
                      </div>
                      <div className="tree-item-text">
                        <span className="tree-item-text-scroll">Yak-9</span>
                      </div>
                      <TechTreeImg vehicle="yak-9" type="aircraft" />
                    </div>
                    <div className="tree-arrow">
                      <img src="/images/Arrow-small.png" alt="Arrow.png" />
                    </div>
                    <div className="tree-item">
                      <div className="tree-item-background" id="Yak-9B">
                        <a href="/Yak-9B" title="Yak-9B">
                          <Item_own />
                        </a>
                      </div>
                      <div className="tree-item-text">
                        <span className="tree-item-text-scroll">Yak-9B</span>
                      </div>
                      <TechTreeImg vehicle="yak-9b" type="aircraft" />
                    </div>
                  </div>
                  <div
                    className="tree-group"
                    onClick={(event) => {
                      openfolder(event);
                    }}
                  >
                    <div className="tree-group-text">
                      <span className="tree-item-text-scroll">Yak-9</span>
                    </div>
                    <div className="tree-group-img">
                      <img
                        src="https://encyclopedia.warthunder.com/slots/yak-9_group.png"
                        alt="yak-9_group.png"
                      />
                    </div>
                  </div>
                </div>
              </td>
              <td>
                <div style={{ position: "relative" }}>
                  <div
                    className="tree-group-collapse"
                    style={{ display: "none", position: "absolute" }}
                  >
                    <div className="tree-item">
                      <div className="tree-item-background" id="MiG-3-15">
                        <a href="/MiG-3-15" title="MiG-3-15">
                          <Item_own />
                        </a>
                      </div>
                      <div className="tree-item-text">
                        <span className="tree-item-text-scroll">MiG-3-15</span>
                      </div>
                      <TechTreeImg vehicle="mig_3_series_1_15" type="aircraft" />
                    </div>
                    <div className="tree-arrow">
                      <img src="/images/Arrow-small.png" alt="Arrow.png" />
                    </div>
                    <div className="tree-item">
                      <div className="tree-item-background" id="MiG-3-15 (BK)">
                        <a href="/MiG-3-15_(BK)" title="MiG-3-15 (BK)">
                          <Item_own />
                        </a>
                      </div>
                      <div className="tree-item-text">
                        <span className="tree-item-text-scroll">MiG-3-15 (BK)</span>
                      </div>
                      <TechTreeImg vehicle="mig_3_series_1_15_bk_pod" type="aircraft" />
                    </div>
                  </div>
                  <div
                    className="tree-group"
                    onClick={(event) => {
                      openfolder(event);
                    }}
                  >
                    <div className="tree-group-text">
                      <span className="tree-item-text-scroll">MiG-3</span>
                    </div>
                    <div className="tree-group-img">
                      <img
                        src="https://encyclopedia.warthunder.com/slots/mig_3_series_group.png"
                        alt="mig_3_series_group.png"
                      />
                    </div>
                  </div>
                </div>
                <div className="tree-arrow">
                  <img src="/images/Arrow-small.png" alt="Arrow.png" />
                </div>
                <div className="tree-item">
                  <div className="tree-item-background" id="MiG-3-34">
                    <a href="/MiG-3-34" title="MiG-3-34">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">MiG-3-34</span>
                  </div>
                  <TechTreeImg vehicle="mig_3_series_34" type="aircraft" />
                </div>
                <div className="tree-arrow">
                  <img src="/images/Arrow-small.png" alt="Arrow.png" />
                </div>
                <div className="tree-item">
                  <div className="tree-item-background" id="I-16 type 27">
                    <a href="/I-16_type_27" title="I-16 type 27">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">I-16&nbsp;type&nbsp;27</span>
                  </div>
                  <TechTreeImg vehicle="i-16_type27" type="aircraft" />
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
                <div style={{ position: "relative" }}>
                  <div
                    className="tree-group-collapse"
                    style={{ display: "none", position: "absolute" }}
                  >
                    <div className="tree-item">
                      <div className="tree-item-background" id="LaGG-3-8">
                        <a href="/LaGG-3-8" title="LaGG-3-8">
                          <Item_own />
                        </a>
                      </div>
                      <div className="tree-item-text">
                        <span className="tree-item-text-scroll">LaGG-3-8</span>
                      </div>
                      <TechTreeImg vehicle="lagg-3-8" type="aircraft" />
                    </div>
                    <div className="tree-arrow">
                      <img src="/images/Arrow-small.png" alt="Arrow.png" />
                    </div>
                    <div className="tree-item">
                      <div className="tree-item-background" id="LaGG-3-11">
                        <a href="/LaGG-3-11" title="LaGG-3-11">
                          <Item_own />
                        </a>
                      </div>
                      <div className="tree-item-text">
                        <span className="tree-item-text-scroll">LaGG-3-11</span>
                      </div>
                      <TechTreeImg vehicle="lagg-3-11" type="aircraft" />
                    </div>
                  </div>
                  <div
                    className="tree-group"
                    onClick={(event) => {
                      openfolder(event);
                    }}
                  >
                    <div className="tree-group-text">
                      <span className="tree-item-text-scroll">LaGG-3 (e)</span>
                    </div>
                    <div className="tree-group-img">
                      <img
                        src="https://encyclopedia.warthunder.com/slots/lagg-3_group.png"
                        alt="lagg-3_group.png"
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
                      <div className="tree-item-background" id="LaGG-3-35">
                        <a href="/LaGG-3-35" title="LaGG-3-35">
                          <Item_own />
                        </a>
                      </div>
                      <div className="tree-item-text">
                        <span className="tree-item-text-scroll">LaGG-3-35</span>
                      </div>
                      <TechTreeImg vehicle="lagg-3-35" type="aircraft" />
                    </div>
                    <div className="tree-arrow">
                      <img src="/images/Arrow-small.png" alt="Arrow.png" />
                    </div>
                    <div className="tree-item">
                      <div className="tree-item-background" id="LaGG-3-66">
                        <a href="/LaGG-3-66" title="LaGG-3-66">
                          <Item_own />
                        </a>
                      </div>
                      <div className="tree-item-text">
                        <span className="tree-item-text-scroll">LaGG-3-66</span>
                      </div>
                      <TechTreeImg vehicle="lagg-3-66" type="aircraft" />
                    </div>
                  </div>
                  <div
                    className="tree-group"
                    onClick={(event) => {
                      openfolder(event);
                    }}
                  >
                    <div className="tree-group-text">
                      <span className="tree-item-text-scroll">LaGG-3 (l)</span>
                    </div>
                    <div className="tree-group-img">
                      <img
                        src="https://encyclopedia.warthunder.com/slots/lagg-3_late_group.png"
                        alt="lagg-3_late_group.png"
                      />
                    </div>
                  </div>
                </div>
                <div className="tree-arrow">
                  <img src="/images/Arrow-small.png" alt="Arrow.png" />
                </div>
                <div className="tree-item">
                  <div className="tree-item-background" id="La-5">
                    <a href="/La-5" title="La-5">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">La-5</span>
                  </div>
                  <TechTreeImg vehicle="la-5_type37_early" type="aircraft" />
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
                      <div className="tree-item-background" id="Pe-3 (e)">
                        <a href="/Pe-3_(e)" title="Pe-3 (e)">
                          <Item_own />
                        </a>
                      </div>
                      <div className="tree-item-text">
                        <span className="tree-item-text-scroll">Pe-3 (e)</span>
                      </div>
                      <TechTreeImg vehicle="pe-3_early" type="aircraft" />
                    </div>
                    <div className="tree-arrow">
                      <img src="/images/Arrow-small.png" alt="Arrow.png" />
                    </div>
                    <div className="tree-item">
                      <div className="tree-item-background" id="Pe-3">
                        <a href="/Pe-3" title="Pe-3">
                          <Item_own />
                        </a>
                      </div>
                      <div className="tree-item-text">
                        <span className="tree-item-text-scroll">Pe-3</span>
                      </div>
                      <TechTreeImg vehicle="pe-3" type="aircraft" />
                    </div>
                  </div>
                  <div
                    className="tree-group"
                    onClick={(event) => {
                      openfolder(event);
                    }}
                  >
                    <div className="tree-group-text">
                      <span className="tree-item-text-scroll">Pe-3</span>
                    </div>
                    <div className="tree-group-img">
                      <img
                        src="https://encyclopedia.warthunder.com/slots/pe-3_group.png"
                        alt="pe-3_group.png"
                      />
                    </div>
                  </div>
                </div>
                <div className="tree-arrow">
                  <img src="/images/Arrow-small.png" alt="Arrow.png" />
                </div>
                <div className="tree-item">
                  <div className="tree-item-background" id="IL-2 (1941)">
                    <a href="/IL-2_(1941)" title="IL-2 (1941)">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">IL-2 (1941)</span>
                  </div>
                  <TechTreeImg vehicle="il_2_1941" type="aircraft" />
                </div>
                <div className="tree-arrow">
                  <img src="/images/Arrow-small.png" alt="Arrow.png" />
                </div>
                <div className="tree-item">
                  <div className="tree-item-background" id="IL-2 (1942)">
                    <a href="/IL-2_(1942)" title="IL-2 (1942)">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">IL-2 (1942)</span>
                  </div>
                  <TechTreeImg vehicle="il-2i" type="aircraft" />
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
                  <div className="tree-item-background" id="DB-3B">
                    <a href="/DB-3B" title="DB-3B">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">DB-3B</span>
                  </div>
                  <TechTreeImg vehicle="db_3b" type="aircraft" />
                </div>
                <div className="tree-arrow">
                  <img src="/images/Arrow-small.png" alt="Arrow.png" />
                </div>
                <div className="tree-item">
                  <div className="tree-item-background" id="IL-4">
                    <a href="/IL-4" title="IL-4">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">IL-4</span>
                  </div>
                  <div className="tree-item-img">
                    <img src="https://encyclopedia.warthunder.com/slots/il-4.png" alt="il-4.png" />
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
                      <div className="tree-item-background" id="Pe-2-1">
                        <a href="/Pe-2-1" title="Pe-2-1">
                          <Item_own />
                        </a>
                      </div>
                      <div className="tree-item-text">
                        <span className="tree-item-text-scroll">Pe-2-1</span>
                      </div>
                      <TechTreeImg vehicle="pe-2-1" type="aircraft" />
                    </div>
                    <div className="tree-arrow">
                      <img src="/images/Arrow-small.png" alt="Arrow.png" />
                    </div>
                    <div className="tree-item">
                      <div className="tree-item-background" id="Pe-2-31">
                        <a href="/Pe-2-31" title="Pe-2-31">
                          <Item_own />
                        </a>
                      </div>
                      <div className="tree-item-text">
                        <span className="tree-item-text-scroll">Pe-2-31</span>
                      </div>
                      <TechTreeImg vehicle="pe-2-31" type="aircraft" />
                    </div>
                    <div className="tree-arrow">
                      <img src="/images/Arrow-small.png" alt="Arrow.png" />
                    </div>
                    <div className="tree-item">
                      <div className="tree-item-background" id="Pe-2-83">
                        <a href="/Pe-2-83" title="Pe-2-83">
                          <Item_own />
                        </a>
                      </div>
                      <div className="tree-item-text">
                        <span className="tree-item-text-scroll">Pe-2-83</span>
                      </div>
                      <TechTreeImg vehicle="pe-2-83" type="aircraft" />
                    </div>
                  </div>
                  <div
                    className="tree-group"
                    onClick={(event) => {
                      openfolder(event);
                    }}
                  >
                    <div className="tree-group-text">
                      <span className="tree-item-text-scroll">Pe-2 (e)</span>
                    </div>
                    <div className="tree-group-img">
                      <img
                        src="https://encyclopedia.warthunder.com/slots/pe-2_group.png"
                        alt="pe-2_group.png"
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
                  <img src="/images/Arrow_head.png" alt="Arrow_head.png" />
                </div>
              </td>
              <td style={{ borderLeft: "solid 1px #cccccc" }}>
                <div className="tree-item">
                  <div className="tree-item-background" id="P-40E-1 (USSR)">
                    <a href="/P-40E-1_(USSR)" title="P-40E-1 (USSR)">
                      <Item_prem />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">▂P-40E-1</span>
                  </div>
                  <TechTreeImg vehicle="p-40e_ussr" type="aircraft" />
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
                  <div className="tree-item-background" id="Hurricane Mk IIB (USSR)">
                    <a href="/Hurricane_Mk_IIB_(USSR)" title="Hurricane Mk IIB (USSR)">
                      <Item_prem />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">▂Hurricane&nbsp;Mk&nbsp;IIB</span>
                  </div>
                  <TechTreeImg vehicle="hurricanemkii_ussr" type="aircraft" />
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
                  <div className="tree-item-background" id="I-153P">
                    <a href="/I-153P" title="I-153P">
                      <Item_prem />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">I-153P</span>
                  </div>
                  <TechTreeImg vehicle="i-153p" type="aircraft" />
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
                  <div className="tree-item-background" id="I-16 type 28">
                    <a href="/I-16_type_28" title="I-16 type 28">
                      <Item_prem />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">I-16&nbsp;type&nbsp;28</span>
                  </div>
                  <TechTreeImg vehicle="i-16_type28" type="aircraft" />
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
                  <div className="tree-item-background" id="P-39K-1 (USSR)">
                    <a href="/P-39K-1_(USSR)" title="P-39K-1 (USSR)">
                      <Item_prem />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">▂P-39K-1</span>
                  </div>
                  <TechTreeImg vehicle="p-39k_1" type="aircraft" />
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
                  <div className="tree-item-background" id="IL-2 M-82">
                    <a href="/IL-2_M-82" title="IL-2 M-82">
                      <Item_prem />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">IL-2 M-82</span>
                  </div>
                  <TechTreeImg vehicle="il_2_m82" type="aircraft" />
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
                  <div className="tree-item-background" id="LaGG-3-34">
                    <a href="/LaGG-3-34" title="LaGG-3-34">
                      <Item_prem />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">LaGG-3-34</span>
                  </div>
                  <TechTreeImg vehicle="lagg-3-34" type="aircraft" />
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
                  <div className="tree-item-background" id="I-180S">
                    <a href="/I-180S" title="I-180S">
                      <Item_prem />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">I-180S</span>
                  </div>
                  <TechTreeImg vehicle="i_180" type="aircraft" />
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
                  <div className="tree-item-background" id="I-301">
                    <a href="/I-301" title="I-301">
                      <Item_prem />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">I-301</span>
                  </div>
                  <TechTreeImg vehicle="lagg-i-301" type="aircraft" />
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
                  <div className="tree-item-background" id="Yak-9T">
                    <a href="/Yak-9T" title="Yak-9T">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">Yak-9T</span>
                  </div>
                  <TechTreeImg vehicle="yak-9t" type="aircraft" />
                </div>
                <div className="tree-arrow">
                  <img src="/images/Arrow-small.png" alt="Arrow.png" />
                </div>
                <div className="tree-item">
                  <div className="tree-item-background" id="Yak-9K">
                    <a href="/Yak-9K" title="Yak-9K">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">Yak-9K</span>
                  </div>
                  <TechTreeImg vehicle="yak-9k" type="aircraft" />
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
                      <div className="tree-item-background" id="Yak-3">
                        <a href="/Yak-3" title="Yak-3">
                          <Item_own />
                        </a>
                      </div>
                      <div className="tree-item-text">
                        <span className="tree-item-text-scroll">Yak-3</span>
                      </div>
                      <TechTreeImg vehicle="yak-3" type="aircraft" />
                    </div>
                    <div className="tree-arrow">
                      <img src="/images/Arrow-small.png" alt="Arrow.png" />
                    </div>
                    <div className="tree-item">
                      <div className="tree-item-background" id="Yak-3P">
                        <a href="/Yak-3P" title="Yak-3P">
                          <Item_own />
                        </a>
                      </div>
                      <div className="tree-item-text">
                        <span className="tree-item-text-scroll">Yak-3P</span>
                      </div>
                      <TechTreeImg vehicle="yak-3p" type="aircraft" />
                    </div>
                  </div>
                  <div
                    className="tree-group"
                    onClick={(event) => {
                      openfolder(event);
                    }}
                  >
                    <div className="tree-group-text">
                      <span className="tree-item-text-scroll">Yak-3</span>
                    </div>
                    <div className="tree-group-img">
                      <img
                        src="https://encyclopedia.warthunder.com/slots/yak-3_group.png"
                        alt="yak-3_group.png"
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
                  <img src="/images/Arrow_center_small.png" alt="Arrow_center_small.png" />
                  <br />
                  <img src="/images/Arrow_center.png" alt="Arrow_center.png" />
                  <br />
                  <img src="/images/Arrow_head.png" alt="Arrow_head.png" />
                </div>
              </td>
              <td>
                <div className="tree-item">
                  <div className="tree-item-background" id="I-185 (M-82)">
                    <a href="/I-185_(M-82)" title="I-185 (M-82)">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">I-185 (M-82)</span>
                  </div>
                  <TechTreeImg vehicle="i_185_m82" type="aircraft" />
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
                  <div className="tree-item-background" id="La-5F">
                    <a href="/La-5F" title="La-5F">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">La-5F</span>
                  </div>
                  <TechTreeImg vehicle="la-5_type39" type="aircraft" />
                </div>
                <div className="tree-arrow">
                  <img src="/images/Arrow-small.png" alt="Arrow.png" />
                </div>
                <div className="tree-item">
                  <div className="tree-item-background" id="La-5FN">
                    <a href="/La-5FN" title="La-5FN">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">La-5FN</span>
                  </div>
                  <TechTreeImg vehicle="la-5fn" type="aircraft" />
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
                  <img src="/images/Arrow_head.png" alt="Arrow_head.png" />
                </div>
              </td>
              <td>
                <div className="tree-item">
                  <div className="tree-item-background" id="Pe-3bis">
                    <a href="/Pe-3bis" title="Pe-3bis">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">Pe-3bis</span>
                  </div>
                  <TechTreeImg vehicle="pe-3_bis" type="aircraft" />
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
                      <div className="tree-item-background" id="IL-2-37">
                        <a href="/IL-2-37" title="IL-2-37">
                          <Item_own />
                        </a>
                      </div>
                      <div className="tree-item-text">
                        <span className="tree-item-text-scroll">IL-2-37</span>
                      </div>
                      <TechTreeImg vehicle="il_2_37_1943" type="aircraft" />
                    </div>
                    <div className="tree-arrow">
                      <img src="/images/Arrow-small.png" alt="Arrow.png" />
                    </div>
                    <div className="tree-item">
                      <div className="tree-item-background" id="IL-2M (1943)">
                        <a href="/IL-2M_(1943)" title="IL-2M (1943)">
                          <Item_own />
                        </a>
                      </div>
                      <div className="tree-item-text">
                        <span className="tree-item-text-scroll">IL-2M (1943)</span>
                      </div>
                      <TechTreeImg vehicle="il_2m_1943" type="aircraft" />
                    </div>
                  </div>
                  <div
                    className="tree-group"
                    onClick={(event) => {
                      openfolder(event);
                    }}
                  >
                    <div className="tree-group-text">
                      <span className="tree-item-text-scroll">IL-2M</span>
                    </div>
                    <div className="tree-group-img">
                      <img
                        src="https://encyclopedia.warthunder.com/slots/il-2m_group.png"
                        alt="il-2m_group.png"
                      />
                    </div>
                  </div>
                </div>
                <div className="tree-arrow">
                  <img src="/images/Arrow-small.png" alt="Arrow.png" />
                </div>
                <div className="tree-item">
                  <div className="tree-item-background" id="IL-2M type 3">
                    <a href="/IL-2M_type_3" title="IL-2M type 3">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">IL-2M type 3</span>
                  </div>
                  <TechTreeImg vehicle="il-2m" type="aircraft" />
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
              <td>
                <div style={{ position: "relative" }}>
                  <div
                    className="tree-group-collapse"
                    style={{ display: "none", position: "absolute" }}
                  >
                    <div className="tree-item">
                      <div className="tree-item-background" id="Yer-2 (M-105)">
                        <a href="/Yer-2_(M-105)" title="Yer-2 (M-105)">
                          <Item_own />
                        </a>
                      </div>
                      <div className="tree-item-text">
                        <span className="tree-item-text-scroll">Yer-2&nbsp;(M-105)</span>
                      </div>
                      <TechTreeImg vehicle="er-2_m105_mv3" type="aircraft" />
                    </div>
                    <div className="tree-arrow">
                      <img src="/images/Arrow-small.png" alt="Arrow.png" />
                    </div>
                    <div className="tree-item">
                      <div className="tree-item-background" id="Yer-2 (M-105R) LU">
                        <a href="/Yer-2_(M-105R)_LU" title="Yer-2 (M-105R) LU">
                          <Item_own />
                        </a>
                      </div>
                      <div className="tree-item-text">
                        <span className="tree-item-text-scroll">Yer-2&nbsp;(M-105R)&nbsp;LU</span>
                      </div>
                      <TechTreeImg vehicle="er-2_m105r_lu2b" type="aircraft" />
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
                      <div className="tree-item-background" id="Yer-2 (M-105) TAT">
                        <a href="/Yer-2_(M-105)_TAT" title="Yer-2 (M-105) TAT">
                          <Item_own />
                        </a>
                      </div>
                      <div className="tree-item-text">
                        <span className="tree-item-text-scroll">Yer-2&nbsp;(M-105)&nbsp;TAT</span>
                      </div>
                      <TechTreeImg vehicle="er-2_m105_tat" type="aircraft" />
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
                      <div className="tree-item-background" id="Yer-2 (M-105R) TAT">
                        <a href="/Yer-2_(M-105R)_TAT" title="Yer-2 (M-105R) TAT">
                          <Item_own />
                        </a>
                      </div>
                      <div className="tree-item-text">
                        <span className="tree-item-text-scroll">Yer-2&nbsp;(M-105R)&nbsp;TAT</span>
                      </div>
                      <TechTreeImg vehicle="er-2_m105r_tat" type="aircraft" />
                    </div>
                  </div>
                  <div
                    className="tree-group"
                    onClick={(event) => {
                      openfolder(event);
                    }}
                  >
                    <div className="tree-group-text">
                      <span className="tree-item-text-scroll">Yer-2</span>
                    </div>
                    <div className="tree-group-img">
                      <img
                        src="https://encyclopedia.warthunder.com/slots/er-2_group.png"
                        alt="er-2_group.png"
                      />
                    </div>
                  </div>
                </div>
                <div className="tree-arrow">
                  <img src="/images/Arrow-small.png" alt="Arrow.png" />
                </div>
                <div className="tree-item">
                  <div className="tree-item-background" id="Pe-8">
                    <a href="/Pe-8" title="Pe-8">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">Pe-8</span>
                  </div>
                  <TechTreeImg vehicle="pe-8_m82" type="aircraft" />
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
                      <div className="tree-item-background" id="Pe-2-110">
                        <a href="/Pe-2-110" title="Pe-2-110">
                          <Item_own />
                        </a>
                      </div>
                      <div className="tree-item-text">
                        <span className="tree-item-text-scroll">Pe-2-110</span>
                      </div>
                      <TechTreeImg vehicle="pe-2-110" type="aircraft" />
                    </div>
                    <div className="tree-arrow">
                      <img src="/images/Arrow-small.png" alt="Arrow.png" />
                    </div>
                    <div className="tree-item">
                      <div className="tree-item-background" id="Pe-2-359">
                        <a href="/Pe-2-359" title="Pe-2-359">
                          <Item_own />
                        </a>
                      </div>
                      <div className="tree-item-text">
                        <span className="tree-item-text-scroll">Pe-2-359</span>
                      </div>
                      <TechTreeImg vehicle="pe-2-359" type="aircraft" />
                    </div>
                  </div>
                  <div
                    className="tree-group"
                    onClick={(event) => {
                      openfolder(event);
                    }}
                  >
                    <div className="tree-group-text">
                      <span className="tree-item-text-scroll">Pe-2 (l)</span>
                    </div>
                    <div className="tree-group-img">
                      <img
                        src="https://encyclopedia.warthunder.com/slots/pe-2_late_group.png"
                        alt="pe-2_late_group.png"
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
                  <img src="/images/Arrow_center_small.png" alt="Arrow_center_small.png" />
                  <br />
                  <img src="/images/Arrow_center.png" alt="Arrow_center.png" />
                  <br />
                  <img src="/images/Arrow_head.png" alt="Arrow_head.png" />
                </div>
              </td>
              <td style={{ borderLeft: "solid 1px #cccccc" }}>
                <div className="tree-item">
                  <div className="tree-item-background" id="Pokryshkin's P-39N-0 (USSR)">
                    <a href="/Pokryshkin%27s_P-39N-0_(USSR)" title="Pokryshkin's P-39N-0 (USSR)">
                      <Item_prem />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">▂Pokryshkin&apos;s P-39N-0</span>
                  </div>
                  <TechTreeImg vehicle="p-39n_su" type="aircraft" />
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
                  <div className="tree-item-background" id="P-39Q-15 (USSR)">
                    <a href="/P-39Q-15_(USSR)" title="P-39Q-15 (USSR)">
                      <Item_prem />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">▂P-39Q-15</span>
                  </div>
                  <TechTreeImg vehicle="p-39q_15" type="aircraft" />
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
                  <div className="tree-item-background" id="P-63A-5 (USSR)">
                    <a href="/P-63A-5_(USSR)" title="P-63A-5 (USSR)">
                      <Item_prem />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">▂P-63A-5</span>
                  </div>
                  <TechTreeImg vehicle="p-63a-5_ussr" type="aircraft" />
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
                  <div className="tree-item-background" id="P-47D-27 (USSR)">
                    <a href="/P-47D-27_(USSR)" title="P-47D-27 (USSR)">
                      <Item_prem />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">▂P-47D-27</span>
                  </div>
                  <TechTreeImg vehicle="p-47d_ussr" type="aircraft" />
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
                  <div className="tree-item-background" id="B-25J-30 (USSR)">
                    <a href="/B-25J-30_(USSR)" title="B-25J-30 (USSR)">
                      <Item_prem />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">▂B-25J-30</span>
                  </div>
                  <TechTreeImg vehicle="b_25j_30_vvs_ussr" type="aircraft" />
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
                  <div className="tree-item-background">
                    <a href="/IL-2M_%22Avenger%22" title='IL-2M "Avenger"'>
                      <Item_prem />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">IL-2M &quot;Avenger&quot;</span>
                  </div>
                  <TechTreeImg vehicle="il-2m_mstitel" type="aircraft" />
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
                  <div className="tree-item-background" id="Golovachev's Yak-9M">
                    <a href="/Golovachev%27s_Yak-9M" title="Golovachev's Yak-9M">
                      <Item_prem />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">Golovachev&apos;s Yak-9M</span>
                  </div>
                  <TechTreeImg vehicle="yak-9m" type="aircraft" />
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
                  <div className="tree-item-background" id="Pe-2-205">
                    <a href="/Pe-2-205" title="Pe-2-205">
                      <Item_prem />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">Pe-2-205</span>
                  </div>
                  <TechTreeImg vehicle="pe-2-205" type="aircraft" />
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
                  <div className="tree-item-background" id="Tu-2">
                    <a href="/Tu-2" title="Tu-2">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">Tu-2</span>
                  </div>
                  <TechTreeImg vehicle="tu-2_early" type="aircraft" />
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
                  <div className="tree-item-background" id="ITP (M-1)">
                    <a href="/ITP_(M-1)" title="ITP (M-1)">
                      <Item_prem />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">ITP (M-1)</span>
                  </div>
                  <TechTreeImg vehicle="itp_m1" type="aircraft" />
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
                  <div className="tree-item-background" id="TIS MA">
                    <a href="/TIS_MA" title="TIS MA">
                      <Item_prem />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">TIS MA</span>
                  </div>
                  <TechTreeImg vehicle="tis_ma" type="aircraft" />
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
                  <div className="tree-item-background" id="Yak-3T">
                    <a href="/Yak-3T" title="Yak-3T">
                      <Item_prem />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">Yak-3T</span>
                  </div>
                  <TechTreeImg vehicle="yak-3t" type="aircraft" />
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
                <div style={{ position: "relative" }}>
                  <div
                    className="tree-group-collapse"
                    style={{ display: "none", position: "absolute" }}
                  >
                    <div className="tree-item">
                      <div className="tree-item-background" id="Yak-9U">
                        <a href="/Yak-9U" title="Yak-9U">
                          <Item_own />
                        </a>
                      </div>
                      <div className="tree-item-text">
                        <span className="tree-item-text-scroll">Yak-9U</span>
                      </div>
                      <TechTreeImg vehicle="yak-9u" type="aircraft" />
                    </div>
                    <div className="tree-arrow">
                      <img src="/images/Arrow-small.png" alt="Arrow.png" />
                    </div>
                    <div className="tree-item">
                      <div className="tree-item-background" id="Yak-9P">
                        <a href="/Yak-9P" title="Yak-9P">
                          <Item_own />
                        </a>
                      </div>
                      <div className="tree-item-text">
                        <span className="tree-item-text-scroll">Yak-9P</span>
                      </div>
                      <TechTreeImg vehicle="yak-9p" type="aircraft" />
                    </div>
                  </div>
                  <div
                    className="tree-group"
                    onClick={(event) => {
                      openfolder(event);
                    }}
                  >
                    <div className="tree-group-text">
                      <span className="tree-item-text-scroll">Yak-9U/P</span>
                    </div>
                    <div className="tree-group-img">
                      <img
                        src="https://encyclopedia.warthunder.com/slots/yak-9up_group.png"
                        alt="yak-9up_group.png"
                      />
                    </div>
                  </div>
                </div>
                <div className="tree-arrow">
                  <img src="/images/Arrow-small.png" alt="Arrow.png" />
                </div>
                <div className="tree-item">
                  <div className="tree-item-background" id="Yak-3U">
                    <a href="/Yak-3U" title="Yak-3U">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">Yak-3U</span>
                  </div>
                  <TechTreeImg vehicle="yak-3u" type="aircraft" />
                </div>
                <div className="tree-arrow">
                  <img src="/images/Arrow-small.png" alt="Arrow.png" />
                </div>
                <div className="tree-item">
                  <div className="tree-item-background" id="Yak-9UT">
                    <a href="/Yak-9UT" title="Yak-9UT">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">Yak-9UT</span>
                  </div>
                  <TechTreeImg vehicle="yak-9ut" type="aircraft" />
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
                  <div className="tree-item-background" id="I-185 (M-71)">
                    <a href="/I-185_(M-71)" title="I-185 (M-71)">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">I-185 (M-71)</span>
                  </div>
                  <TechTreeImg vehicle="i_185_m71_standard" type="aircraft" />
                </div>
                <div className="tree-arrow">
                  <img src="/images/Arrow-small.png" alt="Arrow.png" />
                </div>
                <div className="tree-item">
                  <div className="tree-item-background" id="I-225">
                    <a href="/I-225" title="I-225">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">I-225</span>
                  </div>
                  <TechTreeImg vehicle="i_225" type="aircraft" />
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
              <td>
                <div className="tree-item">
                  <div className="tree-item-background" id="La-7">
                    <a href="/La-7" title="La-7">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">La-7</span>
                  </div>
                  <div className="tree-item-img">
                    <img src="https://encyclopedia.warthunder.com/slots/la-7.png" alt="la-7.png" />
                  </div>
                </div>
                <div className="tree-arrow">
                  <img src="/images/Arrow-small.png" alt="Arrow.png" />
                </div>
                <div className="tree-item">
                  <div className="tree-item-background" id="La-7B-20">
                    <a href="/La-7B-20" title="La-7B-20">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">La-7B-20</span>
                  </div>
                  <TechTreeImg vehicle="la-7b-20" type="aircraft" />
                </div>
                <div className="tree-arrow">
                  <img src="/images/Arrow-small.png" alt="Arrow.png" />
                </div>
                <div className="tree-item">
                  <div className="tree-item-background" id="La-9">
                    <a href="/La-9" title="La-9">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">La-9</span>
                  </div>
                  <div className="tree-item-img">
                    <img src="https://encyclopedia.warthunder.com/slots/la-9.png" alt="la-9.png" />
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
                  <div className="tree-item-background" id="Su-6 (AM-42)">
                    <a href="/Su-6_(AM-42)" title="Su-6 (AM-42)">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">Su-6 (AM-42)</span>
                  </div>
                  <TechTreeImg vehicle="su-6_am42" type="aircraft" />
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
                      <div className="tree-item-background" id="IL-10">
                        <a href="/IL-10" title="IL-10">
                          <Item_own />
                        </a>
                      </div>
                      <div className="tree-item-text">
                        <span className="tree-item-text-scroll">IL-10</span>
                      </div>
                      <TechTreeImg vehicle="il-10" type="aircraft" />
                    </div>
                    <div className="tree-arrow">
                      <img src="/images/Arrow-small.png" alt="Arrow.png" />
                    </div>
                    <div className="tree-item">
                      <div className="tree-item-background" id="IL-10 (1946)">
                        <a href="/IL-10_(1946)" title="IL-10 (1946)">
                          <Item_own />
                        </a>
                      </div>
                      <div className="tree-item-text">
                        <span className="tree-item-text-scroll">IL-10 (1946)</span>
                      </div>
                      <TechTreeImg vehicle="il-10_1946" type="aircraft" />
                    </div>
                  </div>
                  <div
                    className="tree-group"
                    onClick={(event) => {
                      openfolder(event);
                    }}
                  >
                    <div className="tree-group-text">
                      <span className="tree-item-text-scroll">IL-10</span>
                    </div>
                    <div className="tree-group-img">
                      <img
                        src="https://encyclopedia.warthunder.com/slots/il-10_group.png"
                        alt="il-10_group.png"
                      />
                    </div>
                  </div>
                </div>
                <div className="tree-arrow">
                  <img src="/images/Arrow-small.png" alt="Arrow.png" />
                </div>
                <div className="tree-item">
                  <div className="tree-item-background" id="Su-6 (M-71F)">
                    <a href="/Su-6_(M-71F)" title="Su-6 (M-71F)">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">Su-6 (M-71F)</span>
                  </div>
                  <TechTreeImg vehicle="su-6_m71" type="aircraft" />
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
                      <div className="tree-item-background" id="Yer-2 (ACh-30B) (e)">
                        <a href="/Yer-2_(ACh-30B)_(e)" title="Yer-2 (ACh-30B) (e)">
                          <Item_own />
                        </a>
                      </div>
                      <div className="tree-item-text">
                        <span className="tree-item-text-scroll">Yer-2&nbsp;(ACh-30B) (e)</span>
                      </div>
                      <TechTreeImg vehicle="er-2_ach30b_early" type="aircraft" />
                    </div>
                    <div className="tree-arrow">
                      <img src="/images/Arrow-small.png" alt="Arrow.png" />
                    </div>
                    <div className="tree-item">
                      <div className="tree-item-background" id="Yer-2 (ACh-30B) (l)">
                        <a href="/Yer-2_(ACh-30B)_(l)" title="Yer-2 (ACh-30B) (l)">
                          <Item_own />
                        </a>
                      </div>
                      <div className="tree-item-text">
                        <span className="tree-item-text-scroll">Yer-2&nbsp;(ACh-30B) (l)</span>
                      </div>
                      <TechTreeImg vehicle="er-2_ach30b_late" type="aircraft" />
                    </div>
                  </div>
                  <div
                    className="tree-group"
                    onClick={(event) => {
                      openfolder(event);
                    }}
                  >
                    <div className="tree-group-text">
                      <span className="tree-item-text-scroll">Yer-2 (l)</span>
                    </div>
                    <div className="tree-group-img">
                      <img
                        src="https://encyclopedia.warthunder.com/slots/er-2_ach30b_group.png"
                        alt="er-2_ach30b_group.png"
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
                      <div className="tree-item-background" id="Tu-2S">
                        <a href="/Tu-2S" title="Tu-2S">
                          <Item_own />
                        </a>
                      </div>
                      <div className="tree-item-text">
                        <span className="tree-item-text-scroll">Tu-2S</span>
                      </div>
                      <TechTreeImg vehicle="tu-2" type="aircraft" />
                    </div>
                    <div className="tree-arrow">
                      <img src="/images/Arrow-small.png" alt="Arrow.png" />
                    </div>
                    <div className="tree-item">
                      <div className="tree-item-background" id="Tu-2S-44">
                        <a href="/Tu-2S-44" title="Tu-2S-44">
                          <Item_own />
                        </a>
                      </div>
                      <div className="tree-item-text">
                        <span className="tree-item-text-scroll">Tu-2S-44</span>
                      </div>
                      <TechTreeImg vehicle="tu-2_postwar" type="aircraft" />
                    </div>
                    <div className="tree-arrow">
                      <img src="/images/Arrow-small.png" alt="Arrow.png" />
                    </div>
                    <div className="tree-item">
                      <div className="tree-item-background" id="Tu-2S-59">
                        <a href="/Tu-2S-59" title="Tu-2S-59">
                          <Item_own />
                        </a>
                      </div>
                      <div className="tree-item-text">
                        <span className="tree-item-text-scroll">Tu-2S-59</span>
                      </div>
                      <TechTreeImg vehicle="tu-2_postwar_late" type="aircraft" />
                    </div>
                  </div>
                  <div
                    className="tree-group"
                    onClick={(event) => {
                      openfolder(event);
                    }}
                  >
                    <div className="tree-group-text">
                      <span className="tree-item-text-scroll">Tu-2</span>
                    </div>
                    <div className="tree-group-img">
                      <img
                        src="https://encyclopedia.warthunder.com/slots/tu-2_group.png"
                        alt="tu-2_group.png"
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
                  <img src="/images/Arrow_center_small.png" alt="Arrow_center_small.png" />
                  <br />
                  <img src="/images/Arrow_center.png" alt="Arrow_center.png" />
                  <br />
                  <img src="/images/Arrow_head.png" alt="Arrow_head.png" />
                </div>
              </td>
              <td style={{ borderLeft: "solid 1px #cccccc" }}>
                <div className="tree-item">
                  <div className="tree-item-background" id="Dolgushin's La-7">
                    <a href="/Dolgushin%27s_La-7" title="Dolgushin's La-7">
                      <Item_prem />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">Dolgushin&apos;s La-7</span>
                  </div>
                  <TechTreeImg vehicle="la-7_dolgushin" type="aircraft" />
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
                  <div className="tree-item-background" id="Su-6">
                    <a href="/Su-6" title="Su-6">
                      <Item_prem />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">Su-6</span>
                  </div>
                  <TechTreeImg vehicle="su_6_single" type="aircraft" />
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
                  <div className="tree-item-background" id="Be-6">
                    <a href="/Be-6" title="Be-6">
                      <Item_prem />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">Be-6</span>
                  </div>
                  <div className="tree-item-img">
                    <img src="https://encyclopedia.warthunder.com/slots/be_6.png" alt="be_6.png" />
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
                <div className="tree-item">
                  <div className="tree-item-background" id="Su-8">
                    <a href="/Su-8" title="Su-8">
                      <Item_prem />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">Su-8</span>
                  </div>
                  <div className="tree-item-img">
                    <img src="https://encyclopedia.warthunder.com/slots/su-8.png" alt="su-8.png" />
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
                <div className="tree-item">
                  <div className="tree-item-background" id="La-11">
                    <a href="/La-11" title="La-11">
                      <Item_prem />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">La-11</span>
                  </div>
                  <TechTreeImg vehicle="la-11" type="aircraft" />
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
                  <div className="tree-item-background" id="Yak-3 (VK-107)">
                    <a href="/Yak-3_(VK-107)" title="Yak-3 (VK-107)">
                      <Item_prem />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">Yak-3 (VK-107)</span>
                  </div>
                  <TechTreeImg vehicle="yak-3_vk107" type="aircraft" />
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
                  <div className="tree-item-background" id="P-63C-5 (USSR)">
                    <a href="/P-63C-5_(USSR)" title="P-63C-5 (USSR)">
                      <Item_prem />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">▂P-63C-5</span>
                  </div>
                  <TechTreeImg vehicle="p-63c-5_ussr" type="aircraft" />
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
                  <div className="tree-item-background" id="P-63A-10 (USSR)">
                    <a href="/P-63A-10_(USSR)" title="P-63A-10 (USSR)">
                      <Item_prem />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">▂P-63A-10</span>
                  </div>
                  <TechTreeImg vehicle="p-63a-10_ussr" type="aircraft" />
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
                  <div className="tree-item-background" id="Fw 190 D-9 (USSR)">
                    <a href="/Fw_190_D-9_(USSR)" title="Fw 190 D-9 (USSR)">
                      <Item_prem />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">▂Fw&nbsp;190&nbsp;D-9</span>
                  </div>
                  <TechTreeImg vehicle="fw-190d-9_ussr" type="aircraft" />
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
                  <div className="tree-item-background" id="Spitfire Mk IXc (USSR)">
                    <a href="/Spitfire_Mk_IXc_(USSR)" title="Spitfire Mk IXc (USSR)">
                      <Item_prem />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">▂Spitfire&nbsp;Mk IXc</span>
                  </div>
                  <TechTreeImg vehicle="spitfire_ix_ussr" type="aircraft" />
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
                  <div className="tree-item-background" id="Tu-1">
                    <a href="/Tu-1" title="Tu-1">
                      <Item_prem />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">Tu-1</span>
                  </div>
                  <div className="tree-item-img">
                    <img src="https://encyclopedia.warthunder.com/slots/tu-1.png" alt="tu-1.png" />
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
                <div style={{ position: "relative" }}>
                  <div
                    className="tree-group-collapse"
                    style={{ display: "none", position: "absolute" }}
                  >
                    <div className="tree-item">
                      <div className="tree-item-background" id="Yak-15P">
                        <a href="/Yak-15P" title="Yak-15P">
                          <Item_own />
                        </a>
                      </div>
                      <div className="tree-item-text">
                        <span className="tree-item-text-scroll">Yak-15P</span>
                      </div>
                      <TechTreeImg vehicle="yak-15_early" type="aircraft" />
                    </div>
                    <div className="tree-arrow">
                      <img src="/images/Arrow-small.png" alt="Arrow.png" />
                    </div>
                    <div className="tree-item">
                      <div className="tree-item-background" id="Yak-15">
                        <a href="/Yak-15" title="Yak-15">
                          <Item_own />
                        </a>
                      </div>
                      <div className="tree-item-text">
                        <span className="tree-item-text-scroll">Yak-15</span>
                      </div>
                      <TechTreeImg vehicle="yak-15" type="aircraft" />
                    </div>
                    <div className="tree-arrow">
                      <img src="/images/Arrow-small.png" alt="Arrow.png" />
                    </div>
                    <div className="tree-item">
                      <div className="tree-item-background" id="Yak-17">
                        <a href="/Yak-17" title="Yak-17">
                          <Item_own />
                        </a>
                      </div>
                      <div className="tree-item-text">
                        <span className="tree-item-text-scroll">Yak-17</span>
                      </div>
                      <TechTreeImg vehicle="yak-17" type="aircraft" />
                    </div>
                  </div>
                  <div
                    className="tree-group"
                    onClick={(event) => {
                      openfolder(event);
                    }}
                  >
                    <div className="tree-group-text">
                      <span className="tree-item-text-scroll">Yak-15/17</span>
                    </div>
                    <div className="tree-group-img">
                      <img
                        src="https://encyclopedia.warthunder.com/slots/yak-15_group.png"
                        alt="yak-15_group.png"
                      />
                    </div>
                  </div>
                </div>
                <div className="tree-arrow">
                  <img src="/images/Arrow-small.png" alt="Arrow.png" />
                </div>
                <div className="tree-item">
                  <div className="tree-item-background" id="Yak-23">
                    <a href="/Yak-23" title="Yak-23">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">Yak-23</span>
                  </div>
                  <TechTreeImg vehicle="yak-23" type="aircraft" />
                </div>
                <div className="tree-arrow">
                  <img src="/images/Arrow-small.png" alt="Arrow.png" />
                </div>
                <div className="tree-item">
                  <div className="tree-item-background" id="Yak-30D">
                    <a href="/Yak-30D" title="Yak-30D">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">Yak-30D</span>
                  </div>
                  <TechTreeImg vehicle="yak-30d" type="aircraft" />
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
                      <div className="tree-item-background" id="MiG-9">
                        <a href="/MiG-9" title="MiG-9">
                          <Item_own />
                        </a>
                      </div>
                      <div className="tree-item-text">
                        <span className="tree-item-text-scroll">MiG-9</span>
                      </div>
                      <TechTreeImg vehicle="mig-9" type="aircraft" />
                    </div>
                    <div className="tree-arrow">
                      <img src="/images/Arrow-small.png" alt="Arrow.png" />
                    </div>
                    <div className="tree-item">
                      <div className="tree-item-background" id="MiG-9 (l)">
                        <a href="/MiG-9_(l)" title="MiG-9 (l)">
                          <Item_own />
                        </a>
                      </div>
                      <div className="tree-item-text">
                        <span className="tree-item-text-scroll">MiG-9&nbsp;(l)</span>
                      </div>
                      <TechTreeImg vehicle="mig-9_ussr" type="aircraft" />
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
                        src="https://encyclopedia.warthunder.com/slots/mig-9_group.png"
                        alt="mig-9_group.png"
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
                      <div className="tree-item-background" id="MiG-15">
                        <a href="/MiG-15" title="MiG-15">
                          <Item_own />
                        </a>
                      </div>
                      <div className="tree-item-text">
                        <span className="tree-item-text-scroll">MiG-15</span>
                      </div>
                      <TechTreeImg vehicle="mig-15_ns23" type="aircraft" />
                    </div>
                    <div className="tree-arrow">
                      <img src="/images/Arrow-small.png" alt="Arrow.png" />
                    </div>
                    <div className="tree-item">
                      <div className="tree-item-background" id="MiG-15bis">
                        <a href="/MiG-15bis" title="MiG-15bis">
                          <Item_own />
                        </a>
                      </div>
                      <div className="tree-item-text">
                        <span className="tree-item-text-scroll">MiG-15bis</span>
                      </div>
                      <TechTreeImg vehicle="mig-15" type="aircraft" />
                    </div>
                  </div>
                  <div
                    className="tree-group"
                    onClick={(event) => {
                      openfolder(event);
                    }}
                  >
                    <div className="tree-group-text">
                      <span className="tree-item-text-scroll">MiG-15</span>
                    </div>
                    <div className="tree-group-img">
                      <img
                        src="https://encyclopedia.warthunder.com/slots/mig-15_group.png"
                        alt="mig-15_group.png"
                      />
                    </div>
                  </div>
                </div>
                <div className="tree-arrow">
                  <img src="/images/Arrow-small.png" alt="Arrow.png" />
                </div>
                <div className="tree-item">
                  <div className="tree-item-background" id="MiG-17">
                    <a href="/MiG-17" title="MiG-17">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">MiG-17</span>
                  </div>
                  <TechTreeImg vehicle="mig-17" type="aircraft" />
                </div>
                <div className="tree-arrow">
                  <img src="/images/Arrow-small.png" alt="Arrow.png" />
                </div>
              </td>
              <td>
                <div className="tree-item">
                  <div className="tree-item-background" id="Su-9">
                    <a href="/Su-9" title="Su-9">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">Su-9</span>
                  </div>
                  <div className="tree-item-img">
                    <img src="https://encyclopedia.warthunder.com/slots/su-9.png" alt="su-9.png" />
                  </div>
                </div>
                <div className="tree-arrow">
                  <img src="/images/Arrow-small.png" alt="Arrow.png" />
                </div>
                <div className="tree-item">
                  <div className="tree-item-background" id="La-200">
                    <a href="/La-200" title="La-200">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">La-200</span>
                  </div>
                  <TechTreeImg vehicle="la_200_toriy" type="aircraft" />
                </div>
                <div className="tree-arrow">
                  <img src="/images/Arrow-small.png" alt="Arrow.png" />
                </div>
                <div className="tree-item">
                  <div className="tree-item-background" id="La-15">
                    <a href="/La-15" title="La-15">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">La-15</span>
                  </div>
                  <TechTreeImg vehicle="la-15" type="aircraft" />
                </div>
                <div className="tree-arrow">
                  <img src="/images/Arrow-small.png" alt="Arrow.png" />
                </div>
              </td>
              <td>
                <div className="tree-item">
                  <div className="tree-item-background" id="IL-28">
                    <a href="/IL-28" title="IL-28">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">IL-28</span>
                  </div>
                  <TechTreeImg vehicle="il_28" type="aircraft" />
                </div>
                <div className="tree-arrow">
                  <img src="/images/Arrow-small.png" alt="Arrow.png" />
                </div>
                <div className="tree-item">
                  <div className="tree-item-background" id="IL-28Sh">
                    <a href="/IL-28Sh" title="IL-28Sh">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">IL-28Sh</span>
                  </div>
                  <TechTreeImg vehicle="il_28sh" type="aircraft" />
                </div>
              </td>
              <td>
                <div className="tree-item">
                  <div className="tree-item-background" id="Tu-4">
                    <a href="/Tu-4" title="Tu-4">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">Tu-4</span>
                  </div>
                  <div className="tree-item-img">
                    <img src="https://encyclopedia.warthunder.com/slots/tu_4.png" alt="tu_4.png" />
                  </div>
                </div>
                <div className="tree-arrow">
                  <img src="/images/Arrow-small.png" alt="Arrow.png" />
                </div>
                <div className="tree-item">
                  <div className="tree-item-background" id="Tu-14T">
                    <a href="/Tu-14T" title="Tu-14T">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">Tu-14T</span>
                  </div>
                  <TechTreeImg vehicle="tu_14t" type="aircraft" />
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
                  <div className="tree-item-background" id="Su-11">
                    <a href="/Su-11" title="Su-11">
                      <Item_prem />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">Su-11</span>
                  </div>
                  <TechTreeImg vehicle="su-11" type="aircraft" />
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
                  <div className="tree-item-background" id="MiG-15bis ISH">
                    <a href="/MiG-15bis_ISH" title="MiG-15bis ISH">
                      <Item_prem />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">MiG-15bis ISH</span>
                  </div>
                  <TechTreeImg vehicle="mig-15bis_ish" type="aircraft" />
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
                  <div className="tree-item-background" id="MiG-17AS">
                    <a href="/MiG-17AS" title="MiG-17AS">
                      <Item_prem />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">MiG-17AS</span>
                  </div>
                  <TechTreeImg vehicle="mig-17_cuba" type="aircraft" />
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
                  <div className="tree-item-background" id="BI">
                    <a href="/BI" title="BI">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">BI</span>
                  </div>
                  <div className="tree-item-img">
                    <img src="https://encyclopedia.warthunder.com/slots/bi.png" alt="bi.png" />
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
                <div className="tree-item">
                  <div className="tree-item-background" id="La-174">
                    <a href="/La-174" title="La-174">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">La-174</span>
                  </div>
                  <TechTreeImg vehicle="la_174" type="aircraft" />
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
                  <div className="tree-item-background" id="Yak-38M">
                    <a href="/Yak-38M" title="Yak-38M">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">Yak-38M</span>
                  </div>
                  <TechTreeImg vehicle="yak-38m" type="aircraft" />
                </div>
              </td>
              <td>
                <div className="tree-item">
                  <div className="tree-item-background" id="MiG-19PT">
                    <a href="/MiG-19PT" title="MiG-19PT">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">MiG-19PT</span>
                  </div>
                  <TechTreeImg vehicle="mig-19pt" type="aircraft" />
                </div>
                <div className="tree-arrow">
                  <img src="/images/Arrow-small.png" alt="Arrow.png" />
                </div>
                <div className="tree-item">
                  <div className="tree-item-background" id="MiG-21F-13">
                    <a href="/MiG-21F-13" title="MiG-21F-13">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">MiG-21F-13</span>
                  </div>
                  <TechTreeImg vehicle="mig-21_f13" type="aircraft" />
                </div>
                <div className="tree-arrow">
                  <img src="/images/Arrow-small.png" alt="Arrow.png" />
                </div>
              </td>
              <td>
                <div className="tree-item">
                  <div className="tree-item-background" id="Su-7B">
                    <a href="/Su-7B" title="Su-7B">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">Su-7B</span>
                  </div>
                  <TechTreeImg vehicle="su-7b" type="aircraft" />
                </div>
                <div className="tree-arrow">
                  <img src="/images/Arrow-small.png" alt="Arrow.png" />
                </div>
                <div className="tree-item">
                  <div className="tree-item-background" id="Su-7BKL">
                    <a href="/Su-7BKL" title="Su-7BKL">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">Su-7BKL</span>
                  </div>
                  <TechTreeImg vehicle="su-7bkl" type="aircraft" />
                </div>
                <div className="tree-arrow">
                  <img src="/images/Arrow-small.png" alt="Arrow.png" />
                </div>
              </td>
              <td />
              <td>
                <div className="tree-item">
                  <div className="tree-item-background" id="Yak-28B">
                    <a href="/Yak-28B" title="Yak-28B">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">Yak-28B</span>
                  </div>
                  <TechTreeImg vehicle="yak-28b" type="aircraft" />
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
                  <div className="tree-item-background" id="Yak-38">
                    <a href="/Yak-38" title="Yak-38">
                      <Item_prem />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">Yak-38</span>
                  </div>
                  <TechTreeImg vehicle="yak-38" type="aircraft" />
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
                  <div className="tree-item-background" id="Su-7BMK">
                    <a href="/Su-7BMK" title="Su-7BMK">
                      <Item_prem />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">Su-7BMK</span>
                  </div>
                  <TechTreeImg vehicle="su-7bmk" type="aircraft" />
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
                  <div className="tree-item-background" id="MiG-21PFM">
                    <a href="/MiG-21PFM" title="MiG-21PFM">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">MiG-21PFM</span>
                  </div>
                  <TechTreeImg vehicle="mig-21_pfm" type="aircraft" />
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
                  <div className="tree-item-background" id="MiG-21S (R-13-300)">
                    <a href="/MiG-21S_(R-13-300)" title="MiG-21S (R-13-300)">
                      <Item_prem />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">MiG-21S (R-13-300)</span>
                  </div>
                  <TechTreeImg vehicle="mig-21_s" type="aircraft" />
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
                      <div className="tree-item-background" id="MiG-21SMT">
                        <a href="/MiG-21SMT" title="MiG-21SMT">
                          <Item_own />
                        </a>
                      </div>
                      <div className="tree-item-text">
                        <span className="tree-item-text-scroll">MiG-21SMT</span>
                      </div>
                      <TechTreeImg vehicle="mig-21_smt" type="aircraft" />
                    </div>
                    <div className="tree-arrow">
                      <img src="/images/Arrow-small.png" alt="Arrow.png" />
                    </div>
                    <div className="tree-item">
                      <div className="tree-item-background" id="MiG-21bis">
                        <a href="/MiG-21bis" title="MiG-21bis">
                          <Item_own />
                        </a>
                      </div>
                      <div className="tree-item-text">
                        <span className="tree-item-text-scroll">MiG-21bis</span>
                      </div>
                      <TechTreeImg vehicle="mig-21_bis" type="aircraft" />
                    </div>
                  </div>
                  <div
                    className="tree-group"
                    onClick={(event) => {
                      openfolder(event);
                    }}
                  >
                    <div className="tree-group-text">
                      <span className="tree-item-text-scroll">MiG-21</span>
                    </div>
                    <div className="tree-group-img">
                      <img
                        src="https://encyclopedia.warthunder.com/slots/mig-21_group.png"
                        alt="mig-21_group.png"
                      />
                    </div>
                  </div>
                </div>
                <div className="tree-arrow">
                  <img src="/images/Arrow-small.png" alt="Arrow.png" />
                </div>
                <div className="tree-item">
                  <div className="tree-item-background" id="MiG-23M">
                    <a href="/MiG-23M" title="MiG-23M">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">MiG-23M</span>
                  </div>
                  <TechTreeImg vehicle="mig_23m" type="aircraft" />
                </div>
                <div className="tree-arrow">
                  <img src="/images/Arrow-small.png" alt="Arrow.png" />
                </div>
                <div className="tree-item">
                  <div className="tree-item-background" id="MiG-23MLD">
                    <a href="/MiG-23MLD" title="MiG-23MLD">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">MiG-23MLD</span>
                  </div>
                  <TechTreeImg vehicle="mig_23mld" type="aircraft" />
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
                  <div className="tree-item-background" id="Su-17M2">
                    <a href="/Su-17M2" title="Su-17M2">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">Su-17M2</span>
                  </div>
                  <TechTreeImg vehicle="su_17m2" type="aircraft" />
                </div>
                <div className="tree-arrow">
                  <img src="/images/Arrow-small.png" alt="Arrow.png" />
                </div>
                <div className="tree-item">
                  <div className="tree-item-background" id="Su-17M4">
                    <a href="/Su-17M4" title="Su-17M4">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">Su-17M4</span>
                  </div>
                  <TechTreeImg vehicle="su_17m4" type="aircraft" />
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
                  <div className="tree-item-background" id="MiG-27M">
                    <a href="/MiG-27M" title="MiG-27M">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">MiG-27M</span>
                  </div>
                  <TechTreeImg vehicle="mig_27m" type="aircraft" />
                </div>
                <div className="tree-arrow">
                  <img src="/images/Arrow-small.png" alt="Arrow.png" />
                </div>
                <div className="tree-item">
                  <div className="tree-item-background" id="MiG-27K">
                    <a href="/MiG-27K" title="MiG-27K">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">MiG-27K</span>
                  </div>
                  <TechTreeImg vehicle="mig_27k" type="aircraft" />
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
                  <div className="tree-item-background" id="Su-22M3">
                    <a href="/Su-22M3" title="Su-22M3">
                      <Item_squad />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">Su-22M3</span>
                  </div>
                  <TechTreeImg vehicle="su_22m3" type="aircraft" />
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
                  src="//yewtu.be/embed/fKrdTWqmgAY?"
                  allowFullScreen={true}
                  width={640}
                  height={360}
                  frameBorder={0}
                />
              </div>
            </div>
          </div>
          <div className="video_desc">
            <b>Yakovlev Aircraft</b> - <i>War Thunder Official Channel</i>
          </div>
        </div>
        <div className="video">
          <div className="video_embed">
            <div className="embedvideo autoResize" style={{}}>
              <div className="embedvideowrap" style={{ width: 640 }}>
                <iframe
                  src="//yewtu.be/embed/a3V1Ss-sIOs?"
                  allowFullScreen={true}
                  width={640}
                  height={360}
                  frameBorder={0}
                />
              </div>
            </div>
          </div>
          <div className="video_desc">
            <b>USSR Air Forces Rank V - Tutorial and Guide</b> - <i>Jengar</i>
          </div>
        </div>
        <div className="video">
          <div className="video_embed">
            <div className="embedvideo autoResize" style={{}}>
              <div className="embedvideowrap" style={{ width: 640 }}>
                <iframe
                  src="//yewtu.be/embed/NRis-UEnGjI?"
                  allowFullScreen={true}
                  width={640}
                  height={360}
                  frameBorder={0}
                />
              </div>
            </div>
          </div>
          <div className="video_desc">
            <b>USSR Air Forces Rank IV - Tutorial and Guide</b> - <i>Jengar</i>
          </div>
        </div>
        <div className="video">
          <div className="video_embed">
            <div className="embedvideo autoResize" style={{}}>
              <div className="embedvideowrap" style={{ width: 640 }}>
                <iframe
                  src="//yewtu.be/embed/BxECg8eQaQY?"
                  allowFullScreen={true}
                  width={640}
                  height={360}
                  frameBorder={0}
                />
              </div>
            </div>
          </div>
          <div className="video_desc">
            <b>USSR Air Forces Rank III - Tutorial and Guide</b> - <i>Jengar</i>
          </div>
        </div>
        <div className="video">
          <div className="video_embed">
            <div className="embedvideo autoResize" style={{}}>
              <div className="embedvideowrap" style={{ width: 640 }}>
                <iframe
                  src="//yewtu.be/embed/IFPHS0Ak4wU?"
                  allowFullScreen={true}
                  width={640}
                  height={360}
                  frameBorder={0}
                />
              </div>
            </div>
          </div>
          <div className="video_desc">
            <b>USSR Air Forces Rank II - Tutorial and Guide</b> - <i>Jengar</i>
          </div>
        </div>
        <div className="video">
          <div className="video_embed">
            <div className="embedvideo autoResize" style={{}}>
              <div className="embedvideowrap" style={{ width: 640 }}>
                <iframe
                  src="//yewtu.be/embed/p1PmpdL6XWU?"
                  allowFullScreen={true}
                  width={640}
                  height={360}
                  frameBorder={0}
                />
              </div>
            </div>
          </div>
          <div className="video_desc">
            <b>USSR Air Forces Rank I - Tutorial and Guide</b> - <i>Jengar</i>
          </div>
        </div>
        <div className="video">
          <div className="video_embed">
            <div className="embedvideo autoResize" style={{}}>
              <div className="embedvideowrap" style={{ width: 640 }}>
                <iframe
                  src="//yewtu.be/embed/9-X9YgVk1G4?"
                  allowFullScreen={true}
                  width={640}
                  height={360}
                  frameBorder={0}
                />
              </div>
            </div>
          </div>
          <div className="video_desc">
            <b>MiG Alert</b> - <i>War Thunder Official Channel</i>
          </div>
        </div>
        <div className="video">
          <div className="video_embed">
            <div className="embedvideo autoResize" style={{}}>
              <div className="embedvideowrap" style={{ width: 640 }}>
                <iframe
                  src="//yewtu.be/embed/i_s87Tc_Ycs?"
                  allowFullScreen={true}
                  width={640}
                  height={360}
                  frameBorder={0}
                />
              </div>
            </div>
          </div>
          <div className="video_desc">
            <b>Climbing the ranks with USSR aircraft</b> - <i>War Thunder Official Channel</i>
          </div>
        </div>
      </div>
    </div>
  );
}
