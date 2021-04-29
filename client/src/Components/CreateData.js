import React, { useState } from "react";
import {
  AppBar,
  Button,
  Container,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  TextField,
  Toolbar,
  Typography,
} from "@material-ui/core";
import {
  makeStyles,
  createMuiTheme,
  ThemeProvider,
} from "@material-ui/core/styles";
import CollectionsBookmarkRoundedIcon from "@material-ui/icons/CollectionsBookmarkRounded";
import { create_data } from "../Actions/actions";
import { useDispatch } from "react-redux";
import FileBase from "react-file-base64";

const useStyles = makeStyles((theme) => ({
  appbar: {
    backgroundColor: "#15d466",
    color: "#ffefdb",
  },
  seperate: {
    marginLeft: "1%",
  },
  toolbar: {
    [theme.breakpoints.up("sm")]: {
      paddingLeft: "245px",
    },
  },
  top: {
    marginTop: "2%",
    marginBottom: "2%",
    backgroundColor: "#2ECC71",
  },
  textField: {
    //small ya small k upar (ye ulta kaam karra hai)
    [theme.breakpoints.up("sm")]: {
      width: "70%",
      margin: "0.5% 15%",
    },
    //xs ya uske neeche ye property apply hogi
    [theme.breakpoints.down("xs")]: {
      width: "90%",
      margin: "0.5% 5%",
    },
  },
  textField2: {
    width: "90%",
    margin: "0.5% 5%",
  },
  paperTwo: {
    margin: "2% 2%",
    backgroundColor: "aliceblue",
  },
  btn: {
    width: "90%",
    margin: "2% 5%",
  },
  imageInput: {
    margin: "1% 5%",
  },
}));

const theme = createMuiTheme({
  overrides: {
    MuiTypography: {
      h4: {
        fontFamily: "cursive",
      },
    },
  },
});

const initialData = {
  image1: [],
  image2: [],
  image3: [],
  image4: [],
  image5: [],
  image6: [],
  image7: [],
  subCode: "",
  chNo: "",
  topic: "",
  heading: "",
  shortSummary: "",
  topicsHeadingOne: "",
  topicsDetailOne: "",
  topicsHeadingTwo: "",
  topicsDetailTwo: "",
  topicsHeadingThree: "",
  topicsDetailThree: "",
  topicsHeadingFour: "",
  topicsDetailFour: "",
  topicsHeadingFive: "",
  topicsDetailFive: "",
  topicsHeadingSix: "",
  topicsDetailSix: "",
  topicsHeadingSeven: "",
  topicsDetailSeven: "",
};

