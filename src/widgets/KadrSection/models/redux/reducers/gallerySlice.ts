import { createSlice } from "@reduxjs/toolkit";
import { kadrs } from "shared/text/kadr";

interface GalleryState {
  photos: PhotosArray[];
  count: number;
}

interface PhotosArray {
  img: string;
  alt: string;
}

const initialState: GalleryState = {
  photos: kadrs,
  count: 5,
};

const gallerySlice = createSlice({
  name: "gallery",
  initialState,
  reducers: {
    loadMore: (state) => {
      state.count += 4;
    },
  },
});

export const { loadMore } = gallerySlice.actions;
export default gallerySlice.reducer;
