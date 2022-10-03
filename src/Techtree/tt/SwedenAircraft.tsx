import { Arrow } from "../Arrow";
import { EmptyDiv } from "../EmptyDiv";
import { MediaHead } from "../MediaHead";
import { Rank } from "../Rank";
import { Research } from "../Research";
import { TechTreeItem } from "../TechTreeItem";
import { TreeFolder } from "../TreeFolder";

export function SwedenAircraft() {
  return (
    <div className="mw-parser-output">
      <div className="tree">
        <table rules="rows" width="100%">
          <tbody>
            <Research research={3} premium={2} />
            <tr>
              <Rank rank="I" />
              <td>
                <TechTreeItem
                  link="/J8A"
                  title="J8A"
                  item_type="own"
                  text="J8A"
                  intname="gladiator_j8a"
                  type="aircraft"
                />
                <EmptyDiv />
                <TechTreeItem
                  link="/J6B"
                  title="J6B"
                  item_type="own"
                  text="J6B"
                  intname="j6b"
                  type="aircraft"
                />
                <Arrow length={0} />
                <TechTreeItem
                  link="/J11"
                  title="J11"
                  item_type="own"
                  text="J11"
                  intname="fiat_cr42_j11"
                  type="aircraft"
                />
                <Arrow length={0} />
              </td>
              <td>
                <TechTreeItem
                  link="/S17BS"
                  title="S17BS"
                  item_type="own"
                  text="S17BS"
                  intname="saab_b17bs"
                  type="aircraft"
                />
                <Arrow length={0} />
                <TechTreeItem
                  link="/B17B"
                  title="B17B"
                  item_type="own"
                  text="B17B"
                  intname="saab_b17b"
                  type="aircraft"
                />
                <Arrow length={1} />
              </td>
              <td>
                <TechTreeItem
                  link="/B3C"
                  title="B3C"
                  item_type="own"
                  text="B3C"
                  intname="saab_b3c"
                  type="aircraft"
                />
                <Arrow length={2} />
              </td>
              <td style={{ borderLeft: "solid 1px #cccccc" }}>
                <TechTreeItem
                  link="/Iacobi%27s_J8A"
                  title="Iacobi's J8A"
                  item_type="prem"
                  text="Iacobi's J8A"
                  intname="gladiator_j8a_iacobi"
                  type="aircraft"
                />
                <EmptyDiv />
                <TechTreeItem
                  link="/Ar_196_A-5_(Sweden)"
                  title="Ar 196 A-5 (Sweden)"
                  item_type="prem"
                  text="▄Ar 196 A-5"
                  intname="arado-196a-5"
                  type="aircraft"
                />
              </td>
              <td>
                <EmptyDiv />
              </td>
            </tr>
            <tr>
              <Rank rank="II" />
              <td>
                <TechTreeItem
                  link="/J20"
                  title="J20"
                  item_type="own"
                  text="J20"
                  intname="re_2000_j20"
                  type="aircraft"
                />
                <Arrow length={0} />
                <TechTreeItem
                  link="/J22-A"
                  title="J22-A"
                  item_type="own"
                  text="J22-A"
                  intname="ffvs_j22_a"
                  type="aircraft"
                />
                <Arrow length={0} />
              </td>
              <td>
                <TechTreeItem
                  link="/B17A"
                  title="B17A"
                  item_type="own"
                  text="B17A"
                  intname="saab_b17a"
                  type="aircraft"
                />
                <Arrow length={1} />
              </td>
              <td>
                <TechTreeItem
                  link="/B18A"
                  title="B18A"
                  item_type="own"
                  text="B18A"
                  intname="saab_b18a"
                  type="aircraft"
                />
                <Arrow length={1} />
              </td>
              <td style={{ borderLeft: "solid 1px #cccccc" }}>
                <TechTreeItem
                  link="/M%C3%B6rk%C3%B6-Morane"
                  title="Mörkö-Morane"
                  item_type="prem"
                  text="Mörkö-Morane"
                  intname="morko_morane"
                  type="aircraft"
                />
                <EmptyDiv />
                <TechTreeItem
                  link="/Fokker_D.XXI"
                  title="Fokker D.XXI"
                  item_type="prem"
                  text="Fokker D.XXI"
                  intname="fokker_d21_mod20"
                  type="aircraft"
                />
                <EmptyDiv />
              </td>
              <td>
                <TechTreeItem
                  link="/VL_Myrsky_II"
                  title="VL Myrsky II"
                  item_type="prem"
                  text="VL Myrsky II"
                  intname="vl_myrsky_2_late"
                  type="aircraft"
                />
              </td>
            </tr>
            <tr>
              <Rank rank="III" />
              <td>
                <TechTreeItem
                  link="/J22-B"
                  title="J22-B"
                  item_type="own"
                  text="J22-B"
                  intname="ffvs_j22_b"
                  type="aircraft"
                />
                <Arrow length={0} />
                <TechTreeItem
                  link="/J21A-1"
                  title="J21A-1"
                  item_type="own"
                  text="J21A-1"
                  intname="saab_j21a_1"
                  type="aircraft"
                />
                <Arrow length={0} />
              </td>
              <td>
                <Arrow length={1.5} />
              </td>
              <td>
                <TechTreeItem
                  link="/B18B"
                  title="B18B"
                  item_type="own"
                  text="B18B"
                  intname="saab_b18b"
                  type="aircraft"
                />
                <Arrow length={1} />
              </td>
              <td style={{ borderLeft: "solid 1px #cccccc" }}>
                <TechTreeItem
                  link="/Py%C3%B6rremyrsky"
                  title="Pyörremyrsky"
                  item_type="prem"
                  text="Pyörremyrsky"
                  intname="pyorremyrsky"
                  type="aircraft"
                />
                <EmptyDiv />
              </td>
              <td />
            </tr>
            <tr>
              <Rank rank="IV" />
              <td>
                <TechTreeItem
                  link="/J21A-2"
                  title="J21A-2"
                  item_type="own"
                  text="J21A-2"
                  intname="saab_j21a_2"
                  type="aircraft"
                />
                <Arrow length={0} />
                <TechTreeItem
                  link="/J26"
                  title="J26"
                  item_type="own"
                  text="J26"
                  intname="p-51d-20-na_j26"
                  type="aircraft"
                />
                <Arrow length={0} />
              </td>
              <td>
                <TechTreeItem
                  link="/A21A-3"
                  title="A21A-3"
                  item_type="own"
                  text="A21A-3"
                  intname="saab_a21a_3"
                  type="aircraft"
                />
                <Arrow length={1} />
              </td>
              <td>
                <TechTreeItem
                  link="/T18B"
                  title="T18B"
                  item_type="own"
                  text="T18B"
                  intname="saab_t18b_1"
                  type="aircraft"
                />
                <Arrow length={0} />
                <TechTreeItem
                  link="/T18B_(57)"
                  title="T18B (57)"
                  item_type="own"
                  text="T18B (57)"
                  intname="saab_t18b_2"
                  type="aircraft"
                />
                <Arrow length={0} />
              </td>
              <td style={{ borderLeft: "solid 1px #cccccc" }}>
                <TechTreeItem
                  link="/Bf_109_G-6_(Sweden)"
                  title="Bf 109 G-6 (Sweden)"
                  item_type="prem"
                  text="▄Bf&nbsp;109&nbsp;G-6"
                  intname="bf-109g-6_finland"
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
                  link="/J21RA"
                  title="J21RA"
                  item_type="own"
                  text="J21RA"
                  intname="saab_j21ra"
                  type="aircraft"
                />
                <Arrow length={0} />
                <TechTreeItem
                  link="/J29A"
                  title="J29A"
                  item_type="own"
                  text="J29A"
                  intname="saab_j29a"
                  type="aircraft"
                />
                <Arrow length={1} />
              </td>
              <td>
                <TechTreeItem
                  link="/A21RB"
                  title="A21RB"
                  item_type="own"
                  text="A21RB"
                  intname="saab_a21rb"
                  type="aircraft"
                />
                <Arrow length={0} />
                <TechTreeItem
                  link="/A28B"
                  title="A28B"
                  item_type="own"
                  text="A28B"
                  intname="vampire_fb5_j28b"
                  type="aircraft"
                />
                <Arrow length={0} />
                <TechTreeItem
                  link="/A29B"
                  title="A29B"
                  item_type="own"
                  text="A29B"
                  intname="saab_j29b"
                  type="aircraft"
                />
                <Arrow length={0} />
              </td>
              <td>
                <TechTreeItem
                  link="/SK60B"
                  title="SK60B"
                  item_type="own"
                  text="SK60B"
                  intname="saab_sk60b"
                  type="aircraft"
                />
                <Arrow length={0} />
                <TechTreeItem
                  link="/SAAB-105G"
                  title="SAAB-105G"
                  item_type="own"
                  text="SAAB-105G"
                  intname="saab_105g"
                  type="aircraft"
                />
              </td>
              <td style={{ borderLeft: "solid 1px #cccccc" }}>
                <TechTreeItem
                  link="/SAAB-105OE"
                  title="SAAB-105OE"
                  item_type="prem"
                  text="SAAB-105OE"
                  intname="saab_105oe"
                  type="aircraft"
                />
                <EmptyDiv />
                <TechTreeItem
                  link="/J29D"
                  title="J29D"
                  item_type="prem"
                  text="J29D"
                  intname="saab_j29d"
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
                  link="/J29F"
                  title="J29F"
                  item_type="own"
                  text="J29F"
                  intname="saab_j29f"
                  type="aircraft"
                />
                <Arrow length={0} />
                <TechTreeItem
                  link="/J32B"
                  title="J32B"
                  item_type="own"
                  text="J32B"
                  intname="saab_j32b"
                  type="aircraft"
                />
                <Arrow length={0} />
              </td>
              <td>
                <TechTreeItem
                  link="/A32A"
                  title="A32A"
                  item_type="own"
                  text="A32A"
                  intname="saab_a32a"
                  type="aircraft"
                />
                <Arrow length={1} />
              </td>
              <td />
              <td style={{ borderLeft: "solid 1px #cccccc" }}>
                <TechTreeItem
                  link="/J35A"
                  title="J35A"
                  item_type="prem"
                  text="J35A"
                  intname="saab_j35a"
                  type="aircraft"
                />
              </td>
              <td />
            </tr>
            <tr>
              <Rank rank="VII" />
              <td>
                <TechTreeItem
                  link="/J35D"
                  title="J35D"
                  item_type="own"
                  text="J35D"
                  intname="saab_j35d"
                  type="aircraft"
                />
                <Arrow length={0} />
                <TechTreeItem
                  link="/JA37C"
                  title="JA37C"
                  item_type="own"
                  text="JA37C"
                  intname="saab_ja37"
                  type="aircraft"
                />
                <EmptyDiv />
              </td>
              <td>
                <TechTreeItem
                  link="/AJ37"
                  title="AJ37"
                  item_type="own"
                  text="AJ37"
                  intname="saab_aj37"
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
        <a href="https://yewtu.be/5TYuG36QnPU">
          <b>SAAB</b> - <i>War Thunder Official Channel</i>
        </a>
        <a href="https://yewtu.be/diNkuJ7lies">
          <b>Swedish Air Forces Rank V - Tutorial and Guide</b> - <i>Jengar</i>
        </a>
        <a href="https://yewtu.be/lQoLGbMZUkg">
          <b>Swedish Air Forces Rank IV - Tutorial and Guide</b> - <i>Jengar</i>
        </a>
        <a href="https://yewtu.be/csnduubxnyk">
          <b>Swedish Air Forces Rank III - Tutorial and Guide</b> - <i>Jengar</i>
        </a>
        <a href="https://yewtu.be/VcyQiD2NLCU">
          <b>Swedish Air Forces Rank II - Tutorial and Guide</b> - <i>Jengar</i>
        </a>
        <a href="https://yewtu.be/W4o7KCDAa8U">
          <b>Swedish Air Forces Rank I - Tutorial and Guide</b> - <i>Jengar</i>
        </a>
        <a href="https://yewtu.be/30a5sfsoX_4">
          <b>Climbing the ranks with Swedish aircraft</b> - <i>War Thunder Official Channel</i>
        </a>
      </div>
    </div>
  );
}
