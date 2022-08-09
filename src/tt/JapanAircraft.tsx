import { openfolder } from ".";
import { Item_own, TechTreeImg, Item_prem } from "../TechTree";

export function JapanAircraft() {
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
                  <div className="tree-item-background" id="A5M4">
                    <a href="/A5M4" title="A5M4">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">A5M4</span>
                  </div>
                  <div className="tree-item-img">
                    <img src="https://encyclopedia.warthunder.com/slots/a5m4.png" alt="a5m4.png" />
                  </div>
                </div>
              </td>
              <td>
                <div style={{ position: "relative" }}>
                  <div
                    className="tree-group-collapse"
                    style={{ display: "none", position: "absolute" }}
                  >
                    <div className="tree-item">
                      <div className="tree-item-background" id="Ki-10-I">
                        <a href="/Ki-10-I" title="Ki-10-I">
                          <Item_own />
                        </a>
                      </div>
                      <div className="tree-item-text">
                        <span className="tree-item-text-scroll">Ki-10-I</span>
                      </div>
                      <TechTreeImg vehicle="ki_10_1" type="aircraft" />
                    </div>
                    <div className="tree-arrow">
                      <img src="/images/Arrow-small.png" alt="Arrow.png" />
                    </div>
                    <div className="tree-item">
                      <div className="tree-item-background" id="Ki-10-II">
                        <a href="/Ki-10-II" title="Ki-10-II">
                          <Item_own />
                        </a>
                      </div>
                      <div className="tree-item-text">
                        <span className="tree-item-text-scroll">Ki-10-II</span>
                      </div>
                      <TechTreeImg vehicle="ki_10_2" type="aircraft" />
                    </div>
                    <div className="tree-arrow">
                      <img src="/images/Arrow-small.png" alt="Arrow.png" />
                    </div>
                    <div className="tree-item">
                      <div className="tree-item-background" id="Ki-10-I C">
                        <a href="/Ki-10-I_C" title="Ki-10-I C">
                          <Item_own />
                        </a>
                      </div>
                      <div className="tree-item-text">
                        <span className="tree-item-text-scroll">Ki-10-I&nbsp;C</span>
                      </div>
                      <TechTreeImg vehicle="ki_10_1_commander" type="aircraft" />
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
                      <div className="tree-item-background" id="Ki-10-II C">
                        <a href="/Ki-10-II_C" title="Ki-10-II C">
                          <Item_own />
                        </a>
                      </div>
                      <div className="tree-item-text">
                        <span className="tree-item-text-scroll">Ki-10-II&nbsp;C</span>
                      </div>
                      <TechTreeImg vehicle="ki_10_2_commander" type="aircraft" />
                    </div>
                  </div>
                  <div
                    className="tree-group"
                    onClick={(event) => {
                      openfolder(event);
                    }}
                  >
                    <div className="tree-group-text">
                      <span className="tree-item-text-scroll">Ki-10</span>
                    </div>
                    <div className="tree-group-img">
                      <img
                        src="https://encyclopedia.warthunder.com/slots/ki-10_group.png"
                        alt="ki-10_group.png"
                      />
                    </div>
                  </div>
                </div>
                <div className="tree-arrow">
                  <img src="/images/Arrow-small.png" alt="Arrow.png" />
                </div>
                <div className="tree-item">
                  <div className="tree-item-background" id="Ki-27 otsu">
                    <a href="/Ki-27_otsu" title="Ki-27 otsu">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">Ki-27 otsu</span>
                  </div>
                  <TechTreeImg vehicle="ki-27_otsu" type="aircraft" />
                </div>
              </td>
              <td>
                <div className="tree-item">
                  <div className="tree-item-background" id="Ki-32">
                    <a href="/Ki-32" title="Ki-32">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">Ki-32</span>
                  </div>
                  <TechTreeImg vehicle="ki_32" type="aircraft" />
                </div>
                <div className="tree-arrow">
                  <img src="/images/Arrow-small.png" alt="Arrow.png" />
                </div>
                <div className="tree-item">
                  <div className="tree-item-background" id="Ki-45 tei">
                    <a href="/Ki-45_tei" title="Ki-45 tei">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">Ki-45&nbsp;tei</span>
                  </div>
                  <TechTreeImg vehicle="ki-45_tei" type="aircraft" />
                </div>
                <div className="tree-arrow">
                  <img src="/images/Arrow-small.png" alt="Arrow.png" />
                </div>
                <div className="tree-item">
                  <div className="tree-item-background" id="J1N1">
                    <a href="/J1N1" title="J1N1">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">J1N1</span>
                  </div>
                  <TechTreeImg vehicle="j1n1_mod11_early" type="aircraft" />
                </div>
                <div className="tree-arrow">
                  <img src="/images/Arrow-small.png" alt="Arrow.png" />
                </div>
              </td>
              <td>
                <div className="tree-item">
                  <div className="tree-item-background" id="B5N2">
                    <a href="/B5N2" title="B5N2">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">B5N2</span>
                  </div>
                  <div className="tree-item-img">
                    <img src="https://encyclopedia.warthunder.com/slots/b5n2.png" alt="b5n2.png" />
                  </div>
                </div>
                <div className="tree-arrow">
                  <img src="/images/Arrow-small.png" alt="Arrow.png" />
                </div>
                <div className="tree-item">
                  <div className="tree-item-background" id="D3A1">
                    <a href="/D3A1" title="D3A1">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">D3A1</span>
                  </div>
                  <div className="tree-item-img">
                    <img src="https://encyclopedia.warthunder.com/slots/d3a1.png" alt="d3a1.png" />
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
                  <div className="tree-item-background" id="F1M2">
                    <a href="/F1M2" title="F1M2">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">F1M2</span>
                  </div>
                  <div className="tree-item-img">
                    <img src="https://encyclopedia.warthunder.com/slots/f1m2.png" alt="f1m2.png" />
                  </div>
                </div>
                <div className="tree-arrow">
                  <img src="/images/Arrow-small.png" alt="Arrow.png" />
                </div>
                <div className="tree-item">
                  <div className="tree-item-background" id="Ki-21-Ia">
                    <a href="/Ki-21-Ia" title="Ki-21-Ia">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">Ki-21-Ia</span>
                  </div>
                  <TechTreeImg vehicle="ki_21_1ko" type="aircraft" />
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
                      <div className="tree-item-background" id="H6K4">
                        <a href="/H6K4" title="H6K4">
                          <Item_own />
                        </a>
                      </div>
                      <div className="tree-item-text">
                        <span className="tree-item-text-scroll">H6K4</span>
                      </div>
                      <TechTreeImg vehicle="h6k4" type="aircraft" />
                    </div>
                    <div className="tree-arrow">
                      <img src="/images/Arrow-small.png" alt="Arrow.png" />
                    </div>
                    <div className="tree-item">
                      <div className="tree-item-background" id="H8K2">
                        <a href="/H8K2" title="H8K2">
                          <Item_own />
                        </a>
                      </div>
                      <div className="tree-item-text">
                        <span className="tree-item-text-scroll">H8K2</span>
                      </div>
                      <TechTreeImg vehicle="h8k2" type="aircraft" />
                    </div>
                  </div>
                  <div
                    className="tree-group"
                    onClick={(event) => {
                      openfolder(event);
                    }}
                  >
                    <div className="tree-group-text">
                      <span className="tree-item-text-scroll">H6K/H8K</span>
                    </div>
                    <div className="tree-group-img">
                      <img
                        src="https://encyclopedia.warthunder.com/slots/h6k_h8k_group.png"
                        alt="h6k_h8k_group.png"
                      />
                    </div>
                  </div>
                </div>
                <div className="tree-arrow">
                  <img src="/images/Arrow-small.png" alt="Arrow.png" />
                </div>
              </td>
              <td style={{ borderLeft: "solid 1px #cccccc" }}>
                <div className="tree-item">
                  <div className="tree-item-background" id="Hagiri's A5M4">
                    <a href="/Hagiri%27s_A5M4" title="Hagiri's A5M4">
                      <Item_prem />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">Hagiri&apos;s A5M4</span>
                  </div>
                  <TechTreeImg vehicle="a5m4_hagiri" type="aircraft" />
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
                  <div className="tree-item-background" id="Ki-27 otsu Tachiarai">
                    <a href="/Ki-27_otsu_Tachiarai" title="Ki-27 otsu Tachiarai">
                      <Item_prem />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">Ki-27 otsu Tachiarai</span>
                  </div>
                  <TechTreeImg vehicle="ki-27_otsu_ep" type="aircraft" />
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
                  <div className="tree-item-background" id="Ki-21-I hei">
                    <a href="/Ki-21-I_hei" title="Ki-21-I hei">
                      <Item_prem />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">Ki-21-I hei</span>
                  </div>
                  <TechTreeImg vehicle="ki_21_1hei" type="aircraft" />
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
                  <div className="tree-item-background" id="A7He1">
                    <a href="/A7He1" title="A7He1">
                      <Item_prem />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">A7He1</span>
                  </div>
                  <TechTreeImg vehicle="a7he1" type="aircraft" />
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
                      <div className="tree-item-background" id="A6M2-N">
                        <a href="/A6M2-N" title="A6M2-N">
                          <Item_own />
                        </a>
                      </div>
                      <div className="tree-item-text">
                        <span className="tree-item-text-scroll">A6M2-N</span>
                      </div>
                      <TechTreeImg vehicle="a6m2_n_zero" type="aircraft" />
                    </div>
                    <div className="tree-arrow">
                      <img src="/images/Arrow-small.png" alt="Arrow.png" />
                    </div>
                    <div className="tree-item">
                      <div className="tree-item-background" id="N1K1">
                        <a href="/N1K1" title="N1K1">
                          <Item_own />
                        </a>
                      </div>
                      <div className="tree-item-text">
                        <span className="tree-item-text-scroll">N1K1</span>
                      </div>
                      <TechTreeImg vehicle="n1k1_kyuofu" type="aircraft" />
                    </div>
                  </div>
                  <div
                    className="tree-group"
                    onClick={(event) => {
                      openfolder(event);
                    }}
                  >
                    <div className="tree-group-text">
                      <span className="tree-item-text-scroll">A6M2/N1K1</span>
                    </div>
                    <div className="tree-group-img">
                      <img
                        src="https://encyclopedia.warthunder.com/slots/a6m2_n1k1_group.png"
                        alt="a6m2_n1k1_group.png"
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
                      <div className="tree-item-background" id="A6M2 mod. 11">
                        <a href="/A6M2_mod._11" title="A6M2 mod. 11">
                          <Item_own />
                        </a>
                      </div>
                      <div className="tree-item-text">
                        <span className="tree-item-text-scroll">A6M2 mod. 11</span>
                      </div>
                      <TechTreeImg vehicle="a6m2_mod11" type="aircraft" />
                    </div>
                    <div className="tree-arrow">
                      <img src="/images/Arrow-small.png" alt="Arrow.png" />
                    </div>
                    <div className="tree-item">
                      <div className="tree-item-background" id="A6M2">
                        <a href="/A6M2" title="A6M2">
                          <Item_own />
                        </a>
                      </div>
                      <div className="tree-item-text">
                        <span className="tree-item-text-scroll">A6M2</span>
                      </div>
                      <TechTreeImg vehicle="a6m2_zero" type="aircraft" />
                    </div>
                  </div>
                  <div
                    className="tree-group"
                    onClick={(event) => {
                      openfolder(event);
                    }}
                  >
                    <div className="tree-group-text">
                      <span className="tree-item-text-scroll">A6M2</span>
                    </div>
                    <div className="tree-group-img">
                      <img
                        src="https://encyclopedia.warthunder.com/slots/a6m2_group.png"
                        alt="a6m2_group.png"
                      />
                    </div>
                  </div>
                </div>
                <div className="tree-arrow">
                  <img src="/images/Arrow-small.png" alt="Arrow.png" />
                </div>
                <div className="tree-item">
                  <div className="tree-item-background" id="J2M2">
                    <a href="/J2M2" title="J2M2">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">J2M2</span>
                  </div>
                  <div className="tree-item-img">
                    <img src="https://encyclopedia.warthunder.com/slots/j2m2.png" alt="j2m2.png" />
                  </div>
                </div>
              </td>
              <td>
                <div style={{ position: "relative" }}>
                  <div
                    className="tree-group-collapse"
                    style={{ display: "none", position: "absolute" }}
                  >
                    <div className="tree-item">
                      <div className="tree-item-background" id="Ki-43-I">
                        <a href="/Ki-43-I" title="Ki-43-I">
                          <Item_own />
                        </a>
                      </div>
                      <div className="tree-item-text">
                        <span className="tree-item-text-scroll">Ki-43-I</span>
                      </div>
                      <TechTreeImg vehicle="ki_43_1" type="aircraft" />
                    </div>
                    <div className="tree-arrow">
                      <img src="/images/Arrow-small.png" alt="Arrow.png" />
                    </div>
                    <div className="tree-item">
                      <div className="tree-item-background" id="Ki-43-II">
                        <a href="/Ki-43-II" title="Ki-43-II">
                          <Item_own />
                        </a>
                      </div>
                      <div className="tree-item-text">
                        <span className="tree-item-text-scroll">Ki-43-II</span>
                      </div>
                      <TechTreeImg vehicle="ki_43_2" type="aircraft" />
                    </div>
                  </div>
                  <div
                    className="tree-group"
                    onClick={(event) => {
                      openfolder(event);
                    }}
                  >
                    <div className="tree-group-text">
                      <span className="tree-item-text-scroll">Ki-43</span>
                    </div>
                    <div className="tree-group-img">
                      <img
                        src="https://encyclopedia.warthunder.com/slots/ki-43_group.png"
                        alt="ki-43_group.png"
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
                      <div className="tree-item-background" id="Ki-44-I">
                        <a href="/Ki-44-I" title="Ki-44-I">
                          <Item_own />
                        </a>
                      </div>
                      <div className="tree-item-text">
                        <span className="tree-item-text-scroll">Ki-44-I</span>
                      </div>
                      <TechTreeImg vehicle="ki_44_1" type="aircraft" />
                    </div>
                    <div className="tree-arrow">
                      <img src="/images/Arrow-small.png" alt="Arrow.png" />
                    </div>
                    <div className="tree-item">
                      <div className="tree-item-background" id="Ki-44-II hei">
                        <a href="/Ki-44-II_hei" title="Ki-44-II hei">
                          <Item_own />
                        </a>
                      </div>
                      <div className="tree-item-text">
                        <span className="tree-item-text-scroll">Ki-44-II hei</span>
                      </div>
                      <TechTreeImg vehicle="ki_44_2_hei" type="aircraft" />
                    </div>
                  </div>
                  <div
                    className="tree-group"
                    onClick={(event) => {
                      openfolder(event);
                    }}
                  >
                    <div className="tree-group-text">
                      <span className="tree-item-text-scroll">Ki-44</span>
                    </div>
                    <div className="tree-group-img">
                      <img
                        src="https://encyclopedia.warthunder.com/slots/ki_44_group.png"
                        alt="ki_44_group.png"
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
                      <div className="tree-item-background" id="Ki-61-I ko">
                        <a href="/Ki-61-I_ko" title="Ki-61-I ko">
                          <Item_own />
                        </a>
                      </div>
                      <div className="tree-item-text">
                        <span className="tree-item-text-scroll">Ki-61-I ko</span>
                      </div>
                      <TechTreeImg vehicle="ki_61_1a_ko" type="aircraft" />
                    </div>
                    <div className="tree-arrow">
                      <img src="/images/Arrow-small.png" alt="Arrow.png" />
                    </div>
                    <div className="tree-item">
                      <div className="tree-item-background" id="Ki-61-I otsu">
                        <a href="/Ki-61-I_otsu" title="Ki-61-I otsu">
                          <Item_own />
                        </a>
                      </div>
                      <div className="tree-item-text">
                        <span className="tree-item-text-scroll">Ki-61-I otsu</span>
                      </div>
                      <TechTreeImg vehicle="ki_61_1a_otsu" type="aircraft" />
                    </div>
                    <div className="tree-arrow">
                      <img src="/images/Arrow-small.png" alt="Arrow.png" />
                    </div>
                    <div className="tree-item">
                      <div className="tree-item-background" id="Ki-100">
                        <a href="/Ki-100" title="Ki-100">
                          <Item_own />
                        </a>
                      </div>
                      <div className="tree-item-text">
                        <span className="tree-item-text-scroll">Ki-100</span>
                      </div>
                      <TechTreeImg vehicle="ki_100_early" type="aircraft" />
                    </div>
                  </div>
                  <div
                    className="tree-group"
                    onClick={(event) => {
                      openfolder(event);
                    }}
                  >
                    <div className="tree-group-text">
                      <span className="tree-item-text-scroll">Ki-61</span>
                    </div>
                    <div className="tree-group-img">
                      <img
                        src="https://encyclopedia.warthunder.com/slots/ki_61_group.png"
                        alt="ki_61_group.png"
                      />
                    </div>
                  </div>
                </div>
              </td>
              <td>
                <div style={{ position: "relative" }}>
                  <div
                    className="tree-group-collapse"
                    style={{ display: "none", position: "absolute" }}
                  >
                    <div className="tree-item">
                      <div className="tree-item-background" id="Ki-45 otsu">
                        <a href="/Ki-45_otsu" title="Ki-45 otsu">
                          <Item_own />
                        </a>
                      </div>
                      <div className="tree-item-text">
                        <span className="tree-item-text-scroll">Ki-45&nbsp;otsu</span>
                      </div>
                      <TechTreeImg vehicle="ki-45_otsu" type="aircraft" />
                    </div>
                    <div className="tree-arrow">
                      <img src="/images/Arrow-small.png" alt="Arrow.png" />
                    </div>
                    <div className="tree-item">
                      <div className="tree-item-background" id="Ki-45 hei">
                        <a href="/Ki-45_hei" title="Ki-45 hei">
                          <Item_own />
                        </a>
                      </div>
                      <div className="tree-item-text">
                        <span className="tree-item-text-scroll">Ki-45&nbsp;hei</span>
                      </div>
                      <TechTreeImg vehicle="ki-45_hei" type="aircraft" />
                    </div>
                  </div>
                  <div
                    className="tree-group"
                    onClick={(event) => {
                      openfolder(event);
                    }}
                  >
                    <div className="tree-group-text">
                      <span className="tree-item-text-scroll">Ki-45</span>
                    </div>
                    <div className="tree-group-img">
                      <img
                        src="https://encyclopedia.warthunder.com/slots/ki-45_group.png"
                        alt="ki-45_group.png"
                      />
                    </div>
                  </div>
                </div>
                <div className="tree-arrow">
                  <img src="/images/Arrow-small.png" alt="Arrow.png" />
                </div>
                <div className="tree-item">
                  <div className="tree-item-background" id="Ki-45 ko">
                    <a href="/Ki-45_ko" title="Ki-45 ko">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">Ki-45&nbsp;ko</span>
                  </div>
                  <TechTreeImg vehicle="ki-45_ko" type="aircraft" />
                </div>
                <div className="tree-arrow">
                  <img src="/images/Arrow-small.png" alt="Arrow.png" />
                </div>
                <div className="tree-item">
                  <div className="tree-item-background" id="Ki-109">
                    <a href="/Ki-109" title="Ki-109">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">Ki-109</span>
                  </div>
                  <TechTreeImg vehicle="ki_109" type="aircraft" />
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
                      <div className="tree-item-background" id="B6N1 Model 11">
                        <a href="/B6N1_Model_11" title="B6N1 Model 11">
                          <Item_own />
                        </a>
                      </div>
                      <div className="tree-item-text">
                        <span className="tree-item-text-scroll">B6N1 Model 11</span>
                      </div>
                      <TechTreeImg vehicle="b6n1" type="aircraft" />
                    </div>
                    <div className="tree-arrow">
                      <img src="/images/Arrow-small.png" alt="Arrow.png" />
                    </div>
                    <div className="tree-item">
                      <div className="tree-item-background" id="B6N2 Model 12">
                        <a href="/B6N2_Model_12" title="B6N2 Model 12">
                          <Item_own />
                        </a>
                      </div>
                      <div className="tree-item-text">
                        <span className="tree-item-text-scroll">B6N2 Model 12</span>
                      </div>
                      <TechTreeImg vehicle="b6n2" type="aircraft" />
                    </div>
                    <div className="tree-arrow">
                      <img src="/images/Arrow-small.png" alt="Arrow.png" />
                    </div>
                    <div className="tree-item">
                      <div className="tree-item-background" id="B6N2a Model 12Ko">
                        <a href="/B6N2a_Model_12Ko" title="B6N2a Model 12Ko">
                          <Item_own />
                        </a>
                      </div>
                      <div className="tree-item-text">
                        <span className="tree-item-text-scroll">B6N2a Model 12Ko</span>
                      </div>
                      <TechTreeImg vehicle="b6n2a" type="aircraft" />
                    </div>
                  </div>
                  <div
                    className="tree-group"
                    onClick={(event) => {
                      openfolder(event);
                    }}
                  >
                    <div className="tree-group-text">
                      <span className="tree-item-text-scroll">B6N</span>
                    </div>
                    <div className="tree-group-img">
                      <img
                        src="https://encyclopedia.warthunder.com/slots/b6n_group.png"
                        alt="b6n_group.png"
                      />
                    </div>
                  </div>
                </div>
                <div className="tree-arrow">
                  <img src="/images/Arrow-small.png" alt="Arrow.png" />
                </div>
                <div className="tree-item">
                  <div className="tree-item-background" id="D4Y1">
                    <a href="/D4Y1" title="D4Y1">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">D4Y1</span>
                  </div>
                  <div className="tree-item-img">
                    <img src="https://encyclopedia.warthunder.com/slots/d4y1.png" alt="d4y1.png" />
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
                      <div className="tree-item-background" id="D4Y2">
                        <a href="/D4Y2" title="D4Y2">
                          <Item_own />
                        </a>
                      </div>
                      <div className="tree-item-text">
                        <span className="tree-item-text-scroll">D4Y2</span>
                      </div>
                      <TechTreeImg vehicle="d4y2" type="aircraft" />
                    </div>
                    <div className="tree-arrow">
                      <img src="/images/Arrow-small.png" alt="Arrow.png" />
                    </div>
                    <div className="tree-item">
                      <div className="tree-item-background" id="D4Y3 Ko">
                        <a href="/D4Y3_Ko" title="D4Y3 Ko">
                          <Item_own />
                        </a>
                      </div>
                      <div className="tree-item-text">
                        <span className="tree-item-text-scroll">D4Y3 Ko</span>
                      </div>
                      <TechTreeImg vehicle="d4y3" type="aircraft" />
                    </div>
                  </div>
                  <div
                    className="tree-group"
                    onClick={(event) => {
                      openfolder(event);
                    }}
                  >
                    <div className="tree-group-text">
                      <span className="tree-item-text-scroll">D4Y</span>
                    </div>
                    <div className="tree-group-img">
                      <img
                        src="https://encyclopedia.warthunder.com/slots/d4y_group.png"
                        alt="d4y_group.png"
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
                  <div className="tree-item-background" id="G4M1">
                    <a href="/G4M1" title="G4M1">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">G4M1</span>
                  </div>
                  <div className="tree-item-img">
                    <img src="https://encyclopedia.warthunder.com/slots/g4m1.png" alt="g4m1.png" />
                  </div>
                </div>
                <div className="tree-arrow">
                  <img src="/images/Arrow-small.png" alt="Arrow.png" />
                </div>
                <div className="tree-item">
                  <div className="tree-item-background" id="Ki-49-I">
                    <a href="/Ki-49-I" title="Ki-49-I">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">Ki-49-I</span>
                  </div>
                  <TechTreeImg vehicle="ki-49_1" type="aircraft" />
                </div>
                <div className="tree-arrow">
                  <img src="/images/Arrow-small.png" alt="Arrow.png" />
                </div>
                <div className="tree-item">
                  <div className="tree-item-background" id="Ki-49-IIa">
                    <a href="/Ki-49-IIa" title="Ki-49-IIa">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">Ki-49-IIa</span>
                  </div>
                  <TechTreeImg vehicle="ki-49_2a" type="aircraft" />
                </div>
                <div className="tree-arrow">
                  <img src="/images/Arrow-small.png" alt="Arrow.png" />
                </div>
              </td>
              <td style={{ borderLeft: "solid 1px #cccccc" }}>
                <div className="tree-item">
                  <div className="tree-item-background" id="Ki-44-I 34">
                    <a href="/Ki-44-I_34" title="Ki-44-I 34">
                      <Item_prem />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">Ki-44-I 34</span>
                  </div>
                  <TechTreeImg vehicle="ki_44_1_ep" type="aircraft" />
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
                  <div className="tree-item-background" id="Ki-44-II otsu">
                    <a href="/Ki-44-II_otsu" title="Ki-44-II otsu">
                      <Item_prem />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">Ki-44-II otsu</span>
                  </div>
                  <TechTreeImg vehicle="ki_44_2_otsu" type="aircraft" />
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
                  <div className="tree-item-background" id="Ki-100-II">
                    <a href="/Ki-100-II" title="Ki-100-II">
                      <Item_prem />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">Ki-100-II</span>
                  </div>
                  <TechTreeImg vehicle="ki_100_2" type="aircraft" />
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
                  <div className="tree-item-background" id="F4U-1A (Japan)">
                    <a href="/F4U-1A_(Japan)" title="F4U-1A (Japan)">
                      <Item_prem />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">▅F4U-1A</span>
                  </div>
                  <TechTreeImg vehicle="f4u-1a_japan" type="aircraft" />
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
                  <div className="tree-item-background" id="Bf 109 E-7 (Japan)">
                    <a href="/Bf_109_E-7_(Japan)" title="Bf 109 E-7 (Japan)">
                      <Item_prem />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">▅Bf 109 E-7</span>
                  </div>
                  <TechTreeImg vehicle="bf-109e-3_japan" type="aircraft" />
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
                  <div className="tree-item-background" id="H8K3">
                    <a href="/H8K3" title="H8K3">
                      <Item_prem />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">H8K3</span>
                  </div>
                  <div className="tree-item-img">
                    <img src="https://encyclopedia.warthunder.com/slots/h8k3.png" alt="h8k3.png" />
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
                <div style={{ position: "relative" }}>
                  <div
                    className="tree-group-collapse"
                    style={{ display: "none", position: "absolute" }}
                  >
                    <div className="tree-item">
                      <div className="tree-item-background" id="A6M3">
                        <a href="/A6M3" title="A6M3">
                          <Item_own />
                        </a>
                      </div>
                      <div className="tree-item-text">
                        <span className="tree-item-text-scroll">A6M3</span>
                      </div>
                      <TechTreeImg vehicle="a6m3_zero" type="aircraft" />
                    </div>
                    <div className="tree-arrow">
                      <img src="/images/Arrow-small.png" alt="Arrow.png" />
                    </div>
                    <div className="tree-item">
                      <div className="tree-item-background" id="A6M3 mod. 22">
                        <a href="/A6M3_mod._22" title="A6M3 mod. 22">
                          <Item_own />
                        </a>
                      </div>
                      <div className="tree-item-text">
                        <span className="tree-item-text-scroll">A6M3 mod.&nbsp;22</span>
                      </div>
                      <TechTreeImg vehicle="a6m3_mod22_zero" type="aircraft" />
                    </div>
                    <div className="tree-arrow">
                      <img src="/images/Arrow-small.png" alt="Arrow.png" />
                    </div>
                    <div className="tree-item">
                      <div className="tree-item-background" id="A6M3 mod. 22Ko">
                        <a href="/A6M3_mod._22Ko" title="A6M3 mod. 22Ko">
                          <Item_own />
                        </a>
                      </div>
                      <div className="tree-item-text">
                        <span className="tree-item-text-scroll">A6M3&nbsp;mod.&nbsp;22Ko</span>
                      </div>
                      <TechTreeImg vehicle="a6m3_mod22ko_zero" type="aircraft" />
                    </div>
                  </div>
                  <div
                    className="tree-group"
                    onClick={(event) => {
                      openfolder(event);
                    }}
                  >
                    <div className="tree-group-text">
                      <span className="tree-item-text-scroll">A6M3</span>
                    </div>
                    <div className="tree-group-img">
                      <img
                        src="https://encyclopedia.warthunder.com/slots/a6m3_mod22_group.png"
                        alt="a6m3_mod22_group.png"
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
                      <div className="tree-item-background" id="A6M5">
                        <a href="/A6M5" title="A6M5">
                          <Item_own />
                        </a>
                      </div>
                      <div className="tree-item-text">
                        <span className="tree-item-text-scroll">A6M5</span>
                      </div>
                      <TechTreeImg vehicle="a6m5_zero" type="aircraft" />
                    </div>
                    <div className="tree-arrow">
                      <img src="/images/Arrow-small.png" alt="Arrow.png" />
                    </div>
                    <div className="tree-item">
                      <div className="tree-item-background" id="A6M5 otsu">
                        <a href="/A6M5_otsu" title="A6M5 otsu">
                          <Item_own />
                        </a>
                      </div>
                      <div className="tree-item-text">
                        <span className="tree-item-text-scroll">A6M5&nbsp;otsu</span>
                      </div>
                      <TechTreeImg vehicle="a6m5otsu" type="aircraft" />
                    </div>
                    <div className="tree-arrow">
                      <img src="/images/Arrow-small.png" alt="Arrow.png" />
                    </div>
                    <div className="tree-item">
                      <div className="tree-item-background" id="A6M5 Hei">
                        <a href="/A6M5_Hei" title="A6M5 Hei">
                          <Item_own />
                        </a>
                      </div>
                      <div className="tree-item-text">
                        <span className="tree-item-text-scroll">A6M5&nbsp;Hei</span>
                      </div>
                      <TechTreeImg vehicle="a6m5hei" type="aircraft" />
                    </div>
                  </div>
                  <div
                    className="tree-group"
                    onClick={(event) => {
                      openfolder(event);
                    }}
                  >
                    <div className="tree-group-text">
                      <span className="tree-item-text-scroll">A6M5</span>
                    </div>
                    <div className="tree-group-img">
                      <img
                        src="https://encyclopedia.warthunder.com/slots/a6m5_group.png"
                        alt="a6m5_group.png"
                      />
                    </div>
                  </div>
                </div>
                <div className="tree-arrow">
                  <img src="/images/Arrow-small.png" alt="Arrow.png" />
                </div>
                <div className="tree-item">
                  <div className="tree-item-background" id="A7M2">
                    <a href="/A7M2" title="A7M2">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">A7M2</span>
                  </div>
                  <div className="tree-item-img">
                    <img src="https://encyclopedia.warthunder.com/slots/a7m2.png" alt="a7m2.png" />
                  </div>
                </div>
                <div className="tree-arrow">
                  <img src="/images/Arrow-small.png" alt="Arrow.png" />
                </div>
              </td>
              <td>
                <div className="tree-item">
                  <div className="tree-item-background" id="Ki-43-III otsu">
                    <a href="/Ki-43-III_otsu" title="Ki-43-III otsu">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">Ki-43-III otsu</span>
                  </div>
                  <TechTreeImg vehicle="ki_43_3_otsu" type="aircraft" />
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
                      <div className="tree-item-background" id="Ki-61-I hei">
                        <a href="/Ki-61-I_hei" title="Ki-61-I hei">
                          <Item_own />
                        </a>
                      </div>
                      <div className="tree-item-text">
                        <span className="tree-item-text-scroll">Ki-61-I hei</span>
                      </div>
                      <TechTreeImg vehicle="ki_61_1a_hei" type="aircraft" />
                    </div>
                    <div className="tree-arrow">
                      <img src="/images/Arrow-small.png" alt="Arrow.png" />
                    </div>
                    <div className="tree-item">
                      <div className="tree-item-background" id="Ki-61-I tei">
                        <a href="/Ki-61-I_tei" title="Ki-61-I tei">
                          <Item_own />
                        </a>
                      </div>
                      <div className="tree-item-text">
                        <span className="tree-item-text-scroll">Ki-61-I tei</span>
                      </div>
                      <TechTreeImg vehicle="ki_61_1a_tei" type="aircraft" />
                    </div>
                  </div>
                  <div
                    className="tree-group"
                    onClick={(event) => {
                      openfolder(event);
                    }}
                  >
                    <div className="tree-group-text">
                      <span className="tree-item-text-scroll">Ki-61-I late</span>
                    </div>
                    <div className="tree-group-img">
                      <img
                        src="https://encyclopedia.warthunder.com/slots/ki_61_late_group.png"
                        alt="ki_61_late_group.png"
                      />
                    </div>
                  </div>
                </div>
                <div className="tree-arrow">
                  <img src="/images/Arrow-small.png" alt="Arrow.png" />
                </div>
                <div className="tree-item">
                  <div className="tree-item-background" id="Ki-61-II Otsu Kai">
                    <a href="/Ki-61-II_Otsu_Kai" title="Ki-61-II Otsu Kai">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">Ki-61-II Otsu Kai</span>
                  </div>
                  <TechTreeImg vehicle="ki_61_2_early" type="aircraft" />
                </div>
                <div className="tree-arrow">
                  <img src="/images/Arrow-small.png" alt="Arrow.png" />
                </div>
              </td>
              <td>
                <div className="tree-item">
                  <div className="tree-item-background" id="Ki-102 otsu">
                    <a href="/Ki-102_otsu" title="Ki-102 otsu">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">Ki-102 otsu</span>
                  </div>
                  <TechTreeImg vehicle="ki_102_otsu" type="aircraft" />
                </div>
                <div className="tree-arrow">
                  <img src="/images/Arrow-small.png" alt="Arrow.png" />
                </div>
                <div className="tree-item">
                  <div className="tree-item-background" id="Ki-108 Kai">
                    <a href="/Ki-108_Kai" title="Ki-108 Kai">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">Ki-108 Kai</span>
                  </div>
                  <TechTreeImg vehicle="ki_108" type="aircraft" />
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
                  <div className="tree-item-background" id="B7A2">
                    <a href="/B7A2" title="B7A2">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">B7A2</span>
                  </div>
                  <div className="tree-item-img">
                    <img src="https://encyclopedia.warthunder.com/slots/b7a2.png" alt="b7a2.png" />
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
                <div className="tree-item">
                  <div className="tree-item-background" id="Ki-49-IIb">
                    <a href="/Ki-49-IIb" title="Ki-49-IIb">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">Ki-49-IIb</span>
                  </div>
                  <TechTreeImg vehicle="ki-49_2b" type="aircraft" />
                </div>
                <div className="tree-arrow">
                  <img src="/images/Arrow-small.png" alt="Arrow.png" />
                </div>
                <div className="tree-item">
                  <div className="tree-item-background" id="Ki-49-IIb/L">
                    <a href="/Ki-49-IIb/L" title="Ki-49-IIb/L">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">Ki-49-IIb/L</span>
                  </div>
                  <TechTreeImg vehicle="ki-49_2b_late" type="aircraft" />
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
                      <div className="tree-item-background" id="Ki-67-I Ko">
                        <a href="/Ki-67-I_Ko" title="Ki-67-I Ko">
                          <Item_own />
                        </a>
                      </div>
                      <div className="tree-item-text">
                        <span className="tree-item-text-scroll">Ki-67-I Ko</span>
                      </div>
                      <TechTreeImg vehicle="ki_67_1_ko" type="aircraft" />
                    </div>
                    <div className="tree-arrow">
                      <img src="/images/Arrow-small.png" alt="Arrow.png" />
                    </div>
                    <div className="tree-item">
                      <div className="tree-item-background" id="Ki-67-I otsu">
                        <a href="/Ki-67-I_otsu" title="Ki-67-I otsu">
                          <Item_own />
                        </a>
                      </div>
                      <div className="tree-item-text">
                        <span className="tree-item-text-scroll">Ki-67-I otsu</span>
                      </div>
                      <TechTreeImg vehicle="ki_67_1_otsu" type="aircraft" />
                    </div>
                  </div>
                  <div
                    className="tree-group"
                    onClick={(event) => {
                      openfolder(event);
                    }}
                  >
                    <div className="tree-group-text">
                      <span className="tree-item-text-scroll">Ki-67</span>
                    </div>
                    <div className="tree-group-img">
                      <img
                        src="https://encyclopedia.warthunder.com/slots/ki_67_group.png"
                        alt="ki_67_group.png"
                      />
                    </div>
                  </div>
                </div>
                <div className="tree-arrow">
                  <img src="/images/Arrow-small.png" alt="Arrow.png" />
                </div>
              </td>
              <td style={{ borderLeft: "solid 1px #cccccc" }}>
                <div className="tree-item">
                  <div className="tree-item-background" id="Ki-96">
                    <a href="/Ki-96" title="Ki-96">
                      <Item_prem />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">Ki-96</span>
                  </div>
                  <TechTreeImg vehicle="ki-96" type="aircraft" />
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
                  <div className="tree-item-background" id="Ki-61-I hei Tada's">
                    <a href="/Ki-61-I_hei_Tada%27s" title="Ki-61-I hei Tada's">
                      <Item_prem />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">Ki-61-I hei Tada&apos;s</span>
                  </div>
                  <TechTreeImg vehicle="ki_61_1a_hei_ep" type="aircraft" />
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
                  <div className="tree-item-background" id="A7M1 (NK9H)">
                    <a href="/A7M1_(NK9H)" title="A7M1 (NK9H)">
                      <Item_prem />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">A7M1 (NK9H)</span>
                  </div>
                  <div className="tree-item-img">
                    <img src="https://encyclopedia.warthunder.com/slots/a7m1.png" alt="a7m1.png" />
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
                  <div className="tree-item-background" id="P-51C-11-NT (Japan)">
                    <a href="/P-51C-11-NT_(Japan)" title="P-51C-11-NT (Japan)">
                      <Item_prem />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">▅P-51C-11-NT</span>
                  </div>
                  <TechTreeImg vehicle="p-51c-11-nt_japan" type="aircraft" />
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
                  <div className="tree-item-background" id="Fw 190 A-5 (Japan)">
                    <a href="/Fw_190_A-5_(Japan)" title="Fw 190 A-5 (Japan)">
                      <Item_prem />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">▅Fw&nbsp;190&nbsp;A-5</span>
                  </div>
                  <TechTreeImg vehicle="fw-190a-5_japan" type="aircraft" />
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
                  <div className="tree-item-background" id="A6M6c">
                    <a href="/A6M6c" title="A6M6c">
                      <Item_prem />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">A6M6c</span>
                  </div>
                  <TechTreeImg vehicle="a6m6c" type="aircraft" />
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
                      <div className="tree-item-background" id="N1K1-Ja">
                        <a href="/N1K1-Ja" title="N1K1-Ja">
                          <Item_own />
                        </a>
                      </div>
                      <div className="tree-item-text">
                        <span className="tree-item-text-scroll">N1K1-Ja</span>
                      </div>
                      <TechTreeImg vehicle="n1k1_ja" type="aircraft" />
                    </div>
                    <div className="tree-arrow">
                      <img src="/images/Arrow-small.png" alt="Arrow.png" />
                    </div>
                    <div className="tree-item">
                      <div className="tree-item-background" id="N1K2-J">
                        <a href="/N1K2-J" title="N1K2-J">
                          <Item_own />
                        </a>
                      </div>
                      <div className="tree-item-text">
                        <span className="tree-item-text-scroll">N1K2-J</span>
                      </div>
                      <TechTreeImg vehicle="n1k2_j" type="aircraft" />
                    </div>
                    <div className="tree-arrow">
                      <img src="/images/Arrow-small.png" alt="Arrow.png" />
                    </div>
                    <div className="tree-item">
                      <div className="tree-item-background" id="N1K2-Ja">
                        <a href="/N1K2-Ja" title="N1K2-Ja">
                          <Item_own />
                        </a>
                      </div>
                      <div className="tree-item-text">
                        <span className="tree-item-text-scroll">N1K2-Ja</span>
                      </div>
                      <TechTreeImg vehicle="n1k2_jko" type="aircraft" />
                    </div>
                  </div>
                  <div
                    className="tree-group"
                    onClick={(event) => {
                      openfolder(event);
                    }}
                  >
                    <div className="tree-group-text">
                      <span className="tree-item-text-scroll">N1K</span>
                    </div>
                    <div className="tree-group-img">
                      <img
                        src="https://encyclopedia.warthunder.com/slots/n1k2_group.png"
                        alt="n1k2_group.png"
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
                      <div className="tree-item-background" id="J2M3">
                        <a href="/J2M3" title="J2M3">
                          <Item_own />
                        </a>
                      </div>
                      <div className="tree-item-text">
                        <span className="tree-item-text-scroll">J2M3</span>
                      </div>
                      <TechTreeImg vehicle="j2m3" type="aircraft" />
                    </div>
                    <div className="tree-arrow">
                      <img src="/images/Arrow-small.png" alt="Arrow.png" />
                    </div>
                    <div className="tree-item">
                      <div className="tree-item-background" id="J2M5">
                        <a href="/J2M5" title="J2M5">
                          <Item_own />
                        </a>
                      </div>
                      <div className="tree-item-text">
                        <span className="tree-item-text-scroll">J2M5</span>
                      </div>
                      <TechTreeImg vehicle="j2m5" type="aircraft" />
                    </div>
                  </div>
                  <div
                    className="tree-group"
                    onClick={(event) => {
                      openfolder(event);
                    }}
                  >
                    <div className="tree-group-text">
                      <span className="tree-item-text-scroll">J2M</span>
                    </div>
                    <div className="tree-group-img">
                      <img
                        src="https://encyclopedia.warthunder.com/slots/j2m_group.png"
                        alt="j2m_group.png"
                      />
                    </div>
                  </div>
                </div>
                <div className="tree-arrow">
                  <img src="/images/Arrow-small.png" alt="Arrow.png" />
                </div>
                <div className="tree-item">
                  <div className="tree-item-background" id="J7W1">
                    <a href="/J7W1" title="J7W1">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">J7W1</span>
                  </div>
                  <div className="tree-item-img">
                    <img src="https://encyclopedia.warthunder.com/slots/j7w1.png" alt="j7w1.png" />
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
                  <div className="tree-item-background" id="Ki-84 ko">
                    <a href="/Ki-84_ko" title="Ki-84 ko">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">Ki-84 ko</span>
                  </div>
                  <TechTreeImg vehicle="ki_84_ko" type="aircraft" />
                </div>
                <div className="tree-arrow">
                  <img src="/images/Arrow-small.png" alt="Arrow.png" />
                </div>
                <div className="tree-item">
                  <div className="tree-item-background" id="Ki-84 otsu">
                    <a href="/Ki-84_otsu" title="Ki-84 otsu">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">Ki-84 otsu</span>
                  </div>
                  <TechTreeImg vehicle="ki_84_otsu" type="aircraft" />
                </div>
                <div className="tree-arrow">
                  <img src="/images/Arrow-small.png" alt="Arrow.png" />
                </div>
                <div className="tree-item">
                  <div className="tree-item-background" id="Ki-84 hei">
                    <a href="/Ki-84_hei" title="Ki-84 hei">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">Ki-84 hei</span>
                  </div>
                  <TechTreeImg vehicle="ki_84_hei" type="aircraft" />
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
                  <div className="tree-item-background" id="J5N1">
                    <a href="/J5N1" title="J5N1">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">J5N1</span>
                  </div>
                  <div className="tree-item-img">
                    <img src="https://encyclopedia.warthunder.com/slots/j5n1.png" alt="j5n1.png" />
                  </div>
                </div>
                <div className="tree-arrow">
                  <img src="/images/Arrow-small.png" alt="Arrow.png" />
                </div>
                <div className="tree-item">
                  <div className="tree-item-background" id="Ki-83">
                    <a href="/Ki-83" title="Ki-83">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">Ki-83</span>
                  </div>
                  <TechTreeImg vehicle="ki-83" type="aircraft" />
                </div>
              </td>
              <td>
                <div className="tree-item">
                  <div className="tree-item-background" id="P1Y1 mod. 11">
                    <a href="/P1Y1_mod._11" title="P1Y1 mod. 11">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">P1Y1 mod. 11</span>
                  </div>
                  <TechTreeImg vehicle="p1y1_mod11" type="aircraft" />
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
                  <div className="tree-item-background" id="G5N1">
                    <a href="/G5N1" title="G5N1">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">G5N1</span>
                  </div>
                  <div className="tree-item-img">
                    <img src="https://encyclopedia.warthunder.com/slots/g5n1.png" alt="g5n1.png" />
                  </div>
                </div>
                <div className="tree-arrow">
                  <img src="/images/Arrow-small.png" alt="Arrow.png" />
                </div>
                <div className="tree-item">
                  <div className="tree-item-background" id="G8N1">
                    <a href="/G8N1" title="G8N1">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">G8N1</span>
                  </div>
                  <div className="tree-item-img">
                    <img src="https://encyclopedia.warthunder.com/slots/g8n1.png" alt="g8n1.png" />
                  </div>
                </div>
              </td>
              <td style={{ borderLeft: "solid 1px #cccccc" }}>
                <div className="tree-item">
                  <div className="tree-item-background" id="J2M4 Kai">
                    <a href="/J2M4_Kai" title="J2M4 Kai">
                      <Item_prem />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">J2M4 Kai</span>
                  </div>
                  <TechTreeImg vehicle="j2m4_kai" type="aircraft" />
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
                  <div className="tree-item-background" id="J2M5 30mm">
                    <a href="/J2M5_30mm" title="J2M5 30mm">
                      <Item_prem />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">J2M5</span>
                  </div>
                  <TechTreeImg vehicle="j2m5_30mm" type="aircraft" />
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
                  <div className="tree-item-background" id="B-17E (Japan)">
                    <a href="/B-17E_(Japan)" title="B-17E (Japan)">
                      <Item_prem />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">▅B-17E</span>
                  </div>
                  <TechTreeImg vehicle="b-17e_japan" type="aircraft" />
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
                  <div className="tree-item-background" id="Ki-87">
                    <a href="/Ki-87" title="Ki-87">
                      <Item_prem />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">Ki-87</span>
                  </div>
                  <TechTreeImg vehicle="ki_87" type="aircraft" />
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
                  <div className="tree-item-background" id="A6M5 Ko">
                    <a href="/A6M5_Ko" title="A6M5 Ko">
                      <Item_prem />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">A6M5&nbsp;Ko</span>
                  </div>
                  <TechTreeImg vehicle="a6m5ko" type="aircraft" />
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
                  <div className="tree-item-background" id="Ki-94-II">
                    <a href="/Ki-94-II" title="Ki-94-II">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">Ki-94-II</span>
                  </div>
                  <TechTreeImg vehicle="ki_94_2" type="aircraft" />
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
                  <div className="tree-item-background" id="J6K1">
                    <a href="/J6K1" title="J6K1">
                      <Item_prem />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">J6K1</span>
                  </div>
                  <div className="tree-item-img">
                    <img src="https://encyclopedia.warthunder.com/slots/j6k1.png" alt="j6k1.png" />
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
                  V Rank
                </div>
              </th>
              <td>
                <div className="tree-item">
                  <div className="tree-item-background" id="Kikka">
                    <a href="/Kikka" title="Kikka">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">Kikka</span>
                  </div>
                  <TechTreeImg vehicle="kitsuka" type="aircraft" />
                </div>
                <div className="tree-arrow">
                  <img src="/images/Arrow-small.png" alt="Arrow.png" />
                </div>
                <div className="tree-item">
                  <div className="tree-item-background" id="F-86F-30 (Japan)">
                    <a href="/F-86F-30_(Japan)" title="F-86F-30 (Japan)">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">F-86F-30 ▅</span>
                  </div>
                  <TechTreeImg vehicle="f-86f-30_japan" type="aircraft" />
                </div>
                <div className="tree-arrow">
                  <img src="/images/Arrow-small.png" alt="Arrow.png" />
                </div>
                <div className="tree-item">
                  <div className="tree-item-background" id="F-86F-40 (Japan)">
                    <a href="/F-86F-40_(Japan)" title="F-86F-40 (Japan)">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">F-86F-40 ▅</span>
                  </div>
                  <TechTreeImg vehicle="f-86f-40_japan" type="aircraft" />
                </div>
                <div className="tree-arrow">
                  <img src="/images/Arrow-small.png" alt="Arrow.png" />
                </div>
              </td>
              <td>
                <div className="tree-item">
                  <div className="tree-item-background" id="Ki-200">
                    <a href="/Ki-200" title="Ki-200">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">Ki-200</span>
                  </div>
                  <div className="tree-item-img">
                    <img src="https://encyclopedia.warthunder.com/slots/j8m1.png" alt="j8m1.png" />
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
              <td />
              <td>
                <div className="tree-item">
                  <div className="tree-item-background" id="R2Y2 Kai V1">
                    <a href="/R2Y2_Kai_V1" title="R2Y2 Kai V1">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">R2Y2 Kai V1</span>
                  </div>
                  <TechTreeImg vehicle="r2y2_v1" type="aircraft" />
                </div>
                <div className="tree-arrow">
                  <img src="/images/Arrow-small.png" alt="Arrow.png" />
                </div>
                <div className="tree-item">
                  <div className="tree-item-background" id="R2Y2 Kai V2">
                    <a href="/R2Y2_Kai_V2" title="R2Y2 Kai V2">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">R2Y2 Kai V2</span>
                  </div>
                  <TechTreeImg vehicle="r2y2_v2" type="aircraft" />
                </div>
                <div className="tree-arrow">
                  <img src="/images/Arrow-small.png" alt="Arrow.png" />
                </div>
                <div className="tree-item">
                  <div className="tree-item-background" id="R2Y2 Kai V3">
                    <a href="/R2Y2_Kai_V3" title="R2Y2 Kai V3">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">R2Y2 Kai V3</span>
                  </div>
                  <TechTreeImg vehicle="r2y2_kai" type="aircraft" />
                </div>
              </td>
              <td />
              <td style={{ borderLeft: "solid 1px #cccccc" }}>
                <div className="tree-item">
                  <div className="tree-item-background" id="F-86F-40 JASDF (Japan)">
                    <a href="/F-86F-40_JASDF_(Japan)" title="F-86F-40 JASDF (Japan)">
                      <Item_prem />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">F-86F-40 JASDF▅</span>
                  </div>
                  <TechTreeImg vehicle="f-86f-40_japan_blue_impulse" type="aircraft" />
                </div>
              </td>
              <td />
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
                  <div className="tree-item-background" id="F-104J">
                    <a href="/F-104J" title="F-104J">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">F-104J</span>
                  </div>
                  <TechTreeImg vehicle="f-104j" type="aircraft" />
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
                  <div className="tree-item-background" id="T-2">
                    <a href="/T-2" title="T-2">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">T-2</span>
                  </div>
                  <div className="tree-item-img">
                    <img src="https://encyclopedia.warthunder.com/slots/t2.png" alt="t2.png" />
                  </div>
                </div>
                <div className="tree-arrow">
                  <img src="/images/Arrow-small.png" alt="Arrow.png" />
                </div>
                <div className="tree-item">
                  <div className="tree-item-background" id="F-1">
                    <a href="/F-1" title="F-1">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">F-1</span>
                  </div>
                  <div className="tree-item-img">
                    <img src="https://encyclopedia.warthunder.com/slots/f1.png" alt="f1.png" />
                  </div>
                </div>
              </td>
              <td />
              <td />
              <td />
              <td style={{ borderLeft: "solid 1px #cccccc" }} />
              <td />
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
                  <div className="tree-item-background" id="F-4EJ Phantom II">
                    <a href="/F-4EJ_Phantom_II" title="F-4EJ Phantom II">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">F-4EJ Phantom II</span>
                  </div>
                  <TechTreeImg vehicle="f-4ej" type="aircraft" />
                </div>
                <div className="tree-arrow">
                  <img src="/images/Arrow-small.png" alt="Arrow.png" />
                </div>
                <div className="tree-item">
                  <div className="tree-item-background" id="F-4EJ Kai Phantom II">
                    <a href="/F-4EJ_Kai_Phantom_II" title="F-4EJ Kai Phantom II">
                      <Item_own />
                    </a>
                  </div>
                  <div className="tree-item-text">
                    <span className="tree-item-text-scroll">F-4EJ Kai Phantom II</span>
                  </div>
                  <TechTreeImg vehicle="f-4ej_kai" type="aircraft" />
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
                  src="//yewtu.be/embed/mF2Umflo4Uk?"
                  allowFullScreen={true}
                  width={640}
                  height={360}
                  frameBorder={0}
                />
              </div>
            </div>
          </div>
          <div className="video_desc">
            <b>Mitsubishi Aircraft</b> - <i>War Thunder Official Channel</i>
          </div>
        </div>
        <div className="video">
          <div className="video_embed">
            <div className="embedvideo autoResize" style={{}}>
              <div className="embedvideowrap" style={{ width: 640 }}>
                <iframe
                  src="//yewtu.be/embed/oR8GNZF9qj4?"
                  allowFullScreen={true}
                  width={640}
                  height={360}
                  frameBorder={0}
                />
              </div>
            </div>
          </div>
          <div className="video_desc">
            <b>Japanese Air Forces Rank I - Tutorial and Guide</b> - <i>Jengar</i>
          </div>
        </div>
        <div className="video">
          <div className="video_embed">
            <div className="embedvideo autoResize" style={{}}>
              <div className="embedvideowrap" style={{ width: 640 }}>
                <iframe
                  src="//yewtu.be/embed/qiq8SUqodU8?"
                  allowFullScreen={true}
                  width={640}
                  height={360}
                  frameBorder={0}
                />
              </div>
            </div>
          </div>
          <div className="video_desc">
            <b>Climbing the ranks with Japanese aircraft</b> - <i>War Thunder Official Channel</i>
          </div>
        </div>
      </div>
    </div>
  );
}
