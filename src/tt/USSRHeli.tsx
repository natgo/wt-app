import { Arrow, EmptyDiv, MediaHead, Rank, Research, TechTreeItem, TreeFolder } from "../TechTree";

export function USSRHeli() {
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
                          link="/Mi-4AV"
                          title="Mi-4AV"
                          item_type="own"
                          text="Mi-4AV"
                          intname="mi_4av"
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
                          link="/Mi-24A"
                          title="Mi-24A"
                          item_type="own"
                          text="Mi-24A"
                          intname="mi_24a"
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
                  link="/Mi-24D_(USSR)"
                  title="Mi-24D (USSR)"
                  item_type="prem"
                  text="▂Mi-24D"
                  intname="mi_24d"
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
                      <td>
                        <TechTreeItem
                          link="/Mi-24V"
                          title="Mi-24V"
                          item_type="own"
                          text="Mi-24V"
                          intname="mi_24v"
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
                          link="/Mi-24P"
                          title="Mi-24P"
                          item_type="own"
                          text="Mi-24P"
                          intname="mi_24p"
                          type="helicopter"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td colSpan={3} style={{ textAlign: "center" }}>
                        <div className="tree-arrow-right">
                          <img
                            src="/images/Arrow-down-and-right-down.png"
                            alt="Arrow-down-and-right-down.png"
                          />
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <TechTreeItem
                          link="/Mi-35M"
                          title="Mi-35M"
                          item_type="own"
                          text="Mi-35M"
                          intname="mi_35m"
                          type="helicopter"
                        />
                      </td>
                      <td />
                      <td>
                        <TechTreeItem
                          link="/Ka-29"
                          title="Ka-29"
                          item_type="own"
                          text="Ka-29"
                          intname="ka_29"
                          type="helicopter"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <Arrow type="small" />
                      </td>
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
                  link="/Ka-50"
                  title="Ka-50"
                  item_type="prem"
                  text="Ka-50"
                  intname="ka_50"
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
                          link="/Mi-28N"
                          title="Mi-28N"
                          item_type="own"
                          text="Mi-28N"
                          intname="mi_28n"
                          type="helicopter"
                        />
                      </td>
                      <td />
                      <td>
                        <TechTreeItem
                          link="/Ka-52"
                          title="Ka-52"
                          item_type="own"
                          text="Ka-52"
                          intname="ka_52"
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
                          link="/Mi-28NM"
                          title="Mi-28NM"
                          item_type="own"
                          text="Mi-28NM"
                          intname="mi_28nm"
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
