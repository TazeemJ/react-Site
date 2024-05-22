import { createSlice, nanoid } from "@reduxjs/toolkit";
import { json } from "react-router-dom";

let initialState = {
  user:
    JSON.parse(localStorage.getItem("UserAuth")) != null
      ? JSON.parse(localStorage.getItem("UserAuth"))
      : null,
};
const SliceForAuth = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginAuth: (state, action) => {
      state.user = action.payload;
      localStorage.setItem("UserAuth", JSON.stringify(action.payload));
    },
    logoutAuth: (state) => {
      state.user = null;
      localStorage.setItem("UserAuth", null);
    },
  },
});

export const { loginAuth, logoutAuth } = SliceForAuth.actions;
export default SliceForAuth.reducer;
