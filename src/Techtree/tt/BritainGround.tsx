import { Arrow } from "../Arrow";
import { EmptyDiv } from "../EmptyDiv";
import { MediaHead } from "../MediaHead";
import { Rank } from "../Rank";
import { Research } from "../Research";
import { TechTreeItem } from "../TechTreeItem";
import { TreeFolder } from "../TreeFolder";

export function BritainGround() {
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
                  link="/A13_Mk_I"
                  title="A13 Mk I"
                  item_type="own"
                  text="A13 Mk I"
                  intname="uk_a_13_mk1"
                  type="ground"
                />
                <Arrow type="small" />
                <TechTreeItem
                  link="/A13_Mk_II"
                  title="A13 Mk II"
                  item_type="own"
                  text="A13 Mk II"
                  intname="uk_a_13_mk2"
                  type="ground"
                />
              </td>
              <td>
                <TechTreeItem
                  link="/Stuart_I"
                  title="Stuart I"
                  item_type="own"
                  text="Stuart I"
                  intname="uk_m3_stuart"
                  type="ground"
                />
                <Arrow type="small" />
                <TechTreeItem
                  link="/Stuart_III"
                  title="Stuart III"
                  item_type="own"
                  text="Stuart III"
                  intname="uk_m3a1_stuart"
                  type="ground"
                />
                <Arrow type="small" />
              </td>
              <td>
                <TechTreeItem
                  link="/Tetrarch_I"
                  title="Tetrarch I"
                  item_type="own"
                  text="Tetrarch I"
                  intname="uk_a17_mk_1_tetrarch"
                  type="ground"
                />
                <Arrow type="small" />
                <TechTreeItem
                  link="/Daimler_Mk_II"
                  title="Daimler Mk II"
                  item_type="own"
                  text="Daimler Mk II"
                  intname="uk_daimler_mk_2"
                  type="ground"
                />
                <Arrow type="small" />
              </td>
              <td>
                <TechTreeItem
                  link="/Light_AA_Mk_I"
                  title="Light AA Mk I"
                  item_type="own"
                  text="Light AA Mk I"
                  intname="uk_vickers_mk_6_aa_mk_1"
                  type="ground"
                />
                <Arrow type="small" />
                <TechTreeItem
                  link="/Staghound_AA"
                  title="Staghound AA"
                  item_type="own"
                  text="Staghound AA"
                  intname="uk_t17e2"
                  type="ground"
                />
                <Arrow type="small" />
              </td>
              <td>
                <EmptyDiv />
              </td>
              <td style={{ borderLeft: "solid 1px #cccccc" }}>
                <TechTreeItem
                  link="/A13_Mk_I_(3rd_R.T.R.)"
                  title="A13 Mk I (3rd R.T.R.)"
                  item_type="prem"
                  text="A13 Mk I (3rd R.T.R.)"
                  intname="uk_a_13_mk1_3rd_rtr"
                  type="ground"
                />
                <EmptyDiv />
                <TechTreeItem
                  link="/Independent"
                  title="Independent"
                  item_type="prem"
                  text="Independent"
                  intname="uk_a1e1_independent"
                  type="ground"
                />
                <EmptyDiv />
              </td>
              <td>
                <TechTreeItem
                  link="/Alecto_I"
                  title="Alecto I"
                  item_type="prem"
                  text="Alecto I"
                  intname="uk_alecto_mk_1"
                  type="ground"
                />
                <EmptyDiv />
                <TechTreeItem
                  link="/A13_Mk_II_1939"
                  title="A13 Mk II 1939"
                  item_type="prem"
                  text="A13 Mk II 1939"
                  intname="uk_a_13_mk2_1939"
                  type="ground"
                />
                <EmptyDiv />
              </td>
            </tr>
            <tr>
              <Rank rank="II" />
              <td>
                <TreeFolder name="Crusader" img="uk_crusader_group">
                  <TechTreeItem
                    link="/Crusader_II"
                    title="Crusader II"
                    item_type="own"
                    text="Crusader II"
                    intname="uk_crusader_mk_2"
                    type="ground"
                  />
                  <Arrow type="small" />
                  <TechTreeItem
                    link="/Crusader_III"
                    title="Crusader III"
                    item_type="own"
                    text="Crusader III"
                    intname="uk_crusader_mk_3"
                    type="ground"
                  />
                </TreeFolder>
                <Arrow type="small" />
                <TreeFolder name="Cromwell" img="uk_cromwell_group">
                  <TechTreeItem
                    link="/Cromwell_V"
                    title="Cromwell V"
                    item_type="own"
                    text="Cromwell V"
                    intname="uk_a27m_cromwell_5"
                    type="ground"
                  />
                  <Arrow type="small" />
                  <TechTreeItem
                    link="/Cromwell_I"
                    title="Cromwell I"
                    item_type="own"
                    text="Cromwell I"
                    intname="uk_a27m_cromwell_1"
                    type="ground"
                  />
                </TreeFolder>
                <Arrow type="small" />
                <TechTreeItem
                  link="/Sherman_II"
                  title="Sherman II"
                  item_type="own"
                  text="Sherman II"
                  intname="uk_sherman_ii"
                  type="ground"
                />
              </td>
              <td>
                <TreeFolder name="Valentine" img="uk_valentine_mk_11_9_group">
                  <TechTreeItem
                    link="/Valentine_I"
                    title="Valentine I"
                    item_type="own"
                    text="Valentine I"
                    intname="uk_valentine_mk_1"
                    type="ground"
                  />
                  <Arrow type="small" />
                  <TechTreeItem
                    link="/Valentine_XI"
                    title="Valentine XI"
                    item_type="own"
                    text="Valentine XI"
                    intname="uk_valentine_mk_11"
                    type="ground"
                  />
                  <Arrow type="small" />
                  <TechTreeItem
                    link="/Valentine_IX"
                    title="Valentine IX"
                    item_type="own"
                    text="Valentine IX"
                    intname="uk_valentine_mk_9"
                    type="ground"
                  />
                </TreeFolder>
                <Arrow type="small" />
                <TechTreeItem
                  link="/Matilda_III"
                  title="Matilda III"
                  item_type="own"
                  text="Matilda III"
                  intname="uk_a_12_mk_2_matilda_2"
                  type="ground"
                />
                <Arrow type="small" />
                <TechTreeItem
                  link="/Churchill_I"
                  title="Churchill I"
                  item_type="own"
                  text="Churchill I"
                  intname="uk_a_22_mk_1_churchill_1941"
                  type="ground"
                />
              </td>
              <td>
                <TechTreeItem
                  link="/Archer"
                  title="Archer"
                  item_type="own"
                  text="Archer"
                  intname="uk_sp_17_pdr_valentine"
                  type="ground"
                />
                <Arrow type="small" />
                <TechTreeItem
                  link="/Gun_Carrier_(3-in)"
                  title="Gun Carrier (3-in)"
                  item_type="own"
                  text="Gun Carrier (3-in)"
                  intname="uk_3_inch_gun_carrier"
                  type="ground"
                />
                <Arrow type="small" />
                <TechTreeItem
                  link="/Achilles"
                  title="Achilles"
                  item_type="own"
                  text="Achilles"
                  intname="uk_17_pdr_m10_achilles"
                  type="ground"
                />
              </td>
              <td>
                <TechTreeItem
                  link="/AEC_AA"
                  title="AEC AA"
                  item_type="own"
                  text="AEC AA"
                  intname="uk_armored_car_mk_2_aa"
                  type="ground"
                />
                <Arrow type="small" />
                <TechTreeItem
                  link="/Crusader_AA_Mk_I"
                  title="Crusader AA Mk I"
                  item_type="own"
                  text="Crusader AA Mk I"
                  intname="uk_crusader_aa_mk_1"
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
                  link="/SARC_MkVI_(2pdr)"
                  title="SARC MkVI (2pdr)"
                  item_type="own"
                  text="SARC MkVI (2pdr)"
                  intname="uk_marmon_herrington_mk_6_2pdr"
                  type="ground"
                />
                <Arrow type="small" />
                <TechTreeItem
                  link="/SARC_MkVI_(6pdr)"
                  title="SARC MkVI (6pdr)"
                  item_type="own"
                  text="SARC MkVI (6pdr)"
                  intname="uk_marmon_herrington_mk_6_6pdr"
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
              <td style={{ borderLeft: "solid 1px #cccccc" }}>
                <TechTreeItem
                  link="/Crusader_%22The_Saint%22"
                  title='Crusader "The Saint"'
                  item_type="prem"
                  text='Crusader "The Saint"'
                  intname="uk_crusader_mk_2_the_saint"
                  type="ground"
                />
                <EmptyDiv />
                <TechTreeItem
                  link="/Cromwell_V_(RP-3)"
                  title="Cromwell V (RP-3)"
                  item_type="prem"
                  text="Cromwell V (RP-3)"
                  intname="uk_a27m_cromwell_5_rp3"
                  type="ground"
                />
                <EmptyDiv />
              </td>
              <td>
                <TechTreeItem
                  link="/A.C.I"
                  title="A.C.I"
                  item_type="prem"
                  text="A.C.I"
                  intname="uk_ac1_sentinel"
                  type="ground"
                />
                <EmptyDiv />
                <TechTreeItem
                  link="/Matilda_Hedgehog"
                  title="Matilda Hedgehog"
                  item_type="prem"
                  text="Matilda Hedgehog"
                  intname="uk_matilda_hedgehog"
                  type="ground"
                />
                <EmptyDiv />
                <TechTreeItem
                  link="/Grant_I"
                  title="Grant I"
                  item_type="prem"
                  text="Grant I"
                  intname="uk_mk1_grant"
                  type="ground"
                />
                <EmptyDiv />
                <TechTreeItem
                  link="/AEC_Mk_II"
                  title="AEC Mk II"
                  item_type="prem"
                  text="AEC Mk II"
                  intname="uk_armored_car_aec_mk_2"
                  type="ground"
                />
                <EmptyDiv />
              </td>
            </tr>
            <tr>
              <Rank rank="III" />
              <td>
                <TechTreeItem
                  link="/Sherman_Firefly"
                  title="Sherman Firefly"
                  item_type="own"
                  text="Sherman Firefly"
                  intname="uk_sherman_vc_firefly"
                  type="ground"
                />
                <Arrow type="small" />
                <TechTreeItem
                  link="/Challenger"
                  title="Challenger"
                  item_type="own"
                  text="Challenger"
                  intname="uk_a30_challenger"
                  type="ground"
                />
                <Arrow type="small" />
                <TechTreeItem
                  link="/Comet_I"
                  title="Comet I"
                  item_type="own"
                  text="Comet I"
                  intname="uk_a_34_comet"
                  type="ground"
                />
                <Arrow type="small" />
              </td>
              <td>
                <TechTreeItem
                  link="/Churchill_III"
                  title="Churchill III"
                  item_type="own"
                  text="Churchill III"
                  intname="uk_a_22b_mk_3_churchill_1942"
                  type="ground"
                />
                <Arrow type="small" />
                <TechTreeItem
                  link="/Churchill_VII"
                  title="Churchill VII"
                  item_type="own"
                  text="Churchill VII"
                  intname="uk_a_22f_mk_7_churchill_1944"
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
                  link="/Avenger"
                  title="Avenger"
                  item_type="own"
                  text="Avenger"
                  intname="uk_a30_sp_avenger"
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
                  link="/Crusader_AA_Mk_II"
                  title="Crusader AA Mk II"
                  item_type="own"
                  text="Crusader AA Mk II"
                  intname="uk_crusader_aa_mk_2"
                  type="ground"
                />
                <Arrow type="small" />
                <TechTreeItem
                  link="/Ystervark"
                  title="Ystervark"
                  item_type="own"
                  text="Ystervark"
                  intname="uk_ystervark_spaa"
                  type="ground"
                />
                <div className="tree-arrow">
                  <img
                    src="./images/Arrow_tail.png"
                    alt="Arrow_tail.png"
                  /><br /><img
                    src="./images/Arrow_center.png"
                    alt="Arrow_center.png"
                  /><br /><img
                    src="./images/Arrow_head.png"
                    alt="Arrow_head.png"
                  />
                </div>
              </td>
              <td>
                <TechTreeItem
                  link="/Concept_3"
                  title="Concept 3"
                  item_type="own"
                  text="Concept 3"
                  intname="uk_concept3_ngac"
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
              <td style={{ borderLeft: "solid 1px #cccccc" }}>
                <TechTreeItem
                  link="/Achilles_(65_Rg.)"
                  title="Achilles (65 Rg.)"
                  item_type="prem"
                  text="Achilles (65 Rg.)"
                  intname="uk_17_pdr_m10_achilles_norfolk_yeomanry"
                  type="ground"
                />
                <EmptyDiv />
                <TechTreeItem
                  link="/Sherman_IC_%22Trzyniec%22"
                  title='Sherman IC "Trzyniec"'
                  item_type="prem"
                  text='Sherman IC "Trzyniec"'
                  intname="uk_sherman_ic_firefly"
                  type="ground"
                />
                <EmptyDiv />
                <TechTreeItem
                  link="/A.C.IV"
                  title="A.C.IV"
                  item_type="prem"
                  text="A.C.IV"
                  intname="uk_ac4_thunderbolt"
                  type="ground"
                />
                <EmptyDiv />
              </td>
              <td>
                <TechTreeItem
                  link="/Excelsior"
                  title="Excelsior"
                  item_type="prem"
                  text="Excelsior"
                  intname="uk_a_33_excelsior"
                  type="ground"
                />
                <EmptyDiv />
                <TechTreeItem
                  link="/Comet_I_%22Iron_Duke_IV%22"
                  title='Comet I "Iron Duke IV"'
                  item_type="prem"
                  text='Comet I "Iron Duke IV"'
                  intname="uk_a_34_comet_iron_duke"
                  type="ground"
                />
                <EmptyDiv />
                <TechTreeItem
                  link="/QF_3.7_Ram"
                  title="QF 3.7 Ram"
                  item_type="prem"
                  text="QF 3.7 Ram"
                  intname="uk_ram_90mm_aa"
                  type="ground"
                />
                <EmptyDiv />
              </td>
            </tr>
            <tr>
              <Rank rank="IV" />
              <td>
                <TechTreeItem
                  link="/Centurion_Mk_1"
                  title="Centurion Mk 1"
                  item_type="own"
                  text="Centurion Mk 1"
                  intname="uk_centurion_mk_1"
                  type="ground"
                />
                <Arrow type="small" />
                <TechTreeItem
                  link="/Centurion_Mk_3"
                  title="Centurion Mk 3"
                  item_type="own"
                  text="Centurion Mk 3"
                  intname="uk_centurion_mk_3"
                  type="ground"
                />
                <Arrow type="small" />
                <TechTreeItem
                  link="/Caernarvon"
                  title="Caernarvon"
                  item_type="own"
                  text="Caernarvon"
                  intname="uk_fv221_caernarvon"
                  type="ground"
                />
                <Arrow type="small" />
              </td>
              <td>
                <TechTreeItem
                  link="/Charioteer_Mk_VII"
                  title="Charioteer Mk VII"
                  item_type="own"
                  text="Charioteer Mk VII"
                  intname="uk_charioteer_mk_7"
                  type="ground"
                />
                <Arrow type="small" />
                <TechTreeItem
                  link="/FV4202"
                  title="FV4202"
                  item_type="own"
                  text="FV4202"
                  intname="uk_fv4202"
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
                  link="/Tortoise"
                  title="Tortoise"
                  item_type="own"
                  text="Tortoise"
                  intname="uk_a39_tortoise"
                  type="ground"
                />
                <Arrow type="small" />
                <TechTreeItem
                  link="/FV4005"
                  title="FV4005"
                  item_type="own"
                  text="FV4005"
                  intname="uk_fv4005"
                  type="ground"
                />
                <Arrow type="small" />
                <TechTreeItem
                  link="/Conway"
                  title="Conway"
                  item_type="own"
                  text="Conway"
                  intname="uk_fv4004_conway"
                  type="ground"
                />
                <Arrow type="small" />
              </td>
              <td>
                <TechTreeItem
                  link="/Skink"
                  title="Skink"
                  item_type="own"
                  text="Skink"
                  intname="uk_skink_aa"
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
                  link="/Ratel_90"
                  title="Ratel 90"
                  item_type="own"
                  text="Ratel 90"
                  intname="uk_ratel_90"
                  type="ground"
                />
                <Arrow type="small" />
                <TechTreeItem
                  link="/G6"
                  title="G6"
                  item_type="own"
                  text="G6"
                  intname="uk_g6_spg"
                  type="ground"
                />
                <Arrow type="small" />
                <TechTreeItem
                  link="/Eland_90_Mk.7"
                  title="Eland 90 Mk.7"
                  item_type="own"
                  text="Eland 90 Mk.7"
                  intname="uk_eland_90_mk_7"
                  type="ground"
                />
                <Arrow type="small" />
              </td>
              <td style={{ borderLeft: "solid 1px #cccccc" }}>
                <TechTreeItem
                  link="/Black_Prince"
                  title="Black Prince"
                  item_type="prem"
                  text="Black Prince"
                  intname="uk_a_43_black_prince"
                  type="ground"
                />
                <EmptyDiv />
                <TechTreeItem
                  link="/Strv_81_(RB_52)_(Great_Britain)"
                  title="Strv 81 (RB 52) (Great Britain)"
                  item_type="prem"
                  text="▄Strv 81 (RB 52)"
                  intname="uk_centurion_mk_3_ss11"
                  type="ground"
                />
                <EmptyDiv />
                <TechTreeItem
                  link="/Centurion_Action_X"
                  title="Centurion Action X"
                  item_type="prem"
                  text="Centurion Action X"
                  intname="uk_centurion_action_x"
                  type="ground"
                />
                <EmptyDiv />
              </td>
              <td>
                <EmptyDiv />
              </td>
            </tr>
            <tr>
              <Rank rank="V" />
              <td>
                <TechTreeItem
                  link="/Centurion_Mk_10"
                  title="Centurion Mk 10"
                  item_type="own"
                  text="Centurion Mk 10"
                  intname="uk_centurion_mk_10"
                  type="ground"
                />
                <Arrow type="small" />
                <TechTreeItem
                  link="/Conqueror"
                  title="Conqueror"
                  item_type="own"
                  text="Conqueror"
                  intname="uk_conqueror_mk_2"
                  type="ground"
                />
                <Arrow type="small" />
              </td>
              <td>
                <TechTreeItem
                  link="/Vickers_Mk.1"
                  title="Vickers Mk.1"
                  item_type="own"
                  text="Vickers Mk.1"
                  intname="uk_vickers_mbt_mk_1"
                  type="ground"
                />
                <Arrow type="small" />
                <TechTreeItem
                  link="/Vickers_Mk.3"
                  title="Vickers Mk.3"
                  item_type="own"
                  text="Vickers Mk.3"
                  intname="uk_vickers_mbt_mk_3"
                  type="ground"
                />
                <Arrow type="small" />
              </td>
              <td>
                <TechTreeItem
                  link="/Swingfire"
                  title="Swingfire"
                  item_type="own"
                  text="Swingfire"
                  intname="uk_fv438_swingfire"
                  type="ground"
                />
                <Arrow type="small" />
                <TechTreeItem
                  link="/Striker"
                  title="Striker"
                  item_type="own"
                  text="Striker"
                  intname="uk_fv102_striker"
                  type="ground"
                />
                <Arrow type="small" />
              </td>
              <td>
                <TechTreeItem
                  link="/Falcon"
                  title="Falcon"
                  item_type="own"
                  text="Falcon"
                  intname="uk_falcon"
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
                  link="/Ratel_20"
                  title="Ratel 20"
                  item_type="own"
                  text="Ratel 20"
                  intname="uk_ratel_20"
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
                  link="/Centurion_Mk.5_AVRE"
                  title="Centurion Mk.5 AVRE"
                  item_type="prem"
                  text="Centurion Mk.5 AVRE"
                  intname="uk_centurion_mk_5_avre_era"
                  type="ground"
                />
                <EmptyDiv />
              </td>
              <td>
                <TechTreeItem
                  link="/Centurion_Mk.5/1"
                  title="Centurion Mk.5/1"
                  item_type="prem"
                  text="Centurion Mk.5/1"
                  intname="uk_centurion_mk_5_raac"
                  type="ground"
                />
                <EmptyDiv />
              </td>
            </tr>
            <tr>
              <Rank rank="VI" />
              <td>
                <TreeFolder name="Chieftain 3/5" img="uk_chieftain_mk_3_5_group">
                  <TechTreeItem
                    link="/Chieftain_Mk_3"
                    title="Chieftain Mk 3"
                    item_type="own"
                    text="Chieftain Mk 3"
                    intname="uk_chieftain_mk_3"
                    type="ground"
                  />
                  <Arrow type="small" />
                  <TechTreeItem
                    link="/Chieftain_Mk_5"
                    title="Chieftain Mk 5"
                    item_type="own"
                    text="Chieftain Mk 5"
                    intname="uk_chieftain_mk_5"
                    type="ground"
                  />
                </TreeFolder>
                <Arrow type="small" />
                <TechTreeItem
                  link="/Chieftain_Mk_10"
                  title="Chieftain Mk 10"
                  item_type="own"
                  text="Chieftain Mk 10"
                  intname="uk_chieftain_mk_10"
                  type="ground"
                />
                <Arrow type="small" />
                <TechTreeItem
                  link="/Challenger_Mk.2"
                  title="Challenger Mk.2"
                  item_type="own"
                  text="Challenger Mk.2"
                  intname="uk_challenger_1"
                  type="ground"
                />
                <Arrow type="small" />
                <TechTreeItem
                  link="/Challenger_Mk.3"
                  title="Challenger Mk.3"
                  item_type="own"
                  text="Challenger Mk.3"
                  intname="uk_challenger_mk_3"
                  type="ground"
                />
                <Arrow type="small" />
              </td>
              <td>
                <TechTreeItem
                  link="/VFM5"
                  title="VFM5"
                  item_type="own"
                  text="VFM5"
                  intname="uk_vfm_5"
                  type="ground"
                />
                <Arrow type="small" />
                <TechTreeItem
                  link="/Vickers_Mk.7"
                  title="Vickers Mk.7"
                  item_type="own"
                  text="Vickers Mk.7"
                  intname="uk_vickers_mk7"
                  type="ground"
                />
              </td>
              <td>
                <TechTreeItem
                  link="/Warrior"
                  title="Warrior"
                  item_type="own"
                  text="Warrior"
                  intname="uk_fv510_isv"
                  type="ground"
                />
                <Arrow type="small" />
                <TechTreeItem
                  link="/ZT3A2"
                  title="ZT3A2"
                  item_type="own"
                  text="ZT3A2"
                  intname="uk_ratel_zt3"
                  type="ground"
                />
              </td>
              <td>
                <TechTreeItem
                  link="/Chieftain_Marksman"
                  title="Chieftain Marksman"
                  item_type="own"
                  text="Chieftain Marksman"
                  intname="uk_chieftain_marksman"
                  type="ground"
                />
                <Arrow type="small" />
                <TechTreeItem
                  link="/ZA-35"
                  title="ZA-35"
                  item_type="own"
                  text="ZA-35"
                  intname="uk_rooikat_za_35"
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
                  link="/Rooikat_Mk.1D"
                  title="Rooikat Mk.1D"
                  item_type="own"
                  text="Rooikat Mk.1D"
                  intname="uk_rooikat_76"
                  type="ground"
                />
                <Arrow type="small" />
                <TechTreeItem
                  link="/Olifant_Mk.1A"
                  title="Olifant Mk.1A"
                  item_type="own"
                  text="Olifant Mk.1A"
                  intname="uk_olifant_mk_1a"
                  type="ground"
                />
                <Arrow type="small" />
                <TechTreeItem
                  link="/Rooikat_MTTD"
                  title="Rooikat MTTD"
                  item_type="own"
                  text="Rooikat MTTD"
                  intname="uk_rooikat_mttd"
                  type="ground"
                />
                <Arrow type="small" />
                <TechTreeItem
                  link="/Olifant_Mk.2"
                  title="Olifant Mk.2"
                  item_type="own"
                  text="Olifant Mk.2"
                  intname="uk_olifant_mk_2"
                  type="ground"
                />
                <Arrow type="small" />
              </td>
              <td style={{ borderLeft: "solid 1px #cccccc" }}>
                <TechTreeItem
                  link="/Sho%27t_Kal_Dalet_(Great_Britain)"
                  title="Sho't Kal Dalet (Great Britain)"
                  item_type="prem"
                  text="▄Sho't Kal Dalet"
                  intname="uk_centurion_shot_kal_d"
                  type="ground"
                />
                <EmptyDiv />
                <TechTreeItem
                  link="/Challenger_DS"
                  title="Challenger DS"
                  item_type="prem"
                  text="Challenger DS"
                  intname="uk_challenger_1_mk_3_gulf"
                  type="ground"
                />
              </td>
              <td>
                <TechTreeItem
                  link="/Rooikat_105"
                  title="Rooikat 105"
                  item_type="prem"
                  text="Rooikat 105"
                  intname="uk_rooikat_105_td"
                  type="ground"
                />
              </td>
            </tr>
            <tr>
              <Rank rank="VII" />
              <td>
                <TechTreeItem
                  link="/Challenger_2"
                  title="Challenger 2"
                  item_type="own"
                  text="Challenger 2"
                  intname="uk_challenger_ii"
                  type="ground"
                />
                <Arrow type="small" />
                <TechTreeItem
                  link="/Challenger_2_(2F)"
                  title="Challenger 2 (2F)"
                  item_type="own"
                  text="Challenger 2 (2F)"
                  intname="uk_challenger_2_dorchester"
                  type="ground"
                />
                <Arrow type="small" />
                <TechTreeItem
                  link="/Challenger_2_TES"
                  title="Challenger 2 TES"
                  item_type="own"
                  text="Challenger 2 TES"
                  intname="uk_challenger_2_tes"
                  type="ground"
                />
                <Arrow type="small" />
                <TechTreeItem
                  link="/Black_Night"
                  title="Black Night"
                  item_type="own"
                  text="Black Night"
                  intname="uk_challenger_2_bn"
                  type="ground"
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
                <TechTreeItem
                  link="/Stormer_HVM"
                  title="Stormer HVM"
                  item_type="own"
                  text="Stormer HVM"
                  intname="uk_stormer_hvm"
                  type="ground"
                />
                <Arrow type="small" />
                <TechTreeItem
                  link="/ADATS_(M113)"
                  title="ADATS (M113)"
                  item_type="own"
                  text="ADATS (M113)"
                  intname="uk_adats_m113a3"
                  type="ground"
                />
                <EmptyDiv />
              </td>
              <td>
                <TechTreeItem
                  link="/TTD"
                  title="TTD"
                  item_type="own"
                  text="TTD"
                  intname="uk_ttd"
                  type="ground"
                />
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
        <a href="https://yewtu.be/YRzCNF9IvDs">
          <b>African armor</b> - <i>War Thunder Official Channel</i>
        </a>
        <a href="https://yewtu.be/kcOqzAKOc88">
          <b>Vehicle overview: British tanks</b> - <i>War Thunder Official Channel</i>
        </a>
        <a href="https://yewtu.be/ItOZD40Vmw8">
          <b>British ground forces Tier I - Review and Analysis</b> - <i>Oxy</i>
        </a>
        <a href="https://yewtu.be/e2sOg1kxgyY">
          <b>British ground forces Tier II - Review and Analysis</b> - <i>Oxy</i>
        </a>
        <a href="https://yewtu.be/IVF-kTJHhz4">
          <b>British ground forces Tier III - Review and Analysis</b> - <i>Oxy</i>
        </a>
        <a href="https://yewtu.be/UBBAoWVlOfo">
          <b>British ground forces Tier IV - Review and Analysis</b> - <i>Oxy</i>
        </a>
        <a href="https://yewtu.be/YaYATCRAELY">
          <b>British ground forces Tier V - Review and Analysis</b> - <i>Oxy</i>
        </a>
        <a href="https://yewtu.be/OB2-pfy1K9I">
          <b>British ground forces Tier VI - Review and Analysis (part 1)</b> - <i>Oxy</i>
        </a>
        <a href="https://yewtu.be/gryGwqSmS8Y">
          <b>British ground forces Tier VI &amp; VII - Review and Analysis (part 2)</b> - <i>Oxy</i>
        </a>
        <a href="https://yewtu.be/wm9tv2seEPI">
          <b>British ground forces addendum + Talisman guide</b> - <i>Oxy</i>
        </a>
      </div>
    </div>
  );
}
