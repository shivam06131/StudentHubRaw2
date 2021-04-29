import React from "react";
import {
  AppBar,
  Grid,
  Toolbar,
  Typography,
  Button,
  Paper,
} from "@material-ui/core";
import {
  makeStyles,
  createMuiTheme,
  ThemeProvider,
} from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import CollectionsBookmarkRoundedIcon from "@material-ui/icons/CollectionsBookmarkRounded";
import subjects from "../Data/Sub";

const useStyles = makeStyles((theme) => ({
  appbar: {
    backgroundColor: "#2ECC71",
    color: "#ffefdb",
  },
  seperate: {
    marginLeft: "1%",
  },
  toolbar: {
    [theme.breakpoints.up("sm")]: {
      paddingLeft: "244px",
    },
  },
  changeHover: {
    "&:hover": {
      background: "#2ECC71",
    },
  },
}));

const theme = createMuiTheme({
  overrides: {
    MuiButton: {
      outlinedPrimary: {
        width: "80%",
        margin: "1.5% 11%",
        color: "black",
      },
    },
    MuiPaper: {
      elevation1: {
        backgroundColor: "white",
        padding: "5%",
      },
    },
    MuiTypography: {
      body1: {
        marginLeft: "5.5%",
      },
      h4: {
        fontFamily: "'Ubuntu', sans-serif",
      },
    },
  },
});

const FirstPage = () => {
  const classes = useStyles();
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Grid container justify="center" spacing={2}>
          <Grid item sm={12} xs={12} md={12}>
            <AppBar className={classes.appbar} position="static">
              <Toolbar className={classes.toolbar}>
                <Typography variant="h4">StudentsHub</Typography>
                <CollectionsBookmarkRoundedIcon className={classes.seperate} />
              </Toolbar>
            </AppBar>
          </Grid>
          <Grid item sm={10} md={8} xs={10}>
            <Paper>
              <Typography gutterBottom variant="h3" align="center">
                Information Tecnology
              </Typography>
              <Typography variant="h6" align="center">
                Semister : 6
              </Typography>
              {subjects.map((item) => {
                if (item?.hidden) {
                  return (
                    <Button
                      className={classes.changeHover}
                      key={item.id}
                      startIcon={item?.icon}
                      disabled
                      variant="outlined"
                      color="primary"
                    >
                      {item.sub}
                    </Button>
                  );
                }
                return (
                  <Button
                    className={classes.changeHover}
                    key={item.id}
                    startIcon={item?.icon}
                    variant="outlined"
                    color="primary"
                    component={Link}
                    to={`/content/${item.id}`}
                  >
                    {item.sub}
                  </Button>
                );
              })}
            </Paper>
          </Grid>
        </Grid>
      </ThemeProvider>
    </div>
  );
};

export default FirstPage;
