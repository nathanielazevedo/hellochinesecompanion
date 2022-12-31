import { TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import Earth from "./earth";

const Patterns = () => {
  return (
    <div
      style={{ maxWidth: "92vw", display: "flex", justifyContent: "center" }}
    >
      <div
        className="earth"
        style={{
          position: "absolute",
          right: 10,
          top: "200px",
          width: "300px",
          height: "300px",
        }}
      >
        <Earth />
      </div>
    </div>
  );
};

export default Patterns;
