import React from "react";
import AppBar from "@mui/material/AppBar";
import { Typography } from "@mui/material";

function TopNav({
  backToHome,
  deck,
  setTab,
}: {
  backToHome: () => void;
  deck: string | undefined;
  setTab: (tab: string | undefined) => void;
}) {
  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        height: "50px",
        justifyContent: deck ? "space-between" : "flex-end",
        alignItems: "center",
        flexDirection: "row",
        padding: "0 25px",
        borderBottom: "1px solid rgba(255, 255, 255, 0.12)",
        position: "relative",
        width: "100%",
      }}
    >
      {deck && (
        <div style={{ display: "flex" }}>
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
            onClick={() => setTab("patterns")}
            mr="20px"
          >
            Patterns
          </Typography>
        </div>
      )}
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
}

export default TopNav;
