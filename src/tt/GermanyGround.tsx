import { Arrow, EmptyDiv, MediaHead, Rank, Research, TechTreeItem, TreeFolder } from "../TechTree";

export function GermanyGround() {
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
                  link="/Sd.Kfz.221_(s.Pz.B.41)"
                  title="Sd.Kfz.221 (s.Pz.B.41)"
                  item_type="own"
                  text="Sd.Kfz.221 (s.Pz.B.41)"
                  intname="germ_sdkfz_221_s_pz_b_41"
                  type="ground"
                />
                <Arrow type="small" />
                <TechTreeItem
                  link="/15cm_sIG_33_B_Sfl"
                  title="15cm sIG 33 B Sfl"
                  item_type="own"
                  text="15cm sIG 33 B Sfl"
                  intname="germ_sturmpanzer_ii"
                  type="ground"
                />
                <Arrow type="small" />
                <TechTreeItem
                  link="/Panzerjager_I"
                  title="Panzerjager I"
                  item_type="own"
                  text="Panzerjäger I"
                  intname="germ_panzerjager_1"
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
                <TreeFolder name="Pz.III B/E" img="germ_prewar_pz_iii_group">
                  <TechTreeItem
                    link="/Pz.III_E"
                    title="Pz.III E"
                    item_type="own"
                    text="Pz.III E"
                    intname="germ_pzkpfw_iii_ausf_e"
                    type="ground"
                  />
                  <Arrow type="small" />
                  <TechTreeItem
                    link="/Pz.III_B"
                    title="Pz.III B"
                    item_type="own"
                    text="Pz.III B"
                    intname="germ_pzkpfw_iii_ausf_b"
                    type="ground"
                  />
                </TreeFolder>
                <Arrow type="small" />
                <TreeFolder name="Pz.III F/J" img="germ_pz_iii_early_group">
                  <TechTreeItem
                    link="/Pz.III_F"
                    title="Pz.III F"
                    item_type="own"
                    text="Pz.III F"
                    intname="germ_pzkpfw_iii_ausf_f"
                    type="ground"
                  />
                  <Arrow type="small" />
                  <TechTreeItem
                    link="/Pz.III_J"
                    title="Pz.III J"
                    item_type="own"
                    text="Pz.III J"
                    intname="germ_pzkpfw_iii_ausf_j_l42"
                    type="ground"
                  />
                </TreeFolder>
                <EmptyDiv />
              </td>
              <td>
                <TreeFolder name="Pz.II C/F" img="germ_pzkpfw_ii_early_group">
                  <TechTreeItem
                    link="/Pz.II_C"
                    title="Pz.II C"
                    item_type="own"
                    text="Pz.II C"
                    intname="germ_pzkpfw_ii_ausf_c"
                    type="ground"
                  />
                  <Arrow type="small" />
                  <TechTreeItem
                    link="/Pz.II_F"
                    title="Pz.II F"
                    item_type="own"
                    text="Pz.II F"
                    intname="germ_pzkpfw_ii_ausf_f"
                    type="ground"
                  />
                </TreeFolder>
                <Arrow type="small" />
                <TechTreeItem
                  link="/Pz.IV_C"
                  title="Pz.IV C"
                  item_type="own"
                  text="Pz.IV C"
                  intname="germ_pzkpfw_iv_ausf_c"
                  type="ground"
                />
                <Arrow type="small" />
                <TechTreeItem
                  link="/Pz.IV_E"
                  title="Pz.IV E"
                  item_type="own"
                  text="Pz.IV E"
                  intname="germ_pzkpfw_iv_ausf_e"
                  type="ground"
                />
              </td>
              <td>
                <TechTreeItem
                  link="/Flakpanzer_I"
                  title="Flakpanzer I"
                  item_type="own"
                  text="Flakpanzer I"
                  intname="germ_flakpanzer_i_ausf_a"
                  type="ground"
                />
                <Arrow type="small" />
                <TechTreeItem
                  link="/Flakpanzer_38"
                  title="Flakpanzer 38"
                  item_type="own"
                  text="Flakpanzer 38"
                  intname="germ_flakpanzer_38t_gepard"
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
                  link="/Pz.35(t)"
                  title="Pz.35(t)"
                  item_type="own"
                  text="Pz.35(t)"
                  intname="germ_pzkpfw_35t"
                  type="ground"
                />
                <Arrow type="small" />
                <TreeFolder name="Pz.38(t) A/F" img="germ_pzkpfw_38t_group">
                  <TechTreeItem
                    link="/Pz.38(t)_A"
                    title="Pz.38(t) A"
                    item_type="own"
                    text="Pz.38(t) A"
                    intname="germ_pzkpfw_38t_ausf_a"
                    type="ground"
                  />
                  <Arrow type="small" />
                  <TechTreeItem
                    link="/Pz.38(t)_F"
                    title="Pz.38(t) F"
                    item_type="own"
                    text="Pz.38(t) F"
                    intname="germ_pzkpfw_38t_ausf_f"
                    type="ground"
                  />
                </TreeFolder>
                <Arrow type="small" />
                <TechTreeItem
                  link="/StuG_III_A"
                  title="StuG III A"
                  item_type="own"
                  text="StuG III A"
                  intname="germ_stug_iii_ausf_a"
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
                  link="/Pz.II_C_TD"
                  title="Pz.II C TD"
                  item_type="own"
                  text="Pz.II C TD"
                  intname="germ_pzkpfw_ii_ausf_c_td"
                  type="ground"
                />
                <EmptyDiv />
                <TechTreeItem
                  link="/Pz.II_C_(DAK)"
                  title="Pz.II C (DAK)"
                  item_type="prem"
                  text="Pz.II C (DAK)"
                  intname="germ_pzkpfw_ii_ausf_c_dak"
                  type="ground"
                />
                <EmptyDiv />
                <TechTreeItem
                  link="/Sd.Kfz._140/1"
                  title="Sd.Kfz. 140/1"
                  item_type="prem"
                  text="Sd.Kfz. 140/1"
                  intname="germ_pzkpfw_38t_aufklarungspanzer"
                  type="ground"
                />
                <EmptyDiv />
                <TechTreeItem
                  link="/Nb.Fz."
                  title="Nb.Fz."
                  item_type="prem"
                  text="Nb.Fz."
                  intname="germ_nbfz_vi"
                  type="ground"
                />
                <EmptyDiv />
              </td>
              <td>
                <TechTreeItem
                  link="/Sd.Kfz.251/10"
                  title="Sd.Kfz.251/10"
                  item_type="prem"
                  text="Sd.Kfz.251/10"
                  intname="germ_sdkfz_251_10"
                  type="ground"
                />
                <EmptyDiv />
                <TechTreeItem
                  link="/Sd.Kfz.234/1"
                  title="Sd.Kfz.234/1"
                  item_type="prem"
                  text="Sd.Kfz.234/1"
                  intname="germ_sdkfz_234_1"
                  type="ground"
                />
                <EmptyDiv />
                <TechTreeItem
                  link="/Sd.Kfz.234/3"
                  title="Sd.Kfz.234/3"
                  item_type="prem"
                  text="Sd.Kfz.234/3"
                  intname="germ_sdkfz_234_3"
                  type="ground"
                />
                <EmptyDiv />
              </td>
            </tr>
            <tr>
              <Rank rank="II" />
              <td>
                <TechTreeItem
                  link="/Sd.Kfz.234/2"
                  title="Sd.Kfz.234/2"
                  item_type="own"
                  text="Sd.Kfz.234/2"
                  intname="germ_sdkfz_234_2"
                  type="ground"
                />
                <Arrow type="small" />
                <TreeFolder name="Marder III/III H" img="germ_marder_iii_group">
                  <TechTreeItem
                    link="/Marder_III"
                    title="Marder III"
                    item_type="own"
                    text="Marder III"
                    intname="germ_pzkpfw_38t_marder_iii"
                    type="ground"
                  />
                  <Arrow type="small" />
                  <TechTreeItem
                    link="/Marder_III_H"
                    title="Marder III H"
                    item_type="own"
                    text="Marder III H"
                    intname="germ_pzkpfw_38t_marder_iii_ausf_h"
                    type="ground"
                  />
                </TreeFolder>
                <Arrow type="small" />
                <TechTreeItem
                  link="/Dicker_Max"
                  title="Dicker Max"
                  item_type="own"
                  text="Dicker Max"
                  intname="germ_pzsfl_iva_dickermax"
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
                  link="/Pz.III_J1"
                  title="Pz.III J1"
                  item_type="own"
                  text="Pz.III J1"
                  intname="germ_pzkpfw_iii_ausf_j"
                  type="ground"
                />
                <Arrow type="small" />
                <TreeFolder name="Pz.III L/M" img="germ_pzkpfw_iii_group">
                  <TechTreeItem
                    link="/Pz.III_L"
                    title="Pz.III L"
                    item_type="own"
                    text="Pz.III L"
                    intname="germ_pzkpfw_iii_ausf_l"
                    type="ground"
                  />
                  <Arrow type="small" />
                  <TechTreeItem
                    link="/Pz.III_M"
                    title="Pz.III M"
                    item_type="own"
                    text="Pz.III M"
                    intname="germ_pzkpfw_iii_ausf_m"
                    type="ground"
                  />
                </TreeFolder>
                <EmptyDiv />
              </td>
              <td>
                <TechTreeItem
                  link="/Pz.IV_F1"
                  title="Pz.IV F1"
                  item_type="own"
                  text="Pz.IV F1"
                  intname="germ_pzkpfw_iv_ausf_f"
                  type="ground"
                />
                <Arrow type="small" />
                <TreeFolder name="Pz.IV F2/G" img="pzkpfw_iv_fg_group">
                  <TechTreeItem
                    link="/Pz.IV_F2"
                    title="Pz.IV F2"
                    item_type="own"
                    text="Pz.IV F2"
                    intname="germ_pzkpfw_iv_ausf_f2"
                    type="ground"
                  />
                  <Arrow type="small" />
                  <TechTreeItem
                    link="/Pz.IV_G"
                    title="Pz.IV G"
                    item_type="own"
                    text="Pz.IV G"
                    intname="germ_pzkpfw_iv_ausf_g"
                    type="ground"
                  />
                </TreeFolder>
                <Arrow type="small" />
                <TreeFolder name="Pz.IV H/J" img="germ_pzkpfw_iv_late_group">
                  <TechTreeItem
                    link="/Pz.IV_H"
                    title="Pz.IV H"
                    item_type="own"
                    text="Pz.IV H"
                    intname="germ_pzkpfw_iv_ausf_h"
                    type="ground"
                  />
                  <Arrow type="small" />
                  <TechTreeItem
                    link="/Pz.IV_J"
                    title="Pz.IV J"
                    item_type="own"
                    text="Pz.IV J"
                    intname="germ_pzkpfw_iv_ausf_j"
                    type="ground"
                  />
                </TreeFolder>
              </td>
              <td>
                <TechTreeItem
                  link="/Sd.Kfz._6/2"
                  title="Sd.Kfz. 6/2"
                  item_type="own"
                  text="Sd.Kfz. 6/2"
                  intname="germ_sdkfz_6_2_flak36"
                  type="ground"
                />
                <Arrow type="small" />
                <TechTreeItem
                  link="/Sd.Kfz.251/21"
                  title="Sd.Kfz.251/21"
                  item_type="own"
                  text="Sd.Kfz.251/21"
                  intname="germ_sdkfz_251_21"
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
                  link="/StuH_42_G"
                  title="StuH 42 G"
                  item_type="own"
                  text="StuH 42 G"
                  intname="germ_stuh_iii_ausf_g"
                  type="ground"
                />
                <Arrow type="small" />
                <TechTreeItem
                  link="/StuG_III_F"
                  title="StuG III F"
                  item_type="own"
                  text="StuG III F"
                  intname="germ_stug_iii_ausf_f"
                  type="ground"
                />
                <Arrow type="small" />
                <TechTreeItem
                  link="/StuG_III_G"
                  title="StuG III G"
                  item_type="own"
                  text="StuG III G"
                  intname="germ_stug_iii_ausf_g"
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
                  link="/Pz.III_J1_TD"
                  title="Pz.III J1 TD"
                  item_type="own"
                  text="Pz.III J1 TD"
                  intname="germ_pzkpfw_iii_ausf_j_td"
                  type="ground"
                />
                <EmptyDiv />
                <TechTreeItem
                  link="/Pz.III_N"
                  title="Pz.III N"
                  item_type="prem"
                  text="Pz.III N"
                  intname="germ_pzkpfw_iii_ausf_n"
                  type="ground"
                />
                <EmptyDiv />
                <TechTreeItem
                  link="/15_cm_Pz.W.42"
                  title="15 cm Pz.W.42"
                  item_type="prem"
                  text="15 cm Pz.W.42"
                  intname="germ_panzerwerfer_42"
                  type="ground"
                />
                <EmptyDiv />
                <TechTreeItem
                  link="/T_34_747_(r)_(Germany)"
                  title="T 34 747 (r) (Germany)"
                  item_type="prem"
                  text="▀T 34 747 (r)"
                  intname="germ_t_34_747"
                  type="ground"
                />
                <EmptyDiv />
              </td>
              <td>
                <TechTreeItem
                  link="/Sd.Kfz.234/2_TD"
                  title="Sd.Kfz.234/2 TD"
                  item_type="own"
                  text="Sd.Kfz.234/2 TD"
                  intname="germ_sdkfz_234_2_td"
                  type="ground"
                />
                <EmptyDiv />
                <TechTreeItem
                  link="/Pz.Sfl.Ic"
                  title="Pz.Sfl.Ic"
                  item_type="prem"
                  text="Pz.Sfl.Ic"
                  intname="germ_pzkpfw_ii_ausf_h"
                  type="ground"
                />
                <EmptyDiv />
                <TechTreeItem
                  link="/Sd.Kfz.251/22"
                  title="Sd.Kfz.251/22"
                  item_type="prem"
                  text="Sd.Kfz.251/22"
                  intname="germ_sdkfz_251_22"
                  type="ground"
                />
                <EmptyDiv />
              </td>
            </tr>
            <tr>
              <Rank rank="III" />
              <td>
                <TechTreeItem
                  link="/8,8_cm_Flak_37_Sfl."
                  title="8,8 cm Flak 37 Sfl."
                  item_type="own"
                  text="8,8 cm Flak 37 Sfl."
                  intname="germ_sdkfz_9_flak37"
                  type="ground"
                />
                <Arrow type="small" />
                <TechTreeItem
                  link="/Sturer_Emil"
                  title="Sturer Emil"
                  item_type="own"
                  text="Sturer Emil"
                  intname="germ_pzsflk40_sturer_emil"
                  type="ground"
                />
                <Arrow type="small" />
                <TechTreeItem
                  link="/Nashorn"
                  title="Nashorn"
                  item_type="own"
                  text="Nashorn"
                  intname="germ_panzerjager_nashorn"
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
                  link="/Tiger_H1"
                  title="Tiger H1"
                  item_type="own"
                  text="Tiger H1"
                  intname="germ_pzkpfw_vi_ausf_h1_tiger"
                  type="ground"
                />
                <Arrow type="small" />
                <TechTreeItem
                  link="/Tiger_E"
                  title="Tiger E"
                  item_type="own"
                  text="Tiger E"
                  intname="germ_pzkpfw_vi_ausf_e_tiger"
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
                  <img src="./images/Arrow_center_small.png" alt="Arrow_center_small.png" />
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
                  link="/Panther_D"
                  title="Panther D"
                  item_type="own"
                  text="Panther D"
                  intname="germ_pzkpfw_v_ausf_d_panther"
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
                  <img src="./images/Arrow_center_small.png" alt="Arrow_center_small.png" />
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
                  <img src="./images/Arrow_center_small.png" alt="Arrow_center_small.png" />
                  <br />
                  <img src="./images/Arrow_center.png" alt="Arrow_center.png" />
                  <br />
                  <img src="./images/Arrow_head.png" alt="Arrow_head.png" />
                </div>
              </td>
              <td>
                <TechTreeItem
                  link="/Wirbelwind"
                  title="Wirbelwind"
                  item_type="own"
                  text="Wirbelwind"
                  intname="germ_flakpanzer_iv_wirbelwind"
                  type="ground"
                />
                <Arrow type="small" />
                <TechTreeItem
                  link="/Ostwind"
                  title="Ostwind"
                  item_type="own"
                  text="Ostwind"
                  intname="germ_flakpanzer_iv_ostwind"
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
                  <img src="./images/Arrow_center_small.png" alt="Arrow_center_small.png" />
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
                  link="/Jagdpanzer_38(t)"
                  title="Jagdpanzer 38(t)"
                  item_type="own"
                  text="Jagdpanzer 38(t)"
                  intname="germ_jgdpz_38t"
                  type="ground"
                />
                <Arrow type="small" />
                <TechTreeItem
                  link="/Jagdpanzer_IV"
                  title="Jagdpanzer IV"
                  item_type="own"
                  text="Jagdpanzer IV"
                  intname="germ_jgdpz_iv_l48"
                  type="ground"
                />
                <Arrow type="small" />
                <TechTreeItem
                  link="/Panzer_IV/70(V)"
                  title="Panzer IV/70(V)"
                  item_type="own"
                  text="Panzer IV/70(V)"
                  intname="germ_pz_iv_l70"
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
              <td style={{ borderLeft: "solid 1px #cccccc" }}>
                <TechTreeItem
                  link="/KW_II_754_(r)_(Germany)"
                  title="KW II 754 (r) (Germany)"
                  item_type="prem"
                  text="▀KW II 754 (r)"
                  intname="germ_kv_2_754r"
                  type="ground"
                />
                <EmptyDiv />
                <TechTreeItem
                  link="/Pz.Bef.Wg.IV_J"
                  title="Pz.Bef.Wg.IV J"
                  item_type="prem"
                  text="Pz.Bef.Wg.IV J"
                  intname="germ_panzerbefelhswagen_iv_ausf_j"
                  type="ground"
                />
                <EmptyDiv />
                <TechTreeItem
                  link="/Pz.Kpfw._Churchill_(Germany)"
                  title="Pz.Kpfw. Churchill (Germany)"
                  item_type="prem"
                  text="▀Pz.Kpfw. Churchill"
                  intname="germ_infanterie_kampfpanzer_churchill"
                  type="ground"
                />
                <EmptyDiv />
                <TechTreeItem
                  link="/Brummbar"
                  title="Brummbar"
                  item_type="prem"
                  text="Brummbär"
                  intname="germ_sturmpanzer_iv_brummbar"
                  type="ground"
                />
                <EmptyDiv />
                <TechTreeItem
                  link="/Panzer_IV/70(A)"
                  title="Panzer IV/70(A)"
                  item_type="prem"
                  text="Panzer IV/70(A)"
                  intname="germ_pz_iv_l70_a"
                  type="ground"
                />
                <EmptyDiv />
                <TechTreeItem
                  link="/KW_I_C_756_(r)_(Germany)"
                  title="KW I C 756 (r) (Germany)"
                  item_type="prem"
                  text="▀KW I C 756 (r)"
                  intname="germ_kv_1_kwk_40"
                  type="ground"
                />
                <EmptyDiv />
              </td>
              <td>
                <TechTreeItem
                  link="/Sd.Kfz.234/4"
                  title="Sd.Kfz.234/4"
                  item_type="prem"
                  text="Sd.Kfz.234/4"
                  intname="germ_sdkfz_234_4"
                  type="ground"
                />
                <EmptyDiv />
                <TechTreeItem
                  link="/M4_748_(a)_(Germany)"
                  title="M4 748 (a) (Germany)"
                  item_type="prem"
                  text="▀M4 748 (a)"
                  intname="us_m4a2_1944_germ"
                  type="ground"
                />
                <EmptyDiv />
                <TechTreeItem
                  link="/KV-IB_(Germany)"
                  title="KV-IB (Germany)"
                  item_type="prem"
                  text="▀KV-IB"
                  intname="germ_kv_1b_finland"
                  type="ground"
                />
                <EmptyDiv />
                <TechTreeItem
                  link="/VFW"
                  title="VFW"
                  item_type="prem"
                  text="VFW"
                  intname="germ_vsw_flak_41"
                  type="ground"
                />
                <EmptyDiv />
                <TechTreeItem
                  link="/Ersatz_M10"
                  title="Ersatz M10"
                  item_type="prem"
                  text="Ersatz M10"
                  intname="germ_pzkpfw_v_ersatz_m10"
                  type="ground"
                />
                <EmptyDiv />
                <TechTreeItem
                  link="/Tiger_(Germany)"
                  title="Tiger (Germany)"
                  item_type="prem"
                  text="␠Tiger"
                  intname="germ_pzkpfw_vi_ausf_h1_tiger_animal_version"
                  type="ground"
                />
                <EmptyDiv />
                <TechTreeItem
                  link="/VK_45.01_(P)"
                  title="VK 45.01 (P)"
                  item_type="prem"
                  text="VK 45.01 (P)"
                  intname="germ_pzkpfw_vi_tiger_p"
                  type="ground"
                />
                <EmptyDiv />
              </td>
            </tr>
            <tr>
              <Rank rank="IV" />
              <td>
                <TechTreeItem
                  link="/Waffentrager"
                  title="Waffentrager"
                  item_type="own"
                  text="Waffenträger"
                  intname="germ_waffentrager_krupp_steyr"
                  type="ground"
                />
                <Arrow type="small" />
                <TechTreeItem
                  link="/LeKPz_M41"
                  title="LeKPz M41"
                  item_type="own"
                  text="leKPz M41"
                  intname="germ_le_kpz_m41"
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
                  link="/Tiger_II_(P)"
                  title="Tiger II (P)"
                  item_type="own"
                  text="Tiger II (P)"
                  intname="germ_pzkpfw_vi_ausf_b_tiger_iip"
                  type="ground"
                />
                <Arrow type="small" />
                <TechTreeItem
                  link="/Tiger_II_(H)"
                  title="Tiger II (H)"
                  item_type="own"
                  text="Tiger II (H)"
                  intname="germ_pzkpfw_vi_ausf_b_tiger_iih"
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
                <TreeFolder name="Panther A/F" img="germ_pzkpfw_v_a_g_group">
                  <TechTreeItem
                    link="/Panther_A"
                    title="Panther A"
                    item_type="own"
                    text="Panther A"
                    intname="germ_pzkpfw_v_ausf_a_panther"
                    type="ground"
                  />
                  <Arrow type="small" />
                  <TechTreeItem
                    link="/Panther_F"
                    title="Panther F"
                    item_type="own"
                    text="Panther F"
                    intname="germ_pzkpfw_v_ausf_f_panther"
                    type="ground"
                  />
                </TreeFolder>
                <Arrow type="small" />
                <TechTreeItem
                  link="/Panther_G"
                  title="Panther G"
                  item_type="own"
                  text="Panther G"
                  intname="germ_pzkpfw_v_ausf_g_panther"
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
                  link="/Ostwind_II"
                  title="Ostwind II"
                  item_type="own"
                  text="Ostwind II"
                  intname="germ_flakpanzer_iv_ostwind_2"
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
                  <img src="./images/Arrow_center_small.png" alt="Arrow_center_small.png" />
                  <br />
                  <img src="./images/Arrow_center.png" alt="Arrow_center.png" />
                  <br />
                  <img src="./images/Arrow_head.png" alt="Arrow_head.png" />
                </div>
              </td>
              <td>
                <TechTreeItem
                  link="/Jagdpanther"
                  title="Jagdpanther"
                  item_type="own"
                  text="Jagdpanther"
                  intname="germ_panzerjager_panther"
                  type="ground"
                />
                <Arrow type="small" />
                <TechTreeItem
                  link="/JPz_4-5"
                  title="JPz 4-5"
                  item_type="own"
                  text="JPz 4-5"
                  intname="germ_kanonenjagdpanzer"
                  type="ground"
                />
                <Arrow type="small" />
                <TechTreeItem
                  link="/Ferdinand"
                  title="Ferdinand"
                  item_type="own"
                  text="Ferdinand"
                  intname="germ_panzerjager_tiger_p_ferdinand"
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
                  link="/Pz.Bef.Wg.VI_P"
                  title="Pz.Bef.Wg.VI P"
                  item_type="prem"
                  text="Pz.Bef.Wg.VI P"
                  intname="germ_panzerbefelhswagen_vi_p"
                  type="ground"
                />
                <EmptyDiv />
                <TechTreeItem
                  link="/Bfw._Jagdpanther"
                  title="Bfw. Jagdpanther"
                  item_type="prem"
                  text="Bfw. Jagdpanther"
                  intname="germ_panzerbefelhswagen_jagdpanther"
                  type="ground"
                />
                <EmptyDiv />
                <TechTreeItem
                  link="/Elefant"
                  title="Elefant"
                  item_type="prem"
                  text="Elefant"
                  intname="germ_panzerjager_tiger_p_elefant"
                  type="ground"
                />
                <EmptyDiv />
                <TechTreeItem
                  link="/Panther_II"
                  title="Panther II"
                  item_type="own"
                  text="Panther II"
                  intname="germ_panther_ii"
                  type="ground"
                />
                <EmptyDiv />
              </td>
              <td>
                <TechTreeItem
                  link="/Tiger_II_(H)_Sla.16"
                  title="Tiger II (H) Sla.16"
                  item_type="prem"
                  text="Tiger II (H) Sla.16"
                  intname="germ_pzkpfw_vi_ausf_b_tiger_iih_sla"
                  type="ground"
                />
                <EmptyDiv />
                <TechTreeItem
                  link="/Ru_251"
                  title="Ru 251"
                  item_type="prem"
                  text="Ru 251"
                  intname="germ_ru251"
                  type="ground"
                />
                <EmptyDiv />
                <TechTreeItem
                  link="/Flakpanzer_341"
                  title="Flakpanzer 341"
                  item_type="own"
                  text="Flakpanzer 341"
                  intname="germ_flakpanzer_v_coelian"
                  type="ground"
                />
                <EmptyDiv />
              </td>
            </tr>
            <tr>
              <Rank rank="V" />
              <td>
                <TechTreeItem
                  link="/Marder_A1-"
                  title="Marder A1-"
                  item_type="own"
                  text="Marder A1-"
                  intname="germ_marder_1a1"
                  type="ground"
                />
                <Arrow type="small" />
                <TechTreeItem
                  link="/SPz_BMP-1"
                  title="SPz BMP-1"
                  item_type="own"
                  text="SPz BMP-1"
                  intname="germ_bmp_1_ddr"
                  type="ground"
                />
                <Arrow type="small" />
                <TechTreeItem
                  link="/Marder_1A3"
                  title="Marder 1A3"
                  item_type="own"
                  text="Marder 1A3"
                  intname="germ_marder_1a3"
                  type="ground"
                />
                <Arrow type="small" />
              </td>
              <td>
                <TechTreeItem
                  link="/M48A2_C"
                  title="M48A2 C"
                  item_type="own"
                  text="M48A2 C"
                  intname="germ_mkpz_m48a2c"
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
                  link="/Leopard_I"
                  title="Leopard I"
                  item_type="own"
                  text="Leopard I"
                  intname="germ_leopard_i"
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
                  link="/Kugelblitz"
                  title="Kugelblitz"
                  item_type="own"
                  text="Kugelblitz"
                  intname="germ_flakpanzer_iv_kugelblitz"
                  type="ground"
                />
                <Arrow type="small" />
                <TechTreeItem
                  link="/Wiesel_1A4"
                  title="Wiesel 1A4"
                  item_type="own"
                  text="Wiesel 1A4"
                  intname="germ_wiesel_1_mk20"
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
                  link="/Jagdtiger"
                  title="Jagdtiger"
                  item_type="own"
                  text="Jagdtiger"
                  intname="germ_panzerjager_tiger"
                  type="ground"
                />
                <Arrow type="small" />
                <TechTreeItem
                  link="/DF105"
                  title="DF105"
                  item_type="own"
                  text="DF105"
                  intname="germ_marder_df_105"
                  type="ground"
                />
                <Arrow type="small" />
                <TechTreeItem
                  link="/RakJPz_2"
                  title="RakJPz 2"
                  item_type="own"
                  text="RakJPz 2"
                  intname="germ_raketenjagdpanzer_2"
                  type="ground"
                />
                <Arrow type="small" />
              </td>
              <td style={{ borderLeft: "solid 1px #cccccc" }}>
                <TechTreeItem
                  link="/MKPz_M47_G"
                  title="MKPz M47 G"
                  item_type="prem"
                  text="mKPz M47 G"
                  intname="germ_mkpz_m47"
                  type="ground"
                />
                <EmptyDiv />
                <TechTreeItem
                  link="/Turm_III"
                  title="Turm III"
                  item_type="prem"
                  text="Turm III"
                  intname="germ_erprobungstrager_3_achs_turm"
                  type="ground"
                />
                <EmptyDiv />
              </td>
              <td>
                <TechTreeItem
                  link="/Tiger_II_(10.5_cm_Kw.K)"
                  title="Tiger II (10.5 cm Kw.K)"
                  item_type="own"
                  text="Tiger II (10.5 cm Kw.K)"
                  intname="germ_pzkpfw_vi_ausf_b_tiger_iih_kwk46"
                  type="ground"
                />
                <EmptyDiv />
                <TechTreeItem
                  link="/E-100"
                  title="E-100"
                  item_type="own"
                  text="E-100"
                  intname="germ_pzkpfw_e_100"
                  type="ground"
                />
                <EmptyDiv />
                <TechTreeItem
                  link="/Maus"
                  title="Maus"
                  item_type="own"
                  text="Maus"
                  intname="germ_pzkpfw_maus"
                  type="ground"
                />
                <EmptyDiv />
              </td>
            </tr>
            <tr>
              <Rank rank="VI" />
              <td>
                <TechTreeItem
                  link="/TAM"
                  title="TAM"
                  item_type="own"
                  text="TAM"
                  intname="germ_thyssen_henschel_tam"
                  type="ground"
                />
                <Arrow type="small" />
                <TechTreeItem
                  link="/PUMA"
                  title="PUMA"
                  item_type="own"
                  text="PUMA"
                  intname="germ_schutzenpanzer_puma"
                  type="ground"
                />
                <Arrow type="small" />
                <TechTreeItem
                  link="/Begleitpanzer_57"
                  title="Begleitpanzer 57"
                  item_type="own"
                  text="Begleitpanzer 57"
                  intname="germ_begleitpanzer_57"
                  type="ground"
                />
                <Arrow type="small" />
                <TechTreeItem
                  link="/Radkampfwagen_90"
                  title="Radkampfwagen 90"
                  item_type="own"
                  text="Radkampfwagen 90"
                  intname="germ_radpanzer_90"
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
                  link="/M48A2_G_A2"
                  title="M48A2 G A2"
                  item_type="own"
                  text="M48A2 G A2"
                  intname="germ_mkpz_m48a2ga2"
                  type="ground"
                />
                <Arrow type="small" />
                <TechTreeItem
                  link="/M48_Super"
                  title="M48 Super"
                  item_type="own"
                  text="M48 Super"
                  intname="germ_mkpz_super_m48"
                  type="ground"
                />
                <Arrow type="small" />
                <TechTreeItem
                  link="/KPz-70"
                  title="KPz-70"
                  item_type="own"
                  text="KPz-70"
                  intname="germ_kpz_70"
                  type="ground"
                />
              </td>
              <td>
                <TreeFolder name="Leopard A1A1/1A5" img="germ_leopard_1_late_group">
                  <TechTreeItem
                    link="/Leopard_A1A1"
                    title="Leopard A1A1"
                    item_type="own"
                    text="Leopard A1A1"
                    intname="germ_leopard_i_a1"
                    type="ground"
                  />
                  <Arrow type="small" />
                  <TechTreeItem
                    link="/Leopard_1A5"
                    title="Leopard 1A5"
                    item_type="own"
                    text="Leopard 1A5"
                    intname="germ_leopard_1a5"
                    type="ground"
                  />
                </TreeFolder>
                <Arrow type="small" />
                <TechTreeItem
                  link="/Leopard_2K"
                  title="Leopard 2K"
                  item_type="own"
                  text="Leopard 2K"
                  intname="germ_leopard_2k"
                  type="ground"
                />
                <Arrow type="small" />
                <TechTreeItem
                  link="/Leopard_2A4"
                  title="Leopard 2A4"
                  item_type="own"
                  text="Leopard 2A4"
                  intname="germ_leopard_2a4"
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
                  link="/Gepard"
                  title="Gepard"
                  item_type="own"
                  text="Gepard"
                  intname="germ_flakpz_i_gepard"
                  type="ground"
                />
                <Arrow type="small" />
                <TechTreeItem
                  link="/Ozelot"
                  title="Ozelot"
                  item_type="own"
                  text="Ozelot"
                  intname="germ_wiesel_2_adwc"
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
                  <img src="./images/Arrow_center_small.png" alt="Arrow_center_small.png" />
                  <br />
                  <img src="./images/Arrow_center.png" alt="Arrow_center.png" />
                  <br />
                  <img src="./images/Arrow_head.png" alt="Arrow_head.png" />
                </div>
              </td>
              <td>
                <TechTreeItem
                  link="/RakJPz_2_(HOT)"
                  title="RakJPz 2 (HOT)"
                  item_type="own"
                  text="RakJPz 2 (HOT)"
                  intname="germ_raketenjagdpanzer_2_hot"
                  type="ground"
                />
                <Arrow type="small" />
                <TechTreeItem
                  link="/JaPz.K_A2"
                  title="JaPz.K A2"
                  item_type="own"
                  text="JaPz.K A2"
                  intname="germ_sk105_a2"
                  type="ground"
                />
                <Arrow type="small" />
                <TechTreeItem
                  link="/Wiesel_1A2"
                  title="Wiesel 1A2"
                  item_type="own"
                  text="Wiesel 1A2"
                  intname="germ_wiesel_1_tow"
                  type="ground"
                />
              </td>
              <td style={{ borderLeft: "solid 1px #cccccc" }}>
                <TechTreeItem
                  link="/TAM_2IP"
                  title="TAM 2IP"
                  item_type="prem"
                  text="TAM 2IP"
                  intname="germ_thyssen_henschel_tam_2ip"
                  type="ground"
                />
                <EmptyDiv />
                <TechTreeItem
                  link="/Leopard_A1A1_(L/44)"
                  title="Leopard A1A1 (L/44)"
                  item_type="prem"
                  text="Leopard A1A1 (L/44)"
                  intname="germ_leopard_a1a1_120"
                  type="ground"
                />
                <EmptyDiv />
                <TechTreeItem
                  link="/Leopard_2_(PzBtl_123)"
                  title="Leopard 2 (PzBtl 123)"
                  item_type="prem"
                  text="Leopard 2 (PzBtl 123)"
                  intname="germ_leopard_2a4_pzbtl_123"
                  type="ground"
                />
                <EmptyDiv />
              </td>
              <td>
                <TechTreeItem
                  link="/VT1-2"
                  title="VT1-2"
                  item_type="own"
                  text="VT1-2"
                  intname="germ_vt_1_2"
                  type="ground"
                />
                <EmptyDiv />
                <TechTreeItem
                  link="/Class_3_(P)"
                  title="Class 3 (P)"
                  item_type="own"
                  text="Class 3 (P)"
                  intname="germ_th_800_bismark"
                  type="ground"
                />
                <EmptyDiv />
                <TechTreeItem
                  link="/C2A1"
                  title="C2A1"
                  item_type="own"
                  text="C2A1"
                  intname="germ_leopard_c2_mexas"
                  type="ground"
                />
                <EmptyDiv />
                <TechTreeItem
                  link="/PT-16/T14_mod."
                  title="PT-16/T14 mod."
                  item_type="own"
                  text="PT-16/T14 mod."
                  intname="germ_leopard_2_pt14"
                  type="ground"
                />
                <EmptyDiv />
                <TechTreeItem
                  link="/Leopard_2AV"
                  title="Leopard 2AV"
                  item_type="own"
                  text="Leopard 2AV"
                  intname="germ_leopard_2av"
                  type="ground"
                />
              </td>
            </tr>
            <tr>
              <Rank rank="VII" />
              <td>
                <TechTreeItem
                  link="/TAM_2C"
                  title="TAM 2C"
                  item_type="own"
                  text="TAM 2C"
                  intname="germ_thyssen_henschel_tam_2c"
                  type="ground"
                />
                <EmptyDiv />
              </td>
              <td>
                <EmptyDiv />
              </td>
              <td>
                <TechTreeItem
                  link="/Leopard_2A5"
                  title="Leopard 2A5"
                  item_type="own"
                  text="Leopard 2A5"
                  intname="germ_leopard_2a5"
                  type="ground"
                />
                <Arrow type="small" />
                <TechTreeItem
                  link="/Leopard_2A6"
                  title="Leopard 2A6"
                  item_type="own"
                  text="Leopard 2A6"
                  intname="germ_leopard_2a6"
                  type="ground"
                />
                <EmptyDiv />
              </td>
              <td>
                <TechTreeItem
                  link="/FlaRakPz_1"
                  title="FlaRakPz 1"
                  item_type="own"
                  text="FlaRakPz 1"
                  intname="germ_flarakpz_1"
                  type="ground"
                />
                <Arrow type="small" />
                <TechTreeItem
                  link="/FlaRakRad"
                  title="FlaRakRad"
                  item_type="own"
                  text="FlaRakRad"
                  intname="germ_flarakrad"
                  type="ground"
                />
                <EmptyDiv />
              </td>
              <td>
                <EmptyDiv />
              </td>
              <td style={{ borderLeft: "solid 1px #cccccc" }}>
                <TechTreeItem
                  link="/Leopard_2_PL"
                  title="Leopard 2 PL"
                  item_type="squad"
                  text="Leopard 2 PL"
                  intname="germ_leopard_2pl"
                  type="ground"
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
        <a href="https://yewtu.be/zSQjqu6dcg8">
          <b>Climbing the ranks with German tanks</b> - <i>War Thunder Official Channel</i>
        </a>
        <a href="https://yewtu.be/ECz5ah4dMvQ">
          <b>Germany ground forces Tier I - Review and Analysis</b> - <i>Oxy</i>
        </a>
        <a href="https://yewtu.be/fMjYjmXwzwA">
          <b>Germany ground forces Tier II - Review and Analysis</b> - <i>Oxy</i>
        </a>
        <a href="https://yewtu.be/GsCIbQ6TKIQ">
          <b>Germany ground forces Tier III - Review and Analysis</b> - <i>Oxy</i>
        </a>
        <a href="https://yewtu.be/XHXnRCjJI6g">
          <b>Germany ground forces Tier IV - Review and Analysis</b> - <i>Oxy</i>
        </a>
        <a href="https://yewtu.be/UH1uxsgZle8">
          <b>Germany ground forces Tier V - Review and Analysis</b> - <i>Oxy</i>
        </a>
        <a href="https://yewtu.be/Htx2jqp0aEA">
          <b>Germany ground forces Tier VI &amp; VII - Review and Analysis</b> - <i>Oxy</i>
        </a>
      </div>
    </div>
  );
}
