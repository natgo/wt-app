import { Arrow, EmptyDiv, MediaHead, Rank, Research, TechTreeItem, TreeFolder } from "../TechTree";

export function ChinaAircraft() {
  return (
    <div className="mw-parser-output">
      <div className="tree">
        <table rules="rows" width="100%">
          <tbody>
            <Research research={4} premium={2} />
            <tr>
              <Rank rank="I" />
              <td>
                <TechTreeItem
                  link="/Gladiator_Mk_I_(China)"
                  title="Gladiator Mk I (China)"
                  item_type="own"
                  text="␗Gladiator&nbsp;Mk&nbsp;I"
                  intname="gladiator_mk1_china"
                  type="aircraft"
                />
                <Arrow type="small" />
                <TechTreeItem
                  link="/CW-21"
                  title="CW-21"
                  item_type="own"
                  text="CW-21"
                  intname="cw_21"
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
              <td>
                <TreeFolder name="I-15" img="i-15_china_group">
                  <TechTreeItem
                    link="/I-15bis_(China)"
                    title="I-15bis (China)"
                    item_type="own"
                    text="␗I-15bis"
                    intname="i-15bis_china"
                    type="aircraft"
                  />
                  <Arrow type="small" />
                  <TechTreeItem
                    link="/I-153_M-62_(China)"
                    title="I-153 M-62 (China)"
                    item_type="own"
                    text="␗I-153&nbsp;M-62"
                    intname="i-153_m62_china"
                    type="aircraft"
                  />
                </TreeFolder>
                <Arrow type="small" />
                <TreeFolder name="I-16" img="i-16_china_group">
                  <TechTreeItem
                    link="/I-16_Chung_28_(China)"
                    title="I-16 Chung 28 (China)"
                    item_type="own"
                    text="␗I-16&nbsp;Chung 28"
                    intname="i-16_chung_28"
                    type="aircraft"
                  />
                  <Arrow type="small" />
                  <TechTreeItem
                    link="/I-16_type_5_(China)"
                    title="I-16 type 5 (China)"
                    item_type="own"
                    text="␗I-16&nbsp;type&nbsp;5"
                    intname="i-16_type5_1935_china"
                    type="aircraft"
                  />
                  <Arrow type="small" />
                  <TechTreeItem
                    link="/I-16_type_10_(China)"
                    title="I-16 type 10 (China)"
                    item_type="own"
                    text="␗I-16&nbsp;type&nbsp;10"
                    intname="i-16_type10_china"
                    type="aircraft"
                  />
                </TreeFolder>
                <Arrow type="small" />
                <TechTreeItem
                  link="/Ki-27_otsu_(China)"
                  title="Ki-27 otsu (China)"
                  item_type="own"
                  text="␗Ki-27 otsu"
                  intname="ki-27_otsu_china"
                  type="aircraft"
                />
                <Arrow type="small" />
              </td>
              <td>
                <TechTreeItem
                  link="/Hs_123_A-1_(China)"
                  title="Hs 123 A-1 (China)"
                  item_type="own"
                  text="␗Hs 123 A-1"
                  intname="hs-123a-1_china"
                  type="aircraft"
                />
                <Arrow type="small" />
                <TechTreeItem
                  link="/V-11"
                  title="V-11"
                  item_type="own"
                  text="V-11"
                  intname="v_11g"
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
              <td>
                <TechTreeItem
                  link="/Martin_139WC"
                  title="Martin 139WC"
                  item_type="own"
                  text="Martin 139WC"
                  intname="martin_139wc"
                  type="aircraft"
                />
                <Arrow type="small" />
                <TechTreeItem
                  link="/A-29"
                  title="A-29"
                  item_type="own"
                  text="A-29"
                  intname="a_29_hudson"
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
                  link="/Hawk_III"
                  title="Hawk III"
                  item_type="prem"
                  text="Hawk III"
                  intname="hawk_iii"
                  type="aircraft"
                />
                <EmptyDiv />
                <TechTreeItem
                  link="/D.510C"
                  title="D.510C"
                  item_type="prem"
                  text="D.510C"
                  intname="d_510c"
                  type="aircraft"
                />
                <EmptyDiv />
              </td>
              <td />
            </tr>
            <tr>
              <Rank rank="II" />
              <td>
                <TechTreeItem
                  link="/P-66"
                  title="P-66"
                  item_type="own"
                  text="P-66"
                  intname="p-66"
                  type="aircraft"
                />
                <Arrow type="small" />
                <TechTreeItem
                  link="/P-40E-1_(China)"
                  title="P-40E-1 (China)"
                  item_type="own"
                  text="␗P-40E-1"
                  intname="p-40e_china"
                  type="aircraft"
                />
                <Arrow type="small" />
                <TechTreeItem
                  link="/P-43A-1_(China)"
                  title="P-43A-1 (China)"
                  item_type="own"
                  text="␗P-43A-1"
                  intname="p-43a-1_china"
                  type="aircraft"
                />
                <Arrow type="small" />
              </td>
              <td>
                <TechTreeItem
                  link="/Ki-43-III_ko_(China)"
                  title="Ki-43-III ko (China)"
                  item_type="own"
                  text="␗Ki-43-III ko"
                  intname="ki_43_3_ko"
                  type="aircraft"
                />
                <Arrow type="small" />
                <TechTreeItem
                  link="/Ki-44-II_hei_(China)"
                  title="Ki-44-II hei (China)"
                  item_type="own"
                  text="␗Ki-44-II hei"
                  intname="ki_44_2_hei_china"
                  type="aircraft"
                />
                <Arrow type="small" />
                <TechTreeItem
                  link="/Ki-61-I_otsu_(China)"
                  title="Ki-61-I otsu (China)"
                  item_type="own"
                  text="␗Ki-61-I otsu"
                  intname="ki_61_1a_otsu_china"
                  type="aircraft"
                />
                <Arrow type="small" />
              </td>
              <td>
                <TechTreeItem
                  link="/V-12D"
                  title="V-12D"
                  item_type="own"
                  text="V-12D"
                  intname="v_12d"
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
                  link="/SB_2M-103U_(China)"
                  title="SB 2M-103U (China)"
                  item_type="own"
                  text="␗SB&nbsp;2M-103U"
                  intname="sb_2m_103u_china"
                  type="aircraft"
                />
                <Arrow type="small" />
                <TechTreeItem
                  link="/DB-3A_(China)"
                  title="DB-3A (China)"
                  item_type="own"
                  text="␗DB-3A"
                  intname="db_3a_china"
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
                  link="/H-81A-2"
                  title="H-81A-2"
                  item_type="prem"
                  text="H-81A-2"
                  intname="p-40c_china"
                  type="aircraft"
                />
                <EmptyDiv />
                <TechTreeItem
                  link="/Ki-45_hei/tei_(China)"
                  title="Ki-45 hei/tei (China)"
                  item_type="prem"
                  text="␗Ki-45&nbsp;hei/tei"
                  intname="ki-45_hei_tei_china"
                  type="aircraft"
                />
                <EmptyDiv />
              </td>
              <td />
            </tr>
            <tr>
              <Rank rank="III" />
              <td>
                <TechTreeItem
                  link="/P-47D-23-RA_(China)"
                  title="P-47D-23-RA (China)"
                  item_type="own"
                  text="␗P-47D-23-RA"
                  intname="p-47d_23_ra_china_rocaf"
                  type="aircraft"
                />
                <Arrow type="small" />
                <TechTreeItem
                  link="/P-47D-30_(China)"
                  title="P-47D-30 (China)"
                  item_type="own"
                  text="␗P-47D-30"
                  intname="p-47d_30_china"
                  type="aircraft"
                />
                <Arrow type="small" />
              </td>
              <td>
                <TechTreeItem
                  link="/I-16_type_17_(China)"
                  title="I-16 type 17 (China)"
                  item_type="own"
                  text="␗I-16&nbsp;type&nbsp;17"
                  intname="i-16_type17_china"
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
              <td>
                <TechTreeItem
                  link="/B-25J-30_(China)"
                  title="B-25J-30 (China)"
                  item_type="own"
                  text="␗B-25J-30"
                  intname="b_25j_30_china"
                  type="aircraft"
                />
                <Arrow type="small" />
                <TechTreeItem
                  link="/Mosquito_FB.Mk.26"
                  title="Mosquito FB.Mk.26"
                  item_type="own"
                  text="Mosquito&nbsp;FB.Mk.26"
                  intname="mosquito_fb_mk26_china"
                  type="aircraft"
                />
                <Arrow type="small" />
              </td>
              <td>
                <TechTreeItem
                  link="/P1Y1_mod._11_(China)"
                  title="P1Y1 mod. 11 (China)"
                  item_type="own"
                  text="␗P1Y1 mod. 11"
                  intname="p1y1_mod11_china"
                  type="aircraft"
                />
                <Arrow type="small" />
                <TechTreeItem
                  link="/PB4Y-2_(China)"
                  title="PB4Y-2 (China)"
                  item_type="own"
                  text="␗PB4Y-2"
                  intname="pb4y-2_china"
                  type="aircraft"
                />
                <Arrow type="small" />
              </td>
              <td style={{ borderLeft: "solid 1px #cccccc" }}>
                <TechTreeItem
                  link="/A6M2_(China)"
                  title="A6M2 (China)"
                  item_type="prem"
                  text="␗A6M2"
                  intname="a6m2_zero_china"
                  type="aircraft"
                />
                <EmptyDiv />
              </td>
              <td />
            </tr>
            <tr>
              <Rank rank="IV" />
              <td>
                <TechTreeItem
                  link="/P-51D-20_(China)"
                  title="P-51D-20 (China)"
                  item_type="own"
                  text="␗P-51D-20"
                  intname="p-51d-20_china"
                  type="aircraft"
                />
                <Arrow type="small" />
                <TechTreeItem
                  link="/P-38L-1_(China)"
                  title="P-38L-1 (China)"
                  item_type="own"
                  text="␗P-38L-1"
                  intname="p-38l_1_china_rocaf"
                  type="aircraft"
                />
                <Arrow type="small" />
                <TechTreeItem
                  link="/P-51K_(China)"
                  title="P-51K (China)"
                  item_type="own"
                  text="␗P-51K"
                  intname="p-51k"
                  type="aircraft"
                />
                <Arrow type="small" />
              </td>
              <td>
                <TechTreeItem
                  link="/La-11_(China)"
                  title="La-11 (China)"
                  item_type="own"
                  text="␗La-11"
                  intname="la-11_china"
                  type="aircraft"
                />
                <Arrow type="small" />
                <TechTreeItem
                  link="/La-9_(China)"
                  title="La-9 (China)"
                  item_type="own"
                  text="␗La-9"
                  intname="la-9_china"
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
              <td>
                <TechTreeItem
                  link="/IL-10_(1946)_(China)"
                  title="IL-10 (1946) (China)"
                  item_type="own"
                  text="␗IL-10 (1946)"
                  intname="il-10_1946_china"
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
                  link="/Tu-2S-44_(China)"
                  title="Tu-2S-44 (China)"
                  item_type="own"
                  text="␗Tu-2S-44"
                  intname="tu-2_postwar_china"
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
                  link="/Ki-84_ko_(China)"
                  title="Ki-84 ko (China)"
                  item_type="prem"
                  text="␗Ki-84 ko"
                  intname="ki_84_ko_china"
                  type="aircraft"
                />
                <EmptyDiv />
              </td>
              <td />
            </tr>
            <tr>
              <Rank rank="V" />
              <td>
                <TechTreeItem
                  link="/F-86F-30_(China)"
                  title="F-86F-30 (China)"
                  item_type="own"
                  text="␗F-86F-30"
                  intname="f-86f-30_china"
                  type="aircraft"
                />
                <Arrow type="small" />
                <TechTreeItem
                  link="/F-86F-40_(China)"
                  title="F-86F-40 (China)"
                  item_type="own"
                  text="␗F-86F-40"
                  intname="f-86f-40_china"
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
              <td>
                <TreeFolder name="MiG-9" img="mig-9_china_group">
                  <TechTreeItem
                    link="/MiG-9_(China)"
                    title="MiG-9 (China)"
                    item_type="own"
                    text="␗MiG-9"
                    intname="mig-9_china"
                    type="aircraft"
                  />
                  <Arrow type="small" />
                  <TechTreeItem
                    link="/MiG-9_(l)_(China)"
                    title="MiG-9 (l) (China)"
                    item_type="own"
                    text="␗MiG-9 (l)"
                    intname="mig-9_late_china"
                    type="aircraft"
                  />
                </TreeFolder>
                <Arrow type="small" />
                <TechTreeItem
                  link="/J-2"
                  title="J-2"
                  item_type="own"
                  text="J-2"
                  intname="mig-15bis_nr23_china"
                  type="aircraft"
                />
                <Arrow type="small" />
                <TechTreeItem
                  link="/J-4"
                  title="J-4"
                  item_type="own"
                  text="J-4"
                  intname="mig-17_china"
                  type="aircraft"
                />
                <Arrow type="small" />
              </td>
              <td>
                <TechTreeItem
                  link="/F-84G-21-RE_(China)"
                  title="F-84G-21-RE (China)"
                  item_type="own"
                  text="␗F-84G-21-RE"
                  intname="f-84g_china"
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
                  link="/Tu-4_(China)"
                  title="Tu-4 (China)"
                  item_type="own"
                  text="␗Tu-4"
                  intname="tu_4_china"
                  type="aircraft"
                />
                <Arrow type="small" />
                <TechTreeItem
                  link="/H-5"
                  title="H-5"
                  item_type="own"
                  text="H-5"
                  intname="il_28_china"
                  type="aircraft"
                />
              </td>
              <td style={{ borderLeft: "solid 1px #cccccc" }}>
                <TechTreeItem
                  link="/Shenyang_F-5"
                  title="Shenyang F-5"
                  item_type="prem"
                  text="Shenyang F-5"
                  intname="mig-17_f5"
                  type="aircraft"
                />
                <EmptyDiv />
              </td>
              <td />
            </tr>
            <tr>
              <Rank rank="VI" />
              <td>
                <TechTreeItem
                  link="/F-100A_(China)"
                  title="F-100A (China)"
                  item_type="own"
                  text="␗F-100A"
                  intname="f-100a_china"
                  type="aircraft"
                />
                <Arrow type="small" />
                <TechTreeItem
                  link="/F-104A_(China)"
                  title="F-104A (China)"
                  item_type="own"
                  text="␗F-104A"
                  intname="f-104a_china"
                  type="aircraft"
                />
                <Arrow type="small" />
              </td>
              <td>
                <TechTreeItem
                  link="/J-6A"
                  title="J-6A"
                  item_type="own"
                  text="J-6A"
                  intname="mig-19j_6a"
                  type="aircraft"
                />
                <Arrow type="small" />
                <TechTreeItem
                  link="/J-7II"
                  title="J-7II"
                  item_type="own"
                  text="J-7II"
                  intname="j_7_mk2"
                  type="aircraft"
                />
                <Arrow type="small" />
              </td>
              <td>
                <TechTreeItem
                  link="/Q-5_early"
                  title="Q-5 early"
                  item_type="own"
                  text="Q-5 early"
                  intname="q_5_early"
                  type="aircraft"
                />
                <Arrow type="small" />
                <TechTreeItem
                  link="/Q-5A"
                  title="Q-5A"
                  item_type="own"
                  text="Q-5A"
                  intname="q_5a"
                  type="aircraft"
                />
              </td>
              <td />
              <td style={{ borderLeft: "solid 1px #cccccc" }}>
                <TechTreeItem
                  link="/A-5C"
                  title="A-5C"
                  item_type="prem"
                  text="A-5C"
                  intname="a_5c"
                  type="aircraft"
                />
              </td>
              <td />
            </tr>
            <tr>
              <Rank rank="VII" />
              <td>
                <TechTreeItem
                  link="/F-104G_(China)"
                  title="F-104G (China)"
                  item_type="own"
                  text="␗F-104G"
                  intname="f-104g_china"
                  type="aircraft"
                />
                <Arrow type="small" />
                <TechTreeItem
                  link="/F-5A_(China)"
                  title="F-5A (China)"
                  item_type="own"
                  text="␗F-5A"
                  intname="f-5a_china"
                  type="aircraft"
                />
                <Arrow type="small" />
                <TechTreeItem
                  link="/F-5E_(China)"
                  title="F-5E (China)"
                  item_type="own"
                  text="␗F-5E"
                  intname="f-5e_aidc"
                  type="aircraft"
                />
                <EmptyDiv />
              </td>
              <td>
                <TechTreeItem
                  link="/J-7E"
                  title="J-7E"
                  item_type="own"
                  text="J-7E"
                  intname="j_7e"
                  type="aircraft"
                />
                <Arrow type="small" />
                <TechTreeItem
                  link="/J-8B"
                  title="J-8B"
                  item_type="own"
                  text="J-8B"
                  intname="j_8b"
                  type="aircraft"
                />
                <EmptyDiv />
              </td>
              <td>
                <EmptyDiv />
              </td>
              <td>
                <EmptyDiv />
              </td>
              <td style={{ borderLeft: "solid 1px #cccccc" }}>
                <EmptyDiv />
              </td>
              <td>
                <EmptyDiv />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
