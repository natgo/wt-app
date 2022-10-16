import { Arrow } from "../Arrow";
import { EmptyDiv } from "../EmptyDiv";
import { MediaHead } from "../MediaHead";
import { Rank } from "../Rank";
import { Research } from "../Research";
import { TechTreeItem } from "../TechTreeItem";
import { TreeFolder } from "../TreeFolder";

export function JapanAircraft() {
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
                  link="/A5M4"
                  title="A5M4"
                  item_type="own"
                  text="A5M4"
                  intname="a5m4"
                  type="aircraft"
                />
              </td>
              <td>
                <TreeFolder name="Ki-10" img="ki-10_group">
                  <TechTreeItem
                    link="/Ki-10-I"
                    title="Ki-10-I"
                    item_type="own"
                    text="Ki-10-I"
                    intname="ki_10_1"
                    type="aircraft"
                  />
                  <Arrow length={0} />
                  <TechTreeItem
                    link="/Ki-10-II"
                    title="Ki-10-II"
                    item_type="own"
                    text="Ki-10-II"
                    intname="ki_10_2"
                    type="aircraft"
                  />
                  <Arrow length={0} />
                  <TechTreeItem
                    link="/Ki-10-I_C"
                    title="Ki-10-I C"
                    item_type="own"
                    text="Ki-10-I&nbsp;C"
                    intname="ki_10_1_commander"
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
                    link="/Ki-10-II_C"
                    title="Ki-10-II C"
                    item_type="own"
                    text="Ki-10-II&nbsp;C"
                    intname="ki_10_2_commander"
                    type="aircraft"
                  />
                </TreeFolder>
                <Arrow length={0} />
                <TechTreeItem
                  link="/Ki-27_otsu"
                  title="Ki-27 otsu"
                  item_type="own"
                  text="Ki-27 otsu"
                  intname="ki-27_otsu"
                  type="aircraft"
                />
              </td>
              <td>
                <TechTreeItem
                  link="/Ki-32"
                  title="Ki-32"
                  item_type="own"
                  text="Ki-32"
                  intname="ki_32"
                  type="aircraft"
                />
                <Arrow length={0} />
                <TechTreeItem
                  link="/Ki-45_tei"
                  title="Ki-45 tei"
                  item_type="own"
                  text="Ki-45&nbsp;tei"
                  intname="ki-45_tei"
                  type="aircraft"
                />
                <Arrow length={0} />
                <TechTreeItem
                  link="/J1N1"
                  title="J1N1"
                  item_type="own"
                  text="J1N1"
                  intname="j1n1_mod11_early"
                  type="aircraft"
                />
                <Arrow length={0} />
              </td>
              <td>
                <TechTreeItem
                  link="/B5N2"
                  title="B5N2"
                  item_type="own"
                  text="B5N2"
                  intname="b5n2"
                  type="aircraft"
                />
                <Arrow length={0} />
                <TechTreeItem
                  link="/D3A1"
                  title="D3A1"
                  item_type="own"
                  text="D3A1"
                  intname="d3a1"
                  type="aircraft"
                />
                <Arrow length={1} />
              </td>
              <td>
                <TechTreeItem
                  link="/F1M2"
                  title="F1M2"
                  item_type="own"
                  text="F1M2"
                  intname="f1m2"
                  type="aircraft"
                />
                <Arrow length={0} />
                <TechTreeItem
                  link="/Ki-21-Ia"
                  title="Ki-21-Ia"
                  item_type="own"
                  text="Ki-21-Ia"
                  intname="ki_21_1ko"
                  type="aircraft"
                />
                <Arrow length={0} />
                <TechTreeItem
                  link="/H6K4"
                  title="H6K4"
                  item_type="own"
                  text="H6K4"
                  intname="h6k4"
                  type="aircraft"
                />
                <Arrow length={0} />
              </td>
              <td style={{ borderLeft: "solid 1px #cccccc" }}>
                <TechTreeItem
                  link="/Hagiri%27s_A5M4"
                  title="Hagiri's A5M4"
                  item_type="prem"
                  text="Hagiri's A5M4"
                  intname="a5m4_hagiri"
                  type="aircraft"
                />
                <EmptyDiv />
                <TechTreeItem
                  link="/Ki-27_otsu_Tachiarai"
                  title="Ki-27 otsu Tachiarai"
                  item_type="prem"
                  text="Ki-27 otsu Tachiarai"
                  intname="ki-27_otsu_ep"
                  type="aircraft"
                />
                <EmptyDiv />
              </td>
              <td>
                <TechTreeItem
                  link="/Ki-21-I_hei"
                  title="Ki-21-I hei"
                  item_type="prem"
                  text="Ki-21-I hei"
                  intname="ki_21_1hei"
                  type="aircraft"
                />
                <EmptyDiv />
                <TechTreeItem
                  link="/A7He1"
                  title="A7He1"
                  item_type="prem"
                  text="A7He1"
                  intname="a7he1"
                  type="aircraft"
                />
                <EmptyDiv />
              </td>
            </tr>
            <tr>
              <Rank rank="II" />
              <td>
                <TreeFolder name="A6M2/N1K1" img="a6m2_n1k1_group">
                  <TechTreeItem
                    link="/A6M2-N"
                    title="A6M2-N"
                    item_type="own"
                    text="A6M2-N"
                    intname="a6m2_n_zero"
                    type="aircraft"
                  />
                  <Arrow length={0} />
                  <TechTreeItem
                    link="/N1K1"
                    title="N1K1"
                    item_type="own"
                    text="N1K1"
                    intname="n1k1_kyuofu"
                    type="aircraft"
                  />
                </TreeFolder>
                <Arrow length={0} />
                <TreeFolder name="A6M2" img="a6m2_group">
                  <TechTreeItem
                    link="/A6M2_mod._11"
                    title="A6M2 mod. 11"
                    item_type="own"
                    text="A6M2 mod. 11"
                    intname="a6m2_mod11"
                    type="aircraft"
                  />
                  <Arrow length={0} />
                  <TechTreeItem
                    link="/A6M2"
                    title="A6M2"
                    item_type="own"
                    text="A6M2"
                    intname="a6m2_zero"
                    type="aircraft"
                  />
                </TreeFolder>
                <Arrow length={0} />
                <TechTreeItem
                  link="/J2M2"
                  title="J2M2"
                  item_type="own"
                  text="J2M2"
                  intname="j2m2"
                  type="aircraft"
                />
              </td>
              <td>
                <TreeFolder name="Ki-43" img="ki-43_group">
                  <TechTreeItem
                    link="/Ki-43-I"
                    title="Ki-43-I"
                    item_type="own"
                    text="Ki-43-I"
                    intname="ki_43_1"
                    type="aircraft"
                  />
                  <Arrow length={0} />
                  <TechTreeItem
                    link="/Ki-43-II"
                    title="Ki-43-II"
                    item_type="own"
                    text="Ki-43-II"
                    intname="ki_43_2"
                    type="aircraft"
                  />
                </TreeFolder>
                <Arrow length={0} />
                <TreeFolder name="Ki-44" img="ki_44_group">
                  <TechTreeItem
                    link="/Ki-44-I"
                    title="Ki-44-I"
                    item_type="own"
                    text="Ki-44-I"
                    intname="ki_44_1"
                    type="aircraft"
                  />
                  <Arrow length={0} />
                  <TechTreeItem
                    link="/Ki-44-II_hei"
                    title="Ki-44-II hei"
                    item_type="own"
                    text="Ki-44-II hei"
                    intname="ki_44_2_hei"
                    type="aircraft"
                  />
                </TreeFolder>
                <Arrow length={0} />
                <TreeFolder name="Ki-61" img="ki_61_group">
                  <TechTreeItem
                    link="/Ki-61-I_ko"
                    title="Ki-61-I ko"
                    item_type="own"
                    text="Ki-61-I ko"
                    intname="ki_61_1a_ko"
                    type="aircraft"
                  />
                  <Arrow length={0} />
                  <TechTreeItem
                    link="/Ki-61-I_otsu"
                    title="Ki-61-I otsu"
                    item_type="own"
                    text="Ki-61-I otsu"
                    intname="ki_61_1a_otsu"
                    type="aircraft"
                  />
                  <Arrow length={0} />
                  <TechTreeItem
                    link="/Ki-100"
                    title="Ki-100"
                    item_type="own"
                    text="Ki-100"
                    intname="ki_100_early"
                    type="aircraft"
                  />
                </TreeFolder>
              </td>
              <td>
                <TreeFolder name="Ki-45" img="ki-45_group">
                  <TechTreeItem
                    link="/Ki-45_otsu"
                    title="Ki-45 otsu"
                    item_type="own"
                    text="Ki-45&nbsp;otsu"
                    intname="ki-45_otsu"
                    type="aircraft"
                  />
                  <Arrow length={0} />
                  <TechTreeItem
                    link="/Ki-45_hei"
                    title="Ki-45 hei"
                    item_type="own"
                    text="Ki-45&nbsp;hei"
                    intname="ki-45_hei"
                    type="aircraft"
                  />
                </TreeFolder>
                <Arrow length={0} />
                <TechTreeItem
                  link="/Ki-45_ko"
                  title="Ki-45 ko"
                  item_type="own"
                  text="Ki-45&nbsp;ko"
                  intname="ki-45_ko"
                  type="aircraft"
                />
                <Arrow length={0} />
                <TechTreeItem
                  link="/Ki-109"
                  title="Ki-109"
                  item_type="own"
                  text="Ki-109"
                  intname="ki_109"
                  type="aircraft"
                />
                <Arrow length={1} />
              </td>
              <td>
                <TreeFolder name="B6N" img="b6n_group">
                  <TechTreeItem
                    link="/B6N1_Model_11"
                    title="B6N1 Model 11"
                    item_type="own"
                    text="B6N1 Model 11"
                    intname="b6n1"
                    type="aircraft"
                  />
                  <Arrow length={0} />
                  <TechTreeItem
                    link="/B6N2_Model_12"
                    title="B6N2 Model 12"
                    item_type="own"
                    text="B6N2 Model 12"
                    intname="b6n2"
                    type="aircraft"
                  />
                  <Arrow length={0} />
                  <TechTreeItem
                    link="/B6N2a_Model_12Ko"
                    title="B6N2a Model 12Ko"
                    item_type="own"
                    text="B6N2a Model 12Ko"
                    intname="b6n2a"
                    type="aircraft"
                  />
                </TreeFolder>
                <Arrow length={0} />
                <TechTreeItem
                  link="/D4Y1"
                  title="D4Y1"
                  item_type="own"
                  text="D4Y1"
                  intname="d4y1"
                  type="aircraft"
                />
                <Arrow length={0} />
                <TreeFolder name="D4Y" img="d4y_group">
                  <TechTreeItem
                    link="/D4Y2"
                    title="D4Y2"
                    item_type="own"
                    text="D4Y2"
                    intname="d4y2"
                    type="aircraft"
                  />
                  <Arrow length={0} />
                  <TechTreeItem
                    link="/D4Y3_Ko"
                    title="D4Y3 Ko"
                    item_type="own"
                    text="D4Y3 Ko"
                    intname="d4y3"
                    type="aircraft"
                  />
                </TreeFolder>
                <Arrow length={1} />
              </td>
              <td>
                <TechTreeItem
                  link="/G4M1"
                  title="G4M1"
                  item_type="own"
                  text="G4M1"
                  intname="g4m1"
                  type="aircraft"
                />
                <Arrow length={0} />
                <TechTreeItem
                  link="/H8K2"
                  title="H8K2"
                  item_type="own"
                  text="H8K2"
                  intname="h8k2"
                  type="aircraft"
                />
                <Arrow length={0}/>
                <TechTreeItem
                  link="/Ki-49-I"
                  title="Ki-49-I"
                  item_type="own"
                  text="Ki-49-I"
                  intname="ki-49_1"
                  type="aircraft"
                />
                <Arrow length={0} />
                <TechTreeItem
                  link="/Ki-49-IIa"
                  title="Ki-49-IIa"
                  item_type="own"
                  text="Ki-49-IIa"
                  intname="ki-49_2a"
                  type="aircraft"
                />
                <Arrow length={0} />
              </td>
              <td style={{ borderLeft: "solid 1px #cccccc" }}>
                <TechTreeItem
                  link="/Ki-44-I_34"
                  title="Ki-44-I 34"
                  item_type="prem"
                  text="Ki-44-I 34"
                  intname="ki_44_1_ep"
                  type="aircraft"
                />
                <EmptyDiv />
                <TechTreeItem
                  link="/Ki-44-II_otsu"
                  title="Ki-44-II otsu"
                  item_type="prem"
                  text="Ki-44-II otsu"
                  intname="ki_44_2_otsu"
                  type="aircraft"
                />
                <EmptyDiv />
                <TechTreeItem
                  link="/Ki-100-II"
                  title="Ki-100-II"
                  item_type="prem"
                  text="Ki-100-II"
                  intname="ki_100_2"
                  type="aircraft"
                />
                <EmptyDiv />
              </td>
              <td>
                <TechTreeItem
                  link="/F4U-1A_(Japan)"
                  title="F4U-1A (Japan)"
                  item_type="prem"
                  text="▅F4U-1A"
                  intname="f4u-1a_japan"
                  type="aircraft"
                />
                <EmptyDiv />
                <TechTreeItem
                  link="/Bf_109_E-7_(Japan)"
                  title="Bf 109 E-7 (Japan)"
                  item_type="prem"
                  text="▅Bf 109 E-7"
                  intname="bf-109e-3_japan"
                  type="aircraft"
                />
                <EmptyDiv />
                <TechTreeItem
                  link="/H8K3"
                  title="H8K3"
                  item_type="prem"
                  text="H8K3"
                  intname="h8k3"
                  type="aircraft"
                />
                <EmptyDiv />
              </td>
            </tr>
            <tr>
              <Rank rank="III" />
              <td>
                <TreeFolder name="A6M3" img="a6m3_mod22_group">
                  <TechTreeItem
                    link="/A6M3"
                    title="A6M3"
                    item_type="own"
                    text="A6M3"
                    intname="a6m3_zero"
                    type="aircraft"
                  />
                  <Arrow length={0} />
                  <TechTreeItem
                    link="/A6M3_mod._22"
                    title="A6M3 mod. 22"
                    item_type="own"
                    text="A6M3 mod.&nbsp;22"
                    intname="a6m3_mod22_zero"
                    type="aircraft"
                  />
                  <Arrow length={0} />
                  <TechTreeItem
                    link="/A6M3_mod._22Ko"
                    title="A6M3 mod. 22Ko"
                    item_type="own"
                    text="A6M3&nbsp;mod.&nbsp;22Ko"
                    intname="a6m3_mod22ko_zero"
                    type="aircraft"
                  />
                </TreeFolder>
                <Arrow length={0} />
                <TreeFolder name="A6M5" img="a6m5_group">
                  <TechTreeItem
                    link="/A6M5"
                    title="A6M5"
                    item_type="own"
                    text="A6M5"
                    intname="a6m5_zero"
                    type="aircraft"
                  />
                  <Arrow length={0} />
                  <TechTreeItem
                    link="/A6M5_otsu"
                    title="A6M5 otsu"
                    item_type="own"
                    text="A6M5&nbsp;otsu"
                    intname="a6m5otsu"
                    type="aircraft"
                  />
                  <Arrow length={0} />
                  <TechTreeItem
                    link="/A6M5_Hei"
                    title="A6M5 Hei"
                    item_type="own"
                    text="A6M5&nbsp;Hei"
                    intname="a6m5hei"
                    type="aircraft"
                  />
                </TreeFolder>
                <Arrow length={0} />
                <TechTreeItem
                  link="/A7M2"
                  title="A7M2"
                  item_type="own"
                  text="A7M2"
                  intname="a7m2"
                  type="aircraft"
                />
                <Arrow length={0} />
              </td>
              <td>
                <TechTreeItem
                  link="/Ki-43-III_otsu"
                  title="Ki-43-III otsu"
                  item_type="own"
                  text="Ki-43-III otsu"
                  intname="ki_43_3_otsu"
                  type="aircraft"
                />
                <Arrow length={0} />
                <TreeFolder name="Ki-61-I late" img="ki_61_late_group">
                  <TechTreeItem
                    link="/Ki-61-I_hei"
                    title="Ki-61-I hei"
                    item_type="own"
                    text="Ki-61-I hei"
                    intname="ki_61_1a_hei"
                    type="aircraft"
                  />
                  <Arrow length={0} />
                  <TechTreeItem
                    link="/Ki-61-I_tei"
                    title="Ki-61-I tei"
                    item_type="own"
                    text="Ki-61-I tei"
                    intname="ki_61_1a_tei"
                    type="aircraft"
                  />
                </TreeFolder>
                <Arrow length={0} />
                <TechTreeItem
                  link="/Ki-61-II_Otsu_Kai"
                  title="Ki-61-II Otsu Kai"
                  item_type="own"
                  text="Ki-61-II Otsu Kai"
                  intname="ki_61_2_early"
                  type="aircraft"
                />
                <Arrow length={0} />
              </td>
              <td>
                <TechTreeItem
                  link="/Ki-102_otsu"
                  title="Ki-102 otsu"
                  item_type="own"
                  text="Ki-102 otsu"
                  intname="ki_102_otsu"
                  type="aircraft"
                />
                <Arrow length={0} />
                <TechTreeItem
                  link="/Ki-108_Kai"
                  title="Ki-108 Kai"
                  item_type="own"
                  text="Ki-108 Kai"
                  intname="ki_108"
                  type="aircraft"
                />
                <Arrow length={1} />
              </td>
              <td>
                <TechTreeItem
                  link="/B7A2"
                  title="B7A2"
                  item_type="own"
                  text="B7A2"
                  intname="b7a2"
                  type="aircraft"
                />
                <Arrow length={2} />
              </td>
              <td>
                <TechTreeItem
                  link="/Ki-49-IIb"
                  title="Ki-49-IIb"
                  item_type="own"
                  text="Ki-49-IIb"
                  intname="ki-49_2b"
                  type="aircraft"
                />
                <Arrow length={0} />
                <TechTreeItem
                  link="/Ki-49-IIb/L"
                  title="Ki-49-IIb/L"
                  item_type="own"
                  text="Ki-49-IIb/L"
                  intname="ki-49_2b_late"
                  type="aircraft"
                />
                <Arrow length={0} />
                <TreeFolder name="Ki-67" img="ki_67_group">
                  <TechTreeItem
                    link="/Ki-67-I_Ko"
                    title="Ki-67-I Ko"
                    item_type="own"
                    text="Ki-67-I Ko"
                    intname="ki_67_1_ko"
                    type="aircraft"
                  />
                  <Arrow length={0} />
                  <TechTreeItem
                    link="/Ki-67-I_otsu"
                    title="Ki-67-I otsu"
                    item_type="own"
                    text="Ki-67-I otsu"
                    intname="ki_67_1_otsu"
                    type="aircraft"
                  />
                </TreeFolder>
                <Arrow length={0} />
              </td>
              <td style={{ borderLeft: "solid 1px #cccccc" }}>
                <TechTreeItem
                  link="/Ki-96"
                  title="Ki-96"
                  item_type="prem"
                  text="Ki-96"
                  intname="ki-96"
                  type="aircraft"
                />
                <EmptyDiv />
                <TechTreeItem
                  link="/Ki-61-I_hei_Tada%27s"
                  title="Ki-61-I hei Tada's"
                  item_type="prem"
                  text="Ki-61-I hei Tada's"
                  intname="ki_61_1a_hei_ep"
                  type="aircraft"
                />
                <EmptyDiv />
                <TechTreeItem
                  link="/A7M1_(NK9H)"
                  title="A7M1 (NK9H)"
                  item_type="prem"
                  text="A7M1 (NK9H)"
                  intname="a7m1"
                  type="aircraft"
                />
                <EmptyDiv />
              </td>
              <td>
                <TechTreeItem
                  link="/P-51C-11-NT_(Japan)"
                  title="P-51C-11-NT (Japan)"
                  item_type="prem"
                  text="▅P-51C-11-NT"
                  intname="p-51c-11-nt_japan"
                  type="aircraft"
                />
                <EmptyDiv />
                <TechTreeItem
                  link="/Fw_190_A-5_(Japan)"
                  title="Fw 190 A-5 (Japan)"
                  item_type="prem"
                  text="▅Fw&nbsp;190&nbsp;A-5"
                  intname="fw-190a-5_japan"
                  type="aircraft"
                />
                <EmptyDiv />
                <TechTreeItem
                  link="/A6M6c"
                  title="A6M6c"
                  item_type="prem"
                  text="A6M6c"
                  intname="a6m6c"
                  type="aircraft"
                />
                <EmptyDiv />
              </td>
            </tr>
            <tr>
              <Rank rank="IV" />
              <td>
                <TreeFolder name="N1K" img="n1k2_group">
                  <TechTreeItem
                    link="/N1K1-Ja"
                    title="N1K1-Ja"
                    item_type="own"
                    text="N1K1-Ja"
                    intname="n1k1_ja"
                    type="aircraft"
                  />
                  <Arrow length={0} />
                  <TechTreeItem
                    link="/N1K2-J"
                    title="N1K2-J"
                    item_type="own"
                    text="N1K2-J"
                    intname="n1k2_j"
                    type="aircraft"
                  />
                  <Arrow length={0} />
                  <TechTreeItem
                    link="/N1K2-Ja"
                    title="N1K2-Ja"
                    item_type="own"
                    text="N1K2-Ja"
                    intname="n1k2_jko"
                    type="aircraft"
                  />
                </TreeFolder>
                <Arrow length={0} />
                <TreeFolder name="J2M" img="j2m_group">
                  <TechTreeItem
                    link="/J2M3"
                    title="J2M3"
                    item_type="own"
                    text="J2M3"
                    intname="j2m3"
                    type="aircraft"
                  />
                  <Arrow length={0} />
                  <TechTreeItem
                    link="/J2M5"
                    title="J2M5"
                    item_type="own"
                    text="J2M5"
                    intname="j2m5"
                    type="aircraft"
                  />
                </TreeFolder>
                <Arrow length={0} />
                <TechTreeItem
                  link="/J7W1"
                  title="J7W1"
                  item_type="own"
                  text="J7W1"
                  intname="j7w1"
                  type="aircraft"
                />
                <Arrow length={1} />
              </td>
              <td>
                <TechTreeItem
                  link="/Ki-84_ko"
                  title="Ki-84 ko"
                  item_type="own"
                  text="Ki-84 ko"
                  intname="ki_84_ko"
                  type="aircraft"
                />
                <Arrow length={0} />
                <TechTreeItem
                  link="/Ki-84_otsu"
                  title="Ki-84 otsu"
                  item_type="own"
                  text="Ki-84 otsu"
                  intname="ki_84_otsu"
                  type="aircraft"
                />
                <Arrow length={0} />
                <TechTreeItem
                  link="/Ki-84_hei"
                  title="Ki-84 hei"
                  item_type="own"
                  text="Ki-84 hei"
                  intname="ki_84_hei"
                  type="aircraft"
                />
                <Arrow length={1} />
              </td>
              <td>
                <TechTreeItem
                  link="/J5N1"
                  title="J5N1"
                  item_type="own"
                  text="J5N1"
                  intname="j5n1"
                  type="aircraft"
                />
                <Arrow length={0} />
                <TechTreeItem
                  link="/Ki-83"
                  title="Ki-83"
                  item_type="own"
                  text="Ki-83"
                  intname="ki-83"
                  type="aircraft"
                />
              </td>
              <td>
                <TechTreeItem
                  link="/P1Y1_mod._11"
                  title="P1Y1 mod. 11"
                  item_type="own"
                  text="P1Y1 mod. 11"
                  intname="p1y1_mod11"
                  type="aircraft"
                />
                <Arrow length={3} />
              </td>
              <td>
                <TechTreeItem
                  link="/G5N1"
                  title="G5N1"
                  item_type="own"
                  text="G5N1"
                  intname="g5n1"
                  type="aircraft"
                />
                <Arrow length={0} />
                <TechTreeItem
                  link="/G8N1"
                  title="G8N1"
                  item_type="own"
                  text="G8N1"
                  intname="g8n1"
                  type="aircraft"
                />
              </td>
              <td style={{ borderLeft: "solid 1px #cccccc" }}>
                <TechTreeItem
                  link="/J2M4_Kai"
                  title="J2M4 Kai"
                  item_type="prem"
                  text="J2M4 Kai"
                  intname="j2m4_kai"
                  type="aircraft"
                />
                <EmptyDiv />
                <TechTreeItem
                  link="/J2M5_30mm"
                  title="J2M5 30mm"
                  item_type="prem"
                  text="J2M5"
                  intname="j2m5_30mm"
                  type="aircraft"
                />
                <EmptyDiv />
                <TechTreeItem
                  link="/B-17E_(Japan)"
                  title="B-17E (Japan)"
                  item_type="prem"
                  text="▅B-17E"
                  intname="b-17e_japan"
                  type="aircraft"
                />
                <EmptyDiv />
                <TechTreeItem
                  link="/Ki-87"
                  title="Ki-87"
                  item_type="prem"
                  text="Ki-87"
                  intname="ki_87"
                  type="aircraft"
                />
                <EmptyDiv />
              </td>
              <td>
                <TechTreeItem
                  link="/A6M5_Ko"
                  title="A6M5 Ko"
                  item_type="prem"
                  text="A6M5&nbsp;Ko"
                  intname="a6m5ko"
                  type="aircraft"
                />
                <EmptyDiv />
                <TechTreeItem
                  link="/Ki-94-II"
                  title="Ki-94-II"
                  item_type="own"
                  text="Ki-94-II"
                  intname="ki_94_2"
                  type="aircraft"
                />
                <EmptyDiv />
                <TechTreeItem
                  link="/J6K1"
                  title="J6K1"
                  item_type="prem"
                  text="J6K1"
                  intname="j6k1"
                  type="aircraft"
                />
              </td>
            </tr>
            <tr>
              <Rank rank="V" />
              <td>
                <TechTreeItem
                  link="/Kikka"
                  title="Kikka"
                  item_type="own"
                  text="Kikka"
                  intname="kitsuka"
                  type="aircraft"
                />
                <Arrow length={0} />
                <TechTreeItem
                  link="/F-86F-30_(Japan)"
                  title="F-86F-30 (Japan)"
                  item_type="own"
                  text="F-86F-30 ▅"
                  intname="f-86f-30_japan"
                  type="aircraft"
                />
                <Arrow length={0} />
                <TechTreeItem
                  link="/F-86F-40_(Japan)"
                  title="F-86F-40 (Japan)"
                  item_type="own"
                  text="F-86F-40 ▅"
                  intname="f-86f-40_japan"
                  type="aircraft"
                />
                <Arrow length={0} />
              </td>
              <td>
                <TechTreeItem
                  link="/Ki-200"
                  title="Ki-200"
                  item_type="own"
                  text="Ki-200"
                  intname="j8m1"
                  type="aircraft"
                />
                <Arrow length={2} />
              </td>
              <td />
              <td>
                <TechTreeItem
                  link="/R2Y2_Kai_V1"
                  title="R2Y2 Kai V1"
                  item_type="own"
                  text="R2Y2 Kai V1"
                  intname="r2y2_v1"
                  type="aircraft"
                />
                <Arrow length={0} />
                <TechTreeItem
                  link="/R2Y2_Kai_V2"
                  title="R2Y2 Kai V2"
                  item_type="own"
                  text="R2Y2 Kai V2"
                  intname="r2y2_v2"
                  type="aircraft"
                />
                <Arrow length={0} />
                <TechTreeItem
                  link="/R2Y2_Kai_V3"
                  title="R2Y2 Kai V3"
                  item_type="own"
                  text="R2Y2 Kai V3"
                  intname="r2y2_kai"
                  type="aircraft"
                />
              </td>
              <td />
              <td style={{ borderLeft: "solid 1px #cccccc" }}>
                <TechTreeItem
                  link="/F-86F-40_JASDF_(Japan)"
                  title="F-86F-40 JASDF (Japan)"
                  item_type="prem"
                  text="F-86F-40 JASDF▅"
                  intname="f-86f-40_japan_blue_impulse"
                  type="aircraft"
                />
              </td>
              <td />
            </tr>
            <tr>
              <Rank rank="VI" />
              <td>
                <TechTreeItem
                  link="/F-104J"
                  title="F-104J"
                  item_type="own"
                  text="F-104J"
                  intname="f-104j"
                  type="aircraft"
                />
                <Arrow length={1} />
              </td>
              <td>
                <TechTreeItem
                  link="/T-2"
                  title="T-2"
                  item_type="own"
                  text="T-2"
                  intname="t2"
                  type="aircraft"
                />
                <Arrow length={0} />
                <TechTreeItem
                  link="/F-1"
                  title="F-1"
                  item_type="own"
                  text="F-1"
                  intname="f1"
                  type="aircraft"
                />
              </td>
              <td />
              <td />
              <td />
              <td style={{ borderLeft: "solid 1px #cccccc" }} />
              <td />
            </tr>
            <tr>
              <Rank rank="VII" />
              <td>
                <TechTreeItem
                  link="/F-4EJ_Phantom_II"
                  title="F-4EJ Phantom II"
                  item_type="own"
                  text="F-4EJ Phantom II"
                  intname="f-4ej"
                  type="aircraft"
                />
                <Arrow length={0} />
                <TechTreeItem
                  link="/F-4EJ_Kai_Phantom_II"
                  title="F-4EJ Kai Phantom II"
                  item_type="own"
                  text="F-4EJ Kai Phantom II"
                  intname="f-4ej_kai"
                  type="aircraft"
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
        <a href="https://yewtu.be/mF2Umflo4Uk">
          <b>Mitsubishi Aircraft</b> - <i>War Thunder Official Channel</i>
        </a>
        <a href="https://yewtu.be/oR8GNZF9qj4">
          <b>Japanese Air Forces Rank I - Tutorial and Guide</b> - <i>Jengar</i>
        </a>
        <a href="https://yewtu.be/qiq8SUqodU8">
          <b>Climbing the ranks with Japanese aircraft</b> - <i>War Thunder Official Channel</i>
        </a>
      </div>
    </div>
  );
}
