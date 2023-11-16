import { useHotkeys } from "react-hotkeys-hook";
import { useNavigate } from "react-router-dom";

import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Typography from "@mui/material/Typography";

import { FlexBox } from "@/components/styled";
import useHotKeysDialog from "@/store/hotkeys";

function HotKeys() {
  const [isHotKeysDialogOpen, hotKeysDialogActions] = useHotKeysDialog();
  const navigate = useNavigate();

  const keys: { key: string; title: string; action: () => void }[] = [
    { key: "shift + h", title: "Go Home", action: () => navigate("/wt/") },
    { key: "shift + t", title: "See Techtree", action: () => navigate("/wt/techtree") },
    { key: "shift + s", title: "Join a Squadron", action: () => navigate("/wt/squadron") },
    { key: "shift + c", title: "Compare SomeThings", action: () => navigate("/wt/compare") },
    {
      key: "shift + .",
      title: "Toggle Hot Keys' Dialog",
      action: hotKeysDialogActions.toggle,
    },
  ];

  // I would love to define all hotkeys in the config and loop it here and avoid this repetitive code.
  // But the `react-hotkeys-hook` library, which we use to handle hotkeys provides only hook (`useHotkeys`).
  // And as you know we can't use hooks inside loops (read "Rules of Hooks" - https://reactjs.org/docs/hooks-rules.html).
  // There is always a workaround, but sometimes it's better to avoid premature and unnecessary optimizations :)
  useHotkeys("shift+h", () => navigate("/wt/"));
  useHotkeys("shift+t", () => navigate("/wt/techtree"));
  useHotkeys("shift+s", () => navigate("/wt/squadron"));
  useHotkeys("shift+c", () => navigate("/wt/compare"));
  useHotkeys("shift+.", hotKeysDialogActions.toggle);

  return (
    <Dialog fullWidth maxWidth="xs" onClose={hotKeysDialogActions.close} open={isHotKeysDialogOpen}>
      <DialogTitle>Hot Keys</DialogTitle>
      <DialogContent>
        {keys.map(({ key, title, action }) => {
          return (
            <FlexBox key={key} alignItems="center" height={50} justifyContent="space-between">
              <Typography>{title}</Typography>
              <Button color="warning" variant="outlined" onClick={action}>
                {key}
              </Button>
            </FlexBox>
          );
        })}
      </DialogContent>
    </Dialog>
  );
}

export default HotKeys;
