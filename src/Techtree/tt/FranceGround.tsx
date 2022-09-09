import { Arrow } from "../Arrow";
import { EmptyDiv } from "../EmptyDiv";
import { MediaHead } from "../MediaHead";
import { Rank } from "../Rank";
import { Research } from "../Research";
import { TechTreeItem } from "../TechTreeItem";
import { TreeFolder } from "../TreeFolder";

export function FranceGround() {
  return (
    <div className="mw-parser-output">
      <div className="tree">
        <table rules="rows" width="100%">
          <tbody>
            <Research research={5} premium={2} />
            <tr>
              <Rank rank="I" />
              <td>
                <TechTreeItem
                  link="/AMC.34_YR"
                  title="AMC.34 YR"
                  item_type="own"
                  text="AMC.34 YR"
                  intname="fr_amc_34"
                  type="ground"
                />
                <EmptyDiv />
                <TechTreeItem
                  link="/AMD.35"
                  title="AMD.35"
                  item_type="own"
                  text="AMD.35"
                  intname="fr_amd_35"
                  type="ground"
                />
                <Arrow type="small" />
                <TechTreeItem
                  link="/AMC.35_(ACG.1)"
                  title="AMC.35 (ACG.1)"
                  item_type="own"
                  text="AMC.35 (ACG.1)"
                  intname="fr_amc_35"
                  type="ground"
                />
                <Arrow type="small" />
              </td>
              <td>
                <TechTreeItem
                  link="/H.35"
                  title="H.35"
                  item_type="own"
                  text="H.35"
                  intname="fr_hotchkiss_h35"
                  type="ground"
                />
                <EmptyDiv />
                <TechTreeItem
                  link="/H.39"
                  title="H.39"
                  item_type="own"
                  text="H.39"
                  intname="fr_hotchkiss_h39"
                  type="ground"
                />
                <Arrow type="small" />
                <TechTreeItem
                  link="/S.35"
                  title="S.35"
                  item_type="own"
                  text="S.35"
                  intname="fr_somua_s35"
                  type="ground"
                />
                <Arrow type="small" />
              </td>
              <td>
                <TechTreeItem
                  link="/FCM.36"
                  title="FCM.36"
                  item_type="own"
                  text="FCM.36"
                  intname="fr_fcm_36"
                  type="ground"
                />
                <EmptyDiv />
                <TechTreeItem
                  link="/R.35_(SA38)"
                  title="R.35 (SA38)"
                  item_type="own"
                  text="R.35 (SA38)"
                  intname="fr_renault_r39"
                  type="ground"
                />
                <Arrow type="small" />
                <TechTreeItem
                  link="/D2"
                  title="D2"
                  item_type="own"
                  text="D2"
                  intname="fr_renault_d2"
                  type="ground"
                />
                <Arrow type="small" />
              </td>
              <td>
                <TechTreeItem
                  link="/P.7.T_AA"
                  title="P.7.T AA"
                  item_type="own"
                  text="P.7.T AA"
                  intname="fr_citroen_kegresse_p4t"
                  type="ground"
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
                  link="/AMR.35_ZT3"
                  title="AMR.35 ZT3"
                  item_type="own"
                  text="AMR.35 ZT3"
                  intname="fr_amr_35_zt3"
                  type="ground"
                />
                <Arrow type="small" />
                <TechTreeItem
                  link="/Lorraine_37L"
                  title="Lorraine 37L"
                  item_type="own"
                  text="Lorraine 37L"
                  intname="fr_lorraine_37l"
                  type="ground"
                />
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
                  link="/H.39_%22Cambronne%22"
                  title='H.39 "Cambronne"'
                  item_type="prem"
                  text='H.39 "Cambronne"'
                  intname="fr_hotchkiss_h39_cambronne"
                  type="ground"
                />
                <EmptyDiv />
              </td>
              <td>
                <EmptyDiv />
              </td>
            </tr>
            <tr>
              <Rank rank="II" />
              <td>
                <TechTreeItem
                  link="/Crusader_Mk.II_(France)"
                  title="Crusader Mk.II (France)"
                  item_type="own"
                  text="▄Crusader Mk.II"
                  intname="fr_crusader_mk_2"
                  type="ground"
                />
                <div className="tree-arrow">
                  <img src="./images/Arrow_tail.png" alt="Arrow_tail.png" />
                  <br />
                  <img src="./images/Arrow_center.png" alt="Arrow_center.png" />
                  <br />
                  <img src="./images/Arrow_head.png" alt="Arrow_head.png" />
                </div>
              </td>
              <td>
                <TechTreeItem
                  link="/M3A3_Stuart_(France)"
                  title="M3A3 Stuart (France)"
                  item_type="own"
                  text="▄M3A3 Stuart"
                  intname="fr_m3a3_stuart"
                  type="ground"
                />
                <Arrow type="small" />
                <TechTreeItem
                  link="/M4A1_(France)"
                  title="M4A1 (France)"
                  item_type="own"
                  text="▄M4A1"
                  intname="fr_m4a1_sherman"
                  type="ground"
                />
                <Arrow type="small" />
              </td>
              <td>
                <TechTreeItem
                  link="/B1_bis"
                  title="B1 bis"
                  item_type="own"
                  text="B1 bis"
                  intname="fr_b1_bis"
                  type="ground"
                />
                <Arrow type="small" />
                <TechTreeItem
                  link="/M4A3_(105)_(France)"
                  title="M4A3 (105) (France)"
                  item_type="own"
                  text="▄M4A3 (105)"
                  intname="fr_m4a3_105_sherman"
                  type="ground"
                />
                <Arrow type="small" />
              </td>
              <td>
                <TechTreeItem
                  link="/CCKW_353_AA"
                  title="CCKW 353 AA"
                  item_type="own"
                  text="CCKW 353 AA"
                  intname="fr_cckw_353_bofors"
                  type="ground"
                />
                <div className="tree-arrow">
                  <img src="./images/Arrow_tail.png" alt="Arrow_tail.png" />
                  <br />
                  <img src="./images/Arrow_center.png" alt="Arrow_center.png" />
                  <br />
                  <img src="./images/Arrow_head.png" alt="Arrow_head.png" />
                </div>
              </td>
              <td>
                <TechTreeItem
                  link="/SAu_40"
                  title="SAu 40"
                  item_type="own"
                  text="SAu 40"
                  intname="fr_somua_sau40"
                  type="ground"
                />
                <Arrow type="small" />
                <TechTreeItem
                  link="/M10_GMC_(France)"
                  title="M10 GMC (France)"
                  item_type="own"
                  text="▄M10 GMC"
                  intname="fr_m10"
                  type="ground"
                />
                <Arrow type="small" />
              </td>
              <td style={{ borderLeft: "solid 1px #cccccc" }}>
                <TechTreeItem
                  link="/B1_ter"
                  title="B1 ter"
                  item_type="prem"
                  text="B1 ter"
                  intname="fr_b1_ter"
                  type="ground"
                />
                <EmptyDiv />
                <TechTreeItem
                  link="/AMX-13-M24"
                  title="AMX-13-M24"
                  item_type="prem"
                  text="AMX-13-M24"
                  intname="fr_amx_13_chaffee"
                  type="ground"
                />
                <EmptyDiv />
              </td>
              <td>
                <TechTreeItem
                  link="/LVT-4/40"
                  title="LVT-4/40"
                  item_type="prem"
                  text="LVT-4/40"
                  intname="fr_lvt_bofors"
                  type="ground"
                />
                <EmptyDiv />
              </td>
            </tr>
            <tr>
              <Rank rank="III" />
              <td>
                <TechTreeItem
                  link="/AMX-13_(FL11)"
                  title="AMX-13 (FL11)"
                  item_type="own"
                  text="AMX-13 (FL11)"
                  intname="fr_amx_13_fl_11"
                  type="ground"
                />
                <Arrow type="small" />
                <TechTreeItem
                  link="/E.B.R._(1951)"
                  title="E.B.R. (1951)"
                  item_type="own"
                  text="E.B.R. (1951)"
                  intname="fr_panhard_ebr_1951"
                  type="ground"
                />
                <Arrow type="small" />
              </td>
              <td>
                <TechTreeItem
                  link="/M4A4_(France)"
                  title="M4A4 (France)"
                  item_type="own"
                  text="▄M4A4"
                  intname="fr_m4a4_sherman"
                  type="ground"
                />
                <Arrow type="small" />
                <TechTreeItem
                  link="/M4A4_(SA50)"
                  title="M4A4 (SA50)"
                  item_type="own"
                  text="M4A4 (SA50)"
                  intname="fr_m4a4_cn_75_50"
                  type="ground"
                />
                <Arrow type="small" />
              </td>
              <td>
                <TechTreeItem
                  link="/ARL-44_(ACL-1)"
                  title="ARL-44 (ACL-1)"
                  item_type="own"
                  text="ARL-44 (ACL-1)"
                  intname="fr_arl_44_acl1"
                  type="ground"
                />
                <Arrow type="small" />
                <TechTreeItem
                  link="/M4A3E2_(France)"
                  title="M4A3E2 (France)"
                  item_type="own"
                  text="▄M4A3E2"
                  intname="fr_m4a3e2_sherman_jumbo"
                  type="ground"
                />
                <Arrow type="small" />
              </td>
              <td>
                <div className="tree-arrow">
                  <img src="./images/Arrow_tail.png" alt="Arrow_tail.png" />
                  <br />
                  <img src="./images/Arrow_center.png" alt="Arrow_center.png" />
                  <br />
                  <img src="./images/Arrow_center.png" alt="Arrow_center.png" />
                  <br />
                  <img src="./images/Arrow_head.png" alt="Arrow_head.png" />
                </div>
              </td>
              <td>
                <TechTreeItem
                  link="/ARL-44"
                  title="ARL-44"
                  item_type="own"
                  text="ARL-44"
                  intname="fr_arl_44"
                  type="ground"
                />
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
                  link="/M4A1_(FL10)"
                  title="M4A1 (FL10)"
                  item_type="prem"
                  text="M4A1 (FL10)"
                  intname="fr_m4a1_sherman_fl_10"
                  type="ground"
                />
                <EmptyDiv />
              </td>
              <td>
                <TechTreeItem
                  link="/Lorraine_155_Mle.50"
                  title="Lorraine 155 Mle.50"
                  item_type="prem"
                  text="Lorraine 155 Mle.50"
                  intname="fr_lorraine_155"
                  type="ground"
                />
                <EmptyDiv />
                <TechTreeItem
                  link="/E.B.R._(1954)"
                  title="E.B.R. (1954)"
                  item_type="prem"
                  text="E.B.R. (1954)"
                  intname="fr_panhard_ebr_1954"
                  type="ground"
                />
                <EmptyDiv />
              </td>
            </tr>
            <tr>
              <Rank rank="IV" />
              <td>
                <TechTreeItem
                  link="/AMX-13"
                  title="AMX-13"
                  item_type="own"
                  text="AMX-13"
                  intname="fr_amx_13_75"
                  type="ground"
                />
                <Arrow type="small" />
                <TechTreeItem
                  link="/AML-90"
                  title="AML-90"
                  item_type="own"
                  text="AML-90"
                  intname="fr_aml_90"
                  type="ground"
                />
                <Arrow type="small" />
              </td>
              <td>
                <TechTreeItem
                  link="/Char_25t"
                  title="Char 25t"
                  item_type="own"
                  text="Char 25t"
                  intname="fr_bat_chat_25t"
                  type="ground"
                />
                <Arrow type="small" />
                <TechTreeItem
                  link="/Lorraine_40t"
                  title="Lorraine 40t"
                  item_type="own"
                  text="Lorraine 40t"
                  intname="fr_lorraine_40t"
                  type="ground"
                />
                <Arrow type="small" />
              </td>
              <td>
                <TechTreeItem
                  link="/AMX_M4"
                  title="AMX M4"
                  item_type="own"
                  text="AMX M4"
                  intname="fr_amx_m4"
                  type="ground"
                />
                <Arrow type="small" />
                <TechTreeItem
                  link="/AMX-50"
                  title="AMX-50"
                  item_type="own"
                  text="AMX-50"
                  intname="fr_amx_50"
                  type="ground"
                />
                <Arrow type="small" />
              </td>
              <td>
                <TechTreeItem
                  link="/AMX-13_DCA_40"
                  title="AMX-13 DCA 40"
                  item_type="own"
                  text="AMX-13 DCA 40"
                  intname="fr_amx_13_dca_40"
                  type="ground"
                />
                <div className="tree-arrow">
                  <img src="./images/Arrow_tail.png" alt="Arrow_tail.png" />
                  <br />
                  <img src="./images/Arrow_center.png" alt="Arrow_center.png" />
                  <br />
                  <img src="./images/Arrow_head.png" alt="Arrow_head.png" />
                </div>
              </td>
              <td>
                <TechTreeItem
                  link="/CA_Lorraine"
                  title="CA Lorraine"
                  item_type="own"
                  text="CA Lorraine"
                  intname="fr_lorraine_100"
                  type="ground"
                />
                <Arrow type="small" />
                <TechTreeItem
                  link="/ELC_bis"
                  title="ELC bis"
                  item_type="own"
                  text="ELC bis"
                  intname="fr_amx_elc_bis"
                  type="ground"
                />
                <Arrow type="small" />
              </td>
              <td style={{ borderLeft: "solid 1px #cccccc" }}>
                <TechTreeItem
                  link="/Panther_%22Dauphin%C3%A9%22"
                  title='Panther "Dauphiné"'
                  item_type="prem"
                  text='Panther "Dauphiné"'
                  intname="fr_pzkpfw_v_panther_dauphine"
                  type="ground"
                />
                <EmptyDiv />
                <TechTreeItem
                  link="/AMX-13_(SS.11)"
                  title="AMX-13 (SS.11)"
                  item_type="prem"
                  text="AMX-13 (SS.11)"
                  intname="fr_amx_13_75_ss11"
                  type="ground"
                />
                <EmptyDiv />
              </td>
              <td>
                <TechTreeItem
                  link="/E.B.R._(1963)"
                  title="E.B.R. (1963)"
                  item_type="prem"
                  text="E.B.R. (1963)"
                  intname="fr_panhard_ebr_1963"
                  type="ground"
                />
                <EmptyDiv />
                <TechTreeItem
                  link="/Somua_SM"
                  title="Somua SM"
                  item_type="prem"
                  text="Somua SM"
                  intname="fr_somua_sm"
                  type="ground"
                />
                <EmptyDiv />
              </td>
            </tr>
            <tr>
              <Rank rank="V" />
              <td>
                <TechTreeItem
                  link="/AMX-13-90"
                  title="AMX-13-90"
                  item_type="own"
                  text="AMX-13-90"
                  intname="fr_amx_13_90"
                  type="ground"
                />
                <Arrow type="small" />
              </td>
              <td>
                <TechTreeItem
                  link="/AMX-30_(1972)"
                  title="AMX-30 (1972)"
                  item_type="own"
                  text="AMX-30 (1972)"
                  intname="fr_amx_30_1972"
                  type="ground"
                />
                <Arrow type="small" />
              </td>
              <td>
                <TechTreeItem
                  link="/AMX-50_Surbaisse"
                  title="AMX-50 Surbaisse"
                  item_type="own"
                  text="AMX-50 Surbaissé"
                  intname="fr_amx_50_surbaisse"
                  type="ground"
                />
                <Arrow type="small" />
              </td>
              <td>
                <div className="tree-arrow">
                  <img src="./images/Arrow_center.png" alt="Arrow_center.png" />
                  <br />
                  <img src="./images/Arrow_head.png" alt="Arrow_head.png" />
                </div>
              </td>
              <td>
                <TechTreeItem
                  link="/AMX-50_Foch"
                  title="AMX-50 Foch"
                  item_type="own"
                  text="AMX-50 Foch"
                  intname="fr_amx_50_foch"
                  type="ground"
                />
                <Arrow type="small" />
              </td>
              <td style={{ borderLeft: "solid 1px #cccccc" }}>
                <TechTreeItem
                  link="/AMX-30"
                  title="AMX-30"
                  item_type="prem"
                  text="AMX-30"
                  intname="fr_amx_30"
                  type="ground"
                />
                <EmptyDiv />
              </td>
              <td>
                <TechTreeItem
                  link="/AMX-50_Surblinde"
                  title="AMX-50 Surblinde"
                  item_type="own"
                  text="AMX-50 Surblindé"
                  intname="fr_amx_50_surblinde"
                  type="ground"
                />
              </td>
            </tr>
            <tr>
              <Rank rank="VI" />
              <td>
                <TechTreeItem
                  link="/AMX-13_(HOT)"
                  title="AMX-13 (HOT)"
                  item_type="own"
                  text="AMX-13 (HOT)"
                  intname="fr_amx_13_hot"
                  type="ground"
                />
                <Arrow type="small" />
                <TechTreeItem
                  link="/MARS_15"
                  title="MARS 15"
                  item_type="own"
                  text="MARS 15"
                  intname="fr_mars_15"
                  type="ground"
                />
                <Arrow type="small" />
                <TechTreeItem
                  link="/MEPHISTO"
                  title="MEPHISTO"
                  item_type="own"
                  text="MEPHISTO"
                  intname="fr_vcac_mephisto"
                  type="ground"
                />
              </td>
              <td>
                <TechTreeItem
                  link="/AMX-30B2"
                  title="AMX-30B2"
                  item_type="own"
                  text="AMX-30B2"
                  intname="fr_amx_30_b2"
                  type="ground"
                />
                <Arrow type="small" />
                <TechTreeItem
                  link="/AMX-30B2_BRENUS"
                  title="AMX-30B2 BRENUS"
                  item_type="own"
                  text="AMX-30B2 BRENUS"
                  intname="fr_amx_30_b2_brenus"
                  type="ground"
                />
                <div className="tree-arrow">
                  <img src="./images/Arrow_tail.png" alt="Arrow_tail.png" />
                  <br />
                  <img src="./images/Arrow_center.png" alt="Arrow_center.png" />
                  <br />
                  <img src="./images/Arrow_head.png" alt="Arrow_head.png" />
                </div>
              </td>
              <td>
                <TechTreeItem
                  link="/AMX-32"
                  title="AMX-32"
                  item_type="own"
                  text="AMX-32"
                  intname="fr_amx_32"
                  type="ground"
                />
                <Arrow type="small" />
                <TechTreeItem
                  link="/AMX-40"
                  title="AMX-40"
                  item_type="own"
                  text="AMX-40"
                  intname="fr_amx_40"
                  type="ground"
                />
              </td>
              <td>
                <TechTreeItem
                  link="/AMX-30_DCA"
                  title="AMX-30 DCA"
                  item_type="own"
                  text="AMX-30 DCA"
                  intname="fr_amx_30_dca"
                  type="ground"
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
                  link="/AMX-10RC"
                  title="AMX-10RC"
                  item_type="own"
                  text="AMX-10RC"
                  intname="fr_amx_10rc"
                  type="ground"
                />
                <Arrow type="small" />
                <TechTreeItem
                  link="/AMX-30_ACRA"
                  title="AMX-30 ACRA"
                  item_type="own"
                  text="AMX-30 ACRA"
                  intname="fr_amx_30_acra"
                  type="ground"
                />
                <Arrow type="small" />
                <TechTreeItem
                  link="/SK-105A2"
                  title="SK-105A2"
                  item_type="own"
                  text="SK-105A2"
                  intname="fr_sk105_a2"
                  type="ground"
                />
              </td>
              <td style={{ borderLeft: "solid 1px #cccccc" }}>
                <TechTreeItem
                  link="/AMX-30_Super"
                  title="AMX-30 Super"
                  item_type="prem"
                  text="AMX-30 Super"
                  intname="fr_amx_30_super"
                  type="ground"
                />
              </td>
              <td />
            </tr>
            <tr>
              <Rank rank="VII" />
              <td>
                <EmptyDiv />
              </td>
              <td>
                <TechTreeItem
                  link="/Leclerc"
                  title="Leclerc"
                  item_type="own"
                  text="Leclerc"
                  intname="fr_leclerc_s1"
                  type="ground"
                />
                <Arrow type="small" />
                <TechTreeItem
                  link="/Leclerc_S2"
                  title="Leclerc S2"
                  item_type="own"
                  text="Leclerc S2"
                  intname="fr_leclerc_s2"
                  type="ground"
                />
                <Arrow type="small" />
                <TechTreeItem
                  link="/Leclerc_SXXI"
                  title="Leclerc SXXI"
                  item_type="own"
                  text="Leclerc SXXI"
                  intname="fr_leclerc_sxxi"
                  type="ground"
                />
                <EmptyDiv />
              </td>
              <td>
                <EmptyDiv />
              </td>
              <td>
                <TechTreeItem
                  link="/Roland_1"
                  title="Roland 1"
                  item_type="own"
                  text="Roland 1"
                  intname="fr_amx_30_roland"
                  type="ground"
                />
                <Arrow type="small" />
                <TechTreeItem
                  link="/ItO_90M_(France)"
                  title="ItO 90M (France)"
                  item_type="own"
                  text="▄ItO 90M"
                  intname="fr_crotale_ng"
                  type="ground"
                />
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
        <a href="https://yewtu.be/rg_wXlgm-ZM">
          <b>Climbing the ranks with French tanks</b> - <i>War Thunder Official Channel</i>
        </a>
        <div className="video">
          <div className="video_embed">
            <div className="embedvideo autoResize" style={{}}>
              <div className="embedvideowrap" style={{ width: 640 }}>
                <iframe
                  src="//yewtu.be/embed/Ue0YqmjtEPo?"
                  allowFullScreen={true}
                  width={640}
                  height={360}
                  frameBorder={0}
                />
              </div>
            </div>
          </div>
          <div className="video_desc">
            <b>Obtaining «secrit» documents in Saumur (How we prepared for the French)</b> -
            <i>War Thunder Official Channel</i>
          </div>
        </div>
      </div>
    </div>
  );
}
