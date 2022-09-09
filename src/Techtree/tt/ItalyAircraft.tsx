import { Arrow } from "../Arrow";
import { EmptyDiv } from "../EmptyDiv";
import { MediaHead } from "../MediaHead";
import { Rank } from "../Rank";
import { Research } from "../Research";
import { TechTreeItem } from "../TechTreeItem";
import { TreeFolder } from "../TreeFolder";

export function ItalyAircraft() {
  return (
    <div className="mw-parser-output">
      <div className="tree">
        <table rules="rows" width="100%">
          <tbody>
            <Research research={4} premium={2} />
            <tr>
              <Rank rank="I" />
              <td>
                <EmptyDiv />
              </td>
              <td>
                <TreeFolder name="CR.32" img="cr_32_group">
                  <TechTreeItem
                    link="/CR.32"
                    title="CR.32"
                    item_type="own"
                    text="CR.32"
                    intname="cr_32"
                    type="aircraft"
                  />
                  <Arrow type="small" />
                  <TechTreeItem
                    link="/CR.32_quater"
                    title="CR.32 quater"
                    item_type="own"
                    text="CR.32 quater"
                    intname="cr_32_quater"
                    type="aircraft"
                  />
                </TreeFolder>
                <Arrow type="small" />
                <TechTreeItem
                  link="/CR.42"
                  title="CR.42"
                  item_type="own"
                  text="CR.42"
                  intname="fiat_cr42_italy"
                  type="aircraft"
                />
                <Arrow type="small" />
                <TreeFolder name="G.50" img="fiat_g50_italy_group">
                  <TechTreeItem
                    link="/G.50_serie_2"
                    title="G.50 serie 2"
                    item_type="own"
                    text="G.50 serie 2"
                    intname="fiat_g50_seria2_italy"
                    type="aircraft"
                  />
                  <Arrow type="small" />
                  <TechTreeItem
                    link="/G.50_AS_serie_7"
                    title="G.50 AS serie 7"
                    item_type="own"
                    text="G.50 AS serie 7"
                    intname="fiat_g50_seria7as_italy"
                    type="aircraft"
                  />
                </TreeFolder>
                <Arrow type="small" />
              </td>
              <td>
                <TechTreeItem
                  link="/Ba.65_(K.14)_L"
                  title="Ba.65 (K.14) L"
                  item_type="own"
                  text="Ba.65 (K.14) L"
                  intname="ba_65_k14_l"
                  type="aircraft"
                />
                <Arrow type="small" />
                <TechTreeItem
                  link="/Ju_87_R-2_(Italy)"
                  title="Ju 87 R-2 (Italy)"
                  item_type="own"
                  text="▄Ju 87 R-2"
                  intname="ju-87r-2_italy"
                  type="aircraft"
                />
                <Arrow type="small" />
                <TechTreeItem
                  link="/Breda_88_(P.XI)"
                  title="Breda 88 (P.XI)"
                  item_type="own"
                  text="Breda 88 (P.XI)"
                  intname="breda_88"
                  type="aircraft"
                />
                <Arrow type="small" />
              </td>
              <td>
                <TechTreeItem
                  link="/S.81"
                  title="S.81"
                  item_type="own"
                  text="S.81"
                  intname="s_81_ar125"
                  type="aircraft"
                />
                <Arrow type="small" />
                <TechTreeItem
                  link="/B.R.20DR"
                  title="B.R.20DR"
                  item_type="own"
                  text="B.R.20DR"
                  intname="br_20_dr"
                  type="aircraft"
                />
                <Arrow type="small" />
                <TechTreeItem
                  link="/B.R.20M_M1"
                  title="B.R.20M M1"
                  item_type="own"
                  text="B.R.20M M1"
                  intname="br_20m_m1"
                  type="aircraft"
                />
                <Arrow type="small" />
              </td>
              <td style={{ borderLeft: "solid 1px #cccccc" }}>
                <TechTreeItem
                  link="/Marcolin%27s_C.R.42_CN"
                  title="Marcolin's C.R.42 CN"
                  item_type="prem"
                  text="Marcolin's C.R.42 CN"
                  intname="fiat_cr42_marcolin_italy"
                  type="aircraft"
                />
                <EmptyDiv />
                <TechTreeItem
                  link="/CR.32_bis"
                  title="CR.32 bis"
                  item_type="prem"
                  text="CR.32 bis"
                  intname="cr_32_bis"
                  type="aircraft"
                />
                <EmptyDiv />
              </td>
              <td>
                <TechTreeItem
                  link="/He_112_B-1/U2"
                  title="He 112 B-1/U2"
                  item_type="prem"
                  text="He&nbsp;112&nbsp;B-1/U2"
                  intname="he_112b_1_italy"
                  type="aircraft"
                />
                <EmptyDiv />
              </td>
            </tr>
            <tr>
              <Rank rank="II" />
              <td>
                <TreeFolder name="Re.2000" img="re_2000_group">
                  <TechTreeItem
                    link="/Re.2000_serie_1"
                    title="Re.2000 serie 1"
                    item_type="own"
                    text="Re.2000 serie 1"
                    intname="re_2000_int"
                    type="aircraft"
                  />
                  <Arrow type="small" />
                  <TechTreeItem
                    link="/Re.2000_G.A."
                    title="Re.2000 G.A."
                    item_type="own"
                    text="Re.2000 G.A."
                    intname="re_2000_ga"
                    type="aircraft"
                  />
                </TreeFolder>
                <Arrow type="small" />
                <TechTreeItem
                  link="/Re.2002_Early"
                  title="Re.2002 Early"
                  item_type="own"
                  text="Re.2002 Early"
                  intname="re_2002_early"
                  type="aircraft"
                />
                <Arrow type="small" />
                <TreeFolder name="Re.2001" img="re_2001_group">
                  <TechTreeItem
                    link="/Re.2001_serie_1"
                    title="Re.2001 serie 1"
                    item_type="own"
                    text="Re.2001 serie 1"
                    intname="re_2001_serie1"
                    type="aircraft"
                  />
                  <Arrow type="small" />
                  <TechTreeItem
                    link="/Re.2001_CB"
                    title="Re.2001 CB"
                    item_type="own"
                    text="Re.2001 CB"
                    intname="re_2001_cb"
                    type="aircraft"
                  />
                </TreeFolder>
                <Arrow type="small" />
              </td>
              <td>
                <TreeFolder name="C. 200" img="mc_200_italy_group">
                  <TechTreeItem
                    link="/C._200_serie_3"
                    title="C. 200 serie 3"
                    item_type="own"
                    text="C. 200&nbsp;serie&nbsp;3"
                    intname="mc200_serie3_italy"
                    type="aircraft"
                  />
                  <Arrow type="small" />
                  <TechTreeItem
                    link="/C._200_serie_7"
                    title="C. 200 serie 7"
                    item_type="own"
                    text="C. 200&nbsp;serie 7"
                    intname="mc200_serie7_italy"
                    type="aircraft"
                  />
                </TreeFolder>
                <Arrow type="small" />
                <TechTreeItem
                  link="/C._202"
                  title="C. 202"
                  item_type="own"
                  text="C. 202"
                  intname="mc-202_italy"
                  type="aircraft"
                />
                <Arrow type="small" />
                <TechTreeItem
                  link="/C._202EC"
                  title="C. 202EC"
                  item_type="own"
                  text="C. 202EC"
                  intname="mc-202_ec"
                  type="aircraft"
                />
                <Arrow type="small" />
              </td>
              <td>
                <TechTreeItem
                  link="/F.C.20_Bis"
                  title="F.C.20 Bis"
                  item_type="own"
                  text="F.C.20 Bis"
                  intname="fc_20_bis"
                  type="aircraft"
                />
                <Arrow type="small" />
                <TechTreeItem
                  link="/Ju_87_D-3_(Italy)"
                  title="Ju 87 D-3 (Italy)"
                  item_type="own"
                  text="▄Ju&nbsp;87&nbsp;D-3"
                  intname="ju-87d-3_italy"
                  type="aircraft"
                />
                <Arrow type="small" />
                <TechTreeItem
                  link="/P.108A_serie_2"
                  title="P.108A serie 2"
                  item_type="own"
                  text="P.108A serie 2"
                  intname="p_108a_serie2"
                  type="aircraft"
                />
                <Arrow type="small" />
              </td>
              <td>
                <TreeFolder name="S.M.79 (e)" img="sm-79_italy_group">
                  <TechTreeItem
                    link="/S.M.79_serie_1"
                    title="S.M.79 serie 1"
                    item_type="own"
                    text="S.M.79 serie 1"
                    intname="sm_79_1936_italy"
                    type="aircraft"
                  />
                  <Arrow type="small" />
                  <TechTreeItem
                    link="/S.M.79_serie_8"
                    title="S.M.79 serie 8"
                    item_type="own"
                    text="S.M.79 serie 8"
                    intname="sm_79_1939_italy"
                    type="aircraft"
                  />
                </TreeFolder>
                <Arrow type="small" />
                <TreeFolder name="S.M.79 (l)" img="sm_79_1941_group">
                  <TechTreeItem
                    link="/S.M.79_AS"
                    title="S.M.79 AS"
                    item_type="own"
                    text="S.M.79&nbsp;AS"
                    intname="sm_79_1941_italy"
                    type="aircraft"
                  />
                  <Arrow type="small" />
                  <TechTreeItem
                    link="/S.M.79_bis/T.M"
                    title="S.M.79 bis/T.M"
                    item_type="own"
                    text="S.M.79 bis/T.M"
                    intname="sm_79_1943_italy"
                    type="aircraft"
                  />
                  <Arrow type="small" />
                  <TechTreeItem
                    link="/S.M.79_B"
                    title="S.M.79 B"
                    item_type="own"
                    text="S.M.79 B"
                    intname="sm_79_iar_italy"
                    type="aircraft"
                  />
                </TreeFolder>
                <div className="tree-arrow">
                  <img src="./images/Arrow_tail.png" alt="Arrow_tail.png" />
                  <br />
                  <img src="./images/Arrow_center.png" alt="Arrow_center.png" />
                  <br />
                  <img src="./images/Arrow_head.png" alt="Arrow_head.png" />
                </div>
              </td>
              <td style={{ borderLeft: "solid 1px #cccccc" }}>
                <TechTreeItem
                  link="/Re.2001_gruppo_22"
                  title="Re.2001 gruppo 22"
                  item_type="prem"
                  text="Re.2001 gruppo 22"
                  intname="re_2001_serie1_ep"
                  type="aircraft"
                />
                <EmptyDiv />
                <TechTreeItem
                  link="/IAR-81C"
                  title="IAR-81C"
                  item_type="prem"
                  text="IAR-81C"
                  intname="iar_81c"
                  type="aircraft"
                />
                <EmptyDiv />
              </td>
              <td>
                <TechTreeItem
                  link="/Ro.57_Quadriarma"
                  title="Ro.57 Quadriarma"
                  item_type="prem"
                  text="Ro.57 Quadriarma"
                  intname="ro_57_quadriarma"
                  type="aircraft"
                />
                <EmptyDiv />
                <TechTreeItem
                  link="/C._202D"
                  title="C. 202D"
                  item_type="prem"
                  text="C. 202D"
                  intname="mc-202_d"
                  type="aircraft"
                />
              </td>
            </tr>
            <tr>
              <Rank rank="III" />
              <td>
                <TechTreeItem
                  link="/Re.2001_CN"
                  title="Re.2001 CN"
                  item_type="own"
                  text="Re.2001 CN"
                  intname="re_2001_cn"
                  type="aircraft"
                />
                <div className="tree-arrow">
                  <img src="./images/Arrow_tail.png" alt="Arrow_tail.png" />
                  <br />
                  <img src="./images/Arrow_center.png" alt="Arrow_center.png" />
                  <br />
                  <img src="./images/Arrow_center_small.png" alt="Arrow_center_small.png" />
                  <br />
                  <img src="./images/Arrow_center.png" alt="Arrow_center.png" />
                  <br />
                  <img src="./images/Arrow_head.png" alt="Arrow_head.png" />
                </div>
              </td>
              <td>
                <TreeFolder name="C. 205" img="mc_205_group">
                  <TechTreeItem
                    link="/C._205_serie_1"
                    title="C. 205 serie 1"
                    item_type="own"
                    text="C. 205 serie 1"
                    intname="mc-205_serie1"
                    type="aircraft"
                  />
                  <Arrow type="small" />
                  <TechTreeItem
                    link="/C._205_serie_3"
                    title="C. 205 serie 3"
                    item_type="own"
                    text="C. 205 serie 3"
                    intname="mc-205_serie3"
                    type="aircraft"
                  />
                </TreeFolder>
                <Arrow type="small" />
                <TechTreeItem
                  link="/G.55_sottoserie_0"
                  title="G.55 sottoserie 0"
                  item_type="own"
                  text="G.55 sottoserie 0"
                  intname="g_55_serie1_ss0"
                  type="aircraft"
                />
                <Arrow type="small" />
                <TechTreeItem
                  link="/G.55_serie_1"
                  title="G.55 serie 1"
                  item_type="own"
                  text="G.55 serie 1"
                  intname="g_55_serie1"
                  type="aircraft"
                />
                <Arrow type="small" />
              </td>
              <td>
                <TechTreeItem
                  link="/SM.91"
                  title="SM.91"
                  item_type="own"
                  text="SM.91"
                  intname="sm_91"
                  type="aircraft"
                />
                <div className="tree-arrow">
                  <img src="./images/Arrow_tail.png" alt="Arrow_tail.png" />
                  <br />
                  <img src="./images/Arrow_center.png" alt="Arrow_center.png" />
                  <br />
                  <img src="./images/Arrow_center_small.png" alt="Arrow_center_small.png" />
                  <br />
                  <img src="./images/Arrow_center.png" alt="Arrow_center.png" />
                  <br />
                  <img src="./images/Arrow_head.png" alt="Arrow_head.png" />
                </div>
              </td>
              <td>
                <TechTreeItem
                  link="/Z.1007_bis_serie_3"
                  title="Z.1007 bis serie 3"
                  item_type="own"
                  text="Z.1007 bis serie 3"
                  intname="z_1007_bis_serie3"
                  type="aircraft"
                />
                <Arrow type="small" />
                <TechTreeItem
                  link="/Z.1007_bis_serie_5"
                  title="Z.1007 bis serie 5"
                  item_type="own"
                  text="Z.1007 bis serie 5"
                  intname="z_1007_bis_serie5"
                  type="aircraft"
                />
                <Arrow type="small" />
                <TechTreeItem
                  link="/P.108B_serie_1"
                  title="P.108B serie 1"
                  item_type="own"
                  text="P.108B serie 1"
                  intname="p_108b_serie1"
                  type="aircraft"
                />
                <Arrow type="small" />
              </td>
              <td style={{ borderLeft: "solid 1px #cccccc" }}>
                <TechTreeItem
                  link="/Spitfire_Mk_Vb/trop_(Italy)"
                  title="Spitfire Mk Vb/trop (Italy)"
                  item_type="prem"
                  text="▄Spitfire&nbsp;Mk&nbsp;Vb/trop"
                  intname="spitfire_mk5b_italy"
                  type="aircraft"
                />
                <EmptyDiv />
                <TechTreeItem
                  link="/Hs_129_B-2_(Romania)_(Italy)"
                  title="Hs 129 B-2 (Romania) (Italy)"
                  item_type="prem"
                  text="Hs 129 B-2 (Romania)"
                  intname="hs-129b-2_romania_italy"
                  type="aircraft"
                />
                <EmptyDiv />
                <TechTreeItem
                  link="/Bf_110_G-4_(Italy)"
                  title="Bf 110 G-4 (Italy)"
                  item_type="prem"
                  text="▄Bf 110 G-4"
                  intname="bf_110g_4_hungary"
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
                  link="/Re.2005_serie_0"
                  title="Re.2005 serie 0"
                  item_type="own"
                  text="Re.2005 serie 0"
                  intname="re_2005_serie0"
                  type="aircraft"
                />
                <div className="tree-arrow">
                  <img src="./images/Arrow_tail.png" alt="Arrow_tail.png" />
                  <br />
                  <img src="./images/Arrow_center.png" alt="Arrow_center.png" />
                  <br />
                  <img src="./images/Arrow_center_small.png" alt="Arrow_center_small.png" />
                  <br />
                  <img src="./images/Arrow_center.png" alt="Arrow_center.png" />
                  <br />
                  <img src="./images/Arrow_head.png" alt="Arrow_head.png" />
                </div>
              </td>
              <td>
                <TechTreeItem
                  link="/C._205N2"
                  title="C. 205N2"
                  item_type="own"
                  text="C. 205N2"
                  intname="mc-205_n2"
                  type="aircraft"
                />
                <Arrow type="small" />
                <TechTreeItem
                  link="/Bf_109_G-14/AS_(Italy)"
                  title="Bf 109 G-14/AS (Italy)"
                  item_type="own"
                  text="▄Bf&nbsp;109&nbsp;G-14/AS"
                  intname="bf-109g-14as"
                  type="aircraft"
                />
                <Arrow type="small" />
                <TechTreeItem
                  link="/G.56"
                  title="G.56"
                  item_type="own"
                  text="G.56"
                  intname="g_56"
                  type="aircraft"
                />
                <Arrow type="small" />
              </td>
              <td>
                <TechTreeItem
                  link="/SM.92"
                  title="SM.92"
                  item_type="own"
                  text="SM.92"
                  intname="sm_92"
                  type="aircraft"
                />
                <div className="tree-arrow">
                  <img src="./images/Arrow_tail.png" alt="Arrow_tail.png" />
                  <br />
                  <img src="./images/Arrow_center.png" alt="Arrow_center.png" />
                  <br />
                  <img src="./images/Arrow_center_small.png" alt="Arrow_center_small.png" />
                  <br />
                  <img src="./images/Arrow_center.png" alt="Arrow_center.png" />
                  <br />
                  <img src="./images/Arrow_head.png" alt="Arrow_head.png" />
                </div>
              </td>
              <td>
                <TechTreeItem
                  link="/P.108B_serie_2"
                  title="P.108B serie 2"
                  item_type="own"
                  text="P.108B serie 2"
                  intname="p_108b_serie2"
                  type="aircraft"
                />
              </td>
              <td style={{ borderLeft: "solid 1px #cccccc" }}>
                <TechTreeItem
                  link="/G.55S"
                  title="G.55S"
                  item_type="prem"
                  text="G.55S"
                  intname="g_55s"
                  type="aircraft"
                />
                <EmptyDiv />
                <TechTreeItem
                  link="/Bf_109_G-2_(Italy)"
                  title="Bf 109 G-2 (Italy)"
                  item_type="prem"
                  text="▄Bf&nbsp;109&nbsp;G-2"
                  intname="bf-109g-2_hungary"
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
                  link="/Vampire_FB_52A"
                  title="Vampire FB 52A"
                  item_type="own"
                  text="Vampire FB 52A"
                  intname="vampire_fb52a_italy"
                  type="aircraft"
                />
                <Arrow type="small" />
                <TechTreeItem
                  link="/CL-13_Mk.4"
                  title="CL-13 Mk.4"
                  item_type="own"
                  text="CL-13 Mk.4"
                  intname="f-86_cl_13_mk4_italy"
                  type="aircraft"
                />
                <Arrow type="small" />
              </td>
              <td>
                <TechTreeItem
                  link="/G.91_pre-serie"
                  title="G.91 pre-serie"
                  item_type="own"
                  text="G.91 pre-serie"
                  intname="fiat_g91_ps"
                  type="aircraft"
                />
                <Arrow type="small" />
                <TechTreeItem
                  link="/G.91_R/1"
                  title="G.91 R/1"
                  item_type="own"
                  text="G.91 R/1"
                  intname="fiat_g91_r1"
                  type="aircraft"
                />
                <Arrow type="small" />
              </td>
              <td>
                <TechTreeItem
                  link="/F-84G-21-RE_(Italy)"
                  title="F-84G-21-RE (Italy)"
                  item_type="own"
                  text="▄F-84G-21-RE"
                  intname="f-84g_italy"
                  type="aircraft"
                />
                <Arrow type="small" />
                <TechTreeItem
                  link="/F-84F_(Italy)"
                  title="F-84F (Italy)"
                  item_type="own"
                  text="▄F-84F"
                  intname="f-84f_italy"
                  type="aircraft"
                />
              </td>
              <td />
              <td style={{ borderLeft: "solid 1px #cccccc" }}>
                <TechTreeItem
                  link="/G.91_R/4"
                  title="G.91 R/4"
                  item_type="prem"
                  text="G.91 R/4"
                  intname="fiat_g91_r4"
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
                  link="/F-86K_(Italy)"
                  title="F-86K (Italy)"
                  item_type="own"
                  text="▄F-86K"
                  intname="f-86k_late_italy"
                  type="aircraft"
                />
                <Arrow type="small" />
                <TechTreeItem
                  link="/F-104G_(Italy)"
                  title="F-104G (Italy)"
                  item_type="own"
                  text="▄F-104G"
                  intname="f-104g_italy"
                  type="aircraft"
                />
                <Arrow type="small" />
                <TechTreeItem
                  link="/F-104S"
                  title="F-104S"
                  item_type="own"
                  text="F-104S"
                  intname="f-104s"
                  type="aircraft"
                />
                <Arrow type="small" />
              </td>
              <td>
                <TechTreeItem
                  link="/Sagittario_2"
                  title="Sagittario 2"
                  item_type="own"
                  text="Sagittario 2"
                  intname="sagittario_2"
                  type="aircraft"
                />
                <Arrow type="small" />
                <TechTreeItem
                  link="/G.91_YS"
                  title="G.91 YS"
                  item_type="own"
                  text="G.91 YS"
                  intname="fiat_g91_ys"
                  type="aircraft"
                />
              </td>
              <td />
              <td />
              <td style={{ borderLeft: "solid 1px #cccccc" }}>
                <TechTreeItem
                  link="/Ariete_(Fighter)"
                  title="Ariete (Fighter)"
                  item_type="prem"
                  text="Ariete"
                  intname="ariete"
                  type="aircraft"
                />
              </td>
              <td />
            </tr>
            <tr>
              <Rank rank="VII" />
              <td>
                <TechTreeItem
                  link="/F-104S.ASA"
                  title="F-104S.ASA"
                  item_type="own"
                  text="F-104S.ASA"
                  intname="f-104s_asa"
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
      <MediaHead />
      <div className="video_gallery">
        <a href="https://yewtu.be/K9nQGjk5g4M">
          <b>FIAT Aircraft</b> - <i>War Thunder Official Channel</i>
        </a>
        <a href="https://yewtu.be/wU4vKd4KGHw">
          <b>Climbing the ranks with Italian aircraft</b> - <i>War Thunder Official Channel</i>
        </a>
      </div>
    </div>
  );
}
