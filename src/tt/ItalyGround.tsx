import { Arrow, EmptyDiv, MediaHead, Rank, Research, TechTreeItem, TreeFolder } from "../TechTree";

export function ItalyGround() {
  return (
    <div className="mw-parser-output">
      <div className="tree">
        <table rules="rows" width="100%">
          <tbody>
            <Research research={4} premium={2} />
            <tr>
              <Rank rank="I" />
              <td>
                <TechTreeItem
                  link="/AB_41"
                  title="AB 41"
                  item_type="own"
                  text="AB 41"
                  intname="it_ab_41"
                  type="ground"
                />
                <Arrow type="small" />
                <TechTreeItem
                  link="/M11/39"
                  title="M11/39"
                  item_type="own"
                  text="M11/39"
                  intname="it_m11_39"
                  type="ground"
                />
                <div className="tree-arrow">
                  <img src="/images/Arrow_tail.png" alt="Arrow_tail.png" />
                  <br />
                  <img src="/images/Arrow_center.png" alt="Arrow_center.png" />
                  <br />
                  <img src="/images/Arrow_head.png" alt="Arrow_head.png" />
                </div>
              </td>
              <td>
                <TechTreeItem
                  link="/L6/40"
                  title="L6/40"
                  item_type="own"
                  text="L6/40"
                  intname="it_l6"
                  type="ground"
                />
                <Arrow type="small" />
                <TreeFolder name="M13/40 I/III" img="it_m13_40_group">
                  <TechTreeItem
                    link="/M13/40_(I)"
                    title="M13/40 (I)"
                    item_type="own"
                    text="M13/40 (I)"
                    intname="it_m13_40_serie_1"
                    type="ground"
                  />
                  <Arrow type="small" />
                  <TechTreeItem
                    link="/M13/40_(III)"
                    title="M13/40 (III)"
                    item_type="own"
                    text="M13/40 (III)"
                    intname="it_m13_40_serie_3"
                    type="ground"
                  />
                </TreeFolder>
                <Arrow type="small" />
                <TechTreeItem
                  link="/M14/41"
                  title="M14/41"
                  item_type="own"
                  text="M14/41"
                  intname="it_m14_41"
                  type="ground"
                />
                <Arrow type="small" />
              </td>
              <td>
                <TechTreeItem
                  link="/AS_42"
                  title="AS 42"
                  item_type="own"
                  text="AS 42"
                  intname="it_as_42_metropolitana"
                  type="ground"
                />
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
                <TechTreeItem
                  link="/L3/33_CC"
                  title="L3/33 CC"
                  item_type="own"
                  text="L3/33 CC"
                  intname="it_l3_cc"
                  type="ground"
                />
                <Arrow type="small" />
                <TechTreeItem
                  link="/47/32_L40"
                  title="47/32 L40"
                  item_type="own"
                  text="47/32 L40"
                  intname="it_semovente_l40"
                  type="ground"
                />
                <Arrow type="small" />
                <TechTreeItem
                  link="/Lancia_3Ro_(100/17)"
                  title="Lancia 3Ro (100/17)"
                  item_type="own"
                  text="Lancia 3Ro (100/17)"
                  intname="it_lancia3ro_100"
                  type="ground"
                />
                <Arrow type="small" />
              </td>
              <td style={{ borderLeft: "solid 1px #cccccc" }}>
                <TechTreeItem
                  link="/L6/40_(31_Rgt.)"
                  title="L6/40 (31 Rgt.)"
                  item_type="prem"
                  text="L6/40 (31 Rgt.)"
                  intname="it_l6_leone"
                  type="ground"
                />
                <EmptyDiv />
                <TechTreeItem
                  link="/M13/40_(II)"
                  title="M13/40 (II)"
                  item_type="prem"
                  text="M13/40 (II)"
                  intname="it_m13_40_serie_2"
                  type="ground"
                />
                <EmptyDiv />
              </td>
              <td>
                <TechTreeItem
                  link="/Toldi_IIA"
                  title="Toldi IIA"
                  item_type="prem"
                  text="Toldi IIA"
                  intname="it_toldi_ii_a"
                  type="ground"
                />
                <EmptyDiv />
              </td>
            </tr>
            <tr>
              <Rank rank="II" />
              <td>
                <TechTreeItem
                  link="/AB_43"
                  title="AB 43"
                  item_type="own"
                  text="AB 43"
                  intname="it_ab_43"
                  type="ground"
                />
                <Arrow type="small" />
                <TechTreeItem
                  link="/M3A3_(Italy)"
                  title="M3A3 (Italy)"
                  item_type="own"
                  text="▄M3A3"
                  intname="it_m3a3_stuart"
                  type="ground"
                />
                <Arrow type="small" />
                <TechTreeItem
                  link="/M24_(Italy)"
                  title="M24 (Italy)"
                  item_type="own"
                  text="▄M24"
                  intname="it_m24_chaffee"
                  type="ground"
                />
                <Arrow type="small" />
              </td>
              <td>
                <TechTreeItem
                  link="/M15/42"
                  title="M15/42"
                  item_type="own"
                  text="M15/42"
                  intname="it_m15_42"
                  type="ground"
                />
                <Arrow type="small" />
                <TechTreeItem
                  link="/Pz.III_N_(Italy)"
                  title="Pz.III N (Italy)"
                  item_type="own"
                  text="▄Pz.III N"
                  intname="it_pzkpfw_iii_ausf_n"
                  type="ground"
                />
                <Arrow type="small" />
                <TechTreeItem
                  link="/P40"
                  title="P40"
                  item_type="own"
                  text="P40"
                  intname="it_p_40"
                  type="ground"
                />
                <Arrow type="small" />
              </td>
              <td>
                <TechTreeItem
                  link="/M42_(Italy)"
                  title="M42 (Italy)"
                  item_type="own"
                  text="M42 Contraereo"
                  intname="it_m15_42_contraereo"
                  type="ground"
                />
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
                <TreeFolder name="M41 (75/18 75/32)" img="it_semovente_m41_group">
                  <TechTreeItem
                    link="/75/18_M41"
                    title="75/18 M41"
                    item_type="own"
                    text="75/18 M41"
                    intname="it_semovente_m41_75_18"
                    type="ground"
                  />
                  <Arrow type="small" />
                  <TechTreeItem
                    link="/75/32_M41"
                    title="75/32 M41"
                    item_type="own"
                    text="75/32 M41"
                    intname="it_semovente_m41_75_32"
                    type="ground"
                  />
                </TreeFolder>
                <Arrow type="small" />
                <TechTreeItem
                  link="/75/34_M42"
                  title="75/34 M42"
                  item_type="own"
                  text="75/34 M42"
                  intname="it_semovente_m42_75_34"
                  type="ground"
                />
                <Arrow type="small" />
                <TreeFolder name="M43 (105/25 75/34)" img="it_semovente_m43_group">
                  <TechTreeItem
                    link="/105/25_M43"
                    title="105/25 M43"
                    item_type="own"
                    text="105/25 M43"
                    intname="it_semovente_m43_105"
                    type="ground"
                  />
                  <Arrow type="small" />
                  <TechTreeItem
                    link="/75/34_M43"
                    title="75/34 M43"
                    item_type="own"
                    text="75/34 M43"
                    intname="it_semovente_m43_75_34"
                    type="ground"
                  />
                </TreeFolder>
                <Arrow type="small" />
              </td>
              <td style={{ borderLeft: "solid 1px #cccccc" }}>
                <TechTreeItem
                  link="/Celere_Sahariano"
                  title="Celere Sahariano"
                  item_type="prem"
                  text="Celere Sahariano"
                  intname="it_sahariano"
                  type="ground"
                />
                <EmptyDiv />
                <TechTreeItem
                  link="/M14/41_(47/40)"
                  title="M14/41 (47/40)"
                  item_type="prem"
                  text="M14/41 (47/40)"
                  intname="it_m14_41_47_40"
                  type="ground"
                />
                <EmptyDiv />
                <TechTreeItem
                  link="/M4_Hybrid_(Italy)"
                  title="M4 Hybrid (Italy)"
                  item_type="prem"
                  text="▄M4 Hybrid"
                  intname="it_sherman_75_37"
                  type="ground"
                />
                <EmptyDiv />
              </td>
              <td>
                <TechTreeItem
                  link="/Turan_II"
                  title="Turan II"
                  item_type="prem"
                  text="Turan II"
                  intname="it_41m_turan_2"
                  type="ground"
                />
                <EmptyDiv />
                <TechTreeItem
                  link="/P40_%22G.C._Leoncello%22"
                  title='P40 "G.C. Leoncello"'
                  item_type="prem"
                  text='P40 "G.C. Leoncello"'
                  intname="it_p_26_40"
                  type="ground"
                />
                <EmptyDiv />
              </td>
            </tr>
            <tr>
              <Rank rank="III" />
              <td>
                <TechTreeItem
                  link="/Breda_501"
                  title="Breda 501"
                  item_type="own"
                  text="Breda 501"
                  intname="it_semovente_breda_501"
                  type="ground"
                />
                <Arrow type="small" />
                <TechTreeItem
                  link="/M18_(Italy)"
                  title="M18 (Italy)"
                  item_type="own"
                  text="▄M18"
                  intname="it_m18_hellcat"
                  type="ground"
                />
                <div className="tree-arrow">
                  <img src="/images/Arrow_tail.png" alt="Arrow_tail.png" />
                  <br />
                  <img src="/images/Arrow_center.png" alt="Arrow_center.png" />
                  <br />
                  <img src="/images/Arrow_head.png" alt="Arrow_head.png" />
                </div>
              </td>
              <td>
                <TechTreeItem
                  link="/M4A4_(Italy)"
                  title="M4A4 (Italy)"
                  item_type="own"
                  text="▄M4A4"
                  intname="it_m4a4_sherman"
                  type="ground"
                />
                <Arrow type="small" />
                <TechTreeItem
                  link="/M4_Tipo_IC"
                  title="M4 Tipo IC"
                  item_type="own"
                  text="M4 Tipo IC"
                  intname="it_sherman_vii"
                  type="ground"
                />
                <Arrow type="small" />
                <TechTreeItem
                  link="/Sherman_Vc_(Italy)"
                  title="Sherman Vc (Italy)"
                  item_type="own"
                  text="▄Sherman Vc"
                  intname="it_sherman_vc_firefly"
                  type="ground"
                />
                <Arrow type="small" />
              </td>
              <td>
                <TechTreeItem
                  link="/R3_T20_FA-HS"
                  title="R3 T20 FA-HS"
                  item_type="own"
                  text="R3 T20 FA-HS"
                  intname="it_oto_r3_t20_fa"
                  type="ground"
                />
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
                <TechTreeItem
                  link="/90/53_M41M"
                  title="90/53 M41M"
                  item_type="own"
                  text="90/53 M41M"
                  intname="it_semovente_m41m_90"
                  type="ground"
                />
                <Arrow type="small" />
                <TechTreeItem
                  link="/StuG_III_G_(Italy)"
                  title="StuG III G (Italy)"
                  item_type="own"
                  text="▄StuG III G"
                  intname="it_stug_iii_ausf_g"
                  type="ground"
                />
                <Arrow type="small" />
                <TechTreeItem
                  link="/75/46_M43"
                  title="75/46 M43"
                  item_type="own"
                  text="75/46 M43"
                  intname="it_semovente_m43_75_46"
                  type="ground"
                />
                <Arrow type="small" />
              </td>
              <td style={{ borderLeft: "solid 1px #cccccc" }}>
                <TechTreeItem
                  link="/M43_%22G.C.Leoncello%22"
                  title='M43 "G.C.Leoncello"'
                  item_type="prem"
                  text='M43 "G.C.Leoncello"'
                  intname="it_semovente_m43_105_leoncello"
                  type="ground"
                />
                <EmptyDiv />
                <TechTreeItem
                  link="/Pz.IV_G_(Italy)"
                  title="Pz.IV G (Italy)"
                  item_type="prem"
                  text="▄Pz.IV G"
                  intname="it_pzkpfw_iv_ausf_g"
                  type="ground"
                />
                <EmptyDiv />
              </td>
              <td>
                <EmptyDiv />
              </td>
            </tr>
            <tr>
              <Rank rank="IV" />
              <td>
                <TechTreeItem
                  link="/FIAT_6614"
                  title="FIAT 6614"
                  item_type="own"
                  text="FIAT 6614"
                  intname="it_fiat_6614_106sr"
                  type="ground"
                />
                <Arrow type="small" />
                <TechTreeItem
                  link="/AUBL/74"
                  title="AUBL/74"
                  item_type="own"
                  text="AUBL/74"
                  intname="it_fiat_6616_cockerill"
                  type="ground"
                />
                <Arrow type="small" />
              </td>
              <td>
                <TechTreeItem
                  link="/M26A1"
                  title="M26A1"
                  item_type="own"
                  text="M26A1"
                  intname="it_m26a1_pershing"
                  type="ground"
                />
                <div className="tree-arrow">
                  <img src="/images/Arrow_tail.png" alt="Arrow_tail.png" />
                  <br />
                  <img src="/images/Arrow_center.png" alt="Arrow_center.png" />
                  <br />
                  <img src="/images/Arrow_head.png" alt="Arrow_head.png" />
                </div>
              </td>
              <td>
                <div className="tree-arrow">
                  <img src="/images/Arrow_tail.png" alt="Arrow_tail.png" />
                  <br />
                  <img src="/images/Arrow_center.png" alt="Arrow_center.png" />
                  <br />
                  <img src="/images/Arrow_center.png" alt="Arrow_center.png" />
                  <br />
                  <img src="/images/Arrow_head.png" alt="Arrow_head.png" />
                </div>
              </td>
              <td>
                <TechTreeItem
                  link="/M36B1"
                  title="M36B1"
                  item_type="own"
                  text="M36B1"
                  intname="it_m36b1"
                  type="ground"
                />
                <div className="tree-arrow">
                  <img src="/images/Arrow_tail.png" alt="Arrow_tail.png" />
                  <br />
                  <img src="/images/Arrow_center.png" alt="Arrow_center.png" />
                  <br />
                  <img src="/images/Arrow_head.png" alt="Arrow_head.png" />
                </div>
              </td>
              <td style={{ borderLeft: "solid 1px #cccccc" }}>
                <TechTreeItem
                  link="/M26_%22D.C.Ariete%22"
                  title='M26 "D.C.Ariete"'
                  item_type="prem"
                  text='M26 "D.C.Ariete"'
                  intname="it_m26_ariete"
                  type="ground"
                />
                <EmptyDiv />
              </td>
              <td>
                <EmptyDiv />
              </td>
            </tr>
            <tr>
              <Rank rank="V" />
              <td>
                <TechTreeItem
                  link="/C13_T90"
                  title="C13 T90"
                  item_type="own"
                  text="C13 T90"
                  intname="it_c13_t90"
                  type="ground"
                />
                <Arrow type="small" />
                <TechTreeItem
                  link="/R3_T106_FA"
                  title="R3 T106 FA"
                  item_type="own"
                  text="R3 T106 FA"
                  intname="it_oto_r3_106sr"
                  type="ground"
                />
                <Arrow type="small" />
              </td>
              <td>
                <TechTreeItem
                  link="/M47_(105/55)"
                  title="M47 (105/55)"
                  item_type="own"
                  text="M47 (105/55)"
                  intname="it_m47_105"
                  type="ground"
                />
                <Arrow type="small" />
                <TechTreeItem
                  link="/OF-40"
                  title="OF-40"
                  item_type="own"
                  text="OF-40"
                  intname="it_of_40_mk_1"
                  type="ground"
                />
                <Arrow type="small" />
              </td>
              <td>
                <TechTreeItem
                  link="/SIDAM_25"
                  title="SIDAM 25"
                  item_type="own"
                  text="SIDAM 25"
                  intname="it_otobreda_sidam_25"
                  type="ground"
                />
                <div className="tree-arrow">
                  <img src="/images/Arrow_tail.png" alt="Arrow_tail.png" />
                  <br />
                  <img src="/images/Arrow_center.png" alt="Arrow_center.png" />
                  <br />
                  <img src="/images/Arrow_head.png" alt="Arrow_head.png" />
                </div>
              </td>
              <td>
                <TechTreeItem
                  link="/M113A1_(TOW)"
                  title="M113A1 (TOW)"
                  item_type="own"
                  text="M113A1 (TOW)"
                  intname="it_m113a1_tow"
                  type="ground"
                />
                <div className="tree-arrow">
                  <img src="/images/Arrow_tail.png" alt="Arrow_tail.png" />
                  <br />
                  <img src="/images/Arrow_center.png" alt="Arrow_center.png" />
                  <br />
                  <img src="/images/Arrow_head.png" alt="Arrow_head.png" />
                </div>
              </td>
              <td style={{ borderLeft: "solid 1px #cccccc" }}>
                <TechTreeItem
                  link="/M60A1_%22D.C.Ariete%22"
                  title='M60A1 "D.C.Ariete"'
                  item_type="prem"
                  text='M60A1 "D.C.Ariete"'
                  intname="it_m60a1_ariete"
                  type="ground"
                />
                <EmptyDiv />
              </td>
              <td>
                <TechTreeItem
                  link="/AUBL/74_HVG"
                  title="AUBL/74 HVG"
                  item_type="prem"
                  text="AUBL/74 HVG"
                  intname="it_aubl_74_60_70m"
                  type="ground"
                />
              </td>
            </tr>
            <tr>
              <Rank rank="VI" />
              <td>
                <TechTreeItem
                  link="/Centauro_I_105"
                  title="Centauro I 105"
                  item_type="own"
                  text="Centauro I 105"
                  intname="it_b1_centauro"
                  type="ground"
                />
                <Arrow type="small" />
                <TechTreeItem
                  link="/Centauro_I_105_R"
                  title="Centauro I 105 R"
                  item_type="own"
                  text="Centauro I 105 R"
                  intname="it_b1_centauro_romor"
                  type="ground"
                />
                <Arrow type="small" />
                <TechTreeItem
                  link="/VCC-80/60"
                  title="VCC-80/60"
                  item_type="own"
                  text="VCC-80/60"
                  intname="it_vcc_80_hitfist_60"
                  type="ground"
                />
                <Arrow type="small" />
              </td>
              <td>
                <TechTreeItem
                  link="/OF-40_Mk.2A"
                  title="OF-40 Mk.2A"
                  item_type="own"
                  text="OF-40 Mk.2A"
                  intname="it_of_40_mk_2a"
                  type="ground"
                />
                <Arrow type="small" />
                <TechTreeItem
                  link="/Leopard_1A5_(Italy)"
                  title="Leopard 1A5 (Italy)"
                  item_type="own"
                  text="▄Leopard 1A5"
                  intname="it_leopard_1a5"
                  type="ground"
                />
                <Arrow type="small" />
                <TechTreeItem
                  link="/Ariete_(P)"
                  title="Ariete (P)"
                  item_type="own"
                  text="Ariete (P)"
                  intname="it_c1_ariete_preserie"
                  type="ground"
                />
                <Arrow type="small" />
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
                <TechTreeItem
                  link="/VBC_(PT2)"
                  title="VBC (PT2)"
                  item_type="own"
                  text="VBC (PT2)"
                  intname="it_vbc_pt2"
                  type="ground"
                />
                <Arrow type="small" />
                <TechTreeItem
                  link="/Dardo"
                  title="Dardo"
                  item_type="own"
                  text="Dardo"
                  intname="it_dardo_vcc"
                  type="ground"
                />
                <div className="tree-arrow">
                  <img src="/images/Arrow_tail.png" alt="Arrow_tail.png" />
                  <br />
                  <img src="/images/Arrow_center.png" alt="Arrow_center.png" />
                  <br />
                  <img src="/images/Arrow_head.png" alt="Arrow_head.png" />
                </div>
              </td>
              <td style={{ borderLeft: "solid 1px #cccccc" }}>
                <TechTreeItem
                  link="/OF-40_(MTCA)"
                  title="OF-40 (MTCA)"
                  item_type="prem"
                  text="OF-40 (MTCA)"
                  intname="it_of_40_mtca"
                  type="ground"
                />
              </td>
              <td />
            </tr>
            <tr>
              <Rank rank="VII" />
              <td>
                <TechTreeItem
                  link="/Centauro_I_120"
                  title="Centauro I 120"
                  item_type="own"
                  text="Centauro I 120"
                  intname="it_centauro_mgs_120"
                  type="ground"
                />
                <EmptyDiv />
              </td>
              <td>
                <TechTreeItem
                  link="/Ariete_PSO"
                  title="Ariete PSO"
                  item_type="own"
                  text="Ariete PSO"
                  intname="it_c1_ariete_pso"
                  type="ground"
                />
                <Arrow type="small" />
                <TechTreeItem
                  link="/Ariete"
                  title="Ariete"
                  item_type="own"
                  text="Ariete"
                  intname="it_c1_ariete"
                  type="ground"
                />
                <EmptyDiv />
              </td>
              <td>
                <TechTreeItem
                  link="/SIDAM_25_(Mistral)"
                  title="SIDAM 25 (Mistral)"
                  item_type="own"
                  text="SIDAM 25 (Mistral)"
                  intname="it_otobreda_sidam_25_mistral"
                  type="ground"
                />
                <Arrow type="small" />
                <TechTreeItem
                  link="/OTOMATIC"
                  title="OTOMATIC"
                  item_type="own"
                  text="OTOMATIC"
                  intname="it_otomatic"
                  type="ground"
                />
                <EmptyDiv />
              </td>
              <td>
                <TechTreeItem
                  link="/VCC-80/30"
                  title="VCC-80/30"
                  item_type="own"
                  text="VCC-80/30"
                  intname="it_vcc_80_hitfist_30"
                  type="ground"
                />
                <EmptyDiv />
              </td>
              <td style={{ borderLeft: "solid 1px #cccccc" }}>
                <EmptyDiv />
              </td>
              <td>
                <EmptyDiv />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <MediaHead />
      <div className="video_gallery">
        <a href="https://yewtu.be/LcDWEzB8TKE">
          <b>Italian ground forces: speed and firepower</b> - <i>War Thunder Official Channel</i>
        </a>
        <a href="https://yewtu.be/584AxCngmho">
          <b>Italian ground forces Tier I - Review and Analysis</b> - <i>Oxy</i>
        </a>
        <a href="https://yewtu.be/ajd08SXOFXk">
          <b>Italian ground forces Tier II - Review and Analysis</b> - <i>Oxy</i>
        </a>
        <a href="https://yewtu.be/Hj2A9I_nJ_A">
          <b>Italian ground forces Tier III - Review and Analysis</b> - <i>Oxy</i>
        </a>
        <a href="https://yewtu.be/yYOVd6rMmU4">
          <b>Italian ground forces Tier IV - Review and Analysis</b> - <i>Oxy</i>
        </a>
        <a href="https://yewtu.be/weVBbUvQfHo">
          <b>Italian ground forces Tier V - Review and Analysis</b> - <i>Oxy</i>
        </a>
        <a href="https://yewtu.be/V5u7dkD46-8">
          <b>Italian ground forces Tier VI &amp; VII - Review and Analysis</b> - <i>Oxy</i>
        </a>
        <a href="https://yewtu.be/4zcqjXX_ZY4">
          <b>Italian ground forces addendum</b> - <i>Oxy</i>
        </a>
      </div>
    </div>
  );
}
