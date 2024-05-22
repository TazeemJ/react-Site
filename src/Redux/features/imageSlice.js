import { createSlice, nanoid } from "@reduxjs/toolkit";
let initialState =
  JSON.parse(localStorage.getItem("ImagesData")) == null
    ? []
    : JSON.parse(localStorage.getItem("ImagesData"));
const SliceForImage = createSlice({
  name: "Images",
  initialState,
  reducers: {
    addImage: (state, action) => {
      let ImageData = {
        uniqueId: nanoid(),
        url: action.payload,
      };
      state.push(ImageData);
      localStorage.setItem("ImagesData", JSON.stringify(state));
    },
    removeImage: (state, action) => {
      const GetID = action.payload;
      const filteredState = state.filter((item) => item.uniqueId !== GetID);
      localStorage.setItem("ImagesData", JSON.stringify(filteredState));
      return filteredState;
    },
  },
});

export const { addImage, removeImage } = SliceForImage.actions;
export default SliceForImage.reducer;
