import React from "react";
import { Typography, Card, CardMedia, Grid } from "@material-ui/core";
import useStyles from "../Styles/ThirdPageStyles";

const ThirdPageContent = (props) => {
  const {
    info,
    heading,
    headingOne,
    headingTwo,
    headingThree,
    headingFour,
    headingFive,
    headingSix,
    headingSeven,
    inDetailOne,
    inDetailTwo,
    inDetailThree,
    inDetailFour,
    inDetailFive,
    inDetailSix,
    inDetailSeven,
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    post,
  } = props;
  const classes = useStyles();
  return (
    // {/* -------------------------------------Typogrypghys------------------------------------- */}
    <div>
      <Typography color="textPrimary" align="center" variant="h4">
        {heading ? heading : "Select Topic"}
      </Typography>

      <Typography variant="h6" align="center">
        {!info && "Click on any of the topic in the left to read more about it"}
      </Typography>
      {/* --------------------- short summary (info = short summary)----------------- */}
      {info && (
        <Typography className={classes.backgroundstyle} variant="h5">
          {info && "Short Summary"}
        </Typography>
      )}

      <Typography variant="subtitle1">
        {info?.split("    ").map((item, key) => {
          return (
            <div key={key}>
              <Typography
                variant="subtitle1"
                className={classes.detailTopSpace}
              >
                {item}
              </Typography>
            </div>
          );
        })}
      </Typography>

      {/* ------------------------------------------------------------------------------- */}
      {info && (
        <Typography className={classes.backgroundstyle} variant="h5">
          {info && "In Detail"}
        </Typography>
      )}
      {/* //   -----------------------------------one----------------------------------- */}
      {/* //   headingOne is not compulsary */}
      {headingOne && (
        <Typography className={classes.subtopicHeadingStyle} variant="h5">
          {headingOne}
        </Typography>
      )}
      {/* inDetailOne in compulsary */}
      <Typography variant="subtitle1">
        {inDetailOne?.split("    ").map((item, key) => {
          return (
            <div key={key}>
              <Typography
                variant="subtitle1"
                className={classes.detailTopSpace}
              >
                {item}
              </Typography>
            </div>
          );
        })}
      </Typography>
      {/* ---------------------image----------------- */}
      <Grid container>
        {post &&
          image1?.map((item, index) => {
            const { base64 } = item;
            // console.log("base", base64);
            return (
              <Grid key={index} item xs={12} sm={12} md={12}>
                <Card>
                  <CardMedia className={classes.media} image={base64} />
                </Card>
              </Grid>
            );
          })}
      </Grid>

      {/* --------------------------------two-------------------------------- */}
      {/* They are all not compulsary */}
      {headingTwo && (
        <Typography className={classes.subtopicHeadingStyle} variant="h5">
          {headingTwo}
        </Typography>
      )}
      <Typography variant="subtitle1">
        {inDetailTwo?.split("    ").map((item, key) => {
          return (
            <div key={key}>
              <Typography
                variant="subtitle1"
                className={classes.detailTopSpace}
              >
                {item}
              </Typography>
            </div>
          );
        })}
      </Typography>
      {/* ---------------------image----------------- */}
      <Grid container>
        {post &&
          image2?.map((item, index) => {
            const { base64 } = item;
            // console.log("base", base64);
            return (
              <Grid key={index} item xs={12} sm={12} md={12}>
                <Card>
                  <CardMedia className={classes.media} image={base64} />
                </Card>
              </Grid>
            );
          })}
      </Grid>
      {/* ---------------------------------three-------------------------------- */}
      {headingThree && (
        <Typography className={classes.subtopicHeadingStyle} variant="h5">
          {headingThree}
        </Typography>
      )}
      <Typography variant="subtitle1">
        {inDetailThree?.split("    ").map((item, key) => {
          return (
            <div key={key}>
              <Typography
                variant="subtitle1"
                className={classes.detailTopSpace}
              >
                {item}
              </Typography>
            </div>
          );
        })}
      </Typography>
      {/* ---------------------image----------------- */}
      <Grid container>
        {post &&
          image3?.map((item, index) => {
            const { base64 } = item;
            // console.log("base", base64);
            return (
              <Grid key={index} item xs={12} sm={12} md={12}>
                <Card>
                  <CardMedia className={classes.media} image={base64} />
                </Card>
              </Grid>
            );
          })}
      </Grid>
      {/* ---------------------------------four-------------------------------- */}
      {headingFour && (
        <Typography className={classes.subtopicHeadingStyle} variant="h5">
          {headingFour}
        </Typography>
      )}
      <Typography variant="subtitle1">
        {inDetailFour?.split("    ").map((item, key) => {
          return (
            <div key={key}>
              <Typography
                variant="subtitle1"
                className={classes.detailTopSpace}
              >
                {item}
              </Typography>
            </div>
          );
        })}
      </Typography>
      {/* ---------------------image----------------- */}
      <Grid container>
        {post &&
          image4?.map((item, index) => {
            const { base64 } = item;
            // console.log("base", base64);
            return (
              <Grid key={index} item xs={12} sm={12} md={12}>
                <Card>
                  <CardMedia className={classes.media} image={base64} />
                </Card>
              </Grid>
            );
          })}
      </Grid>
      {/* ---------------------------------five-------------------------------- */}
      {headingFive && (
        <Typography className={classes.subtopicHeadingStyle} variant="h5">
          {headingFive}
        </Typography>
      )}
      <Typography variant="subtitle1">
        {inDetailFive?.split("    ").map((item, key) => {
          return (
            <div key={key}>
              <Typography
                variant="subtitle1"
                className={classes.detailTopSpace}
              >
                {item}
              </Typography>
            </div>
          );
        })}
      </Typography>
      {/* ---------------------image----------------- */}
      <Grid container>
        {post &&
          image5?.map((item, index) => {
            const { base64 } = item;
            // console.log("base", base64);
            return (
              <Grid key={index} item xs={12} sm={12} md={12}>
                <Card>
                  <CardMedia className={classes.media} image={base64} />
                </Card>
              </Grid>
            );
          })}
      </Grid>
      {/* ---------------------------------six-------------------------------- */}
      {headingSix && (
        <Typography className={classes.subtopicHeadingStyle} variant="h5">
          {headingSix}
        </Typography>
      )}
      <Typography variant="subtitle1">
        {inDetailSix?.split("    ").map((item, key) => {
          return (
            <div key={key}>
              <Typography
                variant="subtitle1"
                className={classes.detailTopSpace}
              >
                {item}
              </Typography>
            </div>
          );
        })}
      </Typography>
      {/* ---------------------image----------------- */}
      <Grid container>
        {post &&
          image6?.map((item, index) => {
            const { base64 } = item;
            // console.log("base", base64);
            return (
              <Grid key={index} item xs={12} sm={12} md={12}>
                <Card>
                  <CardMedia className={classes.media} image={base64} />
                </Card>
              </Grid>
            );
          })}
      </Grid>
      {/* ---------------------------------seven-------------------------------- */}
      {headingSeven && (
        <Typography className={classes.subtopicHeadingStyle} variant="h5">
          {headingSeven}
        </Typography>
      )}
      <Typography variant="subtitle1">
        {inDetailSeven?.split("    ").map((item, key) => {
          return (
            <div key={key}>
              <Typography
                variant="subtitle1"
                className={classes.detailTopSpace}
              >
                {item}
              </Typography>
            </div>
          );
        })}
      </Typography>
      {/* ---------------------image----------------- */}
      <Grid container>
        {post &&
          image7?.map((item, index) => {
            const { base64 } = item;
            // console.log("base", base64);
            return (
              <Grid key={index} item xs={12} sm={12} md={12}>
                <Card>
                  <CardMedia className={classes.media} image={base64} />
                </Card>
              </Grid>
            );
          })}
      </Grid>
    </div>
  );
};

export default ThirdPageContent;
