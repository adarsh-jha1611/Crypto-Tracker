import React from "react";
import {
  AppBar,
  Container,
  MenuItem,
  Select,
  Toolbar,
  Button,
} from "@material-ui/core";
import {
  createTheme,
  makeStyles,
  ThemeProvider,
} from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";
import { CryptoState } from "../CryptoContext";
import logoImage from "../components/logo.png";

const useStyles = makeStyles((theme) => ({
  title: {
    flex: 1,
    color: "white",
    fontFamily: "Montserrat",
    fontWeight: "bold",
    cursor: "pointer",
  },
  logo: {
    cursor: "pointer",
    height: "50px",
  },
  select: {
    "& .MuiSelect-select": {
      color: "#CD7810",
    },
    "& .MuiOutlinedInput-input": {
      borderRadius: "15px",
    },
  },
  authButtons: {
    display: "flex",
    alignItems: "center",
    gap: theme.spacing(2),
    height: "50px",
  },
}));

const darkTheme = createTheme({
  palette: {
    primary: {
      main: "#fff",
    },
    type: "dark",
  },
});

function Header() {
  const classes = useStyles();
  const { currency, setCurrency } = CryptoState();

  const history = useHistory();

  return (
    <ThemeProvider theme={darkTheme}>
      <AppBar
        color="transparent"
        position="static"
        style={{ backgroundColor: "white" }}
      >
        <Container>
          <Toolbar
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <img
              onClick={() => history.push(`/`)}
              src={logoImage}
              alt="Crypto Hunter Logo"
              className={classes.logo}
            />
            <div className={classes.authButtons}>
              
              {/* Register Button */}
    
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
            {/* Select Dropdown */}
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={currency}
              className={classes.select}
              style={{ width: 100 }}
              onChange={(e) => setCurrency(e.target.value)}
            >
              <MenuItem value={"USD"}>USD</MenuItem>
              <MenuItem value={"INR"}>INR</MenuItem>
            </Select>
            {/* Login Button */}
            <Button
                color="secondary"
                variant="contained"
                style={{ backgroundColor: "#CD7810" }}
                onClick={() => history.push("/login")}
              >
                Login
              </Button>
              </div>
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  );
}

export default Header;
