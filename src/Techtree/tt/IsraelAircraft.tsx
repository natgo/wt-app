import { Arrow } from "../Arrow";
import { EmptyDiv } from "../EmptyDiv";
import { MediaHead } from "../MediaHead";
import { Rank } from "../Rank";
import { Research } from "../Research";
import { TechTreeItem } from "../TechTreeItem";
import { TreeFolder } from "../TreeFolder";

export function IsraelAircraft() {
  return (
    <div className="mw-parser-output">
      <div className="tree">
        <table rules="rows" width="100%">
          <tbody>
            <Research research={3} premium={2} />
            <tr>
              <Rank rank="IV" />
              <td>
                <TechTreeItem
                  link="/Spitfire_Mk_IXc_(Israel)"
                  title="Spitfire Mk IXc (Israel)"
                  item_type="own"
                  text="Spitfire Mk&nbsp;IXc"
                  intname="spitfire_mk9c_iaf"
                  type="aircraft"
                />
                <Arrow type="small" />
                <TechTreeItem
                  link="/Spitfire_Mk.IX_(CW)_(Israel)"
                  title="Spitfire Mk.IX (CW) (Israel)"
                  item_type="own"
                  text="Spitfire Mk.IX (CW)"
                  intname="spitfire_lf_mk9e_iaf"
                  type="aircraft"
                />
                <Arrow type="small" />
              </td>
              <td>
                <TechTreeItem
                  link="/S-199"
                  title="S-199"
                  item_type="own"
                  text="S-199"
                  intname="s_199"
                  type="aircraft"
                />
                <Arrow type="small" />
                <TechTreeItem
                  link="/P-51D-20-NA_(Israel)"
                  title="P-51D-20-NA (Israel)"
                  item_type="own"
                  text="P-51D-20-NA"
                  intname="p-51d-20-na_iaf"
                  type="aircraft"
                />
                <Arrow type="small" />
              </td>
              <td>
                <TechTreeItem
                  link="/B-17G_(Israel)"
                  title="B-17G (Israel)"
                  item_type="own"
                  text="B-17G"
                  intname="b-17g_iaf"
                  type="aircraft"
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
                  link="/Spitfire_LF_Mk.IX_Weizman%27s_(Israel)"
                  title="Spitfire LF Mk.IX Weizman's (Israel)"
                  item_type="prem"
                  text="Spitfire LF Mk.IX Weizman's"
                  intname="spitfire_lf_mk9e_weisman"
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
                  link="/Meteor_NF.13_(Israel)"
                  title="Meteor NF.13 (Israel)"
                  item_type="own"
                  text="Meteor&nbsp;NF.13"
                  intname="meteor_nfmk13"
                  type="aircraft"
                />
                <Arrow type="small" />
                <TechTreeItem
                  link="/Meteor_F.8_(Israel)"
                  title="Meteor F.8 (Israel)"
                  item_type="own"
                  text="Meteor&nbsp;F.8"
                  intname="meteor_fmk8_iaf"
                  type="aircraft"
                />
                <Arrow type="small" />
              </td>
              <td>
                <TechTreeItem
                  link="/M.D.450B_Ouragan_(Israel)"
                  title="M.D.450B Ouragan (Israel)"
                  item_type="own"
                  text="M.D.450B Ouragan"
                  intname="md_450b_ouragan_iaf"
                  type="aircraft"
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
                  link="/Vautour_IIA_(Israel)"
                  title="Vautour IIA (Israel)"
                  item_type="own"
                  text="Vautour IIA"
                  intname="so_4050_vautour_2a_israel_iaf"
                  type="aircraft"
                />
                <Arrow type="small" />
                <TechTreeItem
                  link="/Vautour_IIN_(Israel)"
                  title="Vautour IIN (Israel)"
                  item_type="own"
                  text="Vautour IIN"
                  intname="so_4050_vautour_2n_iaf"
                  type="aircraft"
                />
                <Arrow type="small" />
              </td>
              <td style={{ borderLeft: "solid 1px #cccccc" }}>
                <TechTreeItem
                  link="/F-84F_(Israel)"
                  title="F-84F (Israel)"
                  item_type="prem"
                  text="F-84F"
                  intname="f-84f_israel_iaf"
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
                  link="/Mystere_IVA_(Israel)"
                  title="Mystere IVA (Israel)"
                  item_type="own"
                  text="Mystere IVA"
                  intname="md_454_mystere_4a_iaf"
                  type="aircraft"
                />
                <Arrow type="small" />
                <TechTreeItem
                  link="/Sambad"
                  title="Sambad"
                  item_type="own"
                  text="Sambad"
                  intname="md_460_sambad"
                  type="aircraft"
                />
                <Arrow type="small" />
                <TechTreeItem
                  link="/Sa%27ar"
                  title="Sa'ar"
                  item_type="own"
                  text="Sa'ar"
                  intname="md_460_saar"
                  type="aircraft"
                />
                <Arrow type="small" />
              </td>
              <td>
                <TechTreeItem
                  link="/A-4H_(Israel)"
                  title="A-4H (Israel)"
                  item_type="own"
                  text="A-4H"
                  intname="a_4h"
                  type="aircraft"
                />
                <Arrow type="small" />
                <TechTreeItem
                  link="/A-4E_Early_(M)_(Israel)"
                  title="A-4E Early (M) (Israel)"
                  item_type="own"
                  text="A-4E Early (M)"
                  intname="a_4e_early_iaf"
                  type="aircraft"
                />
                <Arrow type="small" />
                <TechTreeItem
                  link="/A-4N_(Israel)"
                  title="A-4N (Israel)"
                  item_type="own"
                  text="A-4N"
                  intname="a_4n"
                  type="aircraft"
                />
                <Arrow type="small" />
              </td>
              <td>
                <div className="tree-arrow">
                  <img src="./images/Arrow_tail.png" alt="Arrow_tail.png" />
                  <br />
                  <img src="./images/Arrow_center.png" alt="Arrow_center.png" />
                  <br />
                  <img src="./images/Arrow_center_small.png" alt="Arrow_center_small.png" />
                  <br />
                  <img src="./images/Arrow_center.png" alt="Arrow_center.png" />
                  <br />
                  <img src="./images/Arrow_center.png" alt="Arrow_center.png" />
                  <br />
                  <img src="./images/Arrow_head.png" alt="Arrow_head.png" />
                </div>
              </td>
              <td style={{ borderLeft: "solid 1px #cccccc" }}>
                <TechTreeItem
                  link="/A-4E_(Israel)"
                  title="A-4E (Israel)"
                  item_type="prem"
                  text="A-4E"
                  intname="a_4e_late_iaf"
                  type="aircraft"
                />
                <EmptyDiv />
              </td>
              <td />
            </tr>
            <tr>
              <Rank rank="VII" />
              <td>
                <TechTreeItem
                  link="/Mirage_IIICJ"
                  title="Mirage IIICJ"
                  item_type="own"
                  text="Mirage IIICJ"
                  intname="mirage_3cj"
                  type="aircraft"
                />
                <Arrow type="small" />
                <TechTreeItem
                  link="/Kfir_C.7"
                  title="Kfir C.7"
                  item_type="own"
                  text="Kfir C.7"
                  intname="kfir_c7"
                  type="aircraft"
                />
                <EmptyDiv />
              </td>
              <td>
                <TechTreeItem
                  link="/F-4E_Phantom_II_(Israel)"
                  title="F-4E Phantom II (Israel)"
                  item_type="own"
                  text="F-4E Phantom II"
                  intname="f-4e_iaf"
                  type="aircraft"
                />
                <EmptyDiv />
              </td>
              <td>
                <TechTreeItem
                  link="/Nesher"
                  title="Nesher"
                  item_type="own"
                  text="Nesher"
                  intname="nesher"
                  type="aircraft"
                />
                <EmptyDiv />
              </td>
              <td style={{ borderLeft: "solid 1px #cccccc" }}>
                <TechTreeItem
                  link="/Kfir_C.2"
                  title="Kfir C.2"
                  item_type="own"
                  text="Kfir C.2"
                  intname="kfir_c2"
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
        <a href="https://yewtu.be/ZRZdHE3G3CY">
          <b>Climbing the Ranks: Israeli Aircraft</b> - <i>War Thunder Official Channel</i>
        </a>
        <a href="https://yewtu.be/1gnpWiH1e08">
          <b>Israeli Air Forces Rank V - Tutorial And Guide</b> - <i>Jengar</i>
        </a>
        <a href="https://yewtu.be/DtktcYtzNmA">
          <b>Israeli Air Forces Rank IV - Tutorial and Guide</b> - <i>Jengar</i>
        </a>
      </div>
    </div>
  );
}
