import mongoose from "mongoose";

const topicSchema = mongoose.Schema({
  subCode: {
    type: Number,
    required: true,
  },
  chNo: {
    type: Number,
    required: true,
  },
  topic: {
    type: Number,
    required: true,
  },
  heading: {
    //topicName
    type: String,
    required: true,
  },
  shortSummary: {
    type: String,
    required: true,
  },
  // --------------------------topic heading and data---------------------
  headingOneTopic: {
    type: String,
  },
  inDetailOneTopic: {
    //first inDetail
    type: String,
  },
  image1: {
    type: [],
  },
  // ---------------------------two-----------------------------
  headingTwoTopic: {
    type: String,
  },
  inDetailTwoTopic: {
    type: String,
  },
  image2: {
    type: [],
  },
  // ------------------------------three-------------------------
  headingThreeTopic: {
    type: String,
  },
  inDetailThreeTopic: {
    type: String,
  },
  image3: {
    type: [],
  },
  // -----------------------------four------------------------
  headingFourTopic: {
    type: String,
  },
  inDetailFourTopic: {
    type: String,
  },
  image4: {
    type: [],
  },
  // -----------------------------five--------------------------
  headingFiveTopic: {
    type: String,
  },
  inDetailFiveTopic: {
    type: String,
  },
  image5: {
    type: [],
  },
  // ------------------------------six---------------------------
  headingSixTopic: {
    type: String,
  },
  inDetailSixTopic: {
    type: String,
  },
  image6: {
    type: [],
  },
  // ------------------------------seven----------------------------
  headingSevenTopic: {
    type: String,
  },
  inDetailSevenTopic: {
    type: String,
  },
  image7: {
    type: [],
  },
});

const TopicData = mongoose.model("TopicData", topicSchema);
export default TopicData;
