import { Arrow } from "../Arrow";
import { EmptyDiv } from "../EmptyDiv";
import { MediaHead } from "../MediaHead";
import { Rank } from "../Rank";
import { Research } from "../Research";
import { TechTreeItem } from "../TechTreeItem";
import { TreeFolder } from "../TreeFolder";

export function ItalyHeli() {
  return (
    <div className="mw-parser-output">
      <div className="tree">
        <table rules="rows" width="100%">
          <tbody>
            <Research research={1} premium={2} />
            <tr>
              <td colSpan={4} style={{ padding: 1, textAlign: "center" }}>
                <p>
                  <span style={{ color: "#cccccc" }}>
                    Helicopters become available for research and purchase only with the ownership
                    of at least one Rank 5 intname of the corresponding nation
                  </span>
                </p>
              </td>
            </tr>
            <tr>
              <Rank rank="V" />
              <td style={{ width: 400, paddingLeft: "20%" }}>
                <table style={{ margin: 0, marginTop: "-7px" }} cellSpacing={0}>
                  <tbody>
                    <tr>
                      <td>
                        <TechTreeItem
                          link="/AB_205_A-1"
                          title="AB 205 A-1"
                          item_type="own"
                          text="AB 205 A-1"
                          intname="ab_205a_1"
                          type="helicopter"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <Arrow type="small" />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
              <td style={{ borderLeft: "solid 1px #cccccc" }} />
              <td />
            </tr>
            <tr>
              <Rank rank="VI" />
              <td style={{ width: 400, paddingLeft: "20%" }}>
                <table style={{ margin: 0, marginTop: "-7px" }} cellSpacing={0}>
                  <tbody>
                    <tr>
                      <td>
                        <TechTreeItem
                          link="/A.109EOA-2"
                          title="A.109EOA-2"
                          item_type="own"
                          text="A.109EOA-2"
                          intname="a_109_eoa2"
                          type="helicopter"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>
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
                    </tr>
                  </tbody>
                </table>
              </td>
              <td style={{ borderLeft: "solid 1px #cccccc" }}>
                <TechTreeItem
                  link="/A-129_International_(p)"
                  title="A-129 International (p)"
                  item_type="prem"
                  text="A-129 International (p)"
                  intname="a_129_a"
                  type="helicopter"
                />
                <EmptyDiv />
                <TechTreeItem
                  link="/T129"
                  title="T129"
                  item_type="prem"
                  text="T129"
                  intname="t_129_atak"
                  type="helicopter"
                />
              </td>
              <td />
            </tr>
            <tr>
              <Rank rank="VII" />
              <td style={{ width: 400, paddingLeft: "20%" }}>
                <table style={{ margin: 0, marginTop: "-7px" }} cellSpacing={0}>
                  <tbody>
                    <tr>
                      <td>
                        <TechTreeItem
                          link="/A129CBT"
                          title="A129CBT"
                          item_type="own"
                          text="A129CBT"
                          intname="a_129_cbt"
                          type="helicopter"
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>
                <EmptyDiv />
              </td>
              <td style={{ borderLeft: "solid 1px #cccccc" }} />
              <td />
            </tr>
          </tbody>
        </table>
      </div>
      <MediaHead />
      <div className="video_gallery">
        <a href="https://yewtu.be/wGrhRQ3yrFs">
          <b>The Shooting Range #262</b> - <i>Pages of History</i> section at 03:44 discusses the first Italian attack helicopters.
        </a>
      </div>
    </div>
  );
}
