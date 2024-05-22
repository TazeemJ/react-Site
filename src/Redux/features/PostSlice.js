import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

let initialState = {
  loader: false,
  data: null,
  error: null,
};
const postSlice = createSlice({
  name: "PostSlice",
  initialState,
  reducers: {
    setLoader: (state, action) => {
      state.loader = action.payload;
    },
    setData: (state, action) => {
      console.log(action.payload);
      state.data = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});
export const { setPost, setLoader, setError, setData } = postSlice.actions;
export default postSlice.reducer;

export const getPost = () => {
  return async (dispatch) => {
    dispatch(setLoader(true));
    try {
      let { data } = await axios({
        method: "get",
        url: "https://jsonplaceholder.typicode.com/posts",
      });
      dispatch(setData(data));
      dispatch(setLoader(false));
    } catch (error) {
      dispatch(setError(error));
    }
  };
};
