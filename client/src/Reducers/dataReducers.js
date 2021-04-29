const dataReducer = (data = [], action) => {
  switch (action.type) {
    case "GET_DATA":
      return action.payload;

    default:
      return data;
  }
};

export default dataReducer;
