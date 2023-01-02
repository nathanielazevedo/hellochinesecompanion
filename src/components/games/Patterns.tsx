import React, { useEffect, useState, useRef } from "react";
import bg from "../bg.webp";
import { useAtom } from "jotai";
import ld from "lodash";
import { deckAtom, tabAtom } from "../State";
import { useSpring, animated } from "@react-spring/web";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import {
  TextField,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";

const Ball = ({
  text,
  setLostDialog,
  index,
  handleWrong,
  difficulty,
}: {
  text: any;
  setLostDialog: any;
  index: number;
  handleWrong: any;
  difficulty: any;
}) => {
  const first = useRef(true);
  const [spring, api] = useSpring(() => ({
    from: { x: -700 },
    to: { x: 400 },
    config: {
      duration: 5000,
    },
    onRest: (x) => {
      if (x.finished) {
        handleWrong(index);
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
      msg.text = text?.word?.chinese ?? "";
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
      {difficulty == "easy" && text?.word?.pinyin}
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
  const setTab = useAtom(tabAtom)[1];
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [deck, setDeck] = useAtom(deckAtom);
  const [playDeck, setPlayDeck] = useState(deck);
  const [solidDeck, setSolidDeck] = useState(ld.cloneDeep(deck));
  const [deckInPlay, setDeckInPlay] = useState(1);
  const [wrongs, setWrongs] = useState<number[]>([]);
  const [showDialog, setShowDialog] = useState(false);
  const [secondDeck, setSecondDeck] = useState<any>([]);
  const [playing, setPlaying] = useState<boolean>(false);
  const [showLostDialog, setLostDialog] = useState(false);
  const [difficulty, setDifficulty] = useState("easy");
  const [showMenuDialog, setShowMenuDialog] = useState(true);
  const [timer, setTimer] = useState<number | undefined>(undefined);

  const handleWrong = (index: number) => {
    if (index === deck.length - 1) {
      const val = deck[index];
      setPlayDeck([...secondDeck, val]);
      setSecondDeck([]);
      setPlaying(false);
      setText("");
      setTimeout(() => {
        setIndex(0);
        setPlaying(true);
      }, 500);
    } else {
      setSecondDeck((o: any) => {
        const val = deck[index];
        return [...o, val];
      });
      setPlaying(false);
      setText("");
      setTimeout(() => {
        setIndex((o) => o + 1);
        setPlaying(true);
      }, 500);
    }
  };

  const handleChange = (text: string) => {
    setText(text);
    const wordInfo = deck[index];

    // word is right
    if (text === wordInfo?.word?.english) {
      setPlaying(false);

      // game is won
      if (index === deck.length - 1 && secondDeck.length == 0) {
        setShowDialog(true);
        const sound = new Audio("./win.wav");
        sound.volume = 0.1;
        sound.play();
        return;
      }

      // first round over, got some wrong
      if (index === deck.length - 1 && secondDeck.length !== 0) {
        setDeckInPlay(2);
        setDeck(secondDeck);
        setSecondDeck([]);
        setText("");
        setWrongs([]);
        setIndex(0);
        setTimeout(() => {
          setPlaying(true);
        }, 500);
        return;
      }

      // got the word right, but game is not over
      const sound = new Audio("./good.wav");
      sound.volume = 0.1;
      sound.play();
      setText("");
      setTimeout(() => {
        setIndex((o) => o + 1);
        setPlaying(true);
      }, 500);
    }
  };

  // really starts game
  const start = () => {
    setPlaying(false);
    setShowMenuDialog(false);
    setTimeout(() => {
      setIndex(0);
      setPlaying(true);
      setText("");
    }, 500);
  };

  // sets countdown
  const prepareGame = () => {
    const sound = new Audio("./countdown.wav");
    sound.volume = 0.3;
    sound.play();
    setText("");
    setTimer(3);
    setDeck(solidDeck);
    let count = 3;
    const time = setInterval(() => {
      count--;
      if (count === 0) {
        clearInterval(time);
        start();
        setTimer(undefined);
      } else setTimer((o) => (o && o > 0 ? o - 1 : undefined));
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
          setPlaying(false);
        }}
        sx={{
          fontSize: "75px",
          color: "white",
          position: "absolute",
          left: "20px",
          cursor: "pointer",
        }}
      />
      {playing && (
        <Ball
          text={deck && deck[index]}
          setLostDialog={setLostDialog}
          index={index}
          handleWrong={handleWrong}
          difficulty={difficulty}
        />
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
                prepareGame();
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
                prepareGame();
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
            <FormControl sx={{ marginTop: "35px" }}>
              <FormLabel id="demo-row-radio-buttons-group-label">
                Difficulty
              </FormLabel>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
                defaultValue={difficulty}
              >
                <FormControlLabel
                  value="easy"
                  control={<Radio />}
                  label="Easy"
                  onClick={() => setDifficulty("easy")}
                />
                <FormControlLabel
                  value="hard"
                  control={<Radio />}
                  label="Hard"
                  onClick={() => setDifficulty("hard")}
                />
              </RadioGroup>
            </FormControl>
          </DialogContent>
          <DialogActions
            sx={{ display: "flext", justifyContent: "space-between" }}
          >
            <Button onClick={() => setTab("game")}>Leave Game</Button>
            <Button
              onClick={() => {
                setShowMenuDialog(false);
                prepareGame();
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

/* 
  don't mess with original array
  1. deep clone array and create a new one
  2. if wrong - append to this array
  3. if right - remove from this array
  4. start new game by cloning original array 
*/
