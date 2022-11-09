import * as React from "react";
import { styled, Theme, CSSObject } from "@mui/material/styles";
import {
  Box,
  Drawer as MuiDrawer,
  List,
  IconButton,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  Tooltip,
} from "@mui/material";
import {
  ChevronLeft as ChevronLeftIcon,
  ChevronRight as ChevronRightIcon,
} from "@mui/icons-material";
import { useTheme } from "@mui/material/styles";

import { Titles } from "./wordBank/Titles";

const drawerWidth = 250;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

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

const DrawerToggle = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-end",
  minHeight: "49px !important",
  borderRight: "1px solid rgba(255, 255, 255, 0.12)",
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  height: `100%`,
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export default function MiniDrawer({ switchDeck }: { switchDeck: any }) {
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();

  const handleDrawer = () => {
    open ? setOpen(false) : setOpen(true);
  };

  return (
    <Box
      sx={{
        display: "flex",
        zIndex: "0",
        maxHeight: "95vh",
        flexDirection: "column",
      }}
    >
      <DrawerToggle
        sx={{ width: open ? drawerWidth : `calc(${theme.spacing(7)} + 9px)` }}
      >
        <IconButton
          onClick={handleDrawer}
          style={{
            maxWidth: "40px",
            justifySelf: "flex-start",
            marginLeft: "13px",
          }}
        >
          {!open ? <ChevronRightIcon /> : <ChevronLeftIcon />}
        </IconButton>
      </DrawerToggle>
      <Drawer
        variant="permanent"
        open={open}
        elevation={1}
        PaperProps={{
          sx: {
            position: "relative",
            borderTop: "1px solid rgba(255, 255, 255, 0.12)",
          },
        }}
      >
        <List>
          {Titles.map((text, index) => (
            <Tooltip title={open ? "" : text.english} placement="right">
              <ListItem
                key={text.english}
                disablePadding
                sx={{ display: "block" }}
                onClick={() => switchDeck(text.english)}
              >
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? "initial" : "center",
                    px: 2.5,
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 40,
                      fontSize: 10,
                      mr: open ? 3 : "auto",
                      justifyContent: "center",
                    }}
                  >
                    <Typography variant="h6">{text.chinese}</Typography>
                  </ListItemIcon>
                  <ListItemText
                    primary={text.english}
                    sx={{ opacity: open ? 1 : 0 }}
                  />
                </ListItemButton>
              </ListItem>
            </Tooltip>
          ))}
        </List>
      </Drawer>
    </Box>
  );
}
