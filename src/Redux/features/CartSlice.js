import { createSlice, nanoid } from "@reduxjs/toolkit";
let initialState =
  JSON.parse(localStorage.getItem("CART")) == null
    ? []
    : JSON.parse(localStorage.getItem("CART"));
const SliceForCart = createSlice({
  name: "CART",
  initialState,
  reducers: {
    addCart: (state, action) => {
      state.push(action.payload);
      localStorage.setItem("CART", JSON.stringify(state));
    },
    removeCart: (state, action) => {
      const GetID = action.payload;
      console.log(action.payload);
      const filteredState = state.filter((item) => item.id !== GetID);
      localStorage.setItem("CART", JSON.stringify(filteredState));
      return filteredState;
    },
    RemoveAllData: (state) => {
      localStorage.removeItem("CART");
      return (state = []);
    },
  },
});

export const { addCart, removeCart, RemoveAllData } = SliceForCart.actions;
export default SliceForCart.reducer;
