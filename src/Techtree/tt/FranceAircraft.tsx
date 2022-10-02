import { Arrow } from "../Arrow";
import { EmptyDiv } from "../EmptyDiv";
import { MediaHead } from "../MediaHead";
import { Rank } from "../Rank";
import { Research } from "../Research";
import { TechTreeItem } from "../TechTreeItem";
import { TreeFolder } from "../TreeFolder";

export function FranceAircraft() {
  return (
    <div className="mw-parser-output">
      <div className="tree">
        <table rules="rows" width="100%">
          <tbody>
            <Research research={4} premium={2} />
            <tr>
              <Rank rank="I" />
              <td>
                <TreeFolder name="D.371" img="d_371_group">
                  <TechTreeItem
                    link="/D.371"
                    title="D.371"
                    item_type="own"
                    text="D.371"
                    intname="d_371"
                    type="aircraft"
                  />
                  <Arrow type="small" />
                  <TechTreeItem
                    link="/D.373"
                    title="D.373"
                    item_type="own"
                    text="D.373"
                    intname="d_373"
                    type="aircraft"
                  />
                </TreeFolder>
                <Arrow type="small" />
                <TechTreeItem
                  link="/C.R.714"
                  title="C.R.714"
                  item_type="own"
                  text="C.R.714"
                  intname="caudron_cr714"
                  type="aircraft"
                />
                <Arrow type="small" />
                <TreeFolder name="M.S.405/406" img="ms_405_406_group">
                  <TechTreeItem
                    link="/M.S.405C1"
                    title="M.S.405C1"
                    item_type="own"
                    text="M.S.405C1"
                    intname="ms_405c1"
                    type="aircraft"
                  />
                  <Arrow type="small" />
                  <TechTreeItem
                    link="/M.S.406C1"
                    title="M.S.406C1"
                    item_type="own"
                    text="M.S.406C1"
                    intname="ms_406c1"
                    type="aircraft"
                  />
                </TreeFolder>
                <Arrow type="small" />
              </td>
              <td>
                <TreeFolder name="D.500" img="d_500_group">
                  <TechTreeItem
                    link="/D.500"
                    title="D.500"
                    item_type="own"
                    text="D.500"
                    intname="d_500"
                    type="aircraft"
                  />
                  <Arrow type="small" />
                  <TechTreeItem
                    link="/D.501"
                    title="D.501"
                    item_type="own"
                    text="D.501"
                    intname="d_501"
                    type="aircraft"
                  />
                </TreeFolder>
                <Arrow type="small" />
                <TreeFolder name="H-75" img="h-75_france_group">
                  <TechTreeItem
                    link="/H-75A-1"
                    title="H-75A-1"
                    item_type="own"
                    text="H-75A-1"
                    intname="h-75a-1_france"
                    type="aircraft"
                  />
                  <Arrow type="small" />
                  <TechTreeItem
                    link="/H-75A-4"
                    title="H-75A-4"
                    item_type="own"
                    text="H-75A-4"
                    intname="h-75a-4_france"
                    type="aircraft"
                  />
                </TreeFolder>
                <Arrow type="small" />
                <TechTreeItem
                  link="/Br.693AB2"
                  title="Br.693AB2"
                  item_type="own"
                  text="Br.693AB2"
                  intname="br_693_ab2"
                  type="aircraft"
                />
                <Arrow type="small" />
              </td>
              <td>
                <TechTreeItem
                  link="/V-156-F"
                  title="V-156-F"
                  item_type="own"
                  text="V-156-F"
                  intname="v_156_f"
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
                  link="/Potez_633"
                  title="Potez 633"
                  item_type="own"
                  text="Potez 633"
                  intname="potez_633"
                  type="aircraft"
                />
                <Arrow type="small" />
                <TechTreeItem
                  link="/Martin_167-A3"
                  title="Martin 167-A3"
                  item_type="own"
                  text="Martin 167-A3"
                  intname="maryland_mk1_france"
                  type="aircraft"
                />
                <Arrow type="small" />
                <TechTreeItem
                  link="/F.222.2"
                  title="F.222.2"
                  item_type="own"
                  text="F.222.2"
                  intname="f_222_2"
                  type="aircraft"
                />
                <Arrow type="small" />
              </td>
              <td style={{ borderLeft: "solid 1px #cccccc" }}>
                <TechTreeItem
                  link="/Pallier%27s_D.510"
                  title="Pallier's D.510"
                  item_type="prem"
                  text="Pallier's D.510"
                  intname="d_510"
                  type="aircraft"
                />
                <EmptyDiv />
                <TechTreeItem
                  link="/D.371_H.S.9"
                  title="D.371 H.S.9"
                  item_type="prem"
                  text="D.371 H.S.9"
                  intname="d_371_hs9"
                  type="aircraft"
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
                  link="/M.S.410"
                  title="M.S.410"
                  item_type="own"
                  text="M.S.410"
                  intname="ms_410c1"
                  type="aircraft"
                />
                <Arrow type="small" />
                <TechTreeItem
                  link="/V.G.33C-1"
                  title="V.G.33C-1"
                  item_type="own"
                  text="V.G.33C-1"
                  intname="vg_33"
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
                  link="/Potez_630"
                  title="Potez 630"
                  item_type="own"
                  text="Potez 630"
                  intname="potez_630"
                  type="aircraft"
                />
                <Arrow type="small" />
                <TechTreeItem
                  link="/Potez_631"
                  title="Potez 631"
                  item_type="own"
                  text="Potez 631"
                  intname="potez_631"
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
                  link="/A-35B_(France)"
                  title="A-35B (France)"
                  item_type="own"
                  text="▄A-35B"
                  intname="a-35b"
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
                  link="/M.B.174A-3"
                  title="M.B.174A-3"
                  item_type="own"
                  text="M.B.174A-3"
                  intname="mb_174_a3"
                  type="aircraft"
                />
                <Arrow type="small" />
                <TechTreeItem
                  link="/N.C.223.3"
                  title="N.C.223.3"
                  item_type="own"
                  text="N.C.223.3"
                  intname="nc_223_3"
                  type="aircraft"
                />
                <Arrow type="small" />
                <TreeFolder name="LeO 451" img="leo_451_group">
                  <TechTreeItem
                    link="/LeO_451_early"
                    title="LeO 451 early"
                    item_type="own"
                    text="LeO 451 early"
                    intname="leo_451_early"
                    type="aircraft"
                  />
                  <Arrow type="small" />
                  <TechTreeItem
                    link="/LeO_451_late"
                    title="LeO 451 late"
                    item_type="own"
                    text="LeO 451 late"
                    intname="leo_451_late"
                    type="aircraft"
                  />
                </TreeFolder>
                <Arrow type="small" />
              </td>
              <td style={{ borderLeft: "solid 1px #cccccc" }}>
                <TechTreeItem
                  link="/P-40F-5_Lafayette_(France)"
                  title="P-40F-5 Lafayette (France)"
                  item_type="prem"
                  text="▄P-40F-5 Lafayette"
                  intname="p-40f-5_france_ep"
                  type="aircraft"
                />
                <EmptyDiv />
              </td>
              <td>
                <TechTreeItem
                  link="/M.B.152C1"
                  title="M.B.152C1"
                  item_type="prem"
                  text="M.B.152C1"
                  intname="mb_152c1"
                  type="aircraft"
                />
                <EmptyDiv />
              </td>
            </tr>
            <tr>
              <Rank rank="III" />
              <td>
                <TechTreeItem
                  link="/D.520"
                  title="D.520"
                  item_type="own"
                  text="D.520"
                  intname="d_520_france"
                  type="aircraft"
                />
                <Arrow type="small" />
                <TechTreeItem
                  link="/M.B.157"
                  title="M.B.157"
                  item_type="own"
                  text="M.B.157"
                  intname="mb_157"
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
                <TreeFolder name="▄F6F" img="f6f_france_group">
                  <TechTreeItem
                    link="/F6F-5_(France)"
                    title="F6F-5 (France)"
                    item_type="own"
                    text="▄F6F-5"
                    intname="f6f-5_france"
                    type="aircraft"
                  />
                  <Arrow type="small" />
                  <TechTreeItem
                    link="/F6F-5N_(France)"
                    title="F6F-5N (France)"
                    item_type="own"
                    text="▄F6F-5N"
                    intname="f6f-5n_france"
                    type="aircraft"
                  />
                </TreeFolder>
                <Arrow type="small" />
                <TechTreeItem
                  link="/P-63C-5_(France)"
                  title="P-63C-5 (France)"
                  item_type="own"
                  text="▄P-63C-5"
                  intname="p-63c-5_france"
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
                  link="/SB2C-5_(France)"
                  title="SB2C-5 (France)"
                  item_type="own"
                  text="▄SB2C-5"
                  intname="sb2c_5_france"
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
                  link="/M.B.175T"
                  title="M.B.175T"
                  item_type="own"
                  text="M.B.175T"
                  intname="mb_175t"
                  type="aircraft"
                />
                <Arrow type="small" />
                <TechTreeItem
                  link="/B-26C"
                  title="B-26C"
                  item_type="own"
                  text="B-26C"
                  intname="b_26c_france"
                  type="aircraft"
                />
                <Arrow type="small" />
                <TechTreeItem
                  link="/M.B.162"
                  title="M.B.162"
                  item_type="own"
                  text="M.B.162"
                  intname="mb_162"
                  type="aircraft"
                />
                <Arrow type="small" />
              </td>
              <td style={{ borderLeft: "solid 1px #cccccc" }}>
                <TechTreeItem
                  link="/Yak-3_(France)"
                  title="Yak-3 (France)"
                  item_type="prem"
                  text="▄Yak-3"
                  intname="yak-3_france"
                  type="aircraft"
                />
                <EmptyDiv />
                <TechTreeItem
                  link="/P-47D-22-RE_(France)"
                  title="P-47D-22-RE (France)"
                  item_type="prem"
                  text="▄P-47D-22-RE"
                  intname="p-47d_22_re_france"
                  type="aircraft"
                />
                <EmptyDiv />
                <TechTreeItem
                  link="/F-6C-10-NA"
                  title="F-6C-10-NA"
                  item_type="prem"
                  text="F-6C-10-NA"
                  intname="p-51c-10_france"
                  type="aircraft"
                />
                <EmptyDiv />
              </td>
              <td>
                <TechTreeItem
                  link="/Challe%27s_Yak-9T_(France)"
                  title="Challe's Yak-9T (France)"
                  item_type="prem"
                  text="Challe's ▄Yak-9T"
                  intname="yak-9t_france"
                  type="aircraft"
                />
                <EmptyDiv />
                <TechTreeItem
                  link="/P-39Q-25_(France)"
                  title="P-39Q-25 (France)"
                  item_type="prem"
                  text="▄P-39Q-25"
                  intname="p-39q_25_france"
                  type="aircraft"
                />
                <EmptyDiv />
                <TechTreeItem
                  link="/NC.900"
                  title="NC.900"
                  item_type="prem"
                  text="NC.900"
                  intname="fw-190a-8_france"
                  type="aircraft"
                />
                <EmptyDiv />
              </td>
            </tr>
            <tr>
              <Rank rank="IV" />
              <td>
                <TechTreeItem
                  link="/VB.10C-1"
                  title="VB.10C-1"
                  item_type="own"
                  text="VB.10C-1"
                  intname="vb_10c1"
                  type="aircraft"
                />
                <Arrow type="small" />
                <TechTreeItem
                  link="/VB.10-02"
                  title="VB.10-02"
                  item_type="own"
                  text="VB.10-02"
                  intname="vb_10_02"
                  type="aircraft"
                />
                <Arrow type="small" />
              </td>
              <td>
                <TechTreeItem
                  link="/Seafire_LF_Mk.III_(France)"
                  title="Seafire LF Mk.III (France)"
                  item_type="own"
                  text="▄Seafire LF Mk.III"
                  intname="seafire_mk3_france"
                  type="aircraft"
                />
                <Arrow type="small" />
                <TechTreeItem
                  link="/F8F-1B_(France)"
                  title="F8F-1B (France)"
                  item_type="own"
                  text="▄F8F-1B"
                  intname="f8f1b_france"
                  type="aircraft"
                />
                <Arrow type="small" />
              </td>
              <td>
                <TechTreeItem
                  link="/AD-4_(France)"
                  title="AD-4 (France)"
                  item_type="own"
                  text="▄AD-4"
                  intname="douglas_ad_4_france"
                  type="aircraft"
                />
                <Arrow type="small" />
                <TechTreeItem
                  link="/F4U-7"
                  title="F4U-7"
                  item_type="own"
                  text="F4U-7"
                  intname="f4u-7"
                  type="aircraft"
                />
                <Arrow type="small" />
              </td>
              <td>
                <TechTreeItem
                  link="/PB4Y-2_(France)"
                  title="PB4Y-2 (France)"
                  item_type="own"
                  text="▄PB4Y-2"
                  intname="pb4y-2_france"
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
                  link="/S.O.8000_Narval"
                  title="S.O.8000 Narval"
                  item_type="prem"
                  text="S.O.8000 Narval"
                  intname="so_8000_narval"
                  type="aircraft"
                />
                <EmptyDiv />
                <TechTreeItem
                  link="/AD-4NA_(France)"
                  title="AD-4NA (France)"
                  item_type="prem"
                  text="▄AD-4NA"
                  intname="douglas_ad_4na_france"
                  type="aircraft"
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
                <TreeFolder name="M.D.450B" img="md_450b_group">
                  <TechTreeItem
                    link="/M.D.450B_Ouragan"
                    title="M.D.450B Ouragan"
                    item_type="own"
                    text="M.D.450B Ouragan"
                    intname="md_450b_ouragan"
                    type="aircraft"
                  />
                  <Arrow type="small" />
                  <TechTreeItem
                    link="/M.D.450B_Barougan"
                    title="M.D.450B Barougan"
                    item_type="own"
                    text="M.D.450B Barougan"
                    intname="md_450b_barougan"
                    type="aircraft"
                  />
                </TreeFolder>
                <Arrow type="small" />
                <TreeFolder name="M.D.452" img="md_452_group">
                  <TechTreeItem
                    link="/M.D.452_IIA"
                    title="M.D.452 IIA"
                    item_type="own"
                    text="M.D.452 IIA"
                    intname="md_452_mystere_2a"
                    type="aircraft"
                  />
                  <Arrow type="small" />
                  <TechTreeItem
                    link="/M.D.452_IIC"
                    title="M.D.452 IIC"
                    item_type="own"
                    text="M.D.452 IIC"
                    intname="md_452_mystere_2c_preproduction"
                    type="aircraft"
                  />
                </TreeFolder>
                <Arrow type="small" />
              </td>
              <td>
                <TechTreeItem
                  link="/F-84F_(France)"
                  title="F-84F (France)"
                  item_type="own"
                  text="▄F-84F"
                  intname="f-84f_france"
                  type="aircraft"
                />
                <Arrow type="small" />
                <TechTreeItem
                  link="//S.O.4050_Vautour_IIN_(late)"
                  title="S.O.4050 Vautour IIN (late)"
                  item_type="own"
                  text="S.O.4050 Vautour IIN (late)"
                  intname="so_4050_vautour_2n_late"
                  type="aircraft"
                />
                <Arrow type="small"/>
              </td>
              <td>
                <TechTreeItem
                  link="/F-84G-26-RE_(France)"
                  title="F-84G-26-RE (France)"
                  item_type="own"
                  text="▄F-84G-26-RE"
                  intname="f-84g_france"
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
                  link="/S.O.4050_Vautour_IIB"
                  title="S.O.4050 Vautour IIB"
                  item_type="own"
                  text="S.O.4050 Vautour IIB"
                  intname="so_4050_vautour_2b"
                  type="aircraft"
                />
                <Arrow type="small" />
                <TechTreeItem
                  link="/S.O.4050_Vautour_IIA"
                  title="S.O.4050 Vautour IIA"
                  item_type="own"
                  text="S.O.4050 Vautour IIA"
                  intname="so_4050_vautour_2a"
                  type="aircraft"
                />
                <Arrow type="small" />
              </td>
              <td style={{ borderLeft: "solid 1px #cccccc" }}>
                <TechTreeItem
                  link="/S.O.4050_Vautour_IIN"
                  title="S.O.4050 Vautour IIN"
                  item_type="prem"
                  text="S.O.4050 Vautour IIN"
                  intname="so_4050_vautour_2n"
                  type="aircraft"
                />
                <EmptyDiv />
              </td>
              <td>
                <TechTreeItem
                  link="/F-84F_(IAF)"
                  title="F-84F (IAF)"
                  item_type="prem"
                  text="F-84F IAF"
                  intname="f-84f_iaf"
                  type="aircraft"
                />
                <EmptyDiv />
                <TechTreeItem
                  link="/Vautour_IIA_IDF/AF"
                  title="Vautour IIA IDF/AF"
                  item_type="prem"
                  text="Vautour IIA IDF/AF"
                  intname="so_4050_vautour_2a_iaf"
                  type="aircraft"
                />
              </td>
            </tr>
            <tr>
              <Rank rank="VI" />
              <td>
                <TechTreeItem
                  link="/Mystere_IVA"
                  title="Mystere IVA"
                  item_type="own"
                  text="Mystere IVA"
                  intname="md_454_mystere_4a"
                  type="aircraft"
                />
                <Arrow type="small" />
                <TechTreeItem
                  link="/Super_Mystere_B2"
                  title="Super Mystere B2"
                  item_type="own"
                  text="Super Mystere B2"
                  intname="md_460"
                  type="aircraft"
                />
                <Arrow type="small" />
              </td>
              <td>
                <TechTreeItem
                  link="/F-86K_(France)"
                  title="F-86K (France)"
                  item_type="own"
                  text="▄F-86K"
                  intname="f-86k_late"
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
                  link="/F-100D_(France)"
                  title="F-100D (France)"
                  item_type="own"
                  text="▄F-100D"
                  intname="f-100d_france"
                  type="aircraft"
                />
              </td>
              <td>
                <TechTreeItem
                  link="/Etendard_IVM"
                  title="Etendard IVM"
                  item_type="own"
                  text="Etendard IVM"
                  intname="etndard_4m"
                  type="aircraft"
                />
                <Arrow type="small" />
                <TechTreeItem
                  link="/Jaguar_A"
                  title="Jaguar A"
                  item_type="own"
                  text="Jaguar A"
                  intname="jaguar_a"
                  type="aircraft"
                />
                <Arrow type="small" />
              </td>
              <td style={{ borderLeft: "solid 1px #cccccc" }}>
                <TechTreeItem
                  link="/Milan"
                  title="Milan"
                  item_type="prem"
                  text="Milan"
                  intname="mirage_milan"
                  type="aircraft"
                />
              </td>
              <td>
                <TechTreeItem
                  link="/Jaguar_E"
                  title="Jaguar E"
                  item_type="own"
                  text="Jaguar E"
                  intname="jaguar_e"
                  type="aircraft"
                />
              </td>
            </tr>
            <tr>
              <Rank rank="VII" />
              <td>
                <TechTreeItem
                  link="/Mirage_IIIC"
                  title="Mirage IIIC"
                  item_type="own"
                  text="Mirage IIIC"
                  intname="mirage_3c"
                  type="aircraft"
                />
                <Arrow type="small" />
                <TechTreeItem
                  link="/Mirage_IIIE"
                  title="Mirage IIIE"
                  item_type="own"
                  text="Mirage IIIE"
                  intname="mirage_3e"
                  type="aircraft"
                />
                <Arrow type="small" />
                <TechTreeItem
                  link="/Mirage_F1C"
                  title="Mirage F1C"
                  item_type="own"
                  text="Mirage F1C"
                  intname="mirage_f1c"
                  type="aircraft"
                />
                <Arrow type="small" />
                <TechTreeItem
                  link="/Mirage_2000C-S5"
                  title="Mirage 2000C-S5"
                  item_type="own"
                  text="Mirage 2000C-S5"
                  intname="mirage_2000c_s5"
                  type="aircraft"
                />
                <EmptyDiv />
              </td>
              <td>
                <TechTreeItem
                  link="/F-8E(FN)_(France)"
                  title="F-8E(FN) (France)"
                  item_type="own"
                  text="▄F-8E(FN)"
                  intname="f-8e_fn"
                  type="aircraft"
                />
                <EmptyDiv />
              </td>
              <td>
                <EmptyDiv />
              </td>
              <td>
                <TechTreeItem
                  link="/Mirage_5F"
                  title="Mirage 5F"
                  item_type="own"
                  text="Mirage 5F"
                  intname="mirage_5f"
                  type="aircraft"
                />
                <Arrow type="small" />
                <TechTreeItem
                  link="/Mirage_F1CT"
                  title="Mirage F1CT"
                  item_type="own"
                  text="Mirage F1CT"
                  intname="mirage_f1ct"
                  type="aircraft"
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
        <a href="https://yewtu.be/wjj0N-PqHbU">
          <b>Dassault Family</b> - <i>War Thunder Official Channel</i>
        </a>
        <a href="https://yewtu.be/val2qd1RsNY">
          <b>The Shooting Range #69</b> - <i>Special</i> section at 02:53 discusses French planes.
        </a>
      </div>
    </div>
  );
}
