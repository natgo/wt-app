import { openfolder } from ".";
import { Arrow, EmptyDiv, Rank, Research, TechTreeItem } from "../TechTree";

export function FranceHeli() {
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
              <td style={{ width: 500, paddingLeft: "18.5%" }}>
                <table style={{ margin: 0, marginTop: "-7px" }} cellSpacing={0}>
                  <tbody>
                    <tr>
                      <td />
                      <td />
                      <td />
                      <td />
                      <td>
                        <TechTreeItem
                          link="/H-34_(France)"
                          title="H-34 (France)"
                          item_type="own"
                          text="▄H-34"
                          intname="h_34_france"
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
                      <td />
                      <td />
                      <td colSpan={3} style={{ textAlign: "center" }}>
                        <div className="tree-arrow-right">
                          <img
                            src="/images/Arrow-down-and-right-down.png"
                            alt="Arrow-down-and-right-down.png"
                          />
                        </div>
                      </td>
                      <td />
                      <td />
                    </tr>
                    <tr>
                      <td />
                      <td />
                      <td />
                      <td />
                      <td>
                        <TechTreeItem
                          link="/SA_313B_Alouette_II"
                          title="SA 313B Alouette II"
                          item_type="own"
                          text="SA 313B Alouette II"
                          intname="sa_313b_france"
                          type="helicopter"
                        />
                      </td>
                      <td />
                      <td>
                        <TechTreeItem
                          link="/SA_316B_Alouette_III"
                          title="SA 316B Alouette III"
                          item_type="own"
                          text="SA 316B Alouette III"
                          intname="sa_316b"
                          type="helicopter"
                        />
                      </td>
                      <td />
                      <td />
                    </tr>
                    <tr>
                      <td />
                      <td />
                      <td />
                      <td />
                      <td />
                      <td />
                      <td>
                        <Arrow type="small" />
                      </td>
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
                  link="/IAR_316B"
                  title="IAR 316B"
                  item_type="prem"
                  text="IAR 316B"
                  intname="iar_316b"
                  type="helicopter"
                />
              </td>
              <td />
            </tr>
            <tr>
              <Rank rank="VI" />
              <td style={{ width: 500, paddingLeft: "29%" }}>
                <table style={{ margin: 0, marginTop: "-7px" }} cellSpacing={0}>
                  <tbody>
                    <tr>
                      <td />
                      <td />
                      <td />
                      <td />
                      <td />
                      <td />
                      <td>
                        <TechTreeItem
                          link="/SA_341F_Gazelle"
                          title="SA 341F Gazelle"
                          item_type="own"
                          text="SA 341F Gazelle"
                          intname="sa_341f"
                          type="helicopter"
                        />
                      </td>
                      <td />
                      <td />
                    </tr>
                    <tr>
                      <td />
                      <td />
                      <td />
                      <td />
                      <td />
                      <td />
                      <td>
                        <Arrow type="small" />
                      </td>
                      <td />
                      <td />
                    </tr>
                    <tr>
                      <td />
                      <td />
                      <td />
                      <td />
                      <td />
                      <td />
                      <td>
                        <TechTreeItem
                          link="/SA_342M_Gazelle"
                          title="SA 342M Gazelle"
                          item_type="own"
                          text="SA 342M Gazelle"
                          intname="sa_342m"
                          type="helicopter"
                        />
                      </td>
                      <td />
                      <td />
                    </tr>
                    <tr>
                      <td />
                      <td />
                      <td />
                      <td />
                      <td />
                      <td />
                      <td>
                        <Arrow type="small" />
                      </td>
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
                  link="/EC-665_Tiger_HAP"
                  title="EC-665 Tiger HAP"
                  item_type="prem"
                  text="EC-665 Tiger HAP"
                  intname="tiger_hap_france"
                  type="helicopter"
                />
              </td>
              <td />
            </tr>
            <tr>
              <Rank rank="VII" />
              <td style={{ width: 500, paddingLeft: "29%" }}>
                <table style={{ margin: 0, marginTop: "-7px" }} cellSpacing={0}>
                  <tbody>
                    <tr>
                      <td />
                      <td />
                      <td />
                      <td />
                      <td />
                      <td />
                      <td>
                        <TechTreeItem
                          link="/EC-665_Tiger_HAD"
                          title="EC-665 Tiger HAD"
                          item_type="own"
                          text="EC-665 Tiger HAD"
                          intname="tiger_had_france"
                          type="helicopter"
                        />
                      </td>
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
