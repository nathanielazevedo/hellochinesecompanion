import React, { useEffect, useState } from "react";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
const Input = ({
  letter,
  index,
  refs,
  next,
}: {
  letter: string;
  index: number;
  refs: any;
  next: any;
}) => {
  const [letterState, setLetterState] = useState<string>();
  const [showCheck, setShowCheck] = useState<boolean>(false);
  const [borderColor, setBorderColor] = useState<string>("white");

  useEffect(() => {
    return () => {
      setLetterState("");
    };
  }, []);

  const handleChange = (val: string) => {
    if (val.length > 1) return;
    setLetterState(val);
    if (val.toLowerCase() === letter.toLowerCase()) {
      setBorderColor("green");
      if (index === refs?.length - 1) {
        setShowCheck(true);
        setTimeout(() => {
          next();
        }, 1500);
      } else {
        refs[index + 1].focus();
      }
    } else {
      setBorderColor("red");
    }
  };
  return (
    <>
      <input
        type="text"
        max="1"
        onChange={(evt) => handleChange(evt.target.value)}
        value={letterState}
        defaultValue={""}
        style={{
          width: "100px",
          height: "100px",
          margin: "0 10px",
          textAlign: "center",
          fontSize: "55px",
          borderStyle: "solid",
          borderWidth: "0.5px",
          borderColor: borderColor,
          outline: "none",
          borderRadius: "5px",
          backgroundColor: "#1b1c1c",
        }}
      />
      {showCheck && (
        <CheckCircleOutlineIcon
          style={{
            color: "green",
            fontSize: "70px",
          }}
        />
      )}
    </>
  );
};

export default Input;
