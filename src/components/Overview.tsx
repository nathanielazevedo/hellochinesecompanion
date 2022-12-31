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
      sx={{ padding: "20px 40px 0 40px" }}
    >
      <Table aria-label="simple table" stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell align="center" sx={{ borderBottomWidth: "0.01px" }}>
              <Typography variant="h6">Character</Typography>
            </TableCell>
            <TableCell align="center" sx={{ borderBottomWidth: "0.01px" }}>
              <Typography variant="h6">Pinyin</Typography>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {deck.map((word: Record<any, any>) => (
            <TableRow key={word.chinese}>
              <TableCell
                align="center"
                sx={{ cursor: "pointer", borderBottomWidth: "0.01px" }}
                onClick={() => sayWord(word.word.chinese)}
              >
                <Typography variant="h6">{word.word.chinese}</Typography>
              </TableCell>
              <TableCell align="center" sx={{ borderBottomWidth: "0.01px" }}>
                <Typography variant="h6">{word.word.pinyin}</Typography>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Overview;
