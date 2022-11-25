import { TextField, Typography } from "@mui/material";
import React, { useState } from "react";

const Patterns = () => {
  const [border, setBorder] = useState("transparent");
  const firstWord = "ni hao, ni zai nali ne";
  const secondWord = "wo zai California";
  const handleChange = (val: string) => {
    if (val === secondWord) {
      setBorder("green");
    } else {
      setBorder("red");
    }
  };
  return (
    <div style={{ width: "100vw", display: "flex", justifyContent: "center" }}>
      <div
        style={{
          height: "100%",
          width: "50vw",
          display: "flex",
          alignItems: "center",
          marginTop: "20px",
          flexDirection: "column",
        }}
      >
        <Typography alignSelf="flex-start">{firstWord}</Typography>
        <TextField
          onChange={(evt) => handleChange(evt.target.value)}
          style={{
            borderWidth: "1px",
            borderStyle: "solid",
            borderColor: border,
          }}
        ></TextField>
      </div>
    </div>
  );
};

export default Patterns;
