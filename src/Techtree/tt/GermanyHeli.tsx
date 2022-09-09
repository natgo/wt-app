import { Arrow } from "../Arrow";
import { EmptyDiv } from "../EmptyDiv";
import { MediaHead } from "../MediaHead";
import { Rank } from "../Rank";
import { Research } from "../Research";
import { TechTreeItem } from "../TechTreeItem";
import { TreeFolder } from "../TreeFolder";

export function GermanyHeli() {
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
                      <td />
                      <td />
                      <td />
                      <td />
                      <td>
                        <TechTreeItem
                          link="/SA_313B_Alouette_II_(Germany)"
                          title="SA 313B Alouette II (Germany)"
                          item_type="own"
                          text="▀SA 313B Alouette II"
                          intname="sa_313b"
                          type="helicopter"
                        />
                      </td>
                      <td />
                      <td />
                      <td />
                      <td />
                    </tr>
                    <tr>
                      <td />
                      <td />
                      <td colSpan={3} style={{ textAlign: "center" }}>
                        <div className="tree-arrow-right">
                          <img src="./images/Arrow-left-down.png" alt="Arrow-left-down.png" />
                        </div>
                      </td>
                      <td />
                      <td />
                      <td />
                      <td />
                    </tr>
                    <tr>
                      <td />
                      <td />
                      <td>
                        <TechTreeItem
                          link="/UH-1D_(Germany)"
                          title="UH-1D (Germany)"
                          item_type="own"
                          text="▀UH-1D"
                          intname="uh_1d"
                          type="helicopter"
                        />
                      </td>
                      <td />
                      <td />
                      <td />
                      <td />
                      <td />
                      <td />
                    </tr>
                    <tr>
                      <td />
                      <td />
                      <td>
                        <Arrow type="small" />
                      </td>
                      <td />
                      <td />
                      <td />
                      <td />
                      <td />
                      <td />
                    </tr>
                  </tbody>
                </table>
              </td>
              <td style={{ borderLeft: "solid 1px #cccccc" }}>
                <div
                  style={{
                    position: "relative",
                    width: 160,
                    height: 94,
                    margin: "auto",
                  }}
                />
                <TechTreeItem
                  link="/BO_105_CB-2"
                  title="BO 105 CB-2"
                  item_type="prem"
                  text="BO 105 CB-2"
                  intname="bo_105cb2"
                  type="helicopter"
                />
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
                          link="/BO_105_PAH-1"
                          title="BO 105 PAH-1"
                          item_type="own"
                          text="BO 105 PAH-1"
                          intname="bo_105pah1"
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
                          link="/Mi-24P_(Germany)"
                          title="Mi-24P (Germany)"
                          item_type="own"
                          text="▀Mi-24P"
                          intname="mi_24p_german"
                          type="helicopter"
                        />
                      </td>
                      <td />
                      <td />
                      <td />
                      <td />
                    </tr>
                    <tr>
                      <td />
                      <td />
                      <td>
                        <Arrow type="small" />
                      </td>
                      <td />
                      <td />
                      <td />
                      <td />
                      <td />
                      <td />
                    </tr>
                    <tr>
                      <td />
                      <td />
                      <td>
                        <TechTreeItem
                          link="/BO_105_PAH-1A1"
                          title="BO 105 PAH-1A1"
                          item_type="own"
                          text="BO 105 PAH-1A1"
                          intname="bo_105pah1_a1"
                          type="helicopter"
                        />
                      </td>
                      <td />
                      <td />
                      <td />
                      <td />
                      <td />
                      <td />
                    </tr>
                    <tr>
                      <td />
                      <td />
                      <td>
                        <Arrow type="small" />
                      </td>
                      <td />
                      <td />
                      <td />
                      <td />
                      <td />
                      <td />
                    </tr>
                  </tbody>
                </table>
              </td>
              <td style={{ borderLeft: "solid 1px #cccccc" }}>
                <div
                  style={{
                    position: "relative",
                    width: 160,
                    height: 94,
                    margin: "auto",
                  }}
                />
                <TechTreeItem
                  link="/Mi-24P_HFS_80_(Germany)"
                  title="Mi-24P HFS 80 (Germany)"
                  item_type="prem"
                  text="▀Mi-24P HFS 80"
                  intname="mi_24p_german_hfs80"
                  type="helicopter"
                />
              </td>
              <td />
            </tr>
            <tr>
              <Rank rank="VII" />
              <td style={{ width: 500, paddingLeft: "18%" }}>
                <table style={{ margin: 0, marginTop: "-7px" }} cellSpacing={0}>
                  <tbody>
                    <tr>
                      <td />
                      <td />
                      <td>
                        <TechTreeItem
                          link="/EC-665_Tiger_UHT"
                          title="EC-665 Tiger UHT"
                          item_type="own"
                          text="EC-665 Tiger UHT"
                          intname="tiger_uht"
                          type="helicopter"
                        />
                      </td>
                      <td />
                      <td />
                      <td />
                      <td />
                      <td />
                      <td />
                    </tr>
                  </tbody>
                </table>
                <p>
                  <br />
                </p>
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
