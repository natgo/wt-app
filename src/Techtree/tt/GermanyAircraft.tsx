import { MediaHead } from "../MediaHead";
import { TreeFolder } from "../TreeFolder";
import { EmptyDiv } from "../EmptyDiv";
import { Arrow } from "../Arrow";
import { Research } from "../Research";
import { Rank } from "../Rank";
import { TechTreeItem } from "../TechTreeItem";

export function GermanyAircraft() {
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
                  link="/Bf_109_B-1"
                  title="Bf 109 B-1"
                  item_type="own"
                  text="Bf 109 B-1"
                  intname="bf-109b_2"
                  type="aircraft"
                />
                <Arrow type="small" />
                <TechTreeItem
                  link="/Bf_109_E-1"
                  title="Bf 109 E-1"
                  item_type="own"
                  text="Bf 109 E-1"
                  intname="bf-109e-1"
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
                  <img src="./images/Arrow_center_small.png" alt="Arrow_center_small.png" />
                  <br />
                  <img src="./images/Arrow_center.png" alt="Arrow_center.png" />
                  <br />
                  <img src="./images/Arrow_head.png" alt="Arrow_head.png" />
                </div>
              </td>
              <td>
                <TreeFolder name="He 51" img="he-51_group">
                  <TechTreeItem
                    link="/He_51_A-1"
                    title="He 51 A-1"
                    item_type="own"
                    text="He 51 A-1"
                    intname="he51a1"
                    type="aircraft"
                  />
                  <Arrow type="small" />
                  <TechTreeItem
                    link="/He_51_B-1"
                    title="He 51 B-1"
                    item_type="own"
                    text="He 51 B-1"
                    intname="he51b1"
                    type="aircraft"
                  />
                  <Arrow type="small" />
                  <TechTreeItem
                    link="/He_51_C-1"
                    title="He 51 C-1"
                    item_type="own"
                    text="He 51 C-1"
                    intname="he51c1"
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
                    link="/He_51_C-1/L"
                    title="He 51 C-1/L"
                    item_type="own"
                    text="He 51 C-1/L"
                    intname="he51c1_late"
                    type="aircraft"
                  />
                </TreeFolder>
                <Arrow type="small" />
                <TreeFolder name="He 112" img="he_112_group">
                  <TechTreeItem
                    link="/He_112_V-5"
                    title="He 112 V-5"
                    item_type="own"
                    text="He&nbsp;112&nbsp;V-5"
                    intname="he_112v_5"
                    type="aircraft"
                  />
                  <Arrow type="small" />
                  <TechTreeItem
                    link="/He_112_A-0"
                    title="He 112 A-0"
                    item_type="own"
                    text="He&nbsp;112&nbsp;A-0"
                    intname="he_112a_0"
                    type="aircraft"
                  />
                  <Arrow type="small" />
                  <TechTreeItem
                    link="/He_112_B-0"
                    title="He 112 B-0"
                    item_type="own"
                    text="He&nbsp;112&nbsp;B-0"
                    intname="he_112b_0"
                    type="aircraft"
                  />
                </TreeFolder>
                <Arrow type="small" />
                <TechTreeItem
                  link="/He_100_D-1"
                  title="He 100 D-1"
                  item_type="own"
                  text="He 100 D-1"
                  intname="he_100d_1"
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
                  link="/Do_17_Z-7"
                  title="Do 17 Z-7"
                  item_type="own"
                  text="Do&nbsp;17 Z-7"
                  intname="do_17z_7"
                  type="aircraft"
                />
                <Arrow type="small" />
                <TreeFolder name="Do 217 J" img="do-217j_group">
                  <TechTreeItem
                    link="/Do_217_J-1"
                    title="Do 217 J-1"
                    item_type="own"
                    text="Do 217 J-1"
                    intname="do_217j_1"
                    type="aircraft"
                  />
                  <Arrow type="small" />
                  <TechTreeItem
                    link="/Do_217_J-2"
                    title="Do 217 J-2"
                    item_type="own"
                    text="Do 217 J-2"
                    intname="do_217j_2"
                    type="aircraft"
                  />
                </TreeFolder>
                <div className="tree-arrow">
                  <img src="./images/Arrow_tail.png" alt="Arrow_tail.png" />
                  <br />
                  <img src="./images/Arrow_center.png" alt="Arrow_center.png" />
                  <br />
                  <img src="./images/Arrow_center_small.png" alt="Arrow_center_small.png" />
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
                  link="/Hs_123_A-1"
                  title="Hs 123 A-1"
                  item_type="own"
                  text="Hs 123 A-1"
                  intname="hs-123a-1"
                  type="aircraft"
                />
                <Arrow type="small" />
                <TreeFolder name="Ju 87 B/R" img="ju-87br_group">
                  <TechTreeItem
                    link="/Ju_87_B-2"
                    title="Ju 87 B-2"
                    item_type="own"
                    text="Ju&nbsp;87&nbsp;B-2"
                    intname="ju-87b-2"
                    type="aircraft"
                  />
                  <Arrow type="small" />
                  <TechTreeItem
                    link="/Ju_87_R-2"
                    title="Ju 87 R-2"
                    item_type="own"
                    text="Ju&nbsp;87&nbsp;R-2"
                    intname="ju-87r-2"
                    type="aircraft"
                  />
                </TreeFolder>
                <Arrow type="small" />
                <TreeFolder name="Ju 87 G" img="ju-87g_group">
                  <TechTreeItem
                    link="/Ju_87_G-1"
                    title="Ju 87 G-1"
                    item_type="own"
                    text="Ju&nbsp;87 G-1"
                    intname="ju-87g_1"
                    type="aircraft"
                  />
                  <Arrow type="small" />
                  <TechTreeItem
                    link="/Ju_87_G-2"
                    title="Ju 87 G-2"
                    item_type="own"
                    text="Ju&nbsp;87&nbsp;G-2"
                    intname="ju-87g_2"
                    type="aircraft"
                  />
                </TreeFolder>
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
                <TreeFolder name="Do 17" img="do_17_group">
                  <TechTreeItem
                    link="/Do_17_E-1"
                    title="Do 17 E-1"
                    item_type="own"
                    text="Do&nbsp;17 E-1"
                    intname="do_17e_1"
                    type="aircraft"
                  />
                  <Arrow type="small" />
                  <TechTreeItem
                    link="/Do_17_Z-2"
                    title="Do 17 Z-2"
                    item_type="own"
                    text="Do&nbsp;17 Z-2"
                    intname="do_17z_2"
                    type="aircraft"
                  />
                </TreeFolder>
                <Arrow type="small" />
                <TechTreeItem
                  link="/BV_138_C-1"
                  title="BV 138 C-1"
                  item_type="own"
                  text="BV 138 C-1"
                  intname="bv-138c-1"
                  type="aircraft"
                />
                <Arrow type="small" />
                <TechTreeItem
                  link="/He_111_H-3"
                  title="He 111 H-3"
                  item_type="own"
                  text="He&nbsp;111&nbsp;H-3"
                  intname="he-111h-2"
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
              <td style={{ borderLeft: "solid 1px #cccccc" }}>
                <TechTreeItem
                  link="/Flegel%27s_Bf_109_A"
                  title="Flegel's Bf 109 A"
                  item_type="prem"
                  text="Flegel's Bf 109 A"
                  intname="bf-109a_1"
                  type="aircraft"
                />
                <EmptyDiv />
                <TechTreeItem
                  link="/Marcolin%27s_C.R.42_CN_(Germany)"
                  title="Marcolin's C.R.42 CN (Germany)"
                  item_type="prem"
                  text="▀Marcolin's C.R.42 CN"
                  intname="fiat_cr42_marcolin"
                  type="aircraft"
                />
                <EmptyDiv />
                <TechTreeItem
                  link="/Ju_87_R-2_Libya"
                  title="Ju 87 R-2 Libya"
                  item_type="prem"
                  text="Ju&nbsp;87&nbsp;R-2 Libya"
                  intname="ju-87r-2_snake"
                  type="aircraft"
                />
                <EmptyDiv />
                <TechTreeItem
                  link="/He_112_B-1/U2_(Germany)"
                  title="He 112 B-1/U2 (Germany)"
                  item_type="prem"
                  text="He&nbsp;112&nbsp;B-1/U2"
                  intname="he_112b_1"
                  type="aircraft"
                />
                <EmptyDiv />
                <TreeFolder name="▀CR.42/C. 202" img="fiat_group">
                  <TechTreeItem
                    link="/CR.42_(Germany)"
                    title="CR.42 (Germany)"
                    item_type="own"
                    text="▀CR.42"
                    intname="fiat_cr42"
                    type="aircraft"
                  />
                  <Arrow type="small" />
                  <TechTreeItem
                    link="/G.50_serie_2_(Germany)"
                    title="G.50 serie 2 (Germany)"
                    item_type="own"
                    text="▀G.50 serie 2"
                    intname="fiat_g50_seria2"
                    type="aircraft"
                  />
                  <Arrow type="small" />
                  <TechTreeItem
                    link="/G.50_AS_serie_7_(Germany)"
                    title="G.50 AS serie 7 (Germany)"
                    item_type="own"
                    text="▀G.50 AS serie 7"
                    intname="fiat_g50_seria7as"
                    type="aircraft"
                  />
                  <Arrow type="small" />
                  <TechTreeItem
                    link="/C._200_serie_3_(Germany)"
                    title="C. 200 serie 3 (Germany)"
                    item_type="own"
                    text="▀C. 200&nbsp;serie&nbsp;3"
                    intname="mc200_serie3"
                    type="aircraft"
                  />
                  <Arrow type="small" />
                  <TechTreeItem
                    link="/C._200_serie_7_(Germany)"
                    title="C. 200 serie 7 (Germany)"
                    item_type="own"
                    text="▀C. 200&nbsp;serie 7"
                    intname="mc200_serie7"
                    type="aircraft"
                  />
                  <Arrow type="small" />
                  <TechTreeItem
                    link="/C._202_(Germany)"
                    title="C. 202 (Germany)"
                    item_type="own"
                    text="▀C. 202"
                    intname="mc-202"
                    type="aircraft"
                  />
                </TreeFolder>
                <EmptyDiv />
              </td>
              <td>
                <TechTreeItem
                  link="/He_51_B-2/H"
                  title="He 51 B-2/H"
                  item_type="prem"
                  text="He 51 B-2/H"
                  intname="he51b_2w"
                  type="aircraft"
                />
                <EmptyDiv />
                <TechTreeItem
                  link="/Fw_189_A-1"
                  title="Fw 189 A-1"
                  item_type="prem"
                  text="Fw&nbsp;189&nbsp;A-1"
                  intname="fw-189a-1"
                  type="aircraft"
                />
                <EmptyDiv />
                <TechTreeItem
                  link="/Ar_196_A-3"
                  title="Ar 196 A-3"
                  item_type="prem"
                  text="Ar 196 A-3"
                  intname="arado-196a-3"
                  type="aircraft"
                />
                <EmptyDiv />
                <TechTreeItem
                  link="/Hawk_H-75A-2_(Germany)"
                  title="Hawk H-75A-2 (Germany)"
                  item_type="prem"
                  text="▀Hawk H-75A-2"
                  intname="h-75a-2_finland"
                  type="aircraft"
                />
                <EmptyDiv />
                <TechTreeItem
                  link="/He_112_B-2/U2"
                  title="He 112 B-2/U2"
                  item_type="prem"
                  text="He&nbsp;112&nbsp;B-2/U2"
                  intname="he_112b_2"
                  type="aircraft"
                />
                <EmptyDiv />
              </td>
            </tr>
            <tr>
              <Rank rank="II" />
              <td>
                <TreeFolder name="Bf 109 E" img="bf-109e_group">
                  <TechTreeItem
                    link="/Bf_109_E-3"
                    title="Bf 109 E-3"
                    item_type="own"
                    text="Bf 109 E-3"
                    intname="bf-109e-3"
                    type="aircraft"
                  />
                  <Arrow type="small" />
                  <TechTreeItem
                    link="/Bf_109_E-4"
                    title="Bf 109 E-4"
                    item_type="own"
                    text="Bf 109 E-4"
                    intname="bf-109e-4"
                    type="aircraft"
                  />
                </TreeFolder>
                <Arrow type="small" />
                <TreeFolder name="Bf 109 F (e)" img="bf-109f_early_group">
                  <TechTreeItem
                    link="/Bf_109_F-1"
                    title="Bf 109 F-1"
                    item_type="own"
                    text="Bf&nbsp;109&nbsp;F-1"
                    intname="bf-109f-1"
                    type="aircraft"
                  />
                  <Arrow type="small" />
                  <TechTreeItem
                    link="/Bf_109_F-2"
                    title="Bf 109 F-2"
                    item_type="own"
                    text="Bf&nbsp;109&nbsp;F-2"
                    intname="bf-109f-2"
                    type="aircraft"
                  />
                </TreeFolder>
              </td>
              <td>
                <TechTreeItem
                  link="/Fw_190_A-1"
                  title="Fw 190 A-1"
                  item_type="own"
                  text="Fw&nbsp;190&nbsp;A-1"
                  intname="fw-190a-1"
                  type="aircraft"
                />
                <EmptyDiv />
              </td>
              <td>
                <TechTreeItem
                  link="/Ju_88_C-6"
                  title="Ju 88 C-6"
                  item_type="own"
                  text="Ju&nbsp;88&nbsp;C-6"
                  intname="ju-88c-6"
                  type="aircraft"
                />
                <Arrow type="small" />
                <TreeFolder name="Bf 110 C/F" img="bf_110cf_group">
                  <TechTreeItem
                    link="/Bf_110_C-7"
                    title="Bf 110 C-7"
                    item_type="own"
                    text="Bf&nbsp;110&nbsp;C-7"
                    intname="bf-110c-4"
                    type="aircraft"
                  />
                  <Arrow type="small" />
                  <TechTreeItem
                    link="/Bf_110_F-2"
                    title="Bf 110 F-2"
                    item_type="own"
                    text="Bf 110 F-2"
                    intname="bf-110f-2"
                    type="aircraft"
                  />
                </TreeFolder>
                <Arrow type="small" />
                <TreeFolder name="Do 217 N" img="do-217n_group">
                  <TechTreeItem
                    link="/Do_217_N-1"
                    title="Do 217 N-1"
                    item_type="own"
                    text="Do 217 N-1"
                    intname="do_217n_1"
                    type="aircraft"
                  />
                  <Arrow type="small" />
                  <TechTreeItem
                    link="/Do_217_N-2"
                    title="Do 217 N-2"
                    item_type="own"
                    text="Do 217 N-2"
                    intname="do_217n_2"
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
              <td>
                <TreeFolder name="Ju 87 D" img="ju-87d_group">
                  <TechTreeItem
                    link="/Ju_87_D-3"
                    title="Ju 87 D-3"
                    item_type="own"
                    text="Ju&nbsp;87&nbsp;D-3"
                    intname="ju-87d-3"
                    type="aircraft"
                  />
                  <Arrow type="small" />
                  <TechTreeItem
                    link="/Ju_87_D-5"
                    title="Ju 87 D-5"
                    item_type="own"
                    text="Ju&nbsp;87 D-5"
                    intname="ju-87d-5"
                    type="aircraft"
                  />
                </TreeFolder>
                <Arrow type="small" />
                <TechTreeItem
                  link="/Hs_129_B-3"
                  title="Hs 129 B-3"
                  item_type="own"
                  text="Hs 129 B-3"
                  intname="hs-129b-3"
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
                <TreeFolder name="Ju 88 A" img="ju-88a_group">
                  <TechTreeItem
                    link="/Ju_88_A-1"
                    title="Ju 88 A-1"
                    item_type="own"
                    text="Ju 88 A-1"
                    intname="ju-88a-1"
                    type="aircraft"
                  />
                  <Arrow type="small" />
                  <TechTreeItem
                    link="/Ju_88_A-4"
                    title="Ju 88 A-4"
                    item_type="own"
                    text="Ju&nbsp;88&nbsp;A-4"
                    intname="ju-88a-4"
                    type="aircraft"
                  />
                </TreeFolder>
                <Arrow type="small" />
                <TechTreeItem
                  link="/Fw_200_C-1"
                  title="Fw 200 C-1"
                  item_type="own"
                  text="Fw 200 C-1"
                  intname="fw_200c_1"
                  type="aircraft"
                />
                <Arrow type="small" />
                <TreeFolder name="He 111 H" img="he-111h_group">
                  <TechTreeItem
                    link="/He_111_H-6"
                    title="He 111 H-6"
                    item_type="own"
                    text="He&nbsp;111&nbsp;H-6"
                    intname="he-111h-6"
                    type="aircraft"
                  />
                  <Arrow type="small" />
                  <TechTreeItem
                    link="/He_111_H-16"
                    title="He 111 H-16"
                    item_type="own"
                    text="He&nbsp;111&nbsp;H-16"
                    intname="he-111h-16_winter"
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
                  link="/IL-2_(1942)_(Germany)"
                  title="IL-2 (1942) (Germany)"
                  item_type="prem"
                  text="▀IL-2 (1942)"
                  intname="il_2_1942_luftwaffe"
                  type="aircraft"
                />
                <EmptyDiv />
                <TechTreeItem
                  link="/Yak-1B_(Germany)"
                  title="Yak-1B (Germany)"
                  item_type="prem"
                  text="▀Yak-1B"
                  intname="yak-1b_luftwaffe"
                  type="aircraft"
                />
                <EmptyDiv />
                <TechTreeItem
                  link="/BV_238"
                  title="BV 238"
                  item_type="prem"
                  text="BV 238"
                  intname="bv-238"
                  type="aircraft"
                />
                <EmptyDiv />
                <TreeFolder name="▀S.M.79" img="sm-79_group">
                  <TechTreeItem
                    link="/S.M.79_serie_1_(Germany)"
                    title="S.M.79 serie 1 (Germany)"
                    item_type="own"
                    text="▀S.M.79 serie 1"
                    intname="sm_79_1936"
                    type="aircraft"
                  />
                  <Arrow type="small" />
                  <TechTreeItem
                    link="/S.M.79_serie_8_(Germany)"
                    title="S.M.79 serie 8 (Germany)"
                    item_type="own"
                    text="▀S.M.79 serie 8"
                    intname="sm_79_1939"
                    type="aircraft"
                  />
                  <Arrow type="small" />
                  <TechTreeItem
                    link="/S.M.79_AS_(Germany)"
                    title="S.M.79 AS (Germany)"
                    item_type="own"
                    text="▀S.M.79&nbsp;AS"
                    intname="sm_79_1941"
                    type="aircraft"
                  />
                  <Arrow type="small" />
                  <TechTreeItem
                    link="/S.M.79_bis/T.M_(Germany)"
                    title="S.M.79 bis/T.M (Germany)"
                    item_type="own"
                    text="▀S.M.79 bis/T.M"
                    intname="sm_79_1943"
                    type="aircraft"
                  />
                  <Arrow type="small" />
                  <TechTreeItem
                    link="/S.M.79_B_(Germany)"
                    title="S.M.79 B (Germany)"
                    item_type="own"
                    text="▀S.M.79 B"
                    intname="sm_79_iar"
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
                    link="/S.M.79_serie_4_(Germany)"
                    title="S.M.79 serie 4 (Germany)"
                    item_type="own"
                    text="▀S.M.79&nbsp;serie 4"
                    intname="sm_79_1937"
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
                    link="/S.M.79_bis/N_(Germany)"
                    title="S.M.79 bis/N (Germany)"
                    item_type="own"
                    text="▀S.M.79 bis/N"
                    intname="sm_79_1942"
                    type="aircraft"
                  />
                </TreeFolder>
                <EmptyDiv />
              </td>
              <td>
                <TechTreeItem
                  link="/Wellington_Mk_Ic_(Germany)"
                  title="Wellington Mk Ic (Germany)"
                  item_type="prem"
                  text="▀Wellington&nbsp;Mk Ic"
                  intname="wellington_mk1c_luftwaffe"
                  type="aircraft"
                />
                <EmptyDiv />
                <TechTreeItem
                  link="/Bf_109_E-7/U2"
                  title="Bf 109 E-7/U2"
                  item_type="prem"
                  text="Bf 109 E-7/U2"
                  intname="bf-109e-7"
                  type="aircraft"
                />
                <EmptyDiv />
                <TechTreeItem
                  link="/Bf_110_C-6"
                  title="Bf 110 C-6"
                  item_type="prem"
                  text="Bf&nbsp;110&nbsp;C-6"
                  intname="bf-110c-6"
                  type="aircraft"
                />
                <EmptyDiv />
              </td>
            </tr>
            <tr>
              <Rank rank="III" />
              <td>
                <TreeFolder name="Bf 109 F" img="bf-109f_group">
                  <TechTreeItem
                    link="/Bf_109_F-4"
                    title="Bf 109 F-4"
                    item_type="own"
                    text="Bf&nbsp;109&nbsp;F-4"
                    intname="bf-109f-4"
                    type="aircraft"
                  />
                  <Arrow type="small" />
                  <TechTreeItem
                    link="/Bf_109_F-4/trop"
                    title="Bf 109 F-4/trop"
                    item_type="own"
                    text="Bf&nbsp;109&nbsp;F-4/trop"
                    intname="bf-109f-4_trop"
                    type="aircraft"
                  />
                </TreeFolder>
                <Arrow type="small" />
                <TechTreeItem
                  link="/Bf_109_G-2/trop"
                  title="Bf 109 G-2/trop"
                  item_type="own"
                  text="Bf&nbsp;109&nbsp;G-2/trop"
                  intname="bf-109g-2"
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
                  link="/Fw_190_A-4"
                  title="Fw 190 A-4"
                  item_type="own"
                  text="Fw 190 A-4"
                  intname="fw-190a-4"
                  type="aircraft"
                />
                <Arrow type="small" />
                <TreeFolder name="Fw 190 A-5" img="fw-190a-5_group">
                  <TechTreeItem
                    link="/Fw_190_A-5/U2"
                    title="Fw 190 A-5/U2"
                    item_type="own"
                    text="Fw&nbsp;190&nbsp;A-5/U2"
                    intname="fw-190a-5_u2"
                    type="aircraft"
                  />
                  <Arrow type="small" />
                  <TechTreeItem
                    link="/Fw_190_A-5"
                    title="Fw 190 A-5"
                    item_type="own"
                    text="Fw&nbsp;190&nbsp;A-5"
                    intname="fw-190a-5_cannons"
                    type="aircraft"
                  />
                  <Arrow type="small" />
                  <TechTreeItem
                    link="/Fw_190_A-5/U12"
                    title="Fw 190 A-5/U12"
                    item_type="own"
                    text="Fw&nbsp;190&nbsp;A-5"
                    intname="fw-190a-5"
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
              <td>
                <TreeFolder name="Bf 110 G" img="bf_110g_group">
                  <TechTreeItem
                    link="/Bf_110_G-2"
                    title="Bf 110 G-2"
                    item_type="own"
                    text="Bf 110 G-2"
                    intname="bf-110g-2"
                    type="aircraft"
                  />
                  <Arrow type="small" />
                  <TechTreeItem
                    link="/Bf_110_G-4"
                    title="Bf 110 G-4"
                    item_type="own"
                    text="Bf 110 G-4"
                    intname="bf_110g_4"
                    type="aircraft"
                  />
                </TreeFolder>
                <Arrow type="small" />
                <TreeFolder name="Me 410" img="me-410a_group">
                  <TechTreeItem
                    link="/Me_410_A-1"
                    title="Me 410 A-1"
                    item_type="own"
                    text="Me 410 A-1"
                    intname="me-410a-1"
                    type="aircraft"
                  />
                  <Arrow type="small" />
                  <TechTreeItem
                    link="/Me_410_A-1/U2"
                    title="Me 410 A-1/U2"
                    item_type="own"
                    text="Me 410 A-1/U2"
                    intname="me-410a-1_u2"
                    type="aircraft"
                  />
                  <Arrow type="small" />
                  <TechTreeItem
                    link="/Me_410_B-1"
                    title="Me 410 B-1"
                    item_type="own"
                    text="Me 410 B-1"
                    intname="me-410b-1"
                    type="aircraft"
                  />
                  <Arrow type="small" />
                  <TechTreeItem
                    link="/Me_410_B-1/U2"
                    title="Me 410 B-1/U2"
                    item_type="own"
                    text="Me 410 B-1/U2"
                    intname="me-410b-1_u2"
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
              <td>
                <TechTreeItem
                  link="/Hs_129_B-2"
                  title="Hs 129 B-2"
                  item_type="own"
                  text="Hs 129 B-2"
                  intname="hs-129b-2"
                  type="aircraft"
                />
                <Arrow type="small" />
                <TreeFolder name="Me 410 A" img="me-410a-1_group">
                  <TechTreeItem
                    link="/Me_410_A-1/U4"
                    title="Me 410 A-1/U4"
                    item_type="own"
                    text="Me 410 A-1/U4"
                    intname="me-410a-1_u4"
                    type="aircraft"
                  />
                  <Arrow type="small" />
                  <TechTreeItem
                    link="/Me_410_B-2/U4"
                    title="Me 410 B-2/U4"
                    item_type="own"
                    text="Me 410 B-2/U4"
                    intname="me-410b-2_u4"
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
              <td>
                <TechTreeItem
                  link="/Me_264"
                  title="Me 264"
                  item_type="own"
                  text="Me 264"
                  intname="me_264"
                  type="aircraft"
                />
                <Arrow type="small" />
                <TreeFolder name="Do 217 E" img="do-217e_group">
                  <TechTreeItem
                    link="/Do_217_E-2"
                    title="Do 217 E-2"
                    item_type="own"
                    text="Do&nbsp;217 E-2"
                    intname="do_217e_2"
                    type="aircraft"
                  />
                  <Arrow type="small" />
                  <TechTreeItem
                    link="/Do_217_E-4"
                    title="Do 217 E-4"
                    item_type="own"
                    text="Do 217 E-4"
                    intname="do_217e_4"
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
                  link="/P-47D-16-RE_(Germany)"
                  title="P-47D-16-RE (Germany)"
                  item_type="prem"
                  text="▀P-47D-16-RE"
                  intname="p-47d_16_re_germany"
                  type="aircraft"
                />
                <EmptyDiv />
                <TechTreeItem
                  link="/Ta_154_A-1"
                  title="Ta 154 A-1"
                  item_type="prem"
                  text="Ta 154 A-1"
                  intname="ta_154a_1"
                  type="aircraft"
                />
                <EmptyDiv />
                <TechTreeItem
                  link="/Bf_109_G-2"
                  title="Bf 109 G-2"
                  item_type="prem"
                  text="Bf&nbsp;109&nbsp;G-2"
                  intname="bf-109g-2_romania"
                  type="aircraft"
                />
                <EmptyDiv />
              </td>
              <td>
                <TechTreeItem
                  link="/Hs_129_B-2_(Romania)"
                  title="Hs 129 B-2 (Romania)"
                  item_type="prem"
                  text="Hs 129 B-2 (Romania)"
                  intname="hs-129b-2_romania"
                  type="aircraft"
                />
                <EmptyDiv />
                <TechTreeItem
                  link="/P-47D_(Germany)"
                  title="P-47D (Germany)"
                  item_type="prem"
                  text="▀P-47D"
                  intname="p-47d_luftwaffe"
                  type="aircraft"
                />
                <EmptyDiv />
                <TechTreeItem
                  link="/La-5FN_(Germany)"
                  title="La-5FN (Germany)"
                  item_type="prem"
                  text="▀La-5FN"
                  intname="la-5fn_luftwaffe"
                  type="aircraft"
                />
                <EmptyDiv />
              </td>
            </tr>
            <tr>
              <Rank rank="IV" />
              <td>
                <TreeFolder name="Bf 109 G" img="bf-109g_group">
                  <TechTreeItem
                    link="/Bf_109_G-6"
                    title="Bf 109 G-6"
                    item_type="own"
                    text="Bf&nbsp;109&nbsp;G-6"
                    intname="bf-109g-6"
                    type="aircraft"
                  />
                  <Arrow type="small" />
                  <TechTreeItem
                    link="/Bf_109_G-14"
                    title="Bf 109 G-14"
                    item_type="own"
                    text="Bf&nbsp;109&nbsp;G-14"
                    intname="bf-109g-14"
                    type="aircraft"
                  />
                  <Arrow type="small" />
                  <TechTreeItem
                    link="/Bf_109_G-10"
                    title="Bf 109 G-10"
                    item_type="own"
                    text="Bf&nbsp;109&nbsp;G-10"
                    intname="bf-109g-10"
                    type="aircraft"
                  />
                </TreeFolder>
                <Arrow type="small" />
                <TechTreeItem
                  link="/Bf_109_K-4"
                  title="Bf 109 K-4"
                  item_type="own"
                  text="Bf&nbsp;109&nbsp;K-4"
                  intname="bf-109k-4"
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
                <TreeFolder name="Fw 190 A/F-8" img="fw-190a-f-8_group">
                  <TechTreeItem
                    link="/Fw_190_A-8"
                    title="Fw 190 A-8"
                    item_type="own"
                    text="Fw&nbsp;190&nbsp;A-8"
                    intname="fw-190a-8"
                    type="aircraft"
                  />
                  <Arrow type="small" />
                  <TechTreeItem
                    link="/Fw_190_F-8"
                    title="Fw 190 F-8"
                    item_type="own"
                    text="Fw&nbsp;190&nbsp;F-8"
                    intname="fw-190f-8"
                    type="aircraft"
                  />
                </TreeFolder>
                <Arrow type="small" />
                <TreeFolder name="Fw 190 D" img="fw-190d_group">
                  <TechTreeItem
                    link="/Fw_190_D-9"
                    title="Fw 190 D-9"
                    item_type="own"
                    text="Fw&nbsp;190&nbsp;D-9"
                    intname="fw-190d-9"
                    type="aircraft"
                  />
                  <Arrow type="small" />
                  <TechTreeItem
                    link="/Fw_190_D-12"
                    title="Fw 190 D-12"
                    item_type="own"
                    text="Fw&nbsp;190&nbsp;D-12"
                    intname="fw-190d-12"
                    type="aircraft"
                  />
                </TreeFolder>
                <Arrow type="small" />
                <TreeFolder name="Ta 152" img="ta-152_group">
                  <TechTreeItem
                    link="/Ta_152_H-1"
                    title="Ta 152 H-1"
                    item_type="own"
                    text="Ta&nbsp;152&nbsp;H-1"
                    intname="ta-152h-1"
                    type="aircraft"
                  />
                  <Arrow type="small" />
                  <TechTreeItem
                    link="/Ta_152_C-3"
                    title="Ta 152 C-3"
                    item_type="own"
                    text="Ta&nbsp;152&nbsp;C-3"
                    intname="ta-152c"
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
              <td>
                <TechTreeItem
                  link="/Me_410_B-6/R3"
                  title="Me 410 B-6/R3"
                  item_type="own"
                  text="Me 410 B-6/R3"
                  intname="me-410b-6_r3"
                  type="aircraft"
                />
                <Arrow type="small" />
                <TechTreeItem
                  link="/Do_335_A-0"
                  title="Do 335 A-0"
                  item_type="own"
                  text="Do 335 A-0"
                  intname="do_335a_0"
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
                  link="/Do_335_A-1"
                  title="Do 335 A-1"
                  item_type="own"
                  text="Do 335 A-1"
                  intname="do_335a_1"
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
                  <img src="./images/Arrow_center_small.png" alt="Arrow_center_small.png" />
                  <br />
                  <img src="./images/Arrow_center.png" alt="Arrow_center.png" />
                  <br />
                  <img src="./images/Arrow_head.png" alt="Arrow_head.png" />
                </div>
              </td>
              <td>
                <TreeFolder name="Do 217" img="do_217k_group">
                  <TechTreeItem
                    link="/Do_217_K-1"
                    title="Do 217 K-1"
                    item_type="own"
                    text="Do 217 K-1"
                    intname="do_217k_1"
                    type="aircraft"
                  />
                  <Arrow type="small" />
                  <TechTreeItem
                    link="/Do_217_M-1"
                    title="Do 217 M-1"
                    item_type="own"
                    text="Do 217 M-1"
                    intname="do_217m_1"
                    type="aircraft"
                  />
                </TreeFolder>
                <Arrow type="small" />
                <TechTreeItem
                  link="/Ju_188_A-2"
                  title="Ju 188 A-2"
                  item_type="own"
                  text="Ju 188 A-2"
                  intname="ju-188a-2"
                  type="aircraft"
                />
                <Arrow type="small" />
                <TechTreeItem
                  link="/He_177_A-5"
                  title="He 177 A-5"
                  item_type="own"
                  text="He 177 A-5"
                  intname="he-177a-5"
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
                  link="/He_219_A-7"
                  title="He 219 A-7"
                  item_type="prem"
                  text="He 219 A-7"
                  intname="he_219a_7"
                  type="aircraft"
                />
                <EmptyDiv />
                <TechTreeItem
                  link="/Do_335_B-2"
                  title="Do 335 B-2"
                  item_type="prem"
                  text="Do 335 B-2"
                  intname="do_335b_2"
                  type="aircraft"
                />
                <EmptyDiv />
                <TechTreeItem
                  link="/Tempest_Mk_V_(Germany)"
                  title="Tempest Mk V (Germany)"
                  item_type="prem"
                  text="▀Tempest&nbsp;Mk&nbsp;V"
                  intname="tempest_mkv_luftwaffe"
                  type="aircraft"
                />
                <EmptyDiv />
                <TechTreeItem
                  link="/Ju_288_C"
                  title="Ju 288 C"
                  item_type="prem"
                  text="Ju 288 C"
                  intname="ju-288c"
                  type="aircraft"
                />
                <EmptyDiv />
              </td>
              <td>
                <TechTreeItem
                  link="/Bf_109_Z-1"
                  title="Bf 109 Z-1"
                  item_type="prem"
                  text="Bf 109 Z-1"
                  intname="bf-109z"
                  type="aircraft"
                />
                <EmptyDiv />
                <TechTreeItem
                  link="/Fw_190_D-13"
                  title="Fw 190 D-13"
                  item_type="prem"
                  text="Fw&nbsp;190&nbsp;D-13"
                  intname="fw-190d-13"
                  type="aircraft"
                />
                <EmptyDiv />
                <TechTreeItem
                  link="/Ju_388_J"
                  title="Ju 388 J"
                  item_type="prem"
                  text="Ju 388 J"
                  intname="ju-388j"
                  type="aircraft"
                />
                <EmptyDiv />
                <TechTreeItem
                  link="/Fw_190_C"
                  title="Fw 190 C"
                  item_type="prem"
                  text="Fw 190 C"
                  intname="fw-190c"
                  type="aircraft"
                />
                <EmptyDiv />
              </td>
            </tr>
            <tr>
              <Rank rank="V" />
              <td>
                <TreeFolder name="Me 262 A" img="me-262c_group">
                  <TechTreeItem
                    link="/Me_262_A-1a"
                    title="Me 262 A-1a"
                    item_type="own"
                    text="Me&nbsp;262&nbsp;A-1a"
                    intname="me-262a-1a"
                    type="aircraft"
                  />
                  <Arrow type="small" />
                  <TechTreeItem
                    link="/Me_262_A-1a/Jabo"
                    title="Me 262 A-1a/Jabo"
                    item_type="own"
                    text="Me 262 A-1a/Jabo"
                    intname="me-262a-1a_early"
                    type="aircraft"
                  />
                </TreeFolder>
                <Arrow type="small" />
                <TreeFolder name="Me 262 C" img="me-262c_group">
                  <TechTreeItem
                    link="/Me_262_C-1a"
                    title="Me 262 C-1a"
                    item_type="own"
                    text="Me&nbsp;262&nbsp;C-1a"
                    intname="me-262c-1a"
                    type="aircraft"
                  />
                  <Arrow type="small" />
                  <TechTreeItem
                    link="/Me_262_C-2b"
                    title="Me 262 C-2b"
                    item_type="own"
                    text="Me&nbsp;262&nbsp;C-2b"
                    intname="me-262c-2b"
                    type="aircraft"
                  />
                </TreeFolder>
                <Arrow type="small" />
                <TreeFolder name="Me 163" img="me-163_group">
                  <TechTreeItem
                    link="/Me_163_B"
                    title="Me 163 B"
                    item_type="own"
                    text="Me&nbsp;163&nbsp;B"
                    intname="me-163b"
                    type="aircraft"
                  />
                  <Arrow type="small" />
                  <TechTreeItem
                    link="/Me_163_B-0"
                    title="Me 163 B-0"
                    item_type="own"
                    text="Me&nbsp;163&nbsp;B-0"
                    intname="me-163b-0"
                    type="aircraft"
                  />
                </TreeFolder>
                <Arrow type="small" />
              </td>
              <td>
                <TechTreeItem
                  link="/He_162_A-2"
                  title="He 162 A-2"
                  item_type="own"
                  text="He&nbsp;162&nbsp;A-2"
                  intname="he-162a-2"
                  type="aircraft"
                />
                <Arrow type="small" />
                <TechTreeItem
                  link="/MiG-15bis_(Germany)"
                  title="MiG-15bis (Germany)"
                  item_type="own"
                  text="▀MiG-15bis"
                  intname="mig-15bis_nr23_german"
                  type="aircraft"
                />
                <Arrow type="small" />
                <TechTreeItem
                  link="/Lim-5P"
                  title="Lim-5P"
                  item_type="own"
                  text="Lim-5P"
                  intname="mig-17p_lim_5p"
                  type="aircraft"
                />
                <Arrow type="small" />
              </td>
              <td>
                <TechTreeItem
                  link="/Ho_229_V3"
                  title="Ho 229 V3"
                  item_type="own"
                  text="Ho 229 V3"
                  intname="go229_v3"
                  type="aircraft"
                />
                <Arrow type="small" />
                <TechTreeItem
                  link="/G.91_R/3_(Germany)"
                  title="G.91 R/3 (Germany)"
                  item_type="own"
                  text="▀G.91 R/3"
                  intname="fiat_g91_r3"
                  type="aircraft"
                />
              </td>
              <td>
                <TechTreeItem
                  link="/Me_262_A-1/U4"
                  title="Me 262 A-1/U4"
                  item_type="own"
                  text="Me&nbsp;262 A-1/U4"
                  intname="me-262a-1a_u4"
                  type="aircraft"
                />
                <Arrow type="small" />
                <TechTreeItem
                  link="/F-84F_(Germany)"
                  title="F-84F (Germany)"
                  item_type="own"
                  text="▀F-84F"
                  intname="f-84f_germany"
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
                  link="/Ar_234_B-2"
                  title="Ar 234 B-2"
                  item_type="own"
                  text="Ar 234 B-2"
                  intname="arado-234"
                  type="aircraft"
                />
                <Arrow type="small" />
                <TechTreeItem
                  link="/Ar_234_C-3"
                  title="Ar 234 C-3"
                  item_type="own"
                  text="Ar 234 C-3"
                  intname="arado-234c-3"
                  type="aircraft"
                />
                <Arrow type="small" />
                <TechTreeItem
                  link="/IL-28_(Germany)"
                  title="IL-28 (Germany)"
                  item_type="own"
                  text="▀IL-28"
                  intname="il_28_german"
                  type="aircraft"
                />
              </td>
              <td style={{ borderLeft: "solid 1px #cccccc" }}>
                <TechTreeItem
                  link="/Me_262_A-1a/U1"
                  title="Me 262 A-1a/U1"
                  item_type="squad"
                  text="Me 262 A-1a/U1"
                  intname="me-262a1_u1"
                  type="aircraft"
                />
                <EmptyDiv />
                <TechTreeItem
                  link="/Sea_Hawk_Mk.100"
                  title="Sea Hawk Mk.100"
                  item_type="prem"
                  text="Sea Hawk Mk.100"
                  intname="sea_hawk_mk100"
                  type="aircraft"
                />
                <EmptyDiv />
                <TechTreeItem
                  link="/G.91_R/4_(Germany)"
                  title="G.91 R/4 (Germany)"
                  item_type="prem"
                  text="▀G.91 R/4"
                  intname="fiat_g91_r4_german"
                  type="aircraft"
                />
                <EmptyDiv />
              </td>
              <td>
                <TechTreeItem
                  link="/He_162_A-1"
                  title="He 162 A-1"
                  item_type="own"
                  text="He&nbsp;162&nbsp;A-1"
                  intname="he-162a-1"
                  type="aircraft"
                />
                <EmptyDiv />
                <TechTreeItem
                  link="/Me_262_A-2a"
                  title="Me 262 A-2a"
                  item_type="own"
                  text="Me&nbsp;262&nbsp;A-2a"
                  intname="me-262a-2a"
                  type="aircraft"
                />
                <EmptyDiv />
              </td>
            </tr>
            <tr>
              <Rank rank="VI" />
              <td>
                <TreeFolder name="CL-13" img="f-86_german_group">
                  <TechTreeItem
                    link="/CL-13A_Mk_5"
                    title="CL-13A Mk 5"
                    item_type="own"
                    text="CL-13A Mk 5"
                    intname="f-86_canadair_german"
                    type="aircraft"
                  />
                  <Arrow type="small" />
                  <TechTreeItem
                    link="/CL-13B_Mk.6"
                    title="CL-13B Mk.6"
                    item_type="own"
                    text="CL-13B Mk.6"
                    intname="f-86_cl_13b_mk6"
                    type="aircraft"
                  />
                </TreeFolder>
                <Arrow type="small" />
                <TechTreeItem
                  link="/F-86K_(Germany)"
                  title="F-86K (Germany)"
                  item_type="own"
                  text="▀F-86K"
                  intname="f-86k_late_german"
                  type="aircraft"
                />
                <Arrow type="small" />
              </td>
              <td>
                <TechTreeItem
                  link="/MiG-19S_(Germany)"
                  title="MiG-19S (Germany)"
                  item_type="own"
                  text="▀MiG-19S"
                  intname="mig-19s"
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
              <td />
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
              <td />
              <td style={{ borderLeft: "solid 1px #cccccc" }}>
                <TechTreeItem
                  link="/MiG-21_SPS-K_(Germany)"
                  title="MiG-21 SPS-K (Germany)"
                  item_type="prem"
                  text="▀MiG-21 SPS-K"
                  intname="mig-21_sps_k"
                  type="aircraft"
                />
                <EmptyDiv />
              </td>
              <td>
                <EmptyDiv />
              </td>
            </tr>
            <tr>
              <Rank rank="VII" />
              <td>
                <TechTreeItem
                  link="/F-104G"
                  title="F-104G"
                  item_type="own"
                  text="F-104G"
                  intname="f-104g"
                  type="aircraft"
                />
                <Arrow type="small" />
                <TechTreeItem
                  link="/F-4F"
                  title="F-4F"
                  item_type="own"
                  text="F-4F"
                  intname="f-4f_late"
                  type="aircraft"
                />
                <EmptyDiv />
              </td>
              <td>
                <TechTreeItem
                  link="/MiG-21MF_(Germany)"
                  title="MiG-21MF (Germany)"
                  item_type="own"
                  text="▀MiG-21MF"
                  intname="mig-21_mf"
                  type="aircraft"
                />
                <Arrow type="small" />
                <TechTreeItem
                  link="/MiG-21bis-SAU_(Germany)"
                  title="MiG-21bis-SAU (Germany)"
                  item_type="own"
                  text="▀MiG-21bis-SAU"
                  intname="mig-21_bis_sau"
                  type="aircraft"
                />
                <Arrow type="small" />
                <TechTreeItem
                  link="/MiG-23MLA_(Germany)"
                  title="MiG-23MLA (Germany)"
                  item_type="own"
                  text="▀MiG-23MLA"
                  intname="mig_23mla"
                  type="aircraft"
                />
                <EmptyDiv />
              </td>
              <td>
                <EmptyDiv />
              </td>
              <td>
                <TechTreeItem
                  link="/Su-22UM3K_(Germany)"
                  title="Su-22UM3K (Germany)"
                  item_type="own"
                  text="▀Su-22UM3K"
                  intname="su_22um3k"
                  type="aircraft"
                />
                <EmptyDiv />
              </td>
              <td>
                <EmptyDiv />
              </td>
              <td style={{ borderLeft: "solid 1px #cccccc" }}>
                <TechTreeItem
                  link="/F-4F_Early"
                  title="F-4F Early"
                  item_type="own"
                  text="F-4F Early"
                  intname="f-4f"
                  type="aircraft"
                />
                <EmptyDiv />
              </td>
              <td>
                <TechTreeItem
                  link="/MiG-23MF_(Germany)"
                  title="MiG-23MF (Germany)"
                  item_type="own"
                  text="▀MiG-23MF"
                  intname="mig_23mf_germany"
                  type="aircraft"
                />
                <EmptyDiv />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <MediaHead />
      <div className="video_gallery">
        <a href="https://yewtu.be/XvFOc76GX04">
          <b>Heinkel Aircraft</b> - <i>War Thunder Official Channel</i>
        </a>
        <a href="https://yewtu.be/CnMiNFYAHx8">
          <b>Climbing the ranks with German aircraft</b> - <i>War Thunder Official Channel</i>
        </a>
      </div>
    </div>
  );
}
