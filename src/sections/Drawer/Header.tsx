import { Suspense } from "react";
import { Outlet, ScrollRestoration, useLocation } from "react-router-dom";
import { useRecoilState } from "recoil";

import { Search } from "@mui/icons-material";
import GitHubIcon from "@mui/icons-material/GitHub";
import ThemeIcon from "@mui/icons-material/InvertColors";
import MenuIcon from "@mui/icons-material/Menu";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import Tooltip from "@mui/material/Tooltip";

import Loading from "@/components/Loading";
import { DataMode } from "@/components/Techtree/DataMode";
import { Filters } from "@/components/Techtree/Filters";
import { SearchDialog } from "@/components/Techtree/SearchDialog";
import { FlexBox } from "@/components/styled";
import { repository, title } from "@/config";
import useHotKeysDialog from "@/store/hotkeys";
import useNotifications from "@/store/notifications";
import { searchDialogState } from "@/store/search";
import useSidebar from "@/store/sidebar";
import useTheme from "@/store/theme";

import { HotKeysButton } from "./styled";

function TechtreeButtons() {
  const [, setSearchOpen] = useRecoilState(searchDialogState);

  const handleClickOpen = () => {
    setSearchOpen(true);
  };

  if (useLocation().pathname.includes("/wt/techtree")) {
    return (
      <Suspense fallback={<Loading />}>
        <>
          <IconButton color="primary" size="large" onClick={handleClickOpen}>
            <Search />
          </IconButton>
          <SearchDialog type="techtree" />
        </>
        <Filters />
      </Suspense>
    );
  }
  return null;
}

function Header() {
  const [, sidebarActions] = useSidebar();
  const [, themeActions] = useTheme();
  const [, notificationsActions] = useNotifications();
  const [, hotKeysDialogActions] = useHotKeysDialog();

  function showNotification() {
    notificationsActions.push({
      options: {
        // Show fully customized notification
        // Usually, to show a notification, you'll use something like this:
        // notificationsActions.push({ message: ... })
        // `message` accepts string as well as ReactNode
        // But you also can use:
        // notificationsActions.push({ options: { content: ... } })
        // to show fully customized notification
        content: (
          <Alert severity="info">
            <AlertTitle>Notification demo</AlertTitle>
          </Alert>
        ),
      },
    });
  }

  return (
    <Box sx={{ flexGrow: 1, width: "100%", height: "100%" }}>
      <AppBar color="transparent" elevation={1} position="static">
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <FlexBox sx={{ alignItems: "center" }}>
            <IconButton
              onClick={sidebarActions.toggle}
              size="large"
              edge="start"
              color="info"
              aria-label="menu"
              id="sidebar-menu"
              sx={{ mr: 1 }}
            >
              <MenuIcon />
            </IconButton>
            <Button onClick={showNotification} color="info">
              {title}
            </Button>
          </FlexBox>
          <FlexBox>
            <DataMode />
            <TechtreeButtons />
            <Divider orientation="vertical" flexItem />
            <FlexBox>
              <Tooltip title="Hot keys" arrow>
                <HotKeysButton
                  size="small"
                  variant="outlined"
                  aria-label="open hotkeys dialog"
                  onClick={hotKeysDialogActions.open}
                >
                  shift + .
                </HotKeysButton>
              </Tooltip>
            </FlexBox>
            <Divider orientation="vertical" flexItem />
            <Tooltip title="It's open source" arrow>
              <IconButton color="info" size="large" component="a" href={repository} target="_blank">
                <GitHubIcon />
              </IconButton>
            </Tooltip>
            <Divider orientation="vertical" flexItem />
            <Tooltip title="Switch theme" arrow>
              <IconButton color="info" edge="end" size="large" onClick={themeActions.toggle}>
                <ThemeIcon />
              </IconButton>
            </Tooltip>
          </FlexBox>
        </Toolbar>
      </AppBar>
      <div className="outlet">
        <Outlet />
      </div>
      <ScrollRestoration />
    </Box>
  );
}

export default Header;
