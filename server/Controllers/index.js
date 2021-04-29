import TopicData from "../Models/TopicModel.js";

export const getRequest = (req, res) => {
  res.send("hy there listning");
};

export const createData = async (req, res) => {
  try {
    const data = req.body;
    const save = {
      image1: data.image1,
      image2: data.image2,
      image3: data.image3,
      image4: data.image4,
      image5: data.image5,
      image6: data.image6,
      image7: data.image7,
      subCode: data.subCode,
      chNo: data.chNo,
      topic: data.topic,
      heading: data.heading,
      shortSummary: data.shortSummary,
      headingOneTopic: data.topicsHeadingOne,
      inDetailOneTopic: data.topicsDetailOne,
      headingTwoTopic: data.topicsHeadingTwo,
      inDetailTwoTopic: data.topicsDetailTwo,
      headingThreeTopic: data.topicsHeadingThree,
      inDetailThreeTopic: data.topicsDetailThree,
      headingFourTopic: data.topicsHeadingFour,
      inDetailFourTopic: data.topicsDetailFour,
      headingFiveTopic: data.topicsHeadingFive,
      inDetailFiveTopic: data.topicsDetailFive,
      headingSixTopic: data.topicsHeadingSix,
      inDetailSixTopic: data.topicsDetailSix,
      headingSevenTopic: data.topicsHeadingSeven,
      inDetailSevenTopic: data.topicsDetailSeven,
    };
    console.log("data:", data);
    // console.log("save:", save);
    const saveData = await TopicData.create(save);
    res.status(200).send(saveData);
  } catch (error) {
    console.log("error occoured at controllers (createData)", error.message);
    res.status(400).send(error);
  }
};

export const getData = async (req, res) => {
  try {
    const { chapterNo, subCode } = req.params;
    // console.log(chapterNo, subCode);
    const search = await TopicData.find({ chNo: chapterNo, subCode });
    res.status(200).send(search);
  } catch (error) {
    console.log("error occoured at controllers (getData)", error.message);
    res.status(400).send(error);
  }
};
