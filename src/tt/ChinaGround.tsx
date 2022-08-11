import { Arrow, EmptyDiv, MediaHead, Rank, Research, TechTreeItem, TreeFolder } from "../TechTree";

export function ChinaGround() {
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
                  link="/M8_LAC_(China)"
                  title="M8 LAC (China)"
                  item_type="own"
                  text="␗M8 LAC"
                  intname="cn_m8_greyhound"
                  type="ground"
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
                  link="/T-26_(China)"
                  title="T-26 (China)"
                  item_type="own"
                  text="␗T-26"
                  intname="cn_t_26_1940"
                  type="ground"
                />
                <Arrow type="small" />
                <TechTreeItem
                  link="/Chi-Ha_(China)"
                  title="Chi-Ha (China)"
                  item_type="own"
                  text="␗Chi-Ha"
                  intname="cn_type_97_chi_ha"
                  type="ground"
                />
                <Arrow type="small" />
              </td>
              <td>
                <EmptyDiv />
              </td>
              <td>
                <TechTreeItem
                  link="/M8_HMC_(China)"
                  title="M8 HMC (China)"
                  item_type="own"
                  text="␗M8 HMC"
                  intname="cn_m8_scott"
                  type="ground"
                />
                <Arrow type="small" />
                <TechTreeItem
                  link="/SU-76M_(China)"
                  title="SU-76M (China)"
                  item_type="own"
                  text="␗SU-76M"
                  intname="cn_su_76m_1943"
                  type="ground"
                />
                <Arrow type="small" />
              </td>
              <td style={{ borderLeft: "solid 1px #cccccc" }}>
                <TechTreeItem
                  link="/T-26_No.531"
                  title="T-26 No.531"
                  item_type="prem"
                  text="T-26 No.531"
                  intname="cn_t_26_no531"
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
                <TreeFolder name="␗M3/M5" img="cn_m3_m5_stuart_group">
                  <TechTreeItem
                    link="/M3A3_Stuart_(China)"
                    title="M3A3 Stuart (China)"
                    item_type="own"
                    text="␗M3A3 Stuart"
                    intname="cn_m3a3_stuart"
                    type="ground"
                  />
                  <Arrow type="small" />
                  <TechTreeItem
                    link="/M5A1_(China)"
                    title="M5A1 (China)"
                    item_type="own"
                    text="␗M5A1"
                    intname="cn_m5a1_stuart"
                    type="ground"
                  />
                </TreeFolder>
                <Arrow type="small" />
                <TechTreeItem
                  link="/M24_(China)"
                  title="M24 (China)"
                  item_type="own"
                  text="␗M24"
                  intname="cn_m24_chaffee"
                  type="ground"
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
                  link="/Chi-Ha_Kai_(China)"
                  title="Chi-Ha Kai (China)"
                  item_type="own"
                  text="␗Chi-Ha Kai"
                  intname="cn_type_97_kai"
                  type="ground"
                />
                <Arrow type="small" />
                <TechTreeItem
                  link="/T-34_(1943)_(China)"
                  title="T-34 (1943) (China)"
                  item_type="own"
                  text="␗T-34 (1943)"
                  intname="cn_t_34_1942"
                  type="ground"
                />
                <Arrow type="small" />
                <TechTreeItem
                  link="/M4A4_(China)"
                  title="M4A4 (China)"
                  item_type="own"
                  text="␗M4A4"
                  intname="cn_m4a4_sherman"
                  type="ground"
                />
                <Arrow type="small" />
              </td>
              <td>
                <TechTreeItem
                  link="/CCKW_353_(M45)"
                  title="CCKW 353 (M45)"
                  item_type="own"
                  text="CCKW 353 (M45)"
                  intname="cn_gmc_cckw_353_m45_quad"
                  type="ground"
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
                  link="/LVT(A)(4)_(ZiS-2)"
                  title="LVT(A)(4) (ZiS-2)"
                  item_type="own"
                  text="LVT(A)(4) (ZiS-2)"
                  intname="cn_lvt_4_zis_2"
                  type="ground"
                />
                <Arrow type="small" />
                <TechTreeItem
                  link="/M10_GMC_(China)"
                  title="M10 GMC (China)"
                  item_type="own"
                  text="␗M10 GMC"
                  intname="cn_m10"
                  type="ground"
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
                  link="/M4A4_(1st_PTG)_(China)"
                  title="M4A4 (1st PTG) (China)"
                  item_type="prem"
                  text="␗M4A4 (1st PTG)"
                  intname="cn_m4a4_sherman_1st_ptg"
                  type="ground"
                />
                <EmptyDiv />
              </td>
              <td>
                <TechTreeItem
                  link="/M3A3_(1st_PTG)_(China)"
                  title="M3A3 (1st PTG) (China)"
                  item_type="prem"
                  text="␗M3A3 (1st PTG)"
                  intname="cn_m3a3_stuart_1st_ptg"
                  type="ground"
                />
                <EmptyDiv />
              </td>
            </tr>
            <tr>
              <Rank rank="III" />
              <td>
                <TechTreeItem
                  link="/PT-76_(China)"
                  title="PT-76 (China)"
                  item_type="own"
                  text="␗PT-76"
                  intname="cn_pt_76"
                  type="ground"
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
                  link="/M4A1_(75)_W_(China)"
                  title="M4A1 (75) W (China)"
                  item_type="own"
                  text="␗M4A1 (75) W"
                  intname="cn_m4a1_76w_sherman"
                  type="ground"
                />
                <Arrow type="small" />
                <TechTreeItem
                  link="/T-34-85_(S-53)_(China)"
                  title="T-34-85 (S-53) (China)"
                  item_type="own"
                  text="␗Т-34-85 (S-53)"
                  intname="cn_t_34_85_d_5t"
                  type="ground"
                />
                <Arrow type="small" />
              </td>
              <td>
                <TechTreeItem
                  link="/ZSD63"
                  title="ZSD63"
                  item_type="own"
                  text="ZSD63"
                  intname="cn_zsd63_pg87"
                  type="ground"
                />
                <Arrow type="small" />
                <TechTreeItem
                  link="/M42_(China)"
                  title="M42 (China)"
                  item_type="own"
                  text="␗M42"
                  intname="cn_m42_duster"
                  type="ground"
                />
                <Arrow type="small" />
              </td>
              <td>
                <TechTreeItem
                  link="/ISU-152_(China)"
                  title="ISU-152 (China)"
                  item_type="own"
                  text="␗ISU-152"
                  intname="cn_isu_152"
                  type="ground"
                />
                <Arrow type="small" />
                <TechTreeItem
                  link="/M18_GMC_(China)"
                  title="M18 GMC (China)"
                  item_type="own"
                  text="␗M18 GMC"
                  intname="cn_m18_hellcat"
                  type="ground"
                />
                <Arrow type="small" />
              </td>
              <td style={{ borderLeft: "solid 1px #cccccc" }}>
                <EmptyDiv />
              </td>
              <td>
                <TechTreeItem
                  link="/M64"
                  title="M64"
                  item_type="prem"
                  text="M64"
                  intname="cn_type_64"
                  type="ground"
                />
                <EmptyDiv />
              </td>
            </tr>
            <tr>
              <Rank rank="IV" />
              <td>
                <TechTreeItem
                  link="/Type_63-I"
                  title="Type 63-I"
                  item_type="own"
                  text="Type 63-I"
                  intname="cn_type_63_i"
                  type="ground"
                />
                <Arrow type="small" />
                <TechTreeItem
                  link="/Type_62"
                  title="Type 62"
                  item_type="own"
                  text="Type 62"
                  intname="cn_type_62"
                  type="ground"
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
                  link="/T-34-85_Gai"
                  title="T-34-85 Gai"
                  item_type="own"
                  text="Т-34-85 Gai"
                  intname="cn_type_58"
                  type="ground"
                />
                <Arrow type="small" />
                <TechTreeItem
                  link="/IS-2_(China)"
                  title="IS-2 (China)"
                  item_type="own"
                  text="␗IS-2"
                  intname="cn_is_2_1943"
                  type="ground"
                />
                <Arrow type="small" />
                <TechTreeItem
                  link="/IS-2_mod.1944_(China)"
                  title="IS-2 mod.1944 (China)"
                  item_type="own"
                  text="␗IS-2 mod.1944"
                  intname="cn_is_2_1944"
                  type="ground"
                />
                <Arrow type="small" />
              </td>
              <td>
                <TechTreeItem
                  link="/Ph%C3%B2ng_kh%C3%B4ng_T-34"
                  title="Phòng không T-34"
                  item_type="own"
                  text="Phòng không T-34"
                  intname="cn_type_65_aa"
                  type="ground"
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
                  link="/ISU-122_(China)"
                  title="ISU-122 (China)"
                  item_type="own"
                  text="␗ISU-122"
                  intname="cn_isu_122"
                  type="ground"
                />
                <Arrow type="small" />
                <TechTreeItem
                  link="/M36_GMC_(China)"
                  title="M36 GMC (China)"
                  item_type="own"
                  text="␗M36 GMC"
                  intname="cn_m36"
                  type="ground"
                />
                <Arrow type="small" />
                <TechTreeItem
                  link="/SU-100_(China)"
                  title="SU-100 (China)"
                  item_type="own"
                  text="␗SU-100"
                  intname="cn_su_100_1945"
                  type="ground"
                />
                <Arrow type="small" />
              </td>
              <td style={{ borderLeft: "solid 1px #cccccc" }}>
                <TechTreeItem
                  link="/T-34-85_No.215"
                  title="T-34-85 No.215"
                  item_type="prem"
                  text="T-34-85 No.215"
                  intname="cn_t_34_85_zis_53_no215"
                  type="ground"
                />
                <EmptyDiv />
                <TechTreeItem
                  link="/IS-2_No.402"
                  title="IS-2 No.402"
                  item_type="prem"
                  text="IS-2 No.402"
                  intname="cn_is_2_1943_no402"
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
                  link="/ZBD86"
                  title="ZBD86"
                  item_type="own"
                  text="ZBD86"
                  intname="cn_type_86"
                  type="ground"
                />
                <Arrow type="small" />
                <TechTreeItem
                  link="/M48A1_(China)"
                  title="M48A1 (China)"
                  item_type="own"
                  text="␗M48A1"
                  intname="cn_m48a1_patton_iii"
                  type="ground"
                />
                <Arrow type="small" />
              </td>
              <td>
                <TechTreeItem
                  link="/Type_59"
                  title="Type 59"
                  item_type="own"
                  text="Type 59"
                  intname="cn_type_59"
                  type="ground"
                />
                <Arrow type="small" />
                <TechTreeItem
                  link="/Type_69"
                  title="Type 69"
                  item_type="own"
                  text="Type 69"
                  intname="cn_type_69"
                  type="ground"
                />
                <Arrow type="small" />
              </td>
              <td>
                <TechTreeItem
                  link="/WZ305"
                  title="WZ305"
                  item_type="own"
                  text="WZ305"
                  intname="cn_wz_305"
                  type="ground"
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
                  link="/M113A1_(TOW)_(China)"
                  title="M113A1 (TOW) (China)"
                  item_type="own"
                  text="␗M113A1 (TOW)"
                  intname="cn_m113a1_tow"
                  type="ground"
                />
                <Arrow type="small" />
                <TechTreeItem
                  link="/PTL02"
                  title="PTL02"
                  item_type="own"
                  text="PTL02"
                  intname="cn_ptl_02"
                  type="ground"
                />
                <Arrow type="small" />
              </td>
              <td style={{ borderLeft: "solid 1px #cccccc" }}>
                <TechTreeItem
                  link="/ZTZ59A"
                  title="ZTZ59A"
                  item_type="prem"
                  text="ZTZ59A"
                  intname="cn_ztz_59a"
                  type="ground"
                />
                <EmptyDiv />
              </td>
              <td>
                <EmptyDiv />
              </td>
            </tr>
            <tr>
              <Rank rank="VI" />
              <td>
                <TechTreeItem
                  link="/M41D"
                  title="M41D"
                  item_type="own"
                  text="M41D"
                  intname="cn_m_41d"
                  type="ground"
                />
                <Arrow type="small" />
                <TechTreeItem
                  link="/M60A3_TTS_(China)"
                  title="M60A3 TTS (China)"
                  item_type="own"
                  text="␗M60A3 TTS"
                  intname="cn_m60a3_tts"
                  type="ground"
                />
                <Arrow type="small" />
                <TechTreeItem
                  link="/CM11"
                  title="CM11"
                  item_type="own"
                  text="CM11"
                  intname="cn_cm11"
                  type="ground"
                />
              </td>
              <td>
                <TechTreeItem
                  link="/ZTZ59D1"
                  title="ZTZ59D1"
                  item_type="own"
                  text="ZTZ59D1"
                  intname="cn_type_59d"
                  type="ground"
                />
                <Arrow type="small" />
                <TechTreeItem
                  link="/ZTZ88A"
                  title="ZTZ88A"
                  item_type="own"
                  text="ZTZ88A"
                  intname="cn_ztz_88a"
                  type="ground"
                />
                <Arrow type="small" />
                <TechTreeItem
                  link="/ZTZ96"
                  title="ZTZ96"
                  item_type="own"
                  text="ZTZ96"
                  intname="cn_ztz_96"
                  type="ground"
                />
                <Arrow type="small" />
                <TechTreeItem
                  link="/ZTZ96A"
                  title="ZTZ96A"
                  item_type="own"
                  text="ZTZ96A"
                  intname="cn_ztz_96a"
                  type="ground"
                />
                <Arrow type="small" />
              </td>
              <td>
                <TechTreeItem
                  link="/PGZ09"
                  title="PGZ09"
                  item_type="own"
                  text="PGZ09"
                  intname="cn_pgz_09"
                  type="ground"
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
                  link="/CM25"
                  title="CM25"
                  item_type="own"
                  text="CM25"
                  intname="cn_cm_25"
                  type="ground"
                />
                <Arrow type="small" />
                <TechTreeItem
                  link="/PTZ89"
                  title="PTZ89"
                  item_type="own"
                  text="PTZ89"
                  intname="cn_ptz_89"
                  type="ground"
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
                  link="/WMA301"
                  title="WMA301"
                  item_type="prem"
                  text="WMA301"
                  intname="cn_wma_301"
                  type="ground"
                />
                <EmptyDiv />
                <TechTreeItem
                  link="/T-69_II_G"
                  title="T-69 II G"
                  item_type="prem"
                  text="T-69 II G"
                  intname="cn_type_69_2g"
                  type="ground"
                />
                <EmptyDiv />
                <TechTreeItem
                  link="/ZTZ96A_(P)"
                  title="ZTZ96A (P)"
                  item_type="prem"
                  text="ZTZ96A (P)"
                  intname="cn_ztz_96a_prot"
                  type="ground"
                />
              </td>
              <td>
                <TechTreeItem
                  link="/T-62_545_(China)"
                  title="T-62 545 (China)"
                  item_type="prem"
                  text="Т-62 №545"
                  intname="cn_t_62"
                  type="ground"
                />
              </td>
            </tr>
            <tr>
              <Rank rank="VII" />
              <td>
                <EmptyDiv />
              </td>
              <td>
                <TechTreeItem
                  link="/ZTZ99-II"
                  title="ZTZ99-II"
                  item_type="own"
                  text="ZTZ99-II"
                  intname="cn_ztz_99"
                  type="ground"
                />
                <Arrow type="small" />
                <TechTreeItem
                  link="/ZTZ99-III"
                  title="ZTZ99-III"
                  item_type="own"
                  text="ZTZ99-III"
                  intname="cn_ztz_99_w"
                  type="ground"
                />
                <Arrow type="small" />
                <TechTreeItem
                  link="/ZTZ99A"
                  title="ZTZ99A"
                  item_type="own"
                  text="ZTZ99A"
                  intname="cn_ztz_99a"
                  type="ground"
                />
                <EmptyDiv />
              </td>
              <td>
                <TechTreeItem
                  link="/PGZ04A"
                  title="PGZ04A"
                  item_type="own"
                  text="PGZ04A"
                  intname="cn_pgz_04a"
                  type="ground"
                />
                <EmptyDiv />
              </td>
              <td>
                <TechTreeItem
                  link="/ZLT11"
                  title="ZLT11"
                  item_type="own"
                  text="ZLT11"
                  intname="cn_ztl_11"
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
    </div>
  );
}
