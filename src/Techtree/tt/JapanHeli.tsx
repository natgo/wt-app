import { Arrow } from "../Arrow";
import { EmptyDiv } from "../EmptyDiv";
import { MediaHead } from "../MediaHead";
import { Rank } from "../Rank";
import { Research } from "../Research";
import { TechTreeItem } from "../TechTreeItem";
import { TreeFolder } from "../TreeFolder";

export function JapanHeli() {
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
                          link="/UH-1B_(Japan)"
                          title="UH-1B (Japan)"
                          item_type="own"
                          text="▅UH-1B"
                          intname="uh_1b_japan"
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
                          link="/AH-1S_early"
                          title="AH-1S early"
                          item_type="own"
                          text="AH-1S early"
                          intname="ah_1s_early"
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
                          link="/AH-1S"
                          title="AH-1S"
                          item_type="own"
                          text="AH-1S"
                          intname="ah_1s_late"
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
              <td style={{ borderLeft: "solid 1px #cccccc" }}>
                <TechTreeItem
                  link="/AH-1S_Kisarazu"
                  title="AH-1S Kisarazu"
                  item_type="prem"
                  text="AH-1S Kisarazu"
                  intname="ah_1s"
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
                          link="/AH-64DJP"
                          title="AH-64DJP"
                          item_type="own"
                          text="AH-64DJP"
                          intname="ah_64d_japan"
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
    </div>
  );
}
