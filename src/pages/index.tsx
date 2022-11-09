import Head from "next/head";
import styles from "../styles/Home.module.css";
import Words from "~/components/Words";
import Hello from "../components/wordBank/Hello";
import Food from "../components/wordBank/Food";
import Money from "../components/wordBank/Money";
import { useState } from "react";
import { Box, createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import SideNav from "~/components/SideNav";
import TopNav from "~/components/TopNav";
import Welcome from "../components/Welcome";
import School1 from "../components/wordBank/School1";
import { Dates } from "../components/wordBank/Dates";
import { Locations } from "../components/wordBank/Locations";
import { Personal_Information } from "../components/wordBank/Personal_Information";
import { Time } from "../components/wordBank/Time";
import { Hometown } from "../components/wordBank/Hometown";
import { Taste } from "../components/wordBank/Taste";
import { Restaurants_1 } from "../components/wordBank/Restaurants_1";
import { Daily_Schedule } from "../components/wordBank/Daily_Schedule";
import { Leisure } from "../components/wordBank/Leisure";
import { Appearance } from "../components/wordBank/Appearance";
import { Clothes } from "../components/wordBank/Clothes";
import { Colors } from "../components/wordBank/Colors";
import { Shopping } from "../components/wordBank/Shopping";
import { Sports } from "../components/wordBank/Sports";
import { Spare_Time } from "../components/wordBank/Spare_Time";
import { Transport } from "../components/wordBank/Transport";
import { Directions } from "../components/wordBank/Directions";
import { Rooms } from "../components/wordBank/Rooms";
import { Weather } from "../components/wordBank/Weather";
import { Phone_Calls } from "../components/wordBank/Phone_Calls";
import { Communications } from "../components/wordBank/Communications";
import { Sweets } from "../components/wordBank/Sweets";
import { Pets } from "../components/wordBank/Pets";
import { Suggestions } from "../components/wordBank/Suggestions";
import { Health } from "../components/wordBank/Health";
import { Ordering_Food } from "../components/wordBank/Ordering_Food";
import { Restaurants_2 } from "../components/wordBank/Restaurants_2";
import { Helping_Out } from "../components/wordBank/Helping_Out";
import { Bargaining } from "../components/wordBank/Bargaining";
import { Learning_Chinese_2 } from "../components/wordBank/Learning_Chinese_2";
import { School } from "../components/wordBank/School";
import { Dating } from "../components/wordBank/Dating";
import { Feelings } from "../components/wordBank/Feelings";
import { Family_2 } from "../components/wordBank/Family_2";
import { Career } from "../components/wordBank/Career";
import { Traveling_1 } from "../components/wordBank/Traveling_1";
import { Going_Abroad } from "../components/wordBank/Going_Abroad";
import { Catching_a_Flight } from "../components/wordBank/Catching_a_Flight";
import { Traveling_2 } from "../components/wordBank/Traveling_2";
import { Renting } from "../components/wordBank/Renting";
import { Daily_Life } from "../components/wordBank/Daily_Life";
import { Habits } from "../components/wordBank/Habits";
import { Mistakes } from "../components/wordBank/Mistakes";
import { Interviews } from "../components/wordBank/Interviews";
import { Work } from "../components/wordBank/Work";
import { Bad_Luck } from "../components/wordBank/Bad_Luck";
import { Greetings } from "../components/wordBank/Greetings";
import { Online_Shopping } from "../components/wordBank/Online_Shopping";
import { Office_Work } from "../components/wordBank/Office_Work";
import { Sports_Competitions } from "../components/wordBank/Sports_Competitions";
import { Gossip } from "../components/wordBank/Gossip";
import { Hiking } from "../components/wordBank/Hiking";
import { Comparing } from "../components/wordBank/Comparing";
import { Arguments } from "../components/wordBank/Arguments";
import { Personality } from "../components/wordBank/Personality";
import { Praise } from "../components/wordBank/Praise";
import { Weight_Loss } from "../components/wordBank/Weight_Loss";
import { Housework } from "../components/wordBank/Housework";
import { Movies } from "../components/wordBank/Movies";
import { Apologizing } from "../components/wordBank/Apologizing";
import { Shocked } from "../components/wordBank/Shocked";
import { China_1 } from "../components/wordBank/China_1";
import { China_2 } from "../components/wordBank/China_2";
import { Nature } from "../components/wordBank/Nature";
import { Environment } from "../components/wordBank/Environment";

type registerType = {
  [key: string]: any;
};

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "black",
      paper: "black",
    },
  },
});

export default function Home() {
  const [deck, setDeck] = useState();
  const [deckName, setDeckName] = useState("");
  const [initialRender, setInitialRender] = useState(true);
  const register: registerType = {
    Hello,
    Food,
    School1,
    Money,
    Dates,
    Locations,
    Personal_Information,
    Time,
    Hometown,
    Taste,
    Restaurants_1,
    Daily_Schedule,
    Leisure,
    Appearance,
    Clothes,
    Colors,
    Shopping,
    Sports,
    Spare_Time,
    Transport,
    Directions,
    Rooms,
    Weather,
    Phone_Calls,
    Communications,
    Sweets,
    Pets,
    Suggestions,
    Health,
    Ordering_Food,
    Restaurants_2,
    Helping_Out,
    Bargaining,
    Learning_Chinese_2,
    School,
    Dating,
    Feelings,
    Family_2,
    Career,
    Traveling_1,
    Going_Abroad,
    Catching_a_Flight,
    Traveling_2,
    Renting,
    Daily_Life,
    Habits,
    Mistakes,
    Interviews,
    Work,
    Bad_Luck,
    Greetings,
    Online_Shopping,
    Office_Work,
    Sports_Competitions,
    Gossip,
    Hiking,
    Comparing,
    Arguments,
    Personality,
    Praise,
    Weight_Loss,
    Housework,
    Movies,
    Apologizing,
    Shocked,
    China_1,
    China_2,
    Nature,
    Environment,
  };

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

  return (
    <div>
      <Head>
        <title>TypeIt</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ThemeProvider theme={darkTheme}>
        <Box
          display="flex"
          flexDirection="row"
          sx={{ height: "100%", width: "100%" }}
        >
          <SideNav switchDeck={switchDeck} />
          <Box
            display="flex"
            flexDirection="column"
            sx={{ height: "100vh", width: "100vw" }}
          >
            <TopNav backToHome={backToHome} />
            {deck ? <Words deck={deck} deckName={deckName} /> : null}
            {initialRender && <Welcome />}
          </Box>
          <CssBaseline />
        </Box>
      </ThemeProvider>
    </div>
  );
}
