import React from "react";
import AppBar from "@mui/material/AppBar";
import { Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useAtom } from "jotai";
import { sideNavState } from "../../pages/index";

const TopNav = ({
  backToHome,
  deck,
  setTab,
}: {
  backToHome: () => void;
  deck: string | undefined;
  setTab: (tab: string | undefined) => void;
}) => {
  const setSideNav = useAtom(sideNavState)[1];
  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        position: "aboslute",
        top: 0,
        height: "50px",
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",
        padding: "0 25px",
        borderBottom: "1px solid rgba(255, 255, 255, 0.12)",
        minWidth: "100vw",
      }}
    >
      <div style={{ display: "flex", alignItems: "center" }}>
        <MenuIcon onClick={() => setSideNav(true)} sx={{ cursor: "pointer" }} />
        {deck && (
          <div
            style={{
              display: "flex",
              justifySelf: "flex-start",
              marginLeft: "20px",
            }}
          >
            <Typography
              variant="subtitle1"
              sx={{ cursor: "pointer" }}
              mr="20px"
              onClick={() => setTab("overview")}
            >
              Overview
            </Typography>
            <Typography
              variant="subtitle1"
              sx={{ cursor: "pointer" }}
              onClick={() => setTab("spelling")}
              mr="20px"
            >
              Spelling
            </Typography>
            <Typography
              variant="subtitle1"
              sx={{ cursor: "pointer" }}
              onClick={() => setTab("game")}
              mr="20px"
            >
              Game
            </Typography>
          </div>
        )}
      </div>
      <Typography
        variant="subtitle1"
        color="lightblue"
        onClick={backToHome}
        sx={{ cursor: "pointer" }}
      >
        Hello Chinese Companion
      </Typography>
    </AppBar>
  );
};

export default TopNav;
