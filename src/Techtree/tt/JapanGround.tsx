import { Arrow } from "../Arrow";
import { EmptyDiv } from "../EmptyDiv";
import { MediaHead } from "../MediaHead";
import { Rank } from "../Rank";
import { Research } from "../Research";
import { TechTreeItem } from "../TechTreeItem";
import { TreeFolder } from "../TreeFolder";

export function JapanGround() {
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
                  link="/Ha-Go"
                  title="Ha-Go"
                  item_type="own"
                  text="Ha-Go"
                  intname="jp_type_95_ha_go"
                  type="ground"
                />
                <EmptyDiv />
                <TechTreeItem
                  link="/Ke-Ni"
                  title="Ke-Ni"
                  item_type="own"
                  text="Ke-Ni"
                  intname="jp_type_98_ke_ni"
                  type="ground"
                />
                <Arrow length={0} />
                <TechTreeItem
                  link="/Ka-Mi"
                  title="Ka-Mi"
                  item_type="own"
                  text="Ka-Mi"
                  intname="jp_type_2_ka_mi"
                  type="ground"
                />
                <Arrow length={0} />
              </td>
              <td>
                <TechTreeItem
                  link="/I-Go_Ko"
                  title="I-Go Ko"
                  item_type="own"
                  text="I-Go Ko"
                  intname="jp_type_89b_i_go_otsu"
                  type="ground"
                />
                <Arrow length={0} />
                <TechTreeItem
                  link="/Chi-Ha"
                  title="Chi-Ha"
                  item_type="own"
                  text="Chi-Ha"
                  intname="jp_type_97_chi_ha"
                  type="ground"
                />
                <Arrow length={0} />
                <TechTreeItem
                  link="/Ho-I"
                  title="Ho-I"
                  item_type="own"
                  text="Ho-I"
                  intname="jp_type_2_ho_i"
                  type="ground"
                />
                <Arrow length={0} />
              </td>
              <td>
                <TechTreeItem
                  link="/Ho-Ro"
                  title="Ho-Ro"
                  item_type="own"
                  text="Ho-Ro"
                  intname="jp_type_4_ho_ro"
                  type="ground"
                />
                <Arrow length={0} />
                <TechTreeItem
                  link="/Ro-Go_Exp."
                  title="Ro-Go Exp."
                  item_type="own"
                  text="Ro-Go Exp."
                  intname="jp_hiro_sha"
                  type="ground"
                />
                <Arrow length={1} />
              </td>
              <td>
                <TechTreeItem
                  link="/Type_94"
                  title="Type 94"
                  item_type="own"
                  text="Type 94"
                  intname="jp_type_94"
                  type="ground"
                />
                <Arrow length={0} />
                <TechTreeItem
                  link="/Ta-Se"
                  title="Ta-Se"
                  item_type="own"
                  text="Ta-Se"
                  intname="jp_type_98_ta_se"
                  type="ground"
                />
                <Arrow length={1} />
              </td>
              <td style={{ borderLeft: "solid 1px #cccccc" }}>
                <TechTreeItem
                  link="/Ha-Go_Commander"
                  title="Ha-Go Commander"
                  item_type="prem"
                  text="Ha-Go Commander"
                  intname="jp_type_95_ha_go_commander"
                  type="ground"
                />
                <EmptyDiv />
                <TechTreeItem
                  link="/Ro-Go"
                  title="Ro-Go"
                  item_type="prem"
                  text="Ro-Go"
                  intname="jp_type_95_heavy"
                  type="ground"
                />
                <EmptyDiv />
              </td>
              <td>
                <TechTreeItem
                  link="/Chi-Ha_Kai_TD"
                  title="Chi-Ha Kai TD"
                  item_type="own"
                  text="Chi-Ha Kai TD"
                  intname="jp_type_97_kai_td"
                  type="ground"
                />
                <EmptyDiv />
                <TechTreeItem
                  link="/Ka-Chi"
                  title="Ka-Chi"
                  item_type="prem"
                  text="Ka-Chi"
                  intname="jp_type_3_ka_chi"
                  type="ground"
                />
              </td>
            </tr>
            <tr>
              <Rank rank="II" />
              <td>
                <Arrow length={2.5} />
              </td>
              <td>
                <TechTreeItem
                  link="/Chi-Ha_Kai"
                  title="Chi-Ha Kai"
                  item_type="own"
                  text="Chi-Ha Kai"
                  intname="jp_type_97_kai"
                  type="ground"
                />
                <Arrow length={0} />
                <TechTreeItem
                  link="/Chi-He"
                  title="Chi-He"
                  item_type="own"
                  text="Chi-He"
                  intname="jp_type_1_chi_he"
                  type="ground"
                />
                <Arrow length={0} />
                <TechTreeItem
                  link="/Chi-Nu"
                  title="Chi-Nu"
                  item_type="own"
                  text="Chi-Nu"
                  intname="jp_type_3_chi_nu"
                  type="ground"
                />
                <Arrow length={0} />
              </td>
              <td>
                <TechTreeItem
                  link="/Ho-Ni_I"
                  title="Ho-Ni I"
                  item_type="own"
                  text="Ho-Ni I"
                  intname="jp_type_3_ho_ni_i"
                  type="ground"
                />
                <Arrow length={0} />
                <TechTreeItem
                  link="/Ho-Ni_III"
                  title="Ho-Ni III"
                  item_type="own"
                  text="Ho-Ni III"
                  intname="jp_type_3_ho_ni_iii"
                  type="ground"
                />
                <Arrow length={0} />
                <TechTreeItem
                  link="/Chi-Ha_LG"
                  title="Chi-Ha LG"
                  item_type="own"
                  text="Chi-Ha LG"
                  intname="jp_navy_120mm_spg"
                  type="ground"
                />
                <Arrow length={0} />
              </td>
              <td>
                <TechTreeItem
                  link="/M16_MGMC_(Japan)"
                  title="M16 MGMC (Japan)"
                  item_type="own"
                  text="▅M16 MGMC"
                  intname="jp_halftrack_m16"
                  type="ground"
                />
                <Arrow length={0} />
                <TechTreeItem
                  link="/So-Ki"
                  title="So-Ki"
                  item_type="own"
                  text="So-Ki"
                  intname="jp_type_95_so_ki"
                  type="ground"
                />
                <Arrow length={1} />
              </td>
              <td style={{ borderLeft: "solid 1px #cccccc" }}>
                <TechTreeItem
                  link="/Chi-Ha_Short_Gun"
                  title="Chi-Ha Short Gun"
                  item_type="prem"
                  text="Chi-Ha Short Gun"
                  intname="jp_type_97_chi_ha_12cm"
                  type="ground"
                />
                <EmptyDiv />
                <TechTreeItem
                  link="/Chi-He_(5th_Regiment)"
                  title="Chi-He (5th Regiment)"
                  item_type="prem"
                  text="Chi-He (5th Regiment)"
                  intname="jp_type_1_chi_he_5th_regiment"
                  type="ground"
                />
                <EmptyDiv />
              </td>
              <td />
            </tr>
            <tr>
              <Rank rank="III" />
              <td>
                <TechTreeItem
                  link="/M24_(Japan)"
                  title="M24 (Japan)"
                  item_type="own"
                  text="▅M24"
                  intname="jp_m24_chaffee"
                  type="ground"
                />
                <Arrow length={0} />
                <TechTreeItem
                  link="/M4A3_(76)_W_(Japan)"
                  title="M4A3 (76) W (Japan)"
                  item_type="own"
                  text="▅M4A3 (76) W"
                  intname="jp_m4a3e8_76w_sherman"
                  type="ground"
                />
                <Arrow length={1} />
              </td>
              <td>
                <TechTreeItem
                  link="/Chi-To"
                  title="Chi-To"
                  item_type="own"
                  text="Chi-To"
                  intname="jp_type_4_chi_to"
                  type="ground"
                />
                <Arrow length={0} />
                <TechTreeItem
                  link="/Chi-To_Late"
                  title="Chi-To Late"
                  item_type="own"
                  text="Chi-To Late"
                  intname="jp_type_4_chi_to_late"
                  type="ground"
                />
                <Arrow length={0} />
                <TechTreeItem
                  link="/Chi-Ri_II"
                  title="Chi-Ri II"
                  item_type="own"
                  text="Chi-Ri II"
                  intname="jp_type_5_chi_ri"
                  type="ground"
                />
                <Arrow length={0} />
              </td>
              <td>
                <TechTreeItem
                  link="/Na-To"
                  title="Na-To"
                  item_type="own"
                  text="Na-To"
                  intname="jp_type_5_na_to"
                  type="ground"
                />
                <Arrow length={2} />
              </td>
              <td>
                <TechTreeItem
                  link="/M19A1_(Japan)"
                  title="M19A1 (Japan)"
                  item_type="own"
                  text="▅M19A1"
                  intname="jp_m19"
                  type="ground"
                />
                <Arrow length={2} />
              </td>
              <td style={{ borderLeft: "solid 1px #cccccc" }}>
                <TechTreeItem
                  link="/Chi-Nu_II"
                  title="Chi-Nu II"
                  item_type="prem"
                  text="Chi-Nu II"
                  intname="jp_type_3_chi_nu_75cm_type_5"
                  type="ground"
                />
                <EmptyDiv />
                <TechTreeItem
                  link="/Heavy_Tank_No.6_(Japan)"
                  title="Heavy Tank No.6 (Japan)"
                  item_type="prem"
                  text="▅Heavy Tank No.6"
                  intname="jp_pzkpfw_vi_ausf_e_tiger"
                  type="ground"
                />
                <EmptyDiv />
              </td>
              <td />
            </tr>
            <tr>
              <Rank rank="IV" />
              <td>
                <TechTreeItem
                  link="/M41A1_(Japan)"
                  title="M41A1 (Japan)"
                  item_type="own"
                  text="▅M41A1"
                  intname="jp_m41_walker_bulldog"
                  type="ground"
                />
                <Arrow length={0} />
                <TechTreeItem
                  link="/Type_60_SPRG_(C)"
                  title="Type 60 SPRG (C)"
                  item_type="own"
                  text="Type 60 SPRG (C)"
                  intname="jp_type_60_sprg"
                  type="ground"
                />
                <Arrow length={1} />
              </td>
              <td>
                <TreeFolder name="ST-A" img="jp_st_group">
                  <TechTreeItem
                    link="/ST-A1"
                    title="ST-A1"
                    item_type="own"
                    text="ST-A1"
                    intname="jp_st_a1"
                    type="ground"
                  />
                  <Arrow length={0} />
                  <TechTreeItem
                    link="/ST-A2"
                    title="ST-A2"
                    item_type="own"
                    text="ST-A2"
                    intname="jp_st_a2"
                    type="ground"
                  />
                </TreeFolder>
                <Arrow length={0} />
                <TechTreeItem
                  link="/Type_61"
                  title="Type 61"
                  item_type="own"
                  text="Type 61"
                  intname="jp_type_61"
                  type="ground"
                />
                <Arrow length={0} />
                <TechTreeItem
                  link="/ST-A3"
                  title="ST-A3"
                  item_type="own"
                  text="ST-A3"
                  intname="jp_st_a3"
                  type="ground"
                />
                <Arrow length={0} />
              </td>
              <td>
                <TechTreeItem
                  link="/M36B2_(Japan)"
                  title="M36B2 (Japan)"
                  item_type="own"
                  text="▅M36B2"
                  intname="jp_m36b2_jgsdf"
                  type="ground"
                />
                <Arrow length={0} />
                <TechTreeItem
                  link="/Type_75_SPH"
                  title="Type 75 SPH"
                  item_type="own"
                  text="Type 75 SPH"
                  intname="jp_type_75"
                  type="ground"
                />
                <Arrow length={1} />
              </td>
              <td>
                <TechTreeItem
                  link="/M42_(Japan)"
                  title="M42 (Japan)"
                  item_type="own"
                  text="▅M42"
                  intname="jp_m42_duster"
                  type="ground"
                />
                <Arrow length={2} />
              </td>
              <td style={{ borderLeft: "solid 1px #cccccc" }}>
                <TechTreeItem
                  link="/Ho-Ri_Prototype"
                  title="Ho-Ri Prototype"
                  item_type="prem"
                  text="Ho-Ri Prototype"
                  intname="jp_type_5_ho_ri_prototype"
                  type="ground"
                />
                <EmptyDiv />
              </td>
              <td />
            </tr>
            <tr>
              <Rank rank="V" />
              <td>
                <TechTreeItem
                  link="/Type_60_ATM"
                  title="Type 60 ATM"
                  item_type="own"
                  text="Type 60 ATM"
                  intname="jp_type_60_atm"
                  type="ground"
                />
                <Arrow length={0} />
                <TechTreeItem
                  link="/Type_87_RCV"
                  title="Type 87 RCV"
                  item_type="own"
                  text="Type 87 RCV"
                  intname="jp_type_87_rcv"
                  type="ground"
                />
                <Arrow length={1} />
              </td>
              <td>
                <TechTreeItem
                  link="/M47_(Japan)"
                  title="M47 (Japan)"
                  item_type="own"
                  text="▅M47"
                  intname="jp_m47_patton_ii"
                  type="ground"
                />
                <Arrow length={0} />
                <TechTreeItem
                  link="/STB-1"
                  title="STB-1"
                  item_type="own"
                  text="STB-1"
                  intname="jp_st_b1"
                  type="ground"
                />
                <Arrow length={0} />
                <TechTreeItem
                  link="/Type_74_(C)"
                  title="Type 74 (C)"
                  item_type="own"
                  text="Type 74 (C)"
                  intname="jp_type_74_c"
                  type="ground"
                />
                <Arrow length={0} />
              </td>
              <td>
                <TechTreeItem
                  link="/Ho-Ri_Production"
                  title="Ho-Ri Production"
                  item_type="own"
                  text="Ho-Ri Production"
                  intname="jp_type_5_ho_ri_production"
                  type="ground"
                />
                <Arrow length={2} />
              </td>
              <td>
                <Arrow length={2.5} />
              </td>
              <td style={{ borderLeft: "solid 1px #cccccc" }}>
                <TechTreeItem
                  link="/Type_75_MLRS"
                  title="Type 75 MLRS"
                  item_type="prem"
                  text="Type 75 MLRS"
                  intname="jp_type_75_mlrs"
                  type="ground"
                />
                <EmptyDiv />
              </td>
              <td />
            </tr>
            <tr>
              <Rank rank="VI" />
              <td>
                <TechTreeItem
                  link="/Type_89"
                  title="Type 89"
                  item_type="own"
                  text="Type 89"
                  intname="jp_type_89"
                  type="ground"
                />
              </td>
              <td>
                <TechTreeItem
                  link="/Type_74_(E)"
                  title="Type 74 (E)"
                  item_type="own"
                  text="Type 74 (E)"
                  intname="jp_type_74"
                  type="ground"
                />
                <Arrow length={0} />
                <TechTreeItem
                  link="/Type_74_(F)"
                  title="Type 74 (F)"
                  item_type="own"
                  text="Type 74 (F)"
                  intname="jp_type_74_f"
                  type="ground"
                />
                <Arrow length={0} />
              </td>
              <td>
                <TechTreeItem
                  link="/Type_16_(P)"
                  title="Type_16 (P)"
                  item_type="own"
                  text="Type_16 (P)"
                  intname="jp_type_16_mcv_prot"
                  type="ground"
                />
                <Arrow length={1} />
              </td>
              <td>
                <TechTreeItem
                  link="/Type_87"
                  title="Type 87"
                  item_type="own"
                  text="Type 87"
                  intname="jp_type_87"
                  type="ground"
                />
                <Arrow length={1} />
              </td>
              <td style={{ borderLeft: "solid 1px #cccccc" }}>
                <TechTreeItem
                  link="/Type_74_(G)"
                  title="Type 74 (G)"
                  item_type="prem"
                  text="Type 74 (G)"
                  intname="jp_type_74_mod_g_kai"
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
                  link="/Type_90"
                  title="Type 90"
                  item_type="own"
                  text="Type 90"
                  intname="jp_type_90"
                  type="ground"
                />
                <Arrow length={0} />
                <TechTreeItem
                  link="/Type_90_(B)"
                  title="Type 90 (B)"
                  item_type="own"
                  text="Type 90 (B)"
                  intname="jp_type_90b"
                  type="ground"
                />
                <Arrow length={0} />
                <TechTreeItem
                  link="/TKX"
                  title="TKX"
                  item_type="own"
                  text="TKX"
                  intname="jp_tkx_prot"
                  type="ground"
                />
                <Arrow length={0} />
                <TechTreeItem
                  link="/Type_10"
                  title="Type 10"
                  item_type="own"
                  text="Type 10"
                  intname="jp_type_10"
                  type="ground"
                />
                <EmptyDiv />
              </td>
              <td>
                <TechTreeItem
                  link="/Type_16"
                  title="Type 16"
                  item_type="own"
                  text="Type 16"
                  intname="jp_type_16"
                  type="ground"
                />
                <EmptyDiv />
              </td>
              <td>
                <TechTreeItem
                  link="/Type_93"
                  title="Type 93"
                  item_type="own"
                  text="Type 93"
                  intname="jp_type_93"
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
        <a href="https://yewtu.be/nMRCUrSEh_k">
          <b>Japanese Tanks</b> - <i>War Thunder Official Channel</i>
        </a>
        <a href="https://yewtu.be/z6xmzvE-nWM">
          <b>Climbing the ranks with Japanese tanks</b> - <i>War Thunder Official Channel</i>
        </a>
        <a href="https://yewtu.be/fa1_8SqJcT0">
          <b>The Shooting Range #97</b> - <i>Special</i> section at 11:19 discusses Japanese premium
          tanks.
        </a>
        <a href="https://yewtu.be/NRYaVOD5EB0">
          <b>Crash Course: Japanese Tanks</b> - <i>War Thunder Official Channel</i>
        </a>
        <a href="https://yewtu.be/h3sz4jizQO4">
          <b>How To Pronounce Japanese Tank Names (And What They Mean)</b> - <i>NUSensei</i> - (1.69
          Patch - 2017)
        </a>
      </div>
    </div>
  );
}
