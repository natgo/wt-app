import { Arrow } from "../Arrow";
import { EmptyDiv } from "../EmptyDiv";
import { MediaHead } from "../MediaHead";
import { Rank } from "../Rank";
import { Research } from "../Research";
import { TechTreeItem } from "../TechTreeItem";
import { TreeFolder } from "../TreeFolder";

export function IsraelGround() {
  return (
    <div className="mw-parser-output">
      <div className="tree">
        <table rules="rows" width="100%">
          <tbody>
            <Research research={3} premium={2} />
            <tr>
              <Rank rank="IV" />
              <td>
                <TechTreeItem
                  link="/M-51"
                  title="M-51"
                  item_type="own"
                  text="M-51"
                  intname="il_m_51"
                  type="ground"
                />
                <Arrow length={0} />
                <TechTreeItem
                  link="/Magach_1"
                  title="Magach 1"
                  item_type="own"
                  text="Magach 1"
                  intname="il_m48a1_patton_iii"
                  type="ground"
                />
                <Arrow length={0} />
                <TechTreeItem
                  link="/Magach_2"
                  title="Magach 2"
                  item_type="own"
                  text="Magach 2"
                  intname="il_magach_2"
                  type="ground"
                />
                <Arrow length={0} />
              </td>
              <td>
                <TechTreeItem
                  link="/AMX-13_(Israel)"
                  title="AMX-13 (Israel)"
                  item_type="own"
                  text="AMX-13"
                  intname="il_amx_13_75"
                  type="ground"
                />
                <Arrow length={0} />
                <TechTreeItem
                  link="/AML-90_(Israel)"
                  title="AML-90 (Israel)"
                  item_type="own"
                  text="AML-90"
                  intname="il_aml_90"
                  type="ground"
                />
                <Arrow length={0} />
                <TechTreeItem
                  link="/Sho%27t"
                  title="Sho't"
                  item_type="own"
                  text="Sho't"
                  intname="il_centurion_mk_5_shot"
                  type="ground"
                />
                <Arrow length={0} />
              </td>
              <td>
                <TechTreeItem
                  link="/Zachlam_Tager"
                  title="Zachlam Tager"
                  item_type="own"
                  text="Zachlam Tager"
                  intname="il_ss_11_halftrack"
                  type="ground"
                />
                <Arrow length={2} />
              </td>
              <td style={{ borderLeft: "solid 1px #cccccc" }}>
                <TechTreeItem
                  link="/M-51_(W)"
                  title="M-51 (W)"
                  item_type="prem"
                  text="M-51 (W)"
                  intname="il_m_51_w"
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
                  link="/Magach_3"
                  title="Magach 3"
                  item_type="own"
                  text="Magach 3"
                  intname="il_magach_3_idf"
                  type="ground"
                />
                <Arrow length={0} />
                <TreeFolder name="Magach 6/6A" img="il_magach_6_6a_group">
                  <TechTreeItem
                    link="/Magach_6"
                    title="Magach 6"
                    item_type="own"
                    text="Magach 6"
                    intname="il_magach_6"
                    type="ground"
                  />
                  <Arrow length={0} />
                  <TechTreeItem
                    link="/Magach_6A"
                    title="Magach 6A"
                    item_type="own"
                    text="Magach 6A"
                    intname="il_magach_6a"
                    type="ground"
                  />
                </TreeFolder>
                <Arrow length={0} />
                <TechTreeItem
                  link="/Magach_5"
                  title="Magach 5"
                  item_type="own"
                  text="Magach 5"
                  intname="il_magach_5"
                  type="ground"
                />
                <Arrow length={0} />
              </td>
              <td>
                <TechTreeItem
                  link="/Tiran_4"
                  title="Tiran 4"
                  item_type="own"
                  text="Tiran 4"
                  intname="il_tiran_4"
                  type="ground"
                />
                <Arrow length={0} />
                <TechTreeItem
                  link="/Tiran_4S"
                  title="Tiran 4S"
                  item_type="own"
                  text="Tiran 4S"
                  intname="il_tiran_4_sh"
                  type="ground"
                />
                <Arrow length={0} />
                <TechTreeItem
                  link="/Sho%27t_Kal_Alef"
                  title="Sho't Kal Alef"
                  item_type="own"
                  text="Sho't Kal Alef"
                  intname="il_centurion_shot_kal_alef"
                  type="ground"
                />
                <Arrow length={0} />
              </td>
              <td>
                <TechTreeItem
                  link="/Hovet"
                  title="Hovet"
                  item_type="own"
                  text="Hovet"
                  intname="il_m163_vulcan"
                  type="ground"
                />
                <Arrow length={2} />
              </td>
              <td style={{ borderLeft: "solid 1px #cccccc" }}>
                <TechTreeItem
                  link="/Magach_3_(ERA)"
                  title="Magach 3 (ERA)"
                  item_type="prem"
                  text="Magach 3 (ERA)"
                  intname="il_magach_3"
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
                  link="/Magach_6R"
                  title="Magach 6R"
                  item_type="own"
                  text="Magach 6R"
                  intname="il_magach_6r"
                  type="ground"
                />
                <Arrow length={0} />
                <TechTreeItem
                  link="/Magach_6B"
                  title="Magach 6B"
                  item_type="own"
                  text="Magach 6B"
                  intname="il_magach_6b"
                  type="ground"
                />
                <Arrow length={0} />
                <TechTreeItem
                  link="/Magach_6M"
                  title="Magach 6M"
                  item_type="own"
                  text="Magach 6M"
                  intname="il_magach_6m"
                  type="ground"
                />
                <Arrow length={0} />
                <TechTreeItem
                  link="/Magach_6C"
                  title="Magach 6C"
                  item_type="own"
                  text="Magach 6C"
                  intname="il_magach_6c"
                  type="ground"
                />
                <Arrow length={0} />
                <TechTreeItem
                  link="/Gal_Batash"
                  title="Gal Batash"
                  item_type="own"
                  text="Gal Batash"
                  intname="il_magach_6b_gal_batash"
                  type="ground"
                />
              </td>
              <td>
                <TechTreeItem
                  link="/Sho%27t_Kal_Gimel"
                  title="Sho't Kal Gimel"
                  item_type="own"
                  text="Sho't Kal Gimel"
                  intname="il_centurion_shot_kal_gimel"
                  type="ground"
                />
                <Arrow length={0} />
                <TechTreeItem
                  link="/Merkava_Mk.1B"
                  title="Merkava Mk.1B"
                  item_type="own"
                  text="Merkava Mk.1B"
                  intname="il_merkava_mk_1b"
                  type="ground"
                />
                <Arrow length={0} />
                <TechTreeItem
                  link="/Merkava_Mk.2B"
                  title="Merkava Mk.2B"
                  item_type="own"
                  text="Merkava Mk.2B"
                  intname="il_merkava_mk_2b_early"
                  type="ground"
                />
                <Arrow length={0} />
                <TechTreeItem
                  link="/Merkava_Mk.3B"
                  title="Merkava Mk.3B"
                  item_type="own"
                  text="Merkava Mk.3B"
                  intname="il_merkava_mk_3b"
                  type="ground"
                />
                <Arrow length={0} />
                <TechTreeItem
                  link="/Merkava_Mk.3C"
                  title="Merkava Mk.3C"
                  item_type="own"
                  text="Merkava Mk.3C"
                  intname="il_merkava_mk_3c"
                  type="ground"
                />
                <Arrow length={0} />
              </td>
              <td>
                <TechTreeItem
                  link="/Machbet"
                  title="Machbet"
                  item_type="own"
                  text="Machbet"
                  intname="il_machbet"
                  type="ground"
                />
              </td>
              <td style={{ borderLeft: "solid 1px #cccccc" }}>
                <TechTreeItem
                  link="/Sho%27t_Kal_Dalet"
                  title="Sho't Kal Dalet"
                  item_type="prem"
                  text="Sho't Kal Dalet"
                  intname="il_centurion_shot_kal_d"
                  type="ground"
                />
                <EmptyDiv />
                <TechTreeItem
                  link="/Merkava_Mk.2D"
                  title="Merkava Mk.2D"
                  item_type="prem"
                  text="Merkava Mk.2D"
                  intname="il_merkava_mk_2d"
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
                  link="/Merkava_Mk.4B"
                  title="Merkava Mk.4B"
                  item_type="own"
                  text="Merkava Mk.4B"
                  intname="il_merkava_mk_4b"
                  type="ground"
                />
                <Arrow length={0} />
                <TechTreeItem
                  link="/Merkava_Mk.4M"
                  title="Merkava Mk.4M"
                  item_type="own"
                  text="Merkava Mk.4M"
                  intname="il_merkava_mk_4m"
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
        <a href="https://yewtu.be/XxBUWKsv0LU">
          <b>Climbing the Ranks: Israeli Armor</b> - <i>War Thunder Official Channel</i>
        </a>
      </div>
    </div>
  );
}
