import React, { Fragment } from "react";
import { Container, CssBaseline, makeStyles, Paper, Grid } from "@material-ui/core";
import HeaderNav from "./component/_HeaderNav/HeaderNav";
import Home from "./component/Pages/Home/Home";
import About from "./component/Pages/About/About";
import Footer from "./component/Footer/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const useStyles = makeStyles((theme) => {
  console.log({ theme });
  return {
    center: {
      display: "flex",
      flexDirection: "column",
      alignItems: 'center',
      zIndex: 2,
      backgroundColor:'#F5F5F5',
      height: '100%',
    },
    paper: {
      width: "75%",
      height: "100%",
      backgroundColor: theme.palette.background.paper,
    },
    content: {
      paddingTop: theme.spacing(5),
      display: "flex",
      justifyContent: "flex-start",
      height: '100%',
      zIndex: 1,
    },
  };
});

function App() {
  const classes = useStyles();
  return (
    <div className={classes.center}>
        <Paper variant="outlined" square className={classes.paper} elevation={3}>
          <Router>
            <HeaderNav />
            <Switch>
                <Route exact path="/about" component={About} />
                <Route exact path="/" component={Home} />
            </Switch>
          </Router>
        </Paper>
      <Footer />
    </div>
  );
}

export default App;
