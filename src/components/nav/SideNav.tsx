import * as React from "react";
import { Titles } from "../../wordBank/Titles";
import { useAtom } from "jotai";
import { sideNavState, tabAtom } from "../State";
import {
  Drawer as MuiDrawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import { colors } from "../games/planetDefender/Patterns";

const Drawer = ({ switchDeck }: { switchDeck: any }) => {
  const [sideNav, setSideNav] = useAtom(sideNavState);
  const [tab, setTab] = useAtom(tabAtom);

  return (
    <MuiDrawer
      open={sideNav}
      onClose={() => setSideNav(false)}
      variant="temporary"
      sx={{ background: "none" }}
      PaperProps={{
        elevation: 0,
      }}
    >
      <List>
        {Titles.map((text, index) => (
          <ListItem
            key={index}
            sx={{
              padding: "0 55px",
              color: tab == text.english ? colors.pink : "white",
            }}
            onClick={() => {
              switchDeck(text.english);
              setSideNav(false);
              setTab(text.english);
            }}
          >
            <ListItemButton>
              <ListItemText
                primary={
                  <Typography variant="caption">{text.english}</Typography>
                }
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </MuiDrawer>
  );
};

export default Drawer;
