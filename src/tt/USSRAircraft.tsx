import { Arrow, EmptyDiv, MediaHead, Rank, Research, TechTreeItem, TreeFolder } from "../TechTree";

export function USSRAircraft() {
  return (
    <div className="mw-parser-output">
      <div className="tree">
        <table rules="rows" width="100%">
          <tbody>
            <Research research={5} premium={2} />
            <tr>
              <Rank rank="I" />
              <td>
                <EmptyDiv />
              </td>
              <td>
                <TreeFolder name="I-15" img="i-15_group">
                  <TechTreeItem
                    link="/I-15_WR"
                    title="I-15 WR"
                    item_type="own"
                    text="I-15&nbsp;WR"
                    intname="i-15_1934"
                    type="aircraft"
                  />
                  <Arrow type="small" />
                  <TechTreeItem
                    link="/I-15_M-22"
                    title="I-15 M-22"
                    item_type="own"
                    text="I-15&nbsp;M-22"
                    intname="i-15_1935"
                    type="aircraft"
                  />
                  <Arrow type="small" />
                  <TechTreeItem
                    link="/I-15R"
                    title="I-15R"
                    item_type="own"
                    text="I-15R"
                    intname="i-15_1935_moscow"
                    type="aircraft"
                  />
                </TreeFolder>
                <Arrow type="small" />
                <TreeFolder name="I-16" img="i-16_group">
                  <TechTreeItem
                    link="/I-16_type_5"
                    title="I-16 type 5"
                    item_type="own"
                    text="I-16&nbsp;type&nbsp;5"
                    intname="i-16_type5"
                    type="aircraft"
                  />
                  <Arrow type="small" />
                  <TechTreeItem
                    link="/I-16_type_10"
                    title="I-16 type 10"
                    item_type="own"
                    text="I-16&nbsp;type&nbsp;10"
                    intname="i-16_type10"
                    type="aircraft"
                  />
                  <Arrow type="small" />
                  <TechTreeItem
                    link="/I-16_type_18"
                    title="I-16 type 18"
                    item_type="own"
                    text="I-16&nbsp;type&nbsp;18"
                    intname="i-16_type18"
                    type="aircraft"
                  />
                  <Arrow type="small" />
                  <TechTreeItem
                    link="/I-16_type_24"
                    title="I-16 type 24"
                    item_type="own"
                    text="I-16&nbsp;type&nbsp;24"
                    intname="i-16_type24"
                    type="aircraft"
                  />
                </TreeFolder>
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
                <TechTreeItem
                  link="/I-15bis"
                  title="I-15bis"
                  item_type="own"
                  text="I-15bis"
                  intname="i-15bis"
                  type="aircraft"
                />
                <Arrow type="small" />
                <TechTreeItem
                  link="/I-153_M-62"
                  title="I-153 M-62"
                  item_type="own"
                  text="I-153&nbsp;M-62"
                  intname="i-153_m62"
                  type="aircraft"
                />
                <EmptyDiv />
              </td>
              <td>
                <TechTreeItem
                  link="/Po-2"
                  title="Po-2"
                  item_type="own"
                  text="Po-2"
                  intname="po-2"
                  type="aircraft"
                />
                <EmptyDiv />
                <TreeFolder name="Su-2" img="su-2_group">
                  <TechTreeItem
                    link="/BB-1"
                    title="BB-1"
                    item_type="own"
                    text="BB-1"
                    intname="bb-1"
                    type="aircraft"
                  />
                  <Arrow type="small" />
                  <TechTreeItem
                    link="/Su-2_MV-5"
                    title="Su-2 MV-5"
                    item_type="own"
                    text="Su-2&nbsp;MV-5"
                    intname="su-2_mv5"
                    type="aircraft"
                  />
                  <Arrow type="small" />
                  <TechTreeItem
                    link="/Su-2_TSS-1"
                    title="Su-2 TSS-1"
                    item_type="own"
                    text="Su-2&nbsp;TSS-1"
                    intname="su-2_tss1"
                    type="aircraft"
                  />
                  <Arrow type="small" />
                  <TechTreeItem
                    link="/Su-2_(M-82)"
                    title="Su-2 (M-82)"
                    item_type="own"
                    text="Su-2&nbsp;(M-82)"
                    intname="su-2_m82"
                    type="aircraft"
                  />
                </TreeFolder>
                <Arrow type="small" />
                <TechTreeItem
                  link="/Yak-2_KABB"
                  title="Yak-2 KABB"
                  item_type="own"
                  text="Yak-2 KABB"
                  intname="yak_2_kabb"
                  type="aircraft"
                />
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
                <TreeFolder name="SB" img="sb_group">
                  <TechTreeItem
                    link="/SB_2M-100"
                    title="SB 2M-100"
                    item_type="own"
                    text="SB&nbsp;2M-100"
                    intname="sb_2m_100"
                    type="aircraft"
                  />
                  <Arrow type="small" />
                  <TechTreeItem
                    link="/SB_2M-103"
                    title="SB 2M-103"
                    item_type="own"
                    text="SB&nbsp;2M-103"
                    intname="sb_2m_103c"
                    type="aircraft"
                  />
                  <Arrow type="small" />
                  <TechTreeItem
                    link="/SB_2M-103U_MV-3"
                    title="SB 2M-103U MV-3"
                    item_type="own"
                    text="SB&nbsp;2M-103U&nbsp;MV-3"
                    intname="sb_2m_103u_mv3"
                    type="aircraft"
                  />
                  <Arrow type="small" />
                  <TechTreeItem
                    link="/SB_2M-105"
                    title="SB 2M-105"
                    item_type="own"
                    text="SB&nbsp;2M-105"
                    intname="sb_2m_105"
                    type="aircraft"
                  />
                  <div
                    style={{
                      position: "relative",
                      width: 160,
                      height: 30,
                      margin: "auto",
                    }}
                  />
                  <TechTreeItem
                    link="/SB_2M-103U"
                    title="SB 2M-103U"
                    item_type="own"
                    text="SB&nbsp;2M-103U"
                    intname="sb_2m_103u"
                    type="aircraft"
                  />
                  <div
                    style={{
                      position: "relative",
                      width: 160,
                      height: 30,
                      margin: "auto",
                    }}
                  />
                  <TechTreeItem
                    link="/SB_2M-103_MV-3"
                    title="SB 2M-103 MV-3"
                    item_type="own"
                    text="SB&nbsp;2M-103&nbsp;MV-3"
                    intname="sb_2m_103_mv3"
                    type="aircraft"
                  />
                </TreeFolder>
                <Arrow type="small" />
                <TechTreeItem
                  link="/Yak-4"
                  title="Yak-4"
                  item_type="own"
                  text="Yak-4"
                  intname="yak-4"
                  type="aircraft"
                />
                <Arrow type="small" />
                <TechTreeItem
                  link="/Ar-2"
                  title="Ar-2"
                  item_type="own"
                  text="Ar-2"
                  intname="ar_2"
                  type="aircraft"
                />
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
                <TechTreeItem
                  link="/Zhukovsky%27s_I-153-M62"
                  title="Zhukovsky's I-153-M62"
                  item_type="prem"
                  text="Zhukovsky's I-153-M62"
                  intname="i-153_m62_zhukovskiy"
                  type="aircraft"
                />
                <EmptyDiv />
                <TechTreeItem
                  link="/PBY-5A_Catalina_(USSR)"
                  title="PBY-5A Catalina (USSR)"
                  item_type="prem"
                  text="▂PBY-5A&nbsp;Catalina"
                  intname="pby-5a_ussr"
                  type="aircraft"
                />
                <EmptyDiv />
                <TechTreeItem
                  link="/Hampden_TB_Mk_I_(USSR)"
                  title="Hampden TB Mk I (USSR)"
                  item_type="prem"
                  text="▂Hampden TB Mk I"
                  intname="hp52_hampden_tbmk1_ussr_utk1"
                  type="aircraft"
                />
                <EmptyDiv />
                <TechTreeItem
                  link="/LaGG-3-4"
                  title="LaGG-3-4"
                  item_type="prem"
                  text="LaGG-3-4"
                  intname="lagg-3-4"
                  type="aircraft"
                />
                <EmptyDiv />
              </td>
              <td>
                <TechTreeItem
                  link="/MBR-2-M-34"
                  title="MBR-2-M-34"
                  item_type="prem"
                  text="MBR-2-M-34"
                  intname="mbr-2"
                  type="aircraft"
                />
                <EmptyDiv />
                <TechTreeItem
                  link="/TB-3M-17-32"
                  title="TB-3M-17-32"
                  item_type="prem"
                  text="TB-3M-17-32"
                  intname="tb_3_m17_32"
                  type="aircraft"
                />
                <EmptyDiv />
                <TechTreeItem
                  link="/Tandem_MAI"
                  title="Tandem MAI"
                  item_type="prem"
                  text="Tandem MAI"
                  intname="tandem_mai"
                  type="aircraft"
                />
                <EmptyDiv />
                <TechTreeItem
                  link="/LaGG-3-23"
                  title="LaGG-3-23"
                  item_type="prem"
                  text="LaGG-3-23"
                  intname="lagg-3-23"
                  type="aircraft"
                />
                <EmptyDiv />
                <TechTreeItem
                  link="/I-29"
                  title="I-29"
                  item_type="prem"
                  text="I-29"
                  intname="i_29"
                  type="aircraft"
                />
                <EmptyDiv />
              </td>
            </tr>
            <tr>
              <Rank rank="II" />
              <td>
                <TreeFolder name="Yak-1" img="yak-9_group">
                  <TechTreeItem
                    link="/Yak-1"
                    title="Yak-1"
                    item_type="own"
                    text="Yak-1"
                    intname="yak-1_early"
                    type="aircraft"
                  />
                  <Arrow type="small" />
                  <TechTreeItem
                    link="/Yak-1B"
                    title="Yak-1B"
                    item_type="own"
                    text="Yak-1B"
                    intname="yak-1b"
                    type="aircraft"
                  />
                </TreeFolder>
                <Arrow type="small" />
                <TechTreeItem
                  link="/Yak-7B"
                  title="Yak-7B"
                  item_type="own"
                  text="Yak-7B"
                  intname="yak-7b"
                  type="aircraft"
                />
                <Arrow type="small" />
                <TreeFolder name="Yak-9" img="yak-9_group">
                  <TechTreeItem
                    link="/Yak-9"
                    title="Yak-9"
                    item_type="own"
                    text="Yak-9"
                    intname="yak-9"
                    type="aircraft"
                  />
                  <Arrow type="small" />
                  <TechTreeItem
                    link="/Yak-9B"
                    title="Yak-9B"
                    item_type="own"
                    text="Yak-9B"
                    intname="yak-9b"
                    type="aircraft"
                  />
                </TreeFolder>
              </td>
              <td>
                <TreeFolder name="MiG-3" img="mig_3_series_group">
                  <TechTreeItem
                    link="/MiG-3-15"
                    title="MiG-3-15"
                    item_type="own"
                    text="MiG-3-15"
                    intname="mig_3_series_1_15"
                    type="aircraft"
                  />
                  <Arrow type="small" />
                  <TechTreeItem
                    link="/MiG-3-15_(BK)"
                    title="MiG-3-15 (BK)"
                    item_type="own"
                    text="MiG-3-15 (BK)"
                    intname="mig_3_series_1_15_bk_pod"
                    type="aircraft"
                  />
                </TreeFolder>
                <Arrow type="small" />
                <TechTreeItem
                  link="/MiG-3-34"
                  title="MiG-3-34"
                  item_type="own"
                  text="MiG-3-34"
                  intname="mig_3_series_34"
                  type="aircraft"
                />
                <Arrow type="small" />
                <TechTreeItem
                  link="/I-16_type_27"
                  title="I-16 type 27"
                  item_type="own"
                  text="I-16&nbsp;type&nbsp;27"
                  intname="i-16_type27"
                  type="aircraft"
                />
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
                <TreeFolder name="LaGG-3 (e)" img="lagg-3_group">
                  <TechTreeItem
                    link="/LaGG-3-8"
                    title="LaGG-3-8"
                    item_type="own"
                    text="LaGG-3-8"
                    intname="lagg-3-8"
                    type="aircraft"
                  />
                  <Arrow type="small" />
                  <TechTreeItem
                    link="/LaGG-3-11"
                    title="LaGG-3-11"
                    item_type="own"
                    text="LaGG-3-11"
                    intname="lagg-3-11"
                    type="aircraft"
                  />
                </TreeFolder>
                <Arrow type="small" />
                <TreeFolder name="LaGG-3 (l)" img="lagg-3_late_group">
                  <TechTreeItem
                    link="/LaGG-3-35"
                    title="LaGG-3-35"
                    item_type="own"
                    text="LaGG-3-35"
                    intname="lagg-3-35"
                    type="aircraft"
                  />
                  <Arrow type="small" />
                  <TechTreeItem
                    link="/LaGG-3-66"
                    title="LaGG-3-66"
                    item_type="own"
                    text="LaGG-3-66"
                    intname="lagg-3-66"
                    type="aircraft"
                  />
                </TreeFolder>
                <Arrow type="small" />
                <TechTreeItem
                  link="/La-5"
                  title="La-5"
                  item_type="own"
                  text="La-5"
                  intname="la-5_type37_early"
                  type="aircraft"
                />
                <EmptyDiv />
              </td>
              <td>
                <TreeFolder name="Pe-3" img="pe-3_group">
                  <TechTreeItem
                    link="/Pe-3_(e)"
                    title="Pe-3 (e)"
                    item_type="own"
                    text="Pe-3 (e)"
                    intname="pe-3_early"
                    type="aircraft"
                  />
                  <Arrow type="small" />
                  <TechTreeItem
                    link="/Pe-3"
                    title="Pe-3"
                    item_type="own"
                    text="Pe-3"
                    intname="pe-3"
                    type="aircraft"
                  />
                </TreeFolder>
                <Arrow type="small" />
                <TechTreeItem
                  link="/IL-2_(1941)"
                  title="IL-2 (1941)"
                  item_type="own"
                  text="IL-2 (1941)"
                  intname="il_2_1941"
                  type="aircraft"
                />
                <Arrow type="small" />
                <TechTreeItem
                  link="/IL-2_(1942)"
                  title="IL-2 (1942)"
                  item_type="own"
                  text="IL-2 (1942)"
                  intname="il-2i"
                  type="aircraft"
                />
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
                <TechTreeItem
                  link="/DB-3B"
                  title="DB-3B"
                  item_type="own"
                  text="DB-3B"
                  intname="db_3b"
                  type="aircraft"
                />
                <Arrow type="small" />
                <TechTreeItem
                  link="/IL-4"
                  title="IL-4"
                  item_type="own"
                  text="IL-4"
                  intname="il-4"
                  type="aircraft"
                />
                <Arrow type="small" />
                <TreeFolder name="Pe-2 (e)" img="pe-2_group">
                  <TechTreeItem
                    link="/Pe-2-1"
                    title="Pe-2-1"
                    item_type="own"
                    text="Pe-2-1"
                    intname="pe-2-1"
                    type="aircraft"
                  />
                  <Arrow type="small" />
                  <TechTreeItem
                    link="/Pe-2-31"
                    title="Pe-2-31"
                    item_type="own"
                    text="Pe-2-31"
                    intname="pe-2-31"
                    type="aircraft"
                  />
                  <Arrow type="small" />
                  <TechTreeItem
                    link="/Pe-2-83"
                    title="Pe-2-83"
                    item_type="own"
                    text="Pe-2-83"
                    intname="pe-2-83"
                    type="aircraft"
                  />
                </TreeFolder>
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
                <TechTreeItem
                  link="/P-40E-1_(USSR)"
                  title="P-40E-1 (USSR)"
                  item_type="prem"
                  text="▂P-40E-1"
                  intname="p-40e_ussr"
                  type="aircraft"
                />
                <EmptyDiv />
                <TechTreeItem
                  link="/Hurricane_Mk_IIB_(USSR)"
                  title="Hurricane Mk IIB (USSR)"
                  item_type="prem"
                  text="▂Hurricane&nbsp;Mk&nbsp;IIB"
                  intname="hurricanemkii_ussr"
                  type="aircraft"
                />
                <EmptyDiv />
                <TechTreeItem
                  link="/I-153P"
                  title="I-153P"
                  item_type="prem"
                  text="I-153P"
                  intname="i-153p"
                  type="aircraft"
                />
                <EmptyDiv />
                <TechTreeItem
                  link="/I-16_type_28"
                  title="I-16 type 28"
                  item_type="prem"
                  text="I-16&nbsp;type&nbsp;28"
                  intname="i-16_type28"
                  type="aircraft"
                />
                <EmptyDiv />
                <TechTreeItem
                  link="/P-39K-1_(USSR)"
                  title="P-39K-1 (USSR)"
                  item_type="prem"
                  text="▂P-39K-1"
                  intname="p-39k_1"
                  type="aircraft"
                />
                <EmptyDiv />
              </td>
              <td>
                <TechTreeItem
                  link="/IL-2_M-82"
                  title="IL-2 M-82"
                  item_type="prem"
                  text="IL-2 M-82"
                  intname="il_2_m82"
                  type="aircraft"
                />
                <EmptyDiv />
                <TechTreeItem
                  link="/LaGG-3-34"
                  title="LaGG-3-34"
                  item_type="prem"
                  text="LaGG-3-34"
                  intname="lagg-3-34"
                  type="aircraft"
                />
                <EmptyDiv />
                <TechTreeItem
                  link="/I-180S"
                  title="I-180S"
                  item_type="prem"
                  text="I-180S"
                  intname="i_180"
                  type="aircraft"
                />
                <EmptyDiv />
                <TechTreeItem
                  link="/I-301"
                  title="I-301"
                  item_type="prem"
                  text="I-301"
                  intname="lagg-i-301"
                  type="aircraft"
                />
                <EmptyDiv />
              </td>
            </tr>
            <tr>
              <Rank rank="III" />
              <td>
                <TechTreeItem
                  link="/Yak-9T"
                  title="Yak-9T"
                  item_type="own"
                  text="Yak-9T"
                  intname="yak-9t"
                  type="aircraft"
                />
                <Arrow type="small" />
                <TechTreeItem
                  link="/Yak-9K"
                  title="Yak-9K"
                  item_type="own"
                  text="Yak-9K"
                  intname="yak-9k"
                  type="aircraft"
                />
                <Arrow type="small" />
                <TreeFolder name="Yak-3" img="yak-3_group">
                  <TechTreeItem
                    link="/Yak-3"
                    title="Yak-3"
                    item_type="own"
                    text="Yak-3"
                    intname="yak-3"
                    type="aircraft"
                  />
                  <Arrow type="small" />
                  <TechTreeItem
                    link="/Yak-3P"
                    title="Yak-3P"
                    item_type="own"
                    text="Yak-3P"
                    intname="yak-3p"
                    type="aircraft"
                  />
                </TreeFolder>
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
                <TechTreeItem
                  link="/I-185_(M-82)"
                  title="I-185 (M-82)"
                  item_type="own"
                  text="I-185 (M-82)"
                  intname="i_185_m82"
                  type="aircraft"
                />
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
                <TechTreeItem
                  link="/La-5F"
                  title="La-5F"
                  item_type="own"
                  text="La-5F"
                  intname="la-5_type39"
                  type="aircraft"
                />
                <Arrow type="small" />
                <TechTreeItem
                  link="/La-5FN"
                  title="La-5FN"
                  item_type="own"
                  text="La-5FN"
                  intname="la-5fn"
                  type="aircraft"
                />
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
                <TechTreeItem
                  link="/Pe-3bis"
                  title="Pe-3bis"
                  item_type="own"
                  text="Pe-3bis"
                  intname="pe-3_bis"
                  type="aircraft"
                />
                <Arrow type="small" />
                <TreeFolder name="IL-2M" img="il-2m_group">
                  <TechTreeItem
                    link="/IL-2-37"
                    title="IL-2-37"
                    item_type="own"
                    text="IL-2-37"
                    intname="il_2_37_1943"
                    type="aircraft"
                  />
                  <Arrow type="small" />
                  <TechTreeItem
                    link="/IL-2M_(1943)"
                    title="IL-2M (1943)"
                    item_type="own"
                    text="IL-2M (1943)"
                    intname="il_2m_1943"
                    type="aircraft"
                  />
                </TreeFolder>
                <Arrow type="small" />
                <TechTreeItem
                  link="/IL-2M_type_3"
                  title="IL-2M type 3"
                  item_type="own"
                  text="IL-2M type 3"
                  intname="il-2m"
                  type="aircraft"
                />
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
                <TreeFolder name="Yer-2" img="er-2_group">
                  <TechTreeItem
                    link="/Yer-2_(M-105)"
                    title="Yer-2 (M-105)"
                    item_type="own"
                    text="Yer-2&nbsp;(M-105)"
                    intname="er-2_m105_mv3"
                    type="aircraft"
                  />
                  <Arrow type="small" />
                  <TechTreeItem
                    link="/Yer-2_(M-105R)_LU"
                    title="Yer-2 (M-105R) LU"
                    item_type="own"
                    text="Yer-2&nbsp;(M-105R)&nbsp;LU"
                    intname="er-2_m105r_lu2b"
                    type="aircraft"
                  />
                  <div
                    style={{
                      position: "relative",
                      width: 160,
                      height: 30,
                      margin: "auto",
                    }}
                  />
                  <TechTreeItem
                    link="/Yer-2_(M-105)_TAT"
                    title="Yer-2 (M-105) TAT"
                    item_type="own"
                    text="Yer-2&nbsp;(M-105)&nbsp;TAT"
                    intname="er-2_m105_tat"
                    type="aircraft"
                  />
                  <div
                    style={{
                      position: "relative",
                      width: 160,
                      height: 30,
                      margin: "auto",
                    }}
                  />
                  <TechTreeItem
                    link="/Yer-2_(M-105R)_TAT"
                    title="Yer-2 (M-105R) TAT"
                    item_type="own"
                    text="Yer-2&nbsp;(M-105R)&nbsp;TAT"
                    intname="er-2_m105r_tat"
                    type="aircraft"
                  />
                </TreeFolder>
                <Arrow type="small" />
                <TechTreeItem
                  link="/Pe-8"
                  title="Pe-8"
                  item_type="own"
                  text="Pe-8"
                  intname="pe-8_m82"
                  type="aircraft"
                />
                <Arrow type="small" />
                <TreeFolder name="Pe-2 (l)" img="pe-2_late_group">
                  <TechTreeItem
                    link="/Pe-2-110"
                    title="Pe-2-110"
                    item_type="own"
                    text="Pe-2-110"
                    intname="pe-2-110"
                    type="aircraft"
                  />
                  <Arrow type="small" />
                  <TechTreeItem
                    link="/Pe-2-359"
                    title="Pe-2-359"
                    item_type="own"
                    text="Pe-2-359"
                    intname="pe-2-359"
                    type="aircraft"
                  />
                </TreeFolder>
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
                <TechTreeItem
                  link="/Pokryshkin%27s_P-39N-0_(USSR)"
                  title="Pokryshkin's P-39N-0 (USSR)"
                  item_type="prem"
                  text="▂Pokryshkin's P-39N-0"
                  intname="p-39n_su"
                  type="aircraft"
                />
                <EmptyDiv />
                <TechTreeItem
                  link="/P-39Q-15_(USSR)"
                  title="P-39Q-15 (USSR)"
                  item_type="prem"
                  text="▂P-39Q-15"
                  intname="p-39q_15"
                  type="aircraft"
                />
                <EmptyDiv />
                <TechTreeItem
                  link="/P-63A-5_(USSR)"
                  title="P-63A-5 (USSR)"
                  item_type="prem"
                  text="▂P-63A-5"
                  intname="p-63a-5_ussr"
                  type="aircraft"
                />
                <EmptyDiv />
                <TechTreeItem
                  link="/P-47D-27_(USSR)"
                  title="P-47D-27 (USSR)"
                  item_type="prem"
                  text="▂P-47D-27"
                  intname="p-47d_ussr"
                  type="aircraft"
                />
                <EmptyDiv />
                <TechTreeItem
                  link="/B-25J-30_(USSR)"
                  title="B-25J-30 (USSR)"
                  item_type="prem"
                  text="▂B-25J-30"
                  intname="b_25j_30_vvs_ussr"
                  type="aircraft"
                />
                <EmptyDiv />
              </td>
              <td>
                <TechTreeItem
                  link="/IL-2M_%22Avenger%22"
                  title='IL-2M "Avenger"'
                  item_type="prem"
                  text='IL-2M "Avenger"'
                  intname="il-2m_mstitel"
                  type="aircraft"
                />
                <EmptyDiv />
                <TechTreeItem
                  link="/Golovachev%27s_Yak-9M"
                  title="Golovachev's Yak-9M"
                  item_type="prem"
                  text="Golovachev's Yak-9M"
                  intname="yak-9m"
                  type="aircraft"
                />
                <EmptyDiv />
                <TechTreeItem
                  link="/Pe-2-205"
                  title="Pe-2-205"
                  item_type="prem"
                  text="Pe-2-205"
                  intname="pe-2-205"
                  type="aircraft"
                />
                <EmptyDiv />
                <TechTreeItem
                  link="/Tu-2"
                  title="Tu-2"
                  item_type="own"
                  text="Tu-2"
                  intname="tu-2_early"
                  type="aircraft"
                />
                <EmptyDiv />
                <TechTreeItem
                  link="/ITP_(M-1)"
                  title="ITP (M-1)"
                  item_type="prem"
                  text="ITP (M-1)"
                  intname="itp_m1"
                  type="aircraft"
                />
                <EmptyDiv />
                <TechTreeItem
                  link="/TIS_MA"
                  title="TIS MA"
                  item_type="prem"
                  text="TIS MA"
                  intname="tis_ma"
                  type="aircraft"
                />
                <EmptyDiv />
                <TechTreeItem
                  link="/Yak-3T"
                  title="Yak-3T"
                  item_type="prem"
                  text="Yak-3T"
                  intname="yak-3t"
                  type="aircraft"
                />
                <EmptyDiv />
              </td>
            </tr>
            <tr>
              <Rank rank="IV" />
              <td>
                <TreeFolder name="Yak-9U/P" img="yak-9up_group">
                  <TechTreeItem
                    link="/Yak-9U"
                    title="Yak-9U"
                    item_type="own"
                    text="Yak-9U"
                    intname="yak-9u"
                    type="aircraft"
                  />
                  <Arrow type="small" />
                  <TechTreeItem
                    link="/Yak-9P"
                    title="Yak-9P"
                    item_type="own"
                    text="Yak-9P"
                    intname="yak-9p"
                    type="aircraft"
                  />
                </TreeFolder>
                <Arrow type="small" />
                <TechTreeItem
                  link="/Yak-3U"
                  title="Yak-3U"
                  item_type="own"
                  text="Yak-3U"
                  intname="yak-3u"
                  type="aircraft"
                />
                <Arrow type="small" />
                <TechTreeItem
                  link="/Yak-9UT"
                  title="Yak-9UT"
                  item_type="own"
                  text="Yak-9UT"
                  intname="yak-9ut"
                  type="aircraft"
                />
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
                <TechTreeItem
                  link="/I-185_(M-71)"
                  title="I-185 (M-71)"
                  item_type="own"
                  text="I-185 (M-71)"
                  intname="i_185_m71_standard"
                  type="aircraft"
                />
                <Arrow type="small" />
                <TechTreeItem
                  link="/I-225"
                  title="I-225"
                  item_type="own"
                  text="I-225"
                  intname="i_225"
                  type="aircraft"
                />
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
                <TechTreeItem
                  link="/La-7"
                  title="La-7"
                  item_type="own"
                  text="La-7"
                  intname="la-7"
                  type="aircraft"
                />
                <Arrow type="small" />
                <TechTreeItem
                  link="/La-7B-20"
                  title="La-7B-20"
                  item_type="own"
                  text="La-7B-20"
                  intname="la-7b-20"
                  type="aircraft"
                />
                <Arrow type="small" />
                <TechTreeItem
                  link="/La-9"
                  title="La-9"
                  item_type="own"
                  text="La-9"
                  intname="la-9"
                  type="aircraft"
                />
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
                <TechTreeItem
                  link="/Su-6_(AM-42)"
                  title="Su-6 (AM-42)"
                  item_type="own"
                  text="Su-6 (AM-42)"
                  intname="su-6_am42"
                  type="aircraft"
                />
                <Arrow type="small" />
                <TreeFolder name="IL-10" img="il-10_group">
                  <TechTreeItem
                    link="/IL-10"
                    title="IL-10"
                    item_type="own"
                    text="IL-10"
                    intname="il-10"
                    type="aircraft"
                  />
                  <Arrow type="small" />
                  <TechTreeItem
                    link="/IL-10_(1946)"
                    title="IL-10 (1946)"
                    item_type="own"
                    text="IL-10 (1946)"
                    intname="il-10_1946"
                    type="aircraft"
                  />
                </TreeFolder>
                <Arrow type="small" />
                <TechTreeItem
                  link="/Su-6_(M-71F)"
                  title="Su-6 (M-71F)"
                  item_type="own"
                  text="Su-6 (M-71F)"
                  intname="su-6_m71"
                  type="aircraft"
                />
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
                <TreeFolder name="Yer-2 (l)" img="er-2_ach30b_group">
                  <TechTreeItem
                    link="/Yer-2_(ACh-30B)_(e)"
                    title="Yer-2 (ACh-30B) (e)"
                    item_type="own"
                    text="Yer-2&nbsp;(ACh-30B) (e)"
                    intname="er-2_ach30b_early"
                    type="aircraft"
                  />
                  <Arrow type="small" />
                  <TechTreeItem
                    link="/Yer-2_(ACh-30B)_(l)"
                    title="Yer-2 (ACh-30B) (l)"
                    item_type="own"
                    text="Yer-2&nbsp;(ACh-30B) (l)"
                    intname="er-2_ach30b_late"
                    type="aircraft"
                  />
                </TreeFolder>
                <Arrow type="small" />
                <TreeFolder name="Tu-2" img="tu-2_group">
                  <TechTreeItem
                    link="/Tu-2S"
                    title="Tu-2S"
                    item_type="own"
                    text="Tu-2S"
                    intname="tu-2"
                    type="aircraft"
                  />
                  <Arrow type="small" />
                  <TechTreeItem
                    link="/Tu-2S-44"
                    title="Tu-2S-44"
                    item_type="own"
                    text="Tu-2S-44"
                    intname="tu-2_postwar"
                    type="aircraft"
                  />
                  <Arrow type="small" />
                  <TechTreeItem
                    link="/Tu-2S-59"
                    title="Tu-2S-59"
                    item_type="own"
                    text="Tu-2S-59"
                    intname="tu-2_postwar_late"
                    type="aircraft"
                  />
                </TreeFolder>
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
                <TechTreeItem
                  link="/Dolgushin%27s_La-7"
                  title="Dolgushin's La-7"
                  item_type="prem"
                  text="Dolgushin's La-7"
                  intname="la-7_dolgushin"
                  type="aircraft"
                />
                <EmptyDiv />
                <TechTreeItem
                  link="/Su-6"
                  title="Su-6"
                  item_type="prem"
                  text="Su-6"
                  intname="su_6_single"
                  type="aircraft"
                />
                <EmptyDiv />
                <TechTreeItem
                  link="/Be-6"
                  title="Be-6"
                  item_type="prem"
                  text="Be-6"
                  intname="be_6"
                  type="aircraft"
                />
                <EmptyDiv />
                <TechTreeItem
                  link="/Su-8"
                  title="Su-8"
                  item_type="prem"
                  text="Su-8"
                  intname="su-8"
                  type="aircraft"
                />
                <EmptyDiv />
                <TechTreeItem
                  link="/La-11"
                  title="La-11"
                  item_type="prem"
                  text="La-11"
                  intname="la-11"
                  type="aircraft"
                />
                <EmptyDiv />
                <TechTreeItem
                  link="/Yak-3_(VK-107)"
                  title="Yak-3 (VK-107)"
                  item_type="prem"
                  text="Yak-3 (VK-107)"
                  intname="yak-3_vk107"
                  type="aircraft"
                />
                <EmptyDiv />
              </td>
              <td>
                <TechTreeItem
                  link="/P-63C-5_(USSR)"
                  title="P-63C-5 (USSR)"
                  item_type="prem"
                  text="▂P-63C-5"
                  intname="p-63c-5_ussr"
                  type="aircraft"
                />
                <EmptyDiv />
                <TechTreeItem
                  link="/P-63A-10_(USSR)"
                  title="P-63A-10 (USSR)"
                  item_type="prem"
                  text="▂P-63A-10"
                  intname="p-63a-10_ussr"
                  type="aircraft"
                />
                <EmptyDiv />
                <TechTreeItem
                  link="/Fw_190_D-9_(USSR)"
                  title="Fw 190 D-9 (USSR)"
                  item_type="prem"
                  text="▂Fw&nbsp;190&nbsp;D-9"
                  intname="fw-190d-9_ussr"
                  type="aircraft"
                />
                <EmptyDiv />
                <TechTreeItem
                  link="/Spitfire_Mk_IXc_(USSR)"
                  title="Spitfire Mk IXc (USSR)"
                  item_type="prem"
                  text="▂Spitfire&nbsp;Mk IXc"
                  intname="spitfire_ix_ussr"
                  type="aircraft"
                />
                <EmptyDiv />
                <TechTreeItem
                  link="/Tu-1"
                  title="Tu-1"
                  item_type="prem"
                  text="Tu-1"
                  intname="tu-1"
                  type="aircraft"
                />
                <EmptyDiv />
              </td>
            </tr>
            <tr>
              <Rank rank="V" />
              <td>
                <TreeFolder name="Yak-15/17" img="yak-15_group">
                  <TechTreeItem
                    link="/Yak-15P"
                    title="Yak-15P"
                    item_type="own"
                    text="Yak-15P"
                    intname="yak-15_early"
                    type="aircraft"
                  />
                  <Arrow type="small" />
                  <TechTreeItem
                    link="/Yak-15"
                    title="Yak-15"
                    item_type="own"
                    text="Yak-15"
                    intname="yak-15"
                    type="aircraft"
                  />
                  <Arrow type="small" />
                  <TechTreeItem
                    link="/Yak-17"
                    title="Yak-17"
                    item_type="own"
                    text="Yak-17"
                    intname="yak-17"
                    type="aircraft"
                  />
                </TreeFolder>
                <Arrow type="small" />
                <TechTreeItem
                  link="/Yak-23"
                  title="Yak-23"
                  item_type="own"
                  text="Yak-23"
                  intname="yak-23"
                  type="aircraft"
                />
                <Arrow type="small" />
                <TechTreeItem
                  link="/Yak-30D"
                  title="Yak-30D"
                  item_type="own"
                  text="Yak-30D"
                  intname="yak-30d"
                  type="aircraft"
                />
                <Arrow type="small" />
              </td>
              <td>
                <TreeFolder name="MiG-9" img="mig-9_group">
                  <TechTreeItem
                    link="/MiG-9"
                    title="MiG-9"
                    item_type="own"
                    text="MiG-9"
                    intname="mig-9"
                    type="aircraft"
                  />
                  <Arrow type="small" />
                  <TechTreeItem
                    link="/MiG-9_(l)"
                    title="MiG-9 (l)"
                    item_type="own"
                    text="MiG-9&nbsp;(l)"
                    intname="mig-9_ussr"
                    type="aircraft"
                  />
                </TreeFolder>
                <Arrow type="small" />
                <TreeFolder name="MiG-15" img="mig-15_group">
                  <TechTreeItem
                    link="/MiG-15"
                    title="MiG-15"
                    item_type="own"
                    text="MiG-15"
                    intname="mig-15_ns23"
                    type="aircraft"
                  />
                  <Arrow type="small" />
                  <TechTreeItem
                    link="/MiG-15bis"
                    title="MiG-15bis"
                    item_type="own"
                    text="MiG-15bis"
                    intname="mig-15"
                    type="aircraft"
                  />
                </TreeFolder>
                <Arrow type="small" />
                <TechTreeItem
                  link="/MiG-17"
                  title="MiG-17"
                  item_type="own"
                  text="MiG-17"
                  intname="mig-17"
                  type="aircraft"
                />
                <Arrow type="small" />
              </td>
              <td>
                <TechTreeItem
                  link="/Su-9"
                  title="Su-9"
                  item_type="own"
                  text="Su-9"
                  intname="su-9"
                  type="aircraft"
                />
                <Arrow type="small" />
                <TechTreeItem
                  link="/La-200"
                  title="La-200"
                  item_type="own"
                  text="La-200"
                  intname="la_200_toriy"
                  type="aircraft"
                />
                <Arrow type="small" />
                <TechTreeItem
                  link="/La-15"
                  title="La-15"
                  item_type="own"
                  text="La-15"
                  intname="la-15"
                  type="aircraft"
                />
                <Arrow type="small" />
              </td>
              <td>
                <TechTreeItem
                  link="/IL-28"
                  title="IL-28"
                  item_type="own"
                  text="IL-28"
                  intname="il_28"
                  type="aircraft"
                />
                <Arrow type="small" />
                <TechTreeItem
                  link="/IL-28Sh"
                  title="IL-28Sh"
                  item_type="own"
                  text="IL-28Sh"
                  intname="il_28sh"
                  type="aircraft"
                />
              </td>
              <td>
                <TechTreeItem
                  link="/Tu-4"
                  title="Tu-4"
                  item_type="own"
                  text="Tu-4"
                  intname="tu_4"
                  type="aircraft"
                />
                <Arrow type="small" />
                <TechTreeItem
                  link="/Tu-14T"
                  title="Tu-14T"
                  item_type="own"
                  text="Tu-14T"
                  intname="tu_14t"
                  type="aircraft"
                />
                <div className="tree-arrow">
                  <img src="/images/Arrow_tail.png" alt="Arrow_tail.png" />
                  <br />
                  <img src="/images/Arrow_center.png" alt="Arrow_center.png" />
                  <br />
                  <img src="/images/Arrow_head.png" alt="Arrow_head.png" />
                </div>
              </td>
              <td style={{ borderLeft: "solid 1px #cccccc" }}>
                <TechTreeItem
                  link="/Su-11"
                  title="Su-11"
                  item_type="prem"
                  text="Su-11"
                  intname="su-11"
                  type="aircraft"
                />
                <EmptyDiv />
                <TechTreeItem
                  link="/MiG-15bis_ISH"
                  title="MiG-15bis ISH"
                  item_type="prem"
                  text="MiG-15bis ISH"
                  intname="mig-15bis_ish"
                  type="aircraft"
                />
                <EmptyDiv />
                <TechTreeItem
                  link="/MiG-17AS"
                  title="MiG-17AS"
                  item_type="prem"
                  text="MiG-17AS"
                  intname="mig-17_cuba"
                  type="aircraft"
                />
                <EmptyDiv />
              </td>
              <td>
                <TechTreeItem
                  link="/BI"
                  title="BI"
                  item_type="own"
                  text="BI"
                  intname="bi"
                  type="aircraft"
                />
                <EmptyDiv />
                <TechTreeItem
                  link="/La-174"
                  title="La-174"
                  item_type="own"
                  text="La-174"
                  intname="la_174"
                  type="aircraft"
                />
                <EmptyDiv />
              </td>
            </tr>
            <tr>
              <Rank rank="VI" />
              <td>
                <TechTreeItem
                  link="/Yak-38M"
                  title="Yak-38M"
                  item_type="own"
                  text="Yak-38M"
                  intname="yak-38m"
                  type="aircraft"
                />
              </td>
              <td>
                <TechTreeItem
                  link="/MiG-19PT"
                  title="MiG-19PT"
                  item_type="own"
                  text="MiG-19PT"
                  intname="mig-19pt"
                  type="aircraft"
                />
                <Arrow type="small" />
                <TechTreeItem
                  link="/MiG-21F-13"
                  title="MiG-21F-13"
                  item_type="own"
                  text="MiG-21F-13"
                  intname="mig-21_f13"
                  type="aircraft"
                />
                <Arrow type="small" />
              </td>
              <td>
                <TechTreeItem
                  link="/Su-7B"
                  title="Su-7B"
                  item_type="own"
                  text="Su-7B"
                  intname="su-7b"
                  type="aircraft"
                />
                <Arrow type="small" />
                <TechTreeItem
                  link="/Su-7BKL"
                  title="Su-7BKL"
                  item_type="own"
                  text="Su-7BKL"
                  intname="su-7bkl"
                  type="aircraft"
                />
                <Arrow type="small" />
              </td>
              <td />
              <td>
                <TechTreeItem
                  link="/Yak-28B"
                  title="Yak-28B"
                  item_type="own"
                  text="Yak-28B"
                  intname="yak-28b"
                  type="aircraft"
                />
                <div className="tree-arrow">
                  <img src="/images/Arrow_tail.png" alt="Arrow_tail.png" />
                  <br />
                  <img src="/images/Arrow_center.png" alt="Arrow_center.png" />
                  <br />
                  <img src="/images/Arrow_head.png" alt="Arrow_head.png" />
                </div>
              </td>
              <td style={{ borderLeft: "solid 1px #cccccc" }}>
                <TechTreeItem
                  link="/Yak-38"
                  title="Yak-38"
                  item_type="prem"
                  text="Yak-38"
                  intname="yak-38"
                  type="aircraft"
                />
                <EmptyDiv />
                <TechTreeItem
                  link="/Su-7BMK"
                  title="Su-7BMK"
                  item_type="prem"
                  text="Su-7BMK"
                  intname="su-7bmk"
                  type="aircraft"
                />
                <EmptyDiv />
              </td>
              <td>
                <TechTreeItem
                  link="/MiG-21PFM"
                  title="MiG-21PFM"
                  item_type="own"
                  text="MiG-21PFM"
                  intname="mig-21_pfm"
                  type="aircraft"
                />
                <EmptyDiv />
                <TechTreeItem
                  link="/MiG-21S_(R-13-300)"
                  title="MiG-21S (R-13-300)"
                  item_type="prem"
                  text="MiG-21S (R-13-300)"
                  intname="mig-21_s"
                  type="aircraft"
                />
              </td>
            </tr>
            <tr>
              <Rank rank="VII" />
              <td>
                <EmptyDiv />
              </td>
              <td>
                <TreeFolder name="MiG-21" img="mig-21_group">
                  <TechTreeItem
                    link="/MiG-21SMT"
                    title="MiG-21SMT"
                    item_type="own"
                    text="MiG-21SMT"
                    intname="mig-21_smt"
                    type="aircraft"
                  />
                  <Arrow type="small" />
                  <TechTreeItem
                    link="/MiG-21bis"
                    title="MiG-21bis"
                    item_type="own"
                    text="MiG-21bis"
                    intname="mig-21_bis"
                    type="aircraft"
                  />
                </TreeFolder>
                <Arrow type="small" />
                <TechTreeItem
                  link="/MiG-23M"
                  title="MiG-23M"
                  item_type="own"
                  text="MiG-23M"
                  intname="mig_23m"
                  type="aircraft"
                />
                <Arrow type="small" />
                <TechTreeItem
                  link="/MiG-23MLD"
                  title="MiG-23MLD"
                  item_type="own"
                  text="MiG-23MLD"
                  intname="mig_23mld"
                  type="aircraft"
                />
                <EmptyDiv />
              </td>
              <td>
                <TechTreeItem
                  link="/Su-17M2"
                  title="Su-17M2"
                  item_type="own"
                  text="Su-17M2"
                  intname="su_17m2"
                  type="aircraft"
                />
                <Arrow type="small" />
                <TechTreeItem
                  link="/Su-17M4"
                  title="Su-17M4"
                  item_type="own"
                  text="Su-17M4"
                  intname="su_17m4"
                  type="aircraft"
                />
                <EmptyDiv />
              </td>
              <td>
                <EmptyDiv />
              </td>
              <td>
                <TechTreeItem
                  link="/MiG-27M"
                  title="MiG-27M"
                  item_type="own"
                  text="MiG-27M"
                  intname="mig_27m"
                  type="aircraft"
                />
                <Arrow type="small" />
                <TechTreeItem
                  link="/MiG-27K"
                  title="MiG-27K"
                  item_type="own"
                  text="MiG-27K"
                  intname="mig_27k"
                  type="aircraft"
                />
                <EmptyDiv />
              </td>
              <td style={{ borderLeft: "solid 1px #cccccc" }}>
                <TechTreeItem
                  link="/Su-22M3"
                  title="Su-22M3"
                  item_type="squad"
                  text="Su-22M3"
                  intname="su_22m3"
                  type="aircraft"
                />
                <EmptyDiv />
              </td>
              <td>
                <EmptyDiv />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <MediaHead />
      <div className="video_gallery">
        <a href="https://yewtu.be/fKrdTWqmgAY">
          <b>Yakovlev Aircraft</b> - <i>War Thunder Official Channel</i>
        </a>
        <a href="https://yewtu.be/a3V1Ss-sIOs">
          <b>USSR Air Forces Rank V - Tutorial and Guide</b> - <i>Jengar</i>
        </a>
        <a href="https://yewtu.be/NRis-UEnGjI">
          <b>USSR Air Forces Rank IV - Tutorial and Guide</b> - <i>Jengar</i>
        </a>
        <a href="https://yewtu.be/BxECg8eQaQY">
          <b>USSR Air Forces Rank III - Tutorial and Guide</b> - <i>Jengar</i>
        </a>
        <a href="https://yewtu.be/IFPHS0Ak4wU">
          <b>USSR Air Forces Rank II - Tutorial and Guide</b> - <i>Jengar</i>
        </a>
        <a href="https://yewtu.be/p1PmpdL6XWU">
          <b>USSR Air Forces Rank I - Tutorial and Guide</b> - <i>Jengar</i>
        </a>
        <a href="https://yewtu.be/9-X9YgVk1G4">
          <b>MiG Alert</b> - <i>War Thunder Official Channel</i>
        </a>
        <a href="https://yewtu.be/i_s87Tc_Ycs">
          <b>Climbing the ranks with USSR aircraft</b> - <i>War Thunder Official Channel</i>
        </a>
      </div>
    </div>
  );
}
