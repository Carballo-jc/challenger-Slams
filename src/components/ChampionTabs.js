import React, { useState } from "react";
import { useSelector } from "react-redux";

import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

import { WinnerTab } from "./WinnerTab";
import { getWiner } from "../service";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

const ChampioTabs = () => {
  const classes = useStyles();

  const slams = useSelector((state) => state.championList);
  const [value, setValue] = useState(0);
  const [playerSlam, setPlayerSlam] = useState([]);

  const getPlayers = async (slam) => {
    const winners = await getWiner(slam);
    setPlayerSlam(winners);
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="simple tabs example"
        >
          {slams.map((slam, i) => {
            return (
              <Tab key={i} label={slam} onClick={() => getPlayers(slam)} />
            );
          })}
        </Tabs>
      </AppBar>
      {slams.map((slam, index) => {
        return (
          <WinnerTab
            key={index}
            playerSlam={playerSlam}
            slam={slam}
            index={index}
            value={value}
            slams={slams}
          />
        );
      })}
    </div>
  );
};
export default ChampioTabs;
