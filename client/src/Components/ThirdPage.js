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
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import CollectionsBookmarkRoundedIcon from "@material-ui/icons/CollectionsBookmarkRounded";
import { ThemeProvider } from "@material-ui/core/styles";
import MenuRoundedIcon from "@material-ui/icons/MenuRounded";
import { useHistory } from "react-router-dom";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import { get_data } from "../Actions/actions";
import { useDispatch, useSelector } from "react-redux";
import SyncLoader from "react-spinners/SyncLoader";
import useStyles from "../Styles/ThirdPageStyles";
import { theme } from "../Styles/ThirdPageStyles";
import ThirdPageContent from "./ThirdPageContent";

const ThirdPage = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [open, setOpen] = useState(true);
  const [info, setInfo] = useState("");
  const [heading, setHeading] = useState(""); //main heading
  // ----------------------------------------------------------------

  const [headingOne, setHeadingOne] = useState("");
  const [headingTwo, setHeadingTwo] = useState("");
  const [headingThree, setHeadingThree] = useState("");
  const [headingFour, setHeadingFour] = useState("");
  const [headingFive, setHeadingFive] = useState("");
  const [headingSix, setHeadingSix] = useState("");
  const [headingSeven, setHeadingSeven] = useState("");

  const [inDetailOne, setInDetailOne] = useState("");
  const [inDetailTwo, setInDetailTwo] = useState("");
  const [inDetailThree, setInDetailThree] = useState("");
  const [inDetailFour, setInDetailFour] = useState("");
  const [inDetailFive, setInDetailFive] = useState("");
  const [inDetailSix, setInDetailSix] = useState("");
  const [inDetailSeven, setInDetailSeven] = useState("");

  const [image1, setImage1] = useState([]);
  const [image2, setImage2] = useState([]);
  const [image3, setImage3] = useState([]);
  const [image4, setImage4] = useState([]);
  const [image5, setImage5] = useState([]);
  const [image6, setImage6] = useState([]);
  const [image7, setImage7] = useState([]);

  const classes = useStyles();

  const { subCode, chapterNo } = useParams();
  const post = useSelector((state) => state.dataReducer);
  // console.log("post", post);

  // console.log("params subcode , chapterNo", subCode, chapterNo);
  // console.log("data came from state", post);
  // console.log("post length", post.length);
  // console.log("post length", post.length);
  // console.log("chaperno", post?.[0]?.chNo, chapterNo);

  const chpterMatched = parseInt(chapterNo) === post?.[0]?.chNo;
  // console.log("chapterMatched", chpterMatched);
  const [data, setData] = useState(false);
  useEffect(() => {
    dispatch(get_data(subCode, chapterNo));
    setTimeout(() => {
      setData(true);
    }, 10000);
  }, []);

  const handleSideBarClick = (topic) => {
    const informations = post.filter((item) => item.topic === topic);

    const mainInformation = informations[0].shortSummary; //shortSummery
    const headingData = informations[0].heading; //main heading

    // -----------------------------------------------Image------------------------------------
    const images1 = informations[0].image1;
    const images2 = informations[0].image2;
    const images3 = informations[0].image3;
    const images4 = informations[0].image4;
    const images5 = informations[0].image5;
    const images6 = informations[0].image6;
    const images7 = informations[0].image7;

    // image.map((item) => console.log(item.base64));

    // -----------------setting up constaints to set them in setState ------------------------
    const inDetailDataOne = informations[0].inDetailOneTopic;
    const inDetailDataTwo = informations[0].inDetailTwoTopic;
    const inDetailDataThree = informations[0].inDetailThreeTopic;
    const inDetailDataFour = informations[0].inDetailFourTopic;
    const inDetailDataFive = informations[0].inDetailFiveTopic;
    const inDetailDataSix = informations[0].inDetailSixTopic;
    const inDetailDataSeven = informations[0].inDetailSevenTopic;

    const headingOne = informations[0].headingOneTopic;
    const headingTwo = informations[0].headingTwoTopic;
    const headingThree = informations[0].headingThreeTopic;
    const headingFour = informations[0].headingFourTopic;
    const headingFive = informations[0].headingFiveTopic;
    const headingSix = informations[0].headingSixTopic;
    const headingSeven = informations[0].headingSevenTopic;

    // ------------------------------setting the useState for detail ------------------------------
    setInfo(mainInformation); //short summary
    setHeading(headingData); //main heading

    setInDetailOne(inDetailDataOne);
    setInDetailTwo(inDetailDataTwo);
    setInDetailThree(inDetailDataThree);
    setInDetailFour(inDetailDataFour);
    setInDetailFive(inDetailDataFive);
    setInDetailSix(inDetailDataSix);
    setInDetailSeven(inDetailDataSeven);
    // ------------------------------setting the useState for heading ------------------------------
    setHeadingOne(headingOne);
    setHeadingTwo(headingTwo);
    setHeadingThree(headingThree);
    setHeadingFour(headingFour);
    setHeadingFive(headingFive);
    setHeadingSix(headingSix);
    setHeadingSeven(headingSeven);
    // ------------------------------setting the useState for image ------------------------------
    setImage1(images1);
    setImage2(images2);
    setImage3(images3);
    setImage4(images4);
    setImage5(images5);
    setImage6(images6);
    setImage7(images7);
  };

  // post && image1?.map((item) => console.log(item.base64));

  return (
    <ThemeProvider theme={theme}>
      {!chpterMatched ? (
        // **************************************************Loading Screen*************************************************
        <div>
          {!data ? (
            <div>
              <Typography align="center" className={classes.loadingPosition}>
                <SyncLoader
                  color="#36D7B7"
                  loading={!chpterMatched}
                  size={30}
                />
              </Typography>
              <Typography className={classes.hangOn} align="center">
                hang On, it may take a while as we load all the topics of the
                chapter at once, so that you can get the best experience.
              </Typography>
            </div>
          ) : (
            <Typography variant="h4" className={classes.notFound}>
              Chapter Not Available
            </Typography>
          )}
          {/* -----------------------------appbar----------------------------------------- */}
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
          {/* ----------------------------------drawer----------------------------------------- */}
          {/* For Laptop/Desktop */}
          <Hidden xsDown implementation="css">
            <Drawer anchor="left" variant="permanent">
              <Toolbar className={classes.toolbarColor}>
                <IconButton onClick={() => history.push(`/content/${subCode}`)}>
                  <ArrowBackIosIcon />
                </IconButton>
                Topics
              </Toolbar>
              <Divider />
              <ListItem button className={classes.drawer}>
                {!data ? (
                  <ListItemText primary="Loading...."></ListItemText>
                ) : (
                  <ListItemText primary="No Data Available"></ListItemText>
                )}
              </ListItem>
            </Drawer>
          </Hidden>
          {/* For Mobile */}
          <Hidden smUp>
            <Drawer anchor="left" open={open} onClose={() => setOpen(false)}>
              <Toolbar className={classes.toolbarColor}>
                <IconButton onClick={() => history.push(`/content/${subCode}`)}>
                  <ArrowBackIosIcon />
                </IconButton>
                Topics
              </Toolbar>
              <Divider />

              <ListItem button className={classes.drawer}>
                {!data ? (
                  <ListItemText
                    onClick={() => {
                      setOpen(false);
                    }}
                    primary="Loading...."
                  ></ListItemText>
                ) : (
                  <ListItemText primary="No Data Available"></ListItemText>
                )}
              </ListItem>
            </Drawer>
          </Hidden>
        </div>
      ) : (
        // ************************************************* Main Screen ***************************************************
        <div className={classes.main}>
          <main>
            {/* -----------------------------appbar----------------------------------------- */}
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
            <Toolbar />
            {/* -----------------------------drawer----------------------------------------- */}
            {/* For Mobile */}
            <Hidden smUp>
              <Drawer anchor="left" open={open} onClose={() => setOpen(false)}>
                <Toolbar className={classes.toolbarColor}>
                  <IconButton
                    onClick={() => history.push(`/content/${subCode}`)}
                  >
                    <ArrowBackIosIcon />
                  </IconButton>
                  Topics
                </Toolbar>
                <Divider />
                {post.map((item) => {
                  return (
                    <ListItem
                      button
                      key={item?.topic}
                      className={classes.drawer}
                    >
                      <ListItemText
                        onClick={() => {
                          handleSideBarClick(item.topic);
                          setOpen(false);
                        }}
                        primary={item.heading}
                      ></ListItemText>
                    </ListItem>
                  );
                })}
              </Drawer>
            </Hidden>
            {/* For Laptop/Desktop */}
            <Hidden xsDown implementation="css">
              <Drawer anchor="left" variant="permanent">
                <Toolbar className={classes.toolbarColor}>
                  <IconButton
                    onClick={() => history.push(`/content/${subCode}`)}
                  >
                    <ArrowBackIosIcon />
                  </IconButton>
                  Topics
                </Toolbar>
                <Divider />
                {post.map((item) => {
                  return (
                    <ListItem
                      button
                      key={item?.topic}
                      className={classes.drawer}
                    >
                      <ListItemText
                        onClick={() => {
                          handleSideBarClick(item.topic);
                        }}
                        primary={item.heading}
                      ></ListItemText>
                    </ListItem>
                  );
                })}
              </Drawer>
            </Hidden>

            {/* -------------------------------------Typogrypghys------------------------------------- */}
            <ThirdPageContent
              info={info} //shortsummary
              // -------------------------heading ---------------------------
              heading={heading}
              headingOne={headingOne}
              headingTwo={headingTwo}
              headingThree={headingThree}
              headingFour={headingFour}
              headingFive={headingFive}
              headingSix={headingSix}
              headingSeven={headingSeven}
              // ---------------------------detail -------------------
              inDetailOne={inDetailOne}
              inDetailTwo={inDetailTwo}
              inDetailThree={inDetailThree}
              inDetailFour={inDetailFour}
              inDetailFive={inDetailFive}
              inDetailSix={inDetailSix}
              inDetailSeven={inDetailSeven}
              // -----------------------------image ----------------------
              image1={image1}
              image2={image2}
              image3={image3}
              image4={image4}
              image5={image5}
              image6={image6}
              image7={image7}
              post={post}
            />
            {/* ----------------------------------------end---------------------------------------------- */}
          </main>
        </div>
      )}
    </ThemeProvider>
  );
};

export default ThirdPage;
