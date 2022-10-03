import { Arrow } from "../Arrow";
import { EmptyDiv } from "../EmptyDiv";
import { MediaHead } from "../MediaHead";
import { Rank } from "../Rank";
import { Research } from "../Research";
import { TechTreeItem } from "../TechTreeItem";
import { TreeFolder } from "../TreeFolder";

export function SwedenHeli() {
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
                          link="/HKP3C"
                          title="HKP3C"
                          item_type="own"
                          text="HKP3C"
                          intname="hkp3c"
                          type="helicopter"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <Arrow length={0} />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <TechTreeItem
                          link="/HKP2"
                          title="HKP2"
                          item_type="own"
                          text="HKP2"
                          intname="hkp2"
                          type="helicopter"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <Arrow length={0} />
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
                          link="/HKP9A"
                          title="HKP9A"
                          item_type="own"
                          text="HKP9A"
                          intname="hkp9a_cb2"
                          type="helicopter"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <Arrow length={0} />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <TechTreeItem
                          link="/HKP9A_(FC)"
                          title="HKP9A (FC)"
                          item_type="own"
                          text="HKP9A (FC)"
                          intname="hkp9a_cb3_fc"
                          type="helicopter"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <Arrow length={0} />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <TechTreeItem
                          link="/AHS"
                          title="AHS"
                          item_type="own"
                          text="AHS"
                          intname="ahs"
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
              <td style={{ borderLeft: "solid 1px #cccccc" }}>
                <TechTreeItem
                  link="/Mi-28A"
                  title="Mi-28A"
                  item_type="prem"
                  text="Mi-28A"
                  intname="mi_28a_sweden"
                  type="helicopter"
                />
              </td>
              <td />
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
