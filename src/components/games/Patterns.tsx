import {
  TextField,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
} from "@mui/material";
import React, { useEffect, useState, useRef } from "react";
import { useSpring, animated } from "@react-spring/web";
import { useAtom } from "jotai";
import { deckAtom, tabAtom } from "../State";
import bg from "../bg.webp";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";

const Ball = ({ text, setLostDialog }: { text: any; setLostDialog: any }) => {
  const first = useRef(true);
  const [spring, api] = useSpring(() => ({
    from: { x: -700 },
    to: { x: 400 },
    config: {
      duration: 5000,
    },
    onRest: (x) => {
      if (x.finished) {
        setLostDialog(true);
        const sound = new Audio("./lose.wav");
        sound.volume = 0.1;
        sound.play();
      }
    },
  }));
  useEffect(() => {
    if (first.current) {
      first.current = false;
      var msg = new SpeechSynthesisUtterance();
      msg.text = text.word.chinese;
      msg.lang = "zh";
      msg.rate = 0.5;
      window.speechSynthesis.speak(msg);
    }
  }, []);
  return (
    <animated.div
      style={{
        width: 80,
        height: 80,
        position: "absolute",
        top: "420px",
        borderRadius: "50%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: `radial-gradient(circle at 5% 15%, pink 1px,
          ${colors.purple} 4%,${colors.red} 60%, ${colors.pink} 100%)`,
        ...spring,
      }}
    >
      {text.word.pinyin}
    </animated.div>
  );
};

const colors = {
  purple: "#7a04eb ",
  pink: "#ff00a0",
  dPurple: "#120458",
  red: "#860029",
};

const Patterns = () => {
  const [comet, setComet] = useState<boolean>(false);
  const [deck] = useAtom(deckAtom);
  const [index, setIndex] = useState(10);
  const [text, setText] = useState("");
  const [showDialog, setShowDialog] = useState(false);
  const [showLostDialog, setLostDialog] = useState(false);
  const [showMenuDialog, setShowMenuDialog] = useState(true);
  const [tab, setTab] = useAtom(tabAtom);
  const [timer, setTimer] = useState<number | undefined>(undefined);

  const handleChange = (text: string) => {
    setText(text);
    const obj = deck[index];
    if (text === obj?.word?.english) {
      setComet(false);
      if (index === deck.length - 1) {
        setShowDialog(true);
        return;
      }
      setText("");
      setTimeout(() => {
        setIndex((o) => o + 1);
        setComet(true);
      }, 500);
    }
  };

  const start = () => {
    setComet(false);
    setShowMenuDialog(false);
    setTimeout(() => {
      setIndex(0);
      setComet(true);
      setText("");
    }, 500);
  };

  const startGame = () => {
    setTimer(3);
    let count = 3;
    const time = setInterval(() => {
      count--;
      if (count === 0) {
        clearInterval(time);
        start();
      }
      console.log("going", timer);
      setTimer((o) => (o && o > 0 ? o - 1 : undefined));
    }, 1000);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        background: `url(${bg.src}) no-repeat center center fixed`,
        height: "100vh",
        backgroundSize: "cover",
        width: "100vw",
      }}
    >
      {timer ? (
        <div
          style={{
            fontSize: "50px",
            color: "white",
            position: "absolute",
            left: "50%",
            top: "45.5%",
          }}
        >
          {timer}
        </div>
      ) : null}
      <CloseRoundedIcon
        onClick={() => {
          setShowMenuDialog(true);
          setComet(false);
        }}
        sx={{
          fontSize: "75px",
          color: "white",
          position: "absolute",
          left: "20px",
          cursor: "pointer",
        }}
      />
      {comet && (
        <Ball text={deck && deck[index]} setLostDialog={setLostDialog} />
      )}
      <div
        className="planet"
        style={{
          padding: "20px",
          borderRadius: "50%",
          position: "absolute",
          right: 70,
          top: "300px",
          width: "300px",
          height: "300px",
          backgroundColor: "purple",
          boxShadow: "black 0px 1px 10px",
          background: `radial-gradient(circle at 5% 15%, pink 1px,
             ${colors.purple} 4%,${colors.dPurple} 60%, ${colors.pink} 100%)`,
        }}
      ></div>
      <TextField
        onChange={(evt) => handleChange(evt.target.value)}
        value={text}
        sx={{
          position: "absolute",
          bottom: 100,
          backgroundColor: "black",
          border: "solid #04a2fc 1px",
          borderRadius: "5px",
          width: "500px",
          textAlign: "center",
        }}
      ></TextField>
      {showDialog && (
        <Dialog open>
          <DialogTitle>You won!</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-slide-description">
              You're so smart!
            </DialogContentText>
          </DialogContent>
          <DialogActions
            sx={{ display: "flext", justifyContent: "space-between" }}
          >
            <Button
              onClick={() => {
                setShowDialog(false);
                setShowMenuDialog(true);
              }}
            >
              Menu
            </Button>
            <Button
              onClick={() => {
                setShowDialog(false);
                startGame();
              }}
            >
              Play Again
            </Button>
          </DialogActions>
        </Dialog>
      )}
      {showLostDialog && (
        <Dialog open>
          <DialogTitle>You Lost!</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-slide-description">
              Better luck next time!
            </DialogContentText>
          </DialogContent>
          <DialogActions
            sx={{ display: "flext", justifyContent: "space-between" }}
          >
            <Button
              onClick={() => {
                setLostDialog(false);
                setShowMenuDialog(true);
              }}
            >
              Menu
            </Button>
            <Button
              onClick={() => {
                setLostDialog(false);
                startGame();
              }}
            >
              Play Again
            </Button>
          </DialogActions>
        </Dialog>
      )}
      {showMenuDialog && (
        <Dialog
          open
          fullWidth
          PaperProps={{ sx: { height: "500px", backgroundColor: "black" } }}
        >
          <DialogTitle
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
            }}
          >
            Menu
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-slide-description">
              Translate the word before the comet hits the planet!
            </DialogContentText>
          </DialogContent>
          <DialogActions
            sx={{ display: "flext", justifyContent: "space-between" }}
          >
            <Button onClick={() => setTab("game")}>Leave Game</Button>
            <Button
              onClick={() => {
                setShowMenuDialog(false);
                startGame();
              }}
            >
              Start
            </Button>
          </DialogActions>
        </Dialog>
      )}
    </div>
  );
};

export default Patterns;
