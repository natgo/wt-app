import { openfolder } from ".";
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
                          <img
                            alt="Item own.png"
                            src="/images/Item_own.png"
                            className="tree-item-js"
                            data-file-width={160}
                            data-file-height={48}
                            width={160}
                            height={48}
                          />
                        </a>
                      </div>
                      <div className="tree-item-text">
                        <span className="tree-item-text-scroll">Fury&nbsp;Mk I</span>
                      </div>
                      <div className="tree-item-img">
                        <img
                          src="https://encyclopedia.warthunder.com/slots/fury_mk1.png"
                          alt="fury_mk1.png"
                        />
                        <img src={fighter} className="class" />
                      </div>
                    </div>
                    <div className="tree-arrow">
                      <img src="/images/Arrow-small.png" alt="Arrow.png" />
                    </div>
                    <div className="tree-item">
                      <div className="tree-item-background" id="Fury Mk II">
                        <a href="/Fury_Mk_II" title="Fury Mk II">
                          <img
                            alt="Item own.png"
                            src="/images/Item_own.png"
                            className="tree-item-js"
                            data-file-width={160}
                            data-file-height={48}
                            width={160}
                            height={48}
                          />
                        </a>
                      </div>
                      <div className="tree-item-text">
                        <span className="tree-item-text-scroll">Fury&nbsp;Mk II</span>
                      </div>
                      <div className="tree-item-img">
                        <img
                          src="https://encyclopedia.warthunder.com/slots/fury_mk2.png"
                          alt="fury_mk2.png"
                        />
                        <img src={fighter} className="class" />
                      </div>
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
                      <img
                        alt="Item own.png"
                        src="/images/Item_own.png"
                        className="tree-item-js"
                        data-file-width={160}
                        data-file-height={48}
                        width={160}
                        height={48}
                      />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">Gladiator&nbsp;Mk&nbsp;IIF</span>
                  </div>
                  <div className="tree-item-img">
                    <img
                      src="https://encyclopedia.warthunder.com/slots/gladiator_mk2_france.png"
                      alt="gladiator_mk2_france.png"
                    />
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
                  <div className="tree-item-background" id="Gladiator Mk IIS">
                    <a href="/Gladiator_Mk_IIS" title="Gladiator Mk IIS">
                      <img
                        alt="Item own.png"
                        src="/images/Item_own.png"
                        className="tree-item-js"
                        data-file-width={160}
                        data-file-height={48}
                        width={160}
                        height={48}
                      />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">Gladiator&nbsp;Mk&nbsp;IIS</span>
                  </div>
                  <div className="tree-item-img">
                    <img
                      src="https://encyclopedia.warthunder.com/slots/gladiator_mk2_silver.png"
                      alt="gladiator_mk2_silver.png"
                    />
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
                  <div className="tree-item-background" id="Gladiator Mk II">
                    <a href="/Gladiator_Mk_II" title="Gladiator Mk II">
                      <img
                        alt="Item own.png"
                        src="/images/Item_own.png"
                        className="tree-item-js"
                        data-file-width={160}
                        data-file-height={48}
                        width={160}
                        height={48}
                      />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">Gladiator&nbsp;Mk&nbsp;II</span>
                  </div>
                  <div className="tree-item-img">
                    <img
                      src="https://encyclopedia.warthunder.com/slots/gladiator_mk2.png"
                      alt="gladiator_mk2.png"
                    />
                  </div>
                </div>
              </td>
              <td>
                <div className="tree-item">
                  <div className="tree-item-background" id="Nimrod Mk I">
                    <a href="/Nimrod_Mk_I" title="Nimrod Mk I">
                      <img
                        alt="Item own.png"
                        src="/images/Item_own.png"
                        className="tree-item-js"
                        data-file-width={160}
                        data-file-height={48}
                        width={160}
                        height={48}
                      />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">Nimrod&nbsp;Mk I</span>
                  </div>
                  <div className="tree-item-img">
                    <img
                      src="https://encyclopedia.warthunder.com/slots/nimrod_mk1.png"
                      alt="nimrod_mk1.png"
                    />
                  </div>
                </div>
                <div className="tree-arrow">
                  <img src="/images/Arrow-small.png" alt="Arrow.png" />
                </div>
                <div className="tree-item">
                  <div className="tree-item-background" id="Nimrod Mk II">
                    <a href="/Nimrod_Mk_II" title="Nimrod Mk II">
                      <img
                        alt="Item own.png"
                        src="/images/Item_own.png"
                        className="tree-item-js"
                        data-file-width={160}
                        data-file-height={48}
                        width={160}
                        height={48}
                      />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">Nimrod&nbsp;Mk II</span>
                  </div>
                  <div className="tree-item-img">
                    <img
                      src="https://encyclopedia.warthunder.com/slots/nimrod_mk2.png"
                      alt="nimrod_mk2.png"
                    />
                  </div>
                </div>
                <div className="tree-arrow">
                  <img src="/images/Arrow-small.png" alt="Arrow.png" />
                </div>
                <div className="tree-item">
                  <div className="tree-item-background" id="Sea Gladiator Mk I">
                    <a href="/Sea_Gladiator_Mk_I" title="Sea Gladiator Mk I">
                      <img
                        alt="Item own.png"
                        src="/images/Item_own.png"
                        className="tree-item-js"
                        data-file-width={160}
                        data-file-height={48}
                        width={160}
                        height={48}
                      />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">Sea Gladiator&nbsp;Mk I</span>
                  </div>
                  <div className="tree-item-img">
                    <img
                      src="https://encyclopedia.warthunder.com/slots/gladiator_mk2_navy.png"
                      alt="gladiator_mk2_navy.png"
                    />
                  </div>
                </div>
                <div className="tree-arrow">
                  <img src="/images/Arrow-small.png" alt="Arrow.png" />
                </div>
              </td>
              <td>
                <div className="tree-item">
                  <div className="tree-item-background" id="V-156-B1">
                    <a href="/V-156-B1" title="V-156-B1">
                      <img
                        alt="Item own.png"
                        src="/images/Item_own.png"
                        className="tree-item-js"
                        data-file-width={160}
                        data-file-height={48}
                        width={160}
                        height={48}
                      />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">V-156-B1</span>
                  </div>
                  <div className="tree-item-img">
                    <img
                      src="https://encyclopedia.warthunder.com/slots/v_156_b1.png"
                      alt="v_156_b1.png"
                    />
                  </div>
                </div>
                <div className="tree-arrow">
                  <img src="/images/Arrow-small.png" alt="Arrow.png" />
                </div>
                <div className="tree-item">
                  <div className="tree-item-background" id="Blenheim Mk IV">
                    <a href="/Blenheim_Mk_IV" title="Blenheim Mk IV">
                      <img
                        alt="Item own.png"
                        src="/images/Item_own.png"
                        className="tree-item-js"
                        data-file-width={160}
                        data-file-height={48}
                        width={160}
                        height={48}
                      />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">Blenheim&nbsp;Mk&nbsp;IV</span>
                  </div>
                  <div className="tree-item-img">
                    <img
                      src="https://encyclopedia.warthunder.com/slots/blenheim_mkiv.png"
                      alt="blenheim_mkiv.png"
                    />
                  </div>
                </div>
                <div className="tree-arrow">
                  <img src="/images/Arrow-small.png" alt="Arrow.png" />
                </div>
                <div className="tree-item">
                  <div className="tree-item-background" id="Beaufort Mk VIII">
                    <a href="/Beaufort_Mk_VIII" title="Beaufort Mk VIII">
                      <img
                        alt="Item own.png"
                        src="/images/Item_own.png"
                        className="tree-item-js"
                        data-file-width={160}
                        data-file-height={48}
                        width={160}
                        height={48}
                      />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">Beaufort&nbsp;Mk&nbsp;VIII</span>
                  </div>
                  <div className="tree-item-img">
                    <img
                      src="https://encyclopedia.warthunder.com/slots/beaufort_mkviii.png"
                      alt="beaufort_mkviii.png"
                    />
                  </div>
                </div>
                <div className="tree-arrow">
                  <img src="/images/Arrow-small.png" alt="Arrow.png" />
                </div>
              </td>
              <td>
                <div className="tree-item">
                  <div className="tree-item-background" id="Swordfish Mk I">
                    <a href="/Swordfish_Mk_I" title="Swordfish Mk I">
                      <img
                        alt="Item own.png"
                        src="/images/Item_own.png"
                        className="tree-item-js"
                        data-file-width={160}
                        data-file-height={48}
                        width={160}
                        height={48}
                      />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">Swordfish&nbsp;Mk&nbsp;I</span>
                  </div>
                  <div className="tree-item-img">
                    <img
                      src="https://encyclopedia.warthunder.com/slots/swordfish_mk1.png"
                      alt="swordfish_mk1.png"
                    />
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
                      <div className="tree-item-background" id="Hampden Mk I">
                        <a href="/Hampden_Mk_I" title="Hampden Mk I">
                          <img
                            alt="Item own.png"
                            src="/images/Item_own.png"
                            className="tree-item-js"
                            data-file-width={160}
                            data-file-height={48}
                            width={160}
                            height={48}
                          />
                        </a>
                      </div>
                      <div className="tree-item-text">
                        <span className="tree-item-text-scroll">Hampden Mk I</span>
                      </div>
                      <div className="tree-item-img">
                        <img
                          src="https://encyclopedia.warthunder.com/slots/hp52_hampden_mk1_late.png"
                          alt="hp52_hampden_mk1_late.png"
                        />
                      </div>
                    </div>
                    <div className="tree-arrow">
                      <img src="/images/Arrow-small.png" alt="Arrow.png" />
                    </div>
                    <div className="tree-item">
                      <div className="tree-item-background" id="Hampden TB Mk I">
                        <a href="/Hampden_TB_Mk_I" title="Hampden TB Mk I">
                          <img
                            alt="Item own.png"
                            src="/images/Item_own.png"
                            className="tree-item-js"
                            data-file-width={160}
                            data-file-height={48}
                            width={160}
                            height={48}
                          />
                        </a>
                      </div>
                      <div className="tree-item-text">
                        <span className="tree-item-text-scroll">Hampden TB Mk I</span>
                      </div>
                      <div className="tree-item-img">
                        <img
                          src="https://encyclopedia.warthunder.com/slots/hp52_hampden_tbmk1.png"
                          alt="hp52_hampden_tbmk1.png"
                        />
                      </div>
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
                      <img
                        alt="Item own.png"
                        src="/images/Item_own.png"
                        className="tree-item-js"
                        data-file-width={160}
                        data-file-height={48}
                        width={160}
                        height={48}
                      />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">Sunderland Mk IIIa</span>
                  </div>
                  <div className="tree-item-img">
                    <img
                      src="https://encyclopedia.warthunder.com/slots/sunderland_mk3a.png"
                      alt="sunderland_mk3a.png"
                    />
                  </div>
                </div>
                <div className="tree-arrow">
                  <img src="/images/Arrow-small.png" alt="Arrow.png" />
                </div>
              </td>
              <td style={{ borderLeft: "solid 1px #cccccc" }}>
                <div className="tree-item">
                  <div className="tree-item-background" id="Tuck's Gladiator Mk II">
                    <a href="/Tuck%27s_Gladiator_Mk_II" title="Tuck's Gladiator Mk II">
                      <img
                        alt="Item prem.png"
                        src="/images/Item_prem.png"
                        className="tree-item-js"
                        data-file-width={160}
                        data-file-height={48}
                        width={160}
                        height={48}
                      />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">Tuck&apos;s Gladiator Mk II</span>
                  </div>
                  <div className="tree-item-img">
                    <img
                      src="https://encyclopedia.warthunder.com/slots/gladiator_mk2_tuck.png"
                      alt="gladiator_mk2_tuck.png"
                    />
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
                  <div className="tree-item-background" id="Wirraway (Great Britain)">
                    <a href="/Wirraway_(Great_Britain)" title="Wirraway (Great Britain)">
                      <img
                        alt="Item prem.png"
                        src="/images/Item_prem.png"
                        className="tree-item-js"
                        data-file-width={160}
                        data-file-height={48}
                        width={160}
                        height={48}
                      />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">▄Wirraway</span>
                  </div>
                  <div className="tree-item-img">
                    <img
                      src="https://encyclopedia.warthunder.com/slots/wirraway.png"
                      alt="wirraway.png"
                    />
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
                  <div className="tree-item-background" id="Swordfish Mk II">
                    <a href="/Swordfish_Mk_II" title="Swordfish Mk II">
                      <img
                        alt="Item prem.png"
                        src="/images/Item_prem.png"
                        className="tree-item-js"
                        data-file-width={160}
                        data-file-height={48}
                        width={160}
                        height={48}
                      />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">Swordfish&nbsp;Mk&nbsp;II</span>
                  </div>
                  <div className="tree-item-img">
                    <img
                      src="https://encyclopedia.warthunder.com/slots/swordfish_mk2.png"
                      alt="swordfish_mk2.png"
                    />
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
                  <div className="tree-item-background" id="Havoc Mk I (Great Britain)">
                    <a href="/Havoc_Mk_I_(Great_Britain)" title="Havoc Mk I (Great Britain)">
                      <img
                        alt="Item prem.png"
                        src="/images/Item_prem.png"
                        className="tree-item-js"
                        data-file-width={160}
                        data-file-height={48}
                        width={160}
                        height={48}
                      />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">▄Havoc&nbsp;Mk I</span>
                  </div>
                  <div className="tree-item-img">
                    <img
                      src="https://encyclopedia.warthunder.com/slots/intruder_mk_1.png"
                      alt="intruder_mk_1.png"
                    />
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
                  <div className="tree-item-background">
                    <a
                      href="/Catalina_Mk_IIIa_(Great_Britain)"
                      title="Catalina Mk IIIa (Great Britain)"
                    >
                      <img
                        alt="Item prem.png"
                        src="/images/Item_prem.png"
                        className="tree-item-js"
                        data-file-width={160}
                        data-file-height={48}
                        width={160}
                        height={48}
                      />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">▄Catalina Mk IIIa</span>
                  </div>
                  <div className="tree-item-img">
                    <img
                      src="https://encyclopedia.warthunder.com/slots/pby-5a_raf.png"
                      alt="pby-5a_raf.png"
                    />
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
                          <img
                            alt="Item own.png"
                            src="/images/Item_own.png"
                            className="tree-item-js"
                            data-file-width={160}
                            data-file-height={48}
                            width={160}
                            height={48}
                          />
                        </a>
                      </div>
                      <div className="tree-item-text">
                        <span className="tree-item-text-scroll">
                          Hurricane&nbsp;Mk&nbsp;IIB/Trop
                        </span>
                      </div>
                      <div className="tree-item-img">
                        <img
                          src="https://encyclopedia.warthunder.com/slots/hurricanemkii.png"
                          alt="hurricanemkii.png"
                        />
                      </div>
                    </div>
                    <div className="tree-arrow">
                      <img src="/images/Arrow-small.png" alt="Arrow.png" />
                    </div>
                    <div className="tree-item">
                      <div className="tree-item-background" id="Hurricane Mk IV">
                        <a href="/Hurricane_Mk_IV" title="Hurricane Mk IV">
                          <img
                            alt="Item own.png"
                            src="/images/Item_own.png"
                            className="tree-item-js"
                            data-file-width={160}
                            data-file-height={48}
                            width={160}
                            height={48}
                          />
                        </a>
                      </div>
                      <div className="tree-item-text">
                        <span className="tree-item-text-scroll">Hurricane&nbsp;Mk&nbsp;IV</span>
                      </div>
                      <div className="tree-item-img">
                        <img
                          src="https://encyclopedia.warthunder.com/slots/hurricane_mk4.png"
                          alt="hurricane_mk4.png"
                        />
                      </div>
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
                      <img
                        alt="Item own.png"
                        src="/images/Item_own.png"
                        className="tree-item-js"
                        data-file-width={160}
                        data-file-height={48}
                        width={160}
                        height={48}
                      />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">Hurricane&nbsp;Mk&nbsp;I/L</span>
                  </div>
                  <div className="tree-item-img">
                    <img
                      src="https://encyclopedia.warthunder.com/slots/hurricane_mk1.png"
                      alt="hurricane_mk1.png"
                    />
                  </div>
                </div>
                <div className="tree-arrow">
                  <img src="/images/Arrow-small.png" alt="Arrow.png" />
                </div>
                <div className="tree-item">
                  <div className="tree-item-background" id="Typhoon Mk Ia">
                    <a href="/Typhoon_Mk_Ia" title="Typhoon Mk Ia">
                      <img
                        alt="Item own.png"
                        src="/images/Item_own.png"
                        className="tree-item-js"
                        data-file-width={160}
                        data-file-height={48}
                        width={160}
                        height={48}
                      />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">Typhoon&nbsp;Mk Ia</span>
                  </div>
                  <div className="tree-item-img">
                    <img
                      src="https://encyclopedia.warthunder.com/slots/typhoon_mk1a.png"
                      alt="typhoon_mk1a.png"
                    />
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
                  <div className="tree-item-background" id="Spitfire Mk Ia">
                    <a href="/Spitfire_Mk_Ia" title="Spitfire Mk Ia">
                      <img
                        alt="Item own.png"
                        src="/images/Item_own.png"
                        className="tree-item-js"
                        data-file-width={160}
                        data-file-height={48}
                        width={160}
                        height={48}
                      />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">Spitfire&nbsp;Mk&nbsp;Ia</span>
                  </div>
                  <div className="tree-item-img">
                    <img
                      src="https://encyclopedia.warthunder.com/slots/spitfire_mk1.png"
                      alt="spitfire_mk1.png"
                    />
                  </div>
                </div>
                <div className="tree-arrow">
                  <img src="/images/Arrow-small.png" alt="Arrow.png" />
                </div>
                <div className="tree-item">
                  <div className="tree-item-background" id="Spitfire Mk IIa">
                    <a href="/Spitfire_Mk_IIa" title="Spitfire Mk IIa">
                      <img
                        alt="Item own.png"
                        src="/images/Item_own.png"
                        className="tree-item-js"
                        data-file-width={160}
                        data-file-height={48}
                        width={160}
                        height={48}
                      />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">Spitfire&nbsp;Mk&nbsp;IIa</span>
                  </div>
                  <div className="tree-item-img">
                    <img
                      src="https://encyclopedia.warthunder.com/slots/spitfiremkiia.png"
                      alt="spitfiremkiia.png"
                    />
                  </div>
                </div>
                <div className="tree-arrow">
                  <img src="/images/Arrow-small.png" alt="Arrow.png" />
                </div>
                <div className="tree-item">
                  <div className="tree-item-background" id="Spitfire Mk IIb">
                    <a href="/Spitfire_Mk_IIb" title="Spitfire Mk IIb">
                      <img
                        alt="Item own.png"
                        src="/images/Item_own.png"
                        className="tree-item-js"
                        data-file-width={160}
                        data-file-height={48}
                        width={160}
                        height={48}
                      />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">Spitfire&nbsp;Mk&nbsp;IIb</span>
                  </div>
                  <div className="tree-item-img">
                    <img
                      src="https://encyclopedia.warthunder.com/slots/spitfiremkii.png"
                      alt="spitfiremkii.png"
                    />
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
                  <div className="tree-item-background" id="Sea Hurricane Mk IB">
                    <a href="/Sea_Hurricane_Mk_IB" title="Sea Hurricane Mk IB">
                      <img
                        alt="Item own.png"
                        src="/images/Item_own.png"
                        className="tree-item-js"
                        data-file-width={160}
                        data-file-height={48}
                        width={160}
                        height={48}
                      />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">Sea Hurricane Mk IB</span>
                  </div>
                  <div className="tree-item-img">
                    <img
                      src="https://encyclopedia.warthunder.com/slots/hurricane_mk1b.png"
                      alt="hurricane_mk1b.png"
                    />
                  </div>
                </div>
                <div className="tree-arrow">
                  <img src="/images/Arrow-small.png" alt="Arrow.png" />
                </div>
                <div className="tree-item">
                  <div className="tree-item-background" id="Sea Hurricane Mk IC">
                    <a href="/Sea_Hurricane_Mk_IC" title="Sea Hurricane Mk IC">
                      <img
                        alt="Item own.png"
                        src="/images/Item_own.png"
                        className="tree-item-js"
                        data-file-width={160}
                        data-file-height={48}
                        width={160}
                        height={48}
                      />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">Sea Hurricane Mk IC</span>
                  </div>
                  <div className="tree-item-img">
                    <img
                      src="https://encyclopedia.warthunder.com/slots/hurricane_mk1c.png"
                      alt="hurricane_mk1c.png"
                    />
                  </div>
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
                      <img
                        alt="Item own.png"
                        src="/images/Item_own.png"
                        className="tree-item-js"
                        data-file-width={160}
                        data-file-height={48}
                        width={160}
                        height={48}
                      />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">Beaufighter&nbsp;Mk&nbsp;VIc</span>
                  </div>
                  <div className="tree-item-img">
                    <img
                      src="https://encyclopedia.warthunder.com/slots/beaufighter_mk6c.png"
                      alt="beaufighter_mk6c.png"
                    />
                  </div>
                </div>
                <div className="tree-arrow">
                  <img src="/images/Arrow-small.png" alt="Arrow.png" />
                </div>
                <div className="tree-item">
                  <div className="tree-item-background" id="Beaufighter Mk X">
                    <a href="/Beaufighter_Mk_X" title="Beaufighter Mk X">
                      <img
                        alt="Item own.png"
                        src="/images/Item_own.png"
                        className="tree-item-js"
                        data-file-width={160}
                        data-file-height={48}
                        width={160}
                        height={48}
                      />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">Beaufighter&nbsp;Mk&nbsp;X</span>
                  </div>
                  <div className="tree-item-img">
                    <img
                      src="https://encyclopedia.warthunder.com/slots/beaufighter_mkx.png"
                      alt="beaufighter_mkx.png"
                    />
                  </div>
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
                      <img
                        alt="Item own.png"
                        src="/images/Item_own.png"
                        className="tree-item-js"
                        data-file-width={160}
                        data-file-height={48}
                        width={160}
                        height={48}
                      />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">Sunderland Mk V</span>
                  </div>
                  <div className="tree-item-img">
                    <img
                      src="https://encyclopedia.warthunder.com/slots/sunderland_mk5.png"
                      alt="sunderland_mk5.png"
                    />
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
                      <div className="tree-item-background" id="Wellington Mk Ic">
                        <a href="/Wellington_Mk_Ic" title="Wellington Mk Ic">
                          <img
                            alt="Item own.png"
                            src="/images/Item_own.png"
                            className="tree-item-js"
                            data-file-width={160}
                            data-file-height={48}
                            width={160}
                            height={48}
                          />
                        </a>
                      </div>
                      <div className="tree-item-text">
                        <span className="tree-item-text-scroll">Wellington&nbsp;Mk Ic</span>
                      </div>
                      <div className="tree-item-img">
                        <img
                          src="https://encyclopedia.warthunder.com/slots/wellington_mk1c.png"
                          alt="wellington_mk1c.png"
                        />
                      </div>
                    </div>
                    <div className="tree-arrow">
                      <img src="/images/Arrow-small.png" alt="Arrow.png" />
                    </div>
                    <div className="tree-item">
                      <div className="tree-item-background" id="Wellington Mk Ic/L">
                        <a href="/Wellington_Mk_Ic/L" title="Wellington Mk Ic/L">
                          <img
                            alt="Item own.png"
                            src="/images/Item_own.png"
                            className="tree-item-js"
                            data-file-width={160}
                            data-file-height={48}
                            width={160}
                            height={48}
                          />
                        </a>
                      </div>
                      <div className="tree-item-text">
                        <span className="tree-item-text-scroll">Wellington&nbsp;Mk Ic/L</span>
                      </div>
                      <div className="tree-item-img">
                        <img
                          src="https://encyclopedia.warthunder.com/slots/wellington_mk1c_late.png"
                          alt="wellington_mk1c_late.png"
                        />
                      </div>
                    </div>
                    <div className="tree-arrow">
                      <img src="/images/Arrow-small.png" alt="Arrow.png" />
                    </div>
                    <div className="tree-item">
                      <div className="tree-item-background" id="Wellington Mk III">
                        <a href="/Wellington_Mk_III" title="Wellington Mk III">
                          <img
                            alt="Item own.png"
                            src="/images/Item_own.png"
                            className="tree-item-js"
                            data-file-width={160}
                            data-file-height={48}
                            width={160}
                            height={48}
                          />
                        </a>
                      </div>
                      <div className="tree-item-text">
                        <span className="tree-item-text-scroll">Wellington&nbsp;Mk III</span>
                      </div>
                      <div className="tree-item-img">
                        <img
                          src="https://encyclopedia.warthunder.com/slots/wellington_mk3.png"
                          alt="wellington_mk3.png"
                        />
                      </div>
                    </div>
                    <div className="tree-arrow">
                      <img src="/images/Arrow-small.png" alt="Arrow.png" />
                    </div>
                    <div className="tree-item">
                      <div className="tree-item-background" id="Wellington Mk X">
                        <a href="/Wellington_Mk_X" title="Wellington Mk X">
                          <img
                            alt="Item own.png"
                            src="/images/Item_own.png"
                            className="tree-item-js"
                            data-file-width={160}
                            data-file-height={48}
                            width={160}
                            height={48}
                          />
                        </a>
                      </div>
                      <div className="tree-item-text">
                        <span className="tree-item-text-scroll">Wellington&nbsp;Mk X</span>
                      </div>
                      <div className="tree-item-img">
                        <img
                          src="https://encyclopedia.warthunder.com/slots/wellington_mk10.png"
                          alt="wellington_mk10.png"
                        />
                      </div>
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
                      <img
                        alt="Item own.png"
                        src="/images/Item_own.png"
                        className="tree-item-js"
                        data-file-width={160}
                        data-file-height={48}
                        width={160}
                        height={48}
                      />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">Halifax B Mk IIIa</span>
                  </div>
                  <div className="tree-item-img">
                    <img
                      src="https://encyclopedia.warthunder.com/slots/halifax_mk3.png"
                      alt="halifax_mk3.png"
                    />
                  </div>
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
                      <img
                        alt="Item prem.png"
                        src="/images/Item_prem.png"
                        className="tree-item-js"
                        data-file-width={160}
                        data-file-height={48}
                        width={160}
                        height={48}
                      />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">▄Hudson Mk V</span>
                  </div>
                  <div className="tree-item-img">
                    <img
                      src="https://encyclopedia.warthunder.com/slots/hudson_mk_v.png"
                      alt="hudson_mk_v.png"
                    />
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
                  <div className="tree-item-background" id="Avenger Mk II (Great Britain)">
                    <a href="/Avenger_Mk_II_(Great_Britain)" title="Avenger Mk II (Great Britain)">
                      <img
                        alt="Item prem.png"
                        src="/images/Item_prem.png"
                        className="tree-item-js"
                        data-file-width={160}
                        data-file-height={48}
                        width={160}
                        height={48}
                      />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">▄Avenger Mk II</span>
                  </div>
                  <div className="tree-item-img">
                    <img
                      src="https://encyclopedia.warthunder.com/slots/avenger_mk1.png"
                      alt="avenger_mk1.png"
                    />
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
                  <div className="tree-item-background" id="Spitfire Mk.IIa Venture I">
                    <a href="/Spitfire_Mk.IIa_Venture_I" title="Spitfire Mk.IIa Venture I">
                      <img
                        alt="Item prem.png"
                        src="/images/Item_prem.png"
                        className="tree-item-js"
                        data-file-width={160}
                        data-file-height={48}
                        width={160}
                        height={48}
                      />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">Spitfire Mk.IIa Venture I</span>
                  </div>
                  <div className="tree-item-img">
                    <img
                      src="https://encyclopedia.warthunder.com/slots/spitfiremkiia_ep.png"
                      alt="spitfiremkiia_ep.png"
                    />
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
                  <div className="tree-item-background">
                    <a
                      href="/Corsair_F_Mk_II_(Great_Britain)"
                      title="Corsair F Mk II (Great Britain)"
                    >
                      <img
                        alt="Item prem.png"
                        src="/images/Item_prem.png"
                        className="tree-item-js"
                        data-file-width={160}
                        data-file-height={48}
                        width={160}
                        height={48}
                      />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">▄Corsair F Mk II</span>
                  </div>
                  <div className="tree-item-img">
                    <img
                      src="https://encyclopedia.warthunder.com/slots/corsair_fmk2.png"
                      alt="corsair_fmk2.png"
                    />
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
                  <div className="tree-item-background" id="D.520 (Great Britain)">
                    <a href="/D.520_(Great_Britain)" title="D.520 (Great Britain)">
                      <img
                        alt="Item prem.png"
                        src="/images/Item_prem.png"
                        className="tree-item-js"
                        data-file-width={160}
                        data-file-height={48}
                        width={160}
                        height={48}
                      />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">▄D.520</span>
                  </div>
                  <div className="tree-item-img">
                    <img
                      src="https://encyclopedia.warthunder.com/slots/d_520.png"
                      alt="d_520.png"
                    />
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
                  <div className="tree-item-background" id="D.521 (Great Britain)">
                    <a href="/D.521_(Great_Britain)" title="D.521 (Great Britain)">
                      <img
                        alt="Item own.png"
                        src="/images/Item_own.png"
                        className="tree-item-js"
                        data-file-width={160}
                        data-file-height={48}
                        width={160}
                        height={48}
                      />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">▄D.521</span>
                  </div>
                  <div className="tree-item-img">
                    <img
                      src="https://encyclopedia.warthunder.com/slots/d_521.png"
                      alt="d_521.png"
                    />
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
                  <div className="tree-item-background" id="Firecrest">
                    <a href="/Firecrest" title="Firecrest">
                      <img
                        alt="Item squad.png"
                        src="/images/Item_squad.png"
                        className="tree-item-js"
                        data-file-width={160}
                        data-file-height={48}
                        width={160}
                        height={48}
                      />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">Firecrest</span>
                  </div>
                  <div className="tree-item-img">
                    <img
                      src="https://encyclopedia.warthunder.com/slots/b_48_firecrest.png"
                      alt="b_48_firecrest.png"
                    />
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
                  <div className="tree-item-background" id="Boston Mk I (Great Britain)">
                    <a href="/Boston_Mk_I_(Great_Britain)" title="Boston Mk I (Great Britain)">
                      <img
                        alt="Item prem.png"
                        src="/images/Item_prem.png"
                        className="tree-item-js"
                        data-file-width={160}
                        data-file-height={48}
                        width={160}
                        height={48}
                      />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">▄Boston&nbsp;Mk I</span>
                  </div>
                  <div className="tree-item-img">
                    <img
                      src="https://encyclopedia.warthunder.com/slots/boston_mk_1.png"
                      alt="boston_mk_1.png"
                    />
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
                  <div className="tree-item-background" id="DB-7 (Great Britain)">
                    <a href="/DB-7_(Great_Britain)" title="DB-7 (Great Britain)">
                      <img
                        alt="Item prem.png"
                        src="/images/Item_prem.png"
                        className="tree-item-js"
                        data-file-width={160}
                        data-file-height={48}
                        width={160}
                        height={48}
                      />
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
                      <img
                        alt="Item prem.png"
                        src="/images/Item_prem.png"
                        className="tree-item-js"
                        data-file-width={160}
                        data-file-height={48}
                        width={160}
                        height={48}
                      />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">Hurricane Mk.I/L FAA M</span>
                  </div>
                  <div className="tree-item-img">
                    <img
                      src="https://encyclopedia.warthunder.com/slots/hurricane_mk1_late_ep.png"
                      alt="hurricane_mk1_late_ep.png"
                    />
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
                  <div className="tree-item-background" id="Martlet Mk IV (Great Britain)">
                    <a href="/Martlet_Mk_IV_(Great_Britain)" title="Martlet Mk IV (Great Britain)">
                      <img
                        alt="Item prem.png"
                        src="/images/Item_prem.png"
                        className="tree-item-js"
                        data-file-width={160}
                        data-file-height={48}
                        width={160}
                        height={48}
                      />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">▄Martlet Mk IV</span>
                  </div>
                  <div className="tree-item-img">
                    <img
                      src="https://encyclopedia.warthunder.com/slots/f4f-4_martlet_mk4.png"
                      alt="f4f-4_martlet_mk4.png"
                    />
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
                  <div className="tree-item-background" id="Beaufighter Mk I (40-mm)">
                    <a href="/Beaufighter_Mk_I_(40-mm)" title="Beaufighter Mk I (40-mm)">
                      <img
                        alt="Item prem.png"
                        src="/images/Item_prem.png"
                        className="tree-item-js"
                        data-file-width={160}
                        data-file-height={48}
                        width={160}
                        height={48}
                      />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">Beaufighter Mk I (40-mm)</span>
                  </div>
                  <div className="tree-item-img">
                    <img
                      src="https://encyclopedia.warthunder.com/slots/beaufighter_mk1_40mm.png"
                      alt="beaufighter_mk1_40mm.png"
                    />
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
                  <div className="tree-item-background">
                    <a
                      href="/Boomerang_Mk_I_(Great_Britain)"
                      title="Boomerang Mk I (Great Britain)"
                    >
                      <img
                        alt="Item prem.png"
                        src="/images/Item_prem.png"
                        className="tree-item-js"
                        data-file-width={160}
                        data-file-height={48}
                        width={160}
                        height={48}
                      />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">▄Boomerang&nbsp;Mk&nbsp;I</span>
                  </div>
                  <div className="tree-item-img">
                    <img
                      src="https://encyclopedia.warthunder.com/slots/boomerang_mki.png"
                      alt="boomerang_mki.png"
                    />
                  </div>
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
                      <img
                        alt="Item prem.png"
                        src="/images/Item_prem.png"
                        className="tree-item-js"
                        data-file-width={160}
                        data-file-height={48}
                        width={160}
                        height={48}
                      />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">▄Boomerang&nbsp;Mk&nbsp;II</span>
                  </div>
                  <div className="tree-item-img">
                    <img
                      src="https://encyclopedia.warthunder.com/slots/boomerang_mkii.png"
                      alt="boomerang_mkii.png"
                    />
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
                      <img
                        alt="Item own.png"
                        src="/images/Item_own.png"
                        className="tree-item-js"
                        data-file-width={160}
                        data-file-height={48}
                        width={160}
                        height={48}
                      />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">Typhoon&nbsp;Mk Ib/L</span>
                  </div>
                  <div className="tree-item-img">
                    <img
                      src="https://encyclopedia.warthunder.com/slots/typhoon_mk1b_late.png"
                      alt="typhoon_mk1b_late.png"
                    />
                  </div>
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
                          <img
                            alt="Item own.png"
                            src="/images/Item_own.png"
                            className="tree-item-js"
                            data-file-width={160}
                            data-file-height={48}
                            width={160}
                            height={48}
                          />
                        </a>
                      </div>
                      <div className="tree-item-text">
                        <span className="tree-item-text-scroll">Spitfire&nbsp;Mk&nbsp;Vb/trop</span>
                      </div>
                      <div className="tree-item-img">
                        <img
                          src="https://encyclopedia.warthunder.com/slots/spitfire_mk5b.png"
                          alt="spitfire_mk5b.png"
                        />
                      </div>
                    </div>
                    <div className="tree-arrow">
                      <img src="/images/Arrow-small.png" alt="Arrow.png" />
                    </div>
                    <div className="tree-item">
                      <div className="tree-item-background" id="Spitfire Mk Vb">
                        <a href="/Spitfire_Mk_Vb" title="Spitfire Mk Vb">
                          <img
                            alt="Item own.png"
                            src="/images/Item_own.png"
                            className="tree-item-js"
                            data-file-width={160}
                            data-file-height={48}
                            width={160}
                            height={48}
                          />
                        </a>
                      </div>
                      <div className="tree-item-text">
                        <span className="tree-item-text-scroll">Spitfire&nbsp;Mk&nbsp;Vb</span>
                      </div>
                      <div className="tree-item-img">
                        <img
                          src="https://encyclopedia.warthunder.com/slots/spitfire_mk5b_notrop.png"
                          alt="spitfire_mk5b_notrop.png"
                        />
                      </div>
                    </div>
                    <div className="tree-arrow">
                      <img src="/images/Arrow-small.png" alt="Arrow.png" />
                    </div>
                    <div className="tree-item">
                      <div className="tree-item-background" id="Spitfire Mk Vc/trop">
                        <a href="/Spitfire_Mk_Vc/trop" title="Spitfire Mk Vc/trop">
                          <img
                            alt="Item own.png"
                            src="/images/Item_own.png"
                            className="tree-item-js"
                            data-file-width={160}
                            data-file-height={48}
                            width={160}
                            height={48}
                          />
                        </a>
                      </div>
                      <div className="tree-item-text">
                        <span className="tree-item-text-scroll">Spitfire&nbsp;Mk&nbsp;Vc/trop</span>
                      </div>
                      <div className="tree-item-img">
                        <img
                          src="https://encyclopedia.warthunder.com/slots/spitfire_mk5c.png"
                          alt="spitfire_mk5c.png"
                        />
                      </div>
                    </div>
                    <div className="tree-arrow">
                      <img src="/images/Arrow-small.png" alt="Arrow.png" />
                    </div>
                    <div className="tree-item">
                      <div className="tree-item-background" id="Spitfire Mk Vc">
                        <a href="/Spitfire_Mk_Vc" title="Spitfire Mk Vc">
                          <img
                            alt="Item own.png"
                            src="/images/Item_own.png"
                            className="tree-item-js"
                            data-file-width={160}
                            data-file-height={48}
                            width={160}
                            height={48}
                          />
                        </a>
                      </div>
                      <div className="tree-item-text">
                        <span className="tree-item-text-scroll">Spitfire&nbsp;Mk&nbsp;Vc</span>
                      </div>
                      <div className="tree-item-img">
                        <img
                          src="https://encyclopedia.warthunder.com/slots/spitfire_mk5c_notrop.png"
                          alt="spitfire_mk5c_notrop.png"
                        />
                      </div>
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
                      <img
                        alt="Item own.png"
                        src="/images/Item_own.png"
                        className="tree-item-js"
                        data-file-width={160}
                        data-file-height={48}
                        width={160}
                        height={48}
                      />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">Spitfire F Mk&nbsp;IX</span>
                  </div>
                  <div className="tree-item-img">
                    <img
                      src="https://encyclopedia.warthunder.com/slots/spitfire_ix_early.png"
                      alt="spitfire_ix_early.png"
                    />
                  </div>
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
                          <img
                            alt="Item own.png"
                            src="/images/Item_own.png"
                            className="tree-item-js"
                            data-file-width={160}
                            data-file-height={48}
                            width={160}
                            height={48}
                          />
                        </a>
                      </div>
                      <div className="tree-item-text">
                        <span className="tree-item-text-scroll">Firefly F Mk I</span>
                      </div>
                      <div className="tree-item-img">
                        <img
                          src="https://encyclopedia.warthunder.com/slots/firefly_mk1.png"
                          alt="firefly_mk1.png"
                        />
                      </div>
                    </div>
                    <div className="tree-arrow">
                      <img src="/images/Arrow-small.png" alt="Arrow.png" />
                    </div>
                    <div className="tree-item">
                      <div className="tree-item-background" id="Firefly FR Mk V">
                        <a href="/Firefly_FR_Mk_V" title="Firefly FR Mk V">
                          <img
                            alt="Item own.png"
                            src="/images/Item_own.png"
                            className="tree-item-js"
                            data-file-width={160}
                            data-file-height={48}
                            width={160}
                            height={48}
                          />
                        </a>
                      </div>
                      <div className="tree-item-text">
                        <span className="tree-item-text-scroll">Firefly FR Mk V</span>
                      </div>
                      <div className="tree-item-img">
                        <img
                          src="https://encyclopedia.warthunder.com/slots/firefly_mk5.png"
                          alt="firefly_mk5.png"
                        />
                      </div>
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
                      <img
                        alt="Item own.png"
                        src="/images/Item_own.png"
                        className="tree-item-js"
                        data-file-width={160}
                        data-file-height={48}
                        width={160}
                        height={48}
                      />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">Firebrand TF Mk IV</span>
                  </div>
                  <div className="tree-item-img">
                    <img
                      src="https://encyclopedia.warthunder.com/slots/firebrand_tf4.png"
                      alt="firebrand_tf4.png"
                    />
                  </div>
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
                          <img
                            alt="Item own.png"
                            src="/images/Item_own.png"
                            className="tree-item-js"
                            data-file-width={160}
                            data-file-height={48}
                            width={160}
                            height={48}
                          />
                        </a>
                      </div>
                      <div className="tree-item-text">
                        <span className="tree-item-text-scroll">
                          Mosquito&nbsp;FB&nbsp;Mk&nbsp;VI
                        </span>
                      </div>
                      <div className="tree-item-img">
                        <img
                          src="https://encyclopedia.warthunder.com/slots/mosquito_fb_mk6.png"
                          alt="mosquito_fb_mk6.png"
                        />
                      </div>
                    </div>
                    <div className="tree-arrow">
                      <img src="/images/Arrow-small.png" alt="Arrow.png" />
                    </div>
                    <div className="tree-item">
                      <div className="tree-item-background" id="Mosquito FB Mk XVIII">
                        <a href="/Mosquito_FB_Mk_XVIII" title="Mosquito FB Mk XVIII">
                          <img
                            alt="Item own.png"
                            src="/images/Item_own.png"
                            className="tree-item-js"
                            data-file-width={160}
                            data-file-height={48}
                            width={160}
                            height={48}
                          />
                        </a>
                      </div>
                      <div className="tree-item-text">
                        <span className="tree-item-text-scroll">
                          Mosquito&nbsp;FB&nbsp;Mk&nbsp;XVIII
                        </span>
                      </div>
                      <div className="tree-item-img">
                        <img
                          src="https://encyclopedia.warthunder.com/slots/mosquito_fb_mk18.png"
                          alt="mosquito_fb_mk18.png"
                        />
                      </div>
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
                      <img
                        alt="Item own.png"
                        src="/images/Item_own.png"
                        className="tree-item-js"
                        data-file-width={160}
                        data-file-height={48}
                        width={160}
                        height={48}
                      />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">Beaufighter&nbsp;Mk&nbsp;21</span>
                  </div>
                  <div className="tree-item-img">
                    <img
                      src="https://encyclopedia.warthunder.com/slots/beaufighter_mk21.png"
                      alt="beaufighter_mk21.png"
                    />
                  </div>
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
                      <img
                        alt="Item own.png"
                        src="/images/Item_own.png"
                        className="tree-item-js"
                        data-file-width={160}
                        data-file-height={48}
                        width={160}
                        height={48}
                      />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">Stirling B Mk&nbsp;I</span>
                  </div>
                  <div className="tree-item-img">
                    <img
                      src="https://encyclopedia.warthunder.com/slots/stirling_mk1.png"
                      alt="stirling_mk1.png"
                    />
                  </div>
                </div>
                <div className="tree-arrow">
                  <img src="/images/Arrow-small.png" alt="Arrow.png" />
                </div>
                <div className="tree-item">
                  <div className="tree-item-background" id="Stirling B Mk III">
                    <a href="/Stirling_B_Mk_III" title="Stirling B Mk III">
                      <img
                        alt="Item own.png"
                        src="/images/Item_own.png"
                        className="tree-item-js"
                        data-file-width={160}
                        data-file-height={48}
                        width={160}
                        height={48}
                      />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">Stirling B&nbsp;Mk&nbsp;III</span>
                  </div>
                  <div className="tree-item-img">
                    <img
                      src="https://encyclopedia.warthunder.com/slots/stirling_mk3.png"
                      alt="stirling_mk3.png"
                    />
                  </div>
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
                      <img
                        alt="Item prem.png"
                        src="/images/Item_prem.png"
                        className="tree-item-js"
                        data-file-width={160}
                        data-file-height={48}
                        width={160}
                        height={48}
                      />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">▄Hellcat&nbsp;Mk II</span>
                  </div>
                  <div className="tree-item-img">
                    <img
                      src="https://encyclopedia.warthunder.com/slots/hellcat_fmk1.png"
                      alt="hellcat_fmk1.png"
                    />
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
                  <div className="tree-item-background">
                    <a
                      href="/Thunderbolt_Mk.1_(Great_Britain)"
                      title="Thunderbolt Mk.1 (Great Britain)"
                    >
                      <img
                        alt="Item prem.png"
                        src="/images/Item_prem.png"
                        className="tree-item-js"
                        data-file-width={160}
                        data-file-height={48}
                        width={160}
                        height={48}
                      />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">▄Thunderbolt Mk.1</span>
                  </div>
                  <div className="tree-item-img">
                    <img
                      src="https://encyclopedia.warthunder.com/slots/thunderbolt_mk1.png"
                      alt="thunderbolt_mk1.png"
                    />
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
                  <div className="tree-item-background" id="Mustang Mk IA (Great Britain)">
                    <a href="/Mustang_Mk_IA_(Great_Britain)" title="Mustang Mk IA (Great Britain)">
                      <img
                        alt="Item prem.png"
                        src="/images/Item_prem.png"
                        className="tree-item-js"
                        data-file-width={160}
                        data-file-height={48}
                        width={160}
                        height={48}
                      />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">▄Mustang&nbsp;Mk&nbsp;IA</span>
                  </div>
                  <div className="tree-item-img">
                    <img
                      src="https://encyclopedia.warthunder.com/slots/p-51b.png"
                      alt="p-51b.png"
                    />
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
                  <div className="tree-item-background" id="Typhoon Mk Ib">
                    <a href="/Typhoon_Mk_Ib" title="Typhoon Mk Ib">
                      <img
                        alt="Item prem.png"
                        src="/images/Item_prem.png"
                        className="tree-item-js"
                        data-file-width={160}
                        data-file-height={48}
                        width={160}
                        height={48}
                      />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">Typhoon&nbsp;Mk Ib</span>
                  </div>
                  <div className="tree-item-img">
                    <img
                      src="https://encyclopedia.warthunder.com/slots/typhoon_mk1b.png"
                      alt="typhoon_mk1b.png"
                    />
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
                  <div className="tree-item-background" id="Whirlwind P.9">
                    <a href="/Whirlwind_P.9" title="Whirlwind P.9">
                      <img
                        alt="Item prem.png"
                        src="/images/Item_prem.png"
                        className="tree-item-js"
                        data-file-width={160}
                        data-file-height={48}
                        width={160}
                        height={48}
                      />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">Whirlwind P.9</span>
                  </div>
                  <div className="tree-item-img">
                    <img
                      src="https://encyclopedia.warthunder.com/slots/whirlwind_p9.png"
                      alt="whirlwind_p9.png"
                    />
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
                  <div className="tree-item-background" id="Spitfire F Mk IXc">
                    <a href="/Spitfire_F_Mk_IXc" title="Spitfire F Mk IXc">
                      <img
                        alt="Item prem.png"
                        src="/images/Item_prem.png"
                        className="tree-item-js"
                        data-file-width={160}
                        data-file-height={48}
                        width={160}
                        height={48}
                      />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">Spitfire F&nbsp;Mk&nbsp;IXc</span>
                  </div>
                  <div className="tree-item-img">
                    <img
                      src="https://encyclopedia.warthunder.com/slots/spitfire_mk9c_4cannons.png"
                      alt="spitfire_mk9c_4cannons.png"
                    />
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
                          <img
                            alt="Item own.png"
                            src="/images/Item_own.png"
                            className="tree-item-js"
                            data-file-width={160}
                            data-file-height={48}
                            width={160}
                            height={48}
                          />
                        </a>
                      </div>
                      <div className="tree-item-text">
                        <span className="tree-item-text-scroll">Tempest&nbsp;Mk&nbsp;V</span>
                      </div>
                      <div className="tree-item-img">
                        <img
                          src="https://encyclopedia.warthunder.com/slots/tempest_mkv.png"
                          alt="tempest_mkv.png"
                        />
                      </div>
                    </div>
                    <div className="tree-arrow">
                      <img src="/images/Arrow-small.png" alt="Arrow.png" />
                    </div>
                    <div className="tree-item">
                      <div className="tree-item-background" id="Tempest Mk V (Vickers P)">
                        <a href="/Tempest_Mk_V_(Vickers_P)" title="Tempest Mk V (Vickers P)">
                          <img
                            alt="Item own.png"
                            src="/images/Item_own.png"
                            className="tree-item-js"
                            data-file-width={160}
                            data-file-height={48}
                            width={160}
                            height={48}
                          />
                        </a>
                      </div>
                      <div className="tree-item-text">
                        <span className="tree-item-text-scroll">Tempest Mk V (Vickers P)</span>
                      </div>
                      <div className="tree-item-img">
                        <img
                          src="https://encyclopedia.warthunder.com/slots/tempest_mkv_vikkers.png"
                          alt="tempest_mkv_vikkers.png"
                        />
                      </div>
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
                      <img
                        alt="Item own.png"
                        src="/images/Item_own.png"
                        className="tree-item-js"
                        data-file-width={160}
                        data-file-height={48}
                        width={160}
                        height={48}
                      />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">Tempest&nbsp;Mk&nbsp;II</span>
                  </div>
                  <div className="tree-item-img">
                    <img
                      src="https://encyclopedia.warthunder.com/slots/tempest_mk2.png"
                      alt="tempest_mk2.png"
                    />
                  </div>
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
                      <img
                        alt="Item own.png"
                        src="/images/Item_own.png"
                        className="tree-item-js"
                        data-file-width={160}
                        data-file-height={48}
                        width={160}
                        height={48}
                      />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">Spitfire&nbsp;F Mk&nbsp;XVI</span>
                  </div>
                  <div className="tree-item-img">
                    <img
                      src="https://encyclopedia.warthunder.com/slots/spitfire_xvi.png"
                      alt="spitfire_xvi.png"
                    />
                  </div>
                </div>
                <div className="tree-arrow">
                  <img src="/images/Arrow-small.png" alt="Arrow.png" />
                </div>
                <div className="tree-item">
                  <div className="tree-item-background" id="Spitfire LF Mk IX">
                    <a href="/Spitfire_LF_Mk_IX" title="Spitfire LF Mk IX">
                      <img
                        alt="Item own.png"
                        src="/images/Item_own.png"
                        className="tree-item-js"
                        data-file-width={160}
                        data-file-height={48}
                        width={160}
                        height={48}
                      />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">Spitfire&nbsp;LF Mk&nbsp;IX</span>
                  </div>
                  <div className="tree-item-img">
                    <img
                      src="https://encyclopedia.warthunder.com/slots/spitfire_ix.png"
                      alt="spitfire_ix.png"
                    />
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
                      <div className="tree-item-background" id="Spitfire F Mk XIVe">
                        <a href="/Spitfire_F_Mk_XIVe" title="Spitfire F Mk XIVe">
                          <img
                            alt="Item own.png"
                            src="/images/Item_own.png"
                            className="tree-item-js"
                            data-file-width={160}
                            data-file-height={48}
                            width={160}
                            height={48}
                          />
                        </a>
                      </div>
                      <div className="tree-item-text">
                        <span className="tree-item-text-scroll">Spitfire F Mk XIVe</span>
                      </div>
                      <div className="tree-item-img">
                        <img
                          src="https://encyclopedia.warthunder.com/slots/spitfire_mk14e.png"
                          alt="spitfire_mk14e.png"
                        />
                      </div>
                    </div>
                    <div className="tree-arrow">
                      <img src="/images/Arrow-small.png" alt="Arrow.png" />
                    </div>
                    <div className="tree-item">
                      <div className="tree-item-background" id="Spitfire F Mk XVIIIe">
                        <a href="/Spitfire_F_Mk_XVIIIe" title="Spitfire F Mk XVIIIe">
                          <img
                            alt="Item own.png"
                            src="/images/Item_own.png"
                            className="tree-item-js"
                            data-file-width={160}
                            data-file-height={48}
                            width={160}
                            height={48}
                          />
                        </a>
                      </div>
                      <div className="tree-item-text">
                        <span className="tree-item-text-scroll">Spitfire F Mk XVIIIe</span>
                      </div>
                      <div className="tree-item-img">
                        <img
                          src="https://encyclopedia.warthunder.com/slots/spitfire_mk18e.png"
                          alt="spitfire_mk18e.png"
                        />
                      </div>
                    </div>
                    <div className="tree-arrow">
                      <img src="/images/Arrow-small.png" alt="Arrow.png" />
                    </div>
                    <div className="tree-item">
                      <div className="tree-item-background" id="Spitfire F Mk 22">
                        <a href="/Spitfire_F_Mk_22" title="Spitfire F Mk 22">
                          <img
                            alt="Item own.png"
                            src="/images/Item_own.png"
                            className="tree-item-js"
                            data-file-width={160}
                            data-file-height={48}
                            width={160}
                            height={48}
                          />
                        </a>
                      </div>
                      <div className="tree-item-text">
                        <span className="tree-item-text-scroll">Spitfire F Mk 22</span>
                      </div>
                      <div className="tree-item-img">
                        <img
                          src="https://encyclopedia.warthunder.com/slots/spitfire_f22.png"
                          alt="spitfire_f22.png"
                        />
                      </div>
                    </div>
                    <div className="tree-arrow">
                      <img src="/images/Arrow-small.png" alt="Arrow.png" />
                    </div>
                    <div className="tree-item">
                      <div className="tree-item-background" id="Spitfire F Mk 24">
                        <a href="/Spitfire_F_Mk_24" title="Spitfire F Mk 24">
                          <img
                            alt="Item own.png"
                            src="/images/Item_own.png"
                            className="tree-item-js"
                            data-file-width={160}
                            data-file-height={48}
                            width={160}
                            height={48}
                          />
                        </a>
                      </div>
                      <div className="tree-item-text">
                        <span className="tree-item-text-scroll">Spitfire F Mk 24</span>
                      </div>
                      <div className="tree-item-img">
                        <img
                          src="https://encyclopedia.warthunder.com/slots/spitfire_f24.png"
                          alt="spitfire_f24.png"
                        />
                      </div>
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
                      <img
                        alt="Item own.png"
                        src="/images/Item_own.png"
                        className="tree-item-js"
                        data-file-width={160}
                        data-file-height={48}
                        width={160}
                        height={48}
                      />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">Seafire LF Mk.III</span>
                  </div>
                  <div className="tree-item-img">
                    <img
                      src="https://encyclopedia.warthunder.com/slots/seafire_mk3.png"
                      alt="seafire_mk3.png"
                    />
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
                      <div className="tree-item-background" id="Seafire F Mk XVII">
                        <a href="/Seafire_F_Mk_XVII" title="Seafire F Mk XVII">
                          <img
                            alt="Item own.png"
                            src="/images/Item_own.png"
                            className="tree-item-js"
                            data-file-width={160}
                            data-file-height={48}
                            width={160}
                            height={48}
                          />
                        </a>
                      </div>
                      <div className="tree-item-text">
                        <span className="tree-item-text-scroll">Seafire F Mk XVII</span>
                      </div>
                      <div className="tree-item-img">
                        <img
                          src="https://encyclopedia.warthunder.com/slots/seafire_mk17.png"
                          alt="seafire_mk17.png"
                        />
                      </div>
                    </div>
                    <div className="tree-arrow">
                      <img src="/images/Arrow-small.png" alt="Arrow.png" />
                    </div>
                    <div className="tree-item">
                      <div className="tree-item-background" id="Seafire FR 47">
                        <a href="/Seafire_FR_47" title="Seafire FR 47">
                          <img
                            alt="Item own.png"
                            src="/images/Item_own.png"
                            className="tree-item-js"
                            data-file-width={160}
                            data-file-height={48}
                            width={160}
                            height={48}
                          />
                        </a>
                      </div>
                      <div className="tree-item-text">
                        <span className="tree-item-text-scroll">Seafire FR 47</span>
                      </div>
                      <div className="tree-item-img">
                        <img
                          src="https://encyclopedia.warthunder.com/slots/seafire_fr47.png"
                          alt="seafire_fr47.png"
                        />
                      </div>
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
                      <img
                        alt="Item own.png"
                        src="/images/Item_own.png"
                        className="tree-item-js"
                        data-file-width={160}
                        data-file-height={48}
                        width={160}
                        height={48}
                      />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">Sea Fury FB 11</span>
                  </div>
                  <div className="tree-item-img">
                    <img
                      src="https://encyclopedia.warthunder.com/slots/sea_fury_fb11.png"
                      alt="sea_fury_fb11.png"
                    />
                  </div>
                </div>
                <div className="tree-arrow">
                  <img src="/images/Arrow-small.png" alt="Arrow.png" />
                </div>
              </td>
              <td>
                <div className="tree-item">
                  <div className="tree-item-background" id="Whirlwind Mk I">
                    <a href="/Whirlwind_Mk_I" title="Whirlwind Mk I">
                      <img
                        alt="Item own.png"
                        src="/images/Item_own.png"
                        className="tree-item-js"
                        data-file-width={160}
                        data-file-height={48}
                        width={160}
                        height={48}
                      />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">Whirlwind Mk I</span>
                  </div>
                  <div className="tree-item-img">
                    <img
                      src="https://encyclopedia.warthunder.com/slots/whirlwind_mk1.png"
                      alt="whirlwind_mk1.png"
                    />
                  </div>
                </div>
                <div className="tree-arrow">
                  <img src="/images/Arrow-small.png" alt="Arrow.png" />
                </div>
                <div className="tree-item">
                  <div className="tree-item-background" id="Brigand B 1">
                    <a href="/Brigand_B_1" title="Brigand B 1">
                      <img
                        alt="Item own.png"
                        src="/images/Item_own.png"
                        className="tree-item-js"
                        data-file-width={160}
                        data-file-height={48}
                        width={160}
                        height={48}
                      />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">Brigand B 1</span>
                  </div>
                  <div className="tree-item-img">
                    <img
                      src="https://encyclopedia.warthunder.com/slots/brigand_b1.png"
                      alt="brigand_b1.png"
                    />
                  </div>
                </div>
                <div className="tree-arrow">
                  <img src="/images/Arrow-small.png" alt="Arrow.png" />
                </div>
                <div className="tree-item">
                  <div className="tree-item-background" id="Hornet Mk.III">
                    <a href="/Hornet_Mk.III" title="Hornet Mk.III">
                      <img
                        alt="Item own.png"
                        src="/images/Item_own.png"
                        className="tree-item-js"
                        data-file-width={160}
                        data-file-height={48}
                        width={160}
                        height={48}
                      />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">Hornet Mk.III</span>
                  </div>
                  <div className="tree-item-img">
                    <img
                      src="https://encyclopedia.warthunder.com/slots/hornet_mk3.png"
                      alt="hornet_mk3.png"
                    />
                  </div>
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
                          <img
                            alt="Item own.png"
                            src="/images/Item_own.png"
                            className="tree-item-js"
                            data-file-width={160}
                            data-file-height={48}
                            width={160}
                            height={48}
                          />
                        </a>
                      </div>
                      <div className="tree-item-text">
                        <span className="tree-item-text-scroll">Lancaster B&nbsp;Mk&nbsp;I</span>
                      </div>
                      <div className="tree-item-img">
                        <img
                          src="https://encyclopedia.warthunder.com/slots/lancaster_mk1.png"
                          alt="lancaster_mk1.png"
                        />
                      </div>
                    </div>
                    <div className="tree-arrow">
                      <img src="/images/Arrow-small.png" alt="Arrow.png" />
                    </div>
                    <div className="tree-item">
                      <div className="tree-item-background" id="Lancaster B Mk III">
                        <a href="/Lancaster_B_Mk_III" title="Lancaster B Mk III">
                          <img
                            alt="Item own.png"
                            src="/images/Item_own.png"
                            className="tree-item-js"
                            data-file-width={160}
                            data-file-height={48}
                            width={160}
                            height={48}
                          />
                        </a>
                      </div>
                      <div className="tree-item-text">
                        <span className="tree-item-text-scroll">Lancaster B&nbsp;Mk&nbsp;III</span>
                      </div>
                      <div className="tree-item-img">
                        <img
                          src="https://encyclopedia.warthunder.com/slots/lancaster_mk3.png"
                          alt="lancaster_mk3.png"
                        />
                      </div>
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
                      <img
                        alt="Item own.png"
                        src="/images/Item_own.png"
                        className="tree-item-js"
                        data-file-width={160}
                        data-file-height={48}
                        width={160}
                        height={48}
                      />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">Lincoln B Mk II</span>
                  </div>
                  <div className="tree-item-img">
                    <img
                      src="https://encyclopedia.warthunder.com/slots/lincoln_b2.png"
                      alt="lincoln_b2.png"
                    />
                  </div>
                </div>
                <div className="tree-arrow">
                  <img src="/images/Arrow-small.png" alt="Arrow.png" />
                </div>
                <div className="tree-item">
                  <div className="tree-item-background" id="Shackleton MR.Mk.2">
                    <a href="/Shackleton_MR.Mk.2" title="Shackleton MR.Mk.2">
                      <img
                        alt="Item own.png"
                        src="/images/Item_own.png"
                        className="tree-item-js"
                        data-file-width={160}
                        data-file-height={48}
                        width={160}
                        height={48}
                      />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">Shackleton MR.Mk.2</span>
                  </div>
                  <div className="tree-item-img">
                    <img
                      src="https://encyclopedia.warthunder.com/slots/shackleton_mr_mk_2.png"
                      alt="shackleton_mr_mk_2.png"
                    />
                  </div>
                </div>
                <div className="tree-arrow">
                  <img src="/images/Arrow-small.png" alt="Arrow.png" />
                </div>
              </td>
              <td style={{ borderLeft: "solid 1px #cccccc" }}>
                <div className="tree-item">
                  <div className="tree-item-background" id="MB.5">
                    <a href="/MB.5" title="MB.5">
                      <img
                        alt="Item prem.png"
                        src="/images/Item_prem.png"
                        className="tree-item-js"
                        data-file-width={160}
                        data-file-height={48}
                        width={160}
                        height={48}
                      />
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
                      <img
                        alt="Item prem.png"
                        src="/images/Item_prem.png"
                        className="tree-item-js"
                        data-file-width={160}
                        data-file-height={48}
                        width={160}
                        height={48}
                      />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">Hornet Mk.I</span>
                  </div>
                  <div className="tree-item-img">
                    <img
                      src="https://encyclopedia.warthunder.com/slots/hornet_mk1.png"
                      alt="hornet_mk1.png"
                    />
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
                  <div className="tree-item-background" id="Spitfire F Mk XIVc">
                    <a href="/Spitfire_F_Mk_XIVc" title="Spitfire F Mk XIVc">
                      <img
                        alt="Item prem.png"
                        src="/images/Item_prem.png"
                        className="tree-item-js"
                        data-file-width={160}
                        data-file-height={48}
                        width={160}
                        height={48}
                      />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">Spitfire F Mk XIVc</span>
                  </div>
                  <div className="tree-item-img">
                    <img
                      src="https://encyclopedia.warthunder.com/slots/spitfire_mk14c.png"
                      alt="spitfire_mk14c.png"
                    />
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
                  <div className="tree-item-background" id="Wyvern S4">
                    <a href="/Wyvern_S4" title="Wyvern S4">
                      <img
                        alt="Item prem.png"
                        src="/images/Item_prem.png"
                        className="tree-item-js"
                        data-file-width={160}
                        data-file-height={48}
                        width={160}
                        height={48}
                      />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">Wyvern S4</span>
                  </div>
                  <div className="tree-item-img">
                    <img
                      src="https://encyclopedia.warthunder.com/slots/wyvern_s4.png"
                      alt="wyvern_s4.png"
                    />
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
                  <div className="tree-item-background" id="Spitfire FR Mk XIVe">
                    <a href="/Spitfire_FR_Mk_XIVe" title="Spitfire FR Mk XIVe">
                      <img
                        alt="Item prem.png"
                        src="/images/Item_prem.png"
                        className="tree-item-js"
                        data-file-width={160}
                        data-file-height={48}
                        width={160}
                        height={48}
                      />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">Spitfire FR Mk XIVe</span>
                  </div>
                  <div className="tree-item-img">
                    <img
                      src="https://encyclopedia.warthunder.com/slots/spitfire_fr_mk14e.png"
                      alt="spitfire_fr_mk14e.png"
                    />
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
                  <div className="tree-item-background" id="Plagis' Spitfire LF Mk IXc">
                    <a href="/Plagis%27_Spitfire_LF_Mk_IXc" title="Plagis' Spitfire LF Mk IXc">
                      <img
                        alt="Item prem.png"
                        src="/images/Item_prem.png"
                        className="tree-item-js"
                        data-file-width={160}
                        data-file-height={48}
                        width={160}
                        height={48}
                      />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">
                      Plagis&apos; Spitfire&nbsp;LF Mk&nbsp;IXc
                    </span>
                  </div>
                  <div className="tree-item-img">
                    <img
                      src="https://encyclopedia.warthunder.com/slots/spitfire_ix_plagis.png"
                      alt="spitfire_ix_plagis.png"
                    />
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
                      <img
                        alt="Item own.png"
                        src="/images/Item_own.png"
                        className="tree-item-js"
                        data-file-width={160}
                        data-file-height={48}
                        width={160}
                        height={48}
                      />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">Vampire FB 5</span>
                  </div>
                  <div className="tree-item-img">
                    <img
                      src="https://encyclopedia.warthunder.com/slots/vampire_fb5.png"
                      alt="vampire_fb5.png"
                    />
                  </div>
                </div>
                <div className="tree-arrow">
                  <img src="/images/Arrow-small.png" alt="Arrow.png" />
                </div>
                <div className="tree-item">
                  <div className="tree-item-background" id="Venom FB.4">
                    <a href="/Venom_FB.4" title="Venom FB.4">
                      <img
                        alt="Item own.png"
                        src="/images/Item_own.png"
                        className="tree-item-js"
                        data-file-width={160}
                        data-file-height={48}
                        width={160}
                        height={48}
                      />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">Venom FB.4</span>
                  </div>
                  <div className="tree-item-img">
                    <img
                      src="https://encyclopedia.warthunder.com/slots/venom_fb4.png"
                      alt="venom_fb4.png"
                    />
                  </div>
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
                          <img
                            alt="Item own.png"
                            src="/images/Item_own.png"
                            className="tree-item-js"
                            data-file-width={160}
                            data-file-height={48}
                            width={160}
                            height={48}
                          />
                        </a>
                      </div>
                      <div className="tree-item-text">
                        <span className="tree-item-text-scroll">Meteor F Mk 3</span>
                      </div>
                      <div className="tree-item-img">
                        <img
                          src="https://encyclopedia.warthunder.com/slots/meteor_fmk3.png"
                          alt="meteor_fmk3.png"
                        />
                      </div>
                    </div>
                    <div className="tree-arrow">
                      <img src="/images/Arrow-small.png" alt="Arrow.png" />
                    </div>
                    <div className="tree-item">
                      <div className="tree-item-background" id="Sea Meteor F Mk 3">
                        <a href="/Sea_Meteor_F_Mk_3" title="Sea Meteor F Mk 3">
                          <img
                            alt="Item own.png"
                            src="/images/Item_own.png"
                            className="tree-item-js"
                            data-file-width={160}
                            data-file-height={48}
                            width={160}
                            height={48}
                          />
                        </a>
                      </div>
                      <div className="tree-item-text">
                        <span className="tree-item-text-scroll">Sea&nbsp;Meteor F Mk 3</span>
                      </div>
                      <div className="tree-item-img">
                        <img
                          src="https://encyclopedia.warthunder.com/slots/meteor_fmk3_navy.png"
                          alt="meteor_fmk3_navy.png"
                        />
                      </div>
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
                          <img
                            alt="Item own.png"
                            src="/images/Item_own.png"
                            className="tree-item-js"
                            data-file-width={160}
                            data-file-height={48}
                            width={160}
                            height={48}
                          />
                        </a>
                      </div>
                      <div className="tree-item-text">
                        <span className="tree-item-text-scroll">Meteor&nbsp;F Mk 4 G.41F</span>
                      </div>
                      <div className="tree-item-img">
                        <img
                          src="https://encyclopedia.warthunder.com/slots/meteor_fmk4_lw.png"
                          alt="meteor_fmk4_lw.png"
                        />
                      </div>
                    </div>
                    <div className="tree-arrow">
                      <img src="/images/Arrow-small.png" alt="Arrow.png" />
                    </div>
                    <div className="tree-item">
                      <div className="tree-item-background" id="Meteor F Mk 4 G.41G">
                        <a href="/Meteor_F_Mk_4_G.41G" title="Meteor F Mk 4 G.41G">
                          <img
                            alt="Item own.png"
                            src="/images/Item_own.png"
                            className="tree-item-js"
                            data-file-width={160}
                            data-file-height={48}
                            width={160}
                            height={48}
                          />
                        </a>
                      </div>
                      <div className="tree-item-text">
                        <span className="tree-item-text-scroll">Meteor&nbsp;F Mk 4 G.41G</span>
                      </div>
                      <div className="tree-item-img">
                        <img
                          src="https://encyclopedia.warthunder.com/slots/meteor_fmk4_sw.png"
                          alt="meteor_fmk4_sw.png"
                        />
                      </div>
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
                      <img
                        alt="Item own.png"
                        src="/images/Item_own.png"
                        className="tree-item-js"
                        data-file-width={160}
                        data-file-height={48}
                        width={160}
                        height={48}
                      />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">Meteor&nbsp;F Mk 8 G.41K</span>
                  </div>
                  <div className="tree-item-img">
                    <img
                      src="https://encyclopedia.warthunder.com/slots/meteor_fmk8.png"
                      alt="meteor_fmk8.png"
                    />
                  </div>
                </div>
                <div className="tree-arrow">
                  <img src="/images/Arrow-small.png" alt="Arrow.png" />
                </div>
              </td>
              <td>
                <div className="tree-item">
                  <div className="tree-item-background" id="Attacker FB 1">
                    <a href="/Attacker_FB_1" title="Attacker FB 1">
                      <img
                        alt="Item own.png"
                        src="/images/Item_own.png"
                        className="tree-item-js"
                        data-file-width={160}
                        data-file-height={48}
                        width={160}
                        height={48}
                      />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">Attacker FB 1</span>
                  </div>
                  <div className="tree-item-img">
                    <img
                      src="https://encyclopedia.warthunder.com/slots/attaker_fb1.png"
                      alt="attaker_fb1.png"
                    />
                  </div>
                </div>
                <div className="tree-arrow">
                  <img src="/images/Arrow-small.png" alt="Arrow.png" />
                </div>
                <div className="tree-item">
                  <div className="tree-item-background" id="Sea Hawk FGA.6">
                    <a href="/Sea_Hawk_FGA.6" title="Sea Hawk FGA.6">
                      <img
                        alt="Item own.png"
                        src="/images/Item_own.png"
                        className="tree-item-js"
                        data-file-width={160}
                        data-file-height={48}
                        width={160}
                        height={48}
                      />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">Sea Hawk FGA.6</span>
                  </div>
                  <div className="tree-item-img">
                    <img
                      src="https://encyclopedia.warthunder.com/slots/sea_hawk_fga6.png"
                      alt="sea_hawk_fga6.png"
                    />
                  </div>
                </div>
                <div className="tree-arrow">
                  <img src="/images/Arrow-small.png" alt="Arrow.png" />
                </div>
                <div className="tree-item">
                  <div className="tree-item-background" id="Sea Venom FAW 20">
                    <a href="/Sea_Venom_FAW_20" title="Sea Venom FAW 20">
                      <img
                        alt="Item own.png"
                        src="/images/Item_own.png"
                        className="tree-item-js"
                        data-file-width={160}
                        data-file-height={48}
                        width={160}
                        height={48}
                      />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">Sea Venom FAW 20</span>
                  </div>
                  <div className="tree-item-img">
                    <img
                      src="https://encyclopedia.warthunder.com/slots/sea_venom_faw20.png"
                      alt="sea_venom_faw20.png"
                    />
                  </div>
                </div>
                <div className="tree-arrow">
                  <img src="/images/Arrow-small.png" alt="Arrow.png" />
                </div>
              </td>
              <td>
                <div className="tree-item">
                  <div className="tree-item-background" id="Swift F.1">
                    <a href="/Swift_F.1" title="Swift F.1">
                      <img
                        alt="Item own.png"
                        src="/images/Item_own.png"
                        className="tree-item-js"
                        data-file-width={160}
                        data-file-height={48}
                        width={160}
                        height={48}
                      />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">Swift F.1</span>
                  </div>
                  <div className="tree-item-img">
                    <img
                      src="https://encyclopedia.warthunder.com/slots/swift_f1.png"
                      alt="swift_f1.png"
                    />
                  </div>
                </div>
                <div className="tree-arrow">
                  <img src="/images/Arrow-small.png" alt="Arrow.png" />
                </div>
                <div className="tree-item">
                  <div className="tree-item-background" id="Swift F.7">
                    <a href="/Swift_F.7" title="Swift F.7">
                      <img
                        alt="Item own.png"
                        src="/images/Item_own.png"
                        className="tree-item-js"
                        data-file-width={160}
                        data-file-height={48}
                        width={160}
                        height={48}
                      />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">Swift F.7</span>
                  </div>
                  <div className="tree-item-img">
                    <img
                      src="https://encyclopedia.warthunder.com/slots/swift_f7.png"
                      alt="swift_f7.png"
                    />
                  </div>
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
                      <img
                        alt="Item own.png"
                        src="/images/Item_own.png"
                        className="tree-item-js"
                        data-file-width={160}
                        data-file-height={48}
                        width={160}
                        height={48}
                      />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">Canberra B Mk 2</span>
                  </div>
                  <div className="tree-item-img">
                    <img
                      src="https://encyclopedia.warthunder.com/slots/canberra_bmk2.png"
                      alt="canberra_bmk2.png"
                    />
                  </div>
                </div>
                <div className="tree-arrow">
                  <img src="/images/Arrow-small.png" alt="Arrow.png" />
                </div>
                <div className="tree-item">
                  <div className="tree-item-background" id="Canberra B (I) Mk 6">
                    <a href="/Canberra_B_(I)_Mk_6" title="Canberra B (I) Mk 6">
                      <img
                        alt="Item own.png"
                        src="/images/Item_own.png"
                        className="tree-item-js"
                        data-file-width={160}
                        data-file-height={48}
                        width={160}
                        height={48}
                      />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">Canberra B (I) Mk 6</span>
                  </div>
                  <div className="tree-item-img">
                    <img
                      src="https://encyclopedia.warthunder.com/slots/canberra_bimk6.png"
                      alt="canberra_bimk6.png"
                    />
                  </div>
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
                      <img
                        alt="Item prem.png"
                        src="/images/Item_prem.png"
                        className="tree-item-js"
                        data-file-width={160}
                        data-file-height={48}
                        width={160}
                        height={48}
                      />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">Attacker FB.2</span>
                  </div>
                  <div className="tree-item-img">
                    <img
                      src="https://encyclopedia.warthunder.com/slots/attaker_fb2.png"
                      alt="attaker_fb2.png"
                    />
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
                  <div className="tree-item-background" id="Meteor F Mk.8 Reaper">
                    <a href="/Meteor_F_Mk.8_Reaper" title="Meteor F Mk.8 Reaper">
                      <img
                        alt="Item prem.png"
                        src="/images/Item_prem.png"
                        className="tree-item-js"
                        data-file-width={160}
                        data-file-height={48}
                        width={160}
                        height={48}
                      />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">Meteor&nbsp;F Mk.8 Reaper</span>
                  </div>
                  <div className="tree-item-img">
                    <img
                      src="https://encyclopedia.warthunder.com/slots/meteor_fmk8_reaper.png"
                      alt="meteor_fmk8_reaper.png"
                    />
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
                  <div className="tree-item-background" id="Sea Vixen F.A.W. Mk.2">
                    <a href="/Sea_Vixen_F.A.W._Mk.2" title="Sea Vixen F.A.W. Mk.2">
                      <img
                        alt="Item prem.png"
                        src="/images/Item_prem.png"
                        className="tree-item-js"
                        data-file-width={160}
                        data-file-height={48}
                        width={160}
                        height={48}
                      />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">Sea Vixen F.A.W. Mk.2</span>
                  </div>
                  <div className="tree-item-img">
                    <img
                      src="https://encyclopedia.warthunder.com/slots/dh_110_sea_vixen.png"
                      alt="dh_110_sea_vixen.png"
                    />
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
                  <div className="tree-item-background" id="Hunter FGA.9">
                    <a href="/Hunter_FGA.9" title="Hunter FGA.9">
                      <img
                        alt="Item prem.png"
                        src="/images/Item_prem.png"
                        className="tree-item-js"
                        data-file-width={160}
                        data-file-height={48}
                        width={160}
                        height={48}
                      />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">Hunter FGA.9</span>
                  </div>
                  <div className="tree-item-img">
                    <img
                      src="https://encyclopedia.warthunder.com/slots/hunter_f9_rhodesia.png"
                      alt="hunter_f9_rhodesia.png"
                    />
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
                      <img
                        alt="Item own.png"
                        src="/images/Item_own.png"
                        className="tree-item-js"
                        data-file-width={160}
                        data-file-height={48}
                        width={160}
                        height={48}
                      />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">Hunter F.1</span>
                  </div>
                  <div className="tree-item-img">
                    <img
                      src="https://encyclopedia.warthunder.com/slots/hunter_f1.png"
                      alt="hunter_f1.png"
                    />
                  </div>
                </div>
                <div className="tree-arrow">
                  <img src="/images/Arrow-small.png" alt="Arrow.png" />
                </div>
                <div className="tree-item">
                  <div className="tree-item-background" id="Hunter F.6">
                    <a href="/Hunter_F.6" title="Hunter F.6">
                      <img
                        alt="Item own.png"
                        src="/images/Item_own.png"
                        className="tree-item-js"
                        data-file-width={160}
                        data-file-height={48}
                        width={160}
                        height={48}
                      />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">Hunter F.6</span>
                  </div>
                  <div className="tree-item-img">
                    <img
                      src="https://encyclopedia.warthunder.com/slots/hunter_f6.png"
                      alt="hunter_f6.png"
                    />
                  </div>
                </div>
                <div className="tree-arrow">
                  <img src="/images/Arrow-small.png" alt="Arrow.png" />
                </div>
              </td>
              <td>
                <div className="tree-item">
                  <div className="tree-item-background" id="Javelin F.(A.W.) Mk.9">
                    <a href="/Javelin_F.(A.W.)_Mk.9" title="Javelin F.(A.W.) Mk.9">
                      <img
                        alt="Item own.png"
                        src="/images/Item_own.png"
                        className="tree-item-js"
                        data-file-width={160}
                        data-file-height={48}
                        width={160}
                        height={48}
                      />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">Javelin F.(A.W.) Mk.9</span>
                  </div>
                  <div className="tree-item-img">
                    <img
                      src="https://encyclopedia.warthunder.com/slots/javelin_fmk9.png"
                      alt="javelin_fmk9.png"
                    />
                  </div>
                </div>
                <div className="tree-arrow">
                  <img src="/images/Arrow-small.png" alt="Arrow.png" />
                </div>
                <div className="tree-item">
                  <div className="tree-item-background" id="Lightning F.6">
                    <a href="/Lightning_F.6" title="Lightning F.6">
                      <img
                        alt="Item own.png"
                        src="/images/Item_own.png"
                        className="tree-item-js"
                        data-file-width={160}
                        data-file-height={48}
                        width={160}
                        height={48}
                      />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">Lightning F.6</span>
                  </div>
                  <div className="tree-item-img">
                    <img
                      src="https://encyclopedia.warthunder.com/slots/lightning_f6.png"
                      alt="lightning_f6.png"
                    />
                  </div>
                </div>
              </td>
              <td>
                <div className="tree-item">
                  <div className="tree-item-background" id="Scimitar F Mk.1">
                    <a href="/Scimitar_F_Mk.1" title="Scimitar F Mk.1">
                      <img
                        alt="Item own.png"
                        src="/images/Item_own.png"
                        className="tree-item-js"
                        data-file-width={160}
                        data-file-height={48}
                        width={160}
                        height={48}
                      />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">Scimitar F Mk.1</span>
                  </div>
                  <div className="tree-item-img">
                    <img
                      src="https://encyclopedia.warthunder.com/slots/scimitar_f1.png"
                      alt="scimitar_f1.png"
                    />
                  </div>
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
                      <img
                        alt="Item own.png"
                        src="/images/Item_own.png"
                        className="tree-item-js"
                        data-file-width={160}
                        data-file-height={48}
                        width={160}
                        height={48}
                      />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">Harrier GR.3</span>
                  </div>
                  <div className="tree-item-img">
                    <img
                      src="https://encyclopedia.warthunder.com/slots/harrier_gr3.png"
                      alt="harrier_gr3.png"
                    />
                  </div>
                </div>
                <div className="tree-arrow">
                  <img src="/images/Arrow-small.png" alt="Arrow.png" />
                </div>
                <div className="tree-item">
                  <div className="tree-item-background" id="Jaguar GR.1">
                    <a href="/Jaguar_GR.1" title="Jaguar GR.1">
                      <img
                        alt="Item own.png"
                        src="/images/Item_own.png"
                        className="tree-item-js"
                        data-file-width={160}
                        data-file-height={48}
                        width={160}
                        height={48}
                      />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">Jaguar GR.1</span>
                  </div>
                  <div className="tree-item-img">
                    <img
                      src="https://encyclopedia.warthunder.com/slots/jaguar_gr1.png"
                      alt="jaguar_gr1.png"
                    />
                  </div>
                </div>
                <div className="tree-arrow">
                  <img src="/images/Arrow-small.png" alt="Arrow.png" />
                </div>
              </td>
              <td>
                <div className="tree-item">
                  <div className="tree-item-background" id="Buccaneer S.2">
                    <a href="/Buccaneer_S.2" title="Buccaneer S.2">
                      <img
                        alt="Item own.png"
                        src="/images/Item_own.png"
                        className="tree-item-js"
                        data-file-width={160}
                        data-file-height={48}
                        width={160}
                        height={48}
                      />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">Buccaneer S.2</span>
                  </div>
                  <div className="tree-item-img">
                    <img
                      src="https://encyclopedia.warthunder.com/slots/buccaneer_s2.png"
                      alt="buccaneer_s2.png"
                    />
                  </div>
                </div>
              </td>
              <td style={{ borderLeft: "solid 1px #cccccc" }}>
                <div className="tree-item">
                  <div className="tree-item-background" id="Harrier GR.1">
                    <a href="/Harrier_GR.1" title="Harrier GR.1">
                      <img
                        alt="Item prem.png"
                        src="/images/Item_prem.png"
                        className="tree-item-js"
                        data-file-width={160}
                        data-file-height={48}
                        width={160}
                        height={48}
                      />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">Harrier GR.1</span>
                  </div>
                  <div className="tree-item-img">
                    <img
                      src="https://encyclopedia.warthunder.com/slots/harrier_gr1.png"
                      alt="harrier_gr1.png"
                    />
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
                  <div className="tree-item-background" id="Lightning F.53">
                    <a href="/Lightning_F.53" title="Lightning F.53">
                      <img
                        alt="Item prem.png"
                        src="/images/Item_prem.png"
                        className="tree-item-js"
                        data-file-width={160}
                        data-file-height={48}
                        width={160}
                        height={48}
                      />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">Lightning F.53</span>
                  </div>
                  <div className="tree-item-img">
                    <img
                      src="https://encyclopedia.warthunder.com/slots/lightning_f53.png"
                      alt="lightning_f53.png"
                    />
                  </div>
                </div>
              </td>
              <td>
                <div className="tree-item">
                  <div className="tree-item-background" id="Buccaneer S.1">
                    <a href="/Buccaneer_S.1" title="Buccaneer S.1">
                      <img
                        alt="Item own.png"
                        src="/images/Item_own.png"
                        className="tree-item-js"
                        data-file-width={160}
                        data-file-height={48}
                        width={160}
                        height={48}
                      />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">Buccaneer S.1</span>
                  </div>
                  <div className="tree-item-img">
                    <img
                      src="https://encyclopedia.warthunder.com/slots/buccaneer_s1.png"
                      alt="buccaneer_s1.png"
                    />
                  </div>
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
                      <img
                        alt="Item own.png"
                        src="/images/Item_own.png"
                        className="tree-item-js"
                        data-file-width={160}
                        data-file-height={48}
                        width={160}
                        height={48}
                      />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">Phantom FGR.2</span>
                  </div>
                  <div className="tree-item-img">
                    <img
                      src="https://encyclopedia.warthunder.com/slots/f-4m_fgr2.png"
                      alt="f-4m_fgr2.png"
                    />
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
                      <img
                        alt="Item own.png"
                        src="/images/Item_own.png"
                        className="tree-item-js"
                        data-file-width={160}
                        data-file-height={48}
                        width={160}
                        height={48}
                      />
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
                      <img
                        alt="Item own.png"
                        src="/images/Item_own.png"
                        className="tree-item-js"
                        data-file-width={160}
                        data-file-height={48}
                        width={160}
                        height={48}
                      />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">Jaguar GR.1A</span>
                  </div>
                  <div className="tree-item-img">
                    <img
                      src="https://encyclopedia.warthunder.com/slots/jaguar_gr1a.png"
                      alt="jaguar_gr1a.png"
                    />
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
