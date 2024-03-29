import { useEffect, useState } from "react";
import Patterns from "../components/games/planetDefender/Patterns";
import Words from "~/components/spelling/Words";
import Welcome from "../components/infoPages/Welcome";
import SideNav from "~/components/nav/SideNav";
import TopNav from "~/components/nav/TopNav";
import Overview from "~/components/Overview";
import AlphabetC from "~/components/Pronunciation";
import Main from "~/components/games/planetDefender/Main";
import MainSentences from "~/components/games/sentences/Main";
import { Box } from "@mui/material";
import { register } from "~/wordBank";

// state
import { deckAtom, tabAtom } from "../components/State";
import { useAtom } from "jotai";

const HelloChinese = () => {
  const [tab, setTab] = useAtom(tabAtom);
  const [deck, setDeck] = useAtom(deckAtom);
  const [deckName, setDeckName] = useState("");
  const [volumne, setVolumne] = useState<number>(1);

  const switchDeck = (text: string) => {
    setDeck(undefined);
    setTimeout(() => {
      const name = text.replaceAll(" ", "_");
      setDeck(register[name]);
      setDeckName(text);
    }, 100);
  };

  const backToHome = () => {
    setDeck(undefined);
    setTab(undefined);
  };

  const getPage = () => {
    if (!tab) return <Welcome />;
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
    } else if (tab === "sentences") {
      return <MainSentences />;
    } else {
      return <Overview />;
    }
  };

  return (
    <>
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
        {getPage()}
      </Box>
    </>
  );
};

export default HelloChinese;
