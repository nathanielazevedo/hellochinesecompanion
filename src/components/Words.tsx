import { Box, Typography } from "@mui/material";
import React, { useState } from "react";
import Word from "~/components/Word";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import Finished from "./Finished";

const Words = ({ deck, deckName }: { deck: any; deckName: string }) => {
  const [index, setIndex] = useState(0);
  const [completed, setCompleted] = useState(false);
  const [word, setWord] = useState(deck[index]);

  const nextWord = () => {
    if (index === deck.length - 1) {
      setCompleted(true);
    } else {
      const idx = index;
      setIndex(idx + 1);
      setWord(deck[idx + 1]);
    }
  };
  const previousWord = () => {
    const idx = index;
    setIndex(idx - 1);
    setWord(deck[idx - 1]);
  };

  return !completed ? (
    <Box
      display="flex"
      flexDirection="column"
      height="100%"
      justifyContent="space-between"
      width="100%"
    >
      <Word word={word} next={nextWord} />
      <Box
        sx={{
          height: "50px",
          width: "100%",
          borderTop: "1px solid rgba(255, 255, 255, 0.12)",
          justifySelf: "flex-end",
          alignItems: "center",
          display: "flex",
          justifyContent: "space-between",
          padding: "0 2rem",
        }}
      >
        <Typography>{deckName}</Typography>
        <div style={{ display: "flex" }}>
          {index !== 0 && (
            <ArrowLeftIcon onClick={previousWord} sx={{ cursor: "pointer" }} />
          )}
          <Typography>{index + 1 + " - " + deck.length}</Typography>
          {index !== deck.length - 1 && (
            <ArrowRightIcon onClick={nextWord} sx={{ cursor: "pointer" }} />
          )}
        </div>
      </Box>
    </Box>
  ) : (
    <Finished />
  );
};

export default Words;
