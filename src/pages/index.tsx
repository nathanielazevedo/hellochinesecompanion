import { useState } from "react";
import Head from "next/head";
import Patterns from "../components/games/planetDefender/Patterns";
import Words from "~/components/spelling/Words";
import Welcome from "../components/infoPages/Welcome";
import SideNav from "~/components/nav/SideNav";
import TopNav from "~/components/nav/TopNav";
import Overview from "~/components/Overview";
import AlphabetC from "~/components/Pronunciation";
import { register } from "~/wordBank";
import Main from "~/components/games/planetDefender/Main";
import { Box, createTheme, CssBaseline, ThemeProvider } from "@mui/material";

// state
import { deckAtom, tabAtom } from "../components/State";
import { useAtom } from "jotai";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#1a1a1a",
      paper: "#1a1a1a",
    },
  },
  typography: {
    fontFamily: "Rubik, sans-serif;",
  },
});

export default function Home() {
  const [tab, setTab] = useAtom(tabAtom);
  const [deck, setDeck] = useAtom(deckAtom);
  const [deckName, setDeckName] = useState("");
  const [volumne, setVolumne] = useState<number>(1);
  const [initialRender, setInitialRender] = useState(true);

  const switchDeck = (text: string) => {
    setInitialRender(false);
    setDeck(undefined);
    setTimeout(() => {
      const name = text.replaceAll(" ", "_");
      setDeck(register[name]);
      setDeckName(text);
    }, 100);
  };

  const backToHome = () => {
    setDeck(undefined);
    setInitialRender(true);
  };

  const getPage = () => {
    if (deckName === "Alphabet") {
      return <AlphabetC words={deck} />;
    } else {
      if (tab === "game") {
        return <Main />;
      } else if (tab === "spelling") {
        return (
          <Words
            deck={deck}
            deckName={deckName}
            setVolumne={setVolumne}
            volumne={volumne}
          />
        );
      } else if (tab === "planet") {
        return <Patterns />;
      } else {
        return <Overview deck={deck} />;
      }
    }
  };

  return (
    <div>
      <Head>
        <title>TypeIt</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Rubik&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <ThemeProvider theme={darkTheme}>
        <Box sx={{ maxHeight: "100vh", maxWidth: "100vw" }}>
          <TopNav backToHome={backToHome} />
          <SideNav switchDeck={switchDeck} />
          <Box
            sx={{
              width: "100%",
              height: "100vh",
              position: "absolute",
              bottom: 0,
            }}
          >
            {deck && getPage()}
            {initialRender && <Welcome />}
          </Box>
          <CssBaseline />
        </Box>
      </ThemeProvider>
    </div>
  );
}
