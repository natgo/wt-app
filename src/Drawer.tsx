import * as React from "react";
import { Link } from "react-router-dom";

import { AccountTree, Brush, Calculate, DataObject, GitHub, Home } from "@mui/icons-material";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Tooltip,
} from "@mui/material";
import MuiDrawer from "@mui/material/Drawer";
import { CSSObject, Theme, styled } from "@mui/material/styles";

const drawerWidth = 240;

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
    boxSizing: "border-box",
    ...(!open && {
      ...closedMixin(theme),
      "& .MuiDrawer-paper": closedMixin(theme),
    }),
  }),
);

export function MiniDrawer(props: { children: React.ReactNode }) {
  const { children } = props;

  return (
    <Box sx={{ display: "flex" }}>
      <Drawer variant="permanent">
        <List>
          {["Home", "Techtree", "WT Data Project (External)", "Air RB BR Calculator", "Skins", "Github"].map(
            (text) => {
              let Icon = <AccountTree />;
              let link = "/wt/";
              switch (text) {
                case "Techtree":
                  link = "/wt/techtree";
                  Icon = <AccountTree />;
                  break;
                case "WT Data Project (External)":
                  link = "/wt/data";
                  Icon = <DataObject />;
                  break;
                case "Air RB BR Calculator":
                  link = "/wt/calculator";
                  Icon = <Calculate />;
                  break;
                case "Home":
                  link = "/wt/";
                  Icon = <Home />;
                  break;
                case "Skins":
                  link = "/wt/skins";
                  Icon = <Brush />;
                  break;
                case "Github":
                  link = "gh";
                  Icon = <GitHub />;
                  break;
              }
              if (link === "gh") {
                return (
                  <ListItem key={text} disablePadding sx={{ display: "block" }}>
                    <a href="https://github.com/natgo/wt-app" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "inherit" }}>
                      <Tooltip title={text} placement="right">
                        <ListItemButton
                          sx={{
                            minHeight: 48,
                            justifyContent: "center",
                            px: 2.5,
                          }}
                        >
                          <ListItemIcon
                            sx={{
                              minWidth: 0,
                              mr: "auto",
                              justifyContent: "center",
                            }}
                          >
                            {Icon}
                          </ListItemIcon>
                          <ListItemText primary={text} sx={{ opacity: 0 }} />
                        </ListItemButton>
                      </Tooltip>
                    </a>
                  </ListItem>
                )
              }

              return (
                <ListItem key={text} disablePadding sx={{ display: "block" }}>
                  <Link to={link} style={{ textDecoration: "none", color: "inherit" }}>
                    <Tooltip title={text} placement="right">
                      <ListItemButton
                        sx={{
                          minHeight: 48,
                          justifyContent: "center",
                          px: 2.5,
                        }}
                      >
                        <ListItemIcon
                          sx={{
                            minWidth: 0,
                            mr: "auto",
                            justifyContent: "center",
                          }}
                        >
                          {Icon}
                        </ListItemIcon>
                        <ListItemText primary={text} sx={{ opacity: 0 }} />
                      </ListItemButton>
                    </Tooltip>
                  </Link>
                </ListItem>
              );
            },
          )}
        </List>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 0, height: "100vh" }}>
        {children}
      </Box>
    </Box>
  );
}
