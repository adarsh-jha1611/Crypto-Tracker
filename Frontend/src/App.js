import { makeStyles } from "@material-ui/core";
import Homepage from "./Pages/HomePage";
import Login from './Pages/Login';
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import CoinPage from "./Pages/CoinPage";
import Header from "./components/Header";
import Register from "./Pages/Register";

const useStyles = makeStyles(() => ({
  App: {
    backgroundColor: "#ffffff",
    color: "grey",
    minHeight: "100vh",
  },
}));

function App() {
  const classes = useStyles();

  return (
    <BrowserRouter>
      <div className={classes.App}>
        <Header />
        <Route path="/" component={Homepage} exact />
        <Route path="/coins/:id" component={CoinPage} exact />
       <Route path="/login" component={Login} exact />
       <Route path="/register" component={Register} exact />


      </div>
    </BrowserRouter>
  );
}

export default App;