const CreateData = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState(initialData);
  const classes = useStyles();

  const getFile1 = (files) => {
    setFormData({ ...formData, image1: files });
  };
  const getFile2 = (files) => {
    setFormData({ ...formData, image2: files });
  };
  const getFile3 = (files) => {
    setFormData({ ...formData, image3: files });
  };
  const getFile4 = (files) => {
    setFormData({ ...formData, image4: files });
  };
  const getFile5 = (files) => {
    setFormData({ ...formData, image5: files });
  };
  const getFile6 = (files) => {
    setFormData({ ...formData, image6: files });
  };
  const getFile7 = (files) => {
    setFormData({ ...formData, image7: files });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(create_data(formData));
    console.log(formData);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const [subjectCode, setSubjectCode] = useState("");

  const handleChanges = (e) => {
    setSubjectCode(e.target.value);
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  // console.log(formData);

  return (
    <div>
      <ThemeProvider theme={theme}>
        <AppBar position="fixed" className={classes.appbar}>
          <Toolbar className={classes.toolbar}>
            <Typography variant="h4">StudentsHub</Typography>
            <CollectionsBookmarkRoundedIcon className={classes.seperate} />
          </Toolbar>
        </AppBar>
        <main>
          <Toolbar />
          <Container maxWidth="md">
            <Paper className={classes.top}>
              <form autoComplete="off" onSubmit={handleSubmit}>
                <Grid container alignContent="space-around">
                  <Grid item sm={4} md={4} xs={12}>
                    {/* <TextField
                      color="primary"
                      className={classes.textField}
                      label="Subject Code"
                      name="subCode"
                      type="number"
                      onChange={handleChange}
                    /> */}
                    <FormControl className={classes.textField}>
                      <InputLabel>Subject</InputLabel>
                      <Select
                        name="subCode"
                        value={subjectCode}
                        onChange={handleChanges}
                      >
                        <MenuItem value={3161608}>A.I</MenuItem>
                        <MenuItem value={3161610}>D.W.M</MenuItem>
                        <MenuItem value={3161612}>M.A.D</MenuItem>
                        <MenuItem value={3161609}>C.N.S</MenuItem>
                        <MenuItem value={3161605}>S.E</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item sm={4} md={4} xs={12}>
                    <TextField
                      color="primary"
                      className={classes.textField}
                      label="Chapter No"
                      name="chNo"
                      type="number"
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid item sm={4} md={4} xs={12}>
                    <TextField
                      color="primary"
                      className={classes.textField}
                      label="Topic No"
                      name="topic"
                      type="number"
                      onChange={handleChange}
                    />
                  </Grid>
                </Grid>
                <TextField
                  color="primary"
                  name="heading"
                  className={classes.textField2}
                  label="Heading"
                  onChange={handleChange}
                />
                <TextField
                  color="primary"
                  name="shortSummary"
                  className={classes.textField2}
                  label="Short Summary"
                  multiline={true}
                  onChange={handleChange}
                />
                {/* ----------------------------Topic One------------------------------- */}
                <TextField
                  color="primary"
                  name="topicsHeadingOne"
                  className={classes.textField2}
                  multiline={true}
                  label="heading of topic one (optional)"
                  onChange={handleChange}
                />
                <TextField
                  color="primary"
                  name="topicsDetailOne"
                  className={classes.textField2}
                  multiline={true}
                  required
                  label="detail of topic one (compulsary)"
                  onChange={handleChange}
                />
                <div className={classes.imageInput}>
                  <InputLabel>image for First topic</InputLabel>
                  <FileBase
                    type="file"
                    multiple={true}
                    onDone={getFile1.bind(this)}
                  />
                </div>
                {/* -----------------------------------2nd paper------------------------ */}
                <Paper className={classes.paperTwo}>
                  <Typography variant="h6" align="center">
                    For those questions which have multiple points answer(not
                    for all questions)
                  </Typography>
                  {/* ----------------------------Topic Two------------------------------- */}
                  <TextField
                    color="primary"
                    name="topicsHeadingTwo"
                    className={classes.textField2}
                    multiline={true}
                    label="heading of topic Two"
                    onChange={handleChange}
                  />
                  <TextField
                    color="primary"
                    name="topicsDetailTwo"
                    className={classes.textField2}
                    multiline={true}
                    label="detail of topic Two"
                    onChange={handleChange}
                  />
                  <div className={classes.imageInput}>
                    <InputLabel>image for second topic</InputLabel>
                    <FileBase
                      type="file"
                      multiple={true}
                      onDone={getFile2.bind(this)}
                    />
                  </div>
                  {/* ----------------------------Topic Three------------------------------- */}
                  <TextField
                    color="primary"
                    name="topicsHeadingThree"
                    className={classes.textField2}
                    multiline={true}
                    label="heading of topic Three"
                    onChange={handleChange}
                  />
                  <TextField
                    color="primary"
                    name="topicsDetailThree"
                    className={classes.textField2}
                    multiline={true}
                    label="detail of topic Three"
                    onChange={handleChange}
                  />
                  <div className={classes.imageInput}>
                    <InputLabel>image for Three topic</InputLabel>
                    <FileBase
                      type="file"
                      multiple={true}
                      onDone={getFile3.bind(this)}
                    />
                  </div>
                  {/* ----------------------------Topic Four------------------------------- */}
                  <TextField
                    color="primary"
                    name="topicsHeadingFour"
                    className={classes.textField2}
                    multiline={true}
                    label="heading of topic Four"
                    onChange={handleChange}
                  />
                  <TextField
                    color="primary"
                    name="topicsDetailFour"
                    className={classes.textField2}
                    multiline={true}
                    label="detail of topic Four"
                    onChange={handleChange}
                  />
                  <div className={classes.imageInput}>
                    <InputLabel>image for Four topic</InputLabel>
                    <FileBase
                      type="file"
                      multiple={true}
                      onDone={getFile4.bind(this)}
                    />
                  </div>
                  {/* ----------------------------Topic Five------------------------------- */}
                  <TextField
                    color="primary"
                    name="topicsHeadingFive"
                    className={classes.textField2}
                    multiline={true}
                    label="heading of topic Five"
                    onChange={handleChange}
                  />
                  <TextField
                    color="primary"
                    name="topicsDetailFive"
                    className={classes.textField2}
                    multiline={true}
                    label="detail of topic Five"
                    onChange={handleChange}
                  />
                  <div className={classes.imageInput}>
                    <InputLabel>image for Five topic</InputLabel>
                    <FileBase
                      type="file"
                      multiple={true}
                      onDone={getFile5.bind(this)}
                    />
                  </div>
                  {/* ----------------------------Topic Six------------------------------- */}
                  <TextField
                    color="primary"
                    name="topicsHeadingSix"
                    className={classes.textField2}
                    multiline={true}
                    label="heading of topic Six"
                    onChange={handleChange}
                  />
                  <TextField
                    color="primary"
                    name="topicsDetailSix"
                    className={classes.textField2}
                    multiline={true}
                    label="detail of topic Six"
                    onChange={handleChange}
                  />
                  <div className={classes.imageInput}>
                    <InputLabel>image for Six topic</InputLabel>
                    <FileBase
                      type="file"
                      multiple={true}
                      onDone={getFile6.bind(this)}
                    />
                  </div>
                  {/* ----------------------------Topic Seven------------------------------- */}
                  <TextField
                    color="primary"
                    name="topicsHeadingSeven"
                    className={classes.textField2}
                    multiline={true}
                    label="heading of topic Seven"
                    onChange={handleChange}
                  />
                  <TextField
                    color="primary"
                    name="topicsDetailSeven"
                    className={classes.textField2}
                    multiline={true}
                    label="detail of topic Seven"
                    onChange={handleChange}
                  />
                  <div className={classes.imageInput}>
                    <InputLabel>image for Seventh topic</InputLabel>
                    <FileBase
                      type="file"
                      multiple={true}
                      onDone={getFile7.bind(this)}
                    />
                  </div>
                  {/* ----------------------------------------------- */}
                </Paper>
                <Button
                  className={classes.btn}
                  fullWidth
                  variant="contained"
                  color="primary"
                  type="submit"
                >
                  Submit
                </Button>
              </form>
            </Paper>
          </Container>
        </main>
      </ThemeProvider>
    </div>
  );
};

export default CreateData;
