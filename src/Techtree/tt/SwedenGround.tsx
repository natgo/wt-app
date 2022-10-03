import { Arrow } from "../Arrow";
import { EmptyDiv } from "../EmptyDiv";
import { MediaHead } from "../MediaHead";
import { Rank } from "../Rank";
import { Research } from "../Research";
import { TechTreeItem } from "../TechTreeItem";
import { TreeFolder } from "../TreeFolder";

export function SwedenGround() {
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
                  link="/Strv_m/31"
                  title="Strv m/31"
                  item_type="own"
                  text="Strv m/31"
                  intname="sw_strv_m31"
                  type="ground"
                />
                <Arrow length={0} />
                <TechTreeItem
                  link="/Ikv_72"
                  title="Ikv 72"
                  item_type="own"
                  text="Ikv 72"
                  intname="sw_ikv_72"
                  type="ground"
                />
                <Arrow length={0} />
              </td>
              <td>
                <TechTreeItem
                  link="/Strv_m/38"
                  title="Strv m/38"
                  item_type="own"
                  text="Strv m/38"
                  intname="sw_strv_m38"
                  type="ground"
                />
                <Arrow length={0} />
                <TechTreeItem
                  link="/Strv_m/40L"
                  title="Strv m/40L"
                  item_type="own"
                  text="Strv m/40L"
                  intname="sw_strv_m40l"
                  type="ground"
                />
                <Arrow length={0} />
              </td>
              <td>
                <TechTreeItem
                  link="/Pvlvv_fm/42"
                  title="Pvlvv fm/42"
                  item_type="own"
                  text="Pvlvv fm/42"
                  intname="sw_pvlvv_fm42"
                  type="ground"
                />
                <Arrow length={1} />
              </td>
              <td>
                <TechTreeItem
                  link="/Spj_fm/43-44"
                  title="Spj fm/43-44"
                  item_type="own"
                  text="Spj fm/43-44"
                  intname="sw_stormpjas_fm43_44"
                  type="ground"
                />
                <Arrow length={1} />
              </td>
              <td style={{ borderLeft: "solid 1px #cccccc" }}>
                <TechTreeItem
                  link="/Strv_m/39"
                  title="Strv m/39"
                  item_type="prem"
                  text="Strv m/39"
                  intname="sw_strv_m39"
                  type="ground"
                />
                <EmptyDiv />
              </td>
              <td>
                <TechTreeItem
                  link="/Strv_m/39_TD"
                  title="Strv m/39 TD"
                  item_type="own"
                  text="Strv m/39 TD"
                  intname="sw_strv_m39_td"
                  type="ground"
                />
                <EmptyDiv />
                <TechTreeItem
                  link="/Pbil_m/40"
                  title="Pbil m/40"
                  item_type="prem"
                  text="Pbil m/40"
                  intname="sw_pbil_m40"
                  type="ground"
                />
                <EmptyDiv />
              </td>
            </tr>
            <tr>
              <Rank rank="II" />
              <td>
                <TechTreeItem
                  link="/Strv_m/41_S-II"
                  title="Strv m/41 S-II"
                  item_type="own"
                  text="Strv m/41 S-II"
                  intname="sw_strv_m41_s2"
                  type="ground"
                />
                <Arrow length={0} />
                <TechTreeItem
                  link="/Pvkv_III"
                  title="Pvkv III"
                  item_type="own"
                  text="Pvkv III"
                  intname="sw_pvkv_iii"
                  type="ground"
                />
                <Arrow length={0} />
              </td>
              <td>
                <TechTreeItem
                  link="/Lago_I"
                  title="Lago I"
                  item_type="own"
                  text="Lago I"
                  intname="sw_lago_1"
                  type="ground"
                />
                <Arrow length={0} />
                <TechTreeItem
                  link="/Strv_m/42_EH"
                  title="Strv m/42 EH"
                  item_type="own"
                  text="Strv m/42 EH"
                  intname="sw_strv_m42_eh"
                  type="ground"
                />
                <Arrow length={0} />
              </td>
              <td>
                <TechTreeItem
                  link="/Pbv_301"
                  title="Pbv 301"
                  item_type="own"
                  text="Pbv 301"
                  intname="sw_pbv_301"
                  type="ground"
                />
                <Arrow length={0} />
                <TechTreeItem
                  link="/Lvtdgb_m/40"
                  title="Lvtdgb m/40"
                  item_type="own"
                  text="Lvtdgb m/40"
                  intname="sw_tgdgb_m40_lv"
                  type="ground"
                />
                <Arrow length={0} />
              </td>
              <td>
                <TechTreeItem
                  link="/Sav_m/43_(1944)"
                  title="Sav m/43 (1944)"
                  item_type="own"
                  text="Sav m/43 (1944)"
                  intname="sw_sav_m43_1944"
                  type="ground"
                />
                <Arrow length={0} />
                <TechTreeItem
                  link="/Sav_m/43_(1946)"
                  title="Sav m/43 (1946)"
                  item_type="own"
                  text="Sav m/43 (1946)"
                  intname="sw_sav_m43_1946"
                  type="ground"
                />
                <Arrow length={0} />
              </td>
              <td style={{ borderLeft: "solid 1px #cccccc" }}>
                <TechTreeItem
                  link="/Strv_m/41_S-I"
                  title="Strv m/41 S-I"
                  item_type="prem"
                  text="Strv m/41 S-I"
                  intname="sw_strv_m41_s1"
                  type="ground"
                />
                <EmptyDiv />
                <TechTreeItem
                  link="/SAV_20.12.48"
                  title="SAV 20.12.48"
                  item_type="prem"
                  text="SAV 20.12.48"
                  intname="sw_sav_fm48"
                  type="ground"
                />
                <EmptyDiv />
              </td>
              <td>
                <TechTreeItem
                  link="/Ikv_73"
                  title="Ikv 73"
                  item_type="prem"
                  text="Ikv 73"
                  intname="sw_ikv_73"
                  type="ground"
                />
              </td>
            </tr>
            <tr>
              <Rank rank="III" />
              <td>
                <TechTreeItem
                  link="/Pvkv_II"
                  title="Pvkv II"
                  item_type="own"
                  text="Pvkv II"
                  intname="sw_pvkv_ii"
                  type="ground"
                />
                <Arrow length={0} />
                <TechTreeItem
                  link="/Ikv_103"
                  title="Ikv 103"
                  item_type="own"
                  text="Ikv 103"
                  intname="sw_ikv_103"
                  type="ground"
                />
                <Arrow length={0} />
              </td>
              <td>
                <TechTreeItem
                  link="/Strv_m/42_DT"
                  title="Strv m/42 DT"
                  item_type="own"
                  text="Strv m/42 DT"
                  intname="sw_strv_m42_delat_torn"
                  type="ground"
                />
                <Arrow length={1} />
              </td>
              <td>
                <TechTreeItem
                  link="/L-62_ANTI_II"
                  title="L-62 ANTI II"
                  item_type="own"
                  text="L-62 ANTI II"
                  intname="sw_l_62_anti_ii"
                  type="ground"
                />
                <Arrow length={1} />
              </td>
              <td>
                <TechTreeItem
                  link="/Pvkv_m/43_(1946)"
                  title="Pvkv m/43 (1946)"
                  item_type="own"
                  text="Pvkv m/43 (1946)"
                  intname="sw_pvkv_m43_1946"
                  type="ground"
                />
                <Arrow length={1} />
              </td>
              <td style={{ borderLeft: "solid 1px #cccccc" }}>
                <EmptyDiv />
              </td>
              <td />
            </tr>
            <tr>
              <Rank rank="IV" />
              <td>
                <TechTreeItem
                  link="/Ikv_91"
                  title="Ikv 91"
                  item_type="own"
                  text="Ikv 91"
                  intname="sw_ikv_91"
                  type="ground"
                />
                <Arrow length={1} />
              </td>
              <td>
                <TechTreeItem
                  link="/Strv_74"
                  title="Strv 74"
                  item_type="own"
                  text="Strv 74"
                  intname="sw_strv_74"
                  type="ground"
                />
                <Arrow length={0} />
                <TechTreeItem
                  link="/Strv_81"
                  title="Strv 81"
                  item_type="own"
                  text="Strv 81"
                  intname="sw_strv_81"
                  type="ground"
                />
                <Arrow length={0} />
              </td>
              <td>
                <TechTreeItem
                  link="/Lvkv_42"
                  title="Lvkv 42"
                  item_type="own"
                  text="Lvkv 42"
                  intname="sw_lvkv_42"
                  type="ground"
                />
                <Arrow length={1} />
              </td>
              <td>
                <TechTreeItem
                  link="/Pvkv_m/43_(1963)"
                  title="Pvkv m/43 (1963)"
                  item_type="own"
                  text="Pvkv m/43 (1963)"
                  intname="sw_pvkv_m43_1963"
                  type="ground"
                />
                <Arrow length={0} />
                <TechTreeItem
                  link="/Bkan_1C"
                  title="Bkan 1C"
                  item_type="own"
                  text="Bkan 1C"
                  intname="sw_bkan_1c"
                  type="ground"
                />
                <Arrow length={0} />
              </td>
              <td style={{ borderLeft: "solid 1px #cccccc" }}>
                <TechTreeItem
                  link="/Strv_81_(RB_52)"
                  title="Strv 81 (RB 52)"
                  item_type="prem"
                  text="Strv 81 (RB 52)"
                  intname="sw_strv_81_rb52"
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
                  link="/U-SH_405"
                  title="U-SH 405"
                  item_type="own"
                  text="U-SH 405"
                  intname="sw_landsverk_ush_405"
                  type="ground"
                />
                <Arrow length={1} />
              </td>
              <td>
                <TechTreeItem
                  link="/Strv_101"
                  title="Strv 101"
                  item_type="own"
                  text="Strv 101"
                  intname="sw_strv_101"
                  type="ground"
                />
                <Arrow length={0} />
                <TechTreeItem
                  link="/Strv_103A"
                  title="Strv 103A"
                  item_type="own"
                  text="Strv 103A"
                  intname="sw_strv_103a"
                  type="ground"
                />
                <Arrow length={0} />
              </td>
              <td>
                <TechTreeItem
                  link="/VEAK_40"
                  title="VEAK 40"
                  item_type="own"
                  text="VEAK 40"
                  intname="sw_veak_40"
                  type="ground"
                />
                <Arrow length={1} />
              </td>
              <td>
                <TechTreeItem
                  link="/UDES_33"
                  title="UDES 33"
                  item_type="own"
                  text="UDES 33"
                  intname="sw_udes_33"
                  type="ground"
                />
                <Arrow length={1} />
              </td>
              <td style={{ borderLeft: "solid 1px #cccccc" }}>
                <TechTreeItem
                  link="/Strv_103-0"
                  title="Strv 103-0"
                  item_type="prem"
                  text="Strv 103-0"
                  intname="sw_strv_103_0"
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
                  link="/Ikv_91-105"
                  title="Ikv 91-105"
                  item_type="own"
                  text="Ikv 91-105"
                  intname="sw_ikv_91_105"
                  type="ground"
                />
                <Arrow length={0} />
                <TechTreeItem
                  link="/Strf_9040B"
                  title="Strf 9040B"
                  item_type="own"
                  text="Strf 9040B"
                  intname="sw_strf_90b"
                  type="ground"
                />
                <Arrow length={0} />
                <TechTreeItem
                  link="/Strf_9040C"
                  title="Strf 9040C"
                  item_type="own"
                  text="Strf 9040C"
                  intname="sw_strf_90c"
                  type="ground"
                />
                <Arrow length={1} />
              </td>
              <td>
                <TechTreeItem
                  link="/Strv_103C"
                  title="Strv 103C"
                  item_type="own"
                  text="Strv 103С"
                  intname="sw_strv_103c"
                  type="ground"
                />
                <Arrow length={0} />
                <TechTreeItem
                  link="/Strv_104"
                  title="Strv 104"
                  item_type="own"
                  text="Strv 104"
                  intname="sw_strv_104"
                  type="ground"
                />
                <Arrow length={0} />
                <TechTreeItem
                  link="/Strv_105"
                  title="Strv 105"
                  item_type="own"
                  text="Strv 105"
                  intname="sw_strv_105"
                  type="ground"
                />
                <Arrow length={0} />
                <TechTreeItem
                  link="/Strv_121"
                  title="Strv 121"
                  item_type="own"
                  text="Strv 121"
                  intname="sw_strv_121"
                  type="ground"
                />
                <Arrow length={0} />
              </td>
              <td>
                <TechTreeItem
                  link="/Lvkv_9040C"
                  title="Lvkv 9040C"
                  item_type="own"
                  text="Lvkv 9040C"
                  intname="sw_lvkv_90c"
                  type="ground"
                />
                <Arrow length={0} />
                <TechTreeItem
                  link="/Lvrbv_701"
                  title="Lvrbv 701"
                  item_type="own"
                  text="Lvrbv 701"
                  intname="sw_lvrbv_701"
                  type="ground"
                />
                <Arrow length={2} />
              </td>
              <td>
                <TechTreeItem
                  link="/Pvrbv_551"
                  title="Pvrbv 551"
                  item_type="own"
                  text="Pvrbv 551"
                  intname="sw_pvrbv_551"
                  type="ground"
                />
                <Arrow length={0} />
                <TechTreeItem
                  link="/Pbv_302_(BILL)"
                  title="Pbv 302 (BILL)"
                  item_type="own"
                  text="Pbv 302 (BILL)"
                  intname="sw_pbv_302_bill"
                  type="ground"
                />
                <Arrow length={0} />
                <TechTreeItem
                  link="/Strf_9040_BILL"
                  title="Strf 9040 BILL"
                  item_type="own"
                  text="Strf 9040 BILL"
                  intname="sw_strf_9056"
                  type="ground"
                />
              </td>
              <td style={{ borderLeft: "solid 1px #cccccc" }}>
                <TechTreeItem
                  link="/CV_90105"
                  title="CV 90105"
                  item_type="prem"
                  text="CV 90105"
                  intname="sw_cv_90105_tml"
                  type="ground"
                />
              </td>
              <td>
                <TechTreeItem
                  link="/CV_90105"
                  title="CV 90105"
                  item_type="prem"
                  text="CV 90105"
                  intname="sw_cv_90105_tml"
                  type="ground"
                />
              </td>
            </tr>
            <tr>
              <Rank rank="VII" />
              <td>
                <TechTreeItem
                  link="/CV_90120"
                  title="CV 90120"
                  item_type="own"
                  text="CV 90120"
                  intname="sw_cv_90120"
                  type="ground"
                />
                <EmptyDiv />
              </td>
              <td>
                <TechTreeItem
                  link="/Strv_122A"
                  title="Strv 122A"
                  item_type="own"
                  text="Strv 122A"
                  intname="sw_strv_122"
                  type="ground"
                />
                <Arrow length={0} />
                <TechTreeItem
                  link="/Strv_122B_PLSS"
                  title="Strv 122B PLSS"
                  item_type="own"
                  text="Strv 122B PLSS"
                  intname="sw_strv_122b_plss"
                  type="ground"
                />
                <EmptyDiv />
              </td>
              <td>
                <TechTreeItem
                  link="/ASRAD-R"
                  title="ASRAD-R"
                  item_type="own"
                  text="ASRAD-R"
                  intname="sw_asrad_r"
                  type="ground"
                />
                <Arrow length={0} />
                <TechTreeItem
                  link="/ItO_90M"
                  title="ItO 90M"
                  item_type="own"
                  text="ItO 90M"
                  intname="sw_crotale_ng"
                  type="ground"
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
        <a href="https://yewtu.be/LC_oqR7HTBQ">
          <b>Sound Recording Swedish Tanks</b> - <i>War Thunder Official Channel</i>
        </a>
        <a href="https://yewtu.be/YjidJ7K95Lc">
          <b>Climbing the ranks with Swedish tanks</b> - <i>War Thunder Official Channel</i>
        </a>
      </div>
    </div>
  );
}
