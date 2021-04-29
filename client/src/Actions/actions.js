import * as api from "../Api/api";

export const get_data = (subCode, chapterNo) => async (dispatch) => {
  try {
    const { data } = await api.getData(subCode, chapterNo);
    // console.log("inside actions", data);
    dispatch({ type: "GET_DATA", payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const create_data = (formData) => async (dispatch) => {
  try {
    console.log("data received from frontend to actions", formData);
    const { data } = await api.createData(formData);
    console.log("data receive from backend to actions");
    dispatch({ type: "CREATE_DATA", payload: data });
  } catch (error) {
    console.log(error);
  }
};
