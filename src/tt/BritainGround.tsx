import { openfolder } from ".";
import { Item_own, Item_prem, TechTreeImg } from "../TechTree";

export function BritainGround() {
  return (
    <div className="mw-parser-output">
      <div className="tree">
        <table rules="rows" width="100%">
          <tbody>
            <tr>
              <th style={{ borderRight: "solid 1px #eeeeee" }} />
              <th colSpan={5} style={{ borderRight: "solid 1px #eeeeee" }}>
                <span>Researchable vehicles</span>
              </th>
              <th colSpan={2}>
                <span>Premium vehicles</span>
              </th>
            </tr>
            <tr>
              <th
                style={{
                  textAlign: "center",
                  whiteSpace: "nowrap",
                  verticalAlign: "middle",
                  borderRight: "solid 1px #eeeeee",
                  width: 32,
                }}
              >
                <div
                  style={{
                    transform: "rotate(-90deg)",
                    marginLeft: "-10em",
                    marginRight: "-10em",
                  }}
                >
                  I Rank
                </div>
              </th>
              <td>
                <div className="tree-item">
                  <div className="tree-item-background" id="A13 Mk I">
                    <a href="/A13_Mk_I" title="A13 Mk I">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">A13 Mk I</span>
                  </div>
                  <TechTreeImg vehicle="uk_a_13_mk1" type="ground" />
                </div>
                <div className="tree-arrow">
                  <img src="/images/Arrow-small.png" alt="Arrow.png" />
                </div>
                <div className="tree-item">
                  <div className="tree-item-background" id="A13 Mk II">
                    <a href="/A13_Mk_II" title="A13 Mk II">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">A13 Mk II</span>
                  </div>
                  <TechTreeImg vehicle="uk_a_13_mk2" type="ground" />
                </div>
              </td>
              <td>
                <div className="tree-item">
                  <div className="tree-item-background" id="Stuart I">
                    <a href="/Stuart_I" title="Stuart I">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">Stuart I</span>
                  </div>
                  <TechTreeImg vehicle="uk_m3_stuart" type="ground" />
                </div>
                <div className="tree-arrow">
                  <img src="/images/Arrow-small.png" alt="Arrow.png" />
                </div>
                <div className="tree-item">
                  <div className="tree-item-background" id="Stuart III">
                    <a href="/Stuart_III" title="Stuart III">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">Stuart III</span>
                  </div>
                  <TechTreeImg vehicle="uk_m3a1_stuart" type="ground" />
                </div>
                <div className="tree-arrow">
                  <img src="/images/Arrow-small.png" alt="Arrow.png" />
                </div>
              </td>
              <td>
                <div className="tree-item">
                  <div className="tree-item-background" id="Tetrarch I">
                    <a href="/Tetrarch_I" title="Tetrarch I">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">Tetrarch I</span>
                  </div>
                  <TechTreeImg vehicle="uk_a17_mk_1_tetrarch" type="ground" />
                </div>
                <div className="tree-arrow">
                  <img src="/images/Arrow-small.png" alt="Arrow.png" />
                </div>
                <div className="tree-item">
                  <div className="tree-item-background" id="Daimler Mk II">
                    <a href="/Daimler_Mk_II" title="Daimler Mk II">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">Daimler Mk II</span>
                  </div>
                  <TechTreeImg vehicle="uk_daimler_mk_2" type="ground" />
                </div>
                <div className="tree-arrow">
                  <img src="/images/Arrow-small.png" alt="Arrow.png" />
                </div>
              </td>
              <td>
                <div className="tree-item">
                  <div className="tree-item-background" id="Light AA Mk I">
                    <a href="/Light_AA_Mk_I" title="Light AA Mk I">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">Light AA Mk I</span>
                  </div>
                  <TechTreeImg vehicle="uk_vickers_mk_6_aa_mk_1" type="ground" />
                </div>
                <div className="tree-arrow">
                  <img src="/images/Arrow-small.png" alt="Arrow.png" />
                </div>
                <div className="tree-item">
                  <div className="tree-item-background" id="Staghound AA">
                    <a href="/Staghound_AA" title="Staghound AA">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">Staghound AA</span>
                  </div>
                  <TechTreeImg vehicle="uk_t17e2" type="ground" />
                </div>
                <div className="tree-arrow">
                  <img src="/images/Arrow-small.png" alt="Arrow.png" />
                </div>
              </td>
              <td>
                <div
                  style={{
                    position: "relative",
                    width: 120,
                    height: 30,
                    margin: "auto",
                  }}
                />
              </td>
              <td style={{ borderLeft: "solid 1px #cccccc" }}>
                <div className="tree-item">
                  <div className="tree-item-background" id="A13 Mk I (3rd R.T.R.)">
                    <a href="/A13_Mk_I_(3rd_R.T.R.)" title="A13 Mk I (3rd R.T.R.)">
                      <Item_prem />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">A13 Mk I (3rd R.T.R.)</span>
                  </div>
                  <TechTreeImg vehicle="uk_a_13_mk1_3rd_rtr" type="ground" />
                </div>
                <div
                  style={{
                    position: "relative",
                    width: 120,
                    height: 30,
                    margin: "auto",
                  }}
                />
                <div className="tree-item">
                  <div className="tree-item-background" id="Independent">
                    <a href="/Independent" title="Independent">
                      <Item_prem />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">Independent</span>
                  </div>
                  <TechTreeImg vehicle="uk_a1e1_independent" type="ground" />
                </div>
                <div
                  style={{
                    position: "relative",
                    width: 120,
                    height: 30,
                    margin: "auto",
                  }}
                />
              </td>
              <td>
                <div className="tree-item">
                  <div className="tree-item-background" id="Alecto I">
                    <a href="/Alecto_I" title="Alecto I">
                      <Item_prem />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">Alecto I</span>
                  </div>
                  <TechTreeImg vehicle="uk_alecto_mk_1" type="ground" />
                </div>
                <div
                  style={{
                    position: "relative",
                    width: 120,
                    height: 30,
                    margin: "auto",
                  }}
                />
                <div className="tree-item">
                  <div className="tree-item-background" id="A13 Mk II 1939">
                    <a href="/A13_Mk_II_1939" title="A13 Mk II 1939">
                      <Item_prem />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">A13 Mk II 1939</span>
                  </div>
                  <TechTreeImg vehicle="uk_a_13_mk2_1939" type="ground" />
                </div>
                <div
                  style={{
                    position: "relative",
                    width: 120,
                    height: 30,
                    margin: "auto",
                  }}
                />
              </td>
            </tr>
            <tr>
              <th
                style={{
                  textAlign: "center",
                  whiteSpace: "nowrap",
                  verticalAlign: "middle",
                  borderRight: "solid 1px #eeeeee",
                  width: 32,
                }}
              >
                <div
                  style={{
                    transform: "rotate(-90deg)",
                    marginLeft: "-10em",
                    marginRight: "-10em",
                  }}
                >
                  II Rank
                </div>
              </th>
              <td>
                <div style={{ position: "relative" }}>
                  <div
                    className="tree-group-collapse"
                    style={{ display: "none", position: "absolute" }}
                  >
                    <div className="tree-item">
                      <div className="tree-item-background" id="Crusader II">
                        <a href="/Crusader_II" title="Crusader II">
                          <Item_own />
                        </a>
                      </div>
                      <div className="tree-item-text">
                        <span className="tree-item-text-scroll">Crusader II</span>
                      </div>
                      <TechTreeImg vehicle="uk_crusader_mk_2" type="ground" />
                    </div>
                    <div className="tree-arrow">
                      <img src="/images/Arrow-small.png" alt="Arrow.png" />
                    </div>
                    <div className="tree-item">
                      <div className="tree-item-background" id="Crusader III">
                        <a href="/Crusader_III" title="Crusader III">
                          <Item_own />
                        </a>
                      </div>
                      <div className="tree-item-text">
                        <span className="tree-item-text-scroll">Crusader III</span>
                      </div>
                      <TechTreeImg vehicle="uk_crusader_mk_3" type="ground" />
                    </div>
                  </div>
                  <div
                    className="tree-group"
                    onClick={(event) => {
                      openfolder(event);
                    }}
                  >
                    <div className="tree-group-text">
                      <span className="tree-item-text-scroll">Crusader</span>
                    </div>
                    <div className="tree-group-img">
                      <img
                        src="https://encyclopedia.warthunder.com/slots/uk_crusader_group.png"
                        alt="uk_crusader_group.png"
                      />
                    </div>
                  </div>
                </div>
                <div className="tree-arrow">
                  <img src="/images/Arrow-small.png" alt="Arrow.png" />
                </div>
                <div style={{ position: "relative" }}>
                  <div
                    className="tree-group-collapse"
                    style={{ display: "none", position: "absolute" }}
                  >
                    <div className="tree-item">
                      <div className="tree-item-background" id="Cromwell V">
                        <a href="/Cromwell_V" title="Cromwell V">
                          <Item_own />
                        </a>
                      </div>
                      <div className="tree-item-text">
                        <span className="tree-item-text-scroll">Cromwell V</span>
                      </div>
                      <TechTreeImg vehicle="uk_a27m_cromwell_5" type="ground" />
                    </div>
                    <div className="tree-arrow">
                      <img src="/images/Arrow-small.png" alt="Arrow.png" />
                    </div>
                    <div className="tree-item">
                      <div className="tree-item-background" id="Cromwell I">
                        <a href="/Cromwell_I" title="Cromwell I">
                          <Item_own />
                        </a>
                      </div>
                      <div className="tree-item-text">
                        <span className="tree-item-text-scroll">Cromwell I</span>
                      </div>
                      <TechTreeImg vehicle="uk_a27m_cromwell_1" type="ground" />
                    </div>
                  </div>
                  <div
                    className="tree-group"
                    onClick={(event) => {
                      openfolder(event);
                    }}
                  >
                    <div className="tree-group-text">
                      <span className="tree-item-text-scroll">Cromwell</span>
                    </div>
                    <div className="tree-group-img">
                      <img
                        src="https://encyclopedia.warthunder.com/slots/uk_cromwell_group.png"
                        alt="uk_cromwell_group.png"
                      />
                    </div>
                  </div>
                </div>
                <div className="tree-arrow">
                  <img src="/images/Arrow-small.png" alt="Arrow.png" />
                </div>
                <div className="tree-item">
                  <div className="tree-item-background" id="Sherman II">
                    <a href="/Sherman_II" title="Sherman II">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">Sherman II</span>
                  </div>
                  <TechTreeImg vehicle="uk_sherman_ii" type="ground" />
                </div>
              </td>
              <td>
                <div style={{ position: "relative" }}>
                  <div
                    className="tree-group-collapse"
                    style={{ display: "none", position: "absolute" }}
                  >
                    <div className="tree-item">
                      <div className="tree-item-background" id="Valentine I">
                        <a href="/Valentine_I" title="Valentine I">
                          <Item_own />
                        </a>
                      </div>
                      <div className="tree-item-text">
                        <span className="tree-item-text-scroll">Valentine I</span>
                      </div>
                      <TechTreeImg vehicle="uk_valentine_mk_1" type="ground" />
                    </div>
                    <div className="tree-arrow">
                      <img src="/images/Arrow-small.png" alt="Arrow.png" />
                    </div>
                    <div className="tree-item">
                      <div className="tree-item-background" id="Valentine XI">
                        <a href="/Valentine_XI" title="Valentine XI">
                          <Item_own />
                        </a>
                      </div>
                      <div className="tree-item-text">
                        <span className="tree-item-text-scroll">Valentine XI</span>
                      </div>
                      <TechTreeImg vehicle="uk_valentine_mk_11" type="ground" />
                    </div>
                    <div className="tree-arrow">
                      <img src="/images/Arrow-small.png" alt="Arrow.png" />
                    </div>
                    <div className="tree-item">
                      <div className="tree-item-background" id="Valentine IX">
                        <a href="/Valentine_IX" title="Valentine IX">
                          <Item_own />
                        </a>
                      </div>
                      <div className="tree-item-text">
                        <span className="tree-item-text-scroll">Valentine IX</span>
                      </div>
                      <TechTreeImg vehicle="uk_valentine_mk_9" type="ground" />
                    </div>
                  </div>
                  <div
                    className="tree-group"
                    onClick={(event) => {
                      openfolder(event);
                    }}
                  >
                    <div className="tree-group-text">
                      <span className="tree-item-text-scroll">Valentine</span>
                    </div>
                    <div className="tree-group-img">
                      <img
                        src="https://encyclopedia.warthunder.com/slots/uk_valentine_mk_11_9_group.png"
                        alt="uk_valentine_mk_11_9_group.png"
                      />
                    </div>
                  </div>
                </div>
                <div className="tree-arrow">
                  <img src="/images/Arrow-small.png" alt="Arrow.png" />
                </div>
                <div className="tree-item">
                  <div className="tree-item-background" id="Matilda III">
                    <a href="/Matilda_III" title="Matilda III">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">Matilda III</span>
                  </div>
                  <TechTreeImg vehicle="uk_a_12_mk_2_matilda_2" type="ground" />
                </div>
                <div className="tree-arrow">
                  <img src="/images/Arrow-small.png" alt="Arrow.png" />
                </div>
                <div className="tree-item">
                  <div className="tree-item-background" id="Churchill I">
                    <a href="/Churchill_I" title="Churchill I">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">Churchill I</span>
                  </div>
                  <TechTreeImg vehicle="uk_a_22_mk_1_churchill_1941" type="ground" />
                </div>
              </td>
              <td>
                <div className="tree-item">
                  <div className="tree-item-background" id="Archer">
                    <a href="/Archer" title="Archer">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">Archer</span>
                  </div>
                  <TechTreeImg vehicle="uk_sp_17_pdr_valentine" type="ground" />
                </div>
                <div className="tree-arrow">
                  <img src="/images/Arrow-small.png" alt="Arrow.png" />
                </div>
                <div className="tree-item">
                  <div className="tree-item-background" id="Gun Carrier (3-in)">
                    <a href="/Gun_Carrier_(3-in)" title="Gun Carrier (3-in)">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">Gun Carrier (3-in)</span>
                  </div>
                  <TechTreeImg vehicle="uk_3_inch_gun_carrier" type="ground" />
                </div>
                <div className="tree-arrow">
                  <img src="/images/Arrow-small.png" alt="Arrow.png" />
                </div>
                <div className="tree-item">
                  <div className="tree-item-background" id="Achilles">
                    <a href="/Achilles" title="Achilles">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">Achilles</span>
                  </div>
                  <TechTreeImg vehicle="uk_17_pdr_m10_achilles" type="ground" />
                </div>
              </td>
              <td>
                <div className="tree-item">
                  <div className="tree-item-background" id="AEC AA">
                    <a href="/AEC_AA" title="AEC AA">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">AEC AA</span>
                  </div>
                  <TechTreeImg vehicle="uk_armored_car_mk_2_aa" type="ground" />
                </div>
                <div className="tree-arrow">
                  <img src="/images/Arrow_tail.png" alt="Arrow_tail.png" />
                  <br />
                  <img src="/images/Arrow_center.png" alt="Arrow_center.png" />
                  <br />
                  <img src="/images/Arrow_center_small.png" alt="Arrow_center_small.png" />
                  <br />
                  <img src="/images/Arrow_center.png" alt="Arrow_center.png" />
                  <br />
                  <img src="/images/Arrow_center_small.png" alt="Arrow_center_small.png" />
                  <br />
                  <img src="/images/Arrow_center.png" alt="Arrow_center.png" />
                  <br />
                  <img src="/images/Arrow_head.png" alt="Arrow_head.png" />
                </div>
              </td>
              <td>
                <div className="tree-item">
                  <div className="tree-item-background" id="SARC MkVI (2pdr)">
                    <a href="/SARC_MkVI_(2pdr)" title="SARC MkVI (2pdr)">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">SARC MkVI (2pdr)</span>
                  </div>
                  <TechTreeImg vehicle="uk_marmon_herrington_mk_6_2pdr" type="ground" />
                </div>
                <div className="tree-arrow">
                  <img src="/images/Arrow-small.png" alt="Arrow.png" />
                </div>
                <div className="tree-item">
                  <div className="tree-item-background" id="SARC MkVI (6pdr)">
                    <a href="/SARC_MkVI_(6pdr)" title="SARC MkVI (6pdr)">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">SARC MkVI (6pdr)</span>
                  </div>
                  <TechTreeImg vehicle="uk_marmon_herrington_mk_6_6pdr" type="ground" />
                </div>
                <div className="tree-arrow">
                  <img src="/images/Arrow_tail.png" alt="Arrow_tail.png" />
                  <br />
                  <img src="/images/Arrow_center.png" alt="Arrow_center.png" />
                  <br />
                  <img src="/images/Arrow_center_small.png" alt="Arrow_center_small.png" />
                  <br />
                  <img src="/images/Arrow_center.png" alt="Arrow_center.png" />
                  <br />
                  <img src="/images/Arrow_head.png" alt="Arrow_head.png" />
                </div>
              </td>
              <td style={{ borderLeft: "solid 1px #cccccc" }}>
                <div className="tree-item">
                  <div className="tree-item-background">
                    <a href="/Crusader_%22The_Saint%22" title='Crusader "The Saint"'>
                      <Item_prem />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">Crusader &quot;The Saint&quot;</span>
                  </div>
                  <TechTreeImg vehicle="uk_crusader_mk_2_the_saint" type="ground" />
                </div>
                <div
                  style={{
                    position: "relative",
                    width: 120,
                    height: 30,
                    margin: "auto",
                  }}
                />
                <div className="tree-item">
                  <div className="tree-item-background" id="Cromwell V (RP-3)">
                    <a href="/Cromwell_V_(RP-3)" title="Cromwell V (RP-3)">
                      <Item_prem />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">Cromwell V (RP-3)</span>
                  </div>
                  <TechTreeImg vehicle="uk_a27m_cromwell_5_rp3" type="ground" />
                </div>
                <div
                  style={{
                    position: "relative",
                    width: 120,
                    height: 30,
                    margin: "auto",
                  }}
                />
              </td>
              <td>
                <div className="tree-item">
                  <div className="tree-item-background" id="A.C.I">
                    <a href="/A.C.I" title="A.C.I">
                      <Item_prem />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">A.C.I</span>
                  </div>
                  <TechTreeImg vehicle="uk_ac1_sentinel" type="ground" />
                </div>
                <div
                  style={{
                    position: "relative",
                    width: 120,
                    height: 30,
                    margin: "auto",
                  }}
                />
                <div className="tree-item">
                  <div className="tree-item-background" id="Matilda Hedgehog">
                    <a href="/Matilda_Hedgehog" title="Matilda Hedgehog">
                      <Item_prem />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">Matilda Hedgehog</span>
                  </div>
                  <TechTreeImg vehicle="uk_matilda_hedgehog" type="ground" />
                </div>
                <div
                  style={{
                    position: "relative",
                    width: 120,
                    height: 30,
                    margin: "auto",
                  }}
                />
                <div className="tree-item">
                  <div className="tree-item-background" id="Grant I">
                    <a href="/Grant_I" title="Grant I">
                      <Item_prem />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">Grant I</span>
                  </div>
                  <TechTreeImg vehicle="uk_mk1_grant" type="ground" />
                </div>
                <div
                  style={{
                    position: "relative",
                    width: 120,
                    height: 30,
                    margin: "auto",
                  }}
                />
                <div className="tree-item">
                  <div className="tree-item-background" id="AEC Mk II">
                    <a href="/AEC_Mk_II" title="AEC Mk II">
                      <Item_prem />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">AEC Mk II</span>
                  </div>
                  <TechTreeImg vehicle="uk_armored_car_aec_mk_2" type="ground" />
                </div>
                <div
                  style={{
                    position: "relative",
                    width: 120,
                    height: 30,
                    margin: "auto",
                  }}
                />
              </td>
            </tr>
            <tr>
              <th
                style={{
                  textAlign: "center",
                  whiteSpace: "nowrap",
                  verticalAlign: "middle",
                  borderRight: "solid 1px #eeeeee",
                  width: 32,
                }}
              >
                <div
                  style={{
                    transform: "rotate(-90deg)",
                    marginLeft: "-10em",
                    marginRight: "-10em",
                  }}
                >
                  III Rank
                </div>
              </th>
              <td>
                <div className="tree-item">
                  <div className="tree-item-background" id="Sherman Firefly">
                    <a href="/Sherman_Firefly" title="Sherman Firefly">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">Sherman Firefly</span>
                  </div>
                  <TechTreeImg vehicle="uk_sherman_vc_firefly" type="ground" />
                </div>
                <div className="tree-arrow">
                  <img src="/images/Arrow-small.png" alt="Arrow.png" />
                </div>
                <div className="tree-item">
                  <div className="tree-item-background" id="Challenger">
                    <a href="/Challenger" title="Challenger">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">Challenger</span>
                  </div>
                  <TechTreeImg vehicle="uk_a30_challenger" type="ground" />
                </div>
                <div className="tree-arrow">
                  <img src="/images/Arrow-small.png" alt="Arrow.png" />
                </div>
                <div className="tree-item">
                  <div className="tree-item-background" id="Comet I">
                    <a href="/Comet_I" title="Comet I">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">Comet I</span>
                  </div>
                  <TechTreeImg vehicle="uk_a_34_comet" type="ground" />
                </div>
                <div className="tree-arrow">
                  <img src="/images/Arrow-small.png" alt="Arrow.png" />
                </div>
              </td>
              <td>
                <div className="tree-item">
                  <div className="tree-item-background" id="Churchill III">
                    <a href="/Churchill_III" title="Churchill III">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">Churchill III</span>
                  </div>
                  <TechTreeImg vehicle="uk_a_22b_mk_3_churchill_1942" type="ground" />
                </div>
                <div className="tree-arrow">
                  <img src="/images/Arrow-small.png" alt="Arrow.png" />
                </div>
                <div className="tree-item">
                  <div className="tree-item-background" id="Churchill VII">
                    <a href="/Churchill_VII" title="Churchill VII">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">Churchill VII</span>
                  </div>
                  <TechTreeImg vehicle="uk_a_22f_mk_7_churchill_1944" type="ground" />
                </div>
                <div className="tree-arrow">
                  <img src="/images/Arrow_tail.png" alt="Arrow_tail.png" />
                  <br />
                  <img src="/images/Arrow_center.png" alt="Arrow_center.png" />
                  <br />
                  <img src="/images/Arrow_head.png" alt="Arrow_head.png" />
                </div>
              </td>
              <td>
                <div className="tree-item">
                  <div className="tree-item-background" id="Avenger">
                    <a href="/Avenger" title="Avenger">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">Avenger</span>
                  </div>
                  <TechTreeImg vehicle="uk_a30_sp_avenger" type="ground" />
                </div>
                <div className="tree-arrow">
                  <img src="/images/Arrow_tail.png" alt="Arrow_tail.png" />
                  <br />
                  <img src="/images/Arrow_center.png" alt="Arrow_center.png" />
                  <br />
                  <img src="/images/Arrow_center_small.png" alt="Arrow_center_small.png" />
                  <br />
                  <img src="/images/Arrow_center.png" alt="Arrow_center.png" />
                  <br />
                  <img src="/images/Arrow_head.png" alt="Arrow_head.png" />
                </div>
              </td>
              <td>
                <div className="tree-item">
                  <div className="tree-item-background" id="Crusader AA Mk I">
                    <a href="/Crusader_AA_Mk_I" title="Crusader AA Mk I">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">Crusader AA Mk I</span>
                  </div>
                  <TechTreeImg vehicle="uk_crusader_aa_mk_1" type="ground" />
                </div>
                <div className="tree-arrow">
                  <img src="/images/Arrow-small.png" alt="Arrow.png" />
                </div>
                <div className="tree-item">
                  <div className="tree-item-background" id="Crusader AA Mk II">
                    <a href="/Crusader_AA_Mk_II" title="Crusader AA Mk II">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">Crusader AA Mk II</span>
                  </div>
                  <TechTreeImg vehicle="uk_crusader_aa_mk_2" type="ground" />
                </div>
                <div className="tree-arrow">
                  <img src="/images/Arrow-small.png" alt="Arrow.png" />
                </div>
                <div className="tree-item">
                  <div className="tree-item-background" id="Ystervark">
                    <a href="/Ystervark" title="Ystervark">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">Ystervark</span>
                  </div>
                  <TechTreeImg vehicle="uk_ystervark_spaa" type="ground" />
                </div>
                <div className="tree-arrow">
                  <img src="/images/Arrow-small.png" alt="Arrow.png" />
                </div>
              </td>
              <td>
                <div className="tree-item">
                  <div className="tree-item-background" id="Concept 3">
                    <a href="/Concept_3" title="Concept 3">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">Concept 3</span>
                  </div>
                  <TechTreeImg vehicle="uk_concept3_ngac" type="ground" />
                </div>
                <div className="tree-arrow">
                  <img src="/images/Arrow_tail.png" alt="Arrow_tail.png" />
                  <br />
                  <img src="/images/Arrow_center.png" alt="Arrow_center.png" />
                  <br />
                  <img src="/images/Arrow_center_small.png" alt="Arrow_center_small.png" />
                  <br />
                  <img src="/images/Arrow_center.png" alt="Arrow_center.png" />
                  <br />
                  <img src="/images/Arrow_head.png" alt="Arrow_head.png" />
                </div>
              </td>
              <td style={{ borderLeft: "solid 1px #cccccc" }}>
                <div className="tree-item">
                  <div className="tree-item-background" id="Achilles (65 Rg.)">
                    <a href="/Achilles_(65_Rg.)" title="Achilles (65 Rg.)">
                      <Item_prem />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">Achilles (65 Rg.)</span>
                  </div>
                  <TechTreeImg vehicle="uk_17_pdr_m10_achilles_norfolk_yeomanry" type="ground" />
                </div>
                <div
                  style={{
                    position: "relative",
                    width: 120,
                    height: 30,
                    margin: "auto",
                  }}
                />
                <div className="tree-item">
                  <div className="tree-item-background">
                    <a href="/Sherman_IC_%22Trzyniec%22" title='Sherman IC "Trzyniec"'>
                      <Item_prem />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">Sherman IC &quot;Trzyniec&quot;</span>
                  </div>
                  <TechTreeImg vehicle="uk_sherman_ic_firefly" type="ground" />
                </div>
                <div
                  style={{
                    position: "relative",
                    width: 120,
                    height: 30,
                    margin: "auto",
                  }}
                />
                <div className="tree-item">
                  <div className="tree-item-background" id="A.C.IV">
                    <a href="/A.C.IV" title="A.C.IV">
                      <Item_prem />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">A.C.IV</span>
                  </div>
                  <TechTreeImg vehicle="uk_ac4_thunderbolt" type="ground" />
                </div>
                <div
                  style={{
                    position: "relative",
                    width: 120,
                    height: 30,
                    margin: "auto",
                  }}
                />
              </td>
              <td>
                <div className="tree-item">
                  <div className="tree-item-background" id="Excelsior">
                    <a href="/Excelsior" title="Excelsior">
                      <Item_prem />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">Excelsior</span>
                  </div>
                  <TechTreeImg vehicle="uk_a_33_excelsior" type="ground" />
                </div>
                <div
                  style={{
                    position: "relative",
                    width: 120,
                    height: 30,
                    margin: "auto",
                  }}
                />
                <div className="tree-item">
                  <div className="tree-item-background">
                    <a href="/Comet_I_%22Iron_Duke_IV%22" title='Comet I "Iron Duke IV"'>
                      <Item_prem />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">Comet I &quot;Iron Duke IV&quot;</span>
                  </div>
                  <TechTreeImg vehicle="uk_a_34_comet_iron_duke" type="ground" />
                </div>
                <div
                  style={{
                    position: "relative",
                    width: 120,
                    height: 30,
                    margin: "auto",
                  }}
                />
                <div className="tree-item">
                  <div className="tree-item-background" id="QF 3.7 Ram">
                    <a href="/QF_3.7_Ram" title="QF 3.7 Ram">
                      <Item_prem />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">QF 3.7 Ram</span>
                  </div>
                  <TechTreeImg vehicle="uk_ram_90mm_aa" type="ground" />
                </div>
                <div
                  style={{
                    position: "relative",
                    width: 120,
                    height: 30,
                    margin: "auto",
                  }}
                />
              </td>
            </tr>
            <tr>
              <th
                style={{
                  textAlign: "center",
                  whiteSpace: "nowrap",
                  verticalAlign: "middle",
                  borderRight: "solid 1px #eeeeee",
                  width: 32,
                }}
              >
                <div
                  style={{
                    transform: "rotate(-90deg)",
                    marginLeft: "-10em",
                    marginRight: "-10em",
                  }}
                >
                  IV Rank
                </div>
              </th>
              <td>
                <div className="tree-item">
                  <div className="tree-item-background" id="Centurion Mk 1">
                    <a href="/Centurion_Mk_1" title="Centurion Mk 1">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">Centurion Mk 1</span>
                  </div>
                  <TechTreeImg vehicle="uk_centurion_mk_1" type="ground" />
                </div>
                <div className="tree-arrow">
                  <img src="/images/Arrow-small.png" alt="Arrow.png" />
                </div>
                <div className="tree-item">
                  <div className="tree-item-background" id="Centurion Mk 3">
                    <a href="/Centurion_Mk_3" title="Centurion Mk 3">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">Centurion Mk 3</span>
                  </div>
                  <TechTreeImg vehicle="uk_centurion_mk_3" type="ground" />
                </div>
                <div className="tree-arrow">
                  <img src="/images/Arrow-small.png" alt="Arrow.png" />
                </div>
                <div className="tree-item">
                  <div className="tree-item-background" id="Caernarvon">
                    <a href="/Caernarvon" title="Caernarvon">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">Caernarvon</span>
                  </div>
                  <TechTreeImg vehicle="uk_fv221_caernarvon" type="ground" />
                </div>
                <div className="tree-arrow">
                  <img src="/images/Arrow-small.png" alt="Arrow.png" />
                </div>
              </td>
              <td>
                <div className="tree-item">
                  <div className="tree-item-background" id="Charioteer Mk VII">
                    <a href="/Charioteer_Mk_VII" title="Charioteer Mk VII">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">Charioteer Mk VII</span>
                  </div>
                  <TechTreeImg vehicle="uk_charioteer_mk_7" type="ground" />
                </div>
                <div className="tree-arrow">
                  <img src="/images/Arrow-small.png" alt="Arrow.png" />
                </div>
                <div className="tree-item">
                  <div className="tree-item-background" id="FV4202">
                    <a href="/FV4202" title="FV4202">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">FV4202</span>
                  </div>
                  <TechTreeImg vehicle="uk_fv4202" type="ground" />
                </div>
                <div className="tree-arrow">
                  <img src="/images/Arrow_tail.png" alt="Arrow_tail.png" />
                  <br />
                  <img src="/images/Arrow_center.png" alt="Arrow_center.png" />
                  <br />
                  <img src="/images/Arrow_head.png" alt="Arrow_head.png" />
                </div>
              </td>
              <td>
                <div className="tree-item">
                  <div className="tree-item-background" id="Tortoise">
                    <a href="/Tortoise" title="Tortoise">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">Tortoise</span>
                  </div>
                  <TechTreeImg vehicle="uk_a39_tortoise" type="ground" />
                </div>
                <div className="tree-arrow">
                  <img src="/images/Arrow-small.png" alt="Arrow.png" />
                </div>
                <div className="tree-item">
                  <div className="tree-item-background" id="FV4005">
                    <a href="/FV4005" title="FV4005">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">FV4005</span>
                  </div>
                  <TechTreeImg vehicle="uk_fv4005" type="ground" />
                </div>
                <div className="tree-arrow">
                  <img src="/images/Arrow-small.png" alt="Arrow.png" />
                </div>
                <div className="tree-item">
                  <div className="tree-item-background" id="Conway">
                    <a href="/Conway" title="Conway">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">Conway</span>
                  </div>
                  <TechTreeImg vehicle="uk_fv4004_conway" type="ground" />
                </div>
                <div className="tree-arrow">
                  <img src="/images/Arrow-small.png" alt="Arrow.png" />
                </div>
              </td>
              <td>
                <div className="tree-arrow">
                  <img src="/images/Arrow_tail.png" alt="Arrow_tail.png" />
                  <br />
                  <img src="/images/Arrow_center.png" alt="Arrow_center.png" />
                  <br />
                  <img src="/images/Arrow_center_small.png" alt="Arrow_center_small.png" />
                  <br />
                  <img src="/images/Arrow_center.png" alt="Arrow_center.png" />
                  <br />
                  <img src="/images/Arrow_center.png" alt="Arrow_center.png" />
                  <br />
                  <img src="/images/Arrow_head.png" alt="Arrow_head.png" />
                </div>
              </td>
              <td>
                <div className="tree-item">
                  <div className="tree-item-background" id="Ratel 90">
                    <a href="/Ratel_90" title="Ratel 90">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">Ratel 90</span>
                  </div>
                  <TechTreeImg vehicle="uk_ratel_90" type="ground" />
                </div>
                <div className="tree-arrow">
                  <img src="/images/Arrow-small.png" alt="Arrow.png" />
                </div>
                <div className="tree-item">
                  <div className="tree-item-background" id="G6">
                    <a href="/G6" title="G6">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">G6</span>
                  </div>
                  <TechTreeImg vehicle="uk_g6_spg" type="ground" />
                </div>
                <div className="tree-arrow">
                  <img src="/images/Arrow-small.png" alt="Arrow.png" />
                </div>
                <div className="tree-item">
                  <div className="tree-item-background" id="Eland 90 Mk.7">
                    <a href="/Eland_90_Mk.7" title="Eland 90 Mk.7">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">Eland 90 Mk.7</span>
                  </div>
                  <TechTreeImg vehicle="uk_eland_90_mk_7" type="ground" />
                </div>
                <div className="tree-arrow">
                  <img src="/images/Arrow-small.png" alt="Arrow.png" />
                </div>
              </td>
              <td style={{ borderLeft: "solid 1px #cccccc" }}>
                <div className="tree-item">
                  <div className="tree-item-background" id="Black Prince">
                    <a href="/Black_Prince" title="Black Prince">
                      <Item_prem />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">Black Prince</span>
                  </div>
                  <TechTreeImg vehicle="uk_a_43_black_prince" type="ground" />
                </div>
                <div
                  style={{
                    position: "relative",
                    width: 120,
                    height: 30,
                    margin: "auto",
                  }}
                />
                <div className="tree-item">
                  <div className="tree-item-background">
                    <a
                      href="/Strv_81_(RB_52)_(Great_Britain)"
                      title="Strv 81 (RB 52) (Great Britain)"
                    >
                      <Item_prem />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">▄Strv 81 (RB 52)</span>
                  </div>
                  <TechTreeImg vehicle="uk_centurion_mk_3_ss11" type="ground" />
                </div>
                <div
                  style={{
                    position: "relative",
                    width: 120,
                    height: 30,
                    margin: "auto",
                  }}
                />
                <div className="tree-item">
                  <div className="tree-item-background" id="Centurion Action X">
                    <a href="/Centurion_Action_X" title="Centurion Action X">
                      <Item_prem />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">Centurion Action X</span>
                  </div>
                  <TechTreeImg vehicle="uk_centurion_action_x" type="ground" />
                </div>
                <div
                  style={{
                    position: "relative",
                    width: 120,
                    height: 30,
                    margin: "auto",
                  }}
                />
              </td>
              <td>
                <div
                  style={{
                    position: "relative",
                    width: 120,
                    height: 30,
                    margin: "auto",
                  }}
                />
              </td>
            </tr>
            <tr>
              <th
                style={{
                  textAlign: "center",
                  whiteSpace: "nowrap",
                  verticalAlign: "middle",
                  borderRight: "solid 1px #eeeeee",
                  width: 32,
                }}
              >
                <div
                  style={{
                    transform: "rotate(-90deg)",
                    marginLeft: "-10em",
                    marginRight: "-10em",
                  }}
                >
                  V Rank
                </div>
              </th>
              <td>
                <div className="tree-item">
                  <div className="tree-item-background" id="Centurion Mk 10">
                    <a href="/Centurion_Mk_10" title="Centurion Mk 10">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">Centurion Mk 10</span>
                  </div>
                  <TechTreeImg vehicle="uk_centurion_mk_10" type="ground" />
                </div>
                <div className="tree-arrow">
                  <img src="/images/Arrow-small.png" alt="Arrow.png" />
                </div>
                <div className="tree-item">
                  <div className="tree-item-background" id="Conqueror">
                    <a href="/Conqueror" title="Conqueror">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">Conqueror</span>
                  </div>
                  <TechTreeImg vehicle="uk_conqueror_mk_2" type="ground" />
                </div>
                <div className="tree-arrow">
                  <img src="/images/Arrow-small.png" alt="Arrow.png" />
                </div>
              </td>
              <td>
                <div className="tree-item">
                  <div className="tree-item-background" id="Vickers Mk.1">
                    <a href="/Vickers_Mk.1" title="Vickers Mk.1">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">Vickers Mk.1</span>
                  </div>
                  <TechTreeImg vehicle="uk_vickers_mbt_mk_1" type="ground" />
                </div>
                <div className="tree-arrow">
                  <img src="/images/Arrow-small.png" alt="Arrow.png" />
                </div>
                <div className="tree-item">
                  <div className="tree-item-background" id="Vickers Mk.3">
                    <a href="/Vickers_Mk.3" title="Vickers Mk.3">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">Vickers Mk.3</span>
                  </div>
                  <TechTreeImg vehicle="uk_vickers_mbt_mk_3" type="ground" />
                </div>
                <div className="tree-arrow">
                  <img src="/images/Arrow-small.png" alt="Arrow.png" />
                </div>
              </td>
              <td>
                <div className="tree-item">
                  <div className="tree-item-background" id="Swingfire">
                    <a href="/Swingfire" title="Swingfire">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">Swingfire</span>
                  </div>
                  <TechTreeImg vehicle="uk_fv438_swingfire" type="ground" />
                </div>
                <div className="tree-arrow">
                  <img src="/images/Arrow-small.png" alt="Arrow.png" />
                </div>
                <div className="tree-item">
                  <div className="tree-item-background" id="Striker">
                    <a href="/Striker" title="Striker">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">Striker</span>
                  </div>
                  <TechTreeImg vehicle="uk_fv102_striker" type="ground" />
                </div>
                <div className="tree-arrow">
                  <img src="/images/Arrow-small.png" alt="Arrow.png" />
                </div>
              </td>
              <td>
                <div className="tree-item">
                  <div className="tree-item-background" id="Falcon">
                    <a href="/Falcon" title="Falcon">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">Falcon</span>
                  </div>
                  <TechTreeImg vehicle="uk_falcon" type="ground" />
                </div>
                <div className="tree-arrow">
                  <img src="/images/Arrow_tail.png" alt="Arrow_tail.png" />
                  <br />
                  <img src="/images/Arrow_center.png" alt="Arrow_center.png" />
                  <br />
                  <img src="/images/Arrow_head.png" alt="Arrow_head.png" />
                </div>
              </td>
              <td>
                <div className="tree-item">
                  <div className="tree-item-background" id="Ratel 20">
                    <a href="/Ratel_20" title="Ratel 20">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">Ratel 20</span>
                  </div>
                  <TechTreeImg vehicle="uk_ratel_20" type="ground" />
                </div>
                <div className="tree-arrow">
                  <img src="/images/Arrow_tail.png" alt="Arrow_tail.png" />
                  <br />
                  <img src="/images/Arrow_center.png" alt="Arrow_center.png" />
                  <br />
                  <img src="/images/Arrow_head.png" alt="Arrow_head.png" />
                </div>
              </td>
              <td style={{ borderLeft: "solid 1px #cccccc" }}>
                <div className="tree-item">
                  <div className="tree-item-background" id="Centurion Mk.5 AVRE">
                    <a href="/Centurion_Mk.5_AVRE" title="Centurion Mk.5 AVRE">
                      <Item_prem />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">Centurion Mk.5 AVRE</span>
                  </div>
                  <TechTreeImg vehicle="uk_centurion_mk_5_avre_era" type="ground" />
                </div>
                <div
                  style={{
                    position: "relative",
                    width: 120,
                    height: 30,
                    margin: "auto",
                  }}
                />
              </td>
              <td>
                <div className="tree-item">
                  <div className="tree-item-background" id="Centurion Mk.5/1">
                    <a href="/Centurion_Mk.5/1" title="Centurion Mk.5/1">
                      <Item_prem />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">Centurion Mk.5/1</span>
                  </div>
                  <TechTreeImg vehicle="uk_centurion_mk_5_raac" type="ground" />
                </div>
                <div
                  style={{
                    position: "relative",
                    width: 120,
                    height: 30,
                    margin: "auto",
                  }}
                />
              </td>
            </tr>
            <tr>
              <th
                style={{
                  textAlign: "center",
                  whiteSpace: "nowrap",
                  verticalAlign: "middle",
                  borderRight: "solid 1px #eeeeee",
                  width: 32,
                }}
              >
                <div
                  style={{
                    transform: "rotate(-90deg)",
                    marginLeft: "-10em",
                    marginRight: "-10em",
                  }}
                >
                  VI Rank
                </div>
              </th>
              <td>
                <div style={{ position: "relative" }}>
                  <div
                    className="tree-group-collapse"
                    style={{ display: "none", position: "absolute" }}
                  >
                    <div className="tree-item">
                      <div className="tree-item-background" id="Chieftain Mk 3">
                        <a href="/Chieftain_Mk_3" title="Chieftain Mk 3">
                          <Item_own />
                        </a>
                      </div>
                      <div className="tree-item-text">
                        <span className="tree-item-text-scroll">Chieftain Mk 3</span>
                      </div>
                      <TechTreeImg vehicle="uk_chieftain_mk_3" type="ground" />
                    </div>
                    <div className="tree-arrow">
                      <img src="/images/Arrow-small.png" alt="Arrow.png" />
                    </div>
                    <div className="tree-item">
                      <div className="tree-item-background" id="Chieftain Mk 5">
                        <a href="/Chieftain_Mk_5" title="Chieftain Mk 5">
                          <Item_own />
                        </a>
                      </div>
                      <div className="tree-item-text">
                        <span className="tree-item-text-scroll">Chieftain Mk 5</span>
                      </div>
                      <TechTreeImg vehicle="uk_chieftain_mk_5" type="ground" />
                    </div>
                  </div>
                  <div
                    className="tree-group"
                    onClick={(event) => {
                      openfolder(event);
                    }}
                  >
                    <div className="tree-group-text">
                      <span className="tree-item-text-scroll">Chieftain 3/5</span>
                    </div>
                    <div className="tree-group-img">
                      <img
                        src="https://encyclopedia.warthunder.com/slots/uk_chieftain_mk_3_5_group.png"
                        alt="uk_chieftain_mk_3_5_group.png"
                      />
                    </div>
                  </div>
                </div>
                <div className="tree-arrow">
                  <img src="/images/Arrow-small.png" alt="Arrow.png" />
                </div>
                <div className="tree-item">
                  <div className="tree-item-background" id="Chieftain Mk 10">
                    <a href="/Chieftain_Mk_10" title="Chieftain Mk 10">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">Chieftain Mk 10</span>
                  </div>
                  <TechTreeImg vehicle="uk_chieftain_mk_10" type="ground" />
                </div>
                <div className="tree-arrow">
                  <img src="/images/Arrow-small.png" alt="Arrow.png" />
                </div>
                <div className="tree-item">
                  <div className="tree-item-background" id="Challenger Mk.2">
                    <a href="/Challenger_Mk.2" title="Challenger Mk.2">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">Challenger Mk.2</span>
                  </div>
                  <TechTreeImg vehicle="uk_challenger_1" type="ground" />
                </div>
                <div className="tree-arrow">
                  <img src="/images/Arrow-small.png" alt="Arrow.png" />
                </div>
                <div className="tree-item">
                  <div className="tree-item-background" id="Challenger Mk.3">
                    <a href="/Challenger_Mk.3" title="Challenger Mk.3">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">Challenger Mk.3</span>
                  </div>
                  <TechTreeImg vehicle="uk_challenger_mk_3" type="ground" />
                </div>
                <div className="tree-arrow">
                  <img src="/images/Arrow-small.png" alt="Arrow.png" />
                </div>
              </td>
              <td>
                <div className="tree-item">
                  <div className="tree-item-background" id="VFM5">
                    <a href="/VFM5" title="VFM5">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">VFM5</span>
                  </div>
                  <TechTreeImg vehicle="uk_vfm_5" type="ground" />
                </div>
                <div className="tree-arrow">
                  <img src="/images/Arrow-small.png" alt="Arrow.png" />
                </div>
                <div className="tree-item">
                  <div className="tree-item-background" id="Vickers Mk.7">
                    <a href="/Vickers_Mk.7" title="Vickers Mk.7">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">Vickers Mk.7</span>
                  </div>
                  <TechTreeImg vehicle="uk_vickers_mk7" type="ground" />
                </div>
              </td>
              <td>
                <div className="tree-item">
                  <div className="tree-item-background" id="Warrior">
                    <a href="/Warrior" title="Warrior">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">Warrior</span>
                  </div>
                  <TechTreeImg vehicle="uk_fv510_isv" type="ground" />
                </div>
                <div className="tree-arrow">
                  <img src="/images/Arrow-small.png" alt="Arrow.png" />
                </div>
                <div className="tree-item">
                  <div className="tree-item-background" id="ZT3A2">
                    <a href="/ZT3A2" title="ZT3A2">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">ZT3A2</span>
                  </div>
                  <TechTreeImg vehicle="uk_ratel_zt3" type="ground" />
                </div>
              </td>
              <td>
                <div className="tree-item">
                  <div className="tree-item-background" id="Chieftain Marksman">
                    <a href="/Chieftain_Marksman" title="Chieftain Marksman">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">Chieftain Marksman</span>
                  </div>
                  <TechTreeImg vehicle="uk_chieftain_marksman" type="ground" />
                </div>
                <div className="tree-arrow">
                  <img src="/images/Arrow-small.png" alt="Arrow.png" />
                </div>
                <div className="tree-item">
                  <div className="tree-item-background" id="ZA-35">
                    <a href="/ZA-35" title="ZA-35">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">ZA-35</span>
                  </div>
                  <TechTreeImg vehicle="uk_rooikat_za_35" type="ground" />
                </div>
                <div className="tree-arrow">
                  <img src="/images/Arrow_tail.png" alt="Arrow_tail.png" />
                  <br />
                  <img src="/images/Arrow_center.png" alt="Arrow_center.png" />
                  <br />
                  <img src="/images/Arrow_center_small.png" alt="Arrow_center_small.png" />
                  <br />
                  <img src="/images/Arrow_center.png" alt="Arrow_center.png" />
                  <br />
                  <img src="/images/Arrow_head.png" alt="Arrow_head.png" />
                </div>
              </td>
              <td>
                <div className="tree-item">
                  <div className="tree-item-background" id="Rooikat Mk.1D">
                    <a href="/Rooikat_Mk.1D" title="Rooikat Mk.1D">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">Rooikat Mk.1D</span>
                  </div>
                  <TechTreeImg vehicle="uk_rooikat_76" type="ground" />
                </div>
                <div className="tree-arrow">
                  <img src="/images/Arrow-small.png" alt="Arrow.png" />
                </div>
                <div className="tree-item">
                  <div className="tree-item-background" id="Olifant Mk.1A">
                    <a href="/Olifant_Mk.1A" title="Olifant Mk.1A">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">Olifant Mk.1A</span>
                  </div>
                  <TechTreeImg vehicle="uk_olifant_mk_1a" type="ground" />
                </div>
                <div className="tree-arrow">
                  <img src="/images/Arrow-small.png" alt="Arrow.png" />
                </div>
                <div className="tree-item">
                  <div className="tree-item-background" id="Rooikat MTTD">
                    <a href="/Rooikat_MTTD" title="Rooikat MTTD">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">Rooikat MTTD</span>
                  </div>
                  <TechTreeImg vehicle="uk_rooikat_mttd" type="ground" />
                </div>
                <div className="tree-arrow">
                  <img src="/images/Arrow-small.png" alt="Arrow.png" />
                </div>
                <div className="tree-item">
                  <div className="tree-item-background" id="Olifant Mk.2">
                    <a href="/Olifant_Mk.2" title="Olifant Mk.2">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">Olifant Mk.2</span>
                  </div>
                  <TechTreeImg vehicle="uk_olifant_mk_2" type="ground" />
                </div>
                <div className="tree-arrow">
                  <img src="/images/Arrow-small.png" alt="Arrow.png" />
                </div>
              </td>
              <td style={{ borderLeft: "solid 1px #cccccc" }}>
                <div className="tree-item">
                  <div className="tree-item-background">
                    <a
                      href="/Sho%27t_Kal_Dalet_(Great_Britain)"
                      title="Sho't Kal Dalet (Great Britain)"
                    >
                      <Item_prem />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">▄Sho&apos;t Kal Dalet</span>
                  </div>
                  <TechTreeImg vehicle="uk_centurion_shot_kal_d" type="ground" />
                </div>
                <div
                  style={{
                    position: "relative",
                    width: 120,
                    height: 30,
                    margin: "auto",
                  }}
                />
                <div className="tree-item">
                  <div className="tree-item-background" id="Challenger DS">
                    <a href="/Challenger_DS" title="Challenger DS">
                      <Item_prem />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">Challenger DS</span>
                  </div>
                  <TechTreeImg vehicle="uk_challenger_1_mk_3_gulf" type="ground" />
                </div>
              </td>
              <td>
                <div className="tree-item">
                  <div className="tree-item-background" id="Rooikat 105">
                    <a href="/Rooikat_105" title="Rooikat 105">
                      <Item_prem />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">Rooikat 105</span>
                  </div>
                  <TechTreeImg vehicle="uk_rooikat_105_td" type="ground" />
                </div>
              </td>
            </tr>
            <tr>
              <th
                style={{
                  textAlign: "center",
                  whiteSpace: "nowrap",
                  verticalAlign: "middle",
                  borderRight: "solid 1px #eeeeee",
                  width: 32,
                }}
              >
                <div
                  style={{
                    transform: "rotate(-90deg)",
                    marginLeft: "-10em",
                    marginRight: "-10em",
                  }}
                >
                  VII Rank
                </div>
              </th>
              <td>
                <div className="tree-item">
                  <div className="tree-item-background" id="Challenger 2">
                    <a href="/Challenger_2" title="Challenger 2">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">Challenger 2</span>
                  </div>
                  <TechTreeImg vehicle="uk_challenger_ii" type="ground" />
                </div>
                <div className="tree-arrow">
                  <img src="/images/Arrow-small.png" alt="Arrow.png" />
                </div>
                <div className="tree-item">
                  <div className="tree-item-background" id="Challenger 2 (2F)">
                    <a href="/Challenger_2_(2F)" title="Challenger 2 (2F)">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">Challenger 2 (2F)</span>
                  </div>
                  <TechTreeImg vehicle="uk_challenger_2_dorchester" type="ground" />
                </div>
                <div className="tree-arrow">
                  <img src="/images/Arrow-small.png" alt="Arrow.png" />
                </div>
                <div className="tree-item">
                  <div className="tree-item-background" id="Challenger 2 TES">
                    <a href="/Challenger_2_TES" title="Challenger 2 TES">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">Challenger 2 TES</span>
                  </div>
                  <TechTreeImg vehicle="uk_challenger_2_tes" type="ground" />
                </div>
                <div className="tree-arrow">
                  <img src="/images/Arrow-small.png" alt="Arrow.png" />
                </div>
                <div className="tree-item">
                  <div className="tree-item-background" id="Black Night">
                    <a href="/Black_Night" title="Black Night">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">Black Night</span>
                  </div>
                  <TechTreeImg vehicle="uk_challenger_2_bn" type="ground" />
                </div>
                <div
                  style={{
                    position: "relative",
                    width: 120,
                    height: 30,
                    margin: "auto",
                  }}
                />
              </td>
              <td>
                <div
                  style={{
                    position: "relative",
                    width: 120,
                    height: 30,
                    margin: "auto",
                  }}
                />
              </td>
              <td>
                <div
                  style={{
                    position: "relative",
                    width: 120,
                    height: 30,
                    margin: "auto",
                  }}
                />
              </td>
              <td>
                <div className="tree-item">
                  <div className="tree-item-background" id="Stormer HVM">
                    <a href="/Stormer_HVM" title="Stormer HVM">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">Stormer HVM</span>
                  </div>
                  <TechTreeImg vehicle="uk_stormer_hvm" type="ground" />
                </div>
                <div className="tree-arrow">
                  <img src="/images/Arrow-small.png" alt="Arrow.png" />
                </div>
                <div className="tree-item">
                  <div className="tree-item-background" id="ADATS (M113)">
                    <a href="/ADATS_(M113)" title="ADATS (M113)">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">ADATS (M113)</span>
                  </div>
                  <TechTreeImg vehicle="uk_adats_m113a3" type="ground" />
                </div>
                <div
                  style={{
                    position: "relative",
                    width: 120,
                    height: 30,
                    margin: "auto",
                  }}
                />
              </td>
              <td>
                <div className="tree-item">
                  <div className="tree-item-background" id="TTD">
                    <a href="/TTD" title="TTD">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">TTD</span>
                  </div>
                  <TechTreeImg vehicle="uk_ttd" type="ground" />
                </div>
                <div
                  style={{
                    position: "relative",
                    width: 120,
                    height: 30,
                    margin: "auto",
                  }}
                />
              </td>
              <td style={{ borderLeft: "solid 1px #cccccc" }}>
                <div
                  style={{
                    position: "relative",
                    width: 120,
                    height: 30,
                    margin: "auto",
                  }}
                />
              </td>
              <td>
                <div
                  style={{
                    position: "relative",
                    width: 120,
                    height: 30,
                    margin: "auto",
                  }}
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <h2>
        <span className="mw-headline" id="Media">
          Media
        </span>
      </h2>
      <div className="video_gallery">
        <div className="video">
          <div className="video_embed">
            <div className="embedvideo autoResize" style={{}}>
              <div className="embedvideowrap" style={{ width: 640 }}>
                <iframe
                  src="//yewtu.be/embed/YRzCNF9IvDs?"
                  allowFullScreen={true}
                  width={640}
                  height={360}
                  frameBorder={0}
                />
              </div>
            </div>
          </div>
          <div className="video_desc">
            <b>African armor</b> - <i>War Thunder Official Channel</i>
          </div>
        </div>
        <div className="video">
          <div className="video_embed">
            <div className="embedvideo autoResize" style={{}}>
              <div className="embedvideowrap" style={{ width: 640 }}>
                <iframe
                  src="//yewtu.be/embed/kcOqzAKOc88?"
                  allowFullScreen={true}
                  width={640}
                  height={360}
                  frameBorder={0}
                />
              </div>
            </div>
          </div>
          <div className="video_desc">
            <b>Vehicle overview: British tanks</b> - <i>War Thunder Official Channel</i>
          </div>
        </div>
        <div className="video">
          <div className="video_embed">
            <div className="embedvideo autoResize" style={{}}>
              <div className="embedvideowrap" style={{ width: 640 }}>
                <iframe
                  src="//yewtu.be/embed/ItOZD40Vmw8?"
                  allowFullScreen={true}
                  width={640}
                  height={360}
                  frameBorder={0}
                />
              </div>
            </div>
          </div>
          <div className="video_desc">
            <b>British ground forces Tier I - Review and Analysis</b> - <i>Oxy</i>
          </div>
        </div>
        <div className="video">
          <div className="video_embed">
            <div className="embedvideo autoResize" style={{}}>
              <div className="embedvideowrap" style={{ width: 640 }}>
                <iframe
                  src="//yewtu.be/embed/e2sOg1kxgyY?"
                  allowFullScreen={true}
                  width={640}
                  height={360}
                  frameBorder={0}
                />
              </div>
            </div>
          </div>
          <div className="video_desc">
            <b>British ground forces Tier II - Review and Analysis</b> - <i>Oxy</i>
          </div>
        </div>
        <div className="video">
          <div className="video_embed">
            <div className="embedvideo autoResize" style={{}}>
              <div className="embedvideowrap" style={{ width: 640 }}>
                <iframe
                  src="//yewtu.be/embed/IVF-kTJHhz4?"
                  allowFullScreen={true}
                  width={640}
                  height={360}
                  frameBorder={0}
                />
              </div>
            </div>
          </div>
          <div className="video_desc">
            <b>British ground forces Tier III - Review and Analysis</b> - <i>Oxy</i>
          </div>
        </div>
        <div className="video">
          <div className="video_embed">
            <div className="embedvideo autoResize" style={{}}>
              <div className="embedvideowrap" style={{ width: 640 }}>
                <iframe
                  src="//yewtu.be/embed/UBBAoWVlOfo?"
                  allowFullScreen={true}
                  width={640}
                  height={360}
                  frameBorder={0}
                />
              </div>
            </div>
          </div>
          <div className="video_desc">
            <b>British ground forces Tier IV - Review and Analysis</b> - <i>Oxy</i>
          </div>
        </div>
        <div className="video">
          <div className="video_embed">
            <div className="embedvideo autoResize" style={{}}>
              <div className="embedvideowrap" style={{ width: 640 }}>
                <iframe
                  src="//yewtu.be/embed/YaYATCRAELY?"
                  allowFullScreen={true}
                  width={640}
                  height={360}
                  frameBorder={0}
                />
              </div>
            </div>
          </div>
          <div className="video_desc">
            <b>British ground forces Tier V - Review and Analysis</b> - <i>Oxy</i>
          </div>
        </div>
        <div className="video">
          <div className="video_embed">
            <div className="embedvideo autoResize" style={{}}>
              <div className="embedvideowrap" style={{ width: 640 }}>
                <iframe
                  src="//yewtu.be/embed/OB2-pfy1K9I?"
                  allowFullScreen={true}
                  width={640}
                  height={360}
                  frameBorder={0}
                />
              </div>
            </div>
          </div>
          <div className="video_desc">
            <b>British ground forces Tier VI - Review and Analysis (part 1)</b> - <i>Oxy</i>
          </div>
        </div>
        <div className="video">
          <div className="video_embed">
            <div className="embedvideo autoResize" style={{}}>
              <div className="embedvideowrap" style={{ width: 640 }}>
                <iframe
                  src="//yewtu.be/embed/gryGwqSmS8Y?"
                  allowFullScreen={true}
                  width={640}
                  height={360}
                  frameBorder={0}
                />
              </div>
            </div>
          </div>
          <div className="video_desc">
            <b>British ground forces Tier VI &amp; VII - Review and Analysis (part 2)</b> -{" "}
            <i>Oxy</i>
          </div>
        </div>
        <div className="video">
          <div className="video_embed">
            <div className="embedvideo autoResize" style={{}}>
              <div className="embedvideowrap" style={{ width: 640 }}>
                <iframe
                  src="//yewtu.be/embed/wm9tv2seEPI?"
                  allowFullScreen={true}
                  width={640}
                  height={360}
                  frameBorder={0}
                />
              </div>
            </div>
          </div>
          <div className="video_desc">
            <b>British ground forces addendum + Talisman guide</b> - <i>Oxy</i>
          </div>
        </div>
      </div>
    </div>
  );
}
