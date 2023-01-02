import React from "react";
import { Typography } from "@mui/material";
import { useSpring, animated } from "@react-spring/web";

const Welcome = () => {
  const [springs, api] = useSpring(() => ({
    x: -500,
    config: {
      duration: 1000,
      friction: 0,
      tension: 1,
    },
  }));

  const handleClick = () => {
    api.start({
      to: [{ x: 500 }, { x: -500 }],
    });
  };
  return (
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <animated.div
        onClick={handleClick}
        style={{
          width: 80,
          height: 80,
          background: "white",
          borderRadius: "50%",
          ...springs,
        }}
      />
      <Typography variant="h2" color="lightblue">
        Game based approach to learning Chinese.
      </Typography>
      <Typography variant="h5" pt="3rem">
        Choose a deck from the left panel to get started
      </Typography>
    </div>
  );
};

export default Welcome;
