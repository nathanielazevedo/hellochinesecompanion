import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Typography } from "@mui/material";

const Overview = ({ deck }: { deck: any }) => {
  const sayWord = (word: string) => {
    var msg = new SpeechSynthesisUtterance();
    msg.text = word;
    msg.lang = "zh";
    msg.rate = 0.5;
    window.speechSynthesis.speak(msg);
  };

  return (
    <TableContainer
      component={Paper}
      variant="outlined"
      sx={{ margin: "40px", maxWidth: "92vw" }}
    >
      <Table aria-label="simple table" stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell align="center" sx={{ borderBottomWidth: "0.1px" }}>
              <Typography variant="h5">Character</Typography>
            </TableCell>
            <TableCell align="center" sx={{ borderBottomWidth: "0.1px" }}>
              <Typography variant="h5">Pinyin</Typography>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {deck.map((word) => (
            <TableRow key={word.chinese}>
              <TableCell
                align="center"
                sx={{ cursor: "pointer", borderBottomWidth: "0.1px" }}
                onClick={() => sayWord(word.word.chinese)}
              >
                <Typography variant="h4">{word.word.chinese}</Typography>
              </TableCell>
              <TableCell align="center" sx={{ borderBottomWidth: "0.1px" }}>
                <Typography variant="h5">{word.word.pinyin}</Typography>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Overview;
