import { Arrow, EmptyDiv, MediaHead, Rank, Research, TechTreeItem, TreeFolder } from "../TechTree";

export function BritainAircraft() {
  return (
    <div className="mw-parser-output">
      <div className="tree">
        <table rules="rows" width="100%">
          <tbody>
            <Research research={5} premium={2} />
            <tr>
              <Rank rank="I" />
              <td>
                <TreeFolder name="Fury" img="fury_mk_group">
                  <TechTreeItem
                    link="/Fury_Mk_I"
                    title="Fury Mk I"
                    item_type="own"
                    text="Fury&nbsp;Mk I"
                    intname="fury_mk1"
                    type="aircraft"
                  />
                  <Arrow type="small" />
                  <TechTreeItem
                    link="/Fury_Mk_II"
                    title="Fury Mk II"
                    item_type="own"
                    text="Fury&nbsp;Mk II"
                    intname="fury_mk2"
                    type="aircraft"
                  />
                </TreeFolder>
              </td>
              <td>
                <TechTreeItem
                  link="/Gladiator_Mk_IIF"
                  title="Gladiator Mk IIF"
                  item_type="own"
                  text="Gladiator&nbsp;Mk&nbsp;IIF"
                  intname="gladiator_mk2_france"
                  type="aircraft"
                />
                <EmptyDiv />
                <TechTreeItem
                  link="/Gladiator_Mk_IIS"
                  title="Gladiator Mk IIS"
                  item_type="own"
                  text="Gladiator&nbsp;Mk&nbsp;IIS"
                  intname="gladiator_mk2_silver"
                  type="aircraft"
                />
                <EmptyDiv />
                <TechTreeItem
                  link="/Gladiator_Mk_II"
                  title="Gladiator Mk II"
                  item_type="own"
                  text="Gladiator&nbsp;Mk&nbsp;II"
                  intname="gladiator_mk2"
                  type="aircraft"
                />
              </td>
              <td>
                <TechTreeItem
                  link="/Nimrod_Mk_I"
                  title="Nimrod Mk I"
                  item_type="own"
                  text="Nimrod&nbsp;Mk I"
                  intname="nimrod_mk1"
                  type="aircraft"
                />
                <Arrow type="small" />
                <TechTreeItem
                  link="/Nimrod_Mk_II"
                  title="Nimrod Mk II"
                  item_type="own"
                  text="Nimrod&nbsp;Mk II"
                  intname="nimrod_mk2"
                  type="aircraft"
                />
                <Arrow type="small" />
                <TechTreeItem
                  link="/Sea_Gladiator_Mk_I"
                  title="Sea Gladiator Mk I"
                  item_type="own"
                  text="Sea Gladiator&nbsp;Mk I"
                  intname="gladiator_mk2_navy"
                  type="aircraft"
                />
                <Arrow type="small" />
              </td>
              <td>
                <TechTreeItem
                  link="/V-156-B1"
                  title="V-156-B1"
                  item_type="own"
                  text="V-156-B1"
                  intname="v_156_b1"
                  type="aircraft"
                />
                <Arrow type="small" />
                <TechTreeItem
                  link="/Blenheim_Mk_IV"
                  title="Blenheim Mk IV"
                  item_type="own"
                  text="Blenheim&nbsp;Mk&nbsp;IV"
                  intname="blenheim_mkiv"
                  type="aircraft"
                />
                <Arrow type="small" />
                <TechTreeItem
                  link="/Beaufort_Mk_VIII"
                  title="Beaufort Mk VIII"
                  item_type="own"
                  text="Beaufort&nbsp;Mk&nbsp;VIII"
                  intname="beaufort_mkviii"
                  type="aircraft"
                />
                <Arrow type="small" />
              </td>
              <td>
                <TechTreeItem
                  link="/Swordfish_Mk_I"
                  title="Swordfish Mk I"
                  item_type="own"
                  text="Swordfish&nbsp;Mk&nbsp;I"
                  intname="swordfish_mk1"
                  type="aircraft"
                />
                <Arrow type="small" />
                <TreeFolder name="Hampden Mk I" img="hp52_hampden_group">
                  <TechTreeItem
                    link="/Hampden_Mk_I"
                    title="Hampden Mk I"
                    item_type="own"
                    text="Hampden Mk I"
                    intname="hp52_hampden_mk1_late"
                    type="aircraft"
                  />
                  <Arrow type="small" />
                  <TechTreeItem
                    link="/Hampden_TB_Mk_I"
                    title="Hampden TB Mk I"
                    item_type="own"
                    text="Hampden TB Mk I"
                    intname="hp52_hampden_tbmk1"
                    type="aircraft"
                  />
                </TreeFolder>
                <Arrow type="small" />
                <TechTreeItem
                  link="/Sunderland_Mk_IIIa"
                  title="Sunderland Mk IIIa"
                  item_type="own"
                  text="Sunderland Mk IIIa"
                  intname="sunderland_mk3a"
                  type="aircraft"
                />
                <Arrow type="small" />
              </td>
              <td style={{ borderLeft: "solid 1px #cccccc" }}>
                <TechTreeItem
                  link="/Tuck%27s_Gladiator_Mk_II"
                  title="Tuck's Gladiator Mk II"
                  item_type="prem"
                  text="Tuck's Gladiator Mk II"
                  intname="gladiator_mk2_tuck"
                  type="aircraft"
                />
                <EmptyDiv />
                <TechTreeItem
                  link="/Wirraway_(Great_Britain)"
                  title="Wirraway (Great Britain)"
                  item_type="prem"
                  text="▄Wirraway"
                  intname="wirraway"
                  type="aircraft"
                />
                <EmptyDiv />
              </td>
              <td>
                <TechTreeItem
                  link="/Swordfish_Mk_II"
                  title="Swordfish Mk II"
                  item_type="prem"
                  text="Swordfish&nbsp;Mk&nbsp;II"
                  intname="swordfish_mk2"
                  type="aircraft"
                />
                <EmptyDiv />
                <TechTreeItem
                  link="/Havoc_Mk_I_(Great_Britain)"
                  title="Havoc Mk I (Great Britain)"
                  item_type="prem"
                  text="▄Havoc&nbsp;Mk I"
                  intname="intruder_mk_1"
                  type="aircraft"
                />
                <EmptyDiv />
                <TechTreeItem
                  link="/Catalina_Mk_IIIa_(Great_Britain)"
                  title="Catalina Mk IIIa (Great Britain)"
                  item_type="prem"
                  text="▄Catalina Mk IIIa"
                  intname="pby-5a_raf"
                  type="aircraft"
                />
                <EmptyDiv />
              </td>
            </tr>
            <tr>
              <Rank rank="II" />
              <td>
                <TreeFolder name="Hurricane" img="hurricane_group">
                  <TechTreeItem
                    link="/Hurricane_Mk_IIB/Trop"
                    title="Hurricane Mk IIB/Trop"
                    item_type="own"
                    text="Hurricane&nbsp;Mk&nbsp;IIB/Trop"
                    intname="hurricanemkii"
                    type="aircraft"
                  />
                  <Arrow type="small" />
                  <TechTreeItem
                    link="/Hurricane_Mk_IV"
                    title="Hurricane Mk IV"
                    item_type="own"
                    text="Hurricane&nbsp;Mk&nbsp;IV"
                    intname="hurricane_mk4"
                    type="aircraft"
                  />
                </TreeFolder>
                <Arrow type="small" />
                <TechTreeItem
                  link="/Hurricane_Mk_I/L"
                  title="Hurricane Mk I/L"
                  item_type="own"
                  text="Hurricane&nbsp;Mk&nbsp;I/L"
                  intname="hurricane_mk1"
                  type="aircraft"
                />
                <Arrow type="small" />
                <TechTreeItem
                  link="/Typhoon_Mk_Ia"
                  title="Typhoon Mk Ia"
                  item_type="own"
                  text="Typhoon&nbsp;Mk Ia"
                  intname="typhoon_mk1a"
                  type="aircraft"
                />
                <EmptyDiv />
              </td>
              <td>
                <TechTreeItem
                  link="/Spitfire_Mk_Ia"
                  title="Spitfire Mk Ia"
                  item_type="own"
                  text="Spitfire&nbsp;Mk&nbsp;Ia"
                  intname="spitfire_mk1"
                  type="aircraft"
                />
                <Arrow type="small" />
                <TechTreeItem
                  link="/Spitfire_Mk_IIa"
                  title="Spitfire Mk IIa"
                  item_type="own"
                  text="Spitfire&nbsp;Mk&nbsp;IIa"
                  intname="spitfiremkiia"
                  type="aircraft"
                />
                <Arrow type="small" />
                <TechTreeItem
                  link="/Spitfire_Mk_IIb"
                  title="Spitfire Mk IIb"
                  item_type="own"
                  text="Spitfire&nbsp;Mk&nbsp;IIb"
                  intname="spitfiremkii"
                  type="aircraft"
                />
                <EmptyDiv />
              </td>
              <td>
                <TechTreeItem
                  link="/Sea_Hurricane_Mk_IB"
                  title="Sea Hurricane Mk IB"
                  item_type="own"
                  text="Sea Hurricane Mk IB"
                  intname="hurricane_mk1b"
                  type="aircraft"
                />
                <Arrow type="small" />
                <TechTreeItem
                  link="/Sea_Hurricane_Mk_IC"
                  title="Sea Hurricane Mk IC"
                  item_type="own"
                  text="Sea Hurricane Mk IC"
                  intname="hurricane_mk1c"
                  type="aircraft"
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
                <TechTreeItem
                  link="/Beaufighter_Mk_VIc"
                  title="Beaufighter Mk VIc"
                  item_type="own"
                  text="Beaufighter&nbsp;Mk&nbsp;VIc"
                  intname="beaufighter_mk6c"
                  type="aircraft"
                />
                <Arrow type="small" />
                <TechTreeItem
                  link="/Beaufighter_Mk_X"
                  title="Beaufighter Mk X"
                  item_type="own"
                  text="Beaufighter&nbsp;Mk&nbsp;X"
                  intname="beaufighter_mkx"
                  type="aircraft"
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
                <TechTreeItem
                  link="/Sunderland_Mk_V"
                  title="Sunderland Mk V"
                  item_type="own"
                  text="Sunderland Mk V"
                  intname="sunderland_mk5"
                  type="aircraft"
                />
                <Arrow type="small" />
                <TreeFolder name="Wellington" img="wellington_group">
                  <TechTreeItem
                    link="/Wellington_Mk_Ic"
                    title="Wellington Mk Ic"
                    item_type="own"
                    text="Wellington&nbsp;Mk Ic"
                    intname="wellington_mk1c"
                    type="aircraft"
                  />
                  <Arrow type="small" />
                  <TechTreeItem
                    link="/Wellington_Mk_Ic/L"
                    title="Wellington Mk Ic/L"
                    item_type="own"
                    text="Wellington&nbsp;Mk Ic/L"
                    intname="wellington_mk1c_late"
                    type="aircraft"
                  />
                  <Arrow type="small" />
                  <TechTreeItem
                    link="/Wellington_Mk_III"
                    title="Wellington Mk III"
                    item_type="own"
                    text="Wellington&nbsp;Mk III"
                    intname="wellington_mk3"
                    type="aircraft"
                  />
                  <Arrow type="small" />
                  <TechTreeItem
                    link="/Wellington_Mk_X"
                    title="Wellington Mk X"
                    item_type="own"
                    text="Wellington&nbsp;Mk X"
                    intname="wellington_mk10"
                    type="aircraft"
                  />
                </TreeFolder>
                <Arrow type="small" />
                <TechTreeItem
                  link="/Halifax_B_Mk_IIIa"
                  title="Halifax B Mk IIIa"
                  item_type="own"
                  text="Halifax B Mk IIIa"
                  intname="halifax_mk3"
                  type="aircraft"
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
                <TechTreeItem
                  link="/Hudson_Mk_V_(Great_Britain)"
                  title="Hudson Mk V (Great Britain)"
                  item_type="prem"
                  text="▄Hudson Mk V"
                  intname="hudson_mk_v"
                  type="aircraft"
                />
                <EmptyDiv />
                <TechTreeItem
                  link="/Avenger_Mk_II_(Great_Britain)"
                  title="Avenger Mk II (Great Britain)"
                  item_type="prem"
                  text="▄Avenger Mk II"
                  intname="avenger_mk1"
                  type="aircraft"
                />
                <EmptyDiv />
                <TechTreeItem
                  link="/Spitfire_Mk.IIa_Venture_I"
                  title="Spitfire Mk.IIa Venture I"
                  item_type="prem"
                  text="Spitfire Mk.IIa Venture I"
                  intname="spitfiremkiia_ep"
                  type="aircraft"
                />
                <EmptyDiv />
                <TechTreeItem
                  link="/Corsair_F_Mk_II_(Great_Britain)"
                  title="Corsair F Mk II (Great Britain)"
                  item_type="prem"
                  text="▄Corsair F Mk II"
                  intname="corsair_fmk2"
                  type="aircraft"
                />
                <EmptyDiv />
                <TechTreeItem
                  link="/D.520_(Great_Britain)"
                  title="D.520 (Great Britain)"
                  item_type="prem"
                  text="▄D.520"
                  intname="d_520"
                  type="aircraft"
                />
                <EmptyDiv />
                <TechTreeItem
                  link="/D.521_(Great_Britain)"
                  title="D.521 (Great Britain)"
                  item_type="own"
                  text="▄D.521"
                  intname="d_521"
                  type="aircraft"
                />
                <EmptyDiv />
                <TechTreeItem
                  link="/Firecrest"
                  title="Firecrest"
                  item_type="squad"
                  text="Firecrest"
                  intname="b_48_firecrest"
                  type="aircraft"
                />
                <EmptyDiv />
              </td>
              <td>
                <TechTreeItem
                  link="/Boston_Mk_I_(Great_Britain)"
                  title="Boston Mk I (Great Britain)"
                  item_type="prem"
                  text="▄Boston&nbsp;Mk I"
                  intname="boston_mk_1"
                  type="aircraft"
                />
                <EmptyDiv />
                <TechTreeItem
                  link="/DB-7_(Great_Britain)"
                  title="DB-7 (Great Britain)"
                  item_type="prem"
                  text="▄DB-7"
                  intname="db_7"
                  type="aircraft"
                />
                <EmptyDiv />
                <TechTreeItem
                  link="/Hurricane_Mk.I/L_FAA_M"
                  title="Hurricane Mk.I/L FAA M"
                  item_type="prem"
                  text="Hurricane Mk.I/L FAA M"
                  intname="hurricane_mk1_late_ep"
                  type="aircraft"
                />
                <EmptyDiv />
                <TechTreeItem
                  link="/Martlet_Mk_IV_(Great_Britain)"
                  title="Martlet Mk IV (Great Britain)"
                  item_type="prem"
                  text="▄Martlet Mk IV"
                  intname="f4f-4_martlet_mk4"
                  type="aircraft"
                />
                <EmptyDiv />
                <TechTreeItem
                  link="/Beaufighter_Mk_I_(40-mm)"
                  title="Beaufighter Mk I (40-mm)"
                  item_type="prem"
                  text="Beaufighter Mk I (40-mm)"
                  intname="beaufighter_mk1_40mm"
                  type="aircraft"
                />
                <EmptyDiv />
                <TechTreeItem
                  link="/Boomerang_Mk_I_(Great_Britain)"
                  title="Boomerang Mk I (Great Britain)"
                  item_type="prem"
                  text="▄Boomerang&nbsp;Mk&nbsp;I"
                  intname="boomerang_mki"
                  type="aircraft"
                />
                <Arrow type="small" />
                <TechTreeItem
                  link="/Boomerang_Mk_II_(Great_Britain)"
                  title="Boomerang Mk II (Great Britain)"
                  item_type="prem"
                  text="▄Boomerang&nbsp;Mk&nbsp;II"
                  intname="boomerang_mkii"
                  type="aircraft"
                />
                <EmptyDiv />
              </td>
            </tr>
            <tr>
              <Rank rank="III" />
              <td>
                <TechTreeItem
                  link="/Typhoon_Mk_Ib/L"
                  title="Typhoon Mk Ib/L"
                  item_type="own"
                  text="Typhoon&nbsp;Mk Ib/L"
                  intname="typhoon_mk1b_late"
                  type="aircraft"
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
                <TreeFolder name="Spitfire Mk V" img="spitfire_mk5_group">
                  <TechTreeItem
                    link="/Spitfire_Mk_Vb/trop"
                    title="Spitfire Mk Vb/trop"
                    item_type="own"
                    text="Spitfire&nbsp;Mk&nbsp;Vb/trop"
                    intname="spitfire_mk5b"
                    type="aircraft"
                  />
                  <Arrow type="small" />
                  <TechTreeItem
                    link="/Spitfire_Mk_Vb"
                    title="Spitfire Mk Vb"
                    item_type="own"
                    text="Spitfire&nbsp;Mk&nbsp;Vb"
                    intname="spitfire_mk5b_notrop"
                    type="aircraft"
                  />
                  <Arrow type="small" />
                  <TechTreeItem
                    link="/Spitfire_Mk_Vc/trop"
                    title="Spitfire Mk Vc/trop"
                    item_type="own"
                    text="Spitfire&nbsp;Mk&nbsp;Vc/trop"
                    intname="spitfire_mk5c"
                    type="aircraft"
                  />
                  <Arrow type="small" />
                  <TechTreeItem
                    link="/Spitfire_Mk_Vc"
                    title="Spitfire Mk Vc"
                    item_type="own"
                    text="Spitfire&nbsp;Mk&nbsp;Vc"
                    intname="spitfire_mk5c_notrop"
                    type="aircraft"
                  />
                </TreeFolder>
                <Arrow type="small" />
                <TechTreeItem
                  link="/Spitfire_F_Mk_IX"
                  title="Spitfire F Mk IX"
                  item_type="own"
                  text="Spitfire F Mk&nbsp;IX"
                  intname="spitfire_ix_early"
                  type="aircraft"
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
                <TreeFolder name="Firefly" img="firefly_group">
                  <TechTreeItem
                    link="/Firefly_F_Mk_I"
                    title="Firefly F Mk I"
                    item_type="own"
                    text="Firefly F Mk I"
                    intname="firefly_mk1"
                    type="aircraft"
                  />
                  <Arrow type="small" />
                  <TechTreeItem
                    link="/Firefly_FR_Mk_V"
                    title="Firefly FR Mk V"
                    item_type="own"
                    text="Firefly FR Mk V"
                    intname="firefly_mk5"
                    type="aircraft"
                  />
                </TreeFolder>
                <Arrow type="small" />
                <TechTreeItem
                  link="/Firebrand_TF_Mk_IV"
                  title="Firebrand TF Mk IV"
                  item_type="own"
                  text="Firebrand TF Mk IV"
                  intname="firebrand_tf4"
                  type="aircraft"
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
                <TreeFolder name="Mosquito" img="mosquito_group">
                  <TechTreeItem
                    link="/Mosquito_FB_Mk_VI"
                    title="Mosquito FB Mk VI"
                    item_type="own"
                    text="Mosquito&nbsp;FB&nbsp;Mk&nbsp;VI"
                    intname="mosquito_fb_mk6"
                    type="aircraft"
                  />
                  <Arrow type="small" />
                  <TechTreeItem
                    link="/Mosquito_FB_Mk_XVIII"
                    title="Mosquito FB Mk XVIII"
                    item_type="own"
                    text="Mosquito&nbsp;FB&nbsp;Mk&nbsp;XVIII"
                    intname="mosquito_fb_mk18"
                    type="aircraft"
                  />
                </TreeFolder>
                <Arrow type="small" />
                <TechTreeItem
                  link="/Beaufighter_Mk_21"
                  title="Beaufighter Mk 21"
                  item_type="own"
                  text="Beaufighter&nbsp;Mk&nbsp;21"
                  intname="beaufighter_mk21"
                  type="aircraft"
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
                  link="/Stirling_B_Mk_I"
                  title="Stirling B Mk I"
                  item_type="own"
                  text="Stirling B Mk&nbsp;I"
                  intname="stirling_mk1"
                  type="aircraft"
                />
                <Arrow type="small" />
                <TechTreeItem
                  link="/Stirling_B_Mk_III"
                  title="Stirling B Mk III"
                  item_type="own"
                  text="Stirling B&nbsp;Mk&nbsp;III"
                  intname="stirling_mk3"
                  type="aircraft"
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
                  link="/Hellcat_Mk_II_(Great_Britain)"
                  title="Hellcat Mk II (Great Britain)"
                  item_type="prem"
                  text="▄Hellcat&nbsp;Mk II"
                  intname="hellcat_fmk1"
                  type="aircraft"
                />
                <EmptyDiv />
                <TechTreeItem
                  link="/Thunderbolt_Mk.1_(Great_Britain)"
                  title="Thunderbolt Mk.1 (Great Britain)"
                  item_type="prem"
                  text="▄Thunderbolt Mk.1"
                  intname="thunderbolt_mk1"
                  type="aircraft"
                />
                <EmptyDiv />
                <TechTreeItem
                  link="/Mustang_Mk_IA_(Great_Britain)"
                  title="Mustang Mk IA (Great Britain)"
                  item_type="prem"
                  text="▄Mustang&nbsp;Mk&nbsp;IA"
                  intname="p-51b"
                  type="aircraft"
                />
                <EmptyDiv />
              </td>
              <td>
                <TechTreeItem
                  link="/Typhoon_Mk_Ib"
                  title="Typhoon Mk Ib"
                  item_type="prem"
                  text="Typhoon&nbsp;Mk Ib"
                  intname="typhoon_mk1b"
                  type="aircraft"
                />
                <EmptyDiv />
                <TechTreeItem
                  link="/Whirlwind_P.9"
                  title="Whirlwind P.9"
                  item_type="prem"
                  text="Whirlwind P.9"
                  intname="whirlwind_p9"
                  type="aircraft"
                />
                <EmptyDiv />
                <TechTreeItem
                  link="/Spitfire_F_Mk_IXc"
                  title="Spitfire F Mk IXc"
                  item_type="prem"
                  text="Spitfire F&nbsp;Mk&nbsp;IXc"
                  intname="spitfire_mk9c_4cannons"
                  type="aircraft"
                />
                <EmptyDiv />
              </td>
            </tr>
            <tr>
              <Rank rank="IV" />
              <td>
                <TreeFolder name="Tempest Mk V" img="tempest_mkv_group">
                  <TechTreeItem
                    link="/Tempest_Mk_V"
                    title="Tempest Mk V"
                    item_type="own"
                    text="Tempest&nbsp;Mk&nbsp;V"
                    intname="tempest_mkv"
                    type="aircraft"
                  />
                  <Arrow type="small" />
                  <TechTreeItem
                    link="/Tempest_Mk_V_(Vickers_P)"
                    title="Tempest Mk V (Vickers P)"
                    item_type="own"
                    text="Tempest Mk V (Vickers P)"
                    intname="tempest_mkv_vikkers"
                    type="aircraft"
                  />
                </TreeFolder>
                <Arrow type="small" />
                <TechTreeItem
                  link="/Tempest_Mk_II"
                  title="Tempest Mk II"
                  item_type="own"
                  text="Tempest&nbsp;Mk&nbsp;II"
                  intname="tempest_mk2"
                  type="aircraft"
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
                  link="/Spitfire_F_Mk_XVI"
                  title="Spitfire F Mk XVI"
                  item_type="own"
                  text="Spitfire&nbsp;F Mk&nbsp;XVI"
                  intname="spitfire_xvi"
                  type="aircraft"
                />
                <Arrow type="small" />
                <TechTreeItem
                  link="/Spitfire_LF_Mk_IX"
                  title="Spitfire LF Mk IX"
                  item_type="own"
                  text="Spitfire&nbsp;LF Mk&nbsp;IX"
                  intname="spitfire_ix"
                  type="aircraft"
                />
                <Arrow type="small" />
                <TreeFolder name="Spitfire (Griffon)" img="spitfire_f2x_group">
                  <TechTreeItem
                    link="/Spitfire_F_Mk_XIVe"
                    title="Spitfire F Mk XIVe"
                    item_type="own"
                    text="Spitfire F Mk XIVe"
                    intname="spitfire_mk14e"
                    type="aircraft"
                  />
                  <Arrow type="small" />
                  <TechTreeItem
                    link="/Spitfire_F_Mk_XVIIIe"
                    title="Spitfire F Mk XVIIIe"
                    item_type="own"
                    text="Spitfire F Mk XVIIIe"
                    intname="spitfire_mk18e"
                    type="aircraft"
                  />
                  <Arrow type="small" />
                  <TechTreeItem
                    link="/Spitfire_F_Mk_22"
                    title="Spitfire F Mk 22"
                    item_type="own"
                    text="Spitfire F Mk 22"
                    intname="spitfire_f22"
                    type="aircraft"
                  />
                  <Arrow type="small" />
                  <TechTreeItem
                    link="/Spitfire_F_Mk_24"
                    title="Spitfire F Mk 24"
                    item_type="own"
                    text="Spitfire F Mk 24"
                    intname="spitfire_f24"
                    type="aircraft"
                  />
                </TreeFolder>
                <Arrow type="small" />
              </td>
              <td>
                <TechTreeItem
                  link="/Seafire_LF_Mk.III"
                  title="Seafire LF Mk.III"
                  item_type="own"
                  text="Seafire LF Mk.III"
                  intname="seafire_mk3"
                  type="aircraft"
                />
                <Arrow type="small" />
                <TreeFolder name="Seafire" img="seafire_group">
                  <TechTreeItem
                    link="/Seafire_F_Mk_XVII"
                    title="Seafire F Mk XVII"
                    item_type="own"
                    text="Seafire F Mk XVII"
                    intname="seafire_mk17"
                    type="aircraft"
                  />
                  <Arrow type="small" />
                  <TechTreeItem
                    link="/Seafire_FR_47"
                    title="Seafire FR 47"
                    item_type="own"
                    text="Seafire FR 47"
                    intname="seafire_fr47"
                    type="aircraft"
                  />
                </TreeFolder>
                <Arrow type="small" />
                <TechTreeItem
                  link="/Sea_Fury_FB_11"
                  title="Sea Fury FB 11"
                  item_type="own"
                  text="Sea Fury FB 11"
                  intname="sea_fury_fb11"
                  type="aircraft"
                />
                <Arrow type="small" />
              </td>
              <td>
                <TechTreeItem
                  link="/Whirlwind_Mk_I"
                  title="Whirlwind Mk I"
                  item_type="own"
                  text="Whirlwind Mk I"
                  intname="whirlwind_mk1"
                  type="aircraft"
                />
                <Arrow type="small" />
                <TechTreeItem
                  link="/Brigand_B_1"
                  title="Brigand B 1"
                  item_type="own"
                  text="Brigand B 1"
                  intname="brigand_b1"
                  type="aircraft"
                />
                <Arrow type="small" />
                <TechTreeItem
                  link="/Hornet_Mk.III"
                  title="Hornet Mk.III"
                  item_type="own"
                  text="Hornet Mk.III"
                  intname="hornet_mk3"
                  type="aircraft"
                />
                <Arrow type="small" />
              </td>
              <td>
                <TreeFolder name="Lancaster" img="lancaster_group">
                  <TechTreeItem
                    link="/Lancaster_B_Mk_I"
                    title="Lancaster B Mk I"
                    item_type="own"
                    text="Lancaster B&nbsp;Mk&nbsp;I"
                    intname="lancaster_mk1"
                    type="aircraft"
                  />
                  <Arrow type="small" />
                  <TechTreeItem
                    link="/Lancaster_B_Mk_III"
                    title="Lancaster B Mk III"
                    item_type="own"
                    text="Lancaster B&nbsp;Mk&nbsp;III"
                    intname="lancaster_mk3"
                    type="aircraft"
                  />
                </TreeFolder>
                <Arrow type="small" />
                <TechTreeItem
                  link="/Lincoln_B_Mk_II"
                  title="Lincoln B Mk II"
                  item_type="own"
                  text="Lincoln B Mk II"
                  intname="lincoln_b2"
                  type="aircraft"
                />
                <Arrow type="small" />
                <TechTreeItem
                  link="/Shackleton_MR.Mk.2"
                  title="Shackleton MR.Mk.2"
                  item_type="own"
                  text="Shackleton MR.Mk.2"
                  intname="shackleton_mr_mk_2"
                  type="aircraft"
                />
                <Arrow type="small" />
              </td>
              <td style={{ borderLeft: "solid 1px #cccccc" }}>
                <TechTreeItem
                  link="/MB.5"
                  title="MB.5"
                  item_type="prem"
                  text="MB.5"
                  intname="mb_5"
                  type="aircraft"
                />
                <EmptyDiv />
                <TechTreeItem
                  link="/Hornet_Mk.I"
                  title="Hornet Mk.I"
                  item_type="prem"
                  text="Hornet Mk.I"
                  intname="hornet_mk1"
                  type="aircraft"
                />
                <EmptyDiv />
                <TechTreeItem
                  link="/Spitfire_F_Mk_XIVc"
                  title="Spitfire F Mk XIVc"
                  item_type="prem"
                  text="Spitfire F Mk XIVc"
                  intname="spitfire_mk14c"
                  type="aircraft"
                />
                <EmptyDiv />
              </td>
              <td>
                <TechTreeItem
                  link="/Wyvern_S4"
                  title="Wyvern S4"
                  item_type="prem"
                  text="Wyvern S4"
                  intname="wyvern_s4"
                  type="aircraft"
                />
                <EmptyDiv />
                <TechTreeItem
                  link="/Spitfire_FR_Mk_XIVe"
                  title="Spitfire FR Mk XIVe"
                  item_type="prem"
                  text="Spitfire FR Mk XIVe"
                  intname="spitfire_fr_mk14e"
                  type="aircraft"
                />
                <EmptyDiv />
                <TechTreeItem
                  link="/Plagis%27_Spitfire_LF_Mk_IXc"
                  title="Plagis' Spitfire LF Mk IXc"
                  item_type="prem"
                  text="Plagis' Spitfire&nbsp;LF Mk&nbsp;IXc"
                  intname="spitfire_ix_plagis"
                  type="aircraft"
                />
                <EmptyDiv />
              </td>
            </tr>
            <tr>
              <Rank rank="V" />
              <td>
                <TechTreeItem
                  link="/Vampire_FB_5"
                  title="Vampire FB 5"
                  item_type="own"
                  text="Vampire FB 5"
                  intname="vampire_fb5"
                  type="aircraft"
                />
                <Arrow type="small" />
                <TechTreeItem
                  link="/Venom_FB.4"
                  title="Venom FB.4"
                  item_type="own"
                  text="Venom FB.4"
                  intname="venom_fb4"
                  type="aircraft"
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
                <TreeFolder name="Meteor F Mk 3" img="meteor_group">
                  <TechTreeItem
                    link="/Meteor_F_Mk_3"
                    title="Meteor F Mk 3"
                    item_type="own"
                    text="Meteor F Mk 3"
                    intname="meteor_fmk3"
                    type="aircraft"
                  />
                  <Arrow type="small" />
                  <TechTreeItem
                    link="/Sea_Meteor_F_Mk_3"
                    title="Sea Meteor F Mk 3"
                    item_type="own"
                    text="Sea&nbsp;Meteor F Mk 3"
                    intname="meteor_fmk3_navy"
                    type="aircraft"
                  />
                </TreeFolder>
                <Arrow type="small" />
                <TreeFolder name="Meteor F Mk 4" img="meteor4_group">
                  <TechTreeItem
                    link="/Meteor_F_Mk_4_G.41F"
                    title="Meteor F Mk 4 G.41F"
                    item_type="own"
                    text="Meteor&nbsp;F Mk 4 G.41F"
                    intname="meteor_fmk4_lw"
                    type="aircraft"
                  />
                  <Arrow type="small" />
                  <TechTreeItem
                    link="/Meteor_F_Mk_4_G.41G"
                    title="Meteor F Mk 4 G.41G"
                    item_type="own"
                    text="Meteor&nbsp;F Mk 4 G.41G"
                    intname="meteor_fmk4_sw"
                    type="aircraft"
                  />
                </TreeFolder>
                <Arrow type="small" />
                <TechTreeItem
                  link="/Meteor_F_Mk_8_G.41K"
                  title="Meteor F Mk 8 G.41K"
                  item_type="own"
                  text="Meteor&nbsp;F Mk 8 G.41K"
                  intname="meteor_fmk8"
                  type="aircraft"
                />
                <Arrow type="small" />
              </td>
              <td>
                <TechTreeItem
                  link="/Attacker_FB_1"
                  title="Attacker FB 1"
                  item_type="own"
                  text="Attacker FB 1"
                  intname="attaker_fb1"
                  type="aircraft"
                />
                <Arrow type="small" />
                <TechTreeItem
                  link="/Sea_Hawk_FGA.6"
                  title="Sea Hawk FGA.6"
                  item_type="own"
                  text="Sea Hawk FGA.6"
                  intname="sea_hawk_fga6"
                  type="aircraft"
                />
                <Arrow type="small" />
                <TechTreeItem
                  link="/Sea_Venom_FAW_20"
                  title="Sea Venom FAW 20"
                  item_type="own"
                  text="Sea Venom FAW 20"
                  intname="sea_venom_faw20"
                  type="aircraft"
                />
                <Arrow type="small" />
              </td>
              <td>
                <TechTreeItem
                  link="/Swift_F.1"
                  title="Swift F.1"
                  item_type="own"
                  text="Swift F.1"
                  intname="swift_f1"
                  type="aircraft"
                />
                <Arrow type="small" />
                <TechTreeItem
                  link="/Swift_F.7"
                  title="Swift F.7"
                  item_type="own"
                  text="Swift F.7"
                  intname="swift_f7"
                  type="aircraft"
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
                  link="/Canberra_B_Mk_2"
                  title="Canberra B Mk 2"
                  item_type="own"
                  text="Canberra B Mk 2"
                  intname="canberra_bmk2"
                  type="aircraft"
                />
                <Arrow type="small" />
                <TechTreeItem
                  link="/Canberra_B_(I)_Mk_6"
                  title="Canberra B (I) Mk 6"
                  item_type="own"
                  text="Canberra B (I) Mk 6"
                  intname="canberra_bimk6"
                  type="aircraft"
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
                  link="/Attacker_FB.2"
                  title="Attacker FB.2"
                  item_type="prem"
                  text="Attacker FB.2"
                  intname="attaker_fb2"
                  type="aircraft"
                />
                <EmptyDiv />
                <TechTreeItem
                  link="/Meteor_F_Mk.8_Reaper"
                  title="Meteor F Mk.8 Reaper"
                  item_type="prem"
                  text="Meteor&nbsp;F Mk.8 Reaper"
                  intname="meteor_fmk8_reaper"
                  type="aircraft"
                />
                <EmptyDiv />
                <TechTreeItem
                  link="/Sea_Vixen_F.A.W._Mk.2"
                  title="Sea Vixen F.A.W. Mk.2"
                  item_type="prem"
                  text="Sea Vixen F.A.W. Mk.2"
                  intname="dh_110_sea_vixen"
                  type="aircraft"
                />
                <EmptyDiv />
              </td>
              <td>
                <TechTreeItem
                  link="/Hunter_FGA.9"
                  title="Hunter FGA.9"
                  item_type="prem"
                  text="Hunter FGA.9"
                  intname="hunter_f9_rhodesia"
                  type="aircraft"
                />
                <EmptyDiv />
              </td>
            </tr>
            <tr>
              <Rank rank="VI" />
              <td>
                <TechTreeItem
                  link="/Hunter_F.1"
                  title="Hunter F.1"
                  item_type="own"
                  text="Hunter F.1"
                  intname="hunter_f1"
                  type="aircraft"
                />
                <Arrow type="small" />
                <TechTreeItem
                  link="/Hunter_F.6"
                  title="Hunter F.6"
                  item_type="own"
                  text="Hunter F.6"
                  intname="hunter_f6"
                  type="aircraft"
                />
                <Arrow type="small" />
              </td>
              <td>
                <TechTreeItem
                  link="/Javelin_F.(A.W.)_Mk.9"
                  title="Javelin F.(A.W.) Mk.9"
                  item_type="own"
                  text="Javelin F.(A.W.) Mk.9"
                  intname="javelin_fmk9"
                  type="aircraft"
                />
                <Arrow type="small" />
                <TechTreeItem
                  link="/Lightning_F.6"
                  title="Lightning F.6"
                  item_type="own"
                  text="Lightning F.6"
                  intname="lightning_f6"
                  type="aircraft"
                />
              </td>
              <td>
                <TechTreeItem
                  link="/Scimitar_F_Mk.1"
                  title="Scimitar F Mk.1"
                  item_type="own"
                  text="Scimitar F Mk.1"
                  intname="scimitar_f1"
                  type="aircraft"
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
                  link="/Harrier_GR.3"
                  title="Harrier GR.3"
                  item_type="own"
                  text="Harrier GR.3"
                  intname="harrier_gr3"
                  type="aircraft"
                />
                <Arrow type="small" />
                <TechTreeItem
                  link="/Jaguar_GR.1"
                  title="Jaguar GR.1"
                  item_type="own"
                  text="Jaguar GR.1"
                  intname="jaguar_gr1"
                  type="aircraft"
                />
                <Arrow type="small" />
              </td>
              <td>
                <TechTreeItem
                  link="/Buccaneer_S.2"
                  title="Buccaneer S.2"
                  item_type="own"
                  text="Buccaneer S.2"
                  intname="buccaneer_s2"
                  type="aircraft"
                />
              </td>
              <td style={{ borderLeft: "solid 1px #cccccc" }}>
                <TechTreeItem
                  link="/Harrier_GR.1"
                  title="Harrier GR.1"
                  item_type="prem"
                  text="Harrier GR.1"
                  intname="harrier_gr1"
                  type="aircraft"
                />
                <EmptyDiv />
                <TechTreeItem
                  link="/Lightning_F.53"
                  title="Lightning F.53"
                  item_type="prem"
                  text="Lightning F.53"
                  intname="lightning_f53"
                  type="aircraft"
                />
              </td>
              <td>
                <TechTreeItem
                  link="/Buccaneer_S.1"
                  title="Buccaneer S.1"
                  item_type="own"
                  text="Buccaneer S.1"
                  intname="buccaneer_s1"
                  type="aircraft"
                />
              </td>
            </tr>
            <tr>
              <Rank rank="VII" />
              <td>
                <TechTreeItem
                  link="/Phantom_FGR.2"
                  title="Phantom FGR.2"
                  item_type="own"
                  text="Phantom FGR.2"
                  intname="f-4m_fgr2"
                  type="aircraft"
                />
                <EmptyDiv />
              </td>
              <td>
                <EmptyDiv />
              </td>
              <td>
                <TechTreeItem
                  link="/Phantom_FG.1"
                  title="Phantom FG.1"
                  item_type="own"
                  text="Phantom FG.1"
                  intname="f-4k"
                  type="aircraft"
                />
                <EmptyDiv />
              </td>
              <td>
                <TechTreeItem
                  link="/Jaguar_GR.1A"
                  title="Jaguar GR.1A"
                  item_type="own"
                  text="Jaguar GR.1A"
                  intname="jaguar_gr1a"
                  type="aircraft"
                />
                <EmptyDiv />
              </td>
              <td>
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
        <a href="https://yewtu.be/J8LIhG0Xi_A">
          <b>Book of Records: British Aircraft</b> - <i>War Thunder Official Channel</i>
        </a>
        <a href="https://yewtu.be/475r7Z0w08s">
          <b>British Air Forces Rank II - Tutorial and Guide</b> - <i>Jengar</i>
        </a>
        <a href="https://yewtu.be/362970yT-KM">
          <b>British Air Forces Rank I - Tutorial and Guide</b> - <i>Jengar</i>
        </a>
        <a href="https://yewtu.be/pFgP4_KgvcU">
          <b>Climbing the ranks with British aircraft</b> - <i>War Thunder Official Channel</i>
        </a>
      </div>
    </div>
  );
}
