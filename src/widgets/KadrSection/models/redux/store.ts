import { configureStore } from "@reduxjs/toolkit";
import gallery from "./reducers/gallerySlice";

export const store = configureStore({
  reducer: {
    gallery: gallery,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
