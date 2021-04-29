import { makeStyles, createMuiTheme } from "@material-ui/core/styles";

const drawerWidth = "220px";
export default makeStyles((theme) => ({
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
    color: "#ffefdb",
    fontSize: "xx-large",
    fontFamily: "'Ubuntu', sans-serif",
  },
  backgroundstyle: {
    backgroundColor: "#F1C40F",
    borderRadius: "15px",
    margin: "0% 2%",
  },
  subtopicHeadingStyle: {
    width: "80%",
    marginTop: "1%",
    backgroundColor: "#52BE80",
    borderRadius: "15px",
    margin: "0% 2%",
  },
  detailTopSpace: {
    margin: "0.2% 0%",
  },
  media: {
    height: 0,
    margin: "4% 4%",
    paddingTop: "56.25%",
  },
  loadingPosition: {
    [theme.breakpoints.only("xs")]: {
      paddingTop: "25%",
      paddingBottom: "6%",
    },
    [theme.breakpoints.only("sm")]: {
      paddingTop: "16%",
      paddingBottom: "2%",
      width: "75%",
      paddingLeft: "25%",
    },
    [theme.breakpoints.only("md")]: {
      paddingTop: "13%",
      paddingBottom: "4%",
      width: "75%",
      paddingLeft: "25%",
    },
    [theme.breakpoints.only("lg")]: {
      paddingTop: "7%",
      paddingBottom: "2%",
      width: "88%",
      paddingLeft: "12%",
    },
    [theme.breakpoints.only("xl")]: {
      paddingTop: "5%",
      paddingBottom: "2%",
      width: "94%",
      paddingLeft: "6%",
    },
  },
  hangOn: {
    [theme.breakpoints.only("xs")]: {
      padding: "0% 12%",
    },
    [theme.breakpoints.only("sm")]: {
      paddingLeft: `calc(${drawerWidth} + 30px)`,
      paddingRight: "30px",
    },
    [theme.breakpoints.only("md")]: {
      paddingLeft: `calc(${drawerWidth} + 30px)`,
      paddingRight: "30px",
    },
    [theme.breakpoints.only("lg")]: {
      paddingLeft: `calc(${drawerWidth} + 30px)`,
      paddingRight: "30px",
    },
    [theme.breakpoints.only("xl")]: {
      paddingLeft: `calc(${drawerWidth} + 30px)`,
      paddingRight: "30px",
    },
  },
  notFound: {
    [theme.breakpoints.only("xs")]: {
      padding: "25% 32%",
    },
    [theme.breakpoints.only("sm")]: {
      padding: "16% 4%",
      paddingLeft: "44%",
    },
    [theme.breakpoints.only("md")]: {
      paddingTop: "15%",
      paddingLeft: "40%",
    },
    [theme.breakpoints.only("lg")]: {
      paddingTop: "9%",
      paddingLeft: "40%",
    },
    [theme.breakpoints.only("xl")]: {
      paddingTop: "5%",
      paddingLeft: "44%",
    },
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
        fontFamily : "'Roboto', sans-serif"
      },
      h5: {
        padding: "0% 4%",
        paddingTop: "1%",
        paddingBottom: "1%",
      },
      h4: {
        fontFamily: "'Ubuntu', sans-serif",
      },
    },
    MuiDrawer: {
      paperAnchorDockedLeft: {
        backgroundColor: "#F7F9F9",
        width: "220px",
      },
    },
    MuiListItem: {
      button: {
        border: "1px solid gainsboro",
      },
    },
    MuiGrid: {
      container: {
        justifyContent: "space-around",
        width : "90%",
        paddingLeft : "15%"
      },
    },
  },
});
