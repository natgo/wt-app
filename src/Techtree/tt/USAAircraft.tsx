import { Arrow } from "../Arrow";
import { EmptyDiv } from "../EmptyDiv";
import { MediaHead } from "../MediaHead";
import { Rank } from "../Rank";
import { Research } from "../Research";
import { TechTreeItem } from "../TechTreeItem";
import { TreeFolder } from "../TreeFolder";

export function USAAircraft() {
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
                  link="/P-26A-34_M2"
                  title="P-26A-34 M2"
                  item_type="own"
                  text="P-26A-34&nbsp;M2"
                  intname="p-26a_34_m2"
                  type="aircraft"
                />
                <Arrow length={0} />
                <TechTreeItem
                  link="/P-26A-33"
                  title="P-26A-33"
                  item_type="own"
                  text="P-26A-33"
                  intname="p-26a_33"
                  type="aircraft"
                />
                <Arrow length={0} />
                <TechTreeItem
                  link="/P-26B-35"
                  title="P-26B-35"
                  item_type="own"
                  text="P-26B-35"
                  intname="p-26b_35"
                  type="aircraft"
                />
              </td>
              <td>
                <TechTreeItem
                  link="/P-36A"
                  title="P-36A"
                  item_type="own"
                  text="P-36A"
                  intname="p-36a"
                  type="aircraft"
                />
                <Arrow length={0} />
                <TechTreeItem
                  link="/P-36C"
                  title="P-36C"
                  item_type="own"
                  text="P-36C"
                  intname="p-36c"
                  type="aircraft"
                />
                <Arrow length={0} />
                <TechTreeItem
                  link="/P-36G"
                  title="P-36G"
                  item_type="own"
                  text="P-36G"
                  intname="p-36g"
                  type="aircraft"
                />
                <Arrow length={0} />
              </td>
              <td>
                <TechTreeItem
                  link="/F3F-2"
                  title="F3F-2"
                  item_type="own"
                  text="F3F-2"
                  intname="f3f-2"
                  type="aircraft"
                />
                <Arrow length={0} />
                <TechTreeItem
                  link="/F2A-1"
                  title="F2A-1"
                  item_type="own"
                  text="F2A-1"
                  intname="f2a-1"
                  type="aircraft"
                />
                <Arrow length={0} />
                <TechTreeItem
                  link="/F2A-3"
                  title="F2A-3"
                  item_type="own"
                  text="F2A-3"
                  intname="f2a-3"
                  type="aircraft"
                />
              </td>
              <td>
                <TreeFolder name="OS2U" img="os2u_group">
                  <TechTreeItem
                    link="/OS2U-1"
                    title="OS2U-1"
                    item_type="own"
                    text="OS2U-1"
                    intname="os2u_1"
                    type="aircraft"
                  />
                  <Arrow length={0} />
                  <TechTreeItem
                    link="/OS2U-3"
                    title="OS2U-3"
                    item_type="own"
                    text="OS2U-3"
                    intname="os2u_3"
                    type="aircraft"
                  />
                </TreeFolder>
                <EmptyDiv />
                <TreeFolder name="SB2U" img="sb2u_group">
                  <TechTreeItem
                    link="/SB2U-2"
                    title="SB2U-2"
                    item_type="own"
                    text="SB2U-2"
                    intname="sb2u-2"
                    type="aircraft"
                  />
                  <Arrow length={0} />
                  <TechTreeItem
                    link="/SB2U-3"
                    title="SB2U-3"
                    item_type="own"
                    text="SB2U-3"
                    intname="sb2u-3"
                    type="aircraft"
                  />
                </TreeFolder>
                <Arrow length={0} />
                <TechTreeItem
                  link="/SBD-3"
                  title="SBD-3"
                  item_type="own"
                  text="SBD-3"
                  intname="sbd-3"
                  type="aircraft"
                />
                <Arrow length={0} />
              </td>
              <td>
                <TechTreeItem
                  link="/TBD-1"
                  title="TBD-1"
                  item_type="own"
                  text="TBD-1"
                  intname="tbd-1_1938"
                  type="aircraft"
                />
                <Arrow length={0} />
                <TreeFolder name="PBY-5" img="pby_group">
                  <TechTreeItem
                    link="/PBY-5_Catalina"
                    title="PBY-5 Catalina"
                    item_type="own"
                    text="PBY-5&nbsp;Catalina"
                    intname="pby-5"
                    type="aircraft"
                  />
                  <Arrow length={0} />
                  <TechTreeItem
                    link="/PBY-5A_Catalina"
                    title="PBY-5A Catalina"
                    item_type="own"
                    text="PBY-5A&nbsp;Catalina"
                    intname="pby-5a"
                    type="aircraft"
                  />
                </TreeFolder>
                <Arrow length={0} />
                <TechTreeItem
                  link="/B-18A"
                  title="B-18A"
                  item_type="own"
                  text="B-18A"
                  intname="b_18a"
                  type="aircraft"
                />
                <Arrow length={0} />
              </td>
              <td style={{ borderLeft: "solid 1px #cccccc" }}>
                <TechTreeItem
                  link="/Galer%27s_F3F-2"
                  title="Galer's F3F-2"
                  item_type="prem"
                  text="Galer's F3F-2"
                  intname="f3f-2_galer"
                  type="aircraft"
                />
                <EmptyDiv />
                <TechTreeItem
                  link="/Thach%27s_F2A-1"
                  title="Thach's F2A-1"
                  item_type="prem"
                  text="Thach's F2A-1"
                  intname="f2a-1_thach"
                  type="aircraft"
                />
                <EmptyDiv />
              </td>
              <td>
                <TechTreeItem
                  link="/P-26A-34"
                  title="P-26A-34"
                  item_type="prem"
                  text="P-26A-34"
                  intname="p-26a_34"
                  type="aircraft"
                />
                <EmptyDiv />
                <TechTreeItem
                  link="/Rasmussen%27s_P-36A"
                  title="Rasmussen's P-36A"
                  item_type="prem"
                  text="Rasmussen's P-36A"
                  intname="p-36a_rasmussen"
                  type="aircraft"
                />
                <EmptyDiv />
                <TechTreeItem
                  link="/B-10B"
                  title="B-10B"
                  item_type="prem"
                  text="B-10B"
                  intname="b_10b"
                  type="aircraft"
                />
                <EmptyDiv />
              </td>
            </tr>
            <tr>
              <Rank rank="II" />
              <td>
                <TechTreeItem
                  link="/P-400"
                  title="P-400"
                  item_type="own"
                  text="P-400"
                  intname="p-400"
                  type="aircraft"
                />
                <Arrow length={0} />
                <TreeFolder name="P-39" img="p-39_group">
                  <TechTreeItem
                    link="/P-39N-0"
                    title="P-39N-0"
                    item_type="own"
                    text="P-39N-0"
                    intname="p-39n"
                    type="aircraft"
                  />
                  <Arrow length={0} />
                  <TechTreeItem
                    link="/P-39Q-5"
                    title="P-39Q-5"
                    item_type="own"
                    text="P-39Q-5"
                    intname="p-39q_5"
                    type="aircraft"
                  />
                </TreeFolder>
                <Arrow length={0} />
                <TreeFolder name="P-38 (e)" img="p-38_group">
                  <TechTreeItem
                    link="/P-38E"
                    title="P-38E"
                    item_type="own"
                    text="P-38E"
                    intname="p-38e"
                    type="aircraft"
                  />
                  <Arrow length={0} />
                  <TechTreeItem
                    link="/P-38G-1"
                    title="P-38G-1"
                    item_type="own"
                    text="P-38G-1"
                    intname="p-38g"
                    type="aircraft"
                  />
                </TreeFolder>
                <Arrow length={3} />
              </td>
              <td>
                <TechTreeItem
                  link="/P-40E-1"
                  title="P-40E-1"
                  item_type="own"
                  text="P-40E-1"
                  intname="p-40e"
                  type="aircraft"
                />
                <Arrow length={0} />
                <TechTreeItem
                  link="/P-40F-10"
                  title="P-40F-10"
                  item_type="own"
                  text="P-40F-10"
                  intname="p-40f_10"
                  type="aircraft"
                />
                <Arrow length={0} />
                <TechTreeItem
                  link="/P-51"
                  title="P-51"
                  item_type="own"
                  text="P-51"
                  intname="p-51_mk1a_usaaf"
                  type="aircraft"
                />
                <EmptyDiv />
              </td>
              <td>
                <TreeFolder name="F4F" img="f4f_group">
                  <TechTreeItem
                    link="/F4F-3"
                    title="F4F-3"
                    item_type="own"
                    text="F4F-3"
                    intname="f4f-3"
                    type="aircraft"
                  />
                  <Arrow length={0} />
                  <TechTreeItem
                    link="/F4F-4"
                    title="F4F-4"
                    item_type="own"
                    text="F4F-4"
                    intname="f4f-4"
                    type="aircraft"
                  />
                </TreeFolder>
                <Arrow length={0} />
                <TreeFolder name="F4U-1A" img="f4u-1a_group">
                  <TechTreeItem
                    link="/F4U-1A"
                    title="F4U-1A"
                    item_type="own"
                    text="F4U-1A"
                    intname="f4u-1a"
                    type="aircraft"
                  />
                  <Arrow length={0} />
                  <TechTreeItem
                    link="/F4U-1A_(USMC)"
                    title="F4U-1A (USMC)"
                    item_type="own"
                    text="F4U-1A (USMC)"
                    intname="f4u-1a_usmc"
                    type="aircraft"
                  />
                </TreeFolder>
                <EmptyDiv />
              </td>
              <td>
                <TechTreeItem
                  link="/TBF-1C"
                  title="TBF-1C"
                  item_type="own"
                  text="TBF-1C"
                  intname="tbf-1c"
                  type="aircraft"
                />
                <Arrow length={0} />
                <TechTreeItem
                  link="/A-36"
                  title="A-36"
                  item_type="own"
                  text="A-36"
                  intname="p-51_a-36"
                  type="aircraft"
                />
                <Arrow length={0} />
                <TechTreeItem
                  link="/A-20G-25"
                  title="A-20G-25"
                  item_type="own"
                  text="A-20G-25"
                  intname="a-20g"
                  type="aircraft"
                />
                <Arrow length={3} />
              </td>
              <td>
                <TechTreeItem
                  link="/PBM-1_%22Mariner%22"
                  title='PBM-1 "Mariner"'
                  item_type="own"
                  text='PBM-1&nbsp;"Mariner"'
                  intname="pbm_1"
                  type="aircraft"
                />
                <Arrow length={0} />
                <TechTreeItem
                  link="/B-34"
                  title="B-34"
                  item_type="own"
                  text="B-34"
                  intname="b_34"
                  type="aircraft"
                />
                <Arrow length={0} />
                <TechTreeItem
                  link="/B-25J-1"
                  title="B-25J-1"
                  item_type="own"
                  text="B-25J-1"
                  intname="b_25j_1"
                  type="aircraft"
                />
                <Arrow length={3} />
              </td>
              <td style={{ borderLeft: "solid 1px #cccccc" }}>
                <TechTreeItem
                  link="/Ki-43-II_(USA)"
                  title="Ki-43-II (USA)"
                  item_type="prem"
                  text="▃Ki-43-II"
                  intname="ki_43_2_late"
                  type="aircraft"
                />
                <EmptyDiv />
                <TechTreeItem
                  link="/Ki-61-Ib_(USA)"
                  title="Ki-61-Ib (USA)"
                  item_type="prem"
                  text="▃Ki-61-Ib"
                  intname="ki_61_1a_otsu_usa"
                  type="aircraft"
                />
                <EmptyDiv />
                <TechTreeItem
                  link="/P-51A"
                  title="P-51A"
                  item_type="prem"
                  text="P-51A"
                  intname="p-51a_tl"
                  type="aircraft"
                />
                <EmptyDiv />
                <TechTreeItem
                  link="/XP-38G"
                  title="XP-38G"
                  item_type="prem"
                  text="XP-38G"
                  intname="p-38g_metal"
                  type="aircraft"
                />
                <EmptyDiv />
                <TechTreeItem
                  link="/XP-55"
                  title="XP-55"
                  item_type="prem"
                  text="XP-55"
                  intname="xp-55"
                  type="aircraft"
                />
                <EmptyDiv />
                <TechTreeItem
                  link="/P-40E-1_TD"
                  title="P-40E-1 TD"
                  item_type="own"
                  text="P-40E-1 TD"
                  intname="p-40e_td"
                  type="aircraft"
                />
                <EmptyDiv />
              </td>
              <td>
                <TechTreeItem
                  link="/P-40C"
                  title="P-40C"
                  item_type="prem"
                  text="P-40C"
                  intname="p-40c"
                  type="aircraft"
                />
                <EmptyDiv />
                <TechTreeItem
                  link="/YP-38"
                  title="YP-38"
                  item_type="prem"
                  text="YP-38"
                  intname="yp-38"
                  type="aircraft"
                />
                <EmptyDiv />
                <TechTreeItem
                  link="/P-43A-1"
                  title="P-43A-1"
                  item_type="prem"
                  text="P-43A-1"
                  intname="p-43a-1"
                  type="aircraft"
                />
                <EmptyDiv />
                <TechTreeItem
                  link="/PBM-3_%22Mariner%22"
                  title='PBM-3 "Mariner"'
                  item_type="prem"
                  text='PBM-3&nbsp;"Mariner"'
                  intname="pbm_3"
                  type="aircraft"
                />
                <EmptyDiv />
                <TechTreeItem
                  link="/PV-2D"
                  title="PV-2D"
                  item_type="prem"
                  text="PV-2D"
                  intname="pv_2d"
                  type="aircraft"
                />
                <EmptyDiv />
              </td>
            </tr>
            <tr>
              <Rank rank="III" />
              <td>
                <TechTreeItem
                  link="/P-63A-5"
                  title="P-63A-5"
                  item_type="own"
                  text="P-63A-5"
                  intname="p-63a-5"
                  type="aircraft"
                />
                <Arrow length={0} />
                <TreeFolder name="P-63" img="p-63_group">
                  <TechTreeItem
                    link="/P-63A-10"
                    title="P-63A-10"
                    item_type="own"
                    text="P-63A-10"
                    intname="p-63a-10"
                    type="aircraft"
                  />
                  <Arrow length={0} />
                  <TechTreeItem
                    link="/P-63C-5"
                    title="P-63C-5"
                    item_type="own"
                    text="P-63C-5"
                    intname="p-63c-5"
                    type="aircraft"
                  />
                </TreeFolder>
                <Arrow length={2} />
              </td>
              <td>
                <TechTreeItem
                  link="/P-51C-10"
                  title="P-51C-10"
                  item_type="own"
                  text="P-51C-10"
                  intname="p-51c-10-nt"
                  type="aircraft"
                />
                <Arrow length={0} />
                <TechTreeItem
                  link="/P-47D-22-RE"
                  title="P-47D-22-RE"
                  item_type="own"
                  text="P-47D-22-RE"
                  intname="p-47d_22_re"
                  type="aircraft"
                />
                <Arrow length={0} />
                <TreeFolder name="P-47" img="p-47_group">
                  <TechTreeItem
                    link="/P-47D-25"
                    title="P-47D-25"
                    item_type="own"
                    text="P-47D-25"
                    intname="p-47d"
                    type="aircraft"
                  />
                  <Arrow length={0} />
                  <TechTreeItem
                    link="/P-47D-28"
                    title="P-47D-28"
                    item_type="own"
                    text="P-47D-28"
                    intname="p-47d-28"
                    type="aircraft"
                  />
                </TreeFolder>
                <Arrow length={1} />
              </td>
              <td>
                <TechTreeItem
                  link="/F4U-1D"
                  title="F4U-1D"
                  item_type="own"
                  text="F4U-1D"
                  intname="f4u-1d"
                  type="aircraft"
                />
                <Arrow length={0} />
                <TreeFolder name="F6F" img="f6f_group">
                  <TechTreeItem
                    link="/F6F-5"
                    title="F6F-5"
                    item_type="own"
                    text="F6F-5"
                    intname="f6f-3"
                    type="aircraft"
                  />
                  <Arrow length={0} />
                  <TechTreeItem
                    link="/F6F-5N"
                    title="F6F-5N"
                    item_type="own"
                    text="F6F-5N"
                    intname="f6f-5n"
                    type="aircraft"
                  />
                </TreeFolder>
                <Arrow length={0} />
                <TreeFolder name="F4U" img="f4u_group">
                  <TechTreeItem
                    link="/F4U-1C"
                    title="F4U-1C"
                    item_type="own"
                    text="F4U-1C"
                    intname="f4u-1c"
                    type="aircraft"
                  />
                  <Arrow length={0} />
                  <TechTreeItem
                    link="/F4U-4"
                    title="F4U-4"
                    item_type="own"
                    text="F4U-4"
                    intname="f4u-4"
                    type="aircraft"
                  />
                </TreeFolder>
                <Arrow length={1} />
              </td>
              <td>
                <TreeFolder name="SB2C" img="sb2c_group">
                  <TechTreeItem
                    link="/SB2C-1C"
                    title="SB2C-1C"
                    item_type="own"
                    text="SB2C-1C"
                    intname="sb2c_1c"
                    type="aircraft"
                  />
                  <Arrow length={0} />
                  <TechTreeItem
                    link="/SB2C-4"
                    title="SB2C-4"
                    item_type="own"
                    text="SB2C-4"
                    intname="sb2c_4"
                    type="aircraft"
                  />
                </TreeFolder>
                <Arrow length={0} />
                <TreeFolder name="PBJ" img="pbj_group">
                  <TechTreeItem
                    link="/PBJ-1J"
                    title="PBJ-1J"
                    item_type="own"
                    text="PBJ-1J"
                    intname="pbj_1j"
                    type="aircraft"
                  />
                  <Arrow length={0} />
                  <TechTreeItem
                    link="/PBJ-1H"
                    title="PBJ-1H"
                    item_type="own"
                    text="PBJ-1H"
                    intname="pbj_1h"
                    type="aircraft"
                  />
                </TreeFolder>
                <Arrow length={0} />
                <TechTreeItem
                  link="/P-61C-1"
                  title="P-61C-1"
                  item_type="own"
                  text="P-61C-1"
                  intname="p-61c_1"
                  type="aircraft"
                />
                <Arrow length={1} />
              </td>
              <td>
                <TechTreeItem
                  link="/B-25J-20"
                  title="B-25J-20"
                  item_type="own"
                  text="B-25J-20"
                  intname="b_25j_20"
                  type="aircraft"
                />
                <Arrow length={0} />
                <TechTreeItem
                  link="/B-26B"
                  title="B-26B"
                  item_type="own"
                  text="B-26B"
                  intname="b_26b_c"
                  type="aircraft"
                />
                <Arrow length={0} />
                <TreeFolder name="B-17" img="b-17_group">
                  <TechTreeItem
                    link="/B-17E"
                    title="B-17E"
                    item_type="own"
                    text="B-17E"
                    intname="b-17e"
                    type="aircraft"
                  />
                  <Arrow length={0} />
                  <TechTreeItem
                    link="/B-17E/L"
                    title="B-17E/L"
                    item_type="own"
                    text="B-17E/L"
                    intname="b-17e_late"
                    type="aircraft"
                  />
                </TreeFolder>
                <Arrow length={0} />
                <TechTreeItem
                  link="/PB4Y-2"
                  title="PB4Y-2"
                  item_type="own"
                  text="PB4Y-2"
                  intname="pb4y-2"
                  type="aircraft"
                />
                <Arrow length={0} />
              </td>
              <td style={{ borderLeft: "solid 1px #cccccc" }}>
                <TechTreeItem
                  link="/A6M2_(USA)"
                  title="A6M2 (USA)"
                  item_type="prem"
                  text="▃A6M2"
                  intname="a6m2_zero_usa"
                  type="aircraft"
                />
                <EmptyDiv />
                <TechTreeItem
                  link="/Bf_109_F-4_(USA)"
                  title="Bf 109 F-4 (USA)"
                  item_type="prem"
                  text="▃Bf&nbsp;109&nbsp;F-4"
                  intname="bf-109f-4_usa"
                  type="aircraft"
                />
                <EmptyDiv />
                <TechTreeItem
                  link="/XP-50"
                  title="XP-50"
                  item_type="prem"
                  text="XP-50"
                  intname="xp-50"
                  type="aircraft"
                />
                <EmptyDiv />
                <TechTreeItem
                  link="/BTD-1"
                  title="BTD-1"
                  item_type="prem"
                  text="BTD-1"
                  intname="btd-1"
                  type="aircraft"
                />
                <EmptyDiv />
              </td>
              <td>
                <TechTreeItem
                  link="/XF5F"
                  title="XF5F"
                  item_type="prem"
                  text="XF5F"
                  intname="xf5f"
                  type="aircraft"
                />
                <EmptyDiv />
                <TechTreeItem
                  link="/Kingcobra_(USA)"
                  title="Kingcobra (USA)"
                  item_type="prem"
                  text="␠Kingcobra"
                  intname="p-63c-5_kingcobra_animal_version"
                  type="aircraft"
                />
                <EmptyDiv />
                <TechTreeItem
                  link="/P-61A-1"
                  title="P-61A-1"
                  item_type="prem"
                  text="P-61A-1"
                  intname="p-61a_1"
                  type="aircraft"
                />
                <EmptyDiv />
              </td>
            </tr>
            <tr>
              <Rank rank="IV" />
              <td>
                <TechTreeItem
                  link="/P-38J-15"
                  title="P-38J-15"
                  item_type="own"
                  text="P-38J-15"
                  intname="p-38j"
                  type="aircraft"
                />
                <Arrow length={0} />
                <TechTreeItem
                  link="/P-38L-5-LO"
                  title="P-38L-5-LO"
                  item_type="own"
                  text="P-38L-5-LO"
                  intname="p-38l"
                  type="aircraft"
                />
                <Arrow length={0} />
                <TechTreeItem
                  link="/F-82E"
                  title="F-82E"
                  item_type="own"
                  text="F-82E"
                  intname="f-82e"
                  type="aircraft"
                />
                <Arrow length={6} />
              </td>
              <td>
                <TreeFolder name="P-51 (l)" img="p-51_group">
                  <TechTreeItem
                    link="/P-51D-5"
                    title="P-51D-5"
                    item_type="own"
                    text="P-51D-5"
                    intname="p-51d-5"
                    type="aircraft"
                  />
                  <Arrow length={0} />
                  <TechTreeItem
                    link="/P-51D-30"
                    title="P-51D-30"
                    item_type="own"
                    text="P-51D-30"
                    intname="p-51d-30_usaaf_korea"
                    type="aircraft"
                  />
                </TreeFolder>
                <Arrow length={0} />
                <TechTreeItem
                  link="/P-47N-15"
                  title="P-47N-15"
                  item_type="own"
                  text="P-47N-15"
                  intname="p-47n-15"
                  type="aircraft"
                />
                <Arrow length={0} />
                <TechTreeItem
                  link="/P-51H-5-NA"
                  title="P-51H-5-NA"
                  item_type="own"
                  text="P-51H-5-NA"
                  intname="p-51h-5_na"
                  type="aircraft"
                />
                <Arrow length={6} />
              </td>
              <td>
                <TechTreeItem
                  link="/F4U-4B"
                  title="F4U-4B"
                  item_type="own"
                  text="F4U-4B"
                  intname="f4u-4b"
                  type="aircraft"
                />
                <Arrow length={0} />
                <TreeFolder name="F8F" img="f8f1_group">
                  <TechTreeItem
                    link="/F8F-1"
                    title="F8F-1"
                    item_type="own"
                    text="F8F-1"
                    intname="f8f1"
                    type="aircraft"
                  />
                  <Arrow length={0} />
                  <TechTreeItem
                    link="/F8F-1B"
                    title="F8F-1B"
                    item_type="own"
                    text="F8F-1B"
                    intname="f8f1b"
                    type="aircraft"
                  />
                </TreeFolder>
                <Arrow length={0} />
                <TechTreeItem
                  link="/F7F-1"
                  title="F7F-1"
                  item_type="own"
                  text="F7F-1"
                  intname="f7f1"
                  type="aircraft"
                />
                <Arrow length={6} />
              </td>
              <td>
                <TreeFolder name="A-26B" img="a-26_group">
                  <TechTreeItem
                    link="/A-26B-10"
                    title="A-26B-10"
                    item_type="own"
                    text="A-26B-10"
                    intname="a-26b_10"
                    type="aircraft"
                  />
                  <Arrow length={0} />
                  <TechTreeItem
                    link="/A-26B-50"
                    title="A-26B-50"
                    item_type="own"
                    text="A-26B-50"
                    intname="a-26b"
                    type="aircraft"
                  />
                </TreeFolder>
                <Arrow length={0} />
                <TechTreeItem
                  link="/AM-1"
                  title="AM-1"
                  item_type="own"
                  text="AM-1"
                  intname="am_1_mauler"
                  type="aircraft"
                />
                <Arrow length={0} />
                <TreeFolder name="AD" img="douglas_ad_group">
                  <TechTreeItem
                    link="/AD-2"
                    title="AD-2"
                    item_type="own"
                    text="AD-2"
                    intname="douglas_ad_2"
                    type="aircraft"
                  />
                  <Arrow length={0} />
                  <TechTreeItem
                    link="/AD-4"
                    title="AD-4"
                    item_type="own"
                    text="AD-4"
                    intname="douglas_ad_4"
                    type="aircraft"
                  />
                </TreeFolder>
                <Arrow length={6} />
              </td>
              <td>
                <TechTreeItem
                  link="/B-17G-60-VE"
                  title="B-17G-60-VE"
                  item_type="own"
                  text="B-17G-60-VE"
                  intname="b-17g"
                  type="aircraft"
                />
                <Arrow length={0} />
                <TechTreeItem
                  link="/B-24D-25-CO"
                  title="B-24D-25-CO"
                  item_type="own"
                  text="B-24D-25-CO"
                  intname="b_24d"
                  type="aircraft"
                />
                <Arrow length={0} />
                <TechTreeItem
                  link="/B-29A-BN"
                  title="B-29A-BN"
                  item_type="own"
                  text="B-29A-BN"
                  intname="b-29"
                  type="aircraft"
                />
                <Arrow length={6} />
              </td>
              <td style={{ borderLeft: "solid 1px #cccccc" }}>
                <TechTreeItem
                  link="/P-51D-10"
                  title="P-51D-10"
                  item_type="prem"
                  text="P-51D-10"
                  intname="p-51d-10"
                  type="aircraft"
                />
                <EmptyDiv />
                <TechTreeItem
                  link="/P-51D-20-NA"
                  title="P-51D-20-NA"
                  item_type="prem"
                  text="P-51D-20-NA"
                  intname="p-51d-20-na"
                  type="aircraft"
                />
                <EmptyDiv />
                <TechTreeItem
                  link="/XA-38"
                  title="XA-38"
                  item_type="prem"
                  text="XA-38"
                  intname="xa_38"
                  type="aircraft"
                />
                <EmptyDiv />
                <TechTreeItem
                  link="/Bostwick%27s_P-47M-1-RE"
                  title="Bostwick's P-47M-1-RE"
                  item_type="prem"
                  text="P-47M-1-RE"
                  intname="p-47m-1-re"
                  type="aircraft"
                />
                <EmptyDiv />
                <TechTreeItem
                  link="/Lanovski%27s_P-47M-1-RE"
                  title="Lanovski's P-47M-1-RE"
                  item_type="prem"
                  text="⋠P-47M-1-RE"
                  intname="p-47m-1-re_boxted"
                  type="aircraft"
                />
                <EmptyDiv />
                <TechTreeItem
                  link="/Fw_190_A-8_(USA)"
                  title="Fw 190 A-8 (USA)"
                  item_type="prem"
                  text="▃Fw&nbsp;190&nbsp;A-8"
                  intname="fw-190a-8_usa"
                  type="aircraft"
                />
                <EmptyDiv />
                <TechTreeItem
                  link="/Spitfire_LF_Mk_IXc_(USA)"
                  title="Spitfire LF Mk IXc (USA)"
                  item_type="prem"
                  text="▃Spitfire&nbsp;LF Mk IXc"
                  intname="spitfire_ix_usa"
                  type="aircraft"
                />
                <EmptyDiv />
                <TechTreeItem
                  link="/A2D-1"
                  title="A2D-1"
                  item_type="prem"
                  text="A2D-1"
                  intname="a2d"
                  type="aircraft"
                />
                <EmptyDiv />
              </td>
              <td>
                <TechTreeItem
                  link="/Bong%27s_P-38J-15"
                  title="Bong's P-38J-15"
                  item_type="prem"
                  text="Bong's P-38J-15"
                  intname="p-38j_marge"
                  type="aircraft"
                />
                <EmptyDiv />
                <TechTreeItem
                  link="/P-38K"
                  title="P-38K"
                  item_type="prem"
                  text="P-38K"
                  intname="p-38k"
                  type="aircraft"
                />
                <EmptyDiv />
                <TechTreeItem
                  link="/P-59A"
                  title="P-59A"
                  item_type="prem"
                  text="P-59A"
                  intname="p-59a"
                  type="aircraft"
                />
                <EmptyDiv />
                <TechTreeItem
                  link="/A-26C-45"
                  title="A-26C-45"
                  item_type="own"
                  text="A-26C-45"
                  intname="a-26c"
                  type="aircraft"
                />
                <EmptyDiv />
                <TechTreeItem
                  link="/A-26C-45DT"
                  title="A-26C-45DT"
                  item_type="prem"
                  text="A-26C-45DT"
                  intname="a-26c-45-dt"
                  type="aircraft"
                />
                <EmptyDiv />
                <TechTreeItem
                  link="/F4U-4B_VMF-214"
                  title="F4U-4B VMF-214"
                  item_type="prem"
                  text="F4U-4B VMF-214"
                  intname="f4u-4b_vmf_214"
                  type="aircraft"
                />
                <EmptyDiv />
                <TechTreeItem
                  link="/AU-1"
                  title="AU-1"
                  item_type="prem"
                  text="AU-1"
                  intname="f4u-6_au-1"
                  type="aircraft"
                />
                <EmptyDiv />
                <TechTreeItem
                  link="/F2G-1"
                  title="F2G-1"
                  item_type="prem"
                  text="F2G-1"
                  intname="f2g-1"
                  type="aircraft"
                />
                <EmptyDiv />
                <TechTreeItem
                  link="/F7F-3"
                  title="F7F-3"
                  item_type="prem"
                  text="F7F-3"
                  intname="f7f3"
                  type="aircraft"
                />
                <EmptyDiv />
              </td>
            </tr>
            <tr>
              <Rank rank="V" />
              <td>
                <TechTreeItem
                  link="/F-80A-5"
                  title="F-80A-5"
                  item_type="own"
                  text="F-80A-5"
                  intname="f-80a"
                  type="aircraft"
                />
                <Arrow length={0} />
                <TechTreeItem
                  link="/F-80C-10"
                  title="F-80C-10"
                  item_type="own"
                  text="F-80C-10"
                  intname="f-80"
                  type="aircraft"
                />
                <Arrow length={0} />
              </td>
              <td>
                <TreeFolder name="F-84" img="f-84_group">
                  <TechTreeItem
                    link="/F-84B-26"
                    title="F-84B-26"
                    item_type="own"
                    text="F-84B-26"
                    intname="f-84b"
                    type="aircraft"
                  />
                  <Arrow length={0} />
                  <TechTreeItem
                    link="/F-84G-21-RE"
                    title="F-84G-21-RE"
                    item_type="own"
                    text="F-84G-21-RE"
                    intname="f-84g"
                    type="aircraft"
                  />
                </TreeFolder>
                <Arrow length={0} />
                <TreeFolder name="F-86" img="f-86_group">
                  <TechTreeItem
                    link="/F-86A-5"
                    title="F-86A-5"
                    item_type="own"
                    text="F-86A-5"
                    intname="f-86a-5"
                    type="aircraft"
                  />
                  <Arrow length={0} />
                  <TechTreeItem
                    link="/F-86F-25"
                    title="F-86F-25"
                    item_type="own"
                    text="F-86F-25"
                    intname="f-86f-25"
                    type="aircraft"
                  />
                </TreeFolder>
                <Arrow length={0} />
              </td>
              <td>
                <TechTreeItem
                  link="/F2H-2"
                  title="F2H-2"
                  item_type="own"
                  text="F2H-2"
                  intname="f2h-2"
                  type="aircraft"
                />
                <Arrow length={0} />
                <TreeFolder name="F9F" img="f9f_group">
                  <TechTreeItem
                    link="/F9F-2"
                    title="F9F-2"
                    item_type="own"
                    text="F9F-2"
                    intname="f9f-2"
                    type="aircraft"
                  />
                  <Arrow length={0} />
                  <TechTreeItem
                    link="/F9F-5"
                    title="F9F-5"
                    item_type="own"
                    text="F9F-5"
                    intname="f9f-5"
                    type="aircraft"
                  />
                </TreeFolder>
                <Arrow length={0} />
              </td>
              <td>
                <TechTreeItem
                  link="/F3D-1"
                  title="F3D-1"
                  item_type="own"
                  text="F3D-1"
                  intname="f3d_1"
                  type="aircraft"
                />
                <Arrow length={0} />
                <TechTreeItem
                  link="/F-84F"
                  title="F-84F"
                  item_type="own"
                  text="F-84F"
                  intname="f-84f"
                  type="aircraft"
                />
                <Arrow length={0} />
              </td>
              <td>
                <TechTreeItem
                  link="/B-57A"
                  title="B-57A"
                  item_type="own"
                  text="B-57A"
                  intname="b-57"
                  type="aircraft"
                />
                <Arrow length={0} />
                <TechTreeItem
                  link="/B-57B"
                  title="B-57B"
                  item_type="own"
                  text="B-57B"
                  intname="b-57b"
                  type="aircraft"
                />
                <Arrow length={0} />
              </td>
              <td style={{ borderLeft: "solid 1px #cccccc" }}>
                <TechTreeItem
                  link="/F-89B"
                  title="F-89B"
                  item_type="prem"
                  text="F-89B"
                  intname="f-89b"
                  type="aircraft"
                />
                <Arrow length={0} />
                <TechTreeItem
                  link="/F-89D"
                  title="F-89D"
                  item_type="prem"
                  text="F-89D"
                  intname="f-89d"
                  type="aircraft"
                />
                <EmptyDiv />
              </td>
              <td>
                <TechTreeItem
                  link="/F-86F-35"
                  title="F-86F-35"
                  item_type="prem"
                  text="F-86F-35"
                  intname="f-86f-35"
                  type="aircraft"
                />
                <EmptyDiv />
              </td>
            </tr>
            <tr>
              <Rank rank="VI" />
              <td>
                <TechTreeItem
                  link="/F-104A"
                  title="F-104A"
                  item_type="own"
                  text="F-104A"
                  intname="f-104a"
                  type="aircraft"
                />
                <Arrow length={0} />
                <TechTreeItem
                  link="/F-104C"
                  title="F-104C"
                  item_type="own"
                  text="F-104C"
                  intname="f-104c"
                  type="aircraft"
                />
                <Arrow length={2} />
              </td>
              <td>
                <TechTreeItem
                  link="/F-86F-2"
                  title="F-86F-2"
                  item_type="own"
                  text="F-86F-2"
                  intname="f-86f-2"
                  type="aircraft"
                />
                <Arrow length={0} />
                <TechTreeItem
                  link="/F-100D"
                  title="F-100D"
                  item_type="own"
                  text="F-100D"
                  intname="f-100d"
                  type="aircraft"
                />
                <Arrow length={0} />
                <TechTreeItem
                  link="/F-4C_Phantom_II"
                  title="F-4C Phantom II"
                  item_type="own"
                  text="F-4C Phantom II"
                  intname="f-4c"
                  type="aircraft"
                />
                <Arrow length={1} />
              </td>
              <td>
                <TechTreeItem
                  link="/F9F-8"
                  title="F9F-8"
                  item_type="own"
                  text="F9F-8"
                  intname="f9f-8"
                  type="aircraft"
                />
                <Arrow length={0} />
                <TechTreeItem
                  link="/F3H-2"
                  title="F3H-2"
                  item_type="own"
                  text="F3H-2"
                  intname="f3h-2"
                  type="aircraft"
                />
                <Arrow length={0} />
                <TechTreeItem
                  link="/F8U-2"
                  title="F8U-2"
                  item_type="own"
                  text="F8U-2"
                  intname="f8u-2"
                  type="aircraft"
                />
                <Arrow length={1} />
              </td>
              <td>
                <TechTreeItem
                  link="/A-4B"
                  title="A-4B"
                  item_type="own"
                  text="A-4B"
                  intname="a_4b"
                  type="aircraft"
                />
                <Arrow length={0} />
                <TechTreeItem
                  link="/FJ-4B"
                  title="FJ-4B"
                  item_type="own"
                  text="FJ-4B"
                  intname="fj_4b"
                  type="aircraft"
                />
                <Arrow length={0} />
                <TechTreeItem
                  link="/AV-8C"
                  title="AV-8C"
                  item_type="own"
                  text="AV-8C"
                  intname="av_8c"
                  type="aircraft"
                />
                <Arrow length={1} />
              </td>
              <td>
                <TechTreeItem
                  link="/F-105D"
                  title="F-105D"
                  item_type="own"
                  text="F-105D"
                  intname="f-105d"
                  type="aircraft"
                />
              </td>
              <td style={{ borderLeft: "solid 1px #cccccc" }}>
                <TechTreeItem
                  link="/A-4E_Early"
                  title="A-4E Early"
                  item_type="squad"
                  text="A-4E Early"
                  intname="a_4e_early"
                  type="aircraft"
                />
                <EmptyDiv />
                <TechTreeItem
                  link="/AV-8A"
                  title="AV-8A"
                  item_type="prem"
                  text="AV-8A"
                  intname="av_8a"
                  type="aircraft"
                />
                <EmptyDiv />
                <TechTreeItem
                  link="/A-10A"
                  title="A-10A"
                  item_type="prem"
                  text="A-10A"
                  intname="a_10a_early"
                  type="aircraft"
                />
                <EmptyDiv />
                <TechTreeItem
                  link="/F-5C"
                  title="F-5C"
                  item_type="prem"
                  text="F-5C"
                  intname="f-5c"
                  type="aircraft"
                />
              </td>
              <td>
                <TechTreeItem
                  link="/F4D-1"
                  title="F4D-1"
                  item_type="own"
                  text="F4D-1"
                  intname="f4d_1"
                  type="aircraft"
                />
                <EmptyDiv />
                <TechTreeItem
                  link="/FJ-4B_VMF-232"
                  title="FJ-4B VMF-232"
                  item_type="own"
                  text="FJ-4B VMF-232"
                  intname="fj_4b_agm_12b"
                  type="aircraft"
                />
                <EmptyDiv />
                <TechTreeItem
                  link="/F11F-1"
                  title="F11F-1"
                  item_type="own"
                  text="F11F-1"
                  intname="f11f_1_late"
                  type="aircraft"
                />
                <EmptyDiv />
                <TechTreeItem
                  link="/F-5A"
                  title="F-5A"
                  item_type="own"
                  text="F-5A"
                  intname="f-5a"
                  type="aircraft"
                />
              </td>
            </tr>
            <tr>
              <Rank rank="VII" />
              <td>
                <TechTreeItem
                  link="/F-5E"
                  title="F-5E"
                  item_type="own"
                  text="F-5E"
                  intname="f-5e"
                  type="aircraft"
                />
                <EmptyDiv />
              </td>
              <td>
                <TechTreeItem
                  link="/F-4E_Phantom_II"
                  title="F-4E Phantom II"
                  item_type="own"
                  text="F-4E Phantom II"
                  intname="f-4e"
                  type="aircraft"
                />
                <EmptyDiv />
              </td>
              <td>
                <TechTreeItem
                  link="/F-8E"
                  title="F-8E"
                  item_type="own"
                  text="F-8E"
                  intname="f-8e"
                  type="aircraft"
                />
                <Arrow length={0} />
                <TechTreeItem
                  link="/F-4J_Phantom_II"
                  title="F-4J Phantom II"
                  item_type="own"
                  text="F-4J Phantom II"
                  intname="f-4j"
                  type="aircraft"
                />
                <Arrow length={0} />
                <TechTreeItem
                  link="/F-14A_Early"
                  title="F-14A Early"
                  item_type="own"
                  text="F-14A Early"
                  intname="f_14a_early"
                  type="aircraft"
                />
                <EmptyDiv />
              </td>
              <td>
                <TechTreeItem
                  link="/A-10A_Late"
                  title="A-10A Late"
                  item_type="own"
                  text="A-10A Late"
                  intname="a_10a_late"
                  type="aircraft"
                />
                <Arrow length={0} />
                <TechTreeItem
                  link="/A-7D"
                  title="A-7D"
                  item_type="own"
                  text="A-7D"
                  intname="a_7d"
                  type="aircraft"
                />
                <Arrow length={0} />
                <TechTreeItem
                  link="/A-7E"
                  title="A-7E"
                  item_type="own"
                  text="A-7E"
                  intname="a_7e"
                  type="aircraft"
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
        <a href="https://yewtu.be/nio77hOta5k">
          <b>Climbing the ranks with US aircraft</b> - <i>War Thunder Official Channel</i>
        </a>
      </div>
    </div>
  );
}
