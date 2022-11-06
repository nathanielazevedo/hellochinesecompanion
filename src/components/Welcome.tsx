import { Typography } from "@mui/material";
import React from "react";

const Welcome = () => {
  return (
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        paddingBottom: "10rem",
      }}
    >
      <Typography variant="h2" color="lightblue">
        Welcome to Hello Chinese Companion
      </Typography>
      <Typography variant="h5" pt="3rem">
        Choose a deck from the left panel to get started
      </Typography>
    </div>
  );
};

export default Welcome;
