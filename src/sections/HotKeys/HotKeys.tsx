import { useHotkeys } from "react-hotkeys-hook";
import { useNavigate } from "react-router-dom";

import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Typography from "@mui/material/Typography";

import { FlexBox } from "@/components/styled";
import useHotKeysDialog from "@/store/hotkeys";
import useSidebar from "@/store/sidebar";

function HotKeys() {
  const [, sidebarActions] = useSidebar();
  const [isHotKeysDialogOpen, hotKeysDialogActions] = useHotKeysDialog();
  const navigate = useNavigate();

  // I would love to define all hotkeys in the config and loop it here and avoid this repetitive code.
  // But the `react-hotkeys-hook` library, which we use to handle hotkeys provides only hook (`useHotkeys`).
  // And as you know we can't use hooks inside loops (read "Rules of Hooks" - https://reactjs.org/docs/hooks-rules.html).
  // There is always a workaround, but sometimes it's better to avoid premature and unnecessary optimizations :)
  useHotkeys("shift+s", sidebarActions.toggle);
  useHotkeys("shift+t", () => navigate("/wt/techtree"));
  useHotkeys("shift+h", () => navigate("/wt/"));
  useHotkeys("shift+.", hotKeysDialogActions.toggle);

  return (
    <Dialog fullWidth maxWidth="xs" onClose={hotKeysDialogActions.close} open={isHotKeysDialogOpen}>
      <DialogTitle>Hot Keys</DialogTitle>
      <DialogContent>
        <FlexBox alignItems="center" height={50} justifyContent="space-between">
          <Typography>Open Techtree</Typography>
          <Button color="warning" variant="outlined" onClick={() => navigate("/wt/techtree")}>
            shift + t
          </Button>
        </FlexBox>
        <FlexBox alignItems="center" height={50} justifyContent="space-between">
          <Typography>Go Home</Typography>
          <Button color="warning" variant="outlined" onClick={() => navigate("/wt/")}>
            shift + h
          </Button>
        </FlexBox>
        <FlexBox alignItems="center" height={50} justifyContent="space-between">
          <Typography>Toggle Sidebar</Typography>
          <Button color="warning" variant="outlined" onClick={sidebarActions.toggle}>
            shift + s
          </Button>
        </FlexBox>
        <FlexBox alignItems="center" height={50} justifyContent="space-between">
          <Typography>Toggle Hot Keys&apos; Dialog</Typography>
          <Button color="warning" variant="outlined" onClick={hotKeysDialogActions.toggle}>
            shift + .
          </Button>
        </FlexBox>
      </DialogContent>
    </Dialog>
  );
}

export default HotKeys;
