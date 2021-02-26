import React, { useState } from "react";
import { getWinerDate } from "../service/index";
import Gorra from "../assets/gorra.png";
import { Typography } from "@material-ui/core";
import DateRangeIcon from "@material-ui/icons/DateRange";

export const WinnerTab = (props) => {
  const { playerSlam, slam, slams, value, index, ...other } = props;
  const [date, setDate] = useState([]);

  const getData = async (player) => {
    const date = await getWinerDate(player, slam);
    setDate(date);
  };
  return (
    <>
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        <ul>
          {playerSlam.name &&
            playerSlam.name.map((player, i) => {
              return (
                <li
                  style={{
                    listStyle: "none",
                    display: "flex",
                    alignItems: "center",
                    cursor: "pointer",
                  }}
                  key={i}
                  onClick={() => getData(player)}
                >
                  <img src={Gorra} alt="vineta" />
                  <Typography
                    variant="body1"
                    style={{
                      color: "#284164",
                      fontSize: 20,
                      marginLeft: 15,
                    }}
                  >
                    {player}
                  </Typography>
                </li>
              );
            })}
        </ul>
        <Typography
          variant="h6"
          style={{
            display: "flex",
            alignItems: "center",
            color: "#40A1F2",
          }}
        >
          <DateRangeIcon />
          {date.lastDayWon}-{date.lastMonthWon}-{date.lastYearWon}
        </Typography>
      </div>
    </>
  );
};
