import { makeStyles, createMuiTheme } from "@material-ui/core/styles";

const drawerWidth = "220px";
export const useStyles = makeStyles((theme) => ({
  main: {
    [theme.breakpoints.up("sm")]: {
      paddingLeft: `calc(${drawerWidth} + 20px)`,
      paddingRight: `20px`,
    },
  },
  appbar: {
    backgroundColor: "#2ECC71",
    color: "#ffefdb",
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth})`,
    },
  },
  seperate: {
    marginLeft: "1%",
  },
  drawer: {
    width: drawerWidth,
  },
  menuButton: {
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  toolbarColor: {
    backgroundColor: "#2ECC71",
    // padding : "0% 2%",
    color: "#ffefdb",
    fontSize: "xx-large",
    fontFamily: "'Ubuntu', sans-serif",
  },
}));

export const theme = createMuiTheme({
  overrides: {
    MuiTypography: {
      body1: {
        marginLeft: "1%",
        fontFamily: "'Ubuntu', sans-serif",
      },
      colorTextPrimary: {
        padding: "4% 0%",
      },
      subtitle1: {
        padding: "1% 6%",
      },
      h4: {
        fontFamily: "'Ubuntu', sans-serif",
      },
    },
    MuiDrawer: {
      paperAnchorDockedLeft: {
        backgroundColor: "#F7F9F9",
      },
      paperAnchorLeft: {
        width: "220px",
      },
    },
    MuiListItem: {
      button: {
        border: "1px solid gainsboro",
      },
    },
  },
});