import "./App.css";
import ChampioTabs from "./components/ChampionTabs";

import Background from "./assets/bg-2.png";
import Logo from "./assets/logo.png";

import {
  makeStyles,
  ThemeProvider,
  createMuiTheme,
} from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  "@global": {
    body: {
      padding: 0,
      margin: 0,
    },
  },
  banner: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    "& img": {
      width: 250,
    },
    "& h6": {
      width: "60%",
      textAlign: "center",
      margin: "10px 0 30px",
      color: "#284164",
    },
  },
  containerSlams: {
    width: "50%",
    margin: "AUTO",

    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
  bannerBg: {
    height: "100vh",
    backgroundImage: "url(" + Background + ")",
    backgroundSize: "cover",
    backgroundPosition: "center center",
  },
}));

const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#fff",
      main: "#40a1f2",
      dark: "#002884",
      contrastText: "#fff",
    },
    secondary: {
      light: "#ff7961",
      main: "#fcce02",
      dark: "#ba000d",
      contrastText: "#000",
    },
  },
});

function App() {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
    <div className={classes.bannerBg}>
      <div className={classes.banner}>
        <img src={Logo} alt="logo" />
        <Typography variant="h6">
          El Grand Slam de tenis está constituido por los cuatro torneos mayores
          del circuito internacional organizados por la Federación Internacional
          de Tenis
        </Typography>
      </div>
      <div className={classes.containerSlams}>
        <ChampioTabs />
      </div>
    </div>
    </ThemeProvider>
  );
}

export default App;
