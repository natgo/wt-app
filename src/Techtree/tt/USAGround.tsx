import { Arrow } from "../Arrow";
import { EmptyDiv } from "../EmptyDiv";
import { MediaHead } from "../MediaHead";
import { Rank } from "../Rank";
import { Research } from "../Research";
import { TechTreeItem } from "../TechTreeItem";
import { TreeFolder } from "../TreeFolder";

export function USAGround() {
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
                  link="/M2A4"
                  title="M2A4"
                  item_type="own"
                  text="M2A4"
                  intname="us_m2a4"
                  type="ground"
                />
                <Arrow type="small" />
                <TreeFolder name="M3/M3A1 Stuart" img="m3_light_group">
                  <TechTreeItem
                    link="/M3_Stuart"
                    title="M3 Stuart"
                    item_type="own"
                    text="M3 Stuart"
                    intname="us_m3_stuart"
                    type="ground"
                  />
                  <Arrow type="small" />
                  <TechTreeItem
                    link="/M3A1_Stuart"
                    title="M3A1 Stuart"
                    item_type="own"
                    text="M3A1 Stuart"
                    intname="us_m3a1_stuart"
                    type="ground"
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
                  link="/M2"
                  title="M2"
                  item_type="own"
                  text="M2"
                  intname="us_m2_medium"
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
                  link="/LVT(A)(1)"
                  title="LVT(A)(1)"
                  item_type="own"
                  text="LVT(A)(1)"
                  intname="us_lvt_a_1"
                  type="ground"
                />
                <Arrow type="small" />
                <TechTreeItem
                  link="/M22"
                  title="M22"
                  item_type="own"
                  text="M22"
                  intname="us_m22_locust"
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
                  link="/M13_MGMC"
                  title="M13 MGMC"
                  item_type="own"
                  text="M13 MGMC"
                  intname="us_halftrack_m13"
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
                  link="/M2A2"
                  title="M2A2"
                  item_type="own"
                  text="M2A2"
                  intname="us_m2a2"
                  type="ground"
                />
                <Arrow type="small" />
                <TechTreeItem
                  link="/M8_Scott"
                  title="M8 Scott"
                  item_type="own"
                  text="M8 HMC"
                  intname="us_m8_scott"
                  type="ground"
                />
                <Arrow type="small" />
                <TechTreeItem
                  link="/M3_GMC"
                  title="M3 GMC"
                  item_type="own"
                  text="M3 GMC"
                  intname="us_halftrack_m3_75mm_gmc"
                  type="ground"
                />
                <Arrow type="small" />
              </td>
              <td style={{ borderLeft: "solid 1px #cccccc" }}>
                <TechTreeItem
                  link="/M2A4_(1st_Arm.Div.)"
                  title="M2A4 (1st Arm.Div.)"
                  item_type="prem"
                  text="M2A4 (1st Arm.Div.)"
                  intname="us_m2a4_1st_armor_div"
                  type="ground"
                />
                <EmptyDiv />
                <TechTreeItem
                  link="/LVT(A)(4)"
                  title="LVT(A)(4)"
                  item_type="prem"
                  text="LVT(A)(4)"
                  intname="us_lvt_a_4"
                  type="ground"
                />
                <EmptyDiv />
                <TechTreeItem
                  link="/M3A1_(USMC)"
                  title="M3A1 (USMC)"
                  item_type="prem"
                  text="M3A1 (USMC)"
                  intname="us_m3a1_stuart_usmc"
                  type="ground"
                />
                <EmptyDiv />
              </td>
              <td>
                <TechTreeItem
                  link="/M8_LAC"
                  title="M8 LAC"
                  item_type="prem"
                  text="M8 LAC"
                  intname="us_m8_greyhound"
                  type="ground"
                />
                <EmptyDiv />
                <TechTreeItem
                  link="/M8A1_GMC"
                  title="M8A1 GMC"
                  item_type="prem"
                  text="M8A1 GMC"
                  intname="us_m8a1"
                  type="ground"
                />
                <EmptyDiv />
              </td>
            </tr>
            <tr>
              <Rank rank="II" />
              <td>
                <TechTreeItem
                  link="/M5A1"
                  title="M5A1"
                  item_type="own"
                  text="M5A1"
                  intname="us_m5a1_stuart"
                  type="ground"
                />
                <Arrow type="small" />
                <TechTreeItem
                  link="/M24"
                  title="M24"
                  item_type="own"
                  text="M24"
                  intname="us_m24_chaffee"
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
                  link="/M3_Lee"
                  title="M3 Lee"
                  item_type="own"
                  text="M3 Lee"
                  intname="us_m3_lee"
                  type="ground"
                />
                <Arrow type="small" />
                <TechTreeItem
                  link="/M4A1"
                  title="M4A1"
                  item_type="own"
                  text="M4A1"
                  intname="us_m4a1_1942_sherman"
                  type="ground"
                />
                <Arrow type="small" />
                <TechTreeItem
                  link="/M4"
                  title="M4"
                  item_type="own"
                  text="M4"
                  intname="us_m4_sherman"
                  type="ground"
                />
              </td>
              <td>
                <TechTreeItem
                  link="/M4A3_(105)"
                  title="M4A3 (105)"
                  item_type="own"
                  text="M4A3 (105)"
                  intname="us_m4a3_105_sherman"
                  type="ground"
                />
                <EmptyDiv />
              </td>
              <td>
                <TechTreeItem
                  link="/M15_CGMC"
                  title="M15 CGMC"
                  item_type="own"
                  text="M15 CGMC"
                  intname="us_halftrack_m15"
                  type="ground"
                />
                <Arrow type="small" />
                <TechTreeItem
                  link="/M16_MGMC"
                  title="M16 MGMC"
                  item_type="own"
                  text="M16 MGMC"
                  intname="us_halftrack_m16"
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
                  link="/M10_GMC"
                  title="M10 GMC"
                  item_type="own"
                  text="M10 GMC"
                  intname="us_m10"
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
              <td style={{ borderLeft: "solid 1px #cccccc" }}>
                <TechTreeItem
                  link="/Stuart_VI_(5th_CAD)_(USA)"
                  title="Stuart VI (5th CAD) (USA)"
                  item_type="prem"
                  text="▃Stuart VI (5th CAD)"
                  intname="us_m5a1_stuart_canadian_5st_arm"
                  type="ground"
                />
                <EmptyDiv />
                <TechTreeItem
                  link="/Grant_I_(USA)"
                  title="Grant I (USA)"
                  item_type="prem"
                  text="▃Grant I"
                  intname="us_mk1_grant"
                  type="ground"
                />
                <EmptyDiv />
                <TechTreeItem
                  link="/M4A5"
                  title="M4A5"
                  item_type="prem"
                  text="M4A5"
                  intname="us_m4a5_ram_2"
                  type="ground"
                />
                <EmptyDiv />
                <TechTreeItem
                  link="/M24_(TL)"
                  title="M24 (TL)"
                  item_type="own"
                  text="M24 (TL)"
                  intname="us_m24_chaffee_tl"
                  type="ground"
                />
                <EmptyDiv />
              </td>
              <td>
                <TechTreeItem
                  link="/M5A1_TD"
                  title="M5A1 TD"
                  item_type="own"
                  text="M5A1 TD"
                  intname="us_m5a1_stuart_td"
                  type="ground"
                />
                <EmptyDiv />
                <TechTreeItem
                  link="/LVT(A)(4)_(ZIS-2)_(USA)"
                  title="LVT(A)(4) (ZIS-2) (USA)"
                  item_type="own"
                  text="▃LVT(A)(4) (ZIS-2)"
                  intname="us_lvt_4_zis_2"
                  type="ground"
                />
                <EmptyDiv />
                <TechTreeItem
                  link="/T18E2"
                  title="T18E2"
                  item_type="prem"
                  text="T18E2"
                  intname="us_t18_e2"
                  type="ground"
                />
                <EmptyDiv />
              </td>
            </tr>
            <tr>
              <Rank rank="III" />
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
              <td>
                <TechTreeItem
                  link="/M4A2"
                  title="M4A2"
                  item_type="own"
                  text="M4A2"
                  intname="us_m4a2_sherman"
                  type="ground"
                />
                <Arrow type="small" />
                <TechTreeItem
                  link="/M4A1_(76)_W"
                  title="M4A1 (76) W"
                  item_type="own"
                  text="M4A1 (76) W"
                  intname="us_m4a1_76w_sherman"
                  type="ground"
                />
                <Arrow type="small" />
                <TechTreeItem
                  link="/M4A2_(76)_W"
                  title="M4A2 (76) W"
                  item_type="own"
                  text="M4A2 (76) W"
                  intname="us_m4a2_76w_sherman"
                  type="ground"
                />
                <Arrow type="small" />
              </td>
              <td>
                <TechTreeItem
                  link="/M6A1"
                  title="M6A1"
                  item_type="own"
                  text="M6A1"
                  intname="us_m6a1"
                  type="ground"
                />
                <Arrow type="small" />
                <TechTreeItem
                  link="/M4A3E2"
                  title="M4A3E2"
                  item_type="own"
                  text="M4A3E2"
                  intname="us_m4a3e2_sherman_jumbo"
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
                  link="/M19A1"
                  title="M19A1"
                  item_type="own"
                  text="M19A1"
                  intname="us_m19"
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
                  link="/M18_GMC"
                  title="M18 GMC"
                  item_type="own"
                  text="M18 GMC"
                  intname="us_m18_hellcat"
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
                  link="/T14"
                  title="T14"
                  item_type="prem"
                  text="T14"
                  intname="us_t14"
                  type="ground"
                />
                <EmptyDiv />
                <TechTreeItem
                  link="/M18_%22Black_Cat%22"
                  title='M18 "Black Cat"'
                  item_type="prem"
                  text='M18 "Black Cat"'
                  intname="us_m18_hellcat_black_cat"
                  type="ground"
                />
                <EmptyDiv />
                <TechTreeItem
                  link="/Calliope"
                  title="Calliope"
                  item_type="prem"
                  text="Calliope"
                  intname="us_m4_sherman_calliope"
                  type="ground"
                />
                <EmptyDiv />
              </td>
              <td>
                <TechTreeItem
                  link="/T55E1"
                  title="T55E1"
                  item_type="prem"
                  text="T55E1"
                  intname="us_t55e1"
                  type="ground"
                />
                <EmptyDiv />
                <TechTreeItem
                  link="/Cobra_King"
                  title="Cobra King"
                  item_type="prem"
                  text="Cobra King"
                  intname="us_m4a3e2_sherman_jumbo_cobra_king"
                  type="ground"
                />
                <EmptyDiv />
                <TechTreeItem
                  link="/T20"
                  title="T20"
                  item_type="prem"
                  text="T20"
                  intname="us_t20"
                  type="ground"
                />
                <EmptyDiv />
              </td>
            </tr>
            <tr>
              <Rank rank="IV" />
              <td>
                <TechTreeItem
                  link="/M41A1"
                  title="M41A1"
                  item_type="own"
                  text="M41A1"
                  intname="us_m41_walker_bulldog"
                  type="ground"
                />
                <Arrow type="small" />
                <TechTreeItem
                  link="/M56"
                  title="M56"
                  item_type="own"
                  text="M56"
                  intname="us_m56_scorpion"
                  type="ground"
                />
                <Arrow type="small" />
                <TechTreeItem
                  link="/T92"
                  title="T92"
                  item_type="own"
                  text="T92"
                  intname="us_t92"
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
                  link="/M4A3_(76)_W"
                  title="M4A3 (76) W"
                  item_type="own"
                  text="M4A3 (76) W"
                  intname="us_m4a3e8_76w_sherman"
                  type="ground"
                />
                <Arrow type="small" />
                <TechTreeItem
                  link="/T25"
                  title="T25"
                  item_type="own"
                  text="T25"
                  intname="us_t25"
                  type="ground"
                />
                <Arrow type="small" />
                <TechTreeItem
                  link="/M26"
                  title="M26"
                  item_type="own"
                  text="M26"
                  intname="us_m26_pershing"
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
                  link="/M4A3E2_(76)_W"
                  title="M4A3E2 (76) W"
                  item_type="own"
                  text="M4A3E2 (76) W"
                  intname="us_m4a3e2_76w_sherman_jumbo"
                  type="ground"
                />
                <Arrow type="small" />
                <TechTreeItem
                  link="/T26E5"
                  title="T26E5"
                  item_type="own"
                  text="T26E5"
                  intname="us_t26e5"
                  type="ground"
                />
                <Arrow type="small" />
                <TechTreeItem
                  link="/T26E1-1"
                  title="T26E1-1"
                  item_type="own"
                  text="T26E1-1"
                  intname="us_t26e4_superpershing"
                  type="ground"
                />
                <Arrow type="small" />
                <TechTreeItem
                  link="/T34"
                  title="T34"
                  item_type="own"
                  text="T34"
                  intname="us_t34"
                  type="ground"
                />
                <Arrow type="small" />
              </td>
              <td>
                <TechTreeItem
                  link="/M42"
                  title="M42"
                  item_type="own"
                  text="M42"
                  intname="us_m42_duster"
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
                  link="/M36_GMC"
                  title="M36 GMC"
                  item_type="own"
                  text="M36 GMC"
                  intname="us_m36"
                  type="ground"
                />
                <Arrow type="small" />
                <TechTreeItem
                  link="/M36B2"
                  title="M36B2"
                  item_type="own"
                  text="M36B2"
                  intname="us_m36b2"
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
                  link="/Super_Hellcat"
                  title="Super Hellcat"
                  item_type="prem"
                  text="Super Hellcat"
                  intname="us_m18_super_hellcat"
                  type="ground"
                />
                <EmptyDiv />
                <TechTreeItem
                  link="/M26_T99"
                  title="M26 T99"
                  item_type="prem"
                  text="M26 T99"
                  intname="us_m26_t99"
                  type="ground"
                />
                <EmptyDiv />
                <TechTreeItem
                  link="/M26E1"
                  title="M26E1"
                  item_type="prem"
                  text="M26E1"
                  intname="us_m26e1_pershing"
                  type="ground"
                />
                <EmptyDiv />
                <TechTreeItem
                  link="/M46_%22Tiger%22"
                  title='M46 "Tiger"'
                  item_type="prem"
                  text='M46 "Tiger"'
                  intname="us_m46_patton_73_armor_bat"
                  type="ground"
                />
                <EmptyDiv />
              </td>
              <td>
                <TechTreeItem
                  link="/T28"
                  title="T28"
                  item_type="prem"
                  text="T28"
                  intname="us_t28"
                  type="ground"
                />
                <EmptyDiv />
                <TechTreeItem
                  link="/T29"
                  title="T29"
                  item_type="prem"
                  text="T29"
                  intname="us_t29"
                  type="ground"
                />
                <EmptyDiv />
                <TechTreeItem
                  link="/T30"
                  title="T30"
                  item_type="prem"
                  text="T30"
                  intname="us_t30"
                  type="ground"
                />
                <EmptyDiv />
                <TechTreeItem
                  link="/M6A2E1"
                  title="M6A2E1"
                  item_type="prem"
                  text="M6A2E1"
                  intname="us_m6a2e1"
                  type="ground"
                />
                <EmptyDiv />
              </td>
            </tr>
            <tr>
              <Rank rank="V" />
              <td>
                <TechTreeItem
                  link="/M50"
                  title="M50"
                  item_type="own"
                  text="M50"
                  intname="us_m50_ontos"
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
                <TreeFolder name="M46/M47" img="us_m46_m47_group">
                  <TechTreeItem
                    link="/M46"
                    title="M46"
                    item_type="own"
                    text="M46"
                    intname="us_m46_patton"
                    type="ground"
                  />
                  <Arrow type="small" />
                  <TechTreeItem
                    link="/M47"
                    title="M47"
                    item_type="own"
                    text="M47"
                    intname="us_m47_patton_ii"
                    type="ground"
                  />
                </TreeFolder>
                <Arrow type="small" />
                <TreeFolder name="M48/M60" img="us_m48_m60_group">
                  <TechTreeItem
                    link="/M48A1"
                    title="M48A1"
                    item_type="own"
                    text="M48A1"
                    intname="us_m48a1_patton_iii"
                    type="ground"
                  />
                  <Arrow type="small" />
                  <TechTreeItem
                    link="/M60"
                    title="M60"
                    item_type="own"
                    text="M60"
                    intname="us_m60"
                    type="ground"
                  />
                </TreeFolder>
                <Arrow type="small" />
              </td>
              <td>
                <TreeFolder name="T32/T32E1" img="us_t32_group">
                  <TechTreeItem
                    link="/T32"
                    title="T32"
                    item_type="own"
                    text="T32"
                    intname="us_t32"
                    type="ground"
                  />
                  <Arrow type="small" />
                  <TechTreeItem
                    link="/T32E1"
                    title="T32E1"
                    item_type="own"
                    text="T32E1"
                    intname="us_t32e1"
                    type="ground"
                  />
                </TreeFolder>
                <Arrow type="small" />
                <TechTreeItem
                  link="/M103"
                  title="M103"
                  item_type="own"
                  text="M103"
                  intname="us_m103"
                  type="ground"
                />
                <Arrow type="small" />
              </td>
              <td>
                <TechTreeItem
                  link="/M163"
                  title="M163"
                  item_type="own"
                  text="M163"
                  intname="us_m163_vulcan"
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
                  link="/T95"
                  title="T95"
                  item_type="own"
                  text="T95"
                  intname="us_t95"
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
                  link="/T114"
                  title="T114"
                  item_type="prem"
                  text="T114"
                  intname="us_t114"
                  type="ground"
                />
                <EmptyDiv />
                <TechTreeItem
                  link="/T54E1"
                  title="T54E1"
                  item_type="prem"
                  text="T54E1"
                  intname="us_t54e1"
                  type="ground"
                />
                <EmptyDiv />
              </td>
              <td>
                <TechTreeItem
                  link="/Magach_3_(ERA)_(USA)"
                  title="Magach 3 (ERA) (USA)"
                  item_type="prem"
                  text="▃Magach 3 (ERA)"
                  intname="us_magach_3"
                  type="ground"
                />
                <EmptyDiv />
              </td>
            </tr>
            <tr>
              <Rank rank="VI" />
              <td>
                <TechTreeItem
                  link="/M551"
                  title="M551"
                  item_type="own"
                  text="M551"
                  intname="us_m551"
                  type="ground"
                />
                <Arrow type="small" />
                <TechTreeItem
                  link="/M3_Bradley"
                  title="M3 Bradley"
                  item_type="own"
                  text="M3 Bradley"
                  intname="us_m3_bradley"
                  type="ground"
                />
                <Arrow type="small" />
                <TechTreeItem
                  link="/M3A3_Bradley"
                  title="M3A3 Bradley"
                  item_type="own"
                  text="M3A3 Bradley"
                  intname="us_m3a3_bradley"
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
                  link="/M60A1_(AOS)"
                  title="M60A1 (AOS)"
                  item_type="own"
                  text="M60A1 (AOS)"
                  intname="us_m60a1"
                  type="ground"
                />
                <Arrow type="small" />
                <TechTreeItem
                  link="/M60A1_RISE_(P)"
                  title="M60A1 RISE (P)"
                  item_type="own"
                  text="M60A1 RISE (P)"
                  intname="us_m60a1_rise_passive_era"
                  type="ground"
                />
                <Arrow type="small" />
                <TechTreeItem
                  link="/M60A3_TTS"
                  title="M60A3 TTS"
                  item_type="own"
                  text="M60A3 TTS"
                  intname="us_m60a3_tts"
                  type="ground"
                />
              </td>
              <td>
                <TechTreeItem
                  link="/T95E1"
                  title="T95E1"
                  item_type="own"
                  text="T95E1"
                  intname="us_t95e1"
                  type="ground"
                />
                <Arrow type="small" />
                <TreeFolder name="MBT/XM" img="us_mbt_xm_group">
                  <TechTreeItem
                    link="/XM-803"
                    title="XM-803"
                    item_type="own"
                    text="XM-803"
                    intname="us_xm_803"
                    type="ground"
                  />
                  <Arrow type="small" />
                  <TechTreeItem
                    link="/MBT-70"
                    title="MBT-70"
                    item_type="own"
                    text="MBT-70"
                    intname="us_mbt_70"
                    type="ground"
                  />
                </TreeFolder>
                <Arrow type="small" />
                <TechTreeItem
                  link="/M1_Abrams"
                  title="M1 Abrams"
                  item_type="own"
                  text="M1 Abrams"
                  intname="us_m1_abrams"
                  type="ground"
                />
                <Arrow type="small" />
                <TechTreeItem
                  link="/M1A1"
                  title="M1A1"
                  item_type="own"
                  text="M1A1"
                  intname="us_m1a1_abrams"
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
                  link="/M247"
                  title="M247"
                  item_type="own"
                  text="M247"
                  intname="us_m247"
                  type="ground"
                />
                <Arrow type="small" />
                <TechTreeItem
                  link="/LAV-AD"
                  title="LAV-AD"
                  item_type="own"
                  text="LAV-AD"
                  intname="us_lav_ad"
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
                  link="/M60A2"
                  title="M60A2"
                  item_type="own"
                  text="M60A2"
                  intname="us_m60a2"
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
                  link="/XM-1_(GM)"
                  title="XM-1 (GM)"
                  item_type="prem"
                  text="XM-1 (GM)"
                  intname="us_xm1_gm"
                  type="ground"
                />
                <EmptyDiv />
                <TechTreeItem
                  link="/XM-1_(Chrysler)"
                  title="XM-1 (Chrysler)"
                  item_type="prem"
                  text="XM-1 (Chrysler)"
                  intname="us_xm1_chrysler"
                  type="ground"
                />
                <EmptyDiv />
                <TechTreeItem
                  link="/M901"
                  title="M901"
                  item_type="squad"
                  text="M901"
                  intname="us_m901_itv"
                  type="ground"
                />
                <EmptyDiv />
              </td>
              <td>
                <TechTreeItem
                  link="/Merkava_Mk.1_(USA)"
                  title="Merkava Mk.1 (USA)"
                  item_type="own"
                  text="▃Merkava Mk.1"
                  intname="us_merkava_mk_1"
                  type="ground"
                />
                <EmptyDiv />
                <TechTreeItem
                  link="/Merkava_Mk.2B_(USA)"
                  title="Merkava Mk.2B (USA)"
                  item_type="own"
                  text="▃Merkava Mk.2B"
                  intname="us_merkava_mk_2b_late"
                  type="ground"
                />
                <EmptyDiv />
                <TechTreeItem
                  link="/XM8"
                  title="XM8"
                  item_type="own"
                  text="XM8"
                  intname="us_xm_8"
                  type="ground"
                />
                <EmptyDiv />
                <TechTreeItem
                  link="/AGS"
                  title="AGS"
                  item_type="own"
                  text="AGS"
                  intname="us_ags_teledyne"
                  type="ground"
                />
                <EmptyDiv />
                <TechTreeItem
                  link="/CCVL"
                  title="CCVL"
                  item_type="own"
                  text="CCVL"
                  intname="us_ccvl"
                  type="ground"
                />
                <EmptyDiv />
              </td>
            </tr>
            <tr>
              <Rank rank="VII" />
              <td>
                <TechTreeItem
                  link="/HSTV-L"
                  title="HSTV-L"
                  item_type="own"
                  text="HSTV-L"
                  intname="us_hstv_l"
                  type="ground"
                />
                <EmptyDiv />
              </td>
              <td>
                <EmptyDiv />
              </td>
              <td>
                <TechTreeItem
                  link="/IPM1"
                  title="IPM1"
                  item_type="own"
                  text="IPM1"
                  intname="us_m1_ip_abrams"
                  type="ground"
                />
                <Arrow type="small" />
                <TechTreeItem
                  link="/M1A1_HC"
                  title="M1A1 HC"
                  item_type="own"
                  text="M1A1 HC"
                  intname="us_m1a1_hc_abrams"
                  type="ground"
                />
                <Arrow type="small" />
                <TechTreeItem
                  link="/M1A2_Abrams"
                  title="M1A2 Abrams"
                  item_type="own"
                  text="M1A2 Abrams"
                  intname="us_m1a2_abrams"
                  type="ground"
                />
                <EmptyDiv />
              </td>
              <td>
                <TechTreeItem
                  link="/XM975"
                  title="XM975"
                  item_type="own"
                  text="XM975"
                  intname="us_xm_975_roland"
                  type="ground"
                />
                <Arrow type="small" />
                <TechTreeItem
                  link="/ADATS"
                  title="ADATS"
                  item_type="own"
                  text="ADATS"
                  intname="us_adats_bradley"
                  type="ground"
                />
                <EmptyDiv />
              </td>
              <td>
                <TechTreeItem
                  link="/M1128"
                  title="M1128"
                  item_type="own"
                  text="M1128"
                  intname="us_m1128_mgs"
                  type="ground"
                />
                <EmptyDiv />
              </td>
              <td style={{ borderLeft: "solid 1px #cccccc" }}>
                <TechTreeItem
                  link="/M1A1_AIM"
                  title="M1A1 AIM"
                  item_type="squad"
                  text="M1A1 AIM"
                  intname="us_m1a1_aim_abrams"
                  type="ground"
                />
                <EmptyDiv />
              </td>
              <td>
                <TechTreeItem
                  link="/M60_AMBT"
                  title="M60 AMBT"
                  item_type="own"
                  text="M60 AMBT"
                  intname="us_m60a3_slep"
                  type="ground"
                />
                <EmptyDiv />
                <TechTreeItem
                  link="/Merkava_Mk.3D_(USA)"
                  title="Merkava Mk.3D (USA)"
                  item_type="own"
                  text="▃Merkava Mk.3D"
                  intname="us_merkava_mk_3d"
                  type="ground"
                />
                <EmptyDiv />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <MediaHead />
      <div className="video_gallery">
        <a href="https://yewtu.be/eiMde1jVPkM">
          <b>American ground forces Rank V</b> - <i>Oxy</i>
        </a>
        <a href="https://yewtu.be/rXZ0G3sAKQc">
          <b>American ground forces Rank IV</b> - <i>Oxy</i>
        </a>
        <a href="https://yewtu.be/_QaAt6D52Kg">
          <b>American ground forces Rank III - Review and Analysis</b> - <i>Oxy</i>
        </a>
        <a href="https://yewtu.be/QzkUxYDTt1U">
          <b>American ground forces Rank II - Review and Analysis</b> - <i>Oxy</i>
        </a>
        <a href="https://yewtu.be/3G6fGMDbdgE">
          <b>American ground forces Rank I - Review and Analysis</b> - <i>Oxy</i>
        </a>
        <a href="https://yewtu.be/aSP1Bps2w0w">
          <b>Climbing the ranks with American vehicles</b> - <i>War Thunder Official Channel</i>
        </a>
      </div>
    </div>
  );
}
