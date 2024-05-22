import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loader: {
    isLoading: false,
    progress: 0,
  },
  data: null,
  error: null,
};

const ProductSlice = createSlice({
  name: "ProductSlice",
  initialState,
  reducers: {
    setLoader: (state, action) => {
      state.loader.isLoading = action.payload;
    },
    setLoaderProgress: (state, action) => {
      state.loader.progress = action.payload;
    },
    setData: (state, action) => {
      state.data = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { setLoader, setLoaderProgress, setData, setError } =
  ProductSlice.actions;
export default ProductSlice.reducer;

export const getProduct = () => {
  return async (dispatch) => {
    try {
      dispatch(setLoader(true)); // Start loading
      const { data } = await axios({
        method: "get",
        url: "https://api.escuelajs.co/api/v1/products",
        // Add onDownloadProgress to track download progress
        onDownloadProgress: (progressEvent) => {
          // Calculate progress percentage
          const progress = Math.round(
            (progressEvent.loaded / progressEvent.total) * 100
          );
          // Dispatch action to update loader progress
          dispatch(setLoaderProgress(progress));
        },
      });
      dispatch(setData(data));
      dispatch(setLoader(false)); // Stop loading
    } catch (error) {
      dispatch(setError(error.message));
    }
  };
};
