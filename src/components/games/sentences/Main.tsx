import { TextField } from "@mui/material";
import React, { useState } from "react";
import { Hello } from "~/sentences/Hello";

const Main = () => {
  const [index, setIndex] = useState(0);
  const [showWord, setShowWord] = useState(true);
  const [border, setBorder] = useState(false);

  const generateWord = () => {
    setTimeout(() => {
      setShowWord(false);
    }, 1000);
    return Hello[index]?.english;
  };

  const handleChange = (text: string) => {
    if (text === Hello[index]?.chinese) {
      setBorder(true);
      setIndex((o) => {
        return o + 1;
      });
      setTimeout(() => {
        setBorder(false);
        setShowWord(true);
      }, 1000);
    }
  };

  return (
    <div
      style={{
        height: "calc(100vh - 70px)",
        width: "100vw",
        position: "absolute",
        bottom: 0,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      {showWord ? (
        <div className="fade-out" style={{ fontSize: "40px" }}>
          {generateWord()}
        </div>
      ) : (
        <TextField
          sx={{
            width: "500px",
            fontSize: "75px",
          }}
          variant="standard"
          onChange={(evt) => handleChange(evt.target.value)}
          color={border ? "success" : "primary"}
        />
      )}
    </div>
  );
};

export default Main;
