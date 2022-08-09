import { openfolder } from ".";
import { Item_own, Item_prem, Item_squad, TechTreeImg } from "../TechTree";
import fighter from "../img/def_fighter_radar.svg";

export function BritainAircraft() {
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
                <div style={{ position: "relative" }}>
                  <div
                    className="tree-group-collapse"
                    style={{ display: "none", position: "absolute" }}
                  >
                    <div className="tree-item">
                      <div className="tree-item-background" id="Fury Mk I">
                        <a href="/Fury_Mk_I" title="Fury Mk I">
                          <Item_own />
                        </a>
                      </div>
                      <div className="tree-item-text">
                        <span className="tree-item-text-scroll">Fury&nbsp;Mk I</span>
                      </div>
                      <TechTreeImg vehicle="fury_mk1" type="aircraft" />
                    </div>
                    <div className="tree-arrow">
                      <img src="/images/Arrow-small.png" alt="Arrow.png" />
                    </div>
                    <div className="tree-item">
                      <div className="tree-item-background" id="Fury Mk II">
                        <a href="/Fury_Mk_II" title="Fury Mk II">
                          <Item_own />
                        </a>
                      </div>
                      <div className="tree-item-text">
                        <span className="tree-item-text-scroll">Fury&nbsp;Mk II</span>
                      </div>
                      <TechTreeImg vehicle="fury_mk2" type="aircraft" />
                    </div>
                  </div>
                  <div
                    className="tree-group"
                    onClick={(event) => {
                      openfolder(event);
                    }}
                  >
                    <div className="tree-group-text">
                      <span className="tree-item-text-scroll">Fury</span>
                    </div>
                    <div className="tree-group-img">
                      <img
                        src="https://encyclopedia.warthunder.com/slots/fury_mk_group.png"
                        alt="fury_mk_group.png"
                      />
                    </div>
                  </div>
                </div>
              </td>
              <td>
                <div className="tree-item">
                  <div className="tree-item-background" id="Gladiator Mk IIF">
                    <a href="/Gladiator_Mk_IIF" title="Gladiator Mk IIF">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">Gladiator&nbsp;Mk&nbsp;IIF</span>
                  </div>
                  <TechTreeImg vehicle="gladiator_mk2_france" type="aircraft" />
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
                  <div className="tree-item-background" id="Gladiator Mk IIS">
                    <a href="/Gladiator_Mk_IIS" title="Gladiator Mk IIS">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">Gladiator&nbsp;Mk&nbsp;IIS</span>
                  </div>
                  <TechTreeImg vehicle="gladiator_mk2_silver" type="aircraft" />
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
                  <div className="tree-item-background" id="Gladiator Mk II">
                    <a href="/Gladiator_Mk_II" title="Gladiator Mk II">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">Gladiator&nbsp;Mk&nbsp;II</span>
                  </div>
                  <TechTreeImg vehicle="gladiator_mk2" type="aircraft" />
                </div>
              </td>
              <td>
                <div className="tree-item">
                  <div className="tree-item-background" id="Nimrod Mk I">
                    <a href="/Nimrod_Mk_I" title="Nimrod Mk I">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">Nimrod&nbsp;Mk I</span>
                  </div>
                  <TechTreeImg vehicle="nimrod_mk1" type="aircraft" />
                </div>
                <div className="tree-arrow">
                  <img src="/images/Arrow-small.png" alt="Arrow.png" />
                </div>
                <div className="tree-item">
                  <div className="tree-item-background" id="Nimrod Mk II">
                    <a href="/Nimrod_Mk_II" title="Nimrod Mk II">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">Nimrod&nbsp;Mk II</span>
                  </div>
                  <TechTreeImg vehicle="nimrod_mk2" type="aircraft" />
                </div>
                <div className="tree-arrow">
                  <img src="/images/Arrow-small.png" alt="Arrow.png" />
                </div>
                <div className="tree-item">
                  <div className="tree-item-background" id="Sea Gladiator Mk I">
                    <a href="/Sea_Gladiator_Mk_I" title="Sea Gladiator Mk I">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">Sea Gladiator&nbsp;Mk I</span>
                  </div>
                  <TechTreeImg vehicle="gladiator_mk2_navy" type="aircraft" />
                </div>
                <div className="tree-arrow">
                  <img src="/images/Arrow-small.png" alt="Arrow.png" />
                </div>
              </td>
              <td>
                <div className="tree-item">
                  <div className="tree-item-background" id="V-156-B1">
                    <a href="/V-156-B1" title="V-156-B1">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">V-156-B1</span>
                  </div>
                  <TechTreeImg vehicle="v_156_b1" type="aircraft" />
                </div>
                <div className="tree-arrow">
                  <img src="/images/Arrow-small.png" alt="Arrow.png" />
                </div>
                <div className="tree-item">
                  <div className="tree-item-background" id="Blenheim Mk IV">
                    <a href="/Blenheim_Mk_IV" title="Blenheim Mk IV">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">Blenheim&nbsp;Mk&nbsp;IV</span>
                  </div>
                  <TechTreeImg vehicle="blenheim_mkiv" type="aircraft" />
                </div>
                <div className="tree-arrow">
                  <img src="/images/Arrow-small.png" alt="Arrow.png" />
                </div>
                <div className="tree-item">
                  <div className="tree-item-background" id="Beaufort Mk VIII">
                    <a href="/Beaufort_Mk_VIII" title="Beaufort Mk VIII">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">Beaufort&nbsp;Mk&nbsp;VIII</span>
                  </div>
                  <TechTreeImg vehicle="beaufort_mkviii" type="aircraft" />
                </div>
                <div className="tree-arrow">
                  <img src="/images/Arrow-small.png" alt="Arrow.png" />
                </div>
              </td>
              <td>
                <div className="tree-item">
                  <div className="tree-item-background" id="Swordfish Mk I">
                    <a href="/Swordfish_Mk_I" title="Swordfish Mk I">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">Swordfish&nbsp;Mk&nbsp;I</span>
                  </div>
                  <TechTreeImg vehicle="swordfish_mk1" type="aircraft" />
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
                      <div className="tree-item-background" id="Hampden Mk I">
                        <a href="/Hampden_Mk_I" title="Hampden Mk I">
                          <Item_own />
                        </a>
                      </div>
                      <div className="tree-item-text">
                        <span className="tree-item-text-scroll">Hampden Mk I</span>
                      </div>
                      <TechTreeImg vehicle="hp52_hampden_mk1_late" type="aircraft" />
                    </div>
                    <div className="tree-arrow">
                      <img src="/images/Arrow-small.png" alt="Arrow.png" />
                    </div>
                    <div className="tree-item">
                      <div className="tree-item-background" id="Hampden TB Mk I">
                        <a href="/Hampden_TB_Mk_I" title="Hampden TB Mk I">
                          <Item_own />
                        </a>
                      </div>
                      <div className="tree-item-text">
                        <span className="tree-item-text-scroll">Hampden TB Mk I</span>
                      </div>
                      <TechTreeImg vehicle="hp52_hampden_tbmk1" type="aircraft" />
                    </div>
                  </div>
                  <div
                    className="tree-group"
                    onClick={(event) => {
                      openfolder(event);
                    }}
                  >
                    <div className="tree-group-text">
                      <span className="tree-item-text-scroll">Hampden Mk I</span>
                    </div>
                    <div className="tree-group-img">
                      <img
                        src="https://encyclopedia.warthunder.com/slots/hp52_hampden_group.png"
                        alt="hp52_hampden_group.png"
                      />
                    </div>
                  </div>
                </div>
                <div className="tree-arrow">
                  <img src="/images/Arrow-small.png" alt="Arrow.png" />
                </div>
                <div className="tree-item">
                  <div className="tree-item-background" id="Sunderland Mk IIIa">
                    <a href="/Sunderland_Mk_IIIa" title="Sunderland Mk IIIa">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">Sunderland Mk IIIa</span>
                  </div>
                  <TechTreeImg vehicle="sunderland_mk3a" type="aircraft" />
                </div>
                <div className="tree-arrow">
                  <img src="/images/Arrow-small.png" alt="Arrow.png" />
                </div>
              </td>
              <td style={{ borderLeft: "solid 1px #cccccc" }}>
                <div className="tree-item">
                  <div className="tree-item-background" id="Tuck's Gladiator Mk II">
                    <a href="/Tuck%27s_Gladiator_Mk_II" title="Tuck's Gladiator Mk II">
                      <Item_prem />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">Tuck&apos;s Gladiator Mk II</span>
                  </div>
                  <TechTreeImg vehicle="gladiator_mk2_tuck" type="aircraft" />
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
                  <div className="tree-item-background" id="Wirraway (Great Britain)">
                    <a href="/Wirraway_(Great_Britain)" title="Wirraway (Great Britain)">
                      <Item_prem />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">▄Wirraway</span>
                  </div>
                  <TechTreeImg vehicle="wirraway" type="aircraft" />
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
                  <div className="tree-item-background" id="Swordfish Mk II">
                    <a href="/Swordfish_Mk_II" title="Swordfish Mk II">
                      <Item_prem />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">Swordfish&nbsp;Mk&nbsp;II</span>
                  </div>
                  <TechTreeImg vehicle="swordfish_mk2" type="aircraft" />
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
                  <div className="tree-item-background" id="Havoc Mk I (Great Britain)">
                    <a href="/Havoc_Mk_I_(Great_Britain)" title="Havoc Mk I (Great Britain)">
                      <Item_prem />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">▄Havoc&nbsp;Mk I</span>
                  </div>
                  <TechTreeImg vehicle="intruder_mk_1" type="aircraft" />
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
                      href="/Catalina_Mk_IIIa_(Great_Britain)"
                      title="Catalina Mk IIIa (Great Britain)"
                    >
                      <Item_prem />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">▄Catalina Mk IIIa</span>
                  </div>
                  <TechTreeImg vehicle="pby-5a_raf" type="aircraft" />
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
                      <div className="tree-item-background" id="Hurricane Mk IIB/Trop">
                        <a href="/Hurricane_Mk_IIB/Trop" title="Hurricane Mk IIB/Trop">
                          <Item_own />
                        </a>
                      </div>
                      <div className="tree-item-text">
                        <span className="tree-item-text-scroll">
                          Hurricane&nbsp;Mk&nbsp;IIB/Trop
                        </span>
                      </div>
                      <TechTreeImg vehicle="hurricanemkii" type="aircraft" />
                    </div>
                    <div className="tree-arrow">
                      <img src="/images/Arrow-small.png" alt="Arrow.png" />
                    </div>
                    <div className="tree-item">
                      <div className="tree-item-background" id="Hurricane Mk IV">
                        <a href="/Hurricane_Mk_IV" title="Hurricane Mk IV">
                          <Item_own />
                        </a>
                      </div>
                      <div className="tree-item-text">
                        <span className="tree-item-text-scroll">Hurricane&nbsp;Mk&nbsp;IV</span>
                      </div>
                      <TechTreeImg vehicle="hurricane_mk4" type="aircraft" />
                    </div>
                  </div>
                  <div
                    className="tree-group"
                    onClick={(event) => {
                      openfolder(event);
                    }}
                  >
                    <div className="tree-group-text">
                      <span className="tree-item-text-scroll">Hurricane</span>
                    </div>
                    <div className="tree-group-img">
                      <img
                        src="https://encyclopedia.warthunder.com/slots/hurricane_group.png"
                        alt="hurricane_group.png"
                      />
                    </div>
                  </div>
                </div>
                <div className="tree-arrow">
                  <img src="/images/Arrow-small.png" alt="Arrow.png" />
                </div>
                <div className="tree-item">
                  <div className="tree-item-background" id="Hurricane Mk I/L">
                    <a href="/Hurricane_Mk_I/L" title="Hurricane Mk I/L">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">Hurricane&nbsp;Mk&nbsp;I/L</span>
                  </div>
                  <TechTreeImg vehicle="hurricane_mk1" type="aircraft" />
                </div>
                <div className="tree-arrow">
                  <img src="/images/Arrow-small.png" alt="Arrow.png" />
                </div>
                <div className="tree-item">
                  <div className="tree-item-background" id="Typhoon Mk Ia">
                    <a href="/Typhoon_Mk_Ia" title="Typhoon Mk Ia">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">Typhoon&nbsp;Mk Ia</span>
                  </div>
                  <TechTreeImg vehicle="typhoon_mk1a" type="aircraft" />
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
                  <div className="tree-item-background" id="Spitfire Mk Ia">
                    <a href="/Spitfire_Mk_Ia" title="Spitfire Mk Ia">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">Spitfire&nbsp;Mk&nbsp;Ia</span>
                  </div>
                  <TechTreeImg vehicle="spitfire_mk1" type="aircraft" />
                </div>
                <div className="tree-arrow">
                  <img src="/images/Arrow-small.png" alt="Arrow.png" />
                </div>
                <div className="tree-item">
                  <div className="tree-item-background" id="Spitfire Mk IIa">
                    <a href="/Spitfire_Mk_IIa" title="Spitfire Mk IIa">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">Spitfire&nbsp;Mk&nbsp;IIa</span>
                  </div>
                  <TechTreeImg vehicle="spitfiremkiia" type="aircraft" />
                </div>
                <div className="tree-arrow">
                  <img src="/images/Arrow-small.png" alt="Arrow.png" />
                </div>
                <div className="tree-item">
                  <div className="tree-item-background" id="Spitfire Mk IIb">
                    <a href="/Spitfire_Mk_IIb" title="Spitfire Mk IIb">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">Spitfire&nbsp;Mk&nbsp;IIb</span>
                  </div>
                  <TechTreeImg vehicle="spitfiremkii" type="aircraft" />
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
                  <div className="tree-item-background" id="Sea Hurricane Mk IB">
                    <a href="/Sea_Hurricane_Mk_IB" title="Sea Hurricane Mk IB">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">Sea Hurricane Mk IB</span>
                  </div>
                  <TechTreeImg vehicle="hurricane_mk1b" type="aircraft" />
                </div>
                <div className="tree-arrow">
                  <img src="/images/Arrow-small.png" alt="Arrow.png" />
                </div>
                <div className="tree-item">
                  <div className="tree-item-background" id="Sea Hurricane Mk IC">
                    <a href="/Sea_Hurricane_Mk_IC" title="Sea Hurricane Mk IC">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">Sea Hurricane Mk IC</span>
                  </div>
                  <TechTreeImg vehicle="hurricane_mk1c" type="aircraft" />
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
                  <div className="tree-item-background" id="Beaufighter Mk VIc">
                    <a href="/Beaufighter_Mk_VIc" title="Beaufighter Mk VIc">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">Beaufighter&nbsp;Mk&nbsp;VIc</span>
                  </div>
                  <TechTreeImg vehicle="beaufighter_mk6c" type="aircraft" />
                </div>
                <div className="tree-arrow">
                  <img src="/images/Arrow-small.png" alt="Arrow.png" />
                </div>
                <div className="tree-item">
                  <div className="tree-item-background" id="Beaufighter Mk X">
                    <a href="/Beaufighter_Mk_X" title="Beaufighter Mk X">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">Beaufighter&nbsp;Mk&nbsp;X</span>
                  </div>
                  <TechTreeImg vehicle="beaufighter_mkx" type="aircraft" />
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
                  <div className="tree-item-background" id="Sunderland Mk V">
                    <a href="/Sunderland_Mk_V" title="Sunderland Mk V">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">Sunderland Mk V</span>
                  </div>
                  <TechTreeImg vehicle="sunderland_mk5" type="aircraft" />
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
                      <div className="tree-item-background" id="Wellington Mk Ic">
                        <a href="/Wellington_Mk_Ic" title="Wellington Mk Ic">
                          <Item_own />
                        </a>
                      </div>
                      <div className="tree-item-text">
                        <span className="tree-item-text-scroll">Wellington&nbsp;Mk Ic</span>
                      </div>
                      <TechTreeImg vehicle="wellington_mk1c" type="aircraft" />
                    </div>
                    <div className="tree-arrow">
                      <img src="/images/Arrow-small.png" alt="Arrow.png" />
                    </div>
                    <div className="tree-item">
                      <div className="tree-item-background" id="Wellington Mk Ic/L">
                        <a href="/Wellington_Mk_Ic/L" title="Wellington Mk Ic/L">
                          <Item_own />
                        </a>
                      </div>
                      <div className="tree-item-text">
                        <span className="tree-item-text-scroll">Wellington&nbsp;Mk Ic/L</span>
                      </div>
                      <TechTreeImg vehicle="wellington_mk1c_late" type="aircraft" />
                    </div>
                    <div className="tree-arrow">
                      <img src="/images/Arrow-small.png" alt="Arrow.png" />
                    </div>
                    <div className="tree-item">
                      <div className="tree-item-background" id="Wellington Mk III">
                        <a href="/Wellington_Mk_III" title="Wellington Mk III">
                          <Item_own />
                        </a>
                      </div>
                      <div className="tree-item-text">
                        <span className="tree-item-text-scroll">Wellington&nbsp;Mk III</span>
                      </div>
                      <TechTreeImg vehicle="wellington_mk3" type="aircraft" />
                    </div>
                    <div className="tree-arrow">
                      <img src="/images/Arrow-small.png" alt="Arrow.png" />
                    </div>
                    <div className="tree-item">
                      <div className="tree-item-background" id="Wellington Mk X">
                        <a href="/Wellington_Mk_X" title="Wellington Mk X">
                          <Item_own />
                        </a>
                      </div>
                      <div className="tree-item-text">
                        <span className="tree-item-text-scroll">Wellington&nbsp;Mk X</span>
                      </div>
                      <TechTreeImg vehicle="wellington_mk10" type="aircraft" />
                    </div>
                  </div>
                  <div
                    className="tree-group"
                    onClick={(event) => {
                      openfolder(event);
                    }}
                  >
                    <div className="tree-group-text">
                      <span className="tree-item-text-scroll">Wellington</span>
                    </div>
                    <div className="tree-group-img">
                      <img
                        src="https://encyclopedia.warthunder.com/slots/wellington_group.png"
                        alt="wellington_group.png"
                      />
                    </div>
                  </div>
                </div>
                <div className="tree-arrow">
                  <img src="/images/Arrow-small.png" alt="Arrow.png" />
                </div>
                <div className="tree-item">
                  <div className="tree-item-background" id="Halifax B Mk IIIa">
                    <a href="/Halifax_B_Mk_IIIa" title="Halifax B Mk IIIa">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">Halifax B Mk IIIa</span>
                  </div>
                  <TechTreeImg vehicle="halifax_mk3" type="aircraft" />
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
                  <img src="/images/Arrow_center_small.png" alt="Arrow_center_small.png" />
                  <br />
                  <img src="/images/Arrow_center.png" alt="Arrow_center.png" />
                  <br />
                  <img src="/images/Arrow_head.png" alt="Arrow_head.png" />
                </div>
              </td>
              <td style={{ borderLeft: "solid 1px #cccccc" }}>
                <div className="tree-item">
                  <div className="tree-item-background" id="Hudson Mk V (Great Britain)">
                    <a href="/Hudson_Mk_V_(Great_Britain)" title="Hudson Mk V (Great Britain)">
                      <Item_prem />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">▄Hudson Mk V</span>
                  </div>
                  <TechTreeImg vehicle="hudson_mk_v" type="aircraft" />
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
                  <div className="tree-item-background" id="Avenger Mk II (Great Britain)">
                    <a href="/Avenger_Mk_II_(Great_Britain)" title="Avenger Mk II (Great Britain)">
                      <Item_prem />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">▄Avenger Mk II</span>
                  </div>
                  <TechTreeImg vehicle="avenger_mk1" type="aircraft" />
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
                  <div className="tree-item-background" id="Spitfire Mk.IIa Venture I">
                    <a href="/Spitfire_Mk.IIa_Venture_I" title="Spitfire Mk.IIa Venture I">
                      <Item_prem />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">Spitfire Mk.IIa Venture I</span>
                  </div>
                  <TechTreeImg vehicle="spitfiremkiia_ep" type="aircraft" />
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
                      href="/Corsair_F_Mk_II_(Great_Britain)"
                      title="Corsair F Mk II (Great Britain)"
                    >
                      <Item_prem />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">▄Corsair F Mk II</span>
                  </div>
                  <TechTreeImg vehicle="corsair_fmk2" type="aircraft" />
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
                  <div className="tree-item-background" id="D.520 (Great Britain)">
                    <a href="/D.520_(Great_Britain)" title="D.520 (Great Britain)">
                      <Item_prem />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">▄D.520</span>
                  </div>
                  <TechTreeImg vehicle="d_520" type="aircraft" />
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
                  <div className="tree-item-background" id="D.521 (Great Britain)">
                    <a href="/D.521_(Great_Britain)" title="D.521 (Great Britain)">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">▄D.521</span>
                  </div>
                  <TechTreeImg vehicle="d_521" type="aircraft" />
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
                  <div className="tree-item-background" id="Firecrest">
                    <a href="/Firecrest" title="Firecrest">
                      <Item_squad />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">Firecrest</span>
                  </div>
                  <TechTreeImg vehicle="b_48_firecrest" type="aircraft" />
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
                  <div className="tree-item-background" id="Boston Mk I (Great Britain)">
                    <a href="/Boston_Mk_I_(Great_Britain)" title="Boston Mk I (Great Britain)">
                      <Item_prem />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">▄Boston&nbsp;Mk I</span>
                  </div>
                  <TechTreeImg vehicle="boston_mk_1" type="aircraft" />
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
                  <div className="tree-item-background" id="DB-7 (Great Britain)">
                    <a href="/DB-7_(Great_Britain)" title="DB-7 (Great Britain)">
                      <Item_prem />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">▄DB-7</span>
                  </div>
                  <div className="tree-item-img">
                    <img src="https://encyclopedia.warthunder.com/slots/db_7.png" alt="db_7.png" />
                  </div>
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
                  <div className="tree-item-background" id="Hurricane Mk.I/L FAA M">
                    <a href="/Hurricane_Mk.I/L_FAA_M" title="Hurricane Mk.I/L FAA M">
                      <Item_prem />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">Hurricane Mk.I/L FAA M</span>
                  </div>
                  <TechTreeImg vehicle="hurricane_mk1_late_ep" type="aircraft" />
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
                  <div className="tree-item-background" id="Martlet Mk IV (Great Britain)">
                    <a href="/Martlet_Mk_IV_(Great_Britain)" title="Martlet Mk IV (Great Britain)">
                      <Item_prem />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">▄Martlet Mk IV</span>
                  </div>
                  <TechTreeImg vehicle="f4f-4_martlet_mk4" type="aircraft" />
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
                  <div className="tree-item-background" id="Beaufighter Mk I (40-mm)">
                    <a href="/Beaufighter_Mk_I_(40-mm)" title="Beaufighter Mk I (40-mm)">
                      <Item_prem />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">Beaufighter Mk I (40-mm)</span>
                  </div>
                  <TechTreeImg vehicle="beaufighter_mk1_40mm" type="aircraft" />
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
                      href="/Boomerang_Mk_I_(Great_Britain)"
                      title="Boomerang Mk I (Great Britain)"
                    >
                      <Item_prem />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">▄Boomerang&nbsp;Mk&nbsp;I</span>
                  </div>
                  <TechTreeImg vehicle="boomerang_mki" type="aircraft" />
                </div>
                <div className="tree-arrow">
                  <img src="/images/Arrow-small.png" alt="Arrow.png" />
                </div>
                <div className="tree-item">
                  <div className="tree-item-background">
                    <a
                      href="/Boomerang_Mk_II_(Great_Britain)"
                      title="Boomerang Mk II (Great Britain)"
                    >
                      <Item_prem />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">▄Boomerang&nbsp;Mk&nbsp;II</span>
                  </div>
                  <TechTreeImg vehicle="boomerang_mkii" type="aircraft" />
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
                  <div className="tree-item-background" id="Typhoon Mk Ib/L">
                    <a href="/Typhoon_Mk_Ib/L" title="Typhoon Mk Ib/L">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">Typhoon&nbsp;Mk Ib/L</span>
                  </div>
                  <TechTreeImg vehicle="typhoon_mk1b_late" type="aircraft" />
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
                <div style={{ position: "relative" }}>
                  <div
                    className="tree-group-collapse"
                    style={{ display: "none", position: "absolute" }}
                  >
                    <div className="tree-item">
                      <div className="tree-item-background" id="Spitfire Mk Vb/trop">
                        <a href="/Spitfire_Mk_Vb/trop" title="Spitfire Mk Vb/trop">
                          <Item_own />
                        </a>
                      </div>
                      <div className="tree-item-text">
                        <span className="tree-item-text-scroll">Spitfire&nbsp;Mk&nbsp;Vb/trop</span>
                      </div>
                      <TechTreeImg vehicle="spitfire_mk5b" type="aircraft" />
                    </div>
                    <div className="tree-arrow">
                      <img src="/images/Arrow-small.png" alt="Arrow.png" />
                    </div>
                    <div className="tree-item">
                      <div className="tree-item-background" id="Spitfire Mk Vb">
                        <a href="/Spitfire_Mk_Vb" title="Spitfire Mk Vb">
                          <Item_own />
                        </a>
                      </div>
                      <div className="tree-item-text">
                        <span className="tree-item-text-scroll">Spitfire&nbsp;Mk&nbsp;Vb</span>
                      </div>
                      <TechTreeImg vehicle="spitfire_mk5b_notrop" type="aircraft" />
                    </div>
                    <div className="tree-arrow">
                      <img src="/images/Arrow-small.png" alt="Arrow.png" />
                    </div>
                    <div className="tree-item">
                      <div className="tree-item-background" id="Spitfire Mk Vc/trop">
                        <a href="/Spitfire_Mk_Vc/trop" title="Spitfire Mk Vc/trop">
                          <Item_own />
                        </a>
                      </div>
                      <div className="tree-item-text">
                        <span className="tree-item-text-scroll">Spitfire&nbsp;Mk&nbsp;Vc/trop</span>
                      </div>
                      <TechTreeImg vehicle="spitfire_mk5c" type="aircraft" />
                    </div>
                    <div className="tree-arrow">
                      <img src="/images/Arrow-small.png" alt="Arrow.png" />
                    </div>
                    <div className="tree-item">
                      <div className="tree-item-background" id="Spitfire Mk Vc">
                        <a href="/Spitfire_Mk_Vc" title="Spitfire Mk Vc">
                          <Item_own />
                        </a>
                      </div>
                      <div className="tree-item-text">
                        <span className="tree-item-text-scroll">Spitfire&nbsp;Mk&nbsp;Vc</span>
                      </div>
                      <TechTreeImg vehicle="spitfire_mk5c_notrop" type="aircraft" />
                    </div>
                  </div>
                  <div
                    className="tree-group"
                    onClick={(event) => {
                      openfolder(event);
                    }}
                  >
                    <div className="tree-group-text">
                      <span className="tree-item-text-scroll">Spitfire Mk V</span>
                    </div>
                    <div className="tree-group-img">
                      <img
                        src="https://encyclopedia.warthunder.com/slots/spitfire_mk5_group.png"
                        alt="spitfire_mk5_group.png"
                      />
                    </div>
                  </div>
                </div>
                <div className="tree-arrow">
                  <img src="/images/Arrow-small.png" alt="Arrow.png" />
                </div>
                <div className="tree-item">
                  <div className="tree-item-background" id="Spitfire F Mk IX">
                    <a href="/Spitfire_F_Mk_IX" title="Spitfire F Mk IX">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">Spitfire F Mk&nbsp;IX</span>
                  </div>
                  <TechTreeImg vehicle="spitfire_ix_early" type="aircraft" />
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
                <div style={{ position: "relative" }}>
                  <div
                    className="tree-group-collapse"
                    style={{ display: "none", position: "absolute" }}
                  >
                    <div className="tree-item">
                      <div className="tree-item-background" id="Firefly F Mk I">
                        <a href="/Firefly_F_Mk_I" title="Firefly F Mk I">
                          <Item_own />
                        </a>
                      </div>
                      <div className="tree-item-text">
                        <span className="tree-item-text-scroll">Firefly F Mk I</span>
                      </div>
                      <TechTreeImg vehicle="firefly_mk1" type="aircraft" />
                    </div>
                    <div className="tree-arrow">
                      <img src="/images/Arrow-small.png" alt="Arrow.png" />
                    </div>
                    <div className="tree-item">
                      <div className="tree-item-background" id="Firefly FR Mk V">
                        <a href="/Firefly_FR_Mk_V" title="Firefly FR Mk V">
                          <Item_own />
                        </a>
                      </div>
                      <div className="tree-item-text">
                        <span className="tree-item-text-scroll">Firefly FR Mk V</span>
                      </div>
                      <TechTreeImg vehicle="firefly_mk5" type="aircraft" />
                    </div>
                  </div>
                  <div
                    className="tree-group"
                    onClick={(event) => {
                      openfolder(event);
                    }}
                  >
                    <div className="tree-group-text">
                      <span className="tree-item-text-scroll">Firefly</span>
                    </div>
                    <div className="tree-group-img">
                      <img
                        src="https://encyclopedia.warthunder.com/slots/firefly_group.png"
                        alt="firefly_group.png"
                      />
                    </div>
                  </div>
                </div>
                <div className="tree-arrow">
                  <img src="/images/Arrow-small.png" alt="Arrow.png" />
                </div>
                <div className="tree-item">
                  <div className="tree-item-background" id="Firebrand TF Mk IV">
                    <a href="/Firebrand_TF_Mk_IV" title="Firebrand TF Mk IV">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">Firebrand TF Mk IV</span>
                  </div>
                  <TechTreeImg vehicle="firebrand_tf4" type="aircraft" />
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
                <div style={{ position: "relative" }}>
                  <div
                    className="tree-group-collapse"
                    style={{ display: "none", position: "absolute" }}
                  >
                    <div className="tree-item">
                      <div className="tree-item-background" id="Mosquito FB Mk VI">
                        <a href="/Mosquito_FB_Mk_VI" title="Mosquito FB Mk VI">
                          <Item_own />
                        </a>
                      </div>
                      <div className="tree-item-text">
                        <span className="tree-item-text-scroll">
                          Mosquito&nbsp;FB&nbsp;Mk&nbsp;VI
                        </span>
                      </div>
                      <TechTreeImg vehicle="mosquito_fb_mk6" type="aircraft" />
                    </div>
                    <div className="tree-arrow">
                      <img src="/images/Arrow-small.png" alt="Arrow.png" />
                    </div>
                    <div className="tree-item">
                      <div className="tree-item-background" id="Mosquito FB Mk XVIII">
                        <a href="/Mosquito_FB_Mk_XVIII" title="Mosquito FB Mk XVIII">
                          <Item_own />
                        </a>
                      </div>
                      <div className="tree-item-text">
                        <span className="tree-item-text-scroll">
                          Mosquito&nbsp;FB&nbsp;Mk&nbsp;XVIII
                        </span>
                      </div>
                      <TechTreeImg vehicle="mosquito_fb_mk18" type="aircraft" />
                    </div>
                  </div>
                  <div
                    className="tree-group"
                    onClick={(event) => {
                      openfolder(event);
                    }}
                  >
                    <div className="tree-group-text">
                      <span className="tree-item-text-scroll">Mosquito</span>
                    </div>
                    <div className="tree-group-img">
                      <img
                        src="https://encyclopedia.warthunder.com/slots/mosquito_group.png"
                        alt="mosquito_group.png"
                      />
                    </div>
                  </div>
                </div>
                <div className="tree-arrow">
                  <img src="/images/Arrow-small.png" alt="Arrow.png" />
                </div>
                <div className="tree-item">
                  <div className="tree-item-background" id="Beaufighter Mk 21">
                    <a href="/Beaufighter_Mk_21" title="Beaufighter Mk 21">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">Beaufighter&nbsp;Mk&nbsp;21</span>
                  </div>
                  <TechTreeImg vehicle="beaufighter_mk21" type="aircraft" />
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
                  <div className="tree-item-background" id="Stirling B Mk I">
                    <a href="/Stirling_B_Mk_I" title="Stirling B Mk I">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">Stirling B Mk&nbsp;I</span>
                  </div>
                  <TechTreeImg vehicle="stirling_mk1" type="aircraft" />
                </div>
                <div className="tree-arrow">
                  <img src="/images/Arrow-small.png" alt="Arrow.png" />
                </div>
                <div className="tree-item">
                  <div className="tree-item-background" id="Stirling B Mk III">
                    <a href="/Stirling_B_Mk_III" title="Stirling B Mk III">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">Stirling B&nbsp;Mk&nbsp;III</span>
                  </div>
                  <TechTreeImg vehicle="stirling_mk3" type="aircraft" />
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
                  <div className="tree-item-background" id="Hellcat Mk II (Great Britain)">
                    <a href="/Hellcat_Mk_II_(Great_Britain)" title="Hellcat Mk II (Great Britain)">
                      <Item_prem />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">▄Hellcat&nbsp;Mk II</span>
                  </div>
                  <TechTreeImg vehicle="hellcat_fmk1" type="aircraft" />
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
                      href="/Thunderbolt_Mk.1_(Great_Britain)"
                      title="Thunderbolt Mk.1 (Great Britain)"
                    >
                      <Item_prem />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">▄Thunderbolt Mk.1</span>
                  </div>
                  <TechTreeImg vehicle="thunderbolt_mk1" type="aircraft" />
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
                  <div className="tree-item-background" id="Mustang Mk IA (Great Britain)">
                    <a href="/Mustang_Mk_IA_(Great_Britain)" title="Mustang Mk IA (Great Britain)">
                      <Item_prem />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">▄Mustang&nbsp;Mk&nbsp;IA</span>
                  </div>
                  <TechTreeImg vehicle="p-51b" type="aircraft" />
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
                  <div className="tree-item-background" id="Typhoon Mk Ib">
                    <a href="/Typhoon_Mk_Ib" title="Typhoon Mk Ib">
                      <Item_prem />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">Typhoon&nbsp;Mk Ib</span>
                  </div>
                  <TechTreeImg vehicle="typhoon_mk1b" type="aircraft" />
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
                  <div className="tree-item-background" id="Whirlwind P.9">
                    <a href="/Whirlwind_P.9" title="Whirlwind P.9">
                      <Item_prem />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">Whirlwind P.9</span>
                  </div>
                  <TechTreeImg vehicle="whirlwind_p9" type="aircraft" />
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
                  <div className="tree-item-background" id="Spitfire F Mk IXc">
                    <a href="/Spitfire_F_Mk_IXc" title="Spitfire F Mk IXc">
                      <Item_prem />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">Spitfire F&nbsp;Mk&nbsp;IXc</span>
                  </div>
                  <TechTreeImg vehicle="spitfire_mk9c_4cannons" type="aircraft" />
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
                <div style={{ position: "relative" }}>
                  <div
                    className="tree-group-collapse"
                    style={{ display: "none", position: "absolute" }}
                  >
                    <div className="tree-item">
                      <div className="tree-item-background" id="Tempest Mk V">
                        <a href="/Tempest_Mk_V" title="Tempest Mk V">
                          <Item_own />
                        </a>
                      </div>
                      <div className="tree-item-text">
                        <span className="tree-item-text-scroll">Tempest&nbsp;Mk&nbsp;V</span>
                      </div>
                      <TechTreeImg vehicle="tempest_mkv" type="aircraft" />
                    </div>
                    <div className="tree-arrow">
                      <img src="/images/Arrow-small.png" alt="Arrow.png" />
                    </div>
                    <div className="tree-item">
                      <div className="tree-item-background" id="Tempest Mk V (Vickers P)">
                        <a href="/Tempest_Mk_V_(Vickers_P)" title="Tempest Mk V (Vickers P)">
                          <Item_own />
                        </a>
                      </div>
                      <div className="tree-item-text">
                        <span className="tree-item-text-scroll">Tempest Mk V (Vickers P)</span>
                      </div>
                      <TechTreeImg vehicle="tempest_mkv_vikkers" type="aircraft" />
                    </div>
                  </div>
                  <div
                    className="tree-group"
                    onClick={(event) => {
                      openfolder(event);
                    }}
                  >
                    <div className="tree-group-text">
                      <span className="tree-item-text-scroll">Tempest Mk V</span>
                    </div>
                    <div className="tree-group-img">
                      <img
                        src="https://encyclopedia.warthunder.com/slots/tempest_mkv_group.png"
                        alt="tempest_mkv_group.png"
                      />
                    </div>
                  </div>
                </div>
                <div className="tree-arrow">
                  <img src="/images/Arrow-small.png" alt="Arrow.png" />
                </div>
                <div className="tree-item">
                  <div className="tree-item-background" id="Tempest Mk II">
                    <a href="/Tempest_Mk_II" title="Tempest Mk II">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">Tempest&nbsp;Mk&nbsp;II</span>
                  </div>
                  <TechTreeImg vehicle="tempest_mk2" type="aircraft" />
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
                  <div className="tree-item-background" id="Spitfire F Mk XVI">
                    <a href="/Spitfire_F_Mk_XVI" title="Spitfire F Mk XVI">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">Spitfire&nbsp;F Mk&nbsp;XVI</span>
                  </div>
                  <TechTreeImg vehicle="spitfire_xvi" type="aircraft" />
                </div>
                <div className="tree-arrow">
                  <img src="/images/Arrow-small.png" alt="Arrow.png" />
                </div>
                <div className="tree-item">
                  <div className="tree-item-background" id="Spitfire LF Mk IX">
                    <a href="/Spitfire_LF_Mk_IX" title="Spitfire LF Mk IX">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">Spitfire&nbsp;LF Mk&nbsp;IX</span>
                  </div>
                  <TechTreeImg vehicle="spitfire_ix" type="aircraft" />
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
                      <div className="tree-item-background" id="Spitfire F Mk XIVe">
                        <a href="/Spitfire_F_Mk_XIVe" title="Spitfire F Mk XIVe">
                          <Item_own />
                        </a>
                      </div>
                      <div className="tree-item-text">
                        <span className="tree-item-text-scroll">Spitfire F Mk XIVe</span>
                      </div>
                      <TechTreeImg vehicle="spitfire_mk14e" type="aircraft" />
                    </div>
                    <div className="tree-arrow">
                      <img src="/images/Arrow-small.png" alt="Arrow.png" />
                    </div>
                    <div className="tree-item">
                      <div className="tree-item-background" id="Spitfire F Mk XVIIIe">
                        <a href="/Spitfire_F_Mk_XVIIIe" title="Spitfire F Mk XVIIIe">
                          <Item_own />
                        </a>
                      </div>
                      <div className="tree-item-text">
                        <span className="tree-item-text-scroll">Spitfire F Mk XVIIIe</span>
                      </div>
                      <TechTreeImg vehicle="spitfire_mk18e" type="aircraft" />
                    </div>
                    <div className="tree-arrow">
                      <img src="/images/Arrow-small.png" alt="Arrow.png" />
                    </div>
                    <div className="tree-item">
                      <div className="tree-item-background" id="Spitfire F Mk 22">
                        <a href="/Spitfire_F_Mk_22" title="Spitfire F Mk 22">
                          <Item_own />
                        </a>
                      </div>
                      <div className="tree-item-text">
                        <span className="tree-item-text-scroll">Spitfire F Mk 22</span>
                      </div>
                      <TechTreeImg vehicle="spitfire_f22" type="aircraft" />
                    </div>
                    <div className="tree-arrow">
                      <img src="/images/Arrow-small.png" alt="Arrow.png" />
                    </div>
                    <div className="tree-item">
                      <div className="tree-item-background" id="Spitfire F Mk 24">
                        <a href="/Spitfire_F_Mk_24" title="Spitfire F Mk 24">
                          <Item_own />
                        </a>
                      </div>
                      <div className="tree-item-text">
                        <span className="tree-item-text-scroll">Spitfire F Mk 24</span>
                      </div>
                      <TechTreeImg vehicle="spitfire_f24" type="aircraft" />
                    </div>
                  </div>
                  <div
                    className="tree-group"
                    onClick={(event) => {
                      openfolder(event);
                    }}
                  >
                    <div className="tree-group-text">
                      <span className="tree-item-text-scroll">Spitfire (Griffon)</span>
                    </div>
                    <div className="tree-group-img">
                      <img
                        src="https://encyclopedia.warthunder.com/slots/spitfire_f2x_group.png"
                        alt="spitfire_f2x_group.png"
                      />
                    </div>
                  </div>
                </div>
                <div className="tree-arrow">
                  <img src="/images/Arrow-small.png" alt="Arrow.png" />
                </div>
              </td>
              <td>
                <div className="tree-item">
                  <div className="tree-item-background" id="Seafire LF Mk.III">
                    <a href="/Seafire_LF_Mk.III" title="Seafire LF Mk.III">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">Seafire LF Mk.III</span>
                  </div>
                  <TechTreeImg vehicle="seafire_mk3" type="aircraft" />
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
                      <div className="tree-item-background" id="Seafire F Mk XVII">
                        <a href="/Seafire_F_Mk_XVII" title="Seafire F Mk XVII">
                          <Item_own />
                        </a>
                      </div>
                      <div className="tree-item-text">
                        <span className="tree-item-text-scroll">Seafire F Mk XVII</span>
                      </div>
                      <TechTreeImg vehicle="seafire_mk17" type="aircraft" />
                    </div>
                    <div className="tree-arrow">
                      <img src="/images/Arrow-small.png" alt="Arrow.png" />
                    </div>
                    <div className="tree-item">
                      <div className="tree-item-background" id="Seafire FR 47">
                        <a href="/Seafire_FR_47" title="Seafire FR 47">
                          <Item_own />
                        </a>
                      </div>
                      <div className="tree-item-text">
                        <span className="tree-item-text-scroll">Seafire FR 47</span>
                      </div>
                      <TechTreeImg vehicle="seafire_fr47" type="aircraft" />
                    </div>
                  </div>
                  <div
                    className="tree-group"
                    onClick={(event) => {
                      openfolder(event);
                    }}
                  >
                    <div className="tree-group-text">
                      <span className="tree-item-text-scroll">Seafire</span>
                    </div>
                    <div className="tree-group-img">
                      <img
                        src="https://encyclopedia.warthunder.com/slots/seafire_group.png"
                        alt="seafire_group.png"
                      />
                    </div>
                  </div>
                </div>
                <div className="tree-arrow">
                  <img src="/images/Arrow-small.png" alt="Arrow.png" />
                </div>
                <div className="tree-item">
                  <div className="tree-item-background" id="Sea Fury FB 11">
                    <a href="/Sea_Fury_FB_11" title="Sea Fury FB 11">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">Sea Fury FB 11</span>
                  </div>
                  <TechTreeImg vehicle="sea_fury_fb11" type="aircraft" />
                </div>
                <div className="tree-arrow">
                  <img src="/images/Arrow-small.png" alt="Arrow.png" />
                </div>
              </td>
              <td>
                <div className="tree-item">
                  <div className="tree-item-background" id="Whirlwind Mk I">
                    <a href="/Whirlwind_Mk_I" title="Whirlwind Mk I">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">Whirlwind Mk I</span>
                  </div>
                  <TechTreeImg vehicle="whirlwind_mk1" type="aircraft" />
                </div>
                <div className="tree-arrow">
                  <img src="/images/Arrow-small.png" alt="Arrow.png" />
                </div>
                <div className="tree-item">
                  <div className="tree-item-background" id="Brigand B 1">
                    <a href="/Brigand_B_1" title="Brigand B 1">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">Brigand B 1</span>
                  </div>
                  <TechTreeImg vehicle="brigand_b1" type="aircraft" />
                </div>
                <div className="tree-arrow">
                  <img src="/images/Arrow-small.png" alt="Arrow.png" />
                </div>
                <div className="tree-item">
                  <div className="tree-item-background" id="Hornet Mk.III">
                    <a href="/Hornet_Mk.III" title="Hornet Mk.III">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">Hornet Mk.III</span>
                  </div>
                  <TechTreeImg vehicle="hornet_mk3" type="aircraft" />
                </div>
                <div className="tree-arrow">
                  <img src="/images/Arrow-small.png" alt="Arrow.png" />
                </div>
              </td>
              <td>
                <div style={{ position: "relative" }}>
                  <div
                    className="tree-group-collapse"
                    style={{ display: "none", position: "absolute" }}
                  >
                    <div className="tree-item">
                      <div className="tree-item-background" id="Lancaster B Mk I">
                        <a href="/Lancaster_B_Mk_I" title="Lancaster B Mk I">
                          <Item_own />
                        </a>
                      </div>
                      <div className="tree-item-text">
                        <span className="tree-item-text-scroll">Lancaster B&nbsp;Mk&nbsp;I</span>
                      </div>
                      <TechTreeImg vehicle="lancaster_mk1" type="aircraft" />
                    </div>
                    <div className="tree-arrow">
                      <img src="/images/Arrow-small.png" alt="Arrow.png" />
                    </div>
                    <div className="tree-item">
                      <div className="tree-item-background" id="Lancaster B Mk III">
                        <a href="/Lancaster_B_Mk_III" title="Lancaster B Mk III">
                          <Item_own />
                        </a>
                      </div>
                      <div className="tree-item-text">
                        <span className="tree-item-text-scroll">Lancaster B&nbsp;Mk&nbsp;III</span>
                      </div>
                      <TechTreeImg vehicle="lancaster_mk3" type="aircraft" />
                    </div>
                  </div>
                  <div
                    className="tree-group"
                    onClick={(event) => {
                      openfolder(event);
                    }}
                  >
                    <div className="tree-group-text">
                      <span className="tree-item-text-scroll">Lancaster</span>
                    </div>
                    <div className="tree-group-img">
                      <img
                        src="https://encyclopedia.warthunder.com/slots/lancaster_group.png"
                        alt="lancaster_group.png"
                      />
                    </div>
                  </div>
                </div>
                <div className="tree-arrow">
                  <img src="/images/Arrow-small.png" alt="Arrow.png" />
                </div>
                <div className="tree-item">
                  <div className="tree-item-background" id="Lincoln B Mk II">
                    <a href="/Lincoln_B_Mk_II" title="Lincoln B Mk II">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">Lincoln B Mk II</span>
                  </div>
                  <TechTreeImg vehicle="lincoln_b2" type="aircraft" />
                </div>
                <div className="tree-arrow">
                  <img src="/images/Arrow-small.png" alt="Arrow.png" />
                </div>
                <div className="tree-item">
                  <div className="tree-item-background" id="Shackleton MR.Mk.2">
                    <a href="/Shackleton_MR.Mk.2" title="Shackleton MR.Mk.2">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">Shackleton MR.Mk.2</span>
                  </div>
                  <TechTreeImg vehicle="shackleton_mr_mk_2" type="aircraft" />
                </div>
                <div className="tree-arrow">
                  <img src="/images/Arrow-small.png" alt="Arrow.png" />
                </div>
              </td>
              <td style={{ borderLeft: "solid 1px #cccccc" }}>
                <div className="tree-item">
                  <div className="tree-item-background" id="MB.5">
                    <a href="/MB.5" title="MB.5">
                      <Item_prem />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">MB.5</span>
                  </div>
                  <div className="tree-item-img">
                    <img src="https://encyclopedia.warthunder.com/slots/mb_5.png" alt="mb_5.png" />
                  </div>
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
                  <div className="tree-item-background" id="Hornet Mk.I">
                    <a href="/Hornet_Mk.I" title="Hornet Mk.I">
                      <Item_prem />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">Hornet Mk.I</span>
                  </div>
                  <TechTreeImg vehicle="hornet_mk1" type="aircraft" />
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
                  <div className="tree-item-background" id="Spitfire F Mk XIVc">
                    <a href="/Spitfire_F_Mk_XIVc" title="Spitfire F Mk XIVc">
                      <Item_prem />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">Spitfire F Mk XIVc</span>
                  </div>
                  <TechTreeImg vehicle="spitfire_mk14c" type="aircraft" />
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
                  <div className="tree-item-background" id="Wyvern S4">
                    <a href="/Wyvern_S4" title="Wyvern S4">
                      <Item_prem />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">Wyvern S4</span>
                  </div>
                  <TechTreeImg vehicle="wyvern_s4" type="aircraft" />
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
                  <div className="tree-item-background" id="Spitfire FR Mk XIVe">
                    <a href="/Spitfire_FR_Mk_XIVe" title="Spitfire FR Mk XIVe">
                      <Item_prem />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">Spitfire FR Mk XIVe</span>
                  </div>
                  <TechTreeImg vehicle="spitfire_fr_mk14e" type="aircraft" />
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
                  <div className="tree-item-background" id="Plagis' Spitfire LF Mk IXc">
                    <a href="/Plagis%27_Spitfire_LF_Mk_IXc" title="Plagis' Spitfire LF Mk IXc">
                      <Item_prem />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">
                      Plagis&apos; Spitfire&nbsp;LF Mk&nbsp;IXc
                    </span>
                  </div>
                  <TechTreeImg vehicle="spitfire_ix_plagis" type="aircraft" />
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
                  V Rank
                </div>
              </th>
              <td>
                <div className="tree-item">
                  <div className="tree-item-background" id="Vampire FB 5">
                    <a href="/Vampire_FB_5" title="Vampire FB 5">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">Vampire FB 5</span>
                  </div>
                  <TechTreeImg vehicle="vampire_fb5" type="aircraft" />
                </div>
                <div className="tree-arrow">
                  <img src="/images/Arrow-small.png" alt="Arrow.png" />
                </div>
                <div className="tree-item">
                  <div className="tree-item-background" id="Venom FB.4">
                    <a href="/Venom_FB.4" title="Venom FB.4">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">Venom FB.4</span>
                  </div>
                  <TechTreeImg vehicle="venom_fb4" type="aircraft" />
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
                <div style={{ position: "relative" }}>
                  <div
                    className="tree-group-collapse"
                    style={{ display: "none", position: "absolute" }}
                  >
                    <div className="tree-item">
                      <div className="tree-item-background" id="Meteor F Mk 3">
                        <a href="/Meteor_F_Mk_3" title="Meteor F Mk 3">
                          <Item_own />
                        </a>
                      </div>
                      <div className="tree-item-text">
                        <span className="tree-item-text-scroll">Meteor F Mk 3</span>
                      </div>
                      <TechTreeImg vehicle="meteor_fmk3" type="aircraft" />
                    </div>
                    <div className="tree-arrow">
                      <img src="/images/Arrow-small.png" alt="Arrow.png" />
                    </div>
                    <div className="tree-item">
                      <div className="tree-item-background" id="Sea Meteor F Mk 3">
                        <a href="/Sea_Meteor_F_Mk_3" title="Sea Meteor F Mk 3">
                          <Item_own />
                        </a>
                      </div>
                      <div className="tree-item-text">
                        <span className="tree-item-text-scroll">Sea&nbsp;Meteor F Mk 3</span>
                      </div>
                      <TechTreeImg vehicle="meteor_fmk3_navy" type="aircraft" />
                    </div>
                  </div>
                  <div
                    className="tree-group"
                    onClick={(event) => {
                      openfolder(event);
                    }}
                  >
                    <div className="tree-group-text">
                      <span className="tree-item-text-scroll">Meteor F Mk 3</span>
                    </div>
                    <div className="tree-group-img">
                      <img
                        src="https://encyclopedia.warthunder.com/slots/meteor_group.png"
                        alt="meteor_group.png"
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
                      <div className="tree-item-background" id="Meteor F Mk 4 G.41F">
                        <a href="/Meteor_F_Mk_4_G.41F" title="Meteor F Mk 4 G.41F">
                          <Item_own />
                        </a>
                      </div>
                      <div className="tree-item-text">
                        <span className="tree-item-text-scroll">Meteor&nbsp;F Mk 4 G.41F</span>
                      </div>
                      <TechTreeImg vehicle="meteor_fmk4_lw" type="aircraft" />
                    </div>
                    <div className="tree-arrow">
                      <img src="/images/Arrow-small.png" alt="Arrow.png" />
                    </div>
                    <div className="tree-item">
                      <div className="tree-item-background" id="Meteor F Mk 4 G.41G">
                        <a href="/Meteor_F_Mk_4_G.41G" title="Meteor F Mk 4 G.41G">
                          <Item_own />
                        </a>
                      </div>
                      <div className="tree-item-text">
                        <span className="tree-item-text-scroll">Meteor&nbsp;F Mk 4 G.41G</span>
                      </div>
                      <TechTreeImg vehicle="meteor_fmk4_sw" type="aircraft" />
                    </div>
                  </div>
                  <div
                    className="tree-group"
                    onClick={(event) => {
                      openfolder(event);
                    }}
                  >
                    <div className="tree-group-text">
                      <span className="tree-item-text-scroll">Meteor F Mk 4</span>
                    </div>
                    <div className="tree-group-img">
                      <img
                        src="https://encyclopedia.warthunder.com/slots/meteor4_group.png"
                        alt="meteor4_group.png"
                      />
                    </div>
                  </div>
                </div>
                <div className="tree-arrow">
                  <img src="/images/Arrow-small.png" alt="Arrow.png" />
                </div>
                <div className="tree-item">
                  <div className="tree-item-background" id="Meteor F Mk 8 G.41K">
                    <a href="/Meteor_F_Mk_8_G.41K" title="Meteor F Mk 8 G.41K">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">Meteor&nbsp;F Mk 8 G.41K</span>
                  </div>
                  <TechTreeImg vehicle="meteor_fmk8" type="aircraft" />
                </div>
                <div className="tree-arrow">
                  <img src="/images/Arrow-small.png" alt="Arrow.png" />
                </div>
              </td>
              <td>
                <div className="tree-item">
                  <div className="tree-item-background" id="Attacker FB 1">
                    <a href="/Attacker_FB_1" title="Attacker FB 1">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">Attacker FB 1</span>
                  </div>
                  <TechTreeImg vehicle="attaker_fb1" type="aircraft" />
                </div>
                <div className="tree-arrow">
                  <img src="/images/Arrow-small.png" alt="Arrow.png" />
                </div>
                <div className="tree-item">
                  <div className="tree-item-background" id="Sea Hawk FGA.6">
                    <a href="/Sea_Hawk_FGA.6" title="Sea Hawk FGA.6">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">Sea Hawk FGA.6</span>
                  </div>
                  <TechTreeImg vehicle="sea_hawk_fga6" type="aircraft" />
                </div>
                <div className="tree-arrow">
                  <img src="/images/Arrow-small.png" alt="Arrow.png" />
                </div>
                <div className="tree-item">
                  <div className="tree-item-background" id="Sea Venom FAW 20">
                    <a href="/Sea_Venom_FAW_20" title="Sea Venom FAW 20">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">Sea Venom FAW 20</span>
                  </div>
                  <TechTreeImg vehicle="sea_venom_faw20" type="aircraft" />
                </div>
                <div className="tree-arrow">
                  <img src="/images/Arrow-small.png" alt="Arrow.png" />
                </div>
              </td>
              <td>
                <div className="tree-item">
                  <div className="tree-item-background" id="Swift F.1">
                    <a href="/Swift_F.1" title="Swift F.1">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">Swift F.1</span>
                  </div>
                  <TechTreeImg vehicle="swift_f1" type="aircraft" />
                </div>
                <div className="tree-arrow">
                  <img src="/images/Arrow-small.png" alt="Arrow.png" />
                </div>
                <div className="tree-item">
                  <div className="tree-item-background" id="Swift F.7">
                    <a href="/Swift_F.7" title="Swift F.7">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">Swift F.7</span>
                  </div>
                  <TechTreeImg vehicle="swift_f7" type="aircraft" />
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
                  <div className="tree-item-background" id="Canberra B Mk 2">
                    <a href="/Canberra_B_Mk_2" title="Canberra B Mk 2">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">Canberra B Mk 2</span>
                  </div>
                  <TechTreeImg vehicle="canberra_bmk2" type="aircraft" />
                </div>
                <div className="tree-arrow">
                  <img src="/images/Arrow-small.png" alt="Arrow.png" />
                </div>
                <div className="tree-item">
                  <div className="tree-item-background" id="Canberra B (I) Mk 6">
                    <a href="/Canberra_B_(I)_Mk_6" title="Canberra B (I) Mk 6">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">Canberra B (I) Mk 6</span>
                  </div>
                  <TechTreeImg vehicle="canberra_bimk6" type="aircraft" />
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
                  <div className="tree-item-background" id="Attacker FB.2">
                    <a href="/Attacker_FB.2" title="Attacker FB.2">
                      <Item_prem />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">Attacker FB.2</span>
                  </div>
                  <TechTreeImg vehicle="attaker_fb2" type="aircraft" />
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
                  <div className="tree-item-background" id="Meteor F Mk.8 Reaper">
                    <a href="/Meteor_F_Mk.8_Reaper" title="Meteor F Mk.8 Reaper">
                      <Item_prem />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">Meteor&nbsp;F Mk.8 Reaper</span>
                  </div>
                  <TechTreeImg vehicle="meteor_fmk8_reaper" type="aircraft" />
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
                  <div className="tree-item-background" id="Sea Vixen F.A.W. Mk.2">
                    <a href="/Sea_Vixen_F.A.W._Mk.2" title="Sea Vixen F.A.W. Mk.2">
                      <Item_prem />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">Sea Vixen F.A.W. Mk.2</span>
                  </div>
                  <TechTreeImg vehicle="dh_110_sea_vixen" type="aircraft" />
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
                  <div className="tree-item-background" id="Hunter FGA.9">
                    <a href="/Hunter_FGA.9" title="Hunter FGA.9">
                      <Item_prem />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">Hunter FGA.9</span>
                  </div>
                  <TechTreeImg vehicle="hunter_f9_rhodesia" type="aircraft" />
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
                <div className="tree-item">
                  <div className="tree-item-background" id="Hunter F.1">
                    <a href="/Hunter_F.1" title="Hunter F.1">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">Hunter F.1</span>
                  </div>
                  <TechTreeImg vehicle="hunter_f1" type="aircraft" />
                </div>
                <div className="tree-arrow">
                  <img src="/images/Arrow-small.png" alt="Arrow.png" />
                </div>
                <div className="tree-item">
                  <div className="tree-item-background" id="Hunter F.6">
                    <a href="/Hunter_F.6" title="Hunter F.6">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">Hunter F.6</span>
                  </div>
                  <TechTreeImg vehicle="hunter_f6" type="aircraft" />
                </div>
                <div className="tree-arrow">
                  <img src="/images/Arrow-small.png" alt="Arrow.png" />
                </div>
              </td>
              <td>
                <div className="tree-item">
                  <div className="tree-item-background" id="Javelin F.(A.W.) Mk.9">
                    <a href="/Javelin_F.(A.W.)_Mk.9" title="Javelin F.(A.W.) Mk.9">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">Javelin F.(A.W.) Mk.9</span>
                  </div>
                  <TechTreeImg vehicle="javelin_fmk9" type="aircraft" />
                </div>
                <div className="tree-arrow">
                  <img src="/images/Arrow-small.png" alt="Arrow.png" />
                </div>
                <div className="tree-item">
                  <div className="tree-item-background" id="Lightning F.6">
                    <a href="/Lightning_F.6" title="Lightning F.6">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">Lightning F.6</span>
                  </div>
                  <TechTreeImg vehicle="lightning_f6" type="aircraft" />
                </div>
              </td>
              <td>
                <div className="tree-item">
                  <div className="tree-item-background" id="Scimitar F Mk.1">
                    <a href="/Scimitar_F_Mk.1" title="Scimitar F Mk.1">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">Scimitar F Mk.1</span>
                  </div>
                  <TechTreeImg vehicle="scimitar_f1" type="aircraft" />
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
                  <div className="tree-item-background" id="Harrier GR.3">
                    <a href="/Harrier_GR.3" title="Harrier GR.3">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">Harrier GR.3</span>
                  </div>
                  <TechTreeImg vehicle="harrier_gr3" type="aircraft" />
                </div>
                <div className="tree-arrow">
                  <img src="/images/Arrow-small.png" alt="Arrow.png" />
                </div>
                <div className="tree-item">
                  <div className="tree-item-background" id="Jaguar GR.1">
                    <a href="/Jaguar_GR.1" title="Jaguar GR.1">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">Jaguar GR.1</span>
                  </div>
                  <TechTreeImg vehicle="jaguar_gr1" type="aircraft" />
                </div>
                <div className="tree-arrow">
                  <img src="/images/Arrow-small.png" alt="Arrow.png" />
                </div>
              </td>
              <td>
                <div className="tree-item">
                  <div className="tree-item-background" id="Buccaneer S.2">
                    <a href="/Buccaneer_S.2" title="Buccaneer S.2">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">Buccaneer S.2</span>
                  </div>
                  <TechTreeImg vehicle="buccaneer_s2" type="aircraft" />
                </div>
              </td>
              <td style={{ borderLeft: "solid 1px #cccccc" }}>
                <div className="tree-item">
                  <div className="tree-item-background" id="Harrier GR.1">
                    <a href="/Harrier_GR.1" title="Harrier GR.1">
                      <Item_prem />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">Harrier GR.1</span>
                  </div>
                  <TechTreeImg vehicle="harrier_gr1" type="aircraft" />
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
                  <div className="tree-item-background" id="Lightning F.53">
                    <a href="/Lightning_F.53" title="Lightning F.53">
                      <Item_prem />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">Lightning F.53</span>
                  </div>
                  <TechTreeImg vehicle="lightning_f53" type="aircraft" />
                </div>
              </td>
              <td>
                <div className="tree-item">
                  <div className="tree-item-background" id="Buccaneer S.1">
                    <a href="/Buccaneer_S.1" title="Buccaneer S.1">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">Buccaneer S.1</span>
                  </div>
                  <TechTreeImg vehicle="buccaneer_s1" type="aircraft" />
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
                  <div className="tree-item-background" id="Phantom FGR.2">
                    <a href="/Phantom_FGR.2" title="Phantom FGR.2">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">Phantom FGR.2</span>
                  </div>
                  <TechTreeImg vehicle="f-4m_fgr2" type="aircraft" />
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
                <div className="tree-item">
                  <div className="tree-item-background" id="Phantom FG.1">
                    <a href="/Phantom_FG.1" title="Phantom FG.1">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">Phantom FG.1</span>
                  </div>
                  <div className="tree-item-img">
                    <img src="https://encyclopedia.warthunder.com/slots/f-4k.png" alt="f-4k.png" />
                  </div>
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
                  <div className="tree-item-background" id="Jaguar GR.1A">
                    <a href="/Jaguar_GR.1A" title="Jaguar GR.1A">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">Jaguar GR.1A</span>
                  </div>
                  <TechTreeImg vehicle="jaguar_gr1a" type="aircraft" />
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
                  src="//yewtu.be/J8LIhG0Xi_A?"
                  allowFullScreen={true}
                  width={640}
                  height={360}
                  frameBorder={0}
                />
              </div>
            </div>
          </div>
          <div className="video_desc">
            <b>Book of Records: British Aircraft</b> - <i>War Thunder Official Channel</i>
          </div>
        </div>
        <div className="video">
          <div className="video_embed">
            <div className="embedvideo autoResize" style={{}}>
              <div className="embedvideowrap" style={{ width: 640 }}>
                <iframe
                  src="//yewtu.be/475r7Z0w08s?"
                  allowFullScreen={true}
                  width={640}
                  height={360}
                  frameBorder={0}
                />
              </div>
            </div>
          </div>
          <div className="video_desc">
            <b>British Air Forces Rank II - Tutorial and Guide</b> - <i>Jengar</i>
          </div>
        </div>
        <div className="video">
          <div className="video_embed">
            <div className="embedvideo autoResize" style={{}}>
              <div className="embedvideowrap" style={{ width: 640 }}>
                <iframe
                  src="//yewtu.be/362970yT-KM?"
                  allowFullScreen={true}
                  width={640}
                  height={360}
                  frameBorder={0}
                />
              </div>
            </div>
          </div>
          <div className="video_desc">
            <b>British Air Forces Rank I - Tutorial and Guide</b> - <i>Jengar</i>
          </div>
        </div>
        <div className="video">
          <div className="video_embed">
            <div className="embedvideo autoResize" style={{}}>
              <div className="embedvideowrap" style={{ width: 640 }}>
                <iframe
                  src="//yewtu.be/pFgP4_KgvcU?"
                  allowFullScreen={true}
                  width={640}
                  height={360}
                  frameBorder={0}
                />
              </div>
            </div>
          </div>
          <div className="video_desc">
            <b>Climbing the ranks with British aircraft</b> - <i>War Thunder Official Channel</i>
          </div>
        </div>
      </div>
    </div>
  );
}
