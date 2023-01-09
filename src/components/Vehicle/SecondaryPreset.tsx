import { useState } from "react";

import { Close } from "@mui/icons-material";
import { ButtonBase, ClickAwayListener } from "@mui/material";

import { BlackTooltip } from "@/pages/Skins/Skins";
import { AircraftProps, FinalWeapon, FinalWeapons, HelicopterProps } from "@/types";

function SlotWeapon(props: { value: FinalWeapon | FinalWeapons | { name: string } }) {
  const { value } = props;
  if ("displayname" in value && value.displayname) {
    return (
      <div>
        {value.displayname}
        {"displayname" in value && value.displayname && "bullets" in value
          ? ` (Ammo: ${value.bullets})`
          : " (Ammo: 1)"}
      </div>
    );
  }
  if ("weapons" in value && value.weapons[0].displayname) {
    return (
      <div>
        {value.weapons[0].displayname}
        {` (Ammo: ${value.weapons.length})`}
      </div>
    );
  }
  return <div>{"name" in value ? value.name : value.intname}</div>;
}

function SecondarySlotToolTip(props: { value: (FinalWeapon | FinalWeapons | { name: string })[] }) {
  const { value } = props;
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<FinalWeapon | FinalWeapons | null>(null);

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = () => {
    setOpen(!open);
  };

  return (
    <div>
      <ClickAwayListener onClickAway={handleClose}>
        <div>
          <BlackTooltip
            PopperProps={{
              disablePortal: true,
            }}
            disableFocusListener
            disableHoverListener
            disableTouchListener
            placement="right"
            open={open}
            onClose={handleClose}
            title={[
              ...value.map((value, index) => {
                if ("intname" in value) {
                  return (
                    <div key={index}>
                      <ButtonBase
                        onClick={() => {
                          setSelected(value);
                          handleClose();
                        }}
                      >
                        <img
                          style={{ height: "40px" }}
                          src={`../images/gameuiskin/${value.iconType}.png`}
                          alt={value.iconType}
                        />
                        <SlotWeapon value={value} />
                      </ButtonBase>
                    </div>
                  );
                }
                return <div key={index}>{JSON.stringify(value)}</div>;
              }),
              <div key={"empty"}>
                <ButtonBase
                  onClick={() => {
                    setSelected(null);
                    handleClose();
                  }}
                >
                  <Close style={{ height: "40px", width: "40px" }} />
                  <div>Empty</div>
                </ButtonBase>
              </div>,
            ]}
          >
            <div
              style={{
                backgroundImage: "url(../images/gameuiskin/window_body_light.png)",
                backgroundRepeat: "no-repeat",
                backgroundSize: "100%",
                height: "40px",
                width: "40px",
              }}
            >
              <ButtonBase onClick={handleChange}>
                <img
                  style={{ height: "40px", width: "40px" }}
                  src={`../images/gameuiskin/${selected?.iconType}.png`}
                  alt=""
                />
              </ButtonBase>
            </div>
          </BlackTooltip>
        </div>
      </ClickAwayListener>
    </div>
  );
}

export function SecondaryPreset(props: {
  vehicle: AircraftProps | HelicopterProps;
}): JSX.Element | null {
  const { vehicle } = props;

  if (vehicle.secondary_weapon_preset) {
    const filtered = vehicle.secondary_weapon_preset.weaponSlots.filter((value) => {
      return !value.hidden;
    });
    return (
      <div className="secondary">
        {filtered.map((value, index) => (
          <SecondarySlotToolTip key={index} value={value.slot} />
        ))}
      </div>
    );
  }

  return null;
}
