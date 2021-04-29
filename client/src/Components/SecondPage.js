import {
  AppBar,
  Divider,
  Drawer,
  Hidden,
  IconButton,
  ListItem,
  ListItemText,
  Toolbar,
  Typography,
} from "@material-ui/core";
import React, { useState } from "react";
import { useParams } from "react-router";
import CollectionsBookmarkRoundedIcon from "@material-ui/icons/CollectionsBookmarkRounded";
import { ThemeProvider } from "@material-ui/core/styles";
import MenuRoundedIcon from "@material-ui/icons/MenuRounded";
import subData from "../Data/SubjectData";
import { useHistory } from "react-router-dom";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import { useStyles } from "../Styles/SecondPageStyles";
import { theme } from "../Styles/SecondPageStyles";

const SecondPage = () => {
  const history = useHistory();
  const [open, setOpen] = useState(true);
  const classes = useStyles();
  const { subCode } = useParams();

  const subject = subData.subjects.filter(
    (item) => item.subCode === parseInt(subCode)
  );

  const content = subject[0].content;

  const handleSideBarClick = (chapterNo, subCode) => {
    // console.log("subcode , chapterNo", subCode, chapterNo);
    history.push(`/content/${subCode}/${chapterNo}`);
  };

  // console.log(id);
  // console.log("content", content);
  // console.log(subject[0].content.map((item) => console.log(item.chName)));

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.main}>
        {/* For mobile phones */}
        <Hidden smUp>
          <Drawer anchor="left" open={open} onClose={() => setOpen(false)}>
            <Toolbar className={classes.toolbarColor}>
              <IconButton onClick={() => history.push("/")}>
                <ArrowBackIosIcon />
              </IconButton>
              Chapters
            </Toolbar>
            <Divider />
            {content.map((item) => {
              return (
                <ListItem
                  button
                  key={item.chapterNo}
                  className={classes.drawer}
                >
                  <ListItemText
                    onClick={() => {
                      handleSideBarClick(item.chapterNo, subCode);
                    }}
                    primary={item.chName}
                  ></ListItemText>
                </ListItem>
              );
            })}
          </Drawer>
        </Hidden>
        {/* for Laptops and desktops */}
        <Hidden xsDown implementation="css">
          <Drawer anchor="left" variant="permanent">
            <Toolbar className={classes.toolbarColor}>
              <IconButton onClick={() => history.push("/")}>
                <ArrowBackIosIcon />
              </IconButton>
              Chapters
            </Toolbar>
            <Divider />
            {content.map((item) => {
              return (
                <ListItem
                  button
                  key={item.chapterNo}
                  className={classes.drawer}
                >
                  <ListItemText
                    onClick={() => {
                      handleSideBarClick(item.chapterNo, subCode);
                    }}
                    primary={item.chName}
                  ></ListItemText>
                </ListItem>
              );
            })}
          </Drawer>
        </Hidden>
        <AppBar className={classes.appbar} position="fixed">
          <Toolbar>
            <IconButton
              className={classes.menuButton}
              onClick={() => setOpen(true)}
            >
              <MenuRoundedIcon />
            </IconButton>
            <Typography variant="h4">StudentsHub</Typography>
            <CollectionsBookmarkRoundedIcon className={classes.seperate} />
          </Toolbar>
        </AppBar>
        <main>
          <Toolbar />
          <Typography color="textPrimary" align="center" variant="h4">
            Select Chapter
          </Typography>
          <Typography align="center" variant="h6">
            Click on any of the topic in the left to read more about it
          </Typography>
        </main>
      </div>
    </ThemeProvider>
  );
};

export default SecondPage;
