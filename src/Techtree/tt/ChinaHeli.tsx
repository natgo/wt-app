import { Arrow } from "../Arrow";
import { EmptyDiv } from "../EmptyDiv";
import { MediaHead } from "../MediaHead";
import { Rank } from "../Rank";
import { Research } from "../Research";
import { TechTreeItem } from "../TechTreeItem";
import { TreeFolder } from "../TreeFolder";

export function ChinaHeli() {
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
                  <tr>
                    <td>
                      <TechTreeItem
                        link="/Z-11WA"
                        title="Z-11WA"
                        item_type="own"
                        text="Z-11WA"
                        intname="z_11wa"
                        type="helicopter"
                      />
                    </td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td colSpan={3} style={{ textAlign: "center" }}>
                      <div className="tree-arrow-right-down">
                        <img
                          src="./images/Arrow-down-and-right-down.png"
                          alt="Arrow-down-and-right-down.png"
                        />
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div style={{ marginTop: "-27px", marginLeft: "-3px" }}>
                        <Arrow length={1} />
                      </div>
                    </td>
                    <td></td>
                    <td>
                      <TechTreeItem
                        link="/SA.342L_Gazelle"
                        title="SA.342L Gazelle"
                        item_type="own"
                        text="SA.342L Gazelle"
                        intname="sa_342l_china"
                        type="helicopter"
                      />
                    </td>
                  </tr>
                </table>
              </td>
              <td style={{ borderLeft: "solid 1px #cccccc" }}></td>
              <td></td>
            </tr>
            <tr>
              <Rank rank="VI" />
              <td style={{ width: 500, paddingLeft: "18%" }}>
                <table style={{ margin: 0, marginTop: "-7px" }} cellSpacing={0}>
                  <tr>
                    <td>
                      <TechTreeItem
                        link="/Z-9W"
                        title="Z-9W"
                        item_type="own"
                        text="Z-9W"
                        intname="z_9w"
                        type="helicopter"
                      />
                    </td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>
                      <Arrow length={0} />
                    </td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>
                      <TechTreeItem
                        link="/Z-9WA"
                        title="Z-9WA"
                        item_type="own"
                        text="Z-9WA"
                        intname="z_9wa"
                        type="helicopter"
                      />
                    </td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>
                      <Arrow length={0} />
                    </td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>
                      <TechTreeItem
                        link="/Z-19"
                        title="Z-19"
                        item_type="own"
                        text="Z-19"
                        intname="z_19"
                        type="helicopter"
                      />
                    </td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>
                      <Arrow length={0} />
                    </td>
                    <td></td>
                    <td></td>
                  </tr>
                </table>
              </td>
              <td style={{ borderLeft: "solid 1px #cccccc" }}>
                <TechTreeItem
                  link="/Z-19E"
                  title="Z-19E"
                  item_type="prem"
                  text="Z-19E"
                  intname="z_19e"
                  type="helicopter"
                />
                <EmptyDiv />
              </td>
              <td />
            </tr>
            <tr>
              <Rank rank="VII" />
              <td style={{ width: "500px", paddingLeft: "18%" }}>
                <table cellSpacing={0} style={{ margin: 0, marginTop: "-7px" }}>
                  <tr>
                    <td>
                      <TechTreeItem
                        link="/Z-10"
                        title="Z-10"
                        item_type="own"
                        text="Z-10"
                        intname="z_10"
                        type="helicopter"
                      />
                    </td>
                    <td></td>
                    <td></td>
                  </tr>
                </table>
                <EmptyDiv />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
