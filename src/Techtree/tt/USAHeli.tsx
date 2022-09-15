import { Arrow } from "../Arrow";
import { EmptyDiv } from "../EmptyDiv";
import { MediaHead } from "../MediaHead";
import { Rank } from "../Rank";
import { Research } from "../Research";
import { TechTreeItem } from "../TechTreeItem";
import { TreeFolder } from "../TreeFolder";

export function USAHeli() {
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
              <td style={{ width: 500, paddingLeft: "18%" }}>
                <table style={{ margin: 0, marginTop: "-7px" }} cellSpacing={0}>
                  <tbody>
                    <tr>
                      <td>
                        <TechTreeItem
                          link="/AH-1G"
                          title="AH-1G"
                          item_type="own"
                          text="AH-1G"
                          intname="ah_1g"
                          type="helicopter"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <Arrow type="small" />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <TechTreeItem
                          link="/UH-1B"
                          title="UH-1B"
                          item_type="own"
                          text="UH-1B"
                          intname="uh_1b"
                          type="helicopter"
                        />
                      </td>
                      <td>
                        <div className="tree-arrow-right">
                          <img src="./images/Arrow-left.png" alt="Arrow-left.png" />
                        </div>
                      </td>
                      <td>
                        <TechTreeItem
                          link="/UH-1C"
                          title="UH-1C"
                          item_type="own"
                          text="UH-1C"
                          intname="uh_1c"
                          type="helicopter"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td />
                      <td />
                      <td>
                        <Arrow type="small" />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
              <td style={{ borderLeft: "solid 1px #cccccc" }}>
                <TechTreeItem
                  link="/H-34"
                  title="H-34"
                  item_type="prem"
                  text="H-34"
                  intname="h_34"
                  type="helicopter"
                />
                <div
                  style={{
                    position: "relative",
                    width: 160,
                    height: 44,
                    margin: "auto",
                  }}
                />
                <TechTreeItem
                  link="/UH-1C_XM-30"
                  title="UH-1C XM-30"
                  item_type="prem"
                  text="UH-1C XM-30"
                  intname="uh_1c_xm_30"
                  type="helicopter"
                />
                <EmptyDiv />
              </td>
              <td />
            </tr>
            <tr>
              <Rank rank="VI" />
              <td style={{ width: 500, paddingLeft: "18%" }}>
                <table style={{ margin: 0, marginTop: "-7px" }} cellSpacing={0}>
                  <tbody>
                    <tr>
                      <td />
                      <td />
                      <td>
                        <TechTreeItem
                          link="/AH-1F"
                          title="AH-1F"
                          item_type="own"
                          text="AH-1F"
                          intname="ah_1f"
                          type="helicopter"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td colSpan={3} style={{ textAlign: "center" }}>
                        <div className="tree-arrow-right">
                          <img src="./images/Arrow-left-down.png" alt="Arrow-left-down.png" />
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <TechTreeItem
                          link="/AH-64A"
                          title="AH-64A"
                          item_type="own"
                          text="AH-64A"
                          intname="ah_64a"
                          type="helicopter"
                        />
                      </td>
                      <td />
                      <td rowSpan={2}>
                        <div style={{ marginTop: "-25px", marginLeft: 8 }}>
                          <div className="tree-arrow">
                            <img src="./images/Arrow_tail.png" alt="Arrow_tail.png" />
                            <br />
                            <img src="./images/Arrow_center.png" alt="Arrow_center.png" />
                            <br />
                            <img src="./images/Arrow_head.png" alt="Arrow_head.png" />
                          </div>
                        </div>
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
              <td style={{ borderLeft: "solid 1px #cccccc" }}>
                <TechTreeItem
                  link="/YAH-64"
                  title="YAH-64"
                  item_type="squad"
                  text="YAH-64"
                  intname="yah_64"
                  type="helicopter"
                />
                <EmptyDiv />
              </td>
              <td>
                <TechTreeItem
                  link="/AH-64A_Peten_(USA)"
                  title="AH-64A Peten (USA)"
                  item_type="prem"
                  text="▃AH-64A Peten"
                  intname="ah_64a_peten"
                  type="helicopter"
                />
                <EmptyDiv />
              </td>
            </tr>
            <tr>
              <Rank rank="VII" />
              <td style={{ width: 500, paddingLeft: "18%" }}>
                <table style={{ margin: 0, marginTop: "-7px" }} cellSpacing={0}>
                  <tbody>
                    <tr>
                      <td>
                        <TechTreeItem
                          link="/AH-64D"
                          title="AH-64D"
                          item_type="own"
                          text="AH-64D"
                          intname="ah_64d"
                          type="helicopter"
                        />
                      </td>
                      <td />
                      <td>
                        <TechTreeItem
                          link="/AH-1Z"
                          title="AH-1Z"
                          item_type="own"
                          text="AH-1Z"
                          intname="ah_1z"
                          type="helicopter"
                        />
                        <div
                          style={{
                            position: "relative",
                            width: 160,
                            height: 30,
                            margin: "auto",
                          }}
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
              <td style={{ borderLeft: "solid 1px #cccccc" }} />
              <td />
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
