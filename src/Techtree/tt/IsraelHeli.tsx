import { Arrow } from "../Arrow";
import { EmptyDiv } from "../EmptyDiv";
import { MediaHead } from "../MediaHead";
import { Rank } from "../Rank";
import { Research } from "../Research";
import { TechTreeItem } from "../TechTreeItem";
import { TreeFolder } from "../TreeFolder";

export function IsraelHeli() {
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
                          link="/AH-1G_(Israel)"
                          title="AH-1G (Israel)"
                          item_type="own"
                          text="AH-1G"
                          intname="ah_1g_iaf"
                          type="helicopter"
                        />
                      </td>
                      <td />
                      <td />
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
                      <td />
                      <td>
                        <TechTreeItem
                          link="/MD500-TOW"
                          title="MD500-TOW"
                          item_type="own"
                          text="MD500-TOW"
                          intname="md_500_tow_late"
                          type="helicopter"
                        />
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
              <td style={{ width: 500, paddingLeft: "18%" }}>
                <table style={{ margin: 0, marginTop: "-7px" }} cellSpacing={0}>
                  <tbody>
                    <tr>
                      <td>
                        <TechTreeItem
                          link="/AH-1Q_(Israel)"
                          title="AH-1Q (Israel)"
                          item_type="own"
                          text="AH-1Q"
                          intname="ah_1q_iaf"
                          type="helicopter"
                        />
                      </td>
                      <td />
                      <td />
                    </tr>
                    <tr>
                      <td>
                        <Arrow length={0} />
                      </td>
                      <td />
                      <td />
                    </tr>
                    <tr>
                      <td>
                        <TechTreeItem
                          link="/AH-1F_(Israel)"
                          title="AH-1F (Israel)"
                          item_type="own"
                          text="AH-1F"
                          intname="ah_1f_iaf"
                          type="helicopter"
                        />
                      </td>
                      <td />
                      <td />
                    </tr>
                    <tr>
                      <td>
                        <Arrow length={0} />
                      </td>
                      <td />
                      <td />
                    </tr>
                    <tr>
                      <td>
                        <TechTreeItem
                          link="/AH-64A_(Israel)"
                          title="AH-64A (Israel)"
                          item_type="own"
                          text="AH-64A"
                          intname="ah_64a_iaf"
                          type="helicopter"
                        />
                      </td>
                      <td />
                      <td />
                    </tr>
                    <tr>
                      <td>
                        <Arrow length={0} />
                      </td>
                      <td />
                      <td />
                    </tr>
                  </tbody>
                </table>
              </td>
              <td style={{ borderLeft: "solid 1px #cccccc" }}>
                <TechTreeItem
                  link="/AH-64A_Peten"
                  title="AH-64A Peten"
                  item_type="prem"
                  text="AH-64A Peten"
                  intname="ah_64a_peten_iaf"
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
                      <td>
                        <TechTreeItem
                          link="/AH-64D-I_(Israel)"
                          title="AH-64D-I (Israel)"
                          item_type="own"
                          text="AH-64D-I"
                          intname="ah_64d_i_saraph"
                          type="helicopter"
                        />
                      </td>
                      <td />
                      <td />
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
