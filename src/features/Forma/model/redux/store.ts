import { configureStore } from "@reduxjs/toolkit";
import form from "./reducers/formSlice";

const store = configureStore({
  reducer: {
    form: form,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
